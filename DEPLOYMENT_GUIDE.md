# 🚀 Deployment Guide - Orange Velocity to Vercel

## Quick Deploy Commands

Run these commands in your terminal:

```bash
# 1. Navigate to project directory
cd /Users/juliusalba/orange-velocity-execution-playbook

# 2. Stage all source code changes (excluding node_modules)
git add package.json package-lock.json
git add src/
git add *.md

# 3. Check what will be committed
git status

# 4. Commit changes
git commit -m "✨ Major Enhancement: Clean Icons, Satellite Maps, City Insights & AI Chat

Features Added:
- ✅ Replaced all emoji icons with Lucide React
- ✅ Google Maps Satellite view by default
- ✅ City Statistics detailed modals with data sources
- ✅ AI Insights Chat with Perplexity integration
- ✅ Roadmap task progress tracking
- ✅ 750+ lines of new CSS for enhanced UI/UX

New Components:
- AIInsightsChat.jsx
- CityInsightModal.jsx
- AutomationRoadmap.jsx
- AIResearchProgress.jsx
- Tooltip.jsx

Built with ❤️ for Julius, Shekinah & Kiannah"

# 5. Push to GitHub
git push origin main
```

---

## 🌐 Deploy to Vercel

### Option 1: Automatic Deploy (Recommended)

If your repository is already connected to Vercel:

1. **Just push to GitHub** (command above)
2. Vercel will **automatically deploy** your changes
3. Check deployment status at: https://vercel.com/dashboard

### Option 2: Vercel CLI Deploy

If you have Vercel CLI installed:

```bash
# Deploy to production
vercel --prod
```

### Option 3: First Time Vercel Setup

If this is your first deployment:

**Step 1: Install Vercel CLI**
```bash
npm i -g vercel
```

**Step 2: Login to Vercel**
```bash
vercel login
```

**Step 3: Deploy**
```bash
# From project directory
cd /Users/juliusalba/orange-velocity-execution-playbook
vercel --prod
```

**Step 4: Follow prompts:**
- Set up and deploy? **Yes**
- Which scope? **Your Vercel account**
- Link to existing project? **No** (if first time)
- What's your project name? **orange-velocity-execution-playbook**
- In which directory is your code located? **./** (press Enter)
- Want to override settings? **No**

---

## 🌐 Deploy via Vercel Dashboard (No CLI)

**Step 1: Push to GitHub** (use commands at top)

**Step 2: Go to Vercel Dashboard**
- Visit: https://vercel.com/new
- Or: https://vercel.com/dashboard

**Step 3: Import Project**
1. Click **"Add New Project"**
2. Select **"Import Git Repository"**
3. Choose your GitHub repository: `orange-velocity-execution-playbook`
4. Click **"Import"**

**Step 4: Configure Project**
- **Framework Preset**: Vite
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

**Step 5: Environment Variables**

Add these if you have API keys:

```
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_PERPLEXITY_API_KEY=your_perplexity_api_key
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
```

**Step 6: Deploy**
1. Click **"Deploy"**
2. Wait for build to complete (~2-3 minutes)
3. Get your live URL: `https://your-project.vercel.app`

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Google Maps loads with Satellite view
- [ ] All navigation tabs work
- [ ] City cards clickable with modals
- [ ] AI Insights chat functional
- [ ] Roadmap checkboxes save state
- [ ] All icons display correctly (Lucide React)
- [ ] Responsive design on mobile
- [ ] No console errors

---

## 🔑 Environment Variables Setup

### Google Maps API Key
1. Go to: https://console.cloud.google.com/
2. Create new project or select existing
3. Enable **Maps JavaScript API**
4. Create credentials → API Key
5. Add to Vercel: `VITE_GOOGLE_MAPS_API_KEY`

### Perplexity API Key
1. Go to: https://www.perplexity.ai/settings/api
2. Generate API key
3. Add to Vercel: `VITE_PERPLEXITY_API_KEY`

### Google Analytics
1. Get your GA4 Measurement ID
2. Add to Vercel: `VITE_GOOGLE_ANALYTICS_ID`

---

## 🔄 Continuous Deployment

Once connected, Vercel auto-deploys on every push:

```bash
# Make changes
git add .
git commit -m "Your update message"
git push origin main

# Vercel automatically deploys!
```

View deployment status:
- Dashboard: https://vercel.com/dashboard
- Build logs: Click on deployment → View logs

---

## 🐛 Troubleshooting

### Build Fails
```bash
# Test build locally first
npm run build

# If successful, push to GitHub
git push origin main
```

### Environment Variables Not Working
- Check variable names start with `VITE_`
- Redeploy after adding variables
- Clear Vercel cache: Settings → Clear Build Cache

### Map Not Loading
- Verify `VITE_GOOGLE_MAPS_API_KEY` is set
- Check API key restrictions in Google Cloud Console
- Enable billing if needed

---

## 📊 Project Structure

```
orange-velocity-execution-playbook/
├── src/
│   ├── components/
│   │   ├── AIInsightsChat.jsx          # ✨ NEW
│   │   ├── CityInsightModal.jsx        # ✨ NEW
│   │   ├── AutomationRoadmap.jsx       # ✨ NEW
│   │   ├── AIResearchProgress.jsx      # ✨ NEW
│   │   ├── Tooltip.jsx                 # ✨ NEW
│   │   ├── GoogleMapWithAnalytics.jsx  # 📝 Updated
│   │   ├── RoadmapView.jsx             # 📝 Updated
│   │   └── ...
│   ├── MinimalApp.jsx                  # 📝 Updated
│   ├── MinimalApp.css                  # 📝 Updated (750+ new lines)
│   └── ...
├── package.json                        # 📝 Updated (lucide-react)
├── ENHANCEMENT_UPDATE.md               # 📚 Documentation
├── ROADMAP_ENHANCEMENTS.md             # 📚 Documentation
├── AI_AUTOMATION_GUIDE.md              # 📚 Documentation
└── README.md
```

---

## 🎯 Deployment Checklist

- [ ] All changes committed to Git
- [ ] Pushed to GitHub main branch
- [ ] Vercel project connected to GitHub repo
- [ ] Environment variables configured
- [ ] Build succeeds locally (`npm run build`)
- [ ] Deployment triggered (auto or manual)
- [ ] Live site tested and verified
- [ ] Share URL with team!

---

## 📱 Share Your Live Site

After deployment, share:

**Production URL**: `https://your-project.vercel.app`

**Features to showcase:**
1. **Market Intel** → Click city cards for detailed insights
2. **AI Insights** → Chat about market trends
3. **Roadmap** → Interactive task tracking
4. **Google Maps** → Satellite view with business markers

---

## 🆘 Need Help?

**Vercel Documentation**: https://vercel.com/docs
**Vite Documentation**: https://vitejs.dev/guide/
**Project Issues**: Check console logs and build errors

---

**Last Updated**: 2025-11-06  
**Status**: Ready to Deploy ✅  
**Built with ❤️ for Julius, Shekinah & Kiannah**
