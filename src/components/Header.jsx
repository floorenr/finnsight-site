import { useEffect, useState, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const headerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('scrolled', window.scrollY > 0)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <nav className="nav" aria-label="Main navigation">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)} aria-label="Ga naar startpagina">
          <img src="/brand/logo-primary-horizontal.svg" alt="Finnsight" className="logo-img" />
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="main-nav-list"
          aria-label="Menu"
        >
          {mobileMenuOpen ? '×' : '☰'}
        </button>
        <ul id="main-nav-list" className={`nav-list ${mobileMenuOpen ? 'nav-open' : ''}`}>
          {pathname !== '/' && (
            <li>
              <NavLink
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {pathname === '/trust' ? '← Terug naar start' : 'Start'}
              </NavLink>
            </li>
          )}
          {pathname !== '/trust' && (
            <li>
              <NavLink
                to="/trust"
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Vertrouwen
              </NavLink>
            </li>
          )}
          <li>
            <a href="mailto:hello@finnsight.nl" className="cta-nav">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
