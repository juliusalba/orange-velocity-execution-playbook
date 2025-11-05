import React from 'react';

export const FunnelChart = ({ data, title }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="funnel-chart">
      <h4 className="chart-title">{title}</h4>
      <div className="funnel-stages">
        {data.map((stage, index) => {
          const width = (stage.value / maxValue) * 100;
          const conversionRate = index > 0 
            ? ((stage.value / data[index - 1].value) * 100).toFixed(1)
            : 100;
          
          return (
            <div key={index} className="funnel-stage">
              <div className="stage-info">
                <span className="stage-name">{stage.name}</span>
                <span className="stage-value">{stage.value.toLocaleString()}</span>
                <span className="conversion-rate">{conversionRate}%</span>
              </div>
              <div className="stage-bar">
                <div className="stage-fill" style={{ width: `${width}%` }}></div>
              </div>
              {stage.dropoffReasons && stage.dropoffReasons.length > 0 && (
                <div className="dropoff-reasons">
                  {stage.dropoffReasons.map((reason, i) => (
                    <span key={i} className="dropoff-reason">{reason}</span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const CohortAnalysis = ({ data, title }) => {
  const [metric, setMetric] = React.useState('retention');
  
  return (
    <div className="cohort-analysis">
      <div className="cohort-header">
        <h4 className="chart-title">{title}</h4>
        <div className="metric-selector">
          <button 
            className={metric === 'retention' ? 'active' : ''} 
            onClick={() => setMetric('retention')}
          >
            Retention
          </button>
          <button 
            className={metric === 'revenue' ? 'active' : ''} 
            onClick={() => setMetric('revenue')}
          >
            Revenue
          </button>
        </div>
      </div>
      <div className="cohort-table">
        <div className="cohort-row header">
          <div className="cohort-cell">Cohort</div>
          <div className="cohort-cell">Size</div>
          {[...Array(12)].map((_, i) => (
            <div key={i} className="cohort-cell">M{i + 1}</div>
          ))}
        </div>
        {data.cohorts.map((cohort, index) => (
          <div key={index} className="cohort-row">
            <div className="cohort-cell cohort-name">{cohort.name}</div>
            <div className="cohort-cell cohort-size">{cohort.size}</div>
            {cohort.months.map((month, i) => {
              const value = metric === 'retention' ? month.retention : month.revenue;
              const intensity = value / 100;
              return (
                <div 
                  key={i} 
                  className="cohort-cell cohort-value"
                  style={{
                    backgroundColor: `rgba(255, 107, 53, ${intensity})`,
                    color: intensity > 0.5 ? 'white' : 'var(--text)'
                  }}
                >
                  {metric === 'retention' ? `${value}%` : `₱${value}k`}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export const BehavioralHeatmap = ({ data, title }) => {
  const [timeframe, setTimeframe] = React.useState('week');
  const maxValue = Math.max(...data.activities.flat().map(d => d.value));
  
  const getIntensity = (value, max) => Math.min(value / max, 1);
  
  return (
    <div className="behavioral-heatmap">
      <div className="heatmap-header">
        <h4 className="chart-title">{title}</h4>
        <div className="timeframe-selector">
          <button 
            className={timeframe === 'week' ? 'active' : ''} 
            onClick={() => setTimeframe('week')}
          >
            Week
          </button>
          <button 
            className={timeframe === 'month' ? 'active' : ''} 
            onClick={() => setTimeframe('month')}
          >
            Month
          </button>
        </div>
      </div>
      <div className="heatmap-grid">
        <div className="heatmap-labels">
          {data.timeLabels.map((label, i) => (
            <div key={i} className="time-label">{label}</div>
          ))}
        </div>
        <div className="heatmap-activities">
          {data.activityLabels.map((label, rowIndex) => (
            <div key={rowIndex} className="activity-row">
              <div className="activity-label">{label}</div>
              <div className="activity-cells">
                {data.activities[rowIndex].map((cell, colIndex) => {
                  const intensity = getIntensity(cell.value, maxValue);
                  return (
                    <div 
                      key={colIndex}
                      className="heatmap-cell"
                      style={{
                        backgroundColor: `rgba(255, 107, 53, ${intensity})`,
                        color: intensity > 0.5 ? 'white' : 'var(--text)'
                      }}
                      title={`${label} at ${data.timeLabels[colIndex]}: ${cell.value} ${cell.unit}`}
                    >
                      {cell.value}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="heatmap-legend">
        <span>Low</span>
        <div className="legend-gradient"></div>
        <span>High</span>
      </div>
    </div>
  );
};

export const MetricsGrid = ({ metrics, title }) => {
  return (
    <div className="metrics-grid">
      <h4 className="chart-title">{title}</h4>
      <div className="metrics-cards">
        {Object.entries(metrics).map(([key, data]) => (
          <div key={key} className="metric-card">
            <div className="metric-label">{key.toUpperCase()}</div>
            <div className="metric-comparison">
              <div className="metric-value">
                <span className="label">Industry</span>
                <span className="value">{data.industry}</span>
              </div>
              <div className="metric-value primary">
                <span className="label">Our Performance</span>
                <span className="value">{data.ourPerformance}</span>
              </div>
            </div>
            <div className="metric-percentile">
              Top {100 - data.percentile}% percentile
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
