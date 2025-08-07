#!/bin/bash

# Setup script for PSI API Worker

echo "🚀 Setting up PSI API Worker..."

# Check if wrangler is installed and version
if ! command -v wrangler &> /dev/null; then
    echo "📦 Installing Wrangler CLI..."
    npm install -g wrangler@latest
else
    echo "✅ Wrangler CLI found"
    wrangler --version
fi

# Check if user is logged in
echo "🔐 Checking Cloudflare authentication..."
if ! wrangler whoami &> /dev/null; then
    echo "Please login to Cloudflare:"
    wrangler login
else
    echo "✅ Already authenticated with Cloudflare"
    wrangler whoami
fi

# Clean install with legacy peer deps
echo "📦 Installing project dependencies..."
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps

# Generate types (optional - Wrangler 4.x generates types automatically)
echo "🔧 Checking Cloudflare Worker types..."
if npm run cf-typegen 2>/dev/null; then
    echo "✅ Types generated successfully"
else
    echo "ℹ️  Types will be generated automatically by Wrangler during development"
fi

echo "✅ Setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. ✅ KV namespaces created and configured in wrangler.toml"
echo "2. Set your Google PSI API key:"
echo "   - Development: npm run secret:set"
echo "   - Staging: npm run secret:set:staging"
echo "   - Production: npm run secret:set:production"
echo "3. Test locally: npm run dev"
echo "4. Deploy:"
echo "   - Staging: npm run deploy:staging"
echo "   - Production: npm run deploy:production"
echo ""
echo "🔍 Monitoring:"
echo "   - View logs: npm run tail"
echo "   - View staging logs: npm run tail:staging"
echo "   - View production logs: npm run tail:production"
