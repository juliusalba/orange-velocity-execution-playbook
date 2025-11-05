# 🚀 Orange Velocity - 6-Month Execution Playbook

A comprehensive market intelligence and execution roadmap platform built with React and Vite. This platform combines a detailed 6-month business growth roadmap with real-time Philippine market data, AI-powered insights, and extensive resources for running a successful ads agency.

## 🌟 Features

### 📋 6-Month Roadmap
- **Complete month-by-month execution plan** from 0 to PHP 600-800k+ MRR
- **24 detailed tasks** across 6 phases with implementation guides
- **Progress tracking** with checkboxes and completion percentages
- **3 pricing tiers** (Starter, Growth, Enterprise)
- **Optimization strategies** across 5 categories with 15+ expert tactics

### 🗺️ Interactive Market Intelligence
- **Google Maps integration** showing Philippine business distribution
- **6 key cities** with real-time data (Manila, Cebu, Davao, Iloilo, Pampanga, Baguio)
- **Click-to-analyze modals** with detailed city breakdowns
- **AI-powered insights** via Perplexity API for competitive analysis

### 📊 Analytics & Data
- **Funnel Chart**: Conversion funnel with dropoff analysis
- **Cohort Analysis**: Retention and revenue tracking
- **Behavioral Heatmap**: Weekly activity patterns
- **Performance Benchmarks**: Industry comparisons across 4 key metrics

### 👥 Demographics & Psychographics
- **Regional breakdowns** (NCR, CALABARZON, Central Luzon)
- **Consumer behavior tracking** (mobile-first, social commerce, AI adoption)
- **Generational insights** (Gen Z, Millennials, Gen X)
- **3 user segments** with detailed psychographic profiles

### 📚 Resources Library
- **8 email templates** for outreach, follow-ups, proposals, onboarding
- **3 sales scripts** for discovery calls, proposals, objection handling
- **4 outreach strategies** (LinkedIn, Cold Email, Content, Partnerships)
- **Copy-to-clipboard** functionality for all templates

### ⚔️ Competitive Intelligence
- **Market share distribution** across 4 platforms
- **Latest market updates** and news
- **Performance metrics** vs industry averages

## 🛠️ Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Google Maps JavaScript API** - Interactive maps
- **Google Analytics 4** - Event tracking and analytics
- **Perplexity AI API** - Market insights and competitive analysis

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/orange-velocity-execution-playbook.git
cd orange-velocity-execution-playbook

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your API keys

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
# Google Maps API (required for interactive maps)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Google Analytics 4 (optional - for tracking)
VITE_GA4_MEASUREMENT_ID=your_ga4_measurement_id
VITE_GA4_API_SECRET=your_ga4_api_secret

# Perplexity API (optional - for AI insights)
VITE_PERPLEXITY_API_KEY=your_perplexity_api_key
```

### Getting API Keys

#### Google Maps API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Maps JavaScript API**
4. Enable billing (you get $200 free credits/month)
5. Create credentials → API Key
6. Restrict key to your domain or localhost

#### Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Get your Measurement ID from Admin → Data Streams
4. For API secret, go to Admin → Data Streams → Measurement Protocol API secrets

#### Perplexity AI
1. Sign up at [Perplexity AI](https://www.perplexity.ai/)
2. Go to API settings
3. Generate API key
4. Note: Perplexity API is in beta, may require waitlist

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to production
vercel --prod
```

### Other Platforms

The app can be deployed to any static hosting platform (Netlify, Cloudflare Pages, etc.):

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## 📖 Usage Guide

### Navigation

The platform has 7 main tabs:

1. **🗺️ Roadmap** - Your 6-month execution plan
2. **📊 Market Intel** - Philippine market data and Google Maps
3. **📈 Analytics** - Funnels, cohorts, heatmaps
4. **👥 Demographics** - Regional and generational data
5. **🧠 Psychographics** - User segment profiles
6. **📚 Resources** - Templates, scripts, strategies
7. **⚔️ Competitive** - Market share and news

### Key Interactions

- **Click city markers** on the map to view detailed analytics
- **Check off tasks** in the roadmap to track progress
- **Expand cards** to view implementation guides
- **Copy templates** directly to clipboard
- **Filter by segment** to view targeted data

## 🎯 Target Audience

- **Agency Founders** building from 0 to PHP 500k+ MRR
- **Marketing Directors** planning 6-month growth strategies
- **Sales Teams** needing templates and scripts
- **Market Researchers** analyzing Philippine digital ad market

## 📊 Data Sources

- City data: Philippine Statistics Authority (PSA)
- Market metrics: Industry reports and surveys
- Demographics: Census data and market research
- AI insights: Perplexity AI with web search

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved.

## 👥 Team

Built for Julius, Shekinah & Kiannah

## 📞 Support

For questions or support:
- Create an issue on GitHub
- Email: julius@notionalize.com

## 🗺️ Roadmap

### Current Version (v1.0)
- ✅ Complete 6-month roadmap
- ✅ Interactive Google Maps
- ✅ AI-powered insights
- ✅ Demographics & psychographics
- ✅ Resources library
- ✅ Google Analytics tracking

### Future Enhancements (v2.0)
- [ ] Real-time data updates from external APIs
- [ ] User authentication and save progress
- [ ] Custom roadmap builder
- [ ] Team collaboration features
- [ ] CRM integration
- [ ] Advanced reporting dashboard
- [ ] Mobile app (React Native)

## 🙏 Acknowledgments

- Philippine Statistics Authority for demographic data
- Google Maps Platform for interactive mapping
- Perplexity AI for market insights
- Vercel for hosting

---

**Last Updated:** November 6, 2025  
**Version:** 1.0.0  
**Production URL:** https://orange-velocity-execution-playbook.vercel.app
