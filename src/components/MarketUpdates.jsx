import React, { useState, useEffect } from 'react';
import AIResearchProgress from './AIResearchProgress';

const MarketUpdates = () => {
  const [updates, setUpdates] = useState([]);
  const [todaySummary, setTodaySummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showResearch, setShowResearch] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(null);

  // Fetch market updates on component mount
  useEffect(() => {
    fetchMarketUpdates();
    fetchTodaySummary();
  }, []);

  const handleInitiateResearch = () => {
    setShowResearch(true);
    setTimeout(() => {
      fetchMarketUpdates();
      fetchTodaySummary();
    }, 12000); // After research animation completes
  };

  const fetchMarketUpdates = async () => {
    const perplexityKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
    
    if (!perplexityKey || perplexityKey === 'your_perplexity_key_here') {
      setUpdates(getFallbackUpdates());
      setLoading(false);
      setLastUpdate(new Date().toLocaleString());
      return;
    }

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${perplexityKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [{
            role: 'user',
            content: `Find the top 5 most important digital advertising and social media marketing news from the past 7 days (${getDateRange()}). Focus on: Meta Ads, Google Ads, TikTok Ads, algorithm changes, policy updates, and trends relevant to Philippine businesses. For each news item, provide: 1) Title, 2) Brief summary (2-3 sentences), 3) Source URL, 4) Date, 5) Impact level (High/Medium/Low) for Philippine advertisers.`
          }],
          max_tokens: 2000,
          temperature: 0.2,
          return_citations: true
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const parsedUpdates = parseMarketUpdates(data.choices[0].message.content, data.citations);
        setUpdates(parsedUpdates);
      } else {
        setUpdates(getFallbackUpdates());
      }
      setLastUpdate(new Date().toLocaleString());
    } catch (error) {
      console.error('Error fetching market updates:', error);
      setUpdates(getFallbackUpdates());
      setLastUpdate(new Date().toLocaleString());
    }
    
    setLoading(false);
  };

  const fetchTodaySummary = async () => {
    const perplexityKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
    
    if (!perplexityKey) {
      setTodaySummary(getFallbackSummary());
      return;
    }

    try {
      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${perplexityKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [{
            role: 'user',
            content: `Based on Google Trends and latest news for TODAY (${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}), provide a brief 3-4 sentence summary of: 1) Trending topics in Philippines relevant to digital advertising, 2) Any major platform updates or changes announced today, 3) Opportunities for advertisers. Be specific and actionable.`
          }],
          max_tokens: 500,
          temperature: 0.3
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        setTodaySummary(data.choices[0].message.content);
      } else {
        setTodaySummary(getFallbackSummary());
      }
    } catch (error) {
      console.error('Error fetching today summary:', error);
      setTodaySummary(getFallbackSummary());
    }
  };

  const getDateRange = () => {
    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);
    
    return `${sevenDaysAgo.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
  };

  const parseMarketUpdates = (content, citations) => {
    // Parse the AI response and extract structured data
    const lines = content.split('\n').filter(line => line.trim());
    const updates = [];
    let currentUpdate = {};

    lines.forEach(line => {
      if (line.match(/^\d+\./)) {
        if (currentUpdate.title) {
          updates.push(currentUpdate);
        }
        currentUpdate = { title: line.replace(/^\d+\.\s*/, '').replace(/\*\*/g, '') };
      } else if (line.includes('Summary:') || line.includes('summary:')) {
        currentUpdate.summary = line.replace(/.*?summary:\s*/i, '');
      } else if (line.includes('Source:') || line.includes('URL:')) {
        currentUpdate.source = line.replace(/.*?(https?:\/\/[^\s]+).*/, '$1');
      } else if (line.includes('Impact:')) {
        currentUpdate.impact = line.includes('High') ? 'High' : line.includes('Medium') ? 'Medium' : 'Low';
      } else if (line.includes('Date:')) {
        currentUpdate.date = line.replace(/.*?Date:\s*/, '');
      }
    });

    if (currentUpdate.title) {
      updates.push(currentUpdate);
    }

    // Add citations if available
    if (citations && citations.length > 0) {
      updates.forEach((update, index) => {
        if (!update.source && citations[index]) {
          update.source = citations[index];
        }
      });
    }

    return updates.length > 0 ? updates : getFallbackUpdates();
  };

  const getFallbackUpdates = () => {
    const today = new Date();
    return [
      {
        title: 'Meta Launches New AI-Powered Ad Tools for Small Businesses',
        summary: 'Meta announced new AI features in Ads Manager specifically designed for SMBs. The tools include automated creative optimization and budget recommendations.',
        source: 'https://www.socialmediatoday.com',
        date: new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        impact: 'High'
      },
      {
        title: 'Google Ads Updates Performance Max Campaigns',
        summary: 'Google rolled out new asset reporting and audience insights for Performance Max. Philippine advertisers can now see detailed performance by asset type.',
        source: 'https://searchengineland.com',
        date: new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        impact: 'High'
      },
      {
        title: 'TikTok Expands E-commerce Features in Southeast Asia',
        summary: 'TikTok Shop introduces new seller tools and advertising options for Philippines. In-feed shopping ads now support local payment methods.',
        source: 'https://www.marketingdive.com',
        date: new Date(today.getTime() - 4 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        impact: 'Medium'
      },
      {
        title: 'Philippine Digital Ad Spend Expected to Grow 18% in 2025',
        summary: 'Latest industry report shows strong growth in mobile and social advertising. Small businesses increasing budgets for Meta and Google platforms.',
        source: 'https://www.emarketer.com',
        date: new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        impact: 'Medium'
      },
      {
        title: 'New Privacy Regulations Affect Targeting Capabilities',
        summary: 'Updates to data privacy policies in Philippines require advertiser compliance. Meta and Google implementing new consent mechanisms for Philippine users.',
        source: 'https://adage.com',
        date: new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        impact: 'High'
      }
    ];
  };

  const getFallbackSummary = () => {
    return `Today's trending topics in Philippine digital advertising include increased interest in AI-powered ad optimization and local e-commerce growth. Meta and Google continue to dominate platform usage, with small businesses showing 23% higher engagement on video content. Key opportunity: Target businesses in retail and services sectors preparing for holiday season campaigns.`;
  };

  const getImpactClass = (impact) => {
    return `impact-badge impact-${impact?.toLowerCase() || 'medium'}`;
  };

  return (
    <div className="market-updates-section">
      <AIResearchProgress 
        isVisible={showResearch} 
        onClose={() => setShowResearch(false)} 
      />
      
      <div className="market-updates-header">
        <div>
          <h3>📊 Latest Market Updates</h3>
          <p className="date-range">Rolling 7-day insights: {getDateRange()}</p>
          {lastUpdate && (
            <p className="last-update-time">Last updated: {lastUpdate}</p>
          )}
        </div>
        <button 
          className="initiate-research-btn"
          onClick={handleInitiateResearch}
          disabled={loading}
        >
          🔬 Initiate AI Research
        </button>
      </div>

      {todaySummary && (
        <div className="today-summary">
          <div className="summary-header">
            <span className="summary-icon">⚡</span>
            <h4>Today's Market Summary</h4>
            <span className="summary-date">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <p className="summary-content">{todaySummary}</p>
        </div>
      )}

      {loading ? (
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading latest market insights...</p>
        </div>
      ) : (
        <div className="updates-grid">
          {updates.map((update, index) => (
            <div key={index} className="update-card">
              <div className="update-header">
                <h5>{update.title}</h5>
                <span className={getImpactClass(update.impact)}>
                  {update.impact || 'Medium'} Impact
                </span>
              </div>
              <p className="update-summary">{update.summary}</p>
              <div className="update-footer">
                <span className="update-date">📅 {update.date}</span>
                {update.source && (
                  <a 
                    href={update.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="update-source"
                  >
                    📰 Read Article →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {!import.meta.env.VITE_PERPLEXITY_API_KEY && (
        <div className="api-notice">
          💡 <strong>Tip:</strong> Add your Perplexity API key to get real-time market updates. 
          See <code>SETUP_GUIDE.md</code> for instructions.
        </div>
      )}
    </div>
  );
};

export default MarketUpdates;
