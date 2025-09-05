@echo off
echo 🚀 Setting up GitHub repository for GOON Dictionary...

echo.
echo 📝 INSTRUCTIONS:
echo 1. Go to https://github.com and create a new repository named "goon-dictionary"
echo 2. Make it PUBLIC (required for free GitHub Pages)
echo 3. Don't initialize with README/gitignore (we already have files)
echo 4. Copy the repository URL from GitHub
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g., https://github.com/username/goon-dictionary.git): "

echo.
echo 🔗 Connecting to GitHub repository...
git remote add origin %REPO_URL%
git branch -M main

echo.
echo 📤 Pushing to GitHub...
git push -u origin main

echo.
echo 🌐 Deploying to GitHub Pages...
npm run deploy

echo.
echo ✅ Setup complete! Your GOON Dictionary should be live at:
echo https://YOUR_USERNAME.github.io/goon-dictionary/
echo.
echo 📋 Next steps:
echo 1. Go to your GitHub repository Settings
echo 2. Scroll to "Pages" section
echo 3. Source: "Deploy from a branch"
echo 4. Branch: "gh-pages" / "/ (root)"
echo 5. Click "Save"
echo.
pause
