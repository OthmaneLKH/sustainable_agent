import { useState } from 'react'
import LandingPage from './components/LandingPage'
import MapView from './components/MapView'
import './App.css'

function Header({ onResetView, onBackToProducts }: { onResetView: () => void, onBackToProducts: () => void }) {
  return (
    <div className="header">
      <div className="brand">
        <div className="brand-badge">🌱</div>
        <div className="brand-text">
          <h1>Sustainable Agent</h1>
          <span className="brand-subtitle">Chocolate Bar Sourcing Analysis</span>
        </div>
      </div>
      <div className="controls">
        <button className="btn secondary" onClick={onBackToProducts}>
          <span className="btn-icon">←</span>
          Back to Products
        </button>
        <button className="btn secondary" onClick={onResetView}>
          <span className="btn-icon">🔄</span>
          Reset View
        </button>
        <button className="btn primary">
          <span className="btn-icon">📊</span>
          Generate Report
        </button>
      </div>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="panel">
        <div className="panel-header">
          <span className="panel-icon">🗺️</span>
          Map Layers
        </div>
        <div className="panel-body">
          <div className="layer-item active">
            <div className="layer-indicator"></div>
            <span>Base: OpenStreetMap</span>
          </div>
          <div className="layer-item">
            <div className="layer-indicator"></div>
            <span>Risk Heatmap</span>
          </div>
          <div className="layer-item">
            <div className="layer-indicator"></div>
            <span>Supply Chain</span>
          </div>
        </div>
      </div>
      
      <div className="panel">
        <div className="panel-header">
          <span className="panel-icon">🔍</span>
          Risk Filters
        </div>
        <div className="panel-body">
          <div className="filter-group">
            <label className="filter-label">Risk Level</label>
            <div className="filter-options">
              <span className="filter-option active">All</span>
              <span className="filter-option">High</span>
              <span className="filter-option">Medium</span>
              <span className="filter-option">Low</span>
            </div>
          </div>
          <div className="filter-group">
            <label className="filter-label">Supply %</label>
            <div className="filter-options">
              <span className="filter-option active">All</span>
              <span className="filter-option">{'>'}20%</span>
              <span className="filter-option">{'>'}10%</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

function MainContent() {
  return (
    <main className="main">
      <div className="stat-cards">
        <div className="stat">
          <div className="stat-icon">🌍</div>
          <div className="stat-content">
            <h3>Active Regions</h3>
            <div className="value">4</div>
            <div className="stat-change positive">+1 this month</div>
          </div>
        </div>
        <div className="stat">
          <div className="stat-icon">⚠️</div>
          <div className="stat-content">
            <h3>Risk Score</h3>
            <div className="value">6.2</div>
            <div className="stat-change negative">+0.8 vs last year</div>
          </div>
        </div>
        <div className="stat">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <h3>Supply Coverage</h3>
            <div className="value">98.7%</div>
            <div className="stat-change positive">+2.1% vs last year</div>
          </div>
        </div>
      </div>

      <div className="panel">
        <div className="panel-header">
          <span className="panel-icon">🤖</span>
          Agent Insights
        </div>
        <div className="panel-body">
          <div className="insight-item">
            <div className="insight-icon">💡</div>
            <div className="insight-content">
              <h4>Supply Diversification</h4>
              <p>Consider expanding into Ecuador to reduce dependency on West African suppliers.</p>
            </div>
          </div>
          <div className="insight-item">
            <div className="insight-icon">⚠️</div>
            <div className="insight-content">
              <h4>Climate Risk Alert</h4>
              <p>Peru showing increased drought patterns. Monitor closely for supply disruptions.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'map'>('landing')
  const [mapKey, setMapKey] = useState(0)
  
  const handleProductSelect = (productId: string) => {
    if (productId === 'chocolate') {
      setCurrentView('map')
      setTimeout(() => setMapKey(prev => prev + 1), 100)
    }
  }
  
  const handleBackToProducts = () => {
    setCurrentView('landing')
  }
  
  const resetView = () => {
    setMapKey(prev => prev + 1)
  }

  if (currentView === 'landing') {
    return <LandingPage onProductSelect={handleProductSelect} />
  }

  return (
    <>
      <MapView key={mapKey} />
      <div className="overlay-root">
        <Header onResetView={resetView} onBackToProducts={handleBackToProducts} />
        <Sidebar />
        <MainContent />
      </div>
    </>
  )
}
