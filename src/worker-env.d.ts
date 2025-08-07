// Global type declarations for Cloudflare Workers
declare global {
  const ENVIRONMENT: string
}

// Extend the global fetch to include Cloudflare-specific options
declare global {
  interface RequestInit {
    cf?: {
      timeout?: number
      cacheTtl?: number
      cacheEverything?: boolean
      [key: string]: any
    }
  }
}

export {}
