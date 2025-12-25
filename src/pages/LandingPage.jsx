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
            <li><a href="#demos" onClick={() => setMobileMenuOpen(false)}>Demo's</a></li>
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
            <button className="btn btn-primary" onClick={() => { onNavigate('demos'); window.scrollTo(0, 0); }} style={{ marginRight: 'var(--spacing-md)', fontSize: '1.1rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}>Bekijk demo</button>
            <a href="mailto:hello@finnsight.nl" className="btn" style={{ background: 'rgba(255,255,255,0.2)', border: '2px solid white', color: 'white' }}>Neem contact op</a>
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
            <li><strong>Jij ziet helderheid:</strong> Inzichtelijk overzicht (illustratief) met scenario's. Geen interpretatie. Jij besluit.</li>
          </ol>
        </section>

        {/* Section 5: What Finnsight does NOT do */}
        <section className="section highlight">
          <h2>Wat Finnsight NIET doet</h2>
          <ul className="dont-list">
            <li>❌ Biedt financieel advies (AFM-gerelateerd)</li>
            <li>❌ Gebruikt AI om conclusies te genereren</li>
            <li>❌ Slaat persoonlijke gegevens op als je alleen een demo wilt zien</li>
            <li>❌ Geeft je werkgever inzicht in jouw financiën</li>
            <li>❌ Maakt beloftes over toekomstprognoses</li>
          </ul>
        </section>

        {/* Section 6: Demos */}
        <section id="demos" className="section scroll-target">
          <h2>Probeer de demo's</h2>
          <p>Beide demo's zijn illustratief. Ze gebruiken geen persoonlijke gegevens en slaan niets op.</p>
          <div className="grid-2">
            <div className="demo-card">
              <h3>Quick-scan</h3>
              <p>6 vragen, 1 minuut. Wat ziet jij als je verder kijkt?</p>
              <button className="btn" onClick={() => { onNavigate('demos'); setTimeout(() => document.getElementById('quick-scan')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }}>Quick-scan proberen</button>
            </div>
            <div className="demo-card">
              <h3>Goal-first</h3>
              <p>Begin met wat je wilt bereiken. Finnsight toont impact en trade-offs.</p>
              <button className="btn" onClick={() => { onNavigate('demos'); setTimeout(() => document.getElementById('goal-first')?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100); }}>Goal-first proberen</button>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section id="cta" className="section cta-section">
          <h2>Interesse?</h2>
          <p>Finnsight is beschikbaar voor werkgevers die hun medewerkers willen ondersteunen.<br/>Ben je onderzoeker, journalist, of adviseur?</p>
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
