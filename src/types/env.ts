import type { KVNamespace } from "@cloudflare/workers-types"

export interface Env {
  PSI_CACHE: KVNamespace
  GOOGLE_PSI_API_KEY: string
  ENVIRONMENT?: string
}
