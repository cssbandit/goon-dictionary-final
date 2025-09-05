#!/bin/bash

# GOON Dictionary - GitHub Pages Deployment Script
echo "🚀 Starting GOON Dictionary deployment to GitHub Pages..."

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

# Deploy to GitHub Pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete! Your GOON Dictionary is now live on GitHub Pages!"
echo "🔗 Check your repository settings to see the live URL"
