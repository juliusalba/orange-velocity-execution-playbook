#!/bin/bash

# Orange Velocity - Deploy to Vercel
# This script commits changes to GitHub and deploys to Vercel

echo "🚀 Orange Velocity Deployment Script"
echo "======================================"
echo ""

# Step 1: Stage changes (excluding node_modules)
echo "📦 Staging changes..."
git add package.json package-lock.json
git add src/
git add *.md
git add quick-setup.sh setup-github.sh

# Step 2: Check status
echo ""
echo "📋 Git Status:"
git status --short

# Step 3: Commit
echo ""
echo "💾 Creating commit..."
git commit -m "✨ Major Enhancement Update: Clean Icons, Satellite Maps, City Insights & AI Chat

Features Added:
- ✅ Replaced all emoji icons with Lucide React (clean minimal icons)
- ✅ Google Maps default to Satellite view
- ✅ City Statistics detailed modals with data sources & market share
- ✅ AI Insights Chat with Perplexity integration for market intelligence
- ✅ Comprehensive modal system with animations
- ✅ 750+ lines of new CSS for enhanced UI/UX
- ✅ Roadmap task progress tracking with checkboxes

New Components:
- AIInsightsChat.jsx - AI-powered market insights chat
- CityInsightModal.jsx - Detailed city statistics with verified data sources
- AutomationRoadmap.jsx - AI automation roadmap
- AIResearchProgress.jsx - Research progress tracking
- Tooltip.jsx - Reusable tooltip component

Modified:
- MinimalApp.jsx - Added new tabs, icons, and modal integration
- GoogleMapWithAnalytics.jsx - Satellite view implementation
- RoadmapView.jsx - Task progress tracking with localStorage
- MinimalApp.css - Major style updates for all new features

Documentation:
- ENHANCEMENT_UPDATE.md - Complete feature documentation
- ROADMAP_ENHANCEMENTS.md - Roadmap task tracking guide
- AI_AUTOMATION_GUIDE.md - AI automation documentation

Dependencies:
- Added lucide-react for professional icon system (0 vulnerabilities)

Built with ❤️ for Julius, Shekinah & Kiannah"

# Step 4: Push to GitHub
echo ""
echo "🌐 Pushing to GitHub..."
git push origin main

# Step 5: Deploy to Vercel
echo ""
echo "☁️  Deploying to Vercel..."
echo ""
echo "Option 1: Using Vercel CLI (if installed)"
echo "================================"
echo "vercel --prod"
echo ""
echo "Option 2: Using Git Integration (Recommended)"
echo "============================================="
echo "Vercel will auto-deploy from GitHub push"
echo "Check: https://vercel.com/dashboard"
echo ""

# Check if Vercel CLI is installed
if command -v vercel &> /dev/null
then
    echo "✅ Vercel CLI detected!"
    read -p "Deploy now? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]
    then
        vercel --prod
    fi
else
    echo "💡 Vercel CLI not installed. Install with:"
    echo "   npm i -g vercel"
    echo ""
    echo "📱 Or deploy via Vercel Dashboard:"
    echo "   1. Go to https://vercel.com/dashboard"
    echo "   2. Import GitHub repository"
    echo "   3. Deploy automatically on push"
fi

echo ""
echo "✅ Deployment process complete!"
echo ""
echo "📚 Next Steps:"
echo "1. Check GitHub: https://github.com/YOUR_USERNAME/orange-velocity-execution-playbook"
echo "2. Check Vercel: https://vercel.com/dashboard"
echo "3. Share your live URL!"
echo ""
