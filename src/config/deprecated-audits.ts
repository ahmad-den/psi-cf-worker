/**
 * Deprecated audits that should be filtered out from the API response
 * These audits have been replaced by new insights in Google's PSI update
 */
export const DEPRECATED_AUDITS = new Set([
  "critical-request-chains",
  "dom-size", 
  "duplicated-javascript",
  "efficient-animated-content",
  "font-display",
  "largest-contentful-paint-element",
  "layout-shifts",
  "lcp-lazy-loaded",
  "modern-image-formats",
  "non-composited-animations",
  "prioritize-lcp-image",
  "redirects",
  "render-blocking-resources",
  "server-response-time",
  "third-party-summary",
  "unsized-images",
  "uses-long-cache-ttl",
  "uses-optimized-images",
  "uses-responsive-images",
  "uses-text-compression",
  "viewport",
  "work-during-interaction"
])

/**
 * Check if an audit ID should be filtered out
 */
export function isDeprecatedAudit(auditId: string): boolean {
  return DEPRECATED_AUDITS.has(auditId)
}