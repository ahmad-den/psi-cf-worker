# Google PageSpeed Insights API Worker - Modular Architecture

A production-ready Cloudflare Worker that proxies Google PageSpeed Insights API with intelligent caching and header validation. Built with a modular architecture for maintainability and scalability.

## 🏗️ Architecture

\`\`\`
src/
├── index.ts                    # Main entry point
├── types/
│   ├── env.ts                 # Environment interface
│   └── psi.ts                 # PSI-related types
├── config/
│   └── constants.ts           # Application constants
├── handlers/
│   └── request-handler.ts     # Main request handler
├── services/
│   ├── cache-service.ts       # KV cache operations
│   ├── header-validator.ts    # Header validation service
│   └── psi-service.ts         # Google PSI API service
└── utils/
    ├── cache-key-generator.ts # Cache key generation
    ├── cors.ts               # CORS handling
    ├── request-parser.ts     # Request parsing utilities
    └── response-builder.ts   # Response building utilities
\`\`\`

## ✨ Features

- **🔒 Header Validation**: Only processes URLs with required BigScoots headers
- **⚡ Intelligent Caching**: 15-minute TTL using Cloudflare KV
- **🚫 Cache Bypass**: Use `x-bypass-cache: true` header to skip cache
- **🌐 CORS Support**: Full CORS support for web applications
- **🛡️ Error Handling**: Comprehensive error handling and logging
- **🏭 Production Ready**: Multi-environment support with proper TypeScript
- **📦 Modular Design**: Clean separation of concerns for maintainability

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Cloudflare account
- Google PageSpeed Insights API key

### Setup

1. **Clone and install:**
   \`\`\`bash
   git clone <repository>
   cd psi-api-worker
   npm install
   \`\`\`

2. **Run setup script:**
   \`\`\`bash
   chmod +x scripts/setup.sh
   ./scripts/setup.sh
   \`\`\`

3. **Update wrangler.toml** with your KV namespace IDs (provided by setup script)

4. **Set API keys:**
   \`\`\`bash
   # Development
   npm run secret:set
   
   # Staging
   npm run secret:set:staging
   
   # Production
   npm run secret:set:production
   \`\`\`

5. **Deploy:**
   \`\`\`bash
   # Deploy to staging
   npm run deploy:staging
   
   # Deploy to production
   npm run deploy:production
   \`\`\`

## 📖 API Usage

### Basic Request
\`\`\`bash
curl "https://your-worker.workers.dev/?url=https://example.com"
\`\`\`

### Advanced Usage
\`\`\`bash
# Desktop strategy with multiple categories
curl "https://your-worker.workers.dev/?url=https://example.com&strategy=desktop&category=performance,accessibility,seo"

# Bypass cache
curl -H "x-bypass-cache: true" "https://your-worker.workers.dev/?url=https://example.com"
\`\`\`

### Parameters
- `url` (required): The URL to analyze
- `strategy` (optional): `mobile` or `desktop` (default: `mobile`)
- `category` (optional): Comma-separated categories (`performance`, `accessibility`, `best-practices`, `seo`, `pwa`)

### Headers
- `x-bypass-cache: true`: Skip cache and fetch fresh data
- Response includes `X-Cache-Status` (`HIT`/`MISS`) and `X-Cache-TTL`

## 🔧 Development

### Available Scripts
\`\`\`bash
npm run dev              # Start development server
npm run deploy:staging   # Deploy to staging
npm run deploy:production # Deploy to production
npm run tail            # View development logs
npm run tail:staging    # View staging logs
npm run tail:production # View production logs
npm run test            # Run tests
npm run lint            # Run linter
npm run type-check      # TypeScript type checking
\`\`\`

### Environment Management
The project supports three environments:
- **Development**: Local development with `wrangler dev`
- **Staging**: Pre-production testing
- **Production**: Live environment

Each environment has its own:
- KV namespace
- Secrets
- Configuration

## 🛡️ Security & Validation

### Required Target Headers
Target URLs must have these headers:
- `x-hosted-by: BigScoots`
- `x-bigscoots-cache-plan: Performance+`

### Error Responses
- `400`: Missing or invalid URL parameter
- `403`: Target URL doesn't meet hosting requirements
- `405`: Method not allowed
- `500`: Internal server error

## 📊 Monitoring

### Logging
Use Wrangler tail commands to monitor:
\`\`\`bash
npm run tail:production  # Production logs
npm run tail:staging     # Staging logs
\`\`\`

### Metrics to Monitor
- Request volume and response times
- Cache hit/miss ratios
- Error rates and types
- Geographic distribution

## 🔄 Cache Strategy

- **TTL**: 15 minutes
- **Storage**: Cloudflare KV
- **Key Format**: Base64 encoded JSON of URL, strategy, and categories
- **Automatic Cleanup**: Expired entries are automatically removed

## 🚀 Deployment

Use the deployment script for validated deployments:
\`\`\`bash
chmod +x scripts/deploy.sh
./scripts/deploy.sh staging     # Deploy to staging
./scripts/deploy.sh production  # Deploy to production
\`\`\`

The script includes:
- Type checking
- Linting
- Environment validation
- Deployment status reporting

## 🤝 Contributing

1. Follow the modular architecture patterns
2. Add types for new interfaces
3. Include error handling
4. Update tests for new functionality
5. Run linting and type checking before commits

## 📝 License

MIT License - see LICENSE file for details
