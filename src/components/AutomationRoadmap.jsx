import React, { useState } from 'react';
import { automationRoadmap } from '../automation-roadmap-data';

const AutomationRoadmap = () => {
  const [selectedPhase, setSelectedPhase] = useState(1);
  const [expandedTool, setExpandedTool] = useState(null);

  const currentPhase = automationRoadmap.phases.find(p => p.id === selectedPhase);

  const toggleTool = (toolIndex) => {
    setExpandedTool(expandedTool === toolIndex ? null : toolIndex);
  };

  return (
    <div className="automation-roadmap">
      <div className="automation-header">
        <div className="automation-title-section">
          <h2>🤖 {automationRoadmap.title}</h2>
          <p className="subtitle">{automationRoadmap.subtitle}</p>
          <div className="vision-badge">
            <span className="vision-icon">⚡</span>
            <span className="vision-text">{automationRoadmap.vision}</span>
          </div>
        </div>
        
        <div className="automation-stats">
          <div className="stat-card">
            <span className="stat-value">{automationRoadmap.phases.length}</span>
            <span className="stat-label">Automation Phases</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">{automationRoadmap.timeline.totalSetup}</span>
            <span className="stat-label">Total Setup Time</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">100%</span>
            <span className="stat-label">AI Operated</span>
          </div>
        </div>
      </div>

      <div className="phase-timeline">
        {automationRoadmap.phases.map((phase) => (
          <button
            key={phase.id}
            className={`phase-tab ${selectedPhase === phase.id ? 'active' : ''}`}
            onClick={() => setSelectedPhase(phase.id)}
            style={{ 
              borderBottomColor: selectedPhase === phase.id ? phase.color : 'transparent'
            }}
          >
            <span className="phase-icon">{phase.icon}</span>
            <div className="phase-info">
              <span className="phase-name">{phase.name}</span>
              <span className="phase-duration">{phase.duration}</span>
            </div>
          </button>
        ))}
      </div>

      {currentPhase && (
        <div className="phase-details">
          <div className="phase-header">
            <div className="phase-header-content">
              <h3 style={{ color: currentPhase.color }}>
                {currentPhase.icon} Phase {currentPhase.id}: {currentPhase.name}
              </h3>
              <p className="phase-description">{currentPhase.description}</p>
            </div>
            <div className="phase-meta">
              <div className="meta-badge" style={{ borderColor: currentPhase.color }}>
                <span className="meta-label">Duration</span>
                <span className="meta-value">{currentPhase.duration}</span>
              </div>
              <div className="meta-badge success">
                <span className="meta-label">Automation</span>
                <span className="meta-value">{currentPhase.automation}</span>
              </div>
            </div>
          </div>

          <div className="tools-section">
            <h4>🛠️ AI Tools & Systems</h4>
            <div className="tools-grid">
              {currentPhase.tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div 
                    className="tool-header"
                    onClick={() => toggleTool(index)}
                  >
                    <div className="tool-title-section">
                      <h5>{tool.name}</h5>
                      <span className="tool-type">{tool.type}</span>
                    </div>
                    <button className="tool-expand-btn">
                      {expandedTool === index ? '▼' : '▶'}
                    </button>
                  </div>

                  {expandedTool === index && (
                    <div className="tool-details">
                      {tool.trigger && (
                        <div className="tool-section">
                          <strong>⚡ Trigger:</strong>
                          <p>{tool.trigger}</p>
                        </div>
                      )}

                      {tool.inputs && (
                        <div className="tool-section">
                          <strong>📥 Inputs:</strong>
                          <ul>
                            {tool.inputs.map((input, i) => (
                              <li key={i}>{input}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tool.workflow && Array.isArray(tool.workflow) && typeof tool.workflow[0] === 'string' && (
                        <div className="tool-section">
                          <strong>🔄 Workflow:</strong>
                          <ol>
                            {tool.workflow.map((step, i) => (
                              <li key={i}>{step}</li>
                            ))}
                          </ol>
                        </div>
                      )}

                      {tool.workflow && Array.isArray(tool.workflow) && typeof tool.workflow[0] === 'object' && (
                        <div className="tool-section">
                          <strong>🔄 Workflow:</strong>
                          {tool.workflow.map((step, i) => (
                            <div key={i} className="workflow-step">
                              <h6>{step.step}</h6>
                              {step.process && (
                                <ul>
                                  {step.process.map((p, j) => (
                                    <li key={j}>{p}</li>
                                  ))}
                                </ul>
                              )}
                              {step.outputs && (
                                <div className="step-outputs">
                                  <strong>Outputs:</strong>
                                  <ul>
                                    {step.outputs.map((output, k) => (
                                      <li key={k}>{output}</li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {tool.researchAreas && (
                        <div className="tool-section">
                          <strong>🔬 Research Areas:</strong>
                          <ul>
                            {tool.researchAreas.map((area, i) => (
                              <li key={i}>{area}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tool.dataSources && (
                        <div className="tool-section">
                          <strong>📊 Data Sources:</strong>
                          <ul>
                            {tool.dataSources.map((source, i) => (
                              <li key={i}>{source}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tool.aiModels && (
                        <div className="tool-section">
                          <strong>🤖 AI Models:</strong>
                          <div className="ai-models">
                            {tool.aiModels.map((model, i) => (
                              <span key={i} className="model-badge">{model}</span>
                            ))}
                          </div>
                        </div>
                      )}

                      {tool.aiProcessing && (
                        <div className="tool-section">
                          <strong>🧠 AI Processing:</strong>
                          <p>{tool.aiProcessing}</p>
                        </div>
                      )}

                      {tool.process && Array.isArray(tool.process) && (
                        <div className="tool-section">
                          <strong>⚙️ Process:</strong>
                          <ul>
                            {tool.process.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tool.outputs && (
                        <div className="tool-section outputs">
                          <strong>✅ Outputs:</strong>
                          <ul>
                            {tool.outputs.map((output, i) => (
                              <li key={i}>{output}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {tool.deliveryTime && (
                        <div className="delivery-time">
                          ⏱️ Delivery Time: <strong>{tool.deliveryTime}</strong>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="deliverables-section">
            <h4>📦 Phase Deliverables</h4>
            <ul className="deliverables-list">
              {currentPhase.deliverables.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✅</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <div className="supporting-systems">
        <h3>🔧 Supporting Systems</h3>
        <div className="systems-grid">
          {automationRoadmap.supportingSystems.map((system, index) => (
            <div key={index} className="system-card">
              <h4>{system.name}</h4>
              <p>{system.description}</p>
              {system.automations && (
                <ul>
                  {system.automations.map((auto, i) => (
                    <li key={i}>{auto}</li>
                  ))}
                </ul>
              )}
              {system.checks && (
                <ul>
                  {system.checks.map((check, i) => (
                    <li key={i}>{check}</li>
                  ))}
                </ul>
              )}
              {system.process && (
                <ul>
                  {system.process.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="tech-stack-section">
        <h3>💻 Technology Stack</h3>
        <div className="tech-grid">
          <div className="tech-category">
            <h4>🤖 AI Models</h4>
            <div className="tech-tags">
              {automationRoadmap.techStack.aiModels.map((model, i) => (
                <span key={i} className="tech-tag ai">{model}</span>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h4>📱 Ad Platforms</h4>
            <div className="tech-tags">
              {automationRoadmap.techStack.platforms.map((platform, i) => (
                <span key={i} className="tech-tag platform">{platform}</span>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h4>⚙️ Automation Tools</h4>
            <div className="tech-tags">
              {automationRoadmap.techStack.automation.map((tool, i) => (
                <span key={i} className="tech-tag automation">{tool}</span>
              ))}
            </div>
          </div>
          <div className="tech-category">
            <h4>📊 Analytics</h4>
            <div className="tech-tags">
              {automationRoadmap.techStack.analytics.map((tool, i) => (
                <span key={i} className="tech-tag analytics">{tool}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-summary">
        <h3>⏱️ Timeline Overview</h3>
        <div className="timeline-cards">
          <div className="timeline-card">
            <span className="timeline-icon">📝</span>
            <span className="timeline-label">Onboarding</span>
            <span className="timeline-value">{automationRoadmap.timeline.onboarding}</span>
          </div>
          <div className="timeline-card">
            <span className="timeline-icon">🔬</span>
            <span className="timeline-label">Research</span>
            <span className="timeline-value">{automationRoadmap.timeline.research}</span>
          </div>
          <div className="timeline-card">
            <span className="timeline-icon">🎨</span>
            <span className="timeline-label">Strategy</span>
            <span className="timeline-value">{automationRoadmap.timeline.strategy}</span>
          </div>
          <div className="timeline-card">
            <span className="timeline-icon">📢</span>
            <span className="timeline-label">Ad Planning</span>
            <span className="timeline-value">{automationRoadmap.timeline.adPlanning}</span>
          </div>
          <div className="timeline-card highlight">
            <span className="timeline-icon">🚀</span>
            <span className="timeline-label">Total Setup</span>
            <span className="timeline-value">{automationRoadmap.timeline.totalSetup}</span>
          </div>
        </div>
      </div>

      <div className="human-touchpoints">
        <h3>👥 Human Touchpoints (Minimal)</h3>
        <p className="touchpoints-intro">Only 4 human interactions required throughout the entire process:</p>
        <div className="touchpoints-list">
          {automationRoadmap.humanTouchpoints.map((touchpoint, index) => (
            <div key={index} className="touchpoint-card">
              <span className="touchpoint-number">{index + 1}</span>
              <span className="touchpoint-text">{touchpoint}</span>
            </div>
          ))}
        </div>
        <p className="automation-note">
          💡 Everything else is 100% automated by AI - from research to execution to optimization
        </p>
      </div>
    </div>
  );
};

export default AutomationRoadmap;
