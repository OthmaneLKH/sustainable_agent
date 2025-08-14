import { useState, useEffect, useRef } from 'react'
import './LandingPage.css'

interface Product {
  id: string
  name: string
  image: string
  description: string
  rotationSpeed: number
}

const products: Product[] = [
  {
    id: 'chocolate',
    name: 'Chocolate Bar',
    image: '/assets/chocolate.svg',
    description: 'Premium dark chocolate with sustainable cocoa',
    rotationSpeed: 0.8
  },
  {
    id: 'chips',
    name: 'Chips Packet',
    image: '/assets/chips.svg',
    description: 'Crispy potato chips with natural ingredients',
    rotationSpeed: 0.6
  },
  {
    id: 'protein',
    name: 'Protein Bar',
    image: '/assets/protein.svg',
    description: 'High-protein nutrition bar with clean ingredients',
    rotationSpeed: 1.0
  }
]

interface LandingPageProps {
  onProductSelect: (productId: string) => void
}

export default function LandingPage({ onProductSelect }: LandingPageProps) {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)
  const [notification, setNotification] = useState<{ message: string; type: 'info' | 'success' } | null>(null)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const [focusIndex, setFocusIndex] = useState(0)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!gridRef.current) return
      const total = products.length
      if (e.key === 'ArrowRight') setFocusIndex((i) => (i + 1) % total)
      if (e.key === 'ArrowLeft') setFocusIndex((i) => (i - 1 + total) % total)
      if (e.key === 'Enter' || e.key === ' ') handleProductClick(products[focusIndex].id)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [focusIndex])

  const handleProductClick = (productId: string) => {
    if (productId === 'chocolate') {
      onProductSelect(productId)
    } else {
      setNotification({ message: `${products.find(p => p.id === productId)?.name} sourcing analysis coming soon!`, type: 'info' })
      setTimeout(() => setNotification(null), 2500)
    }
  }

  return (
    <div className={`landing-page ${mounted ? 'mounted' : ''}`}>
      {notification && (
        <div className={`notification ${notification.type}`}>
          <span>{notification.message}</span>
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      <div className="background-mesh" />

      <div className="landing-content">
        <header className="landing-header">
          <div className="logo">
            <div className="logo-icon">🌱</div>
            <h1>Sustainable Agent</h1>
          </div>
          <p className="tagline">Transparent sourcing through AI-powered insights</p>
        </header>

        <main className="products-section">
          <h2 className="products-title">These are our products</h2>
          <p className="products-subtitle">
            Click on one of them to discover the countries from which we source our ingredients and for a
            risk assessment thanks to our Multi Agent system
          </p>

          <div className="products-grid" ref={gridRef}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''} ${focusIndex === index ? 'focused' : ''}`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                onClick={() => handleProductClick(product.id)}
                role="button"
                tabIndex={0}
                aria-label={`${product.name}. ${product.id === 'chocolate' ? 'Opens sourcing map' : 'Coming soon'}`}
              >
                <div className="product-visual">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-rotating"
                    style={{ animationDuration: `${10 / product.rotationSpeed}s` }}
                    draggable={false}
                  />
                </div>

                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-cta">
                    <span className="cta-text">{product.id === 'chocolate' ? 'Explore sourcing' : 'Coming soon'}</span>
                    <div className="cta-arrow">→</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="landing-footer">
          <div className="footer-content">
            <p>Powered by Multi-Agent AI System</p>
            <div className="footer-icons">
              <span>🌍</span>
              <span>🤖</span>
              <span>📊</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
