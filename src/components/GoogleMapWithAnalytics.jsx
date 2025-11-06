import React, { useEffect, useRef, useState } from 'react';
import { cityData } from '../market-data';
import { googleAnalyticsAPI, perplexityAPI } from '../services/api';

const GoogleMapWithAnalytics = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [hoveredCity, setHoveredCity] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [showModal, setShowModal] = useState(false);
  const [insights, setInsights] = useState(null);
  const [loadingInsights, setLoadingInsights] = useState(false);
  const markers = useRef([]);
  const infoWindowRef = useRef(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDhWMnN7iFidd231w67oZ5ChzhHKQ12Muo';

    if (window.google && window.google.maps) {
      setIsLoaded(true);
      return;
    }

    if (document.querySelector('script[data-google-maps]')) {
      const checkInterval = setInterval(() => {
        if (window.google && window.google.maps) {
          setIsLoaded(true);
          clearInterval(checkInterval);
        }
      }, 100);
      return () => clearInterval(checkInterval);
    }

    window.initGoogleMaps = () => {
      setIsLoaded(true);
    };

    window.gm_authFailure = () => {
      setError('Invalid API Key - Please check your Google Cloud Console setup');
      setIsLoaded(false);
    };

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initGoogleMaps&loading=async`;
    script.async = true;
    script.defer = true;
    script.setAttribute('data-google-maps', 'true');
    script.onerror = () => {
      setError('Failed to load Google Maps');
      setIsLoaded(false);
    };
    document.head.appendChild(script);

    return () => {
      markers.current.forEach(marker => marker.setMap(null));
      markers.current = [];
    };
  }, []);

  useEffect(() => {
    if (!isLoaded || !mapRef.current || mapInstance) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 12.8797, lng: 121.774 },
      zoom: 6,
      mapTypeId: window.google.maps.MapTypeId.SATELLITE
    });

    setMapInstance(map);

    const maxAdvertisers = Math.max(...cityData.map(city => city.advertisers));
    const bounds = new window.google.maps.LatLngBounds();

    cityData.forEach(city => {
      const { lat, lng } = city.coordinates;
      const growth = parseFloat(city.growth.replace('+', '').replace('%', ''));
      const color = growth >= 30 ? '#4CAF50' : growth >= 25 ? '#FF6B35' : '#888';
      const scale = 8 + (city.advertisers / maxAdvertisers) * 12;

      const marker = new window.google.maps.Marker({
        position: { lat, lng },
        map: map,
        title: city.location,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: scale,
          fillColor: color,
          fillOpacity: 0.8,
          strokeColor: '#fff',
          strokeWeight: 2
        }
      });

      marker.addListener('click', () => {
        handleCityClick(city);
      });

      marker.addListener('mouseover', (event) => {
        setHoveredCity(city);
        
        // Create info window if not exists
        if (!infoWindowRef.current) {
          infoWindowRef.current = new window.google.maps.InfoWindow();
        }
        
        const content = `
          <div style="padding: 12px; min-width: 200px; color: #333;">
            <h4 style="margin: 0 0 8px 0; font-size: 16px; color: #FF6B35;">${city.location}</h4>
            <div style="font-size: 13px; line-height: 1.6;">
              <div style="margin-bottom: 4px;"><strong>Total Businesses:</strong> ${city.total.toLocaleString()}</div>
              <div style="margin-bottom: 4px;"><strong>Active Advertisers:</strong> ${city.advertisers.toLocaleString()}</div>
              <div style="margin-bottom: 4px;"><strong>Growth Rate:</strong> <span style="color: ${growth >= 30 ? '#4CAF50' : '#FF6B35'}; font-weight: 600;">${city.growth}</span></div>
              <div style="margin-top: 8px; padding-top: 8px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
                💡 Click for detailed analytics
              </div>
            </div>
          </div>
        `;
        
        infoWindowRef.current.setContent(content);
        infoWindowRef.current.open(map, marker);
      });

      marker.addListener('mouseout', () => {
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
        setHoveredCity(null);
      });

      markers.current.push(marker);
      bounds.extend({ lat, lng });
    });

    if (!bounds.isEmpty()) {
      map.fitBounds(bounds);
      window.google.maps.event.addListenerOnce(map, 'bounds_changed', () => {
        if (map.getZoom() > 6) {
          map.setZoom(6);
        }
      });
    }
  }, [isLoaded, mapInstance]);

  const handleCityClick = async (city) => {
    setSelectedCity(city);
    setShowModal(true);
    setLoadingInsights(true);

    googleAnalyticsAPI.trackCityClick(city.location, city);

    try {
      const competitiveInsights = await perplexityAPI.getCompetitiveAnalysis(city.location, 'e-commerce');
      setInsights(competitiveInsights);
    } catch (error) {
      console.error('Error fetching insights:', error);
    } finally {
      setLoadingInsights(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCity(null);
    setInsights(null);
  };

  if (error) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center', 
        background: 'rgba(239, 68, 68, 0.1)', 
        borderRadius: '8px',
        color: '#ef4444'
      }}>
        <h3>⚠️ Google Maps Error</h3>
        <p>{error}</p>
        <div style={{ marginTop: '20px', fontSize: '13px', textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
          <strong>Troubleshooting:</strong>
          <ol>
            <li>Enable Maps JavaScript API in Google Cloud Console</li>
            <li>Enable billing (you get $200 free credits/month)</li>
            <li>Add http://localhost:* to API key restrictions</li>
          </ol>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div style={{ 
        padding: '40px', 
        textAlign: 'center',
        background: 'rgba(255, 107, 53, 0.1)',
        borderRadius: '8px'
      }}>
        <h3>🗺️ Loading Google Maps...</h3>
      </div>
    );
  }

  return (
    <>
      <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
        <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
      </div>

      {showModal && selectedCity && (
        <div className="city-modal-overlay" onClick={closeModal}>
          <div className="city-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2>{selectedCity.location}</h2>
              <span className={`growth-badge ${parseFloat(selectedCity.growth) >= 30 ? 'high' : parseFloat(selectedCity.growth) >= 25 ? 'medium' : 'low'}`}>
                {selectedCity.growth}
              </span>
            </div>

            <div className="modal-stats-grid">
              <div className="modal-stat">
                <span className="stat-label">Total Businesses</span>
                <span className="stat-value">{selectedCity.total?.toLocaleString()}</span>
              </div>
              <div className="modal-stat">
                <span className="stat-label">Active Advertisers</span>
                <span className="stat-value">{selectedCity.advertisers?.toLocaleString()}</span>
              </div>
              <div className="modal-stat">
                <span className="stat-label">Region</span>
                <span className="stat-value">{selectedCity.region}</span>
              </div>
            </div>

            {selectedCity.byIndustry && (
              <div className="modal-section">
                <h3>Industry Breakdown</h3>
                <div className="industry-bars">
                  {selectedCity.byIndustry.map((industry, i) => (
                    <div key={i} className="industry-bar-item">
                      <div className="industry-bar-label">
                        <span>{industry.name}</span>
                        <span>{industry.count.toLocaleString()}</span>
                      </div>
                      <div className="industry-bar-track">
                        <div 
                          className="industry-bar-fill" 
                          style={{ width: `${(industry.count / selectedCity.total) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedCity.bySize && (
              <div className="modal-section">
                <h3>Business Size Distribution</h3>
                <div className="size-distribution">
                  {selectedCity.bySize.map((size, i) => (
                    <div key={i} className="size-item">
                      <span className="size-category">{size.category}</span>
                      <span className="size-count">{size.count.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {loadingInsights && (
              <div className="modal-section">
                <h3>🔍 AI Market Insights</h3>
                <div className="loading-insights">
                  <div className="spinner"></div>
                  <p>Fetching competitive insights from Perplexity AI...</p>
                </div>
              </div>
            )}

            {insights && !loadingInsights && (
              <div className="modal-section">
                <h3>🔍 AI Market Insights</h3>
                <div className="ai-insights">
                  <p>{insights.content}</p>
                  {insights.citations && insights.citations.length > 0 && (
                    <div className="citations">
                      <strong>Sources:</strong>
                      <ul>
                        {insights.citations.map((citation, i) => (
                          <li key={i}><a href={citation} target="_blank" rel="noopener noreferrer">{citation}</a></li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="modal-actions">
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${selectedCity.coordinates.lat},${selectedCity.coordinates.lng}&zoom=12`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-on-google-btn"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleMapWithAnalytics;
