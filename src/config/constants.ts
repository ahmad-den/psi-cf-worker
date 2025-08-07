export const CACHE_TTL = 1000 * 60 // 15 minutes in seconds

export const REQUIRED_HEADERS = {
  "x-hosted-by": "BigScoots",
  "x-bigscoots-cache-plan": "Performance+",
} as const

export const DEFAULT_STRATEGY = "mobile" as const
export const DEFAULT_CATEGORIES = ["performance"] as const

export const TIMEOUTS = {
  HEADER_VALIDATION: 10000, // 10 seconds
  PSI_API: 30000, // 30 seconds
} as const

export const CACHE_SETTINGS = {
  HEADER_VALIDATION_TTL: 300, // 5 minutes
} as const
