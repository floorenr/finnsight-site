import { useState } from 'react'

export default function LandingPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <div className="logo">Finnsight</div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
          <ul className={mobileMenuOpen ? 'nav-open' : ''}>
            <li><a href="#what" onClick={() => setMobileMenuOpen(false)}>Wat is Finnsight</a></li>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('trust'); }}>Vertrouwen</a></li>
            <li><a href="mailto:hello@finnsight.nl" className="cta-nav">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        {/* Section 1: What is Finnsight */}
        <section id="what" className="section hero scroll-target">
          <h1>Inzicht in jouw financiële toekomst</h1>
          <p className="lead">Finnsight geeft Nederlandse werknemers een helder beeld van hun financiële mogelijkheden — tot en met pensioen.</p>
          <p className="subtext">Geen adviezen. Geen giswerk. Alleen feiten over wat jij kunt doen.</p>
          <div style={{ marginTop: 'var(--spacing-xl)' }}>
            <a href="mailto:hello@finnsight.nl" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}>Neem contact op</a>
          </div>
        </section>

        {/* Section 2: Who it's for */}
        <section className="section">
          <h2>Voor wie is Finnsight?</h2>
          <div className="grid-2">
            <article>
              <h3>Voor werknemers</h3>
              <p>Wil je weten hoeveel je later beschikbaar hebt? Finnsight laat je zien hoe je huisvesting, belasting, pensioen en uitgaven samenhangen.</p>
            </article>
            <article>
              <h3>Voor werkgevers</h3>
              <p>Werknemers die inzicht hebben in hun financiële toekomst zijn meer gefocust en kalmer. Finnsight is een benefit die echt werkt.</p>
            </article>
          </div>
        </section>

        {/* Section 3: Problems addressed */}
        <section className="section">
          <h2>De problemen die we oplossen</h2>
          <ul className="problems">
            <li><strong>Financiële onzekerheid:</strong> Veel werknemers weten niet hoe hun inkomen, hypotheek, en pensioen samen optellen tot een werkelijk beeld.</li>
            <li><strong>Vertrouwen in adviezen:</strong> Online calculators zijn vaak vag of geven tegenstrijdig advies. We geven geen adviezen — alleen feiten.</li>
            <li><strong>Privacy:</strong> Werknemers willen niet dat hun werkgever weet hoe ze hun geld besteden. Dat zal ook nooit gebeuren.</li>
          </ul>
        </section>

        {/* Section 4: How it works */}
        <section className="section">
          <h2>Hoe werkt Finnsight?</h2>
          <ol className="process">
            <li><strong>Jij deelt je situatie:</strong> Inkomsten, woning, schulden, pensioen, uitgaven.</li>
            <li><strong>Finnsight rekent:</strong> Deterministische berekeningen (geen AI-adviezen) tonen je financiële beeld.</li>
            <li><strong>Jij ziet helderheid:</strong> Inzichtelijk overzicht met scenario's. Geen interpretatie. Jij besluit.</li>
          </ol>
        </section>

        {/* Section 5: What Finnsight does NOT do */}
        <section className="section highlight">
          <h2>Wat Finnsight NIET doet</h2>
          <ul className="dont-list">
            <li>❌ Biedt financieel advies (AFM-gerelateerd)</li>
            <li>❌ Gebruikt AI om conclusies te genereren</li>
            <li>❌ Geeft je werkgever inzicht in jouw financiën</li>
            <li>❌ Maakt beloftes over toekomstprognoses</li>
          </ul>
        </section>

        {/* Section 6: CTA */}
        <section className="section cta-section">
          <h2>Interesse?</h2>
          <p>Finnsight bevindt zich in de pilotfase. We werken met een select aantal werkgevers om het product samen te ontwikkelen.</p>
          <p>Ben je werkgever, onderzoeker, journalist, of adviseur?</p>
          <a href="mailto:hello@finnsight.nl" className="btn btn-primary">Neem contact op</a>
        </section>
      </main>

      <footer className="footer">
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('trust'); }}>Vertrouwen & Compliance</a>
          <span style={{ color: '#6b7280' }}>|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
          <span style={{ color: '#6b7280' }}>|</span>
          <span style={{ color: '#9ca3af' }}>Privacy en voorwaarden volgen in latere fase</span>
        </nav>
        <p style={{ marginTop: 'var(--spacing-md)', marginBottom: 0 }}>&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
