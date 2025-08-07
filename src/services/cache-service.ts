import { CACHE_TTL } from "../config/constants"
import { generateCacheKey } from "../utils/cache-key-generator"
import type { PSIResponse, RequestParams } from "../types/psi"
import type { KVNamespace } from "workers-kv" // Declare KVNamespace

export async function getCachedResponse(kv: KVNamespace, params: RequestParams): Promise<any | null> {
  try {
    const cacheKey = generateCacheKey(params)
    const cached = (await kv.get(cacheKey, "json")) as PSIResponse | null

    if (!cached) {
      return null
    }

    // Check if cache is still valid
    const now = Date.now()
    if (now - cached.timestamp > cached.ttl * 1000) {
      // Cache expired, delete it
      await kv.delete(cacheKey)
      return null
    }

    return {
      ...cached.data,
      fromCache: true,
      cacheTimestamp: cached.timestamp,
    }
  } catch (error) {
    console.error("Cache retrieval error:", error)
    return null
  }
}

export async function cacheResponse(kv: KVNamespace, params: RequestParams, data: any): Promise<void> {
  try {
    const cacheKey = generateCacheKey(params)
    const cacheData: PSIResponse = {
      data,
      timestamp: Date.now(),
      ttl: CACHE_TTL,
    }

    await kv.put(cacheKey, JSON.stringify(cacheData), {
      expirationTtl: CACHE_TTL,
    })
  } catch (error) {
    console.error("Cache storage error:", error)
  }
}
