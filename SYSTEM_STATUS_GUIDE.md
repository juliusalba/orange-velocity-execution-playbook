# 🔧 System Status Dashboard Guide

## Overview

The **System Status Dashboard** is your mission control for monitoring all API integrations and services. It automatically checks the health of all systems and alerts you when something needs attention.

## Quick Access

Navigate to: **🔧 System Status** tab (last tab in navigation)

## Features

### 1. Real-Time Health Monitoring

**Overall Health Indicator**
- 🟢 **ALL SYSTEMS OPERATIONAL** - Everything working perfectly
- 🟡 **DEGRADED** - Some systems need attention
- 🔴 **SYSTEMS DOWN** - Critical issues detected

**Auto-Refresh**
- Checks all systems every 60 seconds
- Toggle on/off with the checkbox
- Manual refresh: Click "🔄 Refresh Now" button

### 2. Individual System Status

Each API is monitored separately with detailed information:

#### Perplexity AI
- **Status**: ✅ Success / ⚠️ Warning / ❌ Error
- **Powers**: Market Updates, Daily Summaries, Competitive Intelligence, City Analytics
- **Check**: Live API connection test
- **Alerts**: 
  - ⚠️ API key not configured
  - ❌ Invalid API key
  - ⚠️ Rate limit exceeded
  - ❌ Connection timeout

#### Google Maps
- **Status**: ✅ Success / ⚠️ Warning / ❌ Error
- **Powers**: Interactive Maps, Business Distribution, Click-to-Analyze
- **Check**: API key validation
- **Alerts**:
  - ⚠️ API key not configured
  - ❌ Invalid API key or quota exceeded

#### Google Analytics
- **Status**: ✅ Success / ⚠️ Warning
- **Powers**: User Tracking, Tab Analytics, Resource Metrics
- **Check**: Script initialization status
- **Alerts**:
  - ⚠️ Measurement ID not configured
  - ⚠️ Tracking not initialized

### 3. Activity Log

**Real-time system events:**
- 🔵 Info messages (general activities)
- 🟢 Success messages (systems operational)
- 🟡 Warning messages (attention needed)
- 🔴 Error messages (critical issues)

**Features:**
- Timestamps for all events
- Color-coded by severity
- Scrollable history (last 50 events)
- Clear logs button

### 4. Configuration Guide

**Built-in setup instructions for:**
1. **Perplexity AI** - Step-by-step API key setup
2. **Google Maps** - Cloud Console configuration
3. **Google Analytics** - GA4 property setup

Each guide includes:
- Direct links to configuration pages
- Step-by-step instructions
- Example `.env` entries

## Alert Types

| Status | Icon | Meaning | Action Required |
|--------|------|---------|-----------------|
| **Success** | ✅ | System operational | None |
| **Warning** | ⚠️ | Needs attention | Check configuration |
| **Error** | ❌ | Critical failure | Fix immediately |
| **Checking** | 🔄 | Status check in progress | Wait for result |

## Common Issues & Solutions

### Perplexity API

**Problem**: "API key not configured"
**Solution**: 
1. Get API key from https://www.perplexity.ai/settings/api
2. Add to `.env`: `VITE_PERPLEXITY_API_KEY=your_key_here`
3. Restart dev server or rebuild

**Problem**: "Invalid API key"
**Solution**: 
1. Verify key is correct in `.env`
2. Check for extra spaces or quotes
3. Regenerate key if needed

**Problem**: "Rate limit exceeded"
**Solution**: 
1. Wait 60 seconds before next check
2. Consider upgrading Perplexity plan
3. Reduce auto-refresh frequency

### Google Maps

**Problem**: "API key not configured"
**Solution**:
1. Create project at https://console.cloud.google.com
2. Enable "Maps JavaScript API"
3. Create API key
4. Add to `.env`: `VITE_GOOGLE_MAPS_API_KEY=your_key_here`

**Problem**: "Invalid API key or quota exceeded"
**Solution**:
1. Check API key restrictions in Google Cloud Console
2. Verify billing is enabled
3. Check daily quota limits
4. Add HTTP referrer restrictions if needed

### Google Analytics

**Problem**: "Measurement ID not configured"
**Solution**:
1. Create GA4 property at https://analytics.google.com
2. Copy Measurement ID (G-XXXXXXXXXX)
3. Add to `.env`: `VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX`

## Environment Variables

All API keys are stored in `.env` file:

```bash
# Perplexity AI
VITE_PERPLEXITY_API_KEY=your_perplexity_key_here

# Google Maps
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key_here

# Google Analytics 4
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA4_API_SECRET=your_ga4_api_secret_here
```

**Important**: 
- Never commit `.env` to git
- Use `.env.example` as a template
- Restart server after `.env` changes
- Rebuild for production deployments

## Best Practices

1. **Check Status Daily**
   - Visit dashboard at least once per day
   - Enable auto-refresh during active work
   - Monitor activity log for patterns

2. **Respond to Alerts**
   - ⚠️ Warnings: Fix within 24 hours
   - ❌ Errors: Fix immediately
   - Check logs for specific error details

3. **Test After Changes**
   - Click "Refresh Now" after updating `.env`
   - Verify all systems show ✅ Success
   - Check features are working (maps, updates, etc.)

4. **Keep Keys Secure**
   - Never share API keys publicly
   - Rotate keys if compromised
   - Use environment-specific keys (dev vs prod)

## Monitoring Schedule

- **Auto-check**: Every 60 seconds (when enabled)
- **Manual check**: On-demand via "Refresh Now" button
- **On page load**: Automatic initial check
- **After config changes**: Manual verification recommended

## Success Criteria

✅ All systems should show:
- Status: **success**
- Last checked: Recent timestamp
- No error messages in activity log

When all systems are healthy:
- Market updates load with real data
- Maps display correctly with markers
- Analytics tracking events
- Daily summaries generated

## Need Help?

If you see persistent errors:
1. Check the activity log for specific error messages
2. Review the configuration guide in the dashboard
3. Verify all `.env` variables are set correctly
4. Check API service status pages:
   - Perplexity: https://status.perplexity.ai (if available)
   - Google Cloud: https://status.cloud.google.com
   - Google Analytics: https://www.google.com/appsstatus

## Pro Tips

💡 **Bookmark the Status Tab** - Quick access during troubleshooting

💡 **Monitor Before Important Work** - Ensure all systems operational before client presentations

💡 **Screenshot Errors** - Capture error messages for easier debugging

💡 **Check After Deployment** - Verify production environment has correct API keys

---

**Last Updated**: November 6, 2025  
**Version**: 1.0.0
