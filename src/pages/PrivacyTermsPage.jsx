import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'

export default function PrivacyTermsPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const header = document.querySelector('.header')
    const handleScroll = () => {
      if (!header) return
      header.classList.toggle('scrolled', window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Helmet>
        <title>Privacy en voorwaarden — Finnsight</title>
        <meta name="description" content="Hoe Finnsight omgaat met privacy, opslag en gebruiksvoorwaarden." />
      </Helmet>
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)} aria-label="Ga naar startpagina">Finnsight</Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
          <ul className={`nav-list ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <li>
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-link ${pathname === '/' ? 'active' : ''}`}
                aria-current={pathname === '/' ? 'page' : undefined}
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                to="/trust"
                onClick={() => setMobileMenuOpen(false)}
                className={`nav-link ${pathname === '/trust' ? 'active' : ''}`}
                aria-current={pathname === '/trust' ? 'page' : undefined}
              >
                Vertrouwen
              </Link>
            </li>
            <li>
              <a href="mailto:hello@finnsight.nl" className="cta-nav">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="content" id="main-content">
        <h1>Privacy en voorwaarden</h1>
        <p className="lead">Kernsamenvatting van hoe wij met je gegevens en gebruik omgaan.</p>

        <section>
          <h2>Privacy</h2>
          <ul>
            <li>Geen accounts, geen opslag: we bewaren geen ingevulde gegevens.</li>
            <li>Geen tracking: geen cookies, geen third-party analytics.</li>
            <li>Niet delen met werkgevers: individuele data gaat nooit naar werkgevers.</li>
            <li>Contact: mail ons via <a href="mailto:hello@finnsight.nl">hello@finnsight.nl</a>.</li>
          </ul>
        </section>

        <section>
          <h2>Gebruiksvoorwaarden</h2>
          <ul>
            <li>Illustratief: de site geeft uitleg over wat Finnsight doet, geen advies.</li>
            <li>Niet-bindend: prognoses zijn informatief en niet gegarandeerd om uit te komen.</li>
            <li>Jij beslist: jij blijft zelf verantwoordelijk voor je keuzes.</li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Vragen of verzoeken? <a href="mailto:hello@finnsight.nl">hello@finnsight.nl</a>.</p>
        </section>
      </main>

      <footer className="footer">
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Start</Link>
          <span className="divider-muted">|</span>
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span className="divider-muted">|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
        </nav>
        <p className="footer-note">&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
