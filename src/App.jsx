import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeMonth, setActiveMonth] = useState(0);
  const [completedTasks, setCompletedTasks] = useState({});
  const [showGuides, setShowGuides] = useState({});
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [startDate, setStartDate] = useState(() => {
    return localStorage.getItem('playbookStartDate') || '2025-11-01';
  });
  const [aiPlanGenerated, setAiPlanGenerated] = useState(false);

  // Track scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-switch to current month on load
  useEffect(() => {
    const status = getCurrentStatus();
    setActiveMonth(status.currentMonthIndex);
  }, []);

  // Calculate overall progress
  const getOverallProgress = () => {
    const totalTasks = months.reduce((acc, month) => acc + month.tasks.length, 0);
    const completedCount = Object.keys(completedTasks).filter(key => completedTasks[key]).length;
    return Math.round((completedCount / totalTasks) * 100);
  };

  const getMonthProgress = (monthIndex) => {
    const month = months[monthIndex];
    const completedInMonth = month.tasks.filter((_, taskIndex) =>
      completedTasks[`${monthIndex}-${taskIndex}`]
    ).length;
    return Math.round((completedInMonth / month.tasks.length) * 100);
  };

  // Calculate current status based on start date
  const getCurrentStatus = () => {
    const start = new Date(startDate);
    const today = new Date();
    const diffTime = Math.abs(today - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const currentMonthIndex = Math.floor(diffDays / 30);
    const daysIntoMonth = diffDays % 30;
    const daysInMonth = 30;
    const daysLeft = daysInMonth - daysIntoMonth;

    return {
      currentMonthIndex: Math.min(currentMonthIndex, 5),
      daysIntoMonth: Math.max(0, daysIntoMonth),
      daysLeft: Math.max(0, daysLeft),
      totalDaysElapsed: diffDays,
      isOnTrack: activeMonth === Math.min(currentMonthIndex, 5)
    };
  };

  // Generate AI Plan (simulated)
  const generateAiPlan = () => {
    setTimeout(() => {
      setAiPlanGenerated(true);
      localStorage.setItem('aiPlanGenerated', 'true');
      alert('✅ AI Plan Generated!\n\nBased on your start date, we\'ve optimized your 6-month roadmap:\n\n• Adjusted milestone timelines\n• Personalized task priorities\n• Suggested team hiring schedule\n• Optimized revenue targets');
    }, 1000);
  };

  // Load AI plan status on mount
  useEffect(() => {
    const generated = localStorage.getItem('aiPlanGenerated') === 'true';
    setAiPlanGenerated(generated);
  }, []);

  const toggleTask = (monthIndex, taskIndex) => {
    const key = `${monthIndex}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleGuide = (monthIndex, taskIndex) => {
    const key = `${monthIndex}-${taskIndex}`;
    setShowGuides(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const switchMonth = (monthIndex) => {
    setActiveMonth(monthIndex);
  };

  const resetProgress = () => {
    if (window.confirm('Are you sure? This will reset all checkboxes.')) {
      setCompletedTasks({});
      setShowGuides({});
    }
  };

  const downloadPDF = () => {
    window.print();
  };

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

  const status = getCurrentStatus();

  return (
    <div className="app-container">
      {/* Floating Toggle Button */}
      <button
        className="floating-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        title={sidebarOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {sidebarOpen ? '←' : '→'}
      </button>

      {/* Sidebar */}
      <div className={`toc-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <div className="brand-icon">OV</div>
            <span>Orange Velocity</span>
          </div>
        </div>

        {/* Current Status */}
        <div className="status-card">
          <div className="status-label">Current Stage</div>
          <div className="status-month">
            <span className="status-icon">{months[status.currentMonthIndex]?.icon}</span>
            <span className="status-text">{months[status.currentMonthIndex]?.title}</span>
          </div>
          <div className="status-days">
            <span className="days-number">{status.daysLeft}</span>
            <span className="days-label">days left</span>
          </div>
          <div className="status-divider"></div>
          <div className="overall-progress-mini">
            <div className="progress-row">
              <span>Overall Progress</span>
              <strong>{getOverallProgress()}%</strong>
            </div>
            <div className="progress-bar-mini">
              <div className="progress-fill-mini" style={{width: `${getOverallProgress()}%`}}></div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {!aiPlanGenerated && (
          <div className="ai-setup-card">
            <button className="ai-setup-btn" onClick={generateAiPlan}>
              <span className="ai-icon">⚡</span>
              <span>Generate AI Plan</span>
            </button>
          </div>
        )}

        {aiPlanGenerated && (
          <div className="plan-status">
            <div className="plan-status-item">
              <span className="plan-icon">✓</span>
              <span>AI Plan Active</span>
            </div>
          </div>
        )}

        {/* Start Date */}
        <div className="date-setter">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
              localStorage.setItem('playbookStartDate', e.target.value);
            }}
          />
        </div>

        {/* Months Navigation */}
        <div className="months-nav">
          {months.map((month, index) => (
            <button
              key={index}
              className={`month-nav-item ${activeMonth === index ? 'active' : ''}`}
              onClick={() => switchMonth(index)}
              title={month.subtitle}
            >
              <span className="month-nav-icon">{month.icon}</span>
              <div className="month-nav-content">
                <div className="month-nav-title">Month {index + 1}</div>
                <div className="month-nav-subtitle">{month.subtitle.substring(0, 30)}...</div>
              </div>
              <div className="month-nav-progress">
                <div className="mini-progress-bar">
                  <div
                    className="mini-progress-fill"
                    style={{width: `${getMonthProgress(index)}%`}}
                  ></div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`main-content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Scroll Progress Bar */}
        <div className="scroll-progress-bar">
          <div className="scroll-progress-fill" style={{width: `${scrollProgress}%`}}></div>
        </div>

        {/* Status Indicator */}
        <div className="status-indicator">
          <div className="status-indicator-content">
            <div className={`status-badge ${status.isOnTrack ? 'on-track' : 'behind'}`}>
              {status.isOnTrack ? '✓ On Track' : '⚠ Behind Schedule'}
            </div>
            <div className="status-details">
              <span>Day {status.totalDaysElapsed} of 180</span>
              <span className="separator">•</span>
              <span>Expected: Month {status.currentMonthIndex + 1}</span>
              <span className="separator">•</span>
              <span>Actual: Month {activeMonth + 1}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>The Ultimate <span className="highlight">6-Month Execution</span> Playbook</h1>
              <p className="hero-subtitle">From zero to PHP 500k MRR with step-by-step tasks, proven strategies, and detailed implementation guides.</p>

              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="stat-number">6</div>
                  <div className="stat-label">Months</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">24</div>
                  <div className="stat-label">Tasks</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">3</div>
                  <div className="stat-label">Tiers</div>
                </div>
                <div className="hero-stat">
                  <div className="stat-number">500k+</div>
                  <div className="stat-label">PHP MRR</div>
                </div>
              </div>

              <div className="hero-cta">
                <button className="btn-primary" onClick={() => switchMonth(status.currentMonthIndex)}>
                  🚀 Go to Current Month
                </button>
                <button className="btn-secondary" onClick={downloadPDF}>
                  📄 Download PDF
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Month Detail Section */}
        <section className="month-detail">
          <div className="container">
            <div className={`month-detail-content active`}>
              {/* Month Header */}
              <div className="month-detail-header">
                <div className="month-icon-large">{months[activeMonth].icon}</div>
                <div className="month-header-content">
                  <div className="month-badge">Month {activeMonth + 1} • {getMonthProgress(activeMonth)}% Complete</div>
                  <h2>{months[activeMonth].title}</h2>
                  <p>{months[activeMonth].subtitle}</p>
                </div>
              </div>

              <div className="month-detail-grid">
                {/* Left Column: Checklist */}
                <div className="month-detail-left">
                  <div className="detail-card">
                    <div className="detail-card-header">
                      <h3>📋 Task Checklist</h3>
                      <div className="task-progress-small">
                        <span>{months[activeMonth].tasks.filter((_, taskIndex) => completedTasks[`${activeMonth}-${taskIndex}`]).length}/{months[activeMonth].tasks.length}</span>
                      </div>
                    </div>

                    <div className="tasks-grid">
                      {months[activeMonth].tasks.map((task, taskIndex) => {
                        const isCompleted = completedTasks[`${activeMonth}-${taskIndex}`];
                        const guideVisible = showGuides[`${activeMonth}-${taskIndex}`];

                        return (
                          <div
                            key={taskIndex}
                            className={`task-card ${isCompleted ? 'completed' : ''}`}
                          >
                            <div className="task-card-header" onClick={() => toggleTask(activeMonth, taskIndex)}>
                              <div className={`task-card-checkbox ${isCompleted ? 'checked' : ''}`}>
                                {isCompleted && '✓'}
                              </div>
                              <div className="task-card-info">
                                <h4>{task.title}</h4>
                                <p>{task.description}</p>
                              </div>
                              <button
                                className="task-card-toggle"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleGuide(activeMonth, taskIndex);
                                }}
                              >
                                {guideVisible ? '−' : '+'}
                              </button>
                            </div>
                            {guideVisible && (
                              <div className="task-card-guide">
                                <strong>Implementation Guide:</strong>
                                <ol>
                                  {task.guide.map((item, guideIndex) => (
                                    <li key={guideIndex}>{item}</li>
                                  ))}
                                </ol>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Right Column: Resources & Stats */}
                <div className="month-detail-right">
                  {/* Month Stats */}
                  <div className="detail-card">
                    <div className="detail-card-header">
                      <h3>📊 Target Metrics</h3>
                    </div>
                    <div className="stats-grid">
                      {months[activeMonth].stats.map((stat, statIndex) => (
                        <div key={statIndex} className="stat-card">
                          <div className="stat-value">{stat.value}</div>
                          <div className="stat-label">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Resources */}
                  <div className="detail-card">
                    <div className="detail-card-header">
                      <h3>🔑 Key Resources</h3>
                    </div>
                    <div className="resources-list">
                      <button className="resource-link" onClick={() => alert('Resource: Implementation Guide')}>
                        → Implementation Guide
                      </button>
                      <button className="resource-link" onClick={() => alert('Resource: Templates')}>
                        → Download Templates
                      </button>
                      <button className="resource-link" onClick={() => alert('Resource: Best Practices')}>
                        → Best Practices
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container">
            <p><strong>Orange Velocity</strong> | 6-Month Interactive Execution Checklist</p>
            <p>Built for Julius, Shekinah & Kiannah | Target: PHP 500k MRR in 6 months | November 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
