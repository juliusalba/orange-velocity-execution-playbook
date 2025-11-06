import React, { useState, useEffect } from 'react';
import { roadmapData, optimizationStrategies } from '../roadmap-data';

const RoadmapView = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [expandedTask, setExpandedTask] = useState(null);
  const [expandedStrategy, setExpandedStrategy] = useState(null);
  const [startDate, setStartDate] = useState(roadmapData.startDate);
  const [taskStates, setTaskStates] = useState({});

  // Initialize task states from localStorage or default
  useEffect(() => {
    const savedStates = localStorage.getItem('roadmapTaskStates');
    if (savedStates) {
      setTaskStates(JSON.parse(savedStates));
    } else {
      // Initialize all tasks and subtasks as unchecked
      const initialStates = {};
      roadmapData.months.forEach(month => {
        month.tasks.forEach((task, taskIndex) => {
          const taskKey = `${month.id}-${taskIndex}`;
          initialStates[taskKey] = {
            completed: false,
            subTasks: task.guide.map(() => false)
          };
        });
      });
      setTaskStates(initialStates);
    }
  }, []);

  // Save to localStorage whenever states change
  useEffect(() => {
    if (Object.keys(taskStates).length > 0) {
      localStorage.setItem('roadmapTaskStates', JSON.stringify(taskStates));
    }
  }, [taskStates]);

  const currentMonth = roadmapData.months.find(m => m.id === selectedMonth);

  const calculateOverallProgress = () => {
    let totalTasks = 0;
    let completedTasks = 0;

    roadmapData.months.forEach(month => {
      month.tasks.forEach((task, taskIndex) => {
        const taskKey = `${month.id}-${taskIndex}`;
        const taskState = taskStates[taskKey];
        
        if (taskState) {
          totalTasks++;
          if (taskState.completed) {
            completedTasks++;
          }
        }
      });
    });

    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  };

  const calculateMonthProgress = (monthId) => {
    const month = roadmapData.months.find(m => m.id === monthId);
    if (!month) return 0;

    let totalTasks = month.tasks.length;
    let completedTasks = 0;

    month.tasks.forEach((task, taskIndex) => {
      const taskKey = `${monthId}-${taskIndex}`;
      const taskState = taskStates[taskKey];
      
      if (taskState && taskState.completed) {
        completedTasks++;
      }
    });

    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  };

  const calculateTaskProgress = (monthId, taskIndex) => {
    const taskKey = `${monthId}-${taskIndex}`;
    const taskState = taskStates[taskKey];
    
    if (!taskState || !taskState.subTasks) return 0;

    const total = taskState.subTasks.length;
    const completed = taskState.subTasks.filter(st => st).length;
    
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  };

  const toggleTask = (monthId, taskIndex) => {
    const taskKey = `${monthId}-${taskIndex}`;
    setTaskStates(prev => ({
      ...prev,
      [taskKey]: {
        ...prev[taskKey],
        completed: !prev[taskKey]?.completed
      }
    }));
  };

  const toggleSubTask = (monthId, taskIndex, subTaskIndex) => {
    const taskKey = `${monthId}-${taskIndex}`;
    setTaskStates(prev => {
      const currentTask = prev[taskKey] || { completed: false, subTasks: [] };
      const newSubTasks = [...currentTask.subTasks];
      newSubTasks[subTaskIndex] = !newSubTasks[subTaskIndex];
      
      // Auto-complete parent task if all subtasks are done
      const allSubTasksComplete = newSubTasks.every(st => st);
      
      return {
        ...prev,
        [taskKey]: {
          completed: allSubTasksComplete ? true : currentTask.completed,
          subTasks: newSubTasks
        }
      };
    });
  };

  const toggleExpand = (monthId, taskIndex) => {
    setExpandedTask(expandedTask === `${monthId}-${taskIndex}` ? null : `${monthId}-${taskIndex}`);
  };

  const getTaskState = (monthId, taskIndex) => {
    const taskKey = `${monthId}-${taskIndex}`;
    return taskStates[taskKey] || { completed: false, subTasks: [] };
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
            <span className="stat-label">Overall Progress</span>
            <span className="stat-value">{calculateOverallProgress()}%</span>
            <div className="mini-progress-bar">
              <div 
                className="mini-progress-fill" 
                style={{ width: `${calculateOverallProgress()}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="month-timeline">
        {roadmapData.months.map(month => {
          const monthProgress = calculateMonthProgress(month.id);
          return (
            <button
              key={month.id}
              className={`month-tab ${selectedMonth === month.id ? 'active' : ''}`}
              onClick={() => setSelectedMonth(month.id)}
              style={{ borderBottomColor: selectedMonth === month.id ? month.color : 'transparent' }}
            >
              <span className="month-icon">{month.icon}</span>
              <div className="month-tab-content">
                <span className="month-title">Month {month.id}</span>
                <span className="month-name">{month.title}</span>
                <div className="month-progress-indicator">
                  <div className="month-progress-bar">
                    <div 
                      className="month-progress-fill" 
                      style={{ 
                        width: `${monthProgress}%`,
                        background: month.color
                      }}
                    ></div>
                  </div>
                  <span className="month-progress-text">{monthProgress}%</span>
                </div>
              </div>
            </button>
          );
        })}
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
              {currentMonth.tasks.map((task, index) => {
                const taskState = getTaskState(currentMonth.id, index);
                const taskProgress = calculateTaskProgress(currentMonth.id, index);
                
                return (
                  <div key={index} className={`task-card ${taskState.completed ? 'completed' : ''}`}>
                    <div className="task-header">
                      <div 
                        className="task-checkbox"
                        onClick={() => toggleTask(currentMonth.id, index)}
                      >
                        <input 
                          type="checkbox" 
                          checked={taskState.completed}
                          onChange={() => {}}
                        />
                      </div>
                      <div className="task-title-section">
                        <h5>{task.title}</h5>
                        <p>{task.description}</p>
                        {taskProgress > 0 && (
                          <div className="task-progress-container">
                            <div className="task-progress-bar">
                              <div 
                                className="task-progress-fill" 
                                style={{ 
                                  width: `${taskProgress}%`,
                                  background: currentMonth.color
                                }}
                              ></div>
                            </div>
                            <span className="task-progress-text">{taskProgress}% complete</span>
                          </div>
                        )}
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
                                checked={taskState.subTasks[i] || false}
                                onChange={() => toggleSubTask(currentMonth.id, index, i)}
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
                );
              })}
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
