import { describe, it, expect, beforeEach, vi } from "vitest"
import { getCachedResponse, cacheResponse } from "../src/services/cache-service"
import type { RequestParams } from "../src/types/psi"

// Mock KV namespace
const mockKV = {
  get: vi.fn(),
  put: vi.fn(),
  delete: vi.fn(),
}

describe("Cache Service", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const mockParams: RequestParams = {
    url: "https://example.com",
    strategy: "mobile",
    category: ["performance"],
  }

  describe("getCachedResponse", () => {
    it("should return null when no cache exists", async () => {
      mockKV.get.mockResolvedValue(null)

      const result = await getCachedResponse(mockKV as any, mockParams)

      expect(result).toBeNull()
    })

    it("should return cached data when valid cache exists", async () => {
      const cachedData = {
        data: { score: 95 },
        timestamp: Date.now() - 5000, // 5 seconds ago
        ttl: 900, // 15 minutes
      }

      mockKV.get.mockResolvedValue(cachedData)

      const result = await getCachedResponse(mockKV as any, mockParams)

      expect(result).toEqual({
        score: 95,
        fromCache: true,
        cacheTimestamp: cachedData.timestamp,
      })
    })

    it("should delete and return null for expired cache", async () => {
      const expiredData = {
        data: { score: 95 },
        timestamp: Date.now() - 1000000, // Very old
        ttl: 900,
      }

      mockKV.get.mockResolvedValue(expiredData)

      const result = await getCachedResponse(mockKV as any, mockParams)

      expect(result).toBeNull()
      expect(mockKV.delete).toHaveBeenCalled()
    })
  })

  describe("cacheResponse", () => {
    it("should store data in cache with correct format", async () => {
      const testData = { score: 95 }

      await cacheResponse(mockKV as any, mockParams, testData)

      expect(mockKV.put).toHaveBeenCalledWith(expect.any(String), expect.stringContaining('"data":{"score":95}'), {
        expirationTtl: 900,
      })
    })
  })
})
