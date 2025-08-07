import { TIMEOUTS } from "../config/constants"
import { isDeprecatedAudit } from "../config/deprecated-audits"
import type { RequestParams } from "../types/psi"

export async function fetchPSIData(params: RequestParams, apiKey: string): Promise<any | null> {
  try {
    const psiUrl = buildPSIUrl(params, apiKey)
    const domain = extractDomainFromUrl(params.url)
    const customUserAgent = `cwv-insights-${domain}`
    console.log("Sending User-Agent:", customUserAgent)

    const response = await fetch(psiUrl.toString(), {
      // @ts-ignore - cf property is specific to Cloudflare Workers
      headers: { // ADD this headers object
        'User-Agent': customUserAgent
      },
      cf: {
        timeout: TIMEOUTS.PSI_API,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("PSI API error:", response.status, errorText)

      // Log specific error types for better debugging
      if (response.status === 429) {
        console.error("PSI API rate limit exceeded")
      } else if (response.status === 400) {
        console.error("PSI API bad request - invalid URL or parameters")
      } else if (response.status === 403) {
        console.error("PSI API forbidden - check API key")
      }

      return null
    }

    const data = (await response.json()) as Record<string, any>

    // Validate that we got valid PSI data
    if (!data?.lighthouseResult) {
      console.error("Invalid PSI response - missing lighthouseResult")
      return null
    }

    // Process using Google's approach for audit categorization
    const processedData = processUsingGoogleApproach(data)

    return {
      ...processedData,
      fromCache: false,
      fetchTimestamp: Date.now(),
    }
  } catch (error) {
    console.error("PSI fetch error:", error)
    return null
  }
}

function buildPSIUrl(params: RequestParams, apiKey: string): URL {
  const psiUrl = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed")
  psiUrl.searchParams.set("url", params.url)
  psiUrl.searchParams.set("strategy", params.strategy || "mobile")
  psiUrl.searchParams.set("key", apiKey)
  psiUrl.searchParams.set("category", "performance")
  return psiUrl
}

function extractDomainFromUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    return urlObj.hostname.replace(/^www\./, '') // Remove www. prefix
  } catch (error) {
    console.error("Error extracting domain:", error)
    return "unknown"
  }
}

function processUsingGoogleApproach(data: any): any {
  if (!data?.lighthouseResult?.audits || !data?.lighthouseResult?.categories?.performance) {
    return data
  }

  const audits = data.lighthouseResult.audits
  const performanceCategory = data.lighthouseResult.categories.performance
  const auditRefs = performanceCategory.auditRefs || []

  // Create a map of audit ID to group using Google's approach
  const auditGroupMap = new Map<string, string>()

  auditRefs.forEach((auditRef: any) => {
    const group = auditRef.id.endsWith("-insight") ? "insights" : (auditRef.group ?? "diagnostics")
    auditGroupMap.set(auditRef.id, group)
  })

  // Get all possible groups dynamically
  const allGroups = new Set<string>()
  auditGroupMap.forEach((group) => allGroups.add(group))

  // Ensure we always have these core groups
  allGroups.add("insights")
  allGroups.add("diagnostics")
  allGroups.add("metrics")
  allGroups.add("load-opportunities")

  // Initialize organized structure with all groups
  const organizedAudits = {
    failed: {} as Record<string, Record<string, any>>,
    warnings: {} as Record<string, Record<string, any>>,
    passed: {} as Record<string, Record<string, any>>,
  }

  // Initialize all groups for each score category
  allGroups.forEach((group) => {
    organizedAudits.failed[group] = {}
    organizedAudits.warnings[group] = {}
    organizedAudits.passed[group] = {}
  })

  // Organize audits by score and proper group classification
  for (const [auditId, audit] of Object.entries(audits)) {
    // Skip deprecated audits
    if (isDeprecatedAudit(auditId)) {
      continue
    }
    
    if (audit && typeof audit === "object" && "score" in audit) {
      const score = audit.score

      // Get the proper group using Google's approach
      let group = auditGroupMap.get(auditId)

      // Fallback for audits not in auditRefs (shouldn't happen but just in case)
      if (!group) {
        group = auditId.endsWith("-insight") ? "insights" : "diagnostics"
      }

      // Categorize by score
      if (score === 0) {
        organizedAudits.failed[group][auditId] = audit
      } else if (score === 0.5) {
        organizedAudits.warnings[group][auditId] = audit
      } else if (score === 1) {
        organizedAudits.passed[group][auditId] = audit
      }
      // Ignore other scores (like 0.3, 0.7, etc.)
    }
  }

  // Extract Core Web Vitals metrics (LCP and CLS) from metrics group
  const coreMetrics = extractCoreMetrics(audits, auditGroupMap)

  // Return the original structure but with properly organized audits and core metrics
  return {
    ...data,
    metrics: coreMetrics, // Add top-level metrics section
    lighthouseResult: {
      ...data.lighthouseResult,
      audits: organizedAudits,
    },
    fromCache: false,
    fetchTimestamp: Date.now(),
  }
}

function extractCoreMetrics(audits: Record<string, any>, auditGroupMap: Map<string, string>) {
  const coreMetricIds = {
    LCP: "largest-contentful-paint",
    CLS: "cumulative-layout-shift",
  }

  const extractedMetrics: Record<string, any> = {}

  Object.entries(coreMetricIds).forEach(([metricName, auditId]) => {
    // Skip if this is a deprecated audit (though core metrics shouldn't be deprecated)
    if (isDeprecatedAudit(auditId)) {
      return
    }
    
    // Check if this audit is in the metrics group
    const group = auditGroupMap.get(auditId)
    if (group === "metrics" && audits[auditId]) {
      const audit = audits[auditId]
      
      extractedMetrics[metricName] = {
        id: audit.id,
        title: audit.title,
        description: audit.description,
        score: audit.score,
        scoreDisplayMode: audit.scoreDisplayMode,
        numericValue: audit.numericValue,
        numericUnit: audit.numericUnit,
        displayValue: audit.displayValue,
        // Add score category for easy interpretation
        category: getScoreCategory(audit.score),
        // Add performance impact
        weight: getMetricWeight(auditId),
        // Add threshold information
        thresholds: getMetricThresholds(auditId),
      }
    }
  })

  return extractedMetrics
}

function getScoreCategory(score: number | null): string {
  if (score === null) return "unknown"
  if (score >= 0.9) return "good"
  if (score >= 0.5) return "needs-improvement"
  return "poor"
}

function getMetricWeight(auditId: string): number {
  // Weights based on Google's Core Web Vitals importance
  const weights = {
    "largest-contentful-paint": 25, // LCP has 25% weight
    "cumulative-layout-shift": 15,  // CLS has 15% weight
  }
  return weights[auditId] || 0
}

function getMetricThresholds(auditId: string): { good: number; poor: number; unit: string } {
  // Official Core Web Vitals thresholds
  const thresholds = {
    "largest-contentful-paint": {
      good: 2500,    // <= 2.5s is good
      poor: 4000,    // > 4s is poor
      unit: "ms"
    },
    "cumulative-layout-shift": {
      good: 0.1,     // <= 0.1 is good  
      poor: 0.25,    // > 0.25 is poor
      unit: "unitless"
    },
  }
  return thresholds[auditId] || { good: 0, poor: 0, unit: "unknown" }
}
