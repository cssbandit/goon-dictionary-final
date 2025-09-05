# GOON Coin Dictionary

A crypto dictionary website for the GOON token - when chart watching becomes complete mental dissociation.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git (required for version control and GitHub synchronization)

## Features

- Dictionary-style layout with aged paper aesthetic
- Responsive design with Tailwind CSS
- Community quotes and usage examples
- Contract address display
- Community links

## Development

```bash
# Clone the repository (if working from GitHub)
git clone https://github.com/cssbandit/goon-coin-dictionary-new.git
cd goon-coin-dictionary-new

# Install dependencies
npm install

# Start development server
npm run dev
```

## Syncing with GitHub

Since this project is developed in a WebContainer environment, you'll need to manually sync changes:

1. **Download the project files** from your development environment
2. **In your local terminal** (with Git installed):
   ```bash
   git clone https://github.com/cssbandit/goon-coin-dictionary-new.git
   cd goon-coin-dictionary-new
   
   # Copy your updated files to this directory
   # Then commit and push:
   git add .
   git commit -m "Update GOON Coin Dictionary"
   git push origin main
   ```

## Deployment

### Netlify
This project is configured for Netlify deployment:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects configured for SPA routing

### Manual Deployment
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Contract Address
8HHuE7ZL3wTMVhgwHGZmpnP4xtaPG2Wp12HfavtXpump

## Community
Join our community: https://x.com/i/communities/1951645486043033649