@echo off
echo 🚀 Starting GOON Dictionary deployment to GitHub Pages...

echo 📦 Installing dependencies...
call npm install

echo 🔨 Building project...
call npm run build

echo 🌐 Deploying to GitHub Pages...
call npm run deploy

echo ✅ Deployment complete! Your GOON Dictionary is now live on GitHub Pages!
echo 🔗 Check your repository settings to see the live URL
pause
