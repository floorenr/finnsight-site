import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
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
          <ul className={mobileMenuOpen ? 'nav-open' : ''}>
            <li><a href="#what" onClick={() => setMobileMenuOpen(false)}>Wat is Finnsight</a></li>
            <li><Link to="/trust" onClick={() => setMobileMenuOpen(false)}>Vertrouwen</Link></li>
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

        {/* Section 2b: HR Value Proposition */}
        <section className="section highlight">
          <h2>HR-waarde, zonder privacy-compromissen</h2>
          <p className="subtext" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Bied medewerkers helder financieel inzicht, zonder dat HR individuele of geaggregeerde financiële data hoeft te ontvangen.
          </p>
          
          <div className="grid-2" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <article>
              <h3>Employee-first ervaring</h3>
              <p>Medewerkers krijgen één geïntegreerd overzicht (pensioen, hypotheek, vermogen) met scenario-impact. HR hoeft geen dossiers te beheren.</p>
            </article>
            <article>
              <h3>Privacy by design</h3>
              <p>Werkgevers krijgen geen toegang tot individuele financiële gegevens. Finnsight is ontworpen om medewerkers inzicht te geven zonder dat data in HR-processen belandt.</p>
            </article>
          </div>
          
          <article style={{ marginBottom: 'var(--spacing-lg)' }}>
            <h3>Audit-ready uitgangspunt</h3>
            <p>Deterministische rekenkern en transparante aannames. Eventuele uitleg verwijst uitsluitend naar meetbare modeloutput (geen 'advies').</p>
          </article>

          <div style={{ background: 'var(--color-bg)', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', marginBottom: 'var(--spacing-lg)' }}>
            <h3 style={{ marginTop: 0 }}>Pilot (4–6 weken)</h3>
            <ul style={{ marginBottom: 0 }}>
              <li>Snelle start met een kleine groep medewerkers</li>
              <li>Minimale HR-belasting (alleen communicatie + opt-in)</li>
              <li>Evaluatie op adoptie, begrip en product-fit (kwalitatief, zonder HR-data)</li>
            </ul>
          </div>

          <div style={{ textAlign: 'center' }}>
            <a href="mailto:hello@finnsight.nl?subject=Pilotinformatie%20Finnsight" className="btn btn-primary">Vraag pilotinformatie aan</a>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-sm)', marginBottom: 0 }}>
              Finnsight geeft inzicht en scenario-impact; geen financieel advies.
            </p>
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
            <li>❌ Garandeert dat prognoses zullen uitkomen (ze zijn illustratief)</li>
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
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span style={{ color: '#6b7280' }}>|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
          <span style={{ color: '#6b7280' }}>|</span>
          <Link to="/privacy">Privacy en voorwaarden</Link>
        </nav>
        <p style={{ marginTop: 'var(--spacing-md)', marginBottom: 0 }}>&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
