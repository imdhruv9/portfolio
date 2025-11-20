# Deployment Guide

Complete guide for deploying your portfolio to Netlify or Vercel with CI/CD automation.

## 📋 Pre-Deployment Checklist

- [ ] Update all content in `src/data/content.js`
- [ ] Replace placeholder images with actual project screenshots
- [ ] Update social media links with your actual profiles
- [ ] Test the site locally: `npm run build && npm run preview`
- [ ] Run tests: `npm run test`
- [ ] Run linter: `npm run lint`
- [ ] Update `sitemap.xml` with your actual domain
- [ ] Update Open Graph images in `index.html`

## 🌐 Netlify Deployment

### Option 1: Netlify CLI (Recommended for Windows)

#### Step 1: Install Netlify CLI

```powershell
# Windows
npm install -g netlify-cli

# Verify installation
netlify --version
```

#### Step 2: Login to Netlify

```powershell
netlify login
# This will open your browser for authentication
```

#### Step 3: Initialize Your Site

```powershell
# In your project directory
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Enter site name (or leave blank for random)
# - Build command: npm run build
# - Publish directory: dist
```

#### Step 4: Deploy

```powershell
# Deploy to production
netlify deploy --prod

# Or deploy for preview first
netlify deploy
# Then deploy to production
netlify deploy --prod
```

#### Step 5: Set Environment Variables (Optional)

```powershell
# Set environment variables
netlify env:set VITE_SITE_URL "https://your-site.netlify.app"
netlify env:set VITE_ANALYTICS_ID "G-XXXXXXXXXX"
```

### Option 2: GitHub Integration (Automated)

#### Step 1: Push to GitHub

```powershell
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add remote and push
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Choose GitHub and authorize
4. Select your repository
5. Configure build settings:
   - **Branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Add environment variables (if needed):
   - Click "Show advanced"
   - Add `VITE_SITE_URL`, etc.
7. Click "Deploy site"

#### Step 3: Configure Custom Domain (Optional)

1. In Netlify Dashboard → Domain settings
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Let's Encrypt)

### Option 3: Manual Drag & Drop

1. **Build your site**:
   ```powershell
   npm run build
   ```

2. **Go to Netlify Drop**: [https://app.netlify.com/drop](https://app.netlify.com/drop)

3. **Drag the `dist` folder** to the drop zone

4. **Site deployed!** You'll get a random URL

## ⚡ Vercel Deployment

### Option 1: Vercel CLI

#### Step 1: Install Vercel CLI

```powershell
# Windows
npm install -g vercel

# Verify installation
vercel --version
```

#### Step 2: Login and Deploy

```powershell
# Login to Vercel
vercel login

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

#### Step 3: Configure Environment Variables

```powershell
# Add environment variables
vercel env add VITE_SITE_URL production
# Enter value when prompted

vercel env add VITE_ANALYTICS_ID production
```

### Option 2: GitHub Integration (Automated)

#### Step 1: Push to GitHub

```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main
```

#### Step 2: Import to Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click "Import Project"
3. Import from GitHub
4. Select your repository
5. Vercel auto-detects Vite configuration
6. Add environment variables (optional):
   - Click "Environment Variables"
   - Add your variables
7. Click "Deploy"

#### Step 3: Configure Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed
4. HTTPS is automatic

## 🔄 Setting Up CI/CD

### GitHub Actions Setup

The project includes a CI/CD workflow in `.github/workflows/deploy.yml`.

#### For Netlify Automated Deployment

1. **Get Netlify credentials**:
   - Auth Token: Netlify Dashboard → User Settings → Applications → Personal Access Tokens
   - Site ID: Netlify Dashboard → Site Settings → General → Site Information

2. **Add GitHub Secrets**:
   - Go to your GitHub repo
   - Settings → Secrets and variables → Actions
   - Add secrets:
     - `NETLIFY_AUTH_TOKEN`: Your Netlify auth token
     - `NETLIFY_SITE_ID`: Your site ID

3. **Uncomment Netlify job** in `.github/workflows/deploy.yml`:
   ```yaml
   deploy-netlify:
     needs: build-and-test
     runs-on: ubuntu-latest
     if: github.ref == 'refs/heads/main'
     # ... rest of the job
   ```

4. **Push to main branch** - deployment happens automatically!

#### For Vercel Automated Deployment

1. **Get Vercel credentials**:
   - Token: Vercel Dashboard → Settings → Tokens
   - Org ID & Project ID: `.vercel` folder after first CLI deploy

2. **Add GitHub Secrets**:
   - `VERCEL_TOKEN`: Your Vercel token
   - `VERCEL_ORG_ID`: Your organization ID
   - `VERCEL_PROJECT_ID`: Your project ID

3. **Uncomment Vercel job** in `.github/workflows/deploy.yml`

4. **Push to main branch** for automatic deployment

## 🔧 Custom Domain Configuration

### Netlify Custom Domain

1. **Add domain in Netlify**:
   - Site Settings → Domain management → Add custom domain

2. **Configure DNS**:
   ```
   # Option 1: Using Netlify DNS (recommended)
   Update nameservers at your domain registrar to Netlify's nameservers

   # Option 2: Using external DNS
   A Record: @ → 75.2.60.5
   CNAME: www → your-site.netlify.app
   ```

3. **Enable HTTPS** (automatic)

### Vercel Custom Domain

1. **Add domain in Vercel**:
   - Project Settings → Domains → Add

2. **Configure DNS**:
   ```
   # Option 1: Vercel DNS
   Update nameservers to Vercel's

   # Option 2: External DNS
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

3. **HTTPS** is automatic

## 🎯 Post-Deployment

### Update URLs

1. **Update `index.html`**:
   - Replace `https://yoursite.com` with your actual domain

2. **Update `sitemap.xml`**:
   - Replace all `https://yoursite.com` with your domain

3. **Update `robots.txt`**:
   - Update sitemap URL

4. **Redeploy** after changes

### Test Your Deployment

- [ ] Site loads correctly
- [ ] All sections are visible
- [ ] Images load properly
- [ ] Forms work
- [ ] Links work (social media, projects)
- [ ] Mobile responsive
- [ ] SEO meta tags show correctly (use [Twitter Card Validator](https://cards-dev.twitter.com/validator))
- [ ] Performance (use [PageSpeed Insights](https://pagespeed.web.dev/))

### Monitor and Maintain

1. **Set up analytics**:
   - Add Google Analytics ID to `.env`
   - Redeploy

2. **Monitor performance**:
   - Netlify Analytics or Vercel Analytics

3. **Update content regularly**:
   - Edit `src/data/content.js`
   - Push changes (CI/CD will auto-deploy)

## 🐛 Deployment Troubleshooting

### Build Fails

**Issue**: Build command fails during deployment

**Solution**:
```powershell
# Test build locally first
npm run build

# Check for errors
npm run lint

# Clear cache and rebuild
rd /s /q node_modules dist
npm install
npm run build
```

### Environment Variables Not Working

**Issue**: Environment variables not accessible

**Solution**:
- Ensure variables start with `VITE_` prefix
- Check they're set in deployment platform
- Redeploy after adding variables

### 404 on Page Refresh

**Issue**: Single-page app shows 404 on refresh

**Solution**:
- Netlify: Add `_redirects` file to `public/`:
  ```
  /* /index.html 200
  ```
- Vercel: Add `vercel.json`:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  }
  ```

### Images Not Loading

**Issue**: Images return 404

**Solution**:
- Ensure images are in `public/` folder
- Use correct path: `/image.jpg` (not `./image.jpg`)
- Check file names are correct

## 📊 Performance Optimization

### After Deployment

1. **Test with Lighthouse**:
   - Chrome DevTools → Lighthouse
   - Aim for 90+ scores

2. **Optimize images**:
   - Replace SVG placeholders with optimized JPGs/PNGs
   - Use WebP format for modern browsers
   - Compress images (use TinyPNG, Squoosh)

3. **Enable compression**:
   - Both Netlify and Vercel enable Gzip/Brotli by default

4. **Add caching headers**:
   - Netlify: `netlify.toml`
   - Vercel: `vercel.json`

## 🔒 Security Best Practices

- Never commit `.env` files
- Use environment variables for sensitive data
- Keep dependencies updated: `npm audit fix`
- Enable HTTPS (automatic on both platforms)
- Add security headers (both platforms support this)

---

**Need Help?**
- Netlify Support: [https://answers.netlify.com/](https://answers.netlify.com/)
- Vercel Support: [https://vercel.com/support](https://vercel.com/support)

