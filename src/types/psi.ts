export interface PSIResponse {
  data: any
  timestamp: number
  ttl: number
}

export interface RequestParams {
  url: string
  strategy?: "mobile" | "desktop"
  category?: string[]
}

export interface SimplifiedPSIResponse {
  // Raw Google PSI data structure
  [key: string]: any
  fromCache: boolean
  fetchTimestamp: number
}

export interface CoreMetric {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: string
  numericValue?: number
  numericUnit?: string
  displayValue?: string
  category: "good" | "needs-improvement" | "poor" | "unknown"
  weight: number
  thresholds: {
    good: number
    poor: number
    unit: string
  }
}

export interface CoreMetrics {
  LCP?: CoreMetric
  CLS?: CoreMetric
}

export interface OrganizedAudits {
  failed: {
    insights: Record<string, PSIAudit>
    diagnostics: Record<string, PSIAudit>
    metrics: Record<string, PSIAudit>
    "load-opportunities": Record<string, PSIAudit>
    [key: string]: Record<string, PSIAudit> // Allow for other groups
  }
  warnings: {
    insights: Record<string, PSIAudit>
    diagnostics: Record<string, PSIAudit>
    metrics: Record<string, PSIAudit>
    "load-opportunities": Record<string, PSIAudit>
    [key: string]: Record<string, PSIAudit> // Allow for other groups
  }
  passed: {
    insights: Record<string, PSIAudit>
    diagnostics: Record<string, PSIAudit>
    metrics: Record<string, PSIAudit>
    "load-opportunities": Record<string, PSIAudit>
    [key: string]: Record<string, PSIAudit> // Allow for other groups
  }
}

export interface FilteredPSIResult {
  id: string
  requestedUrl: string
  finalUrl: string
  fetchTime: string
  lighthouseVersion: string
  userAgent: string
  environment: {
    networkUserAgent: string
    hostUserAgent: string
    benchmarkIndex: number
  }
  runWarnings: string[]
  performance: {
    score: number
    scoreDisplayMode: string
    title: string
    description: string
    auditRefs: Array<{
      id: string
      weight: number
      group?: string
    }>
  }
  metrics: CoreMetrics // New top-level metrics section
  audits: OrganizedAudits
  loadingExperience?: {
    id: string
    metrics: Record<string, PSIMetrics>
    overall_category: string
  }
  originLoadingExperience?: {
    id: string
    metrics: Record<string, PSIMetrics>
    overall_category: string
  }
  analysisUTCTimestamp: string
}

export interface PSIMetrics {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: string
  numericValue?: number
  numericUnit?: string
  displayValue?: string
  category?: string
  percentile?: number
}

export interface PSIAudit {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: string
  explanation?: string
  errorMessage?: string
  warnings?: any[]
  details?: {
    type: string
    headings?: Array<{
      key: string
      itemType: string
      text: string
    }>
    items?: any[]
    summary?: any
    debugData?: any
  }
  numericValue?: number
  numericUnit?: string
  displayValue?: string
}

export interface PSIInsight {
  id: string
  title: string
  description: string
  impact: "high" | "medium" | "low"
  recommendation: string
  savings?: {
    bytes?: number
    ms?: number
    score?: number
  }
  priority: "high" | "medium" | "low"
}

export interface InsightsResult {
  critical: PSIInsight[]
  opportunities: PSIInsight[]
  diagnostics: PSIInsight[]
}

// Additional types for Google's approach
export interface AuditRef {
  id: string
  weight: number
  group?: string
}

export interface PerformanceCategory {
  id: string
  title: string
  description: string
  score: number
  manualDescription: string
  auditRefs: AuditRef[]
}
