# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Installation (Windows)

```powershell
# 1. Navigate to the project folder
cd C:\Users\LENOVO-T480S\Desktop\portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Your portfolio will be available at: **http://localhost:5173**

## ✏️ Customize in 3 Steps

### Step 1: Update Your Information

Open `src/data/content.js` and edit:
- Your name, role, and tagline
- Skills and experience
- Projects and descriptions
- Education details
- Social media links

### Step 2: Replace Images

1. Add your project images to the `public/` folder
2. Update image paths in `src/data/content.js`
3. Replace `og-image.jpg` for social media sharing

### Step 3: Test It

```powershell
# View in browser
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deploy in 2 Minutes

### Option A: Netlify (Easiest)

```powershell
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Option B: Vercel (Fastest)

```powershell
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel --prod
```

### Option C: GitHub + Auto Deploy

1. Push to GitHub:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Connect to Netlify/Vercel:
   - Go to Netlify or Vercel dashboard
   - Import from GitHub
   - Click Deploy!

## 📝 Common Commands

| Task | Command |
|------|---------|
| Start dev server | `npm run dev` |
| Build for production | `npm run build` |
| Preview build | `npm run preview` |
| Run tests | `npm run test` |
| Check code quality | `npm run lint` |
| Format code | `npm run format` |

## 🎨 Quick Customizations

### Change Colors

Edit `tailwind.config.js` → `colors` section

### Add a New Section

1. Create component in `src/components/`
2. Add data to `src/data/content.js`
3. Import and use in `src/App.jsx`

### Update Meta Tags

Edit `index.html` → `<head>` section

## 🆘 Troubleshooting

**Port 5173 already in use?**
```powershell
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

**Dependencies issue?**
```powershell
rd /s /q node_modules
del package-lock.json
npm install
```

**Build errors?**
```powershell
npm run lint
```

## 📚 Next Steps

1. ✅ Replace placeholder images with real ones
2. ✅ Update all links to your actual profiles
3. ✅ Add your real project details
4. ✅ Test on mobile devices
5. ✅ Run Lighthouse audit
6. ✅ Deploy to production
7. ✅ Share with recruiters!

## 📖 Full Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **CONTRIBUTING.md** - Customization guide

---

**Need help?** Check the full README.md for detailed instructions!

**Ready to deploy?** See DEPLOYMENT.md for step-by-step guides!

