import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Explore', href: '#explore' },
  { label: 'About', href: '#about' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-nav-wrap">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="site-nav__brand" href="#home" aria-label="Manjitha.dev home">
          <span className="site-nav__brand-mark" aria-hidden="true">
            <img src="/image.png" alt="" />
          </span>
          <span className="site-nav__brand-name">Manjitha.dev</span>
        </a>

        <div className="site-nav__links">
          {links.map(link => <a key={link.label} href={link.href}>{link.label}</a>)}
        </div>

        <a className="site-nav__cta" href="#contact">Get started</a>

        <button
          className="site-nav__toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(open => !open)}
        >
          <span /><span />
        </button>

        {menuOpen && (
          <div className="site-nav__mobile-menu">
            {links.map(link => (
              <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>Get started</a>
          </div>
        )}
      </nav>
    </header>
  )
}
