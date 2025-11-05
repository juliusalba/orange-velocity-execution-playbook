# 🎯 COMPETITIVE INTELLIGENCE GUIDE
## Using Perplexity AI for Strategic Advantage

**Last Updated:** November 6, 2025  
**Purpose:** Give Orange Velocity an unfair competitive edge with AI-powered market intelligence

---

## 🚀 10 POWERFUL QUERIES AVAILABLE

I've built **10 specialized AI queries** that will give you insights your competitors don't have. Each query is optimized to find actionable intelligence you can use **immediately**.

---

### 1. 🎯 **High-Intent Businesses** 
**Function:** `getHighIntentBusinesses(city)`  
**What it finds:** Businesses that URGENTLY need ads RIGHT NOW

**Returns:**
- Industries experiencing rapid growth (last 3 months)
- Companies with new funding announcements
- Businesses launching new products
- Seasonal businesses entering peak season
- Companies with poor digital presence but high revenue
- Industries facing increased competition
- New market entrants

**For each opportunity:**
- Specific business types or company names
- Why they need ads NOW (urgency factor)
- Estimated budget range
- Best approach to reach them

**Example Use:**
```javascript
const insights = await perplexityAPI.getHighIntentBusinesses('Metro Manila');
// Returns: "BPO companies in BGC just received $50M funding and are hiring 500+ employees - they need recruitment ads NOW. Budget: PHP 200-500k/month"
```

**When to use:** Weekly, to find hot prospects before competitors do

---

### 2. 📋 **Advertising Policies**
**Function:** `getAdvertisingPolicies(platform, industry)`  
**What it finds:** Latest rules, restrictions, and compliance requirements

**Returns:**
- Recent policy changes (last 6 months)
- Prohibited content and restricted industries  
- Required certifications or licenses
- Age restrictions and sensitive content rules
- Political advertising regulations
- Data privacy and NPC compliance (PH specific)
- Common violations that get accounts banned
- Best practices to stay compliant
- Industry-specific restrictions
- Upcoming policy changes

**Example Use:**
```javascript
const policies = await perplexityAPI.getAdvertisingPolicies('Facebook', 'healthcare');
// Returns: "Healthcare ads in Philippines now require FDA LTO number. Supplement claims restricted to structure/function only. Violating this = instant ban..."
```

**When to use:** Before onboarding new clients, especially in regulated industries

---

### 3. 🔍 **Market Gaps**
**Function:** `getMarketGaps(city, industry)`  
**What it finds:** Underserved opportunities competitors are missing

**Returns:**
- Industries with LOW agency penetration but HIGH ad need
- Geographic areas with growing businesses but few agencies
- Business sizes underserved (micro, SME, enterprise)
- Platforms with low adoption but high ROI
- Services agencies DON'T offer but businesses need
- Pricing gaps (overpriced or underpriced services)
- Emerging trends competitors ignore
- Customer pain points NOT being solved

**For each gap:**
- Market size estimate
- Why it's underserved
- How to capture this opportunity
- Expected competition level

**Example Use:**
```javascript
const gaps = await perplexityAPI.getMarketGaps('Cebu', 'all');
// Returns: "Cebu tourism operators (300+ businesses) desperately need video ads for TikTok/YouTube but 90% of agencies only offer static Facebook ads. Estimated market: PHP 15M/month, low competition..."
```

**When to use:** When planning expansion, quarterly strategic reviews

---

### 4. ⚔️ **Competitor Weaknesses**
**Function:** `getCompetitorWeaknesses(competitorName, city)`  
**What it finds:** How to position against competitors

**Returns:**
- Common complaints (reviews, forums, social media)
- Service gaps (what they promise but don't deliver)
- Pricing weaknesses (too expensive, hidden fees, no transparency)
- Technology gaps (outdated tools, manual processes)
- Customer service issues (slow response, poor communication)
- Result delivery problems (low ROAS, missed deadlines, poor reporting)
- Industry expertise gaps (sectors they avoid)
- Retention problems (high churn reasons)

**For each weakness:**
- How to position against it
- What to offer instead  
- Messaging to highlight your advantage

**Example Use:**
```javascript
const weaknesses = await perplexityAPI.getCompetitorWeaknesses('CompetitorX', 'Manila');
// Returns: "CompetitorX has 47 negative reviews citing 'slow response time' (average 48 hours). Position yourself with '2-hour guaranteed response SLA' and highlight this in proposals..."
```

**When to use:** When competing for a client, before sales calls

---

### 5. 📈 **Platform Trends**
**Function:** `getPlatformTrends(platform)`  
**What it finds:** Latest algorithm changes and what's working NOW

**Returns:**
- Recent algorithm updates (last 3 months)
- New ad formats and features
- Performance changes (CPM, CPC, CTR trends)
- Best performing ad types RIGHT NOW
- Declining ad formats to avoid
- Platform-specific strategies working today
- Upcoming features in beta
- Budget optimization tactics
- Creative trends (formats, styles, hooks)
- Audience targeting updates

**Example Use:**
```javascript
const trends = await perplexityAPI.getPlatformTrends('TikTok');
// Returns: "TikTok's October algorithm update favors 15-30 second videos with hooks in first 3 seconds. Story-style ads getting 3.2x higher CTR than polished ads. Native UGC style converting at PHP 4.50 CPA vs PHP 18 for branded content..."
```

**When to use:** Weekly, to stay ahead of algorithm changes

---

### 6. ⚖️ **Industry Regulations**
**Function:** `getIndustryRegulations(industry)`  
**What it finds:** Legal requirements for advertising specific industries

**Returns:**
- Required government permits and licenses
- Industry-specific advertising restrictions
- DTI (Department of Trade and Industry) regulations
- FDA regulations (health/wellness/food)
- BSP regulations (financial services)
- NTC regulations (telecommunications)
- PRC requirements (professional services)
- Truth in advertising laws
- Consumer protection regulations
- Penalties for non-compliance

**Provides:** Compliance checklist for onboarding clients

**Example Use:**
```javascript
const regs = await perplexityAPI.getIndustryRegulations('financial services');
// Returns: "BSP Circular 1022 requires all lending company ads to display SEC registration + actual interest rates. Missing this = PHP 50k-500k fine. Checklist: [1] SEC Certificate, [2] BSP Authorization, [3]..."
```

**When to use:** Before onboarding clients in regulated industries

---

### 7. 💰 **Budget Benchmarks**
**Function:** `getBudgetBenchmarks(industry, companySize)`  
**What it finds:** What clients should realistically budget

**Returns:**
- Average monthly ad spend by company size
- Recommended budget allocation across platforms
- Expected ROAS by industry and platform
- Minimum viable budget to see results
- Budget scaling timeline (month 1 vs month 6)
- Hidden costs clients miss (creative, landing pages, tools)
- Industry-specific cost benchmarks (CPC, CPM, CPA)
- Seasonal budget adjustments
- Competitor spending estimates
- Budget red flags (too low or too high)

**Example Use:**
```javascript
const budgets = await perplexityAPI.getBudgetBenchmarks('e-commerce', 'SME');
// Returns: "SME e-commerce in PH: Minimum PHP 50k/month to be viable. Allocation: 60% Facebook (PHP 30k), 30% Google Shopping (PHP 15k), 10% TikTok testing (PHP 5k). Expected 3.5x ROAS by month 3 if properly optimized..."
```

**When to use:** During discovery calls, when creating proposals

---

### 8. 🌟 **Emerging Opportunities**
**Function:** `getEmergingOpportunities(timeframe)`  
**What it finds:** New opportunities before they become crowded

**Returns:**
- New platforms gaining traction
- Underutilized ad formats with high ROI
- Growing industries increasing ad spend
- Geographic expansion opportunities
- Technology opportunities (AI, automation, new tools)
- Partnership opportunities
- Content trends (video, UGC, influencer)
- Underserved audience segments
- Pricing model innovations
- Market consolidation opportunities

**For each opportunity:**
- Why it's emerging now
- How to capitalize on it
- Competition level
- ROI potential

**Example Use:**
```javascript
const opps = await perplexityAPI.getEmergingOpportunities('6 months');
// Returns: "YouTube Shorts adoption up 340% in PH but only 12% of agencies offer it. First-mover advantage window: 4-6 months. ROI potential: 2.8x higher than standard YouTube ads at 40% lower CPM..."
```

**When to use:** Quarterly planning, when expanding services

---

### 9. 🔒 **Client Retention Strategies**
**Function:** `getClientRetentionStrategies()`  
**What it finds:** How to keep clients longer

**Returns:**
- Top reasons clients leave agencies (data-backed)
- Proven retention tactics (case studies, success rates)
- Communication frequency and format
- Reporting best practices (what to show, how often)
- Value-add services that increase loyalty
- Pricing strategies that reduce churn
- Contract structures that improve retention
- Proactive issue resolution
- Client education programs
- Upsell/cross-sell timing

**Example Use:**
```javascript
const retention = await perplexityAPI.getClientRetentionStrategies();
// Returns: "Agencies with weekly Loom video updates have 34% lower churn than monthly PDF reports. Implementing quarterly strategy sessions reduces churn by 28%. Offering free creative refreshes every 60 days increases LTV by PHP 85k..."
```

**When to use:** Monthly, to improve retention metrics

---

### 10. 🚨 **Crisis Management**
**Function:** `getCrisisManagement(scenario)`  
**What it finds:** How to handle emergencies

**Covers:**
- Ad account bans/suspensions
- Campaign performance crashes
- Client budget cuts or pauses
- Negative reviews or complaints
- Team member departures
- Platform policy violations
- Competitor poaching clients
- Market downturns
- Algorithm changes hurting results
- Clients demanding refunds

**For each scenario:**
- Immediate response (first 24 hours)
- Medium-term recovery plan (1-4 weeks)
- Prevention strategies
- Communication templates

**Example Use:**
```javascript
const crisis = await perplexityAPI.getCrisisManagement('ad account ban');
// Returns: "Facebook ad account ban - First 24 hours: [1] Submit appeal immediately (not after 'reviewing' - every hour counts), [2] Document all ad creatives + landing pages, [3] Create backup account on separate Business Manager, [4] Email client with transparent update (template provided)..."
```

**When to use:** When shit hits the fan (reactive) or quarterly drills (proactive)

---

## 💡 RECOMMENDED USAGE SCHEDULE

### **Weekly:**
- `getHighIntentBusinesses()` - Find hot prospects
- `getPlatformTrends()` - Stay ahead of algorithm changes

### **Bi-Weekly:**
- Check 2-3 competitor weaknesses

### **Monthly:**
- `getClientRetentionStrategies()` - Improve retention
- `getEmergingOpportunities()` - Find new angles

### **Quarterly:**
- `getMarketGaps()` - Strategic planning
- `getBudgetBenchmarks()` - Update pricing/positioning

### **As Needed:**
- `getAdvertisingPolicies()` - Before onboarding regulated clients
- `getIndustryRegulations()` - Before onboarding new industries
- `getCrisisManagement()` - When emergencies happen

---

## 🔧 HOW TO USE IN THE APP

### Option 1: In City Modals (Automatic)
When you click a city marker on the map, it automatically calls:
```javascript
perplexityAPI.getCompetitiveAnalysis(cityName, 'e-commerce')
```

### Option 2: Manual Queries (Browser Console)
Open browser console (F12) and run:
```javascript
// Import the API
import { perplexityAPI } from './src/services/api.js';

// Run any query
const insights = await perplexityAPI.getHighIntentBusinesses('Cebu');
console.log(insights);
```

### Option 3: Add to Your Code
```javascript
// In any component
import { perplexityAPI } from '../services/api';

// Use in async function
async function findProspects() {
  const businesses = await perplexityAPI.getHighIntentBusinesses('Manila');
  const gaps = await perplexityAPI.getMarketGaps('Manila', 'all');
  const policies = await perplexityAPI.getAdvertisingPolicies('Facebook', 'general');
  
  // Use the data...
}
```

---

## 💰 COST ESTIMATION

**Perplexity Pricing:** ~$0.20 per 1M tokens

**Query Costs (estimated):**
- Each query: ~2,000-2,500 tokens
- Cost per query: ~$0.0004 - $0.0005 (less than half a cent!)
- 100 queries: ~$0.04 - $0.05
- 1,000 queries: ~$0.40 - $0.50

**ROI Example:**
- Cost: PHP 0.02 per query (half a cent in pesos)
- Insight value: Finding 1 high-intent client worth PHP 25k/month
- ROI: 1,250,000% on that single query 🤯

**Bottom Line:** These queries are RIDICULOUSLY cheap for the value they provide.

---

## 🎯 COMPETITIVE EDGE STRATEGY

### **Week 1: Intelligence Gathering**
```javascript
// Monday: Find prospects
const prospects = await perplexityAPI.getHighIntentBusinesses('Your City');

// Tuesday: Understand market gaps
const gaps = await perplexityAPI.getMarketGaps('Your City');

// Wednesday: Study competitor weaknesses
const weaknesses = await perplexityAPI.getCompetitorWeaknesses('', 'Your City');

// Thursday: Check platform trends
const fbTrends = await perplexityAPI.getPlatformTrends('Facebook');
const googleTrends = await perplexityAPI.getPlatformTrends('Google');

// Friday: Review emerging opportunities
const opportunities = await perplexityAPI.getEmergingOpportunities('3 months');
```

### **Week 2-4: Execute**
Use the insights to:
1. Target high-intent businesses with personalized outreach
2. Fill market gaps competitors are ignoring
3. Position against competitor weaknesses in sales calls
4. Optimize campaigns based on latest platform trends
5. Launch services for emerging opportunities

---

## 🚀 UNFAIR ADVANTAGES YOU NOW HAVE

✅ **Know which businesses need ads BEFORE competitors do**  
✅ **Stay compliant and avoid ad account bans**  
✅ **Find and fill market gaps**  
✅ **Position against competitor weaknesses**  
✅ **Stay ahead of algorithm changes**  
✅ **Quote accurate budgets (close more deals)**  
✅ **Discover emerging opportunities early**  
✅ **Retain clients longer**  
✅ **Handle crises like a pro**  
✅ **All powered by real-time web data via Perplexity AI**

---

## 📝 NEXT STEPS

1. **Get Perplexity API key**: See `SETUP_GUIDE.md` → Section 3
2. **Add to `.env` file**: `VITE_PERPLEXITY_API_KEY=your_key`
3. **Restart app**: `npm run dev`
4. **Run weekly intelligence gathering**: Follow the schedule above
5. **Execute on insights**: Turn intelligence into revenue

---

**With these 10 queries, you have intelligence capabilities most agencies can only dream of. Use them wisely and dominate your market.** 🚀

Built for Orange Velocity | November 6, 2025
