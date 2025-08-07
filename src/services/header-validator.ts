import { REQUIRED_HEADERS, TIMEOUTS, CACHE_SETTINGS } from "../config/constants"

export async function validateTargetHeaders(targetUrl: string): Promise<boolean> {
  try {
    const response = await fetch(targetUrl, {
      method: "HEAD",
      // @ts-ignore - cf property is specific to Cloudflare Workers
      cf: {
        timeout: TIMEOUTS.HEADER_VALIDATION,
        cacheTtl: CACHE_SETTINGS.HEADER_VALIDATION_TTL,
      },
    })

    for (const [headerName, expectedValue] of Object.entries(REQUIRED_HEADERS)) {
      const headerValue = response.headers.get(headerName)
      if (headerValue !== expectedValue) {
        console.log(`Header validation failed: ${headerName} = ${headerValue}, expected: ${expectedValue}`)
        return false
      }
    }

    return true
  } catch (error) {
    console.error("Header validation error:", error)
    return false
  }
}
