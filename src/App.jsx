import React, { useState } from 'react';

const App = () => {
  const [activeMonth, setActiveMonth] = useState(0);

  const months = [
    {
      title: 'Month 1: Foundation',
      icon: '🏗️',
      subtitle: 'Establish processes, hire your team, and get your first 3-5 clients',
      stats: [
        { label: 'First Clients', value: '3-5' },
        { label: 'Starting MRR', value: 'PHP 45-100k' },
        { label: 'Team Member', value: '1' },
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
            'Timeline: 1-2 weeks',
          ],
        },
        {
          title: 'Document Your Process',
          description: 'Create SOPs for ad management, reporting, client communication',
          guide: [
            'Campaign setup: Facebook, Google Ads, TikTok',
            'Daily/Weekly reporting: KPIs, dashboards',
            'Client communication: Calls, updates, feedback',
            'Optimization process: A/B testing, scaling rules',
            'Tool: Notion, Google Docs, or Loom videos',
          ],
        },
        {
          title: 'Hire Your First Specialist',
          description: '1 full-time creative or junior ads manager',
          guide: [
            'Role: Junior ads manager or creative specialist',
            'Salary: PHP 25-30k/month',
            'Responsibilities: Ad creation, basic optimization, support',
            'Hiring channels: LinkedIn, job boards, referrals',
            'Training: 2-3 weeks on your process',
          ],
        },
        {
          title: 'Close First 3-5 Clients',
          description: 'Your "proof of concept" - get your first wins',
          guide: [
            'Target: Local e-commerce or SaaS businesses',
            'Package: Starter tier (PHP 15-20k/month)',
            'Pitch: "Proven system, dedicated team, guaranteed growth"',
            'Goal: Month 1: 3-5 clients | MRR: PHP 45-100k',
            'Demo: Show case studies, social proof',
          ],
        },
      ],
    },
    {
      title: 'Month 2: Operations',
      icon: '⚙️',
      subtitle: 'Create dashboards, automation, and team workflows for scaling',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Goal', value: 'PHP 160-325k' },
        { label: 'New Systems', value: '2' },
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
            'Time: 5-10 days to setup',
          ],
        },
        {
          title: 'Set Up Automation & Tools',
          description: 'Zapier, Make, Monday.com for workflow automation',
          guide: [
            'Tools: Zapier, Make.com, n8n for integrations',
            'Lead sync: Facebook → CRM → Email auto-follow-up',
            'Reporting: Auto-generate reports to email',
            'Alerts: Alert team when ROAS drops',
            'Time to setup: 2 weeks',
          ],
        },
        {
          title: 'Hire Second Team Member',
          description: 'Specialist or account manager',
          guide: [
            'Role: Account manager or paid ads specialist',
            'Salary: PHP 20-25k/month',
            'Focus: Client support, optimizations, scaling',
            'Goal: 5-8 new clients this month',
            'Total team: 3 people (you + 2)',
          ],
        },
        {
          title: 'Close 5-8 New Clients',
          description: 'Growth tier focuses on mid-market',
          guide: [
            'Total clients: 8-13',
            'Average package: PHP 20-25k/month',
            'Expected MRR: PHP 160-325k',
            'Focus: E-commerce + SaaS',
            '🎯 Keep quality clients only',
          ],
        },
      ],
    },
    {
      title: 'Month 3: Outreach',
      icon: '📢',
      subtitle: 'Build authority, content, and social proof for rapid scaling',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Target', value: 'PHP 260-525k' },
        { label: 'Testimonials', value: '5' },
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
            'Tone: Helpful, not salesy',
          ],
        },
        {
          title: 'Create Content Hub',
          description: 'Blog posts, case studies, video series',
          guide: [
            'Blog: 2x/month (SEO-optimized)',
            'Case studies: 2-3 detailed client wins',
            'Video: Weekly 5-10 min tips on YouTube',
            'Repurpose: Blog → LinkedIn → Email → Video',
            'Goal: 1000+ monthly organic traffic',
          ],
        },
        {
          title: 'Close 5-8 More Clients',
          description: 'Inbound + outbound sales mix',
          guide: [
            'Total clients by end: 13-21',
            'Mix: 50% inbound (content) + 50% outbound',
            'Expected MRR: PHP 260-525k',
            'Average deal: PHP 20-25k/month',
            '90% client satisfaction target',
          ],
        },
        {
          title: 'Get Testimonials & Case Studies',
          description: 'Video testimonials from top 5 clients',
          guide: [
            'Target: Your best 5 clients',
            'Format: 2-3 min video testimonials',
            'Questions: Results, process, recommendation',
            'Use on: Website, LinkedIn, ads',
            'Goal: 5+ video testimonials',
          ],
        },
      ],
    },
    {
      title: 'Month 4: Scaling',
      icon: '📈',
      subtitle: 'Hit PHP 350-400k MRR, streamline operations, prepare for enterprise',
      stats: [
        { label: 'New Clients', value: '5-8' },
        { label: 'MRR Target', value: 'PHP 350-450k' },
        { label: 'Price Tiers', value: '3' },
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
            'Total team: 4 people (you + 3)',
          ],
        },
        {
          title: 'Introduce Enterprise Tier',
          description: 'Premium service at PHP 50-75k/month',
          guide: [
            'Price: PHP 50-75k/month',
            'Include: Dedicated strategist, weekly calls, advanced optimization',
            'Target: Mid-market + larger brands',
            'Positioning: Premium, results-focused, white-glove service',
            'Goal: Land 2-3 enterprise clients',
          ],
        },
        {
          title: 'Close 5-8 Clients (Mix)',
          description: 'Combination of Growth + Enterprise tiers',
          guide: [
            'Growth tier: 5 clients @ PHP 20-25k/month',
            'Enterprise: 2-3 clients @ PHP 50-75k/month',
            'Total clients by end: 20-32',
            'Expected MRR: PHP 350-450k',
            '✅ Approaching halfway!',
          ],
        },
        {
          title: 'Optimize Pricing & Packaging',
          description: 'Test higher prices, create tiered options',
          guide: [
            'Tier 1: Starter (PHP 15-20k)',
            'Tier 2: Growth (PHP 25-35k)',
            'Tier 3: Enterprise (PHP 50-75k)',
            'Strategy: Value-based pricing, not time-based',
            'Goal: Increase average deal size by 15%',
          ],
        },
      ],
    },
    {
      title: 'Month 5: Growth',
      icon: '🚀',
      subtitle: 'Systemize everything, double your sales pipeline, approach PHP 500k MRR',
      stats: [
        { label: 'New Clients', value: '5-10' },
        { label: 'MRR Target', value: 'PHP 450-600k' },
        { label: 'Team Size', value: '6' },
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
            'Track: Lead cost, conversion rate, ROI',
          ],
        },
        {
          title: 'Hire Specialist #3 & #4',
          description: 'Scaling operations: 2 new creatives or strategists',
          guide: [
            'Hire 2 more specialists (creatives, strategists, or analysts)',
            'Salary: PHP 20-30k each',
            'Total team: 6 people',
            'Structure: Manager + 5 team members',
            'Goal: Handle 30-40 clients effortlessly',
          ],
        },
        {
          title: 'Close 5-10 Clients',
          description: 'Momentum from ads + content + referrals',
          guide: [
            'New clients: 5-10',
            'Total clients by end: 25-42',
            'Mix: 50% inbound + 50% outbound',
            'Expected MRR: PHP 450-600k',
            '🎯 On track to hit PHP 500k!',
          ],
        },
        {
          title: 'Build Strategic Partnerships',
          description: 'Partner with complementary agencies for referrals',
          guide: [
            'Target: Design, copywriting, development agencies',
            'Structure: Mutual referral agreement (20% commission)',
            'Goal: 5-10 strategic partners',
            'Expected: 5-10 referral clients per month',
            'Lifetime value: High-quality, lower CAC',
          ],
        },
      ],
    },
    {
      title: 'Month 6: Leadership',
      icon: '👑',
      subtitle: 'Hit PHP 500k+ MRR target, build sustainable systems, plan year 2',
      stats: [
        { label: 'Final Clients', value: '5-7' },
        { label: 'Final MRR', value: 'PHP 600-800k+' },
        { label: 'Goal Achieved!', value: '🎯' },
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
            'Outcome: Lead qualification + social proof',
          ],
        },
        {
          title: 'Refresh Website',
          description: 'New case studies, results, testimonials',
          guide: [
            'Hero: "From 0 to PHP 500k+ MRR: Proven Ad Strategy"',
            'Case studies: 6-8 new wins',
            'Testimonials: Video carousel (8-10 clients)',
            'Social proof: "30+ clients," "PHP 500k+ MRR," "6 months"',
            'CTA: "Get Started" linked to booking call',
          ],
        },
        {
          title: 'Host Webinar Series',
          description: '2-3 advanced webinars',
          guide: [
            '"Scaling Your Ad Budget: 6-Month Playbook"',
            '"AI + Creativity: Building Winning Campaigns"',
            '"Video Ads That Go Viral: Strategy + Execution"',
            'Format: Zoom, 60 min, record for YouTube',
            'Goal: 50+ attendees per webinar, 500+ views on YouTube',
          ],
        },
        {
          title: 'Hire Account Manager & Close Goals',
          description: '1 full-time, Growth tier dedicated support',
          guide: [
            'Hire: Account manager (PHP 35-45k/month)',
            'Responsibility: Own P&L, manage Growth tier clients',
            'Close: 5-7 final clients this month',
            'Total by end: 30-50+ clients',
            'Final MRR: PHP 600-800k+',
          ],
        },
        {
          title: 'Plan Year 2 Strategy',
          description: 'Double down, new services, bigger team',
          guide: [
            'Revenue: PHP 1.5M+ MRR (50-60 clients)',
            'Team: 10-15 people (agency + support)',
            'Services: Email, content strategy, full-funnel',
            'Market: Expand to Singapore, Malaysia',
            'Infrastructure: CTO, agency OS with AI',
          ],
        },
      ],
    },
  ];

  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1>Orange Velocity - 6 Month Execution Playbook</h1>
        <p>From zero to PHP 500k MRR</p>
      </header>

      <div style={styles.tabs}>
        {months.map((month, index) => (
          <button
            key={index}
            onClick={() => setActiveMonth(index)}
            style={activeMonth === index ? styles.activeTab : styles.tab}
          >
            {month.icon} {month.title}
          </button>
        ))}
      </div>

      <div style={styles.content}>
        <div style={styles.monthHeader}>
          <h2>
            {months[activeMonth].icon} {months[activeMonth].title}
          </h2>
          <p>{months[activeMonth].subtitle}</p>
        </div>

        <div style={styles.stats}>
          {months[activeMonth].stats.map((stat, index) => (
            <div key={index} style={styles.statItem}>
              <div style={styles.statValue}>{stat.value}</div>
              <div style={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div style={styles.tasks}>
          {months[activeMonth].tasks.map((task, index) => (
            <TaskCard key={index} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TaskCard = ({ task }) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
    <div style={styles.taskCard}>
      <div style={styles.taskHeader}>
        <div style={styles.taskCheckbox}>✓</div>
        <div style={styles.taskContent}>
          <h3 style={styles.taskTitle}>{task.title}</h3>
          <p style={styles.taskDescription}>{task.description}</p>
        </div>
      </div>
      <button
        onClick={() => setShowGuide(!showGuide)}
        style={styles.toggleButton}
      >
        {showGuide ? '− Hide Guide' : '+ Show Guide'}
      </button>
      {showGuide && (
        <div style={styles.guide}>
          <strong>Implementation Guide:</strong>
          <ol>
            {task.guide.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

const styles = {
  app: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Inter, system-ui, sans-serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '2rem',
    overflowX: 'auto',
    paddingBottom: '0.5rem',
  },
  tab: {
    padding: '0.75rem 1.25rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    fontWeight: '600',
    color: '#6b7280',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
  },
  activeTab: {
    padding: '0.75rem 1.25rem',
    background: 'transparent',
    border: 'none',
    borderBottom: '2px solid #ff6b35',
    cursor: 'pointer',
    fontWeight: '600',
    color: '#ff6b35',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
  },
  content: {
    background: '#f8f8f8',
    border: '1px solid #e5e5e5',
    borderRadius: '1.25rem',
    padding: '2rem',
  },
  monthHeader: {
    marginBottom: '2rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #e5e5e5',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginBottom: '2rem',
    paddingTop: '2rem',
    borderTop: '1px solid #e5e5e5',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '1.875rem',
    fontWeight: '800',
    color: '#ff6b35',
    marginBottom: '0.25rem',
  },
  statLabel: {
    fontSize: '0.85rem',
    color: '#6b7280',
    fontWeight: '500',
  },
  tasks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  taskCard: {
    background: '#ffffff',
    borderRadius: '0.625rem',
    padding: '1.5rem',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
  taskHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
  },
  taskCheckbox: {
    width: '20px',
    height: '20px',
    border: '2px solid #e5e5e5',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    marginTop: '2px',
  },
  taskContent: {
    flex: 1,
  },
  taskTitle: {
    fontSize: '1rem',
    fontWeight: '600',
    marginBottom: '0.25rem',
  },
  taskDescription: {
    fontSize: '0.875rem',
    color: '#6b7280',
  },
  toggleButton: {
    fontSize: '0.8rem',
    color: '#ff6b35',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    padding: 0,
  },
  guide: {
    marginTop: '1rem',
    padding: '1rem',
    background: '#fff5f0',
    borderLeft: '3px solid #ff6b35',
    borderRadius: '4px',
    fontSize: '0.85rem',
    lineHeight: 1.6,
  },
};

export default App;
