export const roadmapData = {
  startDate: '2025-11-01',
  targetMRR: 'PHP 600-800k+',
  targetClients: '30-50+',
  months: [
    {
      id: 1,
      title: 'Foundation',
      icon: '🏗️',
      subtitle: 'Establish processes, hire your team, and get your first 3-5 clients',
      color: '#FF6B35',
      stats: [
        { label: 'First Clients', value: '3-5' },
        { label: 'Starting MRR', value: 'PHP 45-100k' },
        { label: 'Team Member', value: '1' }
      ],
      tasks: [
        {
          title: 'Set Up Legal & Branding',
          description: 'Register business, get logo, build simple website',
          guide: [
            'Business registration: Sole proprietor or LLC',
            'Logo & branding: Canva or hire designer',
            'Simple website: Landing page + services',
            'Email domain: Custom email address',
            'Timeline: 1-2 weeks'
          ],
          completed: false
        },
        {
          title: 'Document Your Process',
          description: 'Create SOPs for ad management, reporting, client communication',
          guide: [
            'Campaign setup: Facebook, Google Ads, TikTok',
            'Daily/Weekly reporting: KPIs, dashboards',
            'Client communication: Calls, updates, feedback',
            'Optimization process: A/B testing, scaling rules',
            'Tool: Notion, Google Docs, or Loom videos'
          ],
          completed: false
        },
        {
          title: 'Hire Your First Specialist',
          description: '1 full-time creative or junior ads manager',
          guide: [
            'Role: Junior ads manager or creative specialist',
            'Salary: PHP 25-30k/month',
            'Responsibilities: Ad creation, basic optimization, support',
            'Hiring channels: LinkedIn, job boards, referrals',
            'Training: 2-3 weeks on your process'
          ],
          completed: false
        },
        {
          title: 'Close First 3-5 Clients',
          description: 'Your "proof of concept" - get your first wins',
          guide: [
            'Target: Local e-commerce or SaaS businesses',
            'Package: Starter tier (PHP 15-20k/month)',
            'Pitch: "Proven system, dedicated team, guaranteed growth"',
            'Goal: Month 1: 3-5 clients | MRR: PHP 45-100k',
            'Demo: Show case studies, social proof'
          ],
          completed: false
        }
      ]
    },
    {
      id: 2,
      title: 'Operations',
      icon: '⚙️',
      subtitle: 'Create dashboards, automation, and team workflows for scaling',
      color: '#4CAF50',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Goal', value: 'PHP 160-325k' },
        { label: 'New Systems', value: '2' }
      ],
      tasks: [
        {
          title: 'Build Client Dashboard',
          description: 'Real-time reporting: ROAS, spend, conversions',
          guide: [
            'Platform: Looker Studio, Data Studio, or Tableau',
            'Metrics: ROAS, CAC, LTV, spend by channel',
            'Update: Daily or weekly automated',
            'Access: Client login to view real-time data',
            'Time: 5-10 days to setup'
          ],
          completed: false
        },
        {
          title: 'Set Up Automation & Tools',
          description: 'Zapier, Make, Monday.com for workflow automation',
          guide: [
            'Tools: Zapier, Make.com, n8n for integrations',
            'Lead sync: Facebook → CRM → Email auto-follow-up',
            'Reporting: Auto-generate reports to email',
            'Alerts: Alert team when ROAS drops',
            'Time to setup: 2 weeks'
          ],
          completed: false
        },
        {
          title: 'Hire Second Team Member',
          description: 'Specialist or account manager',
          guide: [
            'Role: Account manager or paid ads specialist',
            'Salary: PHP 20-25k/month',
            'Focus: Client support, optimizations, scaling',
            'Goal: 5-8 new clients this month',
            'Total team: 3 people (you + 2)'
          ],
          completed: false
        },
        {
          title: 'Close 5-8 New Clients',
          description: 'Growth tier focuses on mid-market',
          guide: [
            'Total clients: 8-13',
            'Average package: PHP 20-25k/month',
            'Expected MRR: PHP 160-325k',
            'Focus: E-commerce + SaaS',
            '🎯 Keep quality clients only'
          ],
          completed: false
        }
      ]
    },
    {
      id: 3,
      title: 'Outreach',
      icon: '📢',
      subtitle: 'Build authority, content, and social proof for rapid scaling',
      color: '#2196F3',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Target', value: 'PHP 260-525k' },
        { label: 'Testimonials', value: '5' }
      ],
      tasks: [
        {
          title: 'Launch LinkedIn Strategy',
          description: 'Post 3x/week, build network, establish authority',
          guide: [
            'Content: Case studies, tips, results, behind-the-scenes',
            'Frequency: 3 posts/week + daily engagement',
            'Goal: 500+ connections, 50+ monthly leads',
            'Tools: Buffer, Later, or native LinkedIn scheduler',
            'Tone: Helpful, not salesy'
          ],
          completed: false
        },
        {
          title: 'Create Content Hub',
          description: 'Blog posts, case studies, video series',
          guide: [
            'Blog: 2x/month (SEO-optimized)',
            'Case studies: 2-3 detailed client wins',
            'Video: Weekly 5-10 min tips on YouTube',
            'Repurpose: Blog → LinkedIn → Email → Video',
            'Goal: 1000+ monthly organic traffic'
          ],
          completed: false
        },
        {
          title: 'Close 5-8 More Clients',
          description: 'Inbound + outbound sales mix',
          guide: [
            'Total clients by end: 13-21',
            'Mix: 50% inbound (content) + 50% outbound',
            'Expected MRR: PHP 260-525k',
            'Average deal: PHP 20-25k/month',
            '90% client satisfaction target'
          ],
          completed: false
        },
        {
          title: 'Get Testimonials & Case Studies',
          description: 'Video testimonials from top 5 clients',
          guide: [
            'Target: Your best 5 clients',
            'Format: 2-3 min video testimonials',
            'Questions: Results, process, recommendation',
            'Use on: Website, LinkedIn, ads',
            'Goal: 5+ video testimonials'
          ],
          completed: false
        }
      ]
    },
    {
      id: 4,
      title: 'Scaling',
      icon: '📈',
      subtitle: 'Hit PHP 350-400k MRR, streamline operations, prepare for enterprise',
      color: '#9C27B0',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Target', value: 'PHP 350-450k' },
        { label: 'Price Tiers', value: '3' }
      ],
      tasks: [
        {
          title: 'Hire Operations Manager',
          description: 'Manage team, client communication, processes',
          guide: [
            'Role: Ops manager or client success manager',
            'Salary: PHP 30-40k/month',
            'Responsibilities: Team coordination, client communication, process improvement',
            'Goal: Free up your time for sales and strategy',
            'Total team: 4 people (you + 3)'
          ],
          completed: false
        },
        {
          title: 'Introduce Enterprise Tier',
          description: 'Premium service at PHP 50-75k/month',
          guide: [
            'Price: PHP 50-75k/month',
            'Include: Dedicated strategist, weekly calls, advanced optimization',
            'Target: Mid-market + larger brands',
            'Positioning: Premium, results-focused, white-glove service',
            'Goal: Land 2-3 enterprise clients'
          ],
          completed: false
        },
        {
          title: 'Close 5-8 Clients (Mix)',
          description: 'Combination of Growth + Enterprise tiers',
          guide: [
            'Growth tier: 5 clients @ PHP 20-25k/month',
            'Enterprise: 2-3 clients @ PHP 50-75k/month',
            'Total clients by end: 20-32',
            'Expected MRR: PHP 350-450k',
            '✅ Approaching halfway!'
          ],
          completed: false
        },
        {
          title: 'Optimize Pricing & Packaging',
          description: 'Test higher prices, create tiered options',
          guide: [
            'Tier 1: Starter (PHP 15-20k)',
            'Tier 2: Growth (PHP 25-35k)',
            'Tier 3: Enterprise (PHP 50-75k)',
            'Strategy: Value-based pricing, not time-based',
            'Goal: Increase average deal size by 15%'
          ],
          completed: false
        }
      ]
    },
    {
      id: 5,
      title: 'Growth',
      icon: '🚀',
      subtitle: 'Systemize everything, double your sales pipeline, approach PHP 500k MRR',
      color: '#FF9800',
      stats: [
        { label: 'New Clients', value: '5-10' },
        { label: 'MRR Target', value: 'PHP 450-600k' },
        { label: 'Team Size', value: '6' }
      ],
      tasks: [
        {
          title: 'Launch Paid Ads Campaign',
          description: 'Google, LinkedIn, and YouTube ads to generate leads',
          guide: [
            'Budget: PHP 50-75k/month for ads',
            'Channels: Google Search, LinkedIn, YouTube',
            'Goal: 20-30 qualified leads per month',
            'Target CAC: < PHP 10k per client',
            'Track: Lead cost, conversion rate, ROI'
          ],
          completed: false
        },
        {
          title: 'Hire Specialist #3 & #4',
          description: 'Scaling operations: 2 new creatives or strategists',
          guide: [
            'Hire 2 more specialists (creatives, strategists, or analysts)',
            'Salary: PHP 20-30k each',
            'Total team: 6 people',
            'Structure: Manager + 5 team members',
            'Goal: Handle 30-40 clients effortlessly'
          ],
          completed: false
        },
        {
          title: 'Close 5-10 Clients',
          description: 'Momentum from ads + content + referrals',
          guide: [
            'New clients: 5-10',
            'Total clients by end: 25-42',
            'Mix: 50% inbound + 50% outbound',
            'Expected MRR: PHP 450-600k',
            '🎯 On track to hit PHP 500k!'
          ],
          completed: false
        },
        {
          title: 'Build Strategic Partnerships',
          description: 'Partner with complementary agencies for referrals',
          guide: [
            'Target: Design, copywriting, development agencies',
            'Structure: Mutual referral agreement (20% commission)',
            'Goal: 5-10 strategic partners',
            'Expected: 5-10 referral clients per month',
            'Lifetime value: High-quality, lower CAC'
          ],
          completed: false
        }
      ]
    },
    {
      id: 6,
      title: 'Leadership',
      icon: '👑',
      subtitle: 'Hit PHP 500k+ MRR target, build sustainable systems, plan year 2',
      color: '#F44336',
      stats: [
        { label: 'Final Clients', value: '5-7' },
        { label: 'Final MRR', value: 'PHP 600-800k+' },
        { label: 'Goal Achieved!', value: '🎯' }
      ],
      tasks: [
        {
          title: 'Publish Case Study & Results',
          description: 'Showcase your top 3 client wins and your story',
          guide: [
            'Format: PDF + video',
            'Include: Client challenge, your strategy, results (ROAS, revenue)',
            'Platforms: Website, LinkedIn, email, ads',
            'Goal: 100+ downloads per case study',
            'Outcome: Lead qualification + social proof'
          ],
          completed: false
        },
        {
          title: 'Refresh Website',
          description: 'New case studies, results, testimonials',
          guide: [
            'Hero: "From 0 to PHP 500k+ MRR: Proven Ad Strategy"',
            'Case studies: 6-8 new wins',
            'Testimonials: Video carousel (8-10 clients)',
            'Social proof: "30+ clients," "PHP 500k+ MRR," "6 months"',
            'CTA: "Get Started" linked to booking call'
          ],
          completed: false
        },
        {
          title: 'Host Webinar Series',
          description: '2-3 advanced webinars',
          guide: [
            '"Scaling Your Ad Budget: 6-Month Playbook"',
            '"AI + Creativity: Building Winning Campaigns"',
            '"Video Ads That Go Viral: Strategy + Execution"',
            'Format: Zoom, 60 min, record for YouTube',
            'Goal: 50+ attendees per webinar, 500+ views on YouTube'
          ],
          completed: false
        },
        {
          title: 'Hire Account Manager & Close Goals',
          description: '1 full-time, Growth tier dedicated support',
          guide: [
            'Hire: Account manager (PHP 35-45k/month)',
            'Responsibility: Own P&L, manage Growth tier clients',
            'Close: 5-7 final clients this month',
            'Total by end: 30-50+ clients',
            'Final MRR: PHP 600-800k+'
          ],
          completed: false
        },
        {
          title: 'Plan Year 2 Strategy',
          description: 'Double down, new services, bigger team',
          guide: [
            'Revenue: PHP 1.5M+ MRR (50-60 clients)',
            'Team: 10-15 people (agency + support)',
            'Services: Email, content strategy, full-funnel',
            'Market: Expand to Singapore, Malaysia',
            'Infrastructure: CTO, agency OS with AI'
          ],
          completed: false
        }
      ]
    }
  ],
  pricingTiers: [
    {
      name: 'Starter',
      price: 'PHP 15-20k',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Single platform management',
        'Weekly performance reports',
        'Basic A/B testing',
        'Email support',
        'Monthly strategy call'
      ]
    },
    {
      name: 'Growth',
      price: 'PHP 25-35k',
      description: 'For growing businesses ready to scale',
      features: [
        'Multi-platform management',
        'Daily performance monitoring',
        'Advanced A/B testing & optimization',
        'Priority support',
        'Bi-weekly strategy calls',
        'Creative design support'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'PHP 50-75k',
      description: 'Premium white-glove service for established brands',
      features: [
        'Full-funnel campaign management',
        'Dedicated strategist',
        'Real-time dashboard access',
        '24/7 priority support',
        'Weekly strategy sessions',
        'Advanced analytics & attribution',
        'Custom creative production'
      ]
    }
  ]
};

export const optimizationStrategies = [
  {
    category: 'Campaign Optimization',
    icon: '🎯',
    strategies: [
      {
        title: 'Audience Segmentation',
        description: 'Split test different audience segments to find your best performers',
        impact: 'High',
        timeframe: '1-2 weeks',
        steps: [
          'Create 3-5 audience segments based on demographics, interests, behaviors',
          'Run equal budget tests across all segments',
          'Track CPM, CTR, CPC, and conversion rate for each',
          'Scale winners, pause losers within 5-7 days',
          'Refresh audiences every 30 days'
        ]
      },
      {
        title: 'Ad Creative Testing',
        description: 'Continuous A/B testing of ad creatives to maximize engagement',
        impact: 'High',
        timeframe: 'Ongoing',
        steps: [
          'Test 3-5 ad variations per campaign',
          'Vary: headlines, images, CTAs, ad copy',
          'Run for minimum 500 impressions per variant',
          'Winner: Highest CTR + lowest CPA',
          'Refresh creative every 14-21 days to avoid ad fatigue'
        ]
      },
      {
        title: 'Bid Strategy Optimization',
        description: 'Optimize bidding strategies based on campaign goals',
        impact: 'Medium',
        timeframe: '2-3 weeks',
        steps: [
          'Start with manual CPC for new campaigns',
          'Switch to Target CPA after 50+ conversions',
          'Use Maximize Conversions for lead gen',
          'Test Target ROAS for e-commerce',
          'Monitor daily and adjust based on performance'
        ]
      },
      {
        title: 'Landing Page Optimization',
        description: 'Improve conversion rates through landing page testing',
        impact: 'Very High',
        timeframe: '1-4 weeks',
        steps: [
          'Test headlines, hero images, and CTAs',
          'Reduce form fields (3-5 max)',
          'Add trust signals (testimonials, logos, guarantees)',
          'Optimize page speed (< 3 seconds load time)',
          'Mobile-first design (60%+ traffic is mobile)'
        ]
      }
    ]
  },
  {
    category: 'Budget Management',
    icon: '💰',
    strategies: [
      {
        title: 'The 80/20 Rule',
        description: 'Allocate 80% of budget to proven winners, 20% to testing',
        impact: 'High',
        timeframe: 'Ongoing',
        steps: [
          'Identify your top 20% of campaigns driving 80% of results',
          'Allocate 80% of budget to these winners',
          'Use remaining 20% for testing new audiences, creatives, platforms',
          'Review and rebalance weekly',
          'Scale winners by 20-30% increments'
        ]
      },
      {
        title: 'Dayparting',
        description: 'Schedule ads during peak conversion hours',
        impact: 'Medium',
        timeframe: '2-3 weeks',
        steps: [
          'Analyze conversion data by hour and day',
          'Identify 3-4 hour windows with highest ROAS',
          'Increase bids 20-30% during peak hours',
          'Decrease or pause during low-performing hours',
          'Test different schedules for different audiences'
        ]
      },
      {
        title: 'Platform Diversification',
        description: 'Don\'t put all eggs in one basket - diversify ad spend',
        impact: 'High',
        timeframe: '1-2 months',
        steps: [
          'Start with 1-2 platforms (Facebook/Google)',
          'Once profitable, allocate 10-15% to test new platforms',
          'Try: TikTok, LinkedIn, YouTube, Pinterest',
          'Compare CAC and LTV across platforms',
          'Scale platforms with best unit economics'
        ]
      }
    ]
  },
  {
    category: 'Conversion Rate Optimization',
    icon: '📊',
    strategies: [
      {
        title: 'Funnel Analysis',
        description: 'Identify and fix leaks in your conversion funnel',
        impact: 'Very High',
        timeframe: '1-3 weeks',
        steps: [
          'Map complete customer journey (ad → landing page → checkout)',
          'Track drop-off rates at each stage',
          'Identify biggest leak (usually landing page or checkout)',
          'Prioritize fixing stages with >40% drop-off',
          'A/B test solutions and measure impact'
        ]
      },
      {
        title: 'Retargeting Campaigns',
        description: 'Re-engage users who didn\'t convert on first visit',
        impact: 'High',
        timeframe: '1-2 weeks',
        steps: [
          'Set up pixel tracking on all pages',
          'Create audiences: page visitors, cart abandoners, video viewers',
          'Build sequential retargeting (soft → medium → hard sell)',
          'Offer incentive (discount, free shipping, bonus)',
          'Typical ROAS: 3-5x higher than cold traffic'
        ]
      },
      {
        title: 'Social Proof & Urgency',
        description: 'Leverage psychological triggers to increase conversions',
        impact: 'Medium',
        timeframe: '1 week',
        steps: [
          'Add customer testimonials and reviews',
          'Display trust badges (secure checkout, money-back guarantee)',
          'Show real-time activity ("5 people viewing this")',
          'Create urgency (limited-time offer, countdown timer)',
          'Test different combinations of triggers'
        ]
      }
    ]
  },
  {
    category: 'Scaling Strategies',
    icon: '📈',
    strategies: [
      {
        title: 'Horizontal Scaling',
        description: 'Duplicate winning campaigns to new audiences and platforms',
        impact: 'High',
        timeframe: '2-4 weeks',
        steps: [
          'Identify campaigns with ROAS > 3x',
          'Duplicate to similar audiences (lookalikes, interests)',
          'Test same creative on different platforms',
          'Increase budget by 20% every 3-5 days if profitable',
          'Monitor for audience fatigue (frequency > 3)'
        ]
      },
      {
        title: 'Vertical Scaling',
        description: 'Increase budget on winning campaigns incrementally',
        impact: 'High',
        timeframe: '3-6 weeks',
        steps: [
          'Only scale campaigns with 7+ days of stable performance',
          'Increase budget by 20-30% every 3-5 days',
          'Monitor CPA - should not increase >15%',
          'If CPA spikes, roll back budget increase',
          'Test higher budgets in duplicate campaigns first'
        ]
      },
      {
        title: 'Lookalike Audience Expansion',
        description: 'Find new customers similar to your best existing customers',
        impact: 'Very High',
        timeframe: '2-3 weeks',
        steps: [
          'Create seed audience: top 1-5% of customers by LTV',
          'Build lookalike audiences at 1%, 3%, 5%, 10%',
          'Start with 1% (most similar)',
          'Scale to broader percentages as 1% saturates',
          'Refresh lookalikes quarterly with new customer data'
        ]
      }
    ]
  },
  {
    category: 'Analytics & Reporting',
    icon: '📉',
    strategies: [
      {
        title: 'Attribution Modeling',
        description: 'Understand which touchpoints drive conversions',
        impact: 'High',
        timeframe: '2-4 weeks',
        steps: [
          'Set up multi-touch attribution (first click, last click, linear)',
          'Track customer journey across all channels',
          'Identify assist channels vs direct converters',
          'Adjust budget allocation based on true contribution',
          'Use Google Analytics 4 + platform pixels for full view'
        ]
      },
      {
        title: 'Cohort Analysis',
        description: 'Track customer retention and LTV by acquisition cohort',
        impact: 'High',
        timeframe: 'Ongoing',
        steps: [
          'Group customers by acquisition month',
          'Track 30, 60, 90-day retention rates',
          'Calculate LTV for each cohort',
          'Identify highest-value acquisition channels',
          'Optimize campaigns to attract high-LTV customers'
        ]
      },
      {
        title: 'Real-Time Dashboards',
        description: 'Monitor campaign performance in real-time',
        impact: 'Medium',
        timeframe: '1-2 weeks',
        steps: [
          'Build dashboard in Google Data Studio or Tableau',
          'Connect all ad platforms + GA4 + CRM',
          'Track: spend, impressions, clicks, conversions, ROAS',
          'Set up alerts for performance drops',
          'Review daily, optimize based on data'
        ]
      }
    ]
  }
];
