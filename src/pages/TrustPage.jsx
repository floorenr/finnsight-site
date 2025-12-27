import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function TrustPage({ onNavigate }) {

  return (
    <>
      <Helmet>
        <title>Vertrouwen & Compliance — Finnsight</title>
        <meta name="description" content="Hoe Finnsight deterministisch rekent, privacy bewaakt en binnen AFM-kaders blijft." />
      </Helmet>
      <Header />

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
            <strong>Werkgevers ontvangen nooit financiële data (individueel of geaggregeerd).</strong> Finnsight werkt volledig employee-first.
          </p>
          <ul>
            <li>Jij bent eigenaar van je gegevens</li>
            <li>Hooguit operationele voortgang (bijvoorbeeld: aantal deelnemers dat intake heeft voltooid) — geen financiële inhoud</li>
            <li>Geen individuele data, geen gedrag, geen financieel beeld, geen aggregaten</li>
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

        <section className="highlight">
          <h2>6. Samen vertrouwen opbouwen</h2>
          <p>
            Finnsight bestaat omdat werknemers meer rust nodig hebben. Dat verdienen ze.
          </p>
          <p>
            We bouwen dit samen met werkgevers die hetzelfde geloven.
          </p>
        </section>
      </main>

      <footer className="footer">
        <img src="/brand/mark-on-dark.svg" alt="Finnsight" className="footer-mark" />
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Terug naar start</Link>
          <span className="divider-muted">|</span>
          <Link to="/privacy">Privacy en voorwaarden</Link>
          <span className="divider-muted">|</span>
          <a href="mailto:hello@finnsight.nl">Contact</a>
        </nav>
        <p className="footer-note">&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
