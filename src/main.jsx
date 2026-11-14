import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  { title: 'Fragments of Light', type: 'Identity · 2025', image: 'photo-1531058020387-3be344556be6', color: '#ea3d2c' },
  { title: 'Objects in Motion', type: 'Art direction · 2024', image: 'photo-1490312278390-ab64016e0aa9', color: '#c5ff00' },
  { title: 'Soft Geometry', type: 'Digital · 2025', image: 'photo-1550745165-9bc0b252726f', color: '#694cff' },
  { title: 'A Place Apart', type: 'Photography · 2024', image: 'photo-1518005020951-eccb494ad742', color: '#ff7448' },
  { title: 'Future Nature', type: 'Campaign · 2025', image: 'photo-1518837695005-2083093ee35b', color: '#28b8a8' },
  { title: 'After the Rain', type: 'Editorial · 2024', image: 'photo-1470770841072-f978cf4d019e', color: '#8da6bb' },
]

function App() {
  const [active, setActive] = useState(0)
  const [drag, setDrag] = useState({ down: false, start: 0, offset: 0 })

  const beginDrag = event => {
    if (event.button !== undefined && event.button !== 0) return
    event.currentTarget.setPointerCapture?.(event.pointerId)
    setDrag({ down: true, start: event.clientX, offset: 0 })
  }

  const moveDrag = event => {
    if (!drag.down) return
    const offset = event.clientX - drag.start
    setDrag(current => ({ ...current, offset }))
  }

  const endDrag = () => {
    if (!drag.down) return
    if (Math.abs(drag.offset) > 55) {
      setActive(index => (index + (drag.offset < 0 ? 1 : projects.length - 1)) % projects.length)
    }
    setDrag({ down: false, start: 0, offset: 0 })
  }

  const rotate = direction => setActive(index => (index + direction + projects.length) % projects.length)

  return (
    <main className="showcase-page">
      <header className="showcase-header">
        <a className="showcase-brand" href="#top" aria-label="Manjitha.dev home">
          <span className="showcase-avatar"><img src="/image.png" alt="" /></span>
          <span>Manjitha.dev</span>
        </a>
        <span className="header-note">Independent creative practice</span>
        <a className="header-contact" href="mailto:">Let’s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="showcase-intro" id="top" aria-labelledby="intro-title">
        <p className="eyebrow"><span className="live-dot" />Selected work · 2024—25</p>
        <h1 id="intro-title">Crafting digital<br className="mobile-break" /> experiences that<br /> inspire and engage.</h1>
        <p className="intro-caption">A collection of visual worlds, made with curiosity and care.</p>
      </section>

      <section className="work-carousel" aria-label="Selected projects">
        <div
          className={`project-track${drag.down ? ' is-dragging' : ''}`}
          onPointerDown={beginDrag}
          onPointerMove={moveDrag}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          onKeyDown={event => {
            if (event.key === 'ArrowRight') rotate(1)
            if (event.key === 'ArrowLeft') rotate(-1)
          }}
          tabIndex={0}
          role="group"
          aria-roledescription="carousel"
          aria-label="Drag or use arrow keys to browse projects"
        >
          {projects.map((project, index) => {
            let relative = index - active
            if (relative > projects.length / 2) relative -= projects.length
            if (relative < -projects.length / 2) relative += projects.length
            const x = relative * 40 + (drag.down ? (drag.offset / 10) : 0)
            const isActive = relative === 0

            return (
              <button
                className={`project-card${isActive ? ' is-active' : ''}`}
                key={project.title}
                style={{ '--card-x': `${x}vw`, '--card-z': `${isActive ? 0 : -Math.abs(relative) * 135}px`, '--card-rot': `${relative * -7}deg`, '--card-color': project.color, '--card-order': Math.abs(relative) }}
                onClick={() => {
                  if (!isActive) setActive(index)
                }}
                aria-label={`${project.title}, ${project.type}${isActive ? ', selected' : ', select project'}`}
                aria-current={isActive ? 'true' : undefined}
                tabIndex={isActive || Math.abs(relative) === 1 ? 0 : -1}
              >
                <span className="project-image" style={{ backgroundImage: `url(https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=1600&q=85)` }} />
                <span className="project-shade" />
                <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="card-open" aria-hidden="true">↗</span>
              </button>
            )
          })}
        </div>

        <div className="carousel-meta">
          <div className="active-project" aria-live="polite">
            <span className="active-project__type">{projects[active].type}</span>
            <h2>{projects[active].title}</h2>
          </div>
          <div className="carousel-controls">
            <button type="button" className="arrow-button" onClick={() => rotate(-1)} aria-label="Previous project">←</button>
            <span className="carousel-count"><strong>{String(active + 1).padStart(2, '0')}</strong><span>/</span>{String(projects.length).padStart(2, '0')}</span>
            <button type="button" className="arrow-button" onClick={() => rotate(1)} aria-label="Next project">→</button>
          </div>
        </div>
      </section>

      <footer className="showcase-footer">
        <span>© 2025 Manjitha.dev</span>
        <span>Made to move.</span>
        <a href="mailto:">Start a conversation <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
