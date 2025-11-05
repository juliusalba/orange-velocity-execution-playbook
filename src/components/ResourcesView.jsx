import React, { useState } from 'react';
import { emailTemplates, salesScripts, outreachStrategies } from '../resources-data';

const ResourcesView = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedScript, setSelectedScript] = useState(null);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderTemplates = () => (
    <div className="templates-section">
      <div className="resources-header">
        <h3>📧 Email Templates</h3>
        <p>Ready-to-use email templates for every stage of the sales process</p>
      </div>
      
      <div className="templates-grid">
        {emailTemplates.map(template => (
          <div 
            key={template.id} 
            className="template-card"
            onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
          >
            <div className="template-header">
              <div>
                <h4>{template.title}</h4>
                <p className="template-category">{template.category}</p>
              </div>
              <span className="conversion-rate">{template.conversionRate}</span>
            </div>
            
            <div className="template-tags">
              {template.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            {selectedTemplate === template.id && (
              <div className="template-content">
                <div className="subject-line">
                  <strong>Subject:</strong> {template.subject}
                </div>
                <div className="email-body">
                  <pre>{template.body}</pre>
                </div>
                <button 
                  className="copy-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(template.body, `template-${template.id}`);
                  }}
                >
                  {copiedId === `template-${template.id}` ? '✅ Copied!' : '📋 Copy Template'}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderScripts = () => (
    <div className="scripts-section">
      <div className="resources-header">
        <h3>🎯 Sales Scripts</h3>
        <p>Word-for-word scripts for discovery calls, proposals, and objection handling</p>
      </div>

      <div className="scripts-grid">
        {salesScripts.map(script => (
          <div 
            key={script.id} 
            className="script-card"
            onClick={() => setSelectedScript(selectedScript === script.id ? null : script.id)}
          >
            <div className="script-header">
              <h4>{script.title}</h4>
              <div className="script-meta">
                {script.duration && <span className="duration">⏱️ {script.duration}</span>}
                <span className="objective">🎯 {script.objective}</span>
              </div>
            </div>

            {selectedScript === script.id && (
              <div className="script-content">
                <pre>{script.script}</pre>
                <button 
                  className="copy-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(script.script, `script-${script.id}`);
                  }}
                >
                  {copiedId === `script-${script.id}` ? '✅ Copied!' : '📋 Copy Script'}
                </button>
              </div>
            )}

            {selectedScript !== script.id && (
              <div className="script-preview">
                Click to view full script →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderStrategies = () => (
    <div className="strategies-section">
      <div className="resources-header">
        <h3>🚀 Outreach Strategies</h3>
        <p>Proven outreach strategies to fill your pipeline with qualified leads</p>
      </div>

      <div className="outreach-grid">
        {outreachStrategies.map(strategy => (
          <div 
            key={strategy.id} 
            className="outreach-card"
            onClick={() => setSelectedStrategy(selectedStrategy === strategy.id ? null : strategy.id)}
          >
            <div className="outreach-header">
              <h4>{strategy.strategy}</h4>
              <div className="outreach-meta">
                <span className="platform">📱 {strategy.platform}</span>
                <span className="response-rate">📈 {strategy.expectedResponse} response</span>
              </div>
            </div>

            <div className="outreach-quick-stats">
              <div className="quick-stat">
                <span className="stat-label">Target:</span>
                <span className="stat-value">{strategy.targetAudience}</span>
              </div>
              <div className="quick-stat">
                <span className="stat-label">Daily Volume:</span>
                <span className="stat-value">{strategy.dailyVolume}</span>
              </div>
            </div>

            {selectedStrategy === strategy.id && (
              <div className="outreach-details">
                <div className="outreach-steps">
                  <h5>📋 Step-by-Step Guide:</h5>
                  {strategy.steps.map((step, index) => (
                    <div key={index} className="outreach-step">
                      <div className="step-number">Step {step.step}</div>
                      <div className="step-content">
                        <h6>{step.action}</h6>
                        <p>{step.description}</p>
                        {step.criteria && (
                          <ul className="criteria-list">
                            {step.criteria.map((criterion, i) => (
                              <li key={i}>{criterion}</li>
                            ))}
                          </ul>
                        )}
                        {step.template && (
                          <div className="template-box">
                            <strong>Template:</strong>
                            <p>{step.template}</p>
                            <button 
                              className="copy-small-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                copyToClipboard(step.template, `strategy-${strategy.id}-${index}`);
                              }}
                            >
                              {copiedId === `strategy-${strategy.id}-${index}` ? '✅' : '📋'}
                            </button>
                          </div>
                        )}
                        {step.time && <p className="step-time">⏱️ {step.time}</p>}
                        {step.tools && (
                          <p className="step-tools">🔧 Tools: {step.tools.join(', ')}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {strategy.tools && (
                  <div className="recommended-tools">
                    <h5>🛠️ Recommended Tools:</h5>
                    <div className="tools-list">
                      {strategy.tools.map((tool, i) => (
                        <span key={i} className="tool-badge">{tool}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pros-cons">
                  <div className="pros">
                    <h6>✅ Pros:</h6>
                    <ul>
                      {strategy.pros.map((pro, i) => (
                        <li key={i}>{pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="cons">
                    <h6>⚠️ Cons:</h6>
                    <ul>
                      {strategy.cons.map((con, i) => (
                        <li key={i}>{con}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {selectedStrategy !== strategy.id && (
              <div className="outreach-preview">
                <div className="preview-tools">
                  <strong>Tools:</strong> {strategy.tools ? strategy.tools.slice(0, 2).join(', ') : 'N/A'}
                  {strategy.tools && strategy.tools.length > 2 && ` +${strategy.tools.length - 2} more`}
                </div>
                <button className="view-details-btn">View Full Strategy →</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="resources-view">
      <div className="resources-tabs">
        <button 
          className={`resources-tab ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          📧 Email Templates
        </button>
        <button 
          className={`resources-tab ${activeTab === 'scripts' ? 'active' : ''}`}
          onClick={() => setActiveTab('scripts')}
        >
          🎯 Sales Scripts
        </button>
        <button 
          className={`resources-tab ${activeTab === 'strategies' ? 'active' : ''}`}
          onClick={() => setActiveTab('strategies')}
        >
          🚀 Outreach Strategies
        </button>
      </div>

      <div className="resources-content">
        {activeTab === 'templates' && renderTemplates()}
        {activeTab === 'scripts' && renderScripts()}
        {activeTab === 'strategies' && renderStrategies()}
      </div>
    </div>
  );
};

export default ResourcesView;
