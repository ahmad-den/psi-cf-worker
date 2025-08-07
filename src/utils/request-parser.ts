import { DEFAULT_STRATEGY } from "../config/constants"
import type { RequestParams } from "../types/psi"

export async function parseRequestParams(request: Request): Promise<RequestParams | null> {
  const url = new URL(request.url)
  const targetUrl = url.searchParams.get("url")

  if (!targetUrl) {
    return null
  }

  // Validate URL format
  try {
    new URL(targetUrl)
  } catch {
    return null
  }

  const strategy = (url.searchParams.get("strategy") as "mobile" | "desktop") || DEFAULT_STRATEGY

  // Force performance category only - ignore user input for categories
  const categories = ["performance"]

  return {
    url: targetUrl,
    strategy,
    category: categories,
    // Remove preferInsights - not needed since Google provides both automatically
  }
}
