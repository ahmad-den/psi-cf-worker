import type { RequestParams } from "../types/psi"

export function generateCacheKey(params: RequestParams): string {
  const keyData = {
    url: params.url,
    strategy: params.strategy || "mobile",
    category: (params.category || ["performance"]).sort().join(","),
  }

  return `psi:${btoa(JSON.stringify(keyData))}`
}
