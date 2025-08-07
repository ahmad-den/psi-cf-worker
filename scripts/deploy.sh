#!/bin/bash

# Deployment script with environment validation

set -e

ENVIRONMENT=${1:-staging}

echo "🚀 Deploying PSI API Worker to $ENVIRONMENT..."

# Validate environment
if [[ "$ENVIRONMENT" != "staging" && "$ENVIRONMENT" != "production" ]]; then
    echo "❌ Invalid environment. Use 'staging' or 'production'"
    exit 1
fi

# Type check
echo "🔍 Running type check..."
npm run type-check

# Lint check
echo "🧹 Running linter..."
npm run lint

# Deploy
echo "📦 Deploying to $ENVIRONMENT..."
if [[ "$ENVIRONMENT" == "production" ]]; then
    npm run deploy:production
else
    npm run deploy:staging
fi

echo "✅ Deployment to $ENVIRONMENT completed!"

# Show deployment info
echo "🔗 Worker URL:"
wrangler deployments list --env $ENVIRONMENT --json | jq -r '.[0].url' 2>/dev/null || echo "Run 'wrangler deployments list --env $ENVIRONMENT' to see deployment details"
