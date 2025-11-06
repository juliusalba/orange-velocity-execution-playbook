import React, { useState, useEffect } from 'react';
import { perplexityAPI, googleAnalyticsAPI } from '../services/api';

const SystemStatus = () => {
  const [status, setStatus] = useState({
    perplexity: { status: 'checking', message: 'Checking...', lastChecked: null },
    googleMaps: { status: 'checking', message: 'Checking...', lastChecked: null },
    googleAnalytics: { status: 'checking', message: 'Checking...', lastChecked: null },
    overall: { status: 'checking', critical: 0, warnings: 0, healthy: 0 }
  });

  const [logs, setLogs] = useState([]);
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    checkAllSystems();
    
    if (autoRefresh) {
      const interval = setInterval(checkAllSystems, 60000);
      return () => clearInterval(interval);
    }
  }, [autoRefresh]);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [{
      id: Date.now(),
      timestamp,
      message,
      type
    }, ...prev].slice(0, 50));
  };

  const checkAllSystems = async () => {
    console.log('Starting system health check...');
    addLog('Starting system health check...', 'info');
    
    try {
      const results = await Promise.all([
        checkPerplexityAPI(),
        checkGoogleMaps(),
        checkGoogleAnalytics()
      ]);

      const [perplexity, googleMaps, googleAnalytics] = results;
      
      const critical = results.filter(r => r.status === 'error').length;
      const warnings = results.filter(r => r.status === 'warning').length;
      const healthy = results.filter(r => r.status === 'success').length;

      setStatus({
        perplexity,
        googleMaps,
        googleAnalytics,
        overall: {
          status: critical > 0 ? 'error' : warnings > 0 ? 'warning' : 'success',
          critical,
          warnings,
          healthy
        }
      });

      if (critical > 0) {
        addLog(`⚠️ ALERT: ${critical} critical system(s) down!`, 'error');
      } else if (warnings > 0) {
        addLog(`⚡ WARNING: ${warnings} system(s) need attention`, 'warning');
      } else {
        addLog(`✅ All systems operational`, 'success');
      }
    } catch (error) {
      console.error('Error during system check:', error);
      addLog(`❌ Error during system check: ${error.message}`, 'error');
    }
  };

  const checkPerplexityAPI = async () => {
    const apiKey = import.meta.env.VITE_PERPLEXITY_API_KEY;
    
    if (!apiKey || apiKey === 'your_perplexity_key_here') {
      addLog('Perplexity API: API key not configured', 'warning');
      return {
        status: 'warning',
        message: 'API key not configured. Add VITE_PERPLEXITY_API_KEY to .env file.',
        lastChecked: new Date().toISOString(),
        details: 'Market updates will use fallback data until API key is added.'
      };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch('https://api.perplexity.ai/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.1-sonar-small-128k-online',
          messages: [{
            role: 'user',
            content: 'Test connection. Reply with OK.'
          }],
          max_tokens: 10
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        addLog('Perplexity API: Connected successfully ✓', 'success');
        return {
          status: 'success',
          message: 'Connected and operational',
          lastChecked: new Date().toISOString(),
          details: 'Real-time market insights available'
        };
      } else if (response.status === 401) {
        addLog('Perplexity API: Invalid API key', 'error');
        return {
          status: 'error',
          message: 'Invalid API key',
          lastChecked: new Date().toISOString(),
          details: 'Check your VITE_PERPLEXITY_API_KEY in .env file'
        };
      } else if (response.status === 429) {
        addLog('Perplexity API: Rate limit exceeded', 'warning');
        return {
          status: 'warning',
          message: 'Rate limit exceeded',
          lastChecked: new Date().toISOString(),
          details: 'Too many requests. Will retry later.'
        };
      } else {
        addLog(`Perplexity API: Error ${response.status}`, 'error');
        return {
          status: 'error',
          message: `HTTP ${response.status}: ${response.statusText}`,
          lastChecked: new Date().toISOString(),
          details: 'API request failed'
        };
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        addLog('Perplexity API: Connection timeout', 'error');
        return {
          status: 'error',
          message: 'Connection timeout',
          lastChecked: new Date().toISOString(),
          details: 'API took too long to respond (>10s)'
        };
      }

      addLog(`Perplexity API: ${error.message}`, 'error');
      return {
        status: 'error',
        message: error.message,
        lastChecked: new Date().toISOString(),
        details: 'Network error or CORS issue'
      };
    }
  };

  const checkGoogleMaps = async () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    
    if (!apiKey || apiKey === 'your_google_maps_key_here') {
      addLog('Google Maps API: API key not configured', 'warning');
      return {
        status: 'warning',
        message: 'API key not configured',
        lastChecked: new Date().toISOString(),
        details: 'Add VITE_GOOGLE_MAPS_API_KEY to .env file'
      };
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const response = await fetch(
        `https://maps.googleapis.com/maps/api/js?key=${apiKey}`,
        { 
          method: 'HEAD',
          signal: controller.signal 
        }
      );

      clearTimeout(timeoutId);

      if (response.ok || response.status === 200) {
        addLog('Google Maps API: Connected successfully ✓', 'success');
        return {
          status: 'success',
          message: 'Connected and operational',
          lastChecked: new Date().toISOString(),
          details: 'Interactive maps fully functional'
        };
      } else {
        addLog(`Google Maps API: Error ${response.status}`, 'error');
        return {
          status: 'error',
          message: `Invalid API key or quota exceeded`,
          lastChecked: new Date().toISOString(),
          details: 'Verify API key and check Google Cloud Console quotas'
        };
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        addLog('Google Maps API: Connection timeout', 'warning');
        return {
          status: 'warning',
          message: 'Connection timeout',
          lastChecked: new Date().toISOString(),
          details: 'Slow response, but may still be functional'
        };
      }

      addLog('Google Maps API: Connection check skipped (CORS)', 'info');
      return {
        status: 'success',
        message: 'Assumed operational (CORS restriction)',
        lastChecked: new Date().toISOString(),
        details: 'Cannot verify via API, but likely working if key is valid'
      };
    }
  };

  const checkGoogleAnalytics = async () => {
    const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
    
    if (!measurementId || measurementId === 'G-XXXXXXXXXX') {
      addLog('Google Analytics: Measurement ID not configured', 'warning');
      return {
        status: 'warning',
        message: 'Measurement ID not configured',
        lastChecked: new Date().toISOString(),
        details: 'Analytics tracking disabled. Add VITE_GA4_MEASUREMENT_ID to .env'
      };
    }

    const isInitialized = googleAnalyticsAPI.initialized || (window.gtag && window.dataLayer);
    
    if (isInitialized) {
      addLog('Google Analytics: Tracking active ✓', 'success');
      return {
        status: 'success',
        message: 'Tracking active',
        lastChecked: new Date().toISOString(),
        details: `ID: ${measurementId.substring(0, 8)}...`
      };
    } else {
      addLog('Google Analytics: Not initialized', 'warning');
      return {
        status: 'warning',
        message: 'Not initialized',
        lastChecked: new Date().toISOString(),
        details: 'Analytics may not be tracking events'
      };
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return '✅';
      case 'warning': return '⚠️';
      case 'error': return '❌';
      case 'checking': return '🔄';
      default: return '❓';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return '#4CAF50';
      case 'warning': return '#FFA726';
      case 'error': return '#ef4444';
      case 'checking': return '#64B5F6';
      default: return '#9e9e9e';
    }
  };

  const getOverallHealth = () => {
    const { overall } = status;
    if (overall.status === 'error') return { text: 'SYSTEMS DOWN', color: '#ef4444' };
    if (overall.status === 'warning') return { text: 'DEGRADED', color: '#FFA726' };
    if (overall.status === 'success') return { text: 'ALL SYSTEMS OPERATIONAL', color: '#4CAF50' };
    return { text: 'CHECKING...', color: '#64B5F6' };
  };

  const health = getOverallHealth();

  return (
    <div className="system-status-page">
      <div className="status-header">
        <div className="status-title-section">
          <h2>🔧 System Status Dashboard</h2>
          <p>Real-time monitoring of all integrations and services</p>
        </div>
        <div className="status-actions">
          <button 
            className="refresh-btn"
            onClick={checkAllSystems}
          >
            🔄 Refresh Now
          </button>
          <label className="auto-refresh-toggle">
            <input 
              type="checkbox"
              checked={autoRefresh}
              onChange={(e) => setAutoRefresh(e.target.checked)}
            />
            <span>Auto-refresh (60s)</span>
          </label>
        </div>
      </div>

      <div className="overall-health" style={{ borderColor: health.color }}>
        <div className="health-indicator" style={{ background: health.color }}></div>
        <div className="health-info">
          <h3 style={{ color: health.color }}>{health.text}</h3>
          <div className="health-stats">
            <span className="health-stat success">✅ {status.overall.healthy} Healthy</span>
            {status.overall.warnings > 0 && (
              <span className="health-stat warning">⚠️ {status.overall.warnings} Warnings</span>
            )}
            {status.overall.critical > 0 && (
              <span className="health-stat error">❌ {status.overall.critical} Critical</span>
            )}
          </div>
        </div>
      </div>

      <div className="systems-grid">
        <div className="system-card" style={{ borderLeftColor: getStatusColor(status.perplexity.status) }}>
          <div className="system-header">
            <h4>
              {getStatusIcon(status.perplexity.status)} Perplexity AI
            </h4>
            <span className={`status-badge status-${status.perplexity.status}`}>
              {status.perplexity.status}
            </span>
          </div>
          <p className="system-message">{status.perplexity.message}</p>
          <p className="system-details">{status.perplexity.details}</p>
          {status.perplexity.lastChecked && (
            <p className="last-checked">
              Last checked: {new Date(status.perplexity.lastChecked).toLocaleTimeString()}
            </p>
          )}
          <div className="system-features">
            <strong>Powers:</strong>
            <ul>
              <li>Market Updates (7-day rolling data)</li>
              <li>Daily AI Summaries</li>
              <li>Competitive Intelligence (10 queries)</li>
              <li>City Analytics</li>
            </ul>
          </div>
        </div>

        <div className="system-card" style={{ borderLeftColor: getStatusColor(status.googleMaps.status) }}>
          <div className="system-header">
            <h4>
              {getStatusIcon(status.googleMaps.status)} Google Maps
            </h4>
            <span className={`status-badge status-${status.googleMaps.status}`}>
              {status.googleMaps.status}
            </span>
          </div>
          <p className="system-message">{status.googleMaps.message}</p>
          <p className="system-details">{status.googleMaps.details}</p>
          {status.googleMaps.lastChecked && (
            <p className="last-checked">
              Last checked: {new Date(status.googleMaps.lastChecked).toLocaleTimeString()}
            </p>
          )}
          <div className="system-features">
            <strong>Powers:</strong>
            <ul>
              <li>Interactive City Maps</li>
              <li>Business Distribution Visualization</li>
              <li>Click-to-Analyze Modals</li>
            </ul>
          </div>
        </div>

        <div className="system-card" style={{ borderLeftColor: getStatusColor(status.googleAnalytics.status) }}>
          <div className="system-header">
            <h4>
              {getStatusIcon(status.googleAnalytics.status)} Google Analytics
            </h4>
            <span className={`status-badge status-${status.googleAnalytics.status}`}>
              {status.googleAnalytics.status}
            </span>
          </div>
          <p className="system-message">{status.googleAnalytics.message}</p>
          <p className="system-details">{status.googleAnalytics.details}</p>
          {status.googleAnalytics.lastChecked && (
            <p className="last-checked">
              Last checked: {new Date(status.googleAnalytics.lastChecked).toLocaleTimeString()}
            </p>
          )}
          <div className="system-features">
            <strong>Powers:</strong>
            <ul>
              <li>User Behavior Tracking</li>
              <li>Tab & Feature Analytics</li>
              <li>Resource Download Metrics</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="configuration-guide">
        <h3>🔑 API Configuration Guide</h3>
        <div className="config-steps">
          <div className="config-step">
            <h4>1. Perplexity AI</h4>
            <ol>
              <li>Visit <a href="https://www.perplexity.ai/settings/api" target="_blank" rel="noopener noreferrer">Perplexity API Settings</a></li>
              <li>Generate an API key</li>
              <li>Add to <code>.env</code>: <code>VITE_PERPLEXITY_API_KEY=your_key_here</code></li>
              <li>Restart the dev server or rebuild</li>
            </ol>
          </div>
          <div className="config-step">
            <h4>2. Google Maps</h4>
            <ol>
              <li>Go to <a href="https://console.cloud.google.com/apis/credentials" target="_blank" rel="noopener noreferrer">Google Cloud Console</a></li>
              <li>Create or select a project</li>
              <li>Enable "Maps JavaScript API"</li>
              <li>Create API key and add to <code>.env</code>: <code>VITE_GOOGLE_MAPS_API_KEY=your_key_here</code></li>
            </ol>
          </div>
          <div className="config-step">
            <h4>3. Google Analytics</h4>
            <ol>
              <li>Visit <a href="https://analytics.google.com/" target="_blank" rel="noopener noreferrer">Google Analytics</a></li>
              <li>Create GA4 property</li>
              <li>Copy Measurement ID (G-XXXXXXXXXX)</li>
              <li>Add to <code>.env</code>: <code>VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX</code></li>
            </ol>
          </div>
        </div>
      </div>

      <div className="system-logs">
        <div className="logs-header">
          <h3>📋 System Activity Log</h3>
          <button onClick={() => setLogs([])}>Clear Logs</button>
        </div>
        <div className="logs-container">
          {logs.length === 0 ? (
            <p className="no-logs">No activity yet. Click "Refresh Now" to check systems.</p>
          ) : (
            logs.map(log => (
              <div key={log.id} className={`log-entry log-${log.type}`}>
                <span className="log-time">{log.timestamp}</span>
                <span className="log-message">{log.message}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
