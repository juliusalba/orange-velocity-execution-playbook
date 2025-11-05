# 🔑 API KEYS - QUICK REFERENCE

## WHAT YOU NEED

### ✅ REQUIRED (Already Included)
- **Google Maps API**: Default key included, but replace with your own for production

### ⭐ RECOMMENDED  
- **Google Maps API**: Your own key for production use

### 🎁 OPTIONAL
- **Google Analytics**: Track user behavior (100% FREE)
- **Perplexity AI**: AI-powered city insights (pay-per-use)

---

## WHERE TO GET THEM

| API | Where to Get | Time | Cost |
|-----|-------------|------|------|
| **Google Maps** | [Google Cloud Console](https://console.cloud.google.com) | 10 min | $200 FREE/month |
| **Google Analytics** | [Google Analytics](https://analytics.google.com) | 5 min | FREE forever |
| **Perplexity AI** | [Perplexity](https://www.perplexity.ai) | 5 min | Pay-per-use |

---

## SETUP PRIORITY

### 🚀 OPTION 1: Quick Start (0 minutes)
```bash
# Use default keys - app works perfectly!
npm install
npm run dev
```

### 💪 OPTION 2: Production Ready (10 minutes)
```bash
# Just setup Google Maps with your own key
# Follow: SETUP_GUIDE.md → Section 1
```

### 🌟 OPTION 3: Full Features (20 minutes)
```bash
# Setup all 3 APIs
# Follow: SETUP_GUIDE.md → All sections
```

---

## WHAT EACH API DOES

### 🗺️ Google Maps API
**What it powers:**
- Interactive Philippine business map
- Click-to-analyze city markers
- 6 cities with business data
- Color-coded growth indicators

**Without it:**
- Map won't load (will show error with setup instructions)

**Cost:**
- $200 FREE credits/month
- Each map load = ~$0.007
- 28,000+ free loads per month
- You'll likely never pay

---

### 📊 Google Analytics
**What it powers:**
- Track which tabs users visit most
- See which cities get clicked
- Monitor template downloads
- View user behavior patterns

**Without it:**
- App works 100% fine
- You just don't get usage analytics

**Cost:**
- 100% FREE forever
- No limits

---

### 🤖 Perplexity AI
**What it powers:**
- AI market insights in city modals
- Competitive analysis
- Market trends
- Customer insights

**Without it:**
- City modals work fine
- Just no AI insights section

**Cost:**
- ~$0.20 per 1M tokens
- Each insight = ~1,000 tokens
- $0.0002 per city click
- Very cheap!

---

## .ENV FILE TEMPLATE

```env
# Copy to .env and fill in your keys

# Google Maps (get from Google Cloud Console)
VITE_GOOGLE_MAPS_API_KEY=AIzaSy...

# Google Analytics (get from analytics.google.com)
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA4_API_SECRET=your_secret

# Perplexity AI (get from perplexity.ai)
VITE_PERPLEXITY_API_KEY=pplx-...
```

---

## VERIFICATION

### ✅ Google Maps Working?
1. Open app → "Market Intel" tab
2. Should see map with 6 city markers
3. Click any marker → modal opens
4. ✅ Success!

### ✅ Google Analytics Working?
1. Open app and click around
2. Go to analytics.google.com
3. Check "Realtime" reports
4. See "1 user active now"
5. ✅ Success!

### ✅ Perplexity AI Working?
1. Open app → "Market Intel" tab
2. Click any city marker
3. Wait 3-5 seconds
4. See "🔍 AI Market Insights" section
5. ✅ Success!

---

## COMMON MISTAKES

❌ **File named wrong**: Should be `.env` not `.env.txt`  
❌ **Forgot to restart**: After editing `.env`, restart dev server  
❌ **Spaces around =**: Should be `KEY=value` not `KEY = value`  
❌ **Missing VITE_ prefix**: All vars must start with `VITE_`  
❌ **Quoted values**: Should be `KEY=value` not `KEY="value"`  

---

## NEED HELP?

📖 **Full setup guide**: See `SETUP_GUIDE.md`  
🐛 **Troubleshooting**: See `SETUP_GUIDE.md` → Troubleshooting section  
📧 **Email support**: julius@notionalize.com  

---

**Quick Start:** Just run `npm run dev` - app works with default keys!  
**Production Ready:** Replace Google Maps key (10 min)  
**Full Features:** Setup all 3 APIs (20 min)

Choose your path and enjoy! 🚀
