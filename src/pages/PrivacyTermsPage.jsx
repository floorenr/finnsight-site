import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton/CTAButton';

export default function PrivacyTermsPage({ onNavigate: _onNavigate }) {
  const seo = PAGE_SEO.privacy;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
      />
      <Header />

      <main className="content" id="main-content">
        <h1>Privacy en voorwaarden</h1>
        <p className="lead">
          Kernsamenvatting van hoe wij met je gegevens en gebruik omgaan. Volledige privacy- en
          gebruiksvoorwaarden kunnen op verzoek beschikbaar worden gesteld.
        </p>

        <section>
          <h2>Privacy</h2>
          <ul>
            <li>Geen account nodig; we slaan via deze website geen ingevulde intakegegevens op.</li>
            <li>Geen tracking cookies en geen third-party analytics.</li>
            <li>
              Werkgevers ontvangen nooit financiële data—niet individueel en niet als financiële
              aggregaten. Hooguit zien zij operationele voortgang (bijv. aantallen
              deelnemers/voltooiingen), zonder financiële inhoud.
            </li>
            <li>
              Mail je ons via hello@finnsight.nl, dan bewaren we je e-mail alleen om te kunnen
              antwoorden.
            </li>
          </ul>
        </section>

        <section>
          <h2>Pilotformulier</h2>
          <p>Via het pilotaanvraagformulier op deze website verzamelen we de volgende gegevens:</p>
          <ul>
            <li>
              <strong>Welke gegevens:</strong> naam, rol, organisatie (optioneel), e-mailadres
            </li>
            <li>
              <strong>Doel:</strong> uitsluitend om contact met je op te nemen over deelname aan de
              Finnsight pilot
            </li>
            <li>
              <strong>Opslag:</strong> gegevens worden opgeslagen in een beveiligde omgeving (geen
              gedeelde toegang met derden)
            </li>
            <li>
              <strong>Bewaartermijn:</strong> gegevens worden verwijderd zodra de pilotfase is
              afgerond of op jouw verzoek eerder
            </li>
            <li>
              <strong>Verwijdering:</strong> stuur een e-mail naar hello@finnsight.nl om je gegevens
              te laten verwijderen
            </li>
          </ul>
          <p>
            <strong>Let op:</strong> dit formulier is geen financieel intakeformulier. We verzamelen
            geen financiële gegevens via dit formulier.
          </p>
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
          <p>
            Vragen of verzoeken? Neem contact met ons op via hello@finnsight.nl of{' '}
            <CTAButton variant="text">vul het contactformulier in</CTAButton>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <img src="/brand/mark-on-dark.svg" alt="" className="footer-mark" aria-hidden="true" />
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Start</Link>
          <span className="divider-muted">|</span>
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span className="divider-muted">|</span>
          <CTAButton variant="text" className="footer-cta-link">
            Contact
          </CTAButton>
        </nav>
        <p className="footer-note">&copy; 2025 Finnsight</p>
      </footer>
    </>
  );
}
