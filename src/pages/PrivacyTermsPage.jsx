import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyTermsPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)} aria-label="Ga naar startpagina">Finnsight</Link>
          <button
            className="mobile-menu-toggle"
            onClick={() => window.history.back()}
            aria-label="Terug naar vorige pagina"
          >
            ←
          </button>
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
          <span style={{ color: '#6b7280' }}>|</span>
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span style={{ color: '#6b7280' }}>|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
        </nav>
        <p style={{ marginTop: 'var(--spacing-md)', marginBottom: 0 }}>&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
