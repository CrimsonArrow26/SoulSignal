# Netlify Deployment Guide

## Prerequisites
- GitHub/GitLab/Bitbucket account
- Netlify account

## Steps to Deploy

### 1. Push to Git Repository
```bash
git add .
git commit -m "Configure for Netlify deployment"
git push origin main
```

### 2. Deploy on Netlify

#### Option A: Connect Git Repository (Recommended)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Click "New site from Git"
3. Choose your Git provider (GitHub, GitLab, or Bitbucket)
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
6. Click "Deploy site"

#### Option B: Manual Deploy
1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag and drop the `out` folder to the Netlify dashboard
3. Your site will be deployed instantly

### 3. Custom Domain (Optional)
1. In your Netlify dashboard, go to "Domain settings"
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Build Configuration
- The project is configured for static export with `output: 'export'`
- Static files are generated in the `out` directory
- Netlify configuration is in `netlify.toml`
- Redirects are configured for SPA routing

## Troubleshooting
- If you get build errors, check the build logs in Netlify
- Ensure all dependencies are properly installed
- Verify the build command and publish directory are correct
