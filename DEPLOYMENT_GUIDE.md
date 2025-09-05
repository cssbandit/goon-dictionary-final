# 🚀 GOON Dictionary - GitHub Pages Deployment Guide

## Quick Deploy (One Command)
```bash
npm run deploy
```

## Step-by-Step Deployment

### 1. Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial GOON Dictionary commit"
```

### 2. Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository"
3. Name it: `goon-dictionary`
4. Make it public
5. Don't initialize with README (we already have files)

### 3. Connect Local Repository to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/goon-dictionary.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

### 5. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll to "Pages" section
4. Source: "Deploy from a branch"
5. Branch: "gh-pages" / "/ (root)"
6. Click "Save"

## Your Site Will Be Live At:
`https://YOUR_USERNAME.github.io/goon-dictionary/`

## Local Development
```bash
npm run dev
```
View at: `http://localhost:5173`

## Troubleshooting
- If images don't load: Check that all images are in the `public/` folder
- If deployment fails: Make sure you're logged into GitHub CLI or have proper permissions
- If site shows 404: Wait 5-10 minutes for GitHub Pages to propagate

## Files Created for Deployment:
- ✅ `vite.config.ts` - Configured for GitHub Pages
- ✅ `package.json` - Added deploy scripts
- ✅ `.github/workflows/deploy.yml` - Automatic deployment
- ✅ `deploy.bat` - Windows deployment script
- ✅ `deploy.sh` - Linux/Mac deployment script
