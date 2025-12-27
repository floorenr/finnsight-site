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
        <p className="lead">Transparant uitgelegd: hoe Finnsight rekent, wat we wel/niet doen, en hoe privacy is geborgd.</p>

        <section>
          <h2>1. Deterministische kern vs. AI-uitleg</h2>
          <p>
            Finnsight rekent met <strong>deterministische logica</strong>: dezelfde input geeft altijd dezelfde uitkomst. Daardoor kun je de uitkomst stap voor stap volgen en narekenen.
            Dit betekent:
          </p>
          <ul>
            <li>Geen willekeur, geen kansberekening, geen "best guess"</li>
            <li>Elk getal kan je terugvoeren naar jouw feiten en de regels</li>
            <li>AI wordt <strong>nooit</strong> gebruikt in berekeningen zelf</li>
          </ul>
          <p>Kort gezegd: dezelfde gegevens geven altijd dezelfde uitkomst—je kunt het narekenen.</p>
        </section>

        <section>
          <h2>2. Geen AI in jouw financiële berekeningen</h2>
          <p>
            De bedragen en grafieken (bijv. besteedbaar inkomen, hypotheeklasten en aflossing (scenario’s), pensioen, belasting) komen uit <strong>deterministische code</strong> — niet uit AI.
          </p>
          <p>
            <strong>Wat we wel kunnen doen (later):</strong> AI gebruiken om je output uit te leggen in jouw taal — maar altijd <em>over</em> feiten, nooit <em>in plaats van</em> feiten. Als AI-uitleg wordt toegevoegd, vat die uitsluitend bestaande rekenuitkomsten samen; er worden geen nieuwe bedragen gegenereerd.
          </p>
        </section>

        <section>
          <h2>3. Geen persoonlijk advies</h2>
          <p>
            Finnsight helpt je begrijpen wat cijfers betekenen in verschillende scenario’s, zonder te zeggen wat je ‘moet’ doen.
          </p>
          <ul>
            <li>Wat je ongeveer beschikbaar hebt in verschillende scenario’s</li>
            <li>Welke aannames het verschil maken (bijv. rente, woonlasten, pensioenleeftijd)</li>
            <li>Hoe regels rond belasting, pensioen en hypotheek doorwerken in je uitkomst</li>
          </ul>
          <p><strong>Jij neemt de beslissingen.</strong> Finnsight geeft inzicht.</p>
        </section>

        <section>
          <h2>4. Privacy by Design</h2>
          <p>
            <strong>Werkgevers ontvangen nooit financiële data—niet individueel en niet als financiële aggregaten. Hooguit zien zij operationele voortgang (bijv. aantallen deelnemers/voltooiingen), zonder financiële inhoud.</strong> Finnsight werkt volledig employee-first. Kort: HR ziet voortgang, geen financiële inhoud.
          </p>
          <ul>
            <li>Jij bent eigenaar van je gegevens</li>
            <li>Hooguit zien zij operationele voortgang (bijv. aantallen deelnemers/voltooiingen), zonder financiële inhoud</li>
            <li>Geen individuele data, geen gedrag, geen financieel beeld, geen aggregaten</li>
          </ul>
        </section>

        <section>
          <h2>5. AFM-grenzen (financiële regelgeving)</h2>
          <p>
            Finnsight werkt binnen de grenzen van de AFM (Autoriteit Financiële Markten):
          </p>
          <ul>
            <li>We vertellen wat feiten betekenen, <strong>niet wat je moet doen</strong></li>
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
            Finnsight bestaat omdat medewerkers meer rust nodig hebben. Dat verdienen ze.
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
