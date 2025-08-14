import { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, ZoomControl, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './MapView.css'

// Custom marker icons for sourcing regions
const createCustomIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background: ${color}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.3);"></div>`,
    iconSize: [12, 12],
    iconAnchor: [6, 6]
  })
}

// Sample sourcing data
const sourcingRegions = [
  { name: 'Ivory Coast', lat: 7.5399, lng: -5.5471, risk: 'Medium', cocoa: 45, icon: createCustomIcon('#8B4513') },
  { name: 'Ghana', lat: 7.9465, lng: -1.0232, risk: 'Low', cocoa: 38, icon: createCustomIcon('#228B22') },
  { name: 'Ecuador', lat: -1.8312, lng: -78.1834, risk: 'Medium', cocoa: 12, icon: createCustomIcon('#FFD700') },
  { name: 'Peru', lat: -9.1900, lng: -75.0152, risk: 'High', cocoa: 5, icon: createCustomIcon('#FF4500') }
]

export default function MapView() {
  const mapRef = useRef<L.Map | null>(null)

  const [agentStatus, setAgentStatus] = useState('analyzing')

  useEffect(() => {
    console.log('MapView component mounted')
    // Simulate agent analysis
    const timer = setTimeout(() => setAgentStatus('ready'), 2000)
    return () => {
      clearTimeout(timer)
      console.log('MapView component unmounting')
    }
  }, [])

  const handleMapReady = (map: L.Map) => {
    console.log('Map is ready:', map)
    mapRef.current = map
    setTimeout(() => {
      map.invalidateSize()
    }, 100)
  }

  return (
    <div className="map-view-container">
      {/* Agent Status Bar */}
      <div className="agent-status-bar">
        <div className="agent-indicator">
          <div className={`agent-dot ${agentStatus}`}></div>
          <span className="agent-text">
            {agentStatus === 'analyzing' ? 'Multi-Agent System Analyzing...' : 'Risk Assessment Complete'}
          </span>
        </div>
        <div className="agent-metrics">
          <span className="metric">4 Regions Analyzed</span>
          <span className="metric">•</span>
          <span className="metric">12 Risk Factors</span>
          <span className="metric">•</span>
          <span className="metric">98.7% Confidence</span>
        </div>
      </div>

      <MapContainer
        center={[0, 0]}
        zoom={2}
        minZoom={2}
        zoomControl={false}
        worldCopyJump
        ref={handleMapReady}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        <ZoomControl position="bottomright" />
        
        {sourcingRegions.map((region) => (
          <Marker
            key={region.name}
            position={[region.lat, region.lng]}
            icon={region.icon}
            eventHandlers={{
              click: () => console.log('Selected region:', region.name)
            }}
          >
            <Popup className="region-popup">
              <div className="popup-content">
                <h3>{region.name}</h3>
                <div className="popup-metrics">
                  <div className="metric-item">
                    <span className="label">Risk Level:</span>
                    <span className={`value risk-${region.risk.toLowerCase()}`}>{region.risk}</span>
                  </div>
                  <div className="metric-item">
                    <span className="label">Cocoa Supply:</span>
                    <span className="value">{region.cocoa}%</span>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
