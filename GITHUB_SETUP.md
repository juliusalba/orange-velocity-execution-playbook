# 🚀 GitHub Repository Setup & Vercel Connection Guide

## Quick Start (Automated)

Run this single command in your terminal:

```bash
cd /Users/juliusalba/orange-velocity-execution-playbook
bash setup-github.sh
```

---

## Manual Setup (Step-by-Step)

If you prefer to run commands manually, follow these steps:

### Step 1: Stage All Files

```bash
cd /Users/juliusalba/orange-velocity-execution-playbook

# Stage configuration files
git add .gitignore .env.example

# Stage documentation
git add README.md API_KEYS_GUIDE.md COMPETITIVE_INTELLIGENCE_GUIDE.md
git add COMPLETE_SUMMARY.md QUICKSTART.md SETUP_GUIDE.md
git add START_HERE.md SYSTEM_STATUS_GUIDE.md

# Stage application files
git add package.json package-lock.json index.html vite.config.js

# Stage source code
git add src/
```

### Step 2: Commit Changes

```bash
git commit -m "🎉 Complete Orange Velocity Execution Playbook

Features:
- 6-month roadmap with 24 tasks & 15+ optimization strategies
- Interactive Google Maps with Philippine cities analytics
- Real-time market updates with Perplexity AI (7-day rolling data)
- Daily AI market summaries based on Google Trends
- 10 competitive intelligence queries
- System status dashboard with API health monitoring
- 8 email templates, 3 sales scripts, 4 outreach strategies
- Resources library with copy-to-clipboard functionality
- Comprehensive analytics & demographics
- Auto-refresh monitoring every 60 seconds

Tech Stack:
- React 19 + Vite
- Google Maps API
- Perplexity AI
- Google Analytics 4
- Tailwind-inspired custom CSS
"
```

### Step 3: Create GitHub Repository

**Option A: Using GitHub CLI (Recommended)**

```bash
gh repo create orange-velocity-execution-playbook \
  --public \
  --description "Scale to PHP 500k MRR in 6 months - Complete market intelligence & execution playbook" \
  --source=. \
  --remote=origin \
  --push
```

**Option B: Using GitHub Web Interface**

1. Go to: https://github.com/new
2. Repository name: `orange-velocity-execution-playbook`
3. Description: `Scale to PHP 500k MRR in 6 months - Complete market intelligence & execution playbook`
4. Visibility: **Public** (or Private if preferred)
5. **Do NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

Then connect your local repo:

```bash
git remote add origin https://github.com/YOUR_USERNAME/orange-velocity-execution-playbook.git
git branch -M main
git push -u origin main
```

### Step 4: Verify GitHub Repository

```bash
# Check remote URL
git remote -v

# View commit history
git log --oneline

# Check repository status
git status
```

---

## Connect to Vercel

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**: https://vercel.com/new

2. **Import Repository**
   - Click "Import Git Repository"
   - Authorize Vercel to access your GitHub account (if not already)
   - Select: `orange-velocity-execution-playbook`
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `npm run build` (should auto-fill)
   - Output Directory: `dist` (should auto-fill)

4. **Add Environment Variables**
   
   Click "Environment Variables" and add these:

   | Name | Value | Environment |
   |------|-------|-------------|
   | `VITE_PERPLEXITY_API_KEY` | Your Perplexity API key | Production, Preview, Development |
   | `VITE_GOOGLE_MAPS_API_KEY` | Your Google Maps API key | Production, Preview, Development |
   | `VITE_GA4_MEASUREMENT_ID` | Your GA4 Measurement ID | Production, Preview, Development |
   | `VITE_GA4_API_SECRET` | Your GA4 API Secret | Production, Preview, Development |

5. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (~1-2 minutes)
   - Get your production URL: `https://orange-velocity-execution-playbook.vercel.app`

### Method 2: Vercel CLI

```bash
# Link to GitHub repository
vercel link

# Add environment variables
vercel env add VITE_PERPLEXITY_API_KEY
vercel env add VITE_GOOGLE_MAPS_API_KEY
vercel env add VITE_GA4_MEASUREMENT_ID
vercel env add VITE_GA4_API_SECRET

# Deploy to production
vercel --prod
```

---

## Post-Setup Configuration

### 1. Set Production Domain (Optional)

In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Domains"
3. Add custom domain (e.g., `orangevelocity.com`)
4. Follow DNS configuration instructions

### 2. Configure Auto-Deployment

✅ **Already configured!** Every `git push` to `main` branch will trigger automatic deployment.

### 3. Configure Branch Deployments (Optional)

1. Go to Project Settings > Git
2. Enable "Preview Deployments"
3. Every branch push will create a preview URL

---

## Continuous Deployment Workflow

### Making Updates

```bash
# 1. Make your changes to the code

# 2. Stage changes
git add .

# 3. Commit with descriptive message
git commit -m "✨ Add new feature: XYZ"

# 4. Push to GitHub
git push origin main

# 5. Vercel automatically deploys! 🚀
# Check deployment status at: https://vercel.com/dashboard
```

### Check Deployment Status

```bash
# View recent deployments
vercel ls

# View deployment logs
vercel logs
```

---

## Troubleshooting

### Issue: GitHub Push Rejected

```bash
# Pull latest changes first
git pull origin main

# Then push again
git push origin main
```

### Issue: Vercel Build Failed

1. Check build logs in Vercel dashboard
2. Common causes:
   - Missing environment variables
   - Build command error
   - Dependency issues

Fix:
```bash
# Test build locally first
npm run build

# If successful, push again
git push origin main
```

### Issue: Environment Variables Not Working

1. Go to Vercel Dashboard > Project Settings > Environment Variables
2. Verify all variables are added
3. Make sure they're applied to: Production, Preview, Development
4. Redeploy: Vercel Dashboard > Deployments > Click "..." > Redeploy

---

## GitHub Repository Structure

```
orange-velocity-execution-playbook/
├── .env.example              # Template for environment variables
├── .gitignore               # Files to ignore in git
├── README.md                # Main documentation
├── API_KEYS_GUIDE.md        # API setup instructions
├── COMPETITIVE_INTELLIGENCE_GUIDE.md
├── COMPLETE_SUMMARY.md
├── QUICKSTART.md
├── SETUP_GUIDE.md
├── START_HERE.md
├── SYSTEM_STATUS_GUIDE.md
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── index.html               # HTML entry point
└── src/
    ├── main.jsx             # React entry point
    ├── MinimalApp.jsx       # Main app component
    ├── MinimalApp.css       # Styles
    ├── components/          # React components
    │   ├── RoadmapView.jsx
    │   ├── ResourcesView.jsx
    │   ├── MarketUpdates.jsx
    │   ├── SystemStatus.jsx
    │   ├── GoogleMapWithAnalytics.jsx
    │   └── AnalyticsCharts.jsx
    ├── services/
    │   └── api.js           # API integrations
    ├── market-data.js
    ├── resources-data.js
    └── roadmap-data.js
```

---

## Success Checklist

- [ ] GitHub repository created
- [ ] All files committed and pushed
- [ ] Repository visible on GitHub
- [ ] Vercel project imported from GitHub
- [ ] Environment variables configured in Vercel
- [ ] First deployment successful
- [ ] Production URL working
- [ ] All systems operational (check System Status tab)
- [ ] Auto-deployment working (test with a small commit)

---

## Benefits of GitHub + Vercel

✅ **Version Control**: Track all changes with git history  
✅ **Collaboration**: Share code with team members  
✅ **Auto-Deployment**: Push to GitHub → Vercel deploys automatically  
✅ **Preview URLs**: Every branch gets its own preview URL  
✅ **Rollback**: Easily revert to previous versions  
✅ **Environment Isolation**: Separate production/development configs  
✅ **Free Hosting**: Both GitHub and Vercel offer free tiers  

---

## Next Steps

1. **Run the setup script**: `bash setup-github.sh`
2. **Connect to Vercel**: Follow Method 1 above
3. **Test auto-deployment**: Make a small change and push
4. **Share the URL**: Send production URL to team
5. **Monitor**: Check System Status dashboard daily

---

**Need Help?**

- GitHub Docs: https://docs.github.com
- Vercel Docs: https://vercel.com/docs
- GitHub CLI: https://cli.github.com/manual/

---

**Created**: November 6, 2025  
**Version**: 1.0.0
