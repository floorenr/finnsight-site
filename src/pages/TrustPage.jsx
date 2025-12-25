import { useState } from 'react'

export default function TrustPage({ onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('landing'); }} aria-label="Ga naar startpagina">Finnsight</a>
          <button 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Menu"
          >
            {mobileMenuOpen ? '×' : '☰'}
          </button>
          <ul className={mobileMenuOpen ? 'nav-open' : ''}>
            <li><a href="#" onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); onNavigate('landing'); }}>← Terug naar start</a></li>
            <li><a href="mailto:hello@finnsight.nl" className="cta-nav">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="content" id="main-content">
        <h1>Vertrouwen & Compliance</h1>
        <p className="lead">Hoe Finnsight werkt en waarop je kunt vertrouwen.</p>

        <section>
          <h2>1. Deterministische kern vs. AI-uitleg</h2>
          <p>
            Finnsight berekent jouw financiële beeld met <strong>deterministische logica</strong> (dezelfde inputs, dezelfde uitkomsten, altijd).
            Dit betekent:
          </p>
          <ul>
            <li>Geen willekeur, geen kansberekening, geen "best guess"</li>
            <li>Elk getal kan je terugvoeren naar jouw feiten en de regels</li>
            <li>AI wordt <strong>nooit</strong> gebruikt in berekeningen zelf</li>
          </ul>
        </section>

        <section>
          <h2>2. Geen AI in jouw financiële berekeningen</h2>
          <p>
            Alle kern-output (je beschikbare inkomens, hypotheek-aflosstrategie, pensioen, belasting) komt uit <strong>deterministische code</strong>, niet uit taalmodellen of machine learning.
          </p>
          <p>
            <strong>Wat we wel kunnen doen (later):</strong> AI gebruiken om je output uit te leggen in jouw taal — maar altijd <em>over</em> feiten, nooit <em>in plaats van</em> feiten.
          </p>
        </section>

        <section>
          <h2>3. Geen persoonlijk advies</h2>
          <p>
            Finnsight geeft <strong>geen financieel advies</strong>. We tonen:
          </p>
          <ul>
            <li>Wat je beschikbaar hebt (in verschillende scenario's)</li>
            <li>Hoe verschillende keuzes impact hebben</li>
            <li>Wat de regels (belasting, pensioen, hypotheek) betekenen voor jou</li>
          </ul>
          <p><strong>Jij neemt de beslissingen.</strong> Finnsight geeft je inzicht.</p>
        </section>

        <section>
          <h2>4. Privacy by Design</h2>
          <p>
            <strong>Jouw werkgever ziet nooit individuele gegevens</strong> — alleen geaggregeerde inzichten onder strikte drempels (bijvoorbeeld: gemiddelde behoeften per leeftijdsgroep, maar pas na 10+ deelnemers).
          </p>
          <ul>
            <li>Jij bent eigenaar van je gegevens</li>
            <li>Finnsight is employee-first</li>
            <li>Werkgevers zien alleen: "X medewerkers hebben intake voltooid" (voor monitoring)</li>
            <li>Geen individuele data, geen gedrag, geen financieel beeld</li>
          </ul>
        </section>

        <section>
          <h2>5. AFM-grenzen (financiële regelgeving)</h2>
          <p>
            Finnsight werkt binnen de grenzen van de AFM (Autoriteit Financiële Markten):
          </p>
          <ul>
            <li><strong>Geen advies:</strong> We vertellen wat feiten betekenen, niet wat je moet doen</li>
            <li><strong>Geen rendementsverwachtingen:</strong> We gissen niet over je beleggingen</li>
            <li><strong>Transparante aannames:</strong> Je ziet altijd welke regels we gebruiken</li>
          </ul>
          <p>
            Vragen over compliance? <a href="mailto:hello@finnsight.nl">Neem contact op</a>.
          </p>
        </section>

        <section>
          <h2>6. Wat we meten (en hoe we privacy beschermen)</h2>
          <p>
            Als analytics worden ingeschakeld, meten we:
          </p>
          <ul>
            <li>✅ Hoeveel mensen de intakepagina bezoeken</li>
            <li>✅ Hoe veel stappen ze compleet maken</li>
            <li>✅ Of het dashboard nuttig is (bezoekfrequentie)</li>
            <li>❌ We meten NOOIT: jouw inkomens, je onderliggende financiën, je gedrag per persoon</li>
          </ul>
          <p>
            <strong>Privacy-respectful analytics:</strong> We gebruiken tools als Plausible of Fathom (geen cookies, geen tracking).
          </p>
        </section>

        <section className="highlight">
          <h2>7. Samen vertrouwen opbouwen</h2>
          <p>
            Finnsight bestaat omdat werknemers meer rust nodig hebben. Dat verdienen ze.
          </p>
          <p>
            We bouwen dit samen met werkgevers die hetzelfde geloven.
          </p>
        </section>
      </main>

      <footer className="footer">
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>Terug naar start</a>
          <span style={{ color: '#6b7280' }}>|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
        </nav>
        <p style={{ marginTop: 'var(--spacing-md)', marginBottom: 0 }}>&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
