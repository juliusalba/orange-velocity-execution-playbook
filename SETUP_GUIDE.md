# 🚀 ORANGE VELOCITY - COMPLETE SETUP GUIDE

**Time Required:** 20-30 minutes  
**Difficulty:** Easy (just follow the steps)  
**Cost:** FREE (Google Maps has $200/month free credits)

---

## 📋 TABLE OF CONTENTS

1. [Quick Start (Skip APIs)](#quick-start)
2. [Google Maps API Setup](#1-google-maps-api-required)
3. [Google Analytics Setup](#2-google-analytics-optional)
4. [Perplexity AI Setup](#3-perplexity-ai-optional)
5. [Running the App](#running-the-app)
6. [Troubleshooting](#troubleshooting)

---

## 🏃 QUICK START (Skip APIs)

If you want to run the app immediately without setting up APIs:

```bash
# The app is already configured with a default Google Maps key
# Just run:
npm install
npm run dev

# Open: http://localhost:3006
```

**Note:** The app will work perfectly! But to unlock all features, follow the full setup below.

---

## 1️⃣ GOOGLE MAPS API (REQUIRED)

**Why?** Makes the Philippine business map interactive  
**Cost:** $200 FREE credits/month (enough for ~28,000 map loads)  
**Time:** 10 minutes

### Step 1: Go to Google Cloud Console
1. Open: https://console.cloud.google.com/
2. Sign in with your Google account
3. If prompted, accept Terms of Service

### Step 2: Create a New Project
1. Click the project dropdown (top left, next to "Google Cloud")
2. Click **"NEW PROJECT"**
3. Name it: `Orange Velocity`
4. Click **"CREATE"**
5. Wait 10-20 seconds for project creation
6. Select your new project from the dropdown

### Step 3: Enable Billing
1. Click the hamburger menu (☰) → **"Billing"**
2. Click **"LINK A BILLING ACCOUNT"**
3. If you don't have one: Click **"CREATE BILLING ACCOUNT"**
4. Enter your card details (Google gives you $200 FREE credits)
5. Click **"START MY FREE TRIAL"**

**Important:** You won't be charged unless you exceed $200/month (which is very unlikely for this app)

### Step 4: Enable Maps JavaScript API
1. Click hamburger menu (☰) → **"APIs & Services"** → **"Library"**
2. Search for: `Maps JavaScript API`
3. Click **"Maps JavaScript API"**
4. Click **"ENABLE"**
5. Wait 10-20 seconds

### Step 5: Create API Key
1. Go to: **"APIs & Services"** → **"Credentials"**
2. Click **"+ CREATE CREDENTIALS"** → **"API key"**
3. Copy the key (it looks like: `AIzaSyDh...`)
4. Click **"RESTRICT KEY"** (recommended)

### Step 6: Restrict API Key (Optional but Recommended)
1. Under **"Application restrictions"**:
   - Select **"HTTP referrers (web sites)"**
   - Click **"ADD AN ITEM"**
   - Add: `localhost:*` (for local development)
   - Add: `*.vercel.app/*` (for Vercel deployment)
   - Add your custom domain if you have one

2. Under **"API restrictions"**:
   - Select **"Restrict key"**
   - Check only: **"Maps JavaScript API"**

3. Click **"SAVE"**

### Step 7: Add to .env File
1. Open `.env` file in your project root
2. Replace the existing key with your new key:
   ```env
   VITE_GOOGLE_MAPS_API_KEY=AIzaSyDh...YOUR_NEW_KEY_HERE
   ```
3. Save the file

### Step 8: Test It!
```bash
npm run dev
```
Open http://localhost:3006 → Click **"Market Intel"** tab → You should see the interactive map!

---

## 2️⃣ GOOGLE ANALYTICS (OPTIONAL)

**Why?** Track user behavior, see which features are popular  
**Cost:** 100% FREE forever  
**Time:** 5 minutes

### Step 1: Create GA4 Property
1. Go to: https://analytics.google.com/
2. Sign in with your Google account
3. Click **"Admin"** (gear icon, bottom left)
4. Under **"Account"**, click **"+ Create Account"**
5. Name it: `Orange Velocity`
6. Click **"Next"**
7. Property name: `Orange Velocity App`
8. Select timezone: **Philippines** or your timezone
9. Click **"Next"** → **"Create"**

### Step 2: Create Data Stream
1. Select platform: **"Web"**
2. Website URL: Your Vercel URL or `http://localhost:3006`
3. Stream name: `Orange Velocity Production`
4. Click **"Create stream"**

### Step 3: Get Measurement ID
1. You'll see **"Measurement ID"** (looks like: `G-XXXXXXXXXX`)
2. Copy it

### Step 4: Get API Secret (Optional)
1. Scroll down to **"Measurement Protocol API secrets"**
2. Click **"Create"**
3. Nickname: `Orange Velocity`
4. Click **"Create"**
5. Copy the secret value

### Step 5: Add to .env File
```env
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA4_API_SECRET=your_secret_here
```

### Step 6: Test It!
```bash
npm run dev
```
1. Open http://localhost:3006
2. Click around (change tabs, click cities, etc.)
3. Go back to Google Analytics
4. Click **"Reports"** → **"Realtime"**
5. You should see yourself as "1 user active now"!

---

## 3️⃣ PERPLEXITY AI (OPTIONAL)

**Why?** Adds AI-powered market insights when you click city markers  
**Cost:** Pay-per-request (~$0.20 per 1M tokens, very cheap)  
**Time:** 5 minutes

### Step 1: Sign Up for Perplexity
1. Go to: https://www.perplexity.ai/
2. Click **"Sign In"** (top right)
3. Sign up with Google or email
4. Complete your profile

### Step 2: Access API Settings
1. Click your profile (top right) → **"Settings"**
2. Look for **"API"** or **"Developer"** section
3. Click **"API Keys"** or **"Generate API Key"**

**Note:** Perplexity API is currently in beta. If you don't see API settings:
- Check their website for API access waitlist
- Or email their support: support@perplexity.ai
- Or use the app without it (city modals will work, just no AI insights)

### Step 3: Create API Key
1. Click **"Create API Key"**
2. Name it: `Orange Velocity`
3. Copy the key (looks like: `pplx-...`)

### Step 4: Add to .env File
```env
VITE_PERPLEXITY_API_KEY=pplx-your-key-here
```

### Step 5: Test It!
```bash
npm run dev
```
1. Open http://localhost:3006
2. Go to **"Market Intel"** tab
3. Click any city marker on the map
4. Modal should open with **"AI Market Insights"** section
5. Wait 3-5 seconds for AI to generate insights!

---

## 🚀 RUNNING THE APP

### Local Development
```bash
# Install dependencies (first time only)
npm install

# Start dev server
npm run dev

# Open in browser
# http://localhost:3006
```

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
# Install Vercel CLI (first time only)
npm i -g vercel

# Deploy
vercel --prod
```

---

## 🐛 TROUBLESHOOTING

### Google Maps not showing?
**Problem:** Map shows gray box or error message

**Solution:**
1. Check `.env` file - is the API key filled in?
2. Check Google Cloud Console - is "Maps JavaScript API" enabled?
3. Check billing - is it enabled and active?
4. Clear browser cache and reload
5. Check browser console (F12) for error messages

**Common Error:** "InvalidKeyMapError"
- Your API key is wrong or restrictions are too strict
- Try creating a new unrestricted key first, then add restrictions later

### Google Analytics not tracking?
**Problem:** No data showing in GA4 dashboard

**Solution:**
1. Wait 24-48 hours (GA4 can take time to show data)
2. Check "Realtime" reports instead of standard reports
3. Make sure Measurement ID is correct (starts with `G-`)
4. Check browser console for errors
5. Disable ad blockers (they can block GA4)

### Perplexity AI not working?
**Problem:** City modal doesn't show AI insights

**Solution:**
1. Check if API key is added to `.env`
2. Check browser console for errors
3. Verify your Perplexity account has API access
4. Check if you have remaining credits
5. Try clicking a different city marker

### Build errors?
**Problem:** `npm run build` fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Port already in use?
**Problem:** "Port 3006 is already in use"

**Solution:**
```bash
# Kill the process using the port
# On Mac/Linux:
lsof -ti:3006 | xargs kill -9

# On Windows:
netstat -ano | findstr :3006
taskkill /PID <PID> /F

# Or just close the terminal and open a new one
```

### Environment variables not working?
**Problem:** API keys not being read

**Solution:**
1. Make sure file is named `.env` (not `.env.txt` or `.env.example`)
2. Restart dev server after changing `.env`
3. Check that variables start with `VITE_`
4. No spaces around `=` sign
5. No quotes around values

**Example:**
```env
# ❌ WRONG
VITE_GOOGLE_MAPS_API_KEY = "your_key"

# ✅ CORRECT
VITE_GOOGLE_MAPS_API_KEY=your_key
```

---

## 📞 NEED HELP?

1. **Check browser console:** Press F12 → Console tab
2. **Read error messages:** They usually tell you exactly what's wrong
3. **Google the error:** Copy/paste error into Google
4. **Check API documentation:**
   - Google Maps: https://developers.google.com/maps/documentation
   - Google Analytics: https://support.google.com/analytics
   - Perplexity: https://docs.perplexity.ai/

---

## ✅ QUICK CHECKLIST

Before running the app, verify:

- [ ] `.env` file exists in project root
- [ ] At minimum, Google Maps API key is filled in
- [ ] Ran `npm install` successfully
- [ ] No errors when running `npm run dev`
- [ ] Can access http://localhost:3006 in browser
- [ ] Map shows on "Market Intel" tab
- [ ] Can click city markers and see modals

---

## 🎉 YOU'RE DONE!

If everything works, you should have:
- ✅ Interactive Philippine business map
- ✅ 6-month roadmap with all tasks
- ✅ Resources library (templates, scripts, strategies)
- ✅ Analytics dashboards
- ✅ Demographics & psychographics data
- ✅ (Optional) Google Analytics tracking
- ✅ (Optional) AI-powered city insights

**Enjoy building your agency to PHP 600-800k+ MRR!** 🚀

---

**Last Updated:** November 6, 2025  
**Questions?** Email: julius@notionalize.com
