import React, { useState } from 'react';
import { roadmapData, optimizationStrategies } from '../roadmap-data';

const RoadmapView = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [expandedTask, setExpandedTask] = useState(null);
  const [expandedStrategy, setExpandedStrategy] = useState(null);
  const [startDate, setStartDate] = useState(roadmapData.startDate);

  const currentMonth = roadmapData.months.find(m => m.id === selectedMonth);

  const calculateProgress = () => {
    const totalTasks = roadmapData.months.reduce((sum, month) => sum + month.tasks.length, 0);
    const completedTasks = roadmapData.months.reduce((sum, month) => 
      sum + month.tasks.filter(t => t.completed).length, 0
    );
    return Math.round((completedTasks / totalTasks) * 100);
  };

  const toggleTask = (monthId, taskIndex) => {
    const monthData = roadmapData.months.find(m => m.id === monthId);
    monthData.tasks[taskIndex].completed = !monthData.tasks[taskIndex].completed;
  };

  const toggleExpand = (monthId, taskIndex) => {
    setExpandedTask(expandedTask === `${monthId}-${taskIndex}` ? null : `${monthId}-${taskIndex}`);
  };

  return (
    <div className="roadmap-view">
      <div className="roadmap-header">
        <div className="roadmap-title-section">
          <h2>🚀 6-Month Execution Roadmap</h2>
          <p>Your step-by-step blueprint to PHP 600-800k+ MRR</p>
        </div>
        <div className="roadmap-stats">
          <div className="roadmap-stat">
            <span className="stat-label">Target MRR</span>
            <span className="stat-value">{roadmapData.targetMRR}</span>
          </div>
          <div className="roadmap-stat">
            <span className="stat-label">Target Clients</span>
            <span className="stat-value">{roadmapData.targetClients}</span>
          </div>
          <div className="roadmap-stat">
            <span className="stat-label">Progress</span>
            <span className="stat-value">{calculateProgress()}%</span>
          </div>
        </div>
      </div>

      <div className="month-timeline">
        {roadmapData.months.map(month => (
          <button
            key={month.id}
            className={`month-tab ${selectedMonth === month.id ? 'active' : ''}`}
            onClick={() => setSelectedMonth(month.id)}
            style={{ borderBottomColor: selectedMonth === month.id ? month.color : 'transparent' }}
          >
            <span className="month-icon">{month.icon}</span>
            <span className="month-title">Month {month.id}</span>
            <span className="month-name">{month.title}</span>
          </button>
        ))}
      </div>

      {currentMonth && (
        <div className="month-details">
          <div className="month-header">
            <div className="month-header-left">
              <h3 style={{ color: currentMonth.color }}>
                {currentMonth.icon} Month {currentMonth.id}: {currentMonth.title}
              </h3>
              <p>{currentMonth.subtitle}</p>
            </div>
            <div className="month-stats-grid">
              {currentMonth.stats.map((stat, index) => (
                <div key={index} className="month-stat-card">
                  <span className="stat-label">{stat.label}</span>
                  <span className="stat-value" style={{ color: currentMonth.color }}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tasks-section">
            <h4>📋 Tasks for This Month</h4>
            <div className="tasks-list">
              {currentMonth.tasks.map((task, index) => (
                <div key={index} className={`task-card ${task.completed ? 'completed' : ''}`}>
                  <div className="task-header">
                    <div 
                      className="task-checkbox"
                      onClick={() => toggleTask(currentMonth.id, index)}
                    >
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        onChange={() => {}}
                      />
                    </div>
                    <div className="task-title-section">
                      <h5>{task.title}</h5>
                      <p>{task.description}</p>
                    </div>
                    <button 
                      className="task-expand-btn"
                      onClick={() => toggleExpand(currentMonth.id, index)}
                    >
                      {expandedTask === `${currentMonth.id}-${index}` ? '▼' : '▶'}
                    </button>
                  </div>
                  {expandedTask === `${currentMonth.id}-${index}` && (
                    <div className="task-guide">
                      <h6>📖 Implementation Guide:</h6>
                      <ul className="guide-checklist">
                        {task.guide.map((step, i) => (
                          <li key={i} className="guide-step">
                            <input 
                              type="checkbox" 
                              id={`guide-${currentMonth.id}-${index}-${i}`}
                            />
                            <label htmlFor={`guide-${currentMonth.id}-${index}-${i}`}>
                              {step}
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="pricing-tiers-section">
        <h3>💰 Pricing Tiers</h3>
        <div className="pricing-grid">
          {roadmapData.pricingTiers.map((tier, index) => (
            <div key={index} className={`pricing-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <div className="popular-badge">Most Popular</div>}
              <h4>{tier.name}</h4>
              <div className="price">{tier.price}</div>
              <p className="tier-description">{tier.description}</p>
              <ul className="features-list">
                {tier.features.map((feature, i) => (
                  <li key={i}>✅ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="optimization-strategies-section">
        <h3>⚡ Optimization Strategies</h3>
        <p>Expert tactics to maximize your campaign performance</p>
        <div className="strategies-grid">
          {optimizationStrategies.map((category, catIndex) => (
            <div key={catIndex} className="strategy-category">
              <h4>{category.icon} {category.category}</h4>
              <div className="strategies-list">
                {category.strategies.map((strategy, stratIndex) => (
                  <div key={stratIndex} className="strategy-card">
                    <div 
                      className="strategy-header"
                      onClick={() => setExpandedStrategy(
                        expandedStrategy === `${catIndex}-${stratIndex}` 
                          ? null 
                          : `${catIndex}-${stratIndex}`
                      )}
                    >
                      <h5>{strategy.title}</h5>
                      <div className="strategy-meta">
                        <span className={`impact impact-${strategy.impact.toLowerCase().replace(' ', '-')}`}>
                          {strategy.impact} Impact
                        </span>
                        <span className="timeframe">⏱️ {strategy.timeframe}</span>
                      </div>
                      <p>{strategy.description}</p>
                      <button className="strategy-expand-btn">
                        {expandedStrategy === `${catIndex}-${stratIndex}` ? '▼ Hide Steps' : '▶ Show Steps'}
                      </button>
                    </div>
                    {expandedStrategy === `${catIndex}-${stratIndex}` && (
                      <div className="strategy-steps">
                        <h6>Implementation Steps:</h6>
                        <ol>
                          {strategy.steps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ol>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapView;
