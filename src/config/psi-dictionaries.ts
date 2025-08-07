// ============================================================================
// INSIGHTS DICTIONARY - Hardcoded for better management
// ============================================================================

export const INSIGHTS_DICTIONARY = {
    "cache-insight": {
      id: "cache-insight",
      title: "Cache Insight",
      category: "Caching",
      description: "Optimize caching strategies for better performance",
      priority: "medium",
      type: "insight",
      tags: ["caching", "performance"],
    },
    "cls-culprits-insight": {
      id: "cls-culprits-insight",
      title: "CLS Culprits Insight",
      category: "Layout Stability",
      description: "Identify elements causing cumulative layout shift",
      priority: "high",
      type: "insight",
      tags: ["cls", "layout", "stability"],
    },
    "document-latency-insight": {
      id: "document-latency-insight",
      title: "Document Latency Insight",
      category: "Network",
      description: "Analyze document loading latency issues",
      priority: "high",
      type: "insight",
      tags: ["network", "latency", "document"],
    },
    "dom-size-insight": {
      id: "dom-size-insight",
      title: "DOM Size Insight",
      category: "DOM",
      description: "Optimize DOM size for better performance",
      priority: "medium",
      type: "insight",
      tags: ["dom", "size", "performance"],
    },
    "duplicated-javascript-insight": {
      id: "duplicated-javascript-insight",
      title: "Duplicated JavaScript Insight",
      category: "JavaScript",
      description: "Remove duplicate JavaScript code",
      priority: "medium",
      type: "insight",
      tags: ["javascript", "duplicates", "optimization"],
    },
    "font-display-insight": {
      id: "font-display-insight",
      title: "Font Display Insight",
      category: "Fonts",
      description: "Optimize font loading and display strategies",
      priority: "low",
      type: "insight",
      tags: ["fonts", "display", "loading"],
    },
    "forced-reflow-insight": {
      id: "forced-reflow-insight",
      title: "Forced Reflow Insight",
      category: "Layout",
      description: "Eliminate forced synchronous layout reflows",
      priority: "high",
      type: "insight",
      tags: ["layout", "reflow", "performance"],
    },
    "image-delivery-insight": {
      id: "image-delivery-insight",
      title: "Image Delivery Insight",
      category: "Images",
      description: "Optimize image delivery and formats",
      priority: "high",
      type: "insight",
      tags: ["images", "delivery", "optimization"],
    },
    "interaction-to-next-paint-insight": {
      id: "interaction-to-next-paint-insight",
      title: "Interaction to Next Paint Insight",
      category: "Interactivity",
      description: "Improve interaction responsiveness (INP)",
      priority: "high",
      type: "insight",
      tags: ["inp", "interactivity", "responsiveness"],
    },
    "lcp-discovery-insight": {
      id: "lcp-discovery-insight",
      title: "LCP Discovery Insight",
      category: "LCP Optimization",
      description: "Make LCP resources discoverable earlier",
      priority: "high",
      type: "insight",
      tags: ["lcp", "discovery", "optimization"],
    },
    "lcp-phases-insight": {
      id: "lcp-phases-insight",
      title: "LCP Phases Insight",
      category: "LCP Analysis",
      description: "Analyze LCP timing phases breakdown",
      priority: "high",
      type: "insight",
      tags: ["lcp", "phases", "analysis"],
    },
    "legacy-javascript-insight": {
      id: "legacy-javascript-insight",
      title: "Legacy JavaScript Insight",
      category: "JavaScript",
      description: "Remove legacy JavaScript polyfills",
      priority: "medium",
      type: "insight",
      tags: ["javascript", "legacy", "polyfills"],
    },
    "network-dependency-tree-insight": {
      id: "network-dependency-tree-insight",
      title: "Network Dependency Tree Insight",
      category: "Network",
      description: "Optimize network resource dependency chains",
      priority: "medium",
      type: "insight",
      tags: ["network", "dependencies", "optimization"],
    },
    "render-blocking-insight": {
      id: "render-blocking-insight",
      title: "Render Blocking Insight",
      category: "Rendering",
      description: "Eliminate render-blocking resources",
      priority: "high",
      type: "insight",
      tags: ["rendering", "blocking", "optimization"],
    },
    "third-parties-insight": {
      id: "third-parties-insight",
      title: "Third Parties Insight",
      category: "Third Parties",
      description: "Optimize third-party script impact",
      priority: "medium",
      type: "insight",
      tags: ["third-party", "scripts", "optimization"],
    },
    "viewport-insight": {
      id: "viewport-insight",
      title: "Viewport Insight",
      category: "Viewport",
      description: "Optimize viewport configuration",
      priority: "low",
      type: "insight",
      tags: ["viewport", "mobile", "configuration"],
    },
  } as const
  
  // ============================================================================
  // DIAGNOSTICS DICTIONARY - Hardcoded for better management
  // ============================================================================
  
  export const DIAGNOSTICS_DICTIONARY = {
    "render-blocking-resources": {
      id: "render-blocking-resources",
      title: "Eliminate render-blocking resources",
      category: "Rendering",
      description: "Remove render-blocking CSS and JavaScript",
      priority: "high",
      type: "diagnostic",
      tags: ["rendering", "blocking", "css", "javascript"],
    },
    "uses-responsive-images": {
      id: "uses-responsive-images",
      title: "Properly size images",
      category: "Images",
      description: "Serve images that are appropriately-sized",
      priority: "medium",
      type: "diagnostic",
      tags: ["images", "responsive", "sizing"],
    },
    "offscreen-images": {
      id: "offscreen-images",
      title: "Defer offscreen images",
      category: "Images",
      description: "Lazy load offscreen and hidden images",
      priority: "medium",
      type: "diagnostic",
      tags: ["images", "lazy-loading", "offscreen"],
    },
    "unminified-css": {
      id: "unminified-css",
      title: "Minify CSS",
      category: "CSS",
      description: "Minify CSS files to reduce payload sizes",
      priority: "medium",
      type: "diagnostic",
      tags: ["css", "minification", "optimization"],
    },
    "unminified-javascript": {
      id: "unminified-javascript",
      title: "Minify JavaScript",
      category: "JavaScript",
      description: "Minify JavaScript files to reduce payload sizes",
      priority: "medium",
      type: "diagnostic",
      tags: ["javascript", "minification", "optimization"],
    },
    "unused-css-rules": {
      id: "unused-css-rules",
      title: "Reduce unused CSS",
      category: "CSS",
      description: "Remove unused CSS rules to reduce payload",
      priority: "high",
      type: "diagnostic",
      tags: ["css", "unused", "optimization"],
    },
    "unused-javascript": {
      id: "unused-javascript",
      title: "Reduce unused JavaScript",
      category: "JavaScript",
      description: "Remove unused JavaScript to reduce payload",
      priority: "high",
      type: "diagnostic",
      tags: ["javascript", "unused", "optimization"],
    },
    "uses-optimized-images": {
      id: "uses-optimized-images",
      title: "Efficiently encode images",
      category: "Images",
      description: "Optimize images with better compression",
      priority: "medium",
      type: "diagnostic",
      tags: ["images", "compression", "optimization"],
    },
    "modern-image-formats": {
      id: "modern-image-formats",
      title: "Serve images in next-gen formats",
      category: "Images",
      description: "Use WebP, AVIF for better compression",
      priority: "medium",
      type: "diagnostic",
      tags: ["images", "webp", "avif", "formats"],
    },
    "uses-text-compression": {
      id: "uses-text-compression",
      title: "Enable text compression",
      category: "Network",
      description: "Enable gzip or brotli compression",
      priority: "high",
      type: "diagnostic",
      tags: ["compression", "gzip", "brotli"],
    },
    "uses-rel-preconnect": {
      id: "uses-rel-preconnect",
      title: "Preconnect to required origins",
      category: "Network",
      description: "Use rel=preconnect for critical origins",
      priority: "medium",
      type: "diagnostic",
      tags: ["preconnect", "network", "optimization"],
    },
    "server-response-time": {
      id: "server-response-time",
      title: "Reduce initial server response time",
      category: "Network",
      description: "Optimize server response time (TTFB)",
      priority: "high",
      type: "diagnostic",
      tags: ["ttfb", "server", "response-time"],
    },
    redirects: {
      id: "redirects",
      title: "Avoid multiple page redirects",
      category: "Network",
      description: "Minimize redirect chains",
      priority: "medium",
      type: "diagnostic",
      tags: ["redirects", "network", "optimization"],
    },
    "efficient-animated-content": {
      id: "efficient-animated-content",
      title: "Use video formats for animated content",
      category: "Images",
      description: "Replace GIFs with video formats",
      priority: "low",
      type: "diagnostic",
      tags: ["animation", "video", "gif"],
    },
    "duplicated-javascript": {
      id: "duplicated-javascript",
      title: "Remove duplicate modules in JavaScript bundles",
      category: "JavaScript",
      description: "Eliminate duplicate JavaScript modules",
      priority: "medium",
      type: "diagnostic",
      tags: ["javascript", "duplicates", "modules"],
    },
    "legacy-javascript": {
      id: "legacy-javascript",
      title: "Avoid serving legacy JavaScript to modern browsers",
      category: "JavaScript",
      description: "Remove unnecessary polyfills",
      priority: "medium",
      type: "diagnostic",
      tags: ["javascript", "legacy", "polyfills"],
    },
    "prioritize-lcp-image": {
      id: "prioritize-lcp-image",
      title: "Preload Largest Contentful Paint image",
      category: "LCP",
      description: "Preload the LCP image with fetchpriority=high",
      priority: "high",
      type: "diagnostic",
      tags: ["lcp", "preload", "images"],
    },
    "total-byte-weight": {
      id: "total-byte-weight",
      title: "Avoid enormous network payloads",
      category: "Network",
      description: "Reduce total network payload size",
      priority: "medium",
      type: "diagnostic",
      tags: ["payload", "network", "size"],
    },
    "uses-long-cache-ttl": {
      id: "uses-long-cache-ttl",
      title: "Serve static assets with an efficient cache policy",
      category: "Caching",
      description: "Use long cache TTL for static assets",
      priority: "medium",
      type: "diagnostic",
      tags: ["caching", "ttl", "static-assets"],
    },
    "dom-size": {
      id: "dom-size",
      title: "Avoid an excessive DOM size",
      category: "DOM",
      description: "Reduce DOM complexity and size",
      priority: "medium",
      type: "diagnostic",
      tags: ["dom", "size", "complexity"],
    },
    "critical-request-chains": {
      id: "critical-request-chains",
      title: "Minimize critical request depth",
      category: "Network",
      description: "Reduce critical resource dependency chains",
      priority: "medium",
      type: "diagnostic",
      tags: ["critical-path", "requests", "dependencies"],
    },
    "user-timings": {
      id: "user-timings",
      title: "User Timing marks and measures",
      category: "Performance",
      description: "Custom performance timing information",
      priority: "low",
      type: "diagnostic",
      tags: ["timing", "performance", "custom"],
    },
    "bootup-time": {
      id: "bootup-time",
      title: "Reduce JavaScript execution time",
      category: "JavaScript",
      description: "Minimize main thread JavaScript execution",
      priority: "high",
      type: "diagnostic",
      tags: ["javascript", "execution", "main-thread"],
    },
    "mainthread-work-breakdown": {
      id: "mainthread-work-breakdown",
      title: "Minimize main thread work",
      category: "Performance",
      description: "Reduce main thread blocking time",
      priority: "high",
      type: "diagnostic",
      tags: ["main-thread", "blocking", "performance"],
    },
    "font-display": {
      id: "font-display",
      title: "Ensure text remains visible during webfont load",
      category: "Fonts",
      description: "Use font-display: swap for web fonts",
      priority: "medium",
      type: "diagnostic",
      tags: ["fonts", "display", "loading"],
    },
    "third-party-summary": {
      id: "third-party-summary",
      title: "Minimize third-party usage",
      category: "Third Parties",
      description: "Reduce impact of third-party code",
      priority: "medium",
      type: "diagnostic",
      tags: ["third-party", "performance", "impact"],
    },
    "third-party-facades": {
      id: "third-party-facades",
      title: "Lazy load third-party resources with facades",
      category: "Third Parties",
      description: "Use facades to defer third-party loading",
      priority: "low",
      type: "diagnostic",
      tags: ["third-party", "facades", "lazy-loading"],
    },
    "largest-contentful-paint-element": {
      id: "largest-contentful-paint-element",
      title: "Largest Contentful Paint element",
      category: "LCP",
      description: "Information about the LCP element",
      priority: "high",
      type: "diagnostic",
      tags: ["lcp", "element", "analysis"],
    },
    "lcp-lazy-loaded": {
      id: "lcp-lazy-loaded",
      title: "Largest Contentful Paint image was not lazily loaded",
      category: "LCP",
      description: "Ensure LCP image is not lazy loaded",
      priority: "high",
      type: "diagnostic",
      tags: ["lcp", "lazy-loading", "images"],
    },
    "layout-shifts": {
      id: "layout-shifts",
      title: "Avoid large layout shifts",
      category: "Layout Stability",
      description: "Minimize cumulative layout shift",
      priority: "high",
      type: "diagnostic",
      tags: ["cls", "layout", "shifts"],
    },
    "uses-passive-event-listeners": {
      id: "uses-passive-event-listeners",
      title: "Use passive listeners to improve scrolling performance",
      category: "Performance",
      description: "Use passive event listeners for touch/wheel events",
      priority: "low",
      type: "diagnostic",
      tags: ["events", "passive", "scrolling"],
    },
    "no-document-write": {
      id: "no-document-write",
      title: "Avoid `document.write()`",
      category: "JavaScript",
      description: "Avoid using document.write() for better performance",
      priority: "medium",
      type: "diagnostic",
      tags: ["javascript", "document-write", "performance"],
    },
    "long-tasks": {
      id: "long-tasks",
      title: "Avoid long main-thread tasks",
      category: "Performance",
      description: "Break up long-running main thread tasks",
      priority: "high",
      type: "diagnostic",
      tags: ["main-thread", "long-tasks", "performance"],
    },
    "non-composited-animations": {
      id: "non-composited-animations",
      title: "Avoid non-composited animations",
      category: "Performance",
      description: "Use compositor-friendly CSS properties",
      priority: "medium",
      type: "diagnostic",
      tags: ["animations", "compositor", "css"],
    },
    "unsized-images": {
      id: "unsized-images",
      title: "Image elements have explicit width and height",
      category: "Images",
      description: "Set explicit dimensions to prevent layout shifts",
      priority: "medium",
      type: "diagnostic",
      tags: ["images", "dimensions", "cls"],
    },
    viewport: {
      id: "viewport",
      title: 'Has a `<meta name="viewport">` tag with `width` or `initial-scale`',
      category: "Mobile",
      description: "Configure viewport for mobile devices",
      priority: "high",
      type: "diagnostic",
      tags: ["viewport", "mobile", "responsive"],
    },
  } as const
  
  // ============================================================================
  // HELPER ARRAYS - For easier iteration
  // ============================================================================
  
  export const INSIGHTS_LIST = Object.values(INSIGHTS_DICTIONARY)
  export const DIAGNOSTICS_LIST = Object.values(DIAGNOSTICS_DICTIONARY)
  
  // ============================================================================
  // CATEGORY MAPPINGS - For easy filtering
  // ============================================================================
  
  export const INSIGHTS_BY_CATEGORY = {
    Caching: ["cache-insight"],
    "Layout Stability": ["cls-culprits-insight"],
    Network: ["document-latency-insight", "network-dependency-tree-insight"],
    DOM: ["dom-size-insight"],
    JavaScript: ["duplicated-javascript-insight", "legacy-javascript-insight"],
    Fonts: ["font-display-insight"],
    Layout: ["forced-reflow-insight"],
    Images: ["image-delivery-insight"],
    Interactivity: ["interaction-to-next-paint-insight"],
    "LCP Optimization": ["lcp-discovery-insight"],
    "LCP Analysis": ["lcp-phases-insight"],
    Rendering: ["render-blocking-insight"],
    "Third Parties": ["third-parties-insight"],
    Viewport: ["viewport-insight"],
  }
  
  export const DIAGNOSTICS_BY_CATEGORY = {
    Rendering: ["render-blocking-resources"],
    Images: [
      "uses-responsive-images",
      "offscreen-images",
      "uses-optimized-images",
      "modern-image-formats",
      "efficient-animated-content",
      "unsized-images",
    ],
    CSS: ["unminified-css", "unused-css-rules"],
    JavaScript: [
      "unminified-javascript",
      "unused-javascript",
      "duplicated-javascript",
      "legacy-javascript",
      "bootup-time",
      "no-document-write",
    ],
    Network: [
      "uses-text-compression",
      "uses-rel-preconnect",
      "server-response-time",
      "redirects",
      "total-byte-weight",
      "critical-request-chains",
    ],
    Caching: ["uses-long-cache-ttl"],
    DOM: ["dom-size"],
    Performance: [
      "user-timings",
      "mainthread-work-breakdown",
      "uses-passive-event-listeners",
      "long-tasks",
      "non-composited-animations",
    ],
    Fonts: ["font-display"],
    "Third Parties": ["third-party-summary", "third-party-facades"],
    LCP: ["prioritize-lcp-image", "largest-contentful-paint-element", "lcp-lazy-loaded"],
    "Layout Stability": ["layout-shifts"],
    Mobile: ["viewport"],
  }
  
  // ============================================================================
  // PRIORITY MAPPINGS - For easy filtering by priority
  // ============================================================================
  
  export const HIGH_PRIORITY_INSIGHTS = INSIGHTS_LIST.filter((insight) => insight.priority === "high")
  export const HIGH_PRIORITY_DIAGNOSTICS = DIAGNOSTICS_LIST.filter((diagnostic) => diagnostic.priority === "high")
  
  // ============================================================================
  // UTILITY FUNCTIONS - For easy dictionary management
  // ============================================================================
  
  export function getInsightInfo(insightId: string) {
    return INSIGHTS_DICTIONARY[insightId] || null
  }
  
  export function getDiagnosticInfo(diagnosticId: string) {
    return DIAGNOSTICS_DICTIONARY[diagnosticId] || null
  }
  
  export function getInsightsByCategory(category: string) {
    return INSIGHTS_BY_CATEGORY[category] || []
  }
  
  export function getDiagnosticsByCategory(category: string) {
    return DIAGNOSTICS_BY_CATEGORY[category] || []
  }
  
  export function getAllCategories() {
    return {
      insights: Object.keys(INSIGHTS_BY_CATEGORY),
      diagnostics: Object.keys(DIAGNOSTICS_BY_CATEGORY),
    }
  }
  