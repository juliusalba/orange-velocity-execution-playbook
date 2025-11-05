import React, { useState, useEffect } from 'react';
import GoogleMapWithAnalytics from './components/GoogleMapWithAnalytics';
import { FunnelChart, CohortAnalysis, BehavioralHeatmap, MetricsGrid } from './components/AnalyticsCharts';
import RoadmapView from './components/RoadmapView';
import ResourcesView from './components/ResourcesView';
import MarketUpdates from './components/MarketUpdates';
import SystemStatus from './components/SystemStatus';
import { cityData, demographics, psychographics, marketMetrics, analyticsData } from './market-data';
import { analyticsService } from './services/api';
import './MinimalApp.css';

const MinimalApp = () => {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [selectedSegment, setSelectedSegment] = useState('all');
  const [hoveredCity, setHoveredCity] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    analyticsService.init();
    analyticsService.trackPageView(window.location.pathname, document.title);
  }, []);

  useEffect(() => {
    analyticsService.trackPageView(`/${activeTab}`, `Orange Velocity - ${activeTab}`);
  }, [activeTab]);

  const tabs = [
    { id: 'roadmap', label: '🗺️ Roadmap', icon: '🗺️' },
    { id: 'overview', label: '📊 Market Intel', icon: '📊' },
    { id: 'analytics', label: '📈 Analytics', icon: '📈' },
    { id: 'demographics', label: '👥 Demographics', icon: '👥' },
    { id: 'psychographics', label: '🧠 Psychographics', icon: '🧠' },
    { id: 'resources', label: '📚 Resources', icon: '📚' },
    { id: 'competitive', label: '⚔️ Competitive', icon: '⚔️' },
    { id: 'status', label: '🔧 System Status', icon: '🔧' }
  ];

  const renderOverview = () => (
    <div className="overview-tab">
      <div className="section">
        <div className="section-header">
          <h2>🇵🇭 Philippine Business Distribution Map</h2>
          <p>Interactive Google Maps showing business density and growth across key cities</p>
        </div>
        <GoogleMapWithAnalytics />
      </div>

      <div className="section">
        <div className="section-header">
          <h2>📍 City Statistics</h2>
          <p>Real-time business metrics by location</p>
        </div>
        <div className="city-grid">
          {cityData.map((city, index) => (
            <div 
              key={index} 
              className="city-card"
              onMouseEnter={() => setHoveredCity(city)}
              onMouseLeave={() => setHoveredCity(null)}
            >
              <div className="city-header">
                <h3>{city.location}</h3>
                <span className={`growth-badge ${parseFloat(city.growth) >= 30 ? 'high' : parseFloat(city.growth) >= 25 ? 'medium' : 'low'}`}>
                  {city.growth}
                </span>
              </div>
              <div className="city-stats">
                <div className="stat">
                  <span className="stat-value">{city.total.toLocaleString()}</span>
                  <span className="stat-label">Total Businesses</span>
                </div>
                <div className="stat">
                  <span className="stat-value">{city.advertisers.toLocaleString()}</span>
                  <span className="stat-label">Active Advertisers</span>
                </div>
              </div>
              {city.byIndustry && (
                <div className="industry-breakdown">
                  <strong>Top Industries:</strong>
                  {city.byIndustry.slice(0, 3).map((industry, i) => (
                    <div key={i} className="industry-item">
                      <span>{industry.name}</span>
                      <span>{industry.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>🎯 Market Share Distribution</h2>
        <div className="market-share-grid">
          {Object.entries(marketMetrics.marketShare).map(([key, data]) => (
            <div key={key} className="market-share-card">
              <div className="platform-name">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </div>
              <div className="platform-percentage">{data.percentage}%</div>
              <div className="platform-stats">
                <span className={`trend ${data.trend.startsWith('+') ? 'positive' : 'negative'}`}>
                  {data.trend}
                </span>
                <span className="spend">{data.spend}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="analytics-tab">
      <div className="section">
        <FunnelChart data={analyticsData.funnelData} title="🔄 Conversion Funnel Analysis" />
      </div>
      <div className="section">
        <CohortAnalysis data={analyticsData.cohortData} title="📅 Cohort Retention & Revenue" />
      </div>
      <div className="section">
        <BehavioralHeatmap data={analyticsData.heatmapData} title="🔥 User Activity Heatmap" />
      </div>
      <div className="section">
        <MetricsGrid metrics={marketMetrics.benchmarks} title="📊 Performance Benchmarks" />
      </div>
    </div>
  );

  const renderDemographics = () => (
    <div className="demographics-tab">
      <div className="section">
        <h2>🌍 Regional Demographics</h2>
        <div className="region-grid">
          {Object.entries(demographics.regionBreakdown).map(([key, region]) => (
            <div key={key} className="region-card">
              <h3>{region.name}</h3>
              <div className="region-stats">
                <div className="stat">
                  <span className="stat-label">Population</span>
                  <span className="stat-value">{region.population.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Businesses</span>
                  <span className="stat-value">{region.businesses.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Digital Adoption</span>
                  <span className="stat-value">{region.digitalAdoption}%</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Avg Ad Spend</span>
                  <span className="stat-value">{region.avgAdSpend}</span>
                </div>
              </div>
              {region.consumerBehavior && (
                <div className="consumer-behavior">
                  <strong>Consumer Behavior:</strong>
                  {Object.entries(region.consumerBehavior).map(([behavior, percentage]) => (
                    <div key={behavior} className="behavior-item">
                      <span>{behavior.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="behavior-bar">
                        <div className="behavior-fill" style={{ width: `${percentage}%` }}></div>
                        <span className="behavior-percentage">{percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2>👨‍👩‍👧‍👦 Generational Insights</h2>
        <div className="generation-grid">
          {Object.entries(demographics.generationalInsights).map(([key, gen]) => (
            <div key={key} className="generation-card">
              <h3>{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
              <div className="gen-info">
                <span className="age-range">{gen.ageRange} years old</span>
                <span className="percentage">{gen.percentage}% of market</span>
              </div>
              <div className="gen-stats">
                <div className="stat">
                  <span className="stat-label">Ad Spend Influence</span>
                  <span className="stat-value">{gen.adSpendInfluence}%</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Purchasing Power</span>
                  <span className="stat-value">{gen.purchasingPower}</span>
                </div>
              </div>
              <div className="platforms">
                <strong>Preferred Platforms:</strong>
                <div className="platform-tags">
                  {gen.preferredPlatforms.map((platform, i) => (
                    <span key={i} className="platform-tag">{platform}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPsychographics = () => (
    <div className="psychographics-tab">
      <div className="section">
        <h2>🧠 User Segment Psychographics</h2>
        <div className="segment-grid">
          {Object.entries(psychographics.userSegments).map(([key, segment]) => (
            <div key={key} className="segment-card">
              <div className="segment-header">
                <h3>{segment.segment}</h3>
                <span className="segment-count">{segment.count.toLocaleString()} users</span>
              </div>
              
              {segment.criteria && (
                <div className="segment-criteria">
                  <strong>Criteria:</strong>
                  {Object.entries(segment.criteria).map(([criteriaKey, value]) => (
                    <div key={criteriaKey} className="criteria-item">
                      <span>{criteriaKey}:</span>
                      <span>{Array.isArray(value) ? value.join(', ') : value}</span>
                    </div>
                  ))}
                </div>
              )}

              {segment.characteristics && (
                <div className="segment-characteristics">
                  <strong>Characteristics:</strong>
                  {Object.entries(segment.characteristics).map(([charKey, value]) => (
                    <div key={charKey} className="char-item">
                      <span>{charKey.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="psycho-details">
                <div className="psycho-section">
                  <strong>💡 Motivations:</strong>
                  <div className="tag-list">
                    {segment.psychographics.motivations.map((item, i) => (
                      <span key={i} className="tag motivation">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="psycho-section">
                  <strong>⚠️ Pain Points:</strong>
                  <div className="tag-list">
                    {segment.psychographics.painPoints.map((item, i) => (
                      <span key={i} className="tag pain-point">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="psycho-section">
                  <strong>⭐ Values:</strong>
                  <div className="tag-list">
                    {segment.psychographics.values.map((item, i) => (
                      <span key={i} className="tag value">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCompetitive = () => (
    <div className="competitive-tab">
      <div className="section">
        <h2>⚔️ Competitive Landscape</h2>
        <div className="competitive-grid">
          <div className="competitive-card">
            <h3>Market Position</h3>
            <p>Analysis of market share and competitive positioning across advertising platforms.</p>
            <MetricsGrid metrics={marketMetrics.benchmarks} title="Our Performance vs Industry" />
          </div>
        </div>
      </div>
      
      <MarketUpdates />
    </div>
  );

  const renderTabContent = () => {
    switch(activeTab) {
      case 'roadmap': return <RoadmapView />;
      case 'overview': return renderOverview();
      case 'analytics': return renderAnalytics();
      case 'demographics': return renderDemographics();
      case 'psychographics': return renderPsychographics();
      case 'resources': return <ResourcesView />;
      case 'competitive': return renderCompetitive();
      case 'status': return <SystemStatus />;
      default: return <RoadmapView />;
    }
  };

  return (
    <div className="minimal-app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <h1>🚀 Orange Velocity</h1>
            <p>Market Intelligence & Business Analytics Platform</p>
          </div>
          <div className="header-right">
            <select 
              value={selectedSegment} 
              onChange={(e) => setSelectedSegment(e.target.value)}
              className="segment-selector"
            >
              <option value="all">All Segments</option>
              <option value="high-value">High-Value Prospects</option>
              <option value="emerging">Emerging Businesses</option>
              <option value="enterprise">Established Enterprises</option>
            </select>
            <button className="export-btn">📊 Export Data</button>
          </div>
        </div>
      </header>

      <nav className="app-tabs">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label.replace(tab.icon, '').trim()}</span>
          </button>
        ))}
      </nav>

      <main className="app-content">
        {renderTabContent()}
      </main>

      <footer className="app-footer">
        <p>🤖 Built for Julius, Shekinah & Kiannah • Last updated: {new Date().toLocaleDateString()}</p>
      </footer>
    </div>
  );
};

export default MinimalApp;
