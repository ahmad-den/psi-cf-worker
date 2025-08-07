export interface PSIMetrics {
  id: string
  title: string
  description: string
  score: number | null
  scoreDisplayMode: string
  numericValue?: number
  numericUnit?: string
  displayValue?: string
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
  details?: any
}

export interface PSIResult {
  captchaResult: string
  kind: string
  id: string
  loadingExperience?: {
    id: string
    metrics: Record<string, PSIMetrics>
    overall_category: string
    initial_url: string
  }
  originLoadingExperience?: {
    id: string
    metrics: Record<string, PSIMetrics>
    overall_category: string
    initial_url: string
  }
  lighthouseResult: {
    requestedUrl: string
    finalUrl: string
    lighthouseVersion: string
    userAgent: string
    fetchTime: string
    environment: {
      networkUserAgent: string
      hostUserAgent: string
      benchmarkIndex: number
    }
    runWarnings: string[]
    configSettings: any
    audits: Record<string, PSIAudit>
    categories: Record<
      string,
      {
        id: string
        title: string
        description: string
        score: number
        manualDescription: string
        auditRefs: Array<{
          id: string
          weight: number
          group?: string
        }>
      }
    >
    categoryGroups: any
    timing: {
      total: number
    }
    i18n: any
  }
  analysisUTCTimestamp: string
}
