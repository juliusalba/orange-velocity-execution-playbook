import React, { useEffect, useRef, useState } from 'react';
import { cityData } from '../market-data';

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [mapInstance, setMapInstance] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const markers = useRef([]);

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
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      styles: [
        {
          featureType: 'all',
          elementType: 'geometry',
          stylers: [{ color: '#242f3e' }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [{ color: '#242f3e' }]
        },
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [{ color: '#746855' }]
        }
      ]
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

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; font-family: system-ui, -apple-system, sans-serif;">
            <h3 style="margin: 0 0 8px 0; color: #FF6B35; font-size: 16px;">${city.location}</h3>
            <p style="margin: 4px 0; font-size: 13px;"><strong>Region:</strong> ${city.region}</p>
            <p style="margin: 4px 0; font-size: 13px;"><strong>Total Businesses:</strong> ${city.total.toLocaleString()}</p>
            <p style="margin: 4px 0; font-size: 13px;"><strong>Active Advertisers:</strong> ${city.advertisers.toLocaleString()}</p>
            <p style="margin: 4px 0; font-size: 13px;"><strong>Growth:</strong> <span style="color: ${color}; font-weight: 600;">${city.growth}</span></p>
            <a href="https://www.google.com/maps/search/?api=1&query=${lat},${lng}&zoom=12" 
               target="_blank" 
               style="display: inline-block; margin-top: 8px; color: #FF6B35; text-decoration: none; font-size: 12px;">
              View on Google Maps →
            </a>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
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
    <div style={{ width: '100%', height: '500px', borderRadius: '8px', overflow: 'hidden' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default GoogleMap;
