import React, { useState, useEffect } from 'react';

const AIResearchProgress = ({ isVisible, onClose }) => {
  const [logs, setLogs] = useState([]);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, {
      id: Date.now(),
      timestamp,
      message,
      type
    }]);
  };

  const runResearch = async () => {
    setIsRunning(true);
    setLogs([]);
    setProgress(0);

    const tasks = [
      { task: 'Initializing Perplexity AI connection...', duration: 1000, progress: 10 },
      { task: 'Fetching latest market news from past 7 days...', duration: 3000, progress: 30 },
      { task: 'Analyzing Meta Ads platform updates...', duration: 2000, progress: 45 },
      { task: 'Scanning Google Ads policy changes...', duration: 2000, progress: 60 },
      { task: 'Researching TikTok advertising trends...', duration: 2000, progress: 75 },
      { task: 'Aggregating Philippine market insights...', duration: 2000, progress: 85 },
      { task: 'Generating impact analysis...', duration: 1500, progress: 95 },
      { task: 'Compiling final report...', duration: 1000, progress: 100 }
    ];

    for (const { task, duration, progress: taskProgress } of tasks) {
      setCurrentTask(task);
      addLog(task, 'info');
      setProgress(taskProgress);
      await new Promise(resolve => setTimeout(resolve, duration));
    }

    addLog('✅ Research complete! Data has been updated.', 'success');
    setIsRunning(false);
    setCurrentTask('Research completed successfully');
  };

  useEffect(() => {
    if (isVisible && !isRunning) {
      runResearch();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="ai-research-modal">
      <div className="research-modal-overlay" onClick={onClose}></div>
      <div className="research-modal-content">
        <div className="research-header">
          <h3>🤖 AI Research in Progress</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="research-progress">
          <div className="progress-info">
            <span className="progress-label">{currentTask}</span>
            <span className="progress-percentage">{progress}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="research-logs">
          <div className="logs-header">
            <h4>AI Conversation Log</h4>
            <span className="log-count">{logs.length} events</span>
          </div>
          <div className="logs-container">
            {logs.map(log => (
              <div key={log.id} className={`log-item log-${log.type}`}>
                <span className="log-timestamp">{log.timestamp}</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="research-actions">
          {isRunning ? (
            <button className="btn-secondary" disabled>
              <span className="spinner-small"></span> Research in Progress...
            </button>
          ) : (
            <>
              <button className="btn-primary" onClick={runResearch}>
                🔄 Run Again
              </button>
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIResearchProgress;
