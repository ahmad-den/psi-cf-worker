import { parseRequestParams } from "../utils/request-parser"
import { validateTargetHeaders } from "../services/header-validator"
import { getCachedResponse, cacheResponse } from "../services/cache-service"
import { fetchPSIData } from "../services/psi-service"
import { createErrorResponse, createSuccessResponse } from "../utils/response-builder"
import { CACHE_TTL } from "../config/constants"
import type { Env } from "../types/env"
import type { ExecutionContext } from "@cloudflare/workers-types"

export async function handleRequest(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  try {
    // Validate request method
    if (request.method !== "GET") {
      return createErrorResponse("Method not allowed. Only GET requests are supported.", 405, "method_not_allowed")
    }

    // Parse and validate request parameters
    const params = await parseRequestParams(request)
    if (!params) {
      return createErrorResponse(
        "Missing or invalid URL parameter. Please provide a valid URL.",
        400,
        "invalid_parameters",
      )
    }

    // Validate target URL headers
    const isValidTarget = await validateTargetHeaders(params.url)
    if (!isValidTarget) {
      return createErrorResponse(
        "Target URL does not meet hosting requirements. URL must be hosted by BigScoots with Performance+ plan.",
        403,
        "invalid_target",
      )
    }

    // Check for bypass cache header
    const bypassCache = request.headers.get("x-bypass-cache") === "true"

    let psiData: any

    if (!bypassCache) {
      // Try to get from cache first
      psiData = await getCachedResponse(env.PSI_CACHE, params)
    }

    if (!psiData) {
      // Fetch from Google PSI API
      psiData = await fetchPSIData(params, env.GOOGLE_PSI_API_KEY)

      if (!bypassCache && psiData) {
        // Store in cache
        ctx.waitUntil(cacheResponse(env.PSI_CACHE, params, psiData))
      }
    }

    if (!psiData) {
      return createErrorResponse(
        "Failed to fetch PageSpeed Insights data. The Google PSI API may be temporarily unavailable.",
        500,
        "psi_api_error",
      )
    }

    return createSuccessResponse(psiData, {
      bypassCache,
      cacheTtl: CACHE_TTL,
    })
  } catch (error) {
    console.error("Request handler error:", error)
    return createErrorResponse("Internal server error occurred while processing your request.", 500, "internal_error")
  }
}
