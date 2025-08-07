export function handleCORS(): Response {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-bypass-cache",
      "Access-Control-Max-Age": "86400",
    },
  })
}
