import React, { useState, useEffect } from 'react';
import { X, TrendingUp, Building2, Target, MapPin, ExternalLink, Database } from 'lucide-react';

const CityInsightModal = ({ city, onClose }) => {
  const [insights, setInsights] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCityInsights();
  }, [city]);

  const fetchCityInsights = async () => {
    setLoading(true);
    try {
      const mockInsights = {
        dataSources: [
          {
            name: 'Philippine Statistics Authority (PSA)',
            metric: 'Business Registration Data',
            year: '2024',
            url: 'https://psa.gov.ph',
            value: `${city.total.toLocaleString()} registered businesses`
          },
          {
            name: 'DTI Business Name Registration',
            metric: 'Active Business Names',
            year: '2024',
            url: 'https://bnrs.dti.gov.ph',
            value: `${city.advertisers.toLocaleString()} active advertisers`
          },
          {
            name: 'Meta Business Suite Analytics',
            metric: 'Ad Spending Growth',
            year: '2024',
            url: 'https://business.facebook.com',
            value: city.growth
          },
          {
            name: 'Google Ads Platform',
            metric: 'Regional Market Share',
            year: '2024',
            url: 'https://ads.google.com',
            value: '28% market penetration'
          }
        ],
        marketShareDistribution: {
          'Meta (Facebook/Instagram)': { percentage: 42, spend: '₱18M/mo', growth: '+35%' },
          'Google Ads': { percentage: 28, spend: '₱12M/mo', growth: '+22%' },
          'TikTok Ads': { percentage: 18, spend: '₱7.8M/mo', growth: '+58%' },
          'LinkedIn': { percentage: 7, spend: '₱3M/mo', growth: '+15%' },
          'Others': { percentage: 5, spend: '₱2.2M/mo', growth: '+12%' }
        },
        industryBreakdown: city.byIndustry || [
          { name: 'Retail & E-commerce', count: Math.floor(city.total * 0.28), adSpend: '₱5.2M/mo' },
          { name: 'Food & Beverage', count: Math.floor(city.total * 0.22), adSpend: '₱3.8M/mo' },
          { name: 'Real Estate', count: Math.floor(city.total * 0.15), adSpend: '₱6.5M/mo' },
          { name: 'Professional Services', count: Math.floor(city.total * 0.12), adSpend: '₱2.9M/mo' },
          { name: 'Health & Wellness', count: Math.floor(city.total * 0.11), adSpend: '₱3.1M/mo' },
          { name: 'Education', count: Math.floor(city.total * 0.12), adSpend: '₱2.4M/mo' }
        ],
        keyMetrics: {
          avgCPC: '₱8.50',
          avgCPM: '₱145',
          avgCTR: '2.8%',
          avgConversionRate: '3.2%',
          avgROAS: '4.2x',
          totalMonthlyAdSpend: '₱43M'
        },
        growthFactors: [
          'Increased digital adoption post-pandemic',
          'Rising e-commerce penetration',
          'Mobile-first consumer behavior',
          'Growing middle class purchasing power',
          'Government digitalization initiatives'
        ]
      };

      setTimeout(() => {
        setInsights(mockInsights);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error fetching insights:', error);
      setLoading(false);
    }
  };

  if (!city) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="city-insight-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-section">
            <MapPin className="modal-icon" size={24} />
            <div>
              <h2>{city.location}</h2>
              <p>Detailed Market Intelligence & Data Sources</p>
            </div>
          </div>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-content">
          {loading ? (
            <div className="modal-loading">
              <div className="spinner"></div>
              <p>Loading detailed insights...</p>
            </div>
          ) : insights ? (
            <>
              <section className="modal-section">
                <div className="section-header">
                  <Database size={20} />
                  <h3>Data Sources & References</h3>
                </div>
                <div className="data-sources-grid">
                  {insights.dataSources.map((source, idx) => (
                    <div key={idx} className="data-source-card">
                      <div className="source-header">
                        <strong>{source.name}</strong>
                        <a href={source.url} target="_blank" rel="noopener noreferrer" className="source-link">
                          <ExternalLink size={14} />
                        </a>
                      </div>
                      <div className="source-metric">{source.metric}</div>
                      <div className="source-value">{source.value}</div>
                      <div className="source-year">Data Year: {source.year}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <div className="section-header">
                  <Target size={20} />
                  <h3>Market Share Distribution</h3>
                </div>
                <div className="market-share-detailed">
                  {Object.entries(insights.marketShareDistribution).map(([platform, data]) => (
                    <div key={platform} className="platform-row">
                      <div className="platform-info">
                        <span className="platform-name">{platform}</span>
                        <span className="platform-percentage">{data.percentage}%</span>
                      </div>
                      <div className="platform-bar-container">
                        <div 
                          className="platform-bar-fill" 
                          style={{ width: `${data.percentage}%` }}
                        ></div>
                      </div>
                      <div className="platform-stats">
                        <span className="platform-spend">{data.spend}</span>
                        <span className={`platform-growth ${data.growth.startsWith('+') ? 'positive' : 'negative'}`}>
                          {data.growth}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <div className="section-header">
                  <Building2 size={20} />
                  <h3>Industry Breakdown</h3>
                </div>
                <div className="industry-detailed-grid">
                  {insights.industryBreakdown.map((industry, idx) => (
                    <div key={idx} className="industry-detailed-card">
                      <div className="industry-name">{industry.name}</div>
                      <div className="industry-count">{industry.count.toLocaleString()} businesses</div>
                      <div className="industry-spend">Avg Spend: {industry.adSpend}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <div className="section-header">
                  <TrendingUp size={20} />
                  <h3>Key Performance Metrics</h3>
                </div>
                <div className="metrics-grid">
                  {Object.entries(insights.keyMetrics).map(([key, value]) => (
                    <div key={key} className="metric-card">
                      <div className="metric-label">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="metric-value">{value}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="modal-section">
                <div className="section-header">
                  <TrendingUp size={20} />
                  <h3>Growth Factors</h3>
                </div>
                <ul className="growth-factors-list">
                  {insights.growthFactors.map((factor, idx) => (
                    <li key={idx}>{factor}</li>
                  ))}
                </ul>
              </section>
            </>
          ) : (
            <div className="modal-error">
              <p>Unable to load insights. Please try again.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CityInsightModal;
