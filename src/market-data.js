export const cityData = [
  {
    location: "Metro Manila",
    region: "NCR",
    coordinates: { lat: 14.5995, lng: 120.9842 },
    total: 42500,
    advertisers: 18200,
    growth: "+32%",
    byIndustry: [
      { name: "E-commerce", count: 8200 },
      { name: "Local Services", count: 6500 },
      { name: "SaaS/Tech", count: 2100 },
      { name: "Real Estate", count: 1400 }
    ],
    bySize: [
      { category: "Micro (1-9 employees)", count: 28500 },
      { category: "Small (10-99)", count: 10200 },
      { category: "Medium (100-199)", count: 2800 },
      { category: "Large (200+)", count: 1000 }
    ]
  },
  {
    location: "Cebu",
    region: "Central Visayas",
    coordinates: { lat: 10.3157, lng: 123.8854 },
    total: 12800,
    advertisers: 4850,
    growth: "+28%"
  },
  {
    location: "Davao",
    region: "Davao Region",
    coordinates: { lat: 7.1907, lng: 125.4553 },
    total: 9200,
    advertisers: 3280,
    growth: "+25%"
  },
  {
    location: "Iloilo",
    region: "Western Visayas",
    coordinates: { lat: 10.7202, lng: 122.5621 },
    total: 5800,
    advertisers: 1850,
    growth: "+22%"
  },
  {
    location: "Pampanga",
    region: "Central Luzon",
    coordinates: { lat: 15.0794, lng: 120.62 },
    total: 7200,
    advertisers: 2650,
    growth: "+30%"
  },
  {
    location: "Baguio",
    region: "Cordillera",
    coordinates: { lat: 16.4023, lng: 120.596 },
    total: 3200,
    advertisers: 980,
    growth: "+18%"
  }
];

export const demographics = {
  lastUpdated: "2024-11-06",
  regionBreakdown: {
    ncr: {
      name: "National Capital Region (Metro Manila)",
      population: 13484462,
      businesses: 42500,
      digitalAdoption: 89,
      avgAdSpend: "PHP 125,000/month",
      topIndustries: ["E-commerce", "Financial Services", "Real Estate"],
      consumerBehavior: {
        mobileFirst: 92,
        socialCommerce: 87,
        voiceSearch: 34,
        aiToolsUsage: 28
      }
    },
    calabarzon: {
      name: "CALABARZON",
      population: 16195042,
      businesses: 28400,
      digitalAdoption: 76,
      avgAdSpend: "PHP 68,000/month"
    },
    centralLuzon: {
      name: "Central Luzon",
      population: 12422172,
      businesses: 19800,
      digitalAdoption: 71,
      avgAdSpend: "PHP 52,000/month"
    }
  },
  generationalInsights: {
    genZ: {
      ageRange: "18-26",
      percentage: 28,
      adSpendInfluence: 35,
      preferredPlatforms: ["TikTok", "Instagram", "YouTube"],
      purchasingPower: "PHP 25,000/month avg"
    },
    millennials: {
      ageRange: "27-42",
      percentage: 34,
      adSpendInfluence: 45,
      preferredPlatforms: ["Facebook", "Instagram", "LinkedIn"],
      purchasingPower: "PHP 65,000/month avg"
    },
    genX: {
      ageRange: "43-58",
      percentage: 24,
      adSpendInfluence: 15,
      preferredPlatforms: ["Facebook", "Email", "Search"],
      purchasingPower: "PHP 85,000/month avg"
    }
  }
};

export const psychographics = {
  userSegments: {
    highValueProspects: {
      segment: "High-Value Prospects",
      criteria: { 
        adSpend: ">PHP 200k/month",
        industry: ["E-commerce", "SaaS"],
        growth: ">30% YoY"
      },
      count: 2847,
      characteristics: {
        avgSessionDuration: "8.4 minutes",
        pagesPerSession: 12.3,
        conversionRate: "4.2%",
        preferredChannels: ["LinkedIn", "Email", "Direct"],
        decisionTimeframe: "2-4 weeks"
      },
      psychographics: {
        motivations: ["ROI-focused", "Data-driven", "Growth-oriented"],
        painPoints: ["Scaling challenges", "Attribution complexity", "Team capacity"],
        values: ["Transparency", "Performance", "Innovation"]
      }
    },
    emergingBusinesses: {
      segment: "Emerging Businesses",
      count: 8234,
      psychographics: {
        motivations: ["Fast growth", "Cost efficiency", "Learning"],
        painPoints: ["Budget constraints", "Lack of expertise", "Time limitations"],
        values: ["Affordability", "Education", "Support"]
      }
    },
    establishedEnterprises: {
      segment: "Established Enterprises",
      count: 1456,
      psychographics: {
        motivations: ["Brand building", "Market leadership", "Efficiency"],
        painPoints: ["Complex attribution", "Multi-channel coordination", "Compliance"],
        values: ["Reliability", "Expertise", "Long-term partnership"]
      }
    }
  }
};

export const marketMetrics = {
  marketShare: {
    googleAds: {
      percentage: 68.4,
      trend: "+2.3%",
      spend: "PHP 2.1B"
    },
    facebookMeta: {
      percentage: 24.7,
      trend: "+1.8%",
      spend: "PHP 760M"
    },
    tiktokAds: {
      percentage: 4.2,
      trend: "+12.4%",
      spend: "PHP 130M"
    },
    others: {
      percentage: 2.7,
      trend: "-3.1%",
      spend: "PHP 85M"
    }
  },
  benchmarks: {
    ctr: {
      industry: "2.1%",
      ourPerformance: "3.4%",
      percentile: 78
    },
    cpc: {
      industry: "PHP 12.50",
      ourPerformance: "PHP 9.80",
      percentile: 85
    },
    conversionRate: {
      industry: "2.8%",
      ourPerformance: "4.2%",
      percentile: 82
    },
    roas: {
      industry: "3.2x",
      ourPerformance: "4.7x",
      percentile: 89
    }
  }
};

export const analyticsData = {
  funnelData: [
    { name: "Awareness", value: 10000, dropoffReasons: ["Low brand recognition", "Competitive noise"] },
    { name: "Interest", value: 3500, dropoffReasons: ["Unclear value prop", "Price concerns"] },
    { name: "Consideration", value: 1200, dropoffReasons: ["Feature gaps", "Trust issues"] },
    { name: "Intent", value: 450, dropoffReasons: ["Budget constraints", "Timing"] },
    { name: "Purchase", value: 180, dropoffReasons: [] }
  ],
  cohortData: {
    cohorts: [
      {
        name: "Jan 2025",
        size: 1200,
        months: [
          { retention: 100, revenue: 125 },
          { retention: 85, revenue: 180 },
          { retention: 72, revenue: 165 },
          { retention: 68, revenue: 155 },
          { retention: 65, revenue: 145 },
          { retention: 62, revenue: 140 }
        ]
      },
      {
        name: "Feb 2025",
        size: 1450,
        months: [
          { retention: 100, revenue: 135 },
          { retention: 88, revenue: 195 },
          { retention: 75, revenue: 175 },
          { retention: 71, revenue: 165 },
          { retention: 68, revenue: 155 }
        ]
      }
    ]
  },
  heatmapData: {
    timeLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    activityLabels: ["Page Views", "Clicks", "Conversions", "Engagement"],
    activities: [
      [
        { value: 120, unit: "views" },
        { value: 135, unit: "views" },
        { value: 98, unit: "views" },
        { value: 156, unit: "views" },
        { value: 142, unit: "views" },
        { value: 89, unit: "views" },
        { value: 67, unit: "views" }
      ],
      [
        { value: 45, unit: "clicks" },
        { value: 52, unit: "clicks" },
        { value: 38, unit: "clicks" },
        { value: 61, unit: "clicks" },
        { value: 55, unit: "clicks" },
        { value: 34, unit: "clicks" },
        { value: 28, unit: "clicks" }
      ],
      [
        { value: 8, unit: "conv" },
        { value: 12, unit: "conv" },
        { value: 6, unit: "conv" },
        { value: 15, unit: "conv" },
        { value: 11, unit: "conv" },
        { value: 5, unit: "conv" },
        { value: 3, unit: "conv" }
      ],
      [
        { value: 78, unit: "%" },
        { value: 82, unit: "%" },
        { value: 71, unit: "%" },
        { value: 85, unit: "%" },
        { value: 79, unit: "%" },
        { value: 65, unit: "%" },
        { value: 58, unit: "%" }
      ]
    ]
  }
};
