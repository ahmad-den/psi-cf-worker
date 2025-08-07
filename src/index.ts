import { handleRequest } from "./handlers/request-handler"
import { handleCORS } from "./utils/cors"
import type { Env, ExecutionContext } from "./types/env"

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return handleCORS()
    }

    return handleRequest(request, env, ctx)
  },
}
