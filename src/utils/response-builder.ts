interface SuccessResponseOptions {
  bypassCache: boolean
  cacheTtl: number
}

export function createErrorResponse(message: string, status: number, errorType?: string): Response {
  return new Response(
    JSON.stringify({
      status: "failed",
      message: message,
      error: {
        type: errorType || "api_error",
        code: status,
        timestamp: new Date().toISOString(),
      },
      data: null,
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json",
        ...getCORSHeaders(),
      },
    },
  )
}

export function createSuccessResponse(data: any, options: SuccessResponseOptions): Response {
  // The data is already in the exact format requested, no additional processing needed
  const responseData = {
    ...data,
    fromCache: data.fromCache || false,
  }

  return new Response(
    JSON.stringify({
      status: "success",
      message: data.fromCache
        ? "PageSpeed Insights data retrieved from cache successfully"
        : "PageSpeed Insights data fetched successfully",
      data: responseData,
      meta: {
        cached: data.fromCache || false,
        cacheTtl: options.cacheTtl,
        timestamp: new Date().toISOString(),
        bypassCache: options.bypassCache,
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": options.bypassCache ? "no-cache" : `public, max-age=${options.cacheTtl}`,
        "X-Cache-Status": data.fromCache ? "HIT" : "MISS",
        "X-Cache-TTL": options.cacheTtl.toString(),
        ...getCORSHeaders(),
      },
    },
  )
}

export function createWaitResponse(message: string, estimatedWaitTime?: number): Response {
  return new Response(
    JSON.stringify({
      status: "wait",
      message: message,
      meta: {
        estimatedWaitTime: estimatedWaitTime || null,
        timestamp: new Date().toISOString(),
        retryAfter: estimatedWaitTime ? Math.ceil(estimatedWaitTime / 1000) : 30, // seconds
      },
      data: null,
    }),
    {
      status: 202, // Accepted - request is being processed
      headers: {
        "Content-Type": "application/json",
        "Retry-After": estimatedWaitTime ? Math.ceil(estimatedWaitTime / 1000).toString() : "30",
        ...getCORSHeaders(),
      },
    },
  )
}

function getCORSHeaders(): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, x-bypass-cache",
  }
}
