import React from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import FloatingDock from './components/FloatingDock.jsx'
import FlexCarousel from './components/FlexCarousel/FlexCarousel.jsx'
import DotGrid from './components/DotGrid/DotGrid.jsx'
import './styles.css'
import './components/Navbar.css'
import './components/FloatingDock.css'
import './components/FlexCarousel/FlexCarousel.css'

function App() {
  return (
    <>
      <DotGrid
        className="page-background"
        baseColor="#ffffff"
        activeColor="#ffffff"
        shape="circle"
        dotSize={4}
        gap={22}
        proximity={140}
        strength={1}
        bounce={0.6}
        tension={0.4}
        returnDuration={0.8}
        shockRadius={320}
        shockStrength={5}
        swell={0.8}
        stretch={0.5}
        glow={0.5}
        fade={0.6}
        intro={false}
        opacity={0.8}
        mouseInteraction
        clickShock
      />
      <div className="foreground-content">
        <Navbar />
        <main className="carousel-stage">
          <FlexCarousel
            className="portfolio-carousel"
            items={[
              { src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200&q=85&auto=format&fit=crop', alt: 'Deep blue night sky full of stars', title: 'Night Sky' },
              { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85&auto=format&fit=crop', alt: 'Mountain lake reflecting the surrounding peaks', title: 'Still Water' },
              { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=85&auto=format&fit=crop', alt: 'Open landscape in the warm evening light', title: 'Open Country' },
              { src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&q=85&auto=format&fit=crop', alt: 'Ocean waves rolling toward the shore', title: 'Blue Hour' },
              { src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1200&q=85&auto=format&fit=crop', alt: 'Sunrise spilling golden light over a field', title: 'First Light' },
              { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=85&auto=format&fit=crop', alt: 'Sunlight filtering through a quiet forest', title: 'Quiet Forest' },
            ]}
            preset="liquid"
            intro="none"
            cardHeight={0.58}
            gap={16}
            radius={12}
            captions
            fit="natural"
            focusOnClick
          />
        </main>
        <FloatingDock />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
