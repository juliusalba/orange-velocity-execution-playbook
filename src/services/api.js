export const perplexityAPI = {
  apiKey: import.meta.env.VITE_PERPLEXITY_API_KEY,
  baseURL: 'https://api.perplexity.ai',

  async getMarketInsights(query, options = {}) {
    if (!this.apiKey) {
      console.warn('Perplexity API key not configured');
      return null;
    }

    try {
      const response = await fetch(`${this.baseURL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: options.model || 'llama-3.1-sonar-small-128k-online',
          messages: [
            {
              role: 'system',
              content: 'You are a market research analyst providing data-driven insights about the Philippine digital advertising market.'
            },
            {
              role: 'user',
              content: query
            }
          ],
          max_tokens: options.maxTokens || 1000,
          temperature: options.temperature || 0.2,
          top_p: 0.9,
          search_domain_filter: options.searchDomains || [],
          return_images: false,
          return_related_questions: true
        })
      });

      if (!response.ok) {
        throw new Error(`Perplexity API error: ${response.statusText}`);
      }

      const data = await response.json();
      return {
        content: data.choices[0].message.content,
        citations: data.citations || [],
        relatedQuestions: data.related_questions || []
      };
    } catch (error) {
      console.error('Error fetching Perplexity insights:', error);
      return null;
    }
  },

  async getCompetitiveAnalysis(city, industry) {
    const query = `Provide a competitive analysis of ${industry} businesses in ${city}, Philippines. Include:
    1. Market size and growth trends
    2. Top 3-5 competitors
    3. Average advertising spend
    4. Key marketing channels used
    5. Recent market developments`;

    return this.getMarketInsights(query, { maxTokens: 1500 });
  },

  async getTrendAnalysis(topic) {
    const query = `Analyze current trends in ${topic} in the Philippines. Include:
    1. Emerging trends (last 6 months)
    2. Market adoption rates
    3. Key players and innovations
    4. Future outlook (next 12 months)`;

    return this.getMarketInsights(query, { maxTokens: 1500 });
  },

  async getCustomerInsights(segment, industry) {
    const query = `Provide customer insights for ${segment} in the ${industry} industry in the Philippines:
    1. Demographics (age, income, location)
    2. Psychographics (values, motivations, pain points)
    3. Buying behavior
    4. Preferred marketing channels
    5. Decision-making process`;

    return this.getMarketInsights(query, { maxTokens: 2000 });
  },

  // === COMPETITIVE EDGE QUERIES ===

  async getHighIntentBusinesses(city = 'Philippines') {
    const query = `Which businesses in ${city} URGENTLY need digital advertising right now? Provide:
    1. Industries experiencing rapid growth or expansion (last 3 months)
    2. Businesses with new funding or investment announcements
    3. Companies launching new products/services requiring customer acquisition
    4. Seasonal businesses entering peak season (e.g., tourism, retail)
    5. Businesses with poor digital presence but high revenue potential
    6. Industries facing increased competition requiring marketing spend
    7. New market entrants needing brand awareness
    
    For each category, provide:
    - Specific business types or company names
    - Why they need ads NOW (urgency factor)
    - Estimated budget range
    - Best approach to reach them`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getAdvertisingPolicies(platform = 'all', industry = 'general') {
    const query = `What are the latest advertising policies and restrictions in the Philippines for ${platform} platforms (${industry} industry)? Include:
    1. Recent policy changes (last 6 months)
    2. Prohibited content and restricted industries
    3. Required certifications or licenses
    4. Age restrictions and sensitive content rules
    5. Political advertising regulations
    6. Data privacy and GDPR compliance (NPC regulations in PH)
    7. Common policy violations that get accounts banned
    8. Best practices to stay compliant
    9. Industry-specific restrictions (e.g., alcohol, healthcare, finance)
    10. Upcoming policy changes to prepare for
    
    Focus on actionable compliance strategies to avoid ad account shutdowns.`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getMarketGaps(city = 'Philippines', industry = 'all') {
    const query = `What are the BIGGEST market gaps and underserved opportunities in ${city} digital advertising market for ${industry}? Identify:
    1. Industries with LOW ad agency penetration but HIGH advertising need
    2. Geographic areas (cities/regions) with growing businesses but few agencies
    3. Business sizes underserved (micro, SME, enterprise)
    4. Platforms with low adoption but high ROI potential
    5. Services that agencies DON'T offer but businesses desperately need
    6. Pricing gaps (overpriced or underpriced services)
    7. Emerging trends/technologies competitors are ignoring
    8. Customer pain points NOT being solved by current agencies
    
    For each gap, provide:
    - Market size estimate
    - Why it's underserved
    - How to capture this opportunity
    - Expected competition level`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getCompetitorWeaknesses(competitorName = '', city = 'Philippines') {
    const query = `Analyze competitor weaknesses in the ${city} digital advertising agency market${competitorName ? ` (specifically ${competitorName})` : ''}. Identify:
    1. Common complaints about agencies (reviews, forums, social media)
    2. Service gaps (what they promise but don't deliver)
    3. Pricing weaknesses (too expensive, hidden fees, lack of transparency)
    4. Technology gaps (outdated tools, manual processes)
    5. Customer service issues (slow response, poor communication)
    6. Result delivery problems (low ROAS, missed deadlines, poor reporting)
    7. Industry expertise gaps (sectors they avoid or perform poorly in)
    8. Retention problems (high churn rate reasons)
    
    For each weakness, suggest:
    - How to position against it
    - What to offer instead
    - Messaging to highlight your advantage`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getPlatformTrends(platform = 'all') {
    const query = `What are the latest ${platform} advertising trends and algorithm changes in the Philippines? Include:
    1. Recent algorithm updates (last 3 months)
    2. New ad formats and features released
    3. Performance changes (CPM, CPC, CTR trends)
    4. Best performing ad types RIGHT NOW
    5. Declining ad formats to avoid
    6. Platform-specific strategies working today
    7. Upcoming features in beta/testing
    8. Budget optimization tactics for current algorithm
    9. Creative trends (formats, styles, hooks that convert)
    10. Audience targeting updates and restrictions
    
    Focus on actionable tactics to implement this week.`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getIndustryRegulations(industry) {
    const query = `What are the legal and regulatory requirements for advertising ${industry} businesses in the Philippines? Cover:
    1. Required government permits and licenses
    2. Industry-specific advertising restrictions
    3. DTI (Department of Trade and Industry) regulations
    4. FDA regulations (for health/wellness/food)
    5. BSP regulations (for financial services)
    6. NTC regulations (for telecommunications)
    7. Professional regulation (PRC) requirements
    8. Truth in advertising laws
    9. Consumer protection regulations
    10. Penalties for non-compliance
    
    Provide a compliance checklist for onboarding ${industry} clients.`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getBudgetBenchmarks(industry, companySize = 'SME') {
    const query = `What should ${companySize} ${industry} businesses in the Philippines budget for digital advertising? Provide:
    1. Average monthly ad spend by company size
    2. Recommended budget allocation across platforms (Facebook, Google, TikTok, etc.)
    3. Expected ROAS by industry and platform
    4. Minimum viable budget to see results
    5. Budget scaling timeline (month 1 vs month 6)
    6. Hidden costs clients often miss (creative, landing pages, tools)
    7. Industry-specific cost benchmarks (CPC, CPM, CPA)
    8. Seasonal budget adjustments
    9. Competitor spending estimates
    10. Budget red flags (too low or wastefully high)
    
    Focus on realistic expectations to set with clients.`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getEmergingOpportunities(timeframe = '6 months') {
    const query = `What are the TOP emerging opportunities in Philippine digital advertising for the next ${timeframe}? Identify:
    1. New platforms gaining traction (user growth, ad adoption)
    2. Underutilized ad formats with high ROI
    3. Growing industries increasing ad spend
    4. Geographic expansion opportunities (emerging cities)
    5. Technology opportunities (AI, automation, new tools)
    6. Partnership opportunities (complementary services)
    7. Content trends (video, UGC, influencer)
    8. Audience segments being underserved
    9. Pricing model innovations (performance-based, hybrid)
    10. Market consolidation or acquisition opportunities
    
    For each opportunity:
    - Why it's emerging now
    - How to capitalize on it
    - Competition level
    - ROI potential`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getClientRetentionStrategies() {
    const query = `What are the BEST client retention strategies for digital advertising agencies in the Philippines? Include:
    1. Top reasons clients leave agencies (data-backed)
    2. Proven retention tactics (case studies, success rates)
    3. Communication frequency and format
    4. Reporting best practices (what to show, how often)
    5. Value-add services that increase loyalty
    6. Pricing strategies that reduce churn
    7. Contract structures that improve retention
    8. Proactive issue resolution tactics
    9. Client education programs that work
    10. Upsell/cross-sell timing and approach
    
    Focus on tactics that can be implemented within 30 days.`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  },

  async getCrisisManagement(scenario = 'general') {
    const query = `How should a digital advertising agency in the Philippines handle ${scenario} crisis situations? Cover:
    1. Ad account bans/suspensions (Facebook, Google)
    2. Campaign performance crashes (ROAS drops suddenly)
    3. Client budget cuts or pauses
    4. Negative reviews or public complaints
    5. Team member departures (knowledge retention)
    6. Platform policy violations
    7. Competitor poaching clients
    8. Market downturns or economic crisis
    9. Major algorithm changes hurting results
    10. Client demanding refunds or threatening legal action
    
    For each scenario, provide:
    - Immediate response (first 24 hours)
    - Medium-term recovery plan (1-4 weeks)
    - Prevention strategies
    - Communication templates`;

    return this.getMarketInsights(query, { maxTokens: 2500 });
  }
};

export const googleAnalyticsAPI = {
  measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID,
  apiSecret: import.meta.env.VITE_GA4_API_SECRET,
  
  initialized: false,

  init() {
    if (this.initialized || !this.measurementId) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', this.measurementId);

    window.gtag = gtag;
    this.initialized = true;
  },

  trackEvent(eventName, params = {}) {
    if (!this.initialized || !window.gtag) {
      console.warn('Google Analytics not initialized');
      return;
    }

    window.gtag('event', eventName, params);
  },

  trackPageView(pagePath, pageTitle) {
    this.trackEvent('page_view', {
      page_path: pagePath,
      page_title: pageTitle
    });
  },

  trackCityClick(cityName, cityData) {
    this.trackEvent('city_interaction', {
      city_name: cityName,
      total_businesses: cityData.total,
      advertisers: cityData.advertisers,
      growth_rate: cityData.growth
    });
  },

  trackTabChange(fromTab, toTab) {
    this.trackEvent('tab_change', {
      from_tab: fromTab,
      to_tab: toTab
    });
  },

  trackResourceDownload(resourceType, resourceName) {
    this.trackEvent('resource_download', {
      resource_type: resourceType,
      resource_name: resourceName
    });
  },

  trackTemplateUsage(templateId, templateTitle) {
    this.trackEvent('template_usage', {
      template_id: templateId,
      template_title: templateTitle
    });
  }
};

export const analyticsService = {
  init() {
    googleAnalyticsAPI.init();
  },

  trackEvent(...args) {
    googleAnalyticsAPI.trackEvent(...args);
  },

  trackPageView(...args) {
    googleAnalyticsAPI.trackPageView(...args);
  }
};
