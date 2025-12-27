import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function PrivacyTermsPage({ onNavigate }) {

  return (
    <>
      <Helmet>
        <title>Privacy en voorwaarden — Finnsight</title>
        <meta name="description" content="Hoe Finnsight omgaat met privacy, opslag en gebruiksvoorwaarden." />
      </Helmet>
      <Header />

      <main className="content" id="main-content">
        <h1>Privacy en voorwaarden</h1>
        <p className="lead">Kernsamenvatting van hoe wij met je gegevens en gebruik omgaan. Volledige privacy- en gebruiksvoorwaarden kunnen op verzoek beschikbaar worden gesteld.</p>

        <section>
          <h2>Privacy</h2>
          <ul>
            <li>Geen account nodig; we slaan via deze website geen ingevulde intakegegevens op.</li>
            <li>Geen tracking cookies en geen third-party analytics.</li>
            <li>Werkgevers ontvangen nooit financiële data—niet individueel en niet als financiële aggregaten. Hooguit zien zij operationele voortgang (bijv. aantallen deelnemers/voltooiingen), zonder financiële inhoud.</li>
            <li>Mail je ons via <a href="mailto:hello@finnsight.nl">hello@finnsight.nl</a>, dan bewaren we je e-mail alleen om te kunnen antwoorden.</li>
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
        <img src="/brand/mark-on-dark.svg" alt="Finnsight" className="footer-mark" />
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
