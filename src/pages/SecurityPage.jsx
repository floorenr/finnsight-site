import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton/CTAButton';

export default function SecurityPage({ onNavigate: _onNavigate }) {
  const seo = PAGE_SEO.security;

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
        <h1>Beveiliging</h1>
        <p className="lead">
          Een evidence-honest overzicht van hoe Finnsight omgaat met transportbeveiliging,
          gegevensbescherming, toegangsbeheer en responsible disclosure. Waar formele verificatie
          of certificering nog niet is afgerond, is dit expliciet vermeld.
        </p>

        <section>
          <h2>1. Transportbeveiliging</h2>
          <p>
            <strong>Huidige aanpak:</strong> Alle communicatie tussen gebruikers en de
            Finnsight-website verloopt via HTTPS. TLS-encryptie is afgedwongen via de
            hostinginfrastructuur (Vercel).
          </p>
          <ul>
            <li>HTTPS afgedwongen voor alle pagina-aanvragen</li>
            <li>
              HTTP Strict Transport Security (HSTS) ingesteld via{' '}
              <code>vercel.json</code> beveiligingsheaders
            </li>
            <li>
              Aanvullende beveiligingsheaders actief: <code>X-Frame-Options</code>,{' '}
              <code>X-Content-Type-Options</code>, <code>Referrer-Policy</code>
            </li>
          </ul>
          <p>
            <em>
              Headerimplementatie is geconfigureerd in <code>vercel.json</code>; actieve werking in
              productie dient periodiek geverifieerd te worden.
            </em>
          </p>
        </section>

        <section>
          <h2>2. Gegevensbescherming en -retentie</h2>
          <p>
            <strong>Huidige aanpak:</strong> Finnsight hanteert dataminimalisatie als
            uitgangspunt. De publieke website slaat geen financiële invoergegevens op; berekeningen
            worden client-side uitgevoerd waar mogelijk.
          </p>
          <ul>
            <li>Geen tracking cookies of third-party analytics op het publieke platform</li>
            <li>
              Financiële invoergegevens worden niet blijvend opgeslagen op de publieke website
            </li>
            <li>
              Gegevens die in de pilotomgeving worden verwerkt, vallen onder de
              verwerkersovereenkomst (DPA) met de pilotpartner
            </li>
            <li>
              Bewaartermijnen worden vastgelegd in de DPA; standaard: zo kort als functioneel
              noodzakelijk
            </li>
          </ul>
          <p>
            Voor meer details over privacyaanpak en AVG-rol, zie{' '}
            <Link to="/privacy">Privacy en voorwaarden</Link> en{' '}
            <Link to="/compliance">Compliance</Link>.
          </p>
        </section>

        <section>
          <h2>3. Toegangsbeheer en authenticatie</h2>
          <p>
            <strong>Huidige aanpak (pilotfase):</strong> Toegang tot de pilotomgeving is beperkt
            en gecontroleerd. Authenticatie en autorisatie worden ingericht op basis van de
            pilotafspraken met de werkgever/pilotpartner.
          </p>
          <ul>
            <li>
              Publieke website: geen gebruikersaccounts of persoonlijke logins vereist
            </li>
            <li>
              Pilotomgeving: toegang beperkt tot deelnemende medewerkers en bevoegde
              werkgeverscontacten
            </li>
            <li>
              Interne systemen: toegang beperkt op basis van need-to-know; beheerd via
              rolgebaseerde rechten
            </li>
          </ul>
          <p>
            <em>
              Formele toegangsbeheeraudit is gepland als onderdeel van het compliance-traject vóór
              productielancering (target; nog niet geverifieerd).
            </em>
          </p>
        </section>

        <section>
          <h2>4. Infrastructuur en deployment</h2>
          <p>
            <strong>Huidige aanpak:</strong> De Finnsight-website wordt gehost op Vercel.
            Deployments worden gecontroleerd via GitHub Actions (CI/CD pipeline met lint-,
            test- en buildchecks).
          </p>
          <ul>
            <li>Productiedeployments uitsluitend via gecontroleerde CI/CD-pipeline</li>
            <li>
              Preview-deployments beschikbaar voor pull requests; geen productiedata in
              preview-omgeving
            </li>
            <li>Beveiligingsheaders actief in productieomgeving via <code>vercel.json</code></li>
            <li>
              Afhankelijkheden worden regelmatig gereviewd; geen bekende kritieke kwetsbaarheden
              op moment van publicatie
            </li>
          </ul>
          <p>
            <em>
              Penetratietest is gepland vóór productielancering (target; nog niet uitgevoerd).
              SOC 2 Type II-certificering is een roadmapdoel (target Q3 2026; niet geverifieerd).
            </em>
          </p>
        </section>

        <section>
          <h2>5. Responsible disclosure</h2>
          <p>
            Finnsight neemt beveiligingsproblemen serieus. Als je een kwetsbaarheid of
            beveiligingsrisico ontdekt in onze dienst of website, verzoeken wij je dit
            verantwoord te melden.
          </p>
          <ul>
            <li>
              Meld beveiligingsproblemen via e-mail naar{' '}
              <a href="mailto:security@finnsight.nl">security@finnsight.nl</a>
            </li>
            <li>
              Geef een duidelijke beschrijving van het probleem, inclusief stappen om het te
              reproduceren
            </li>
            <li>
              Wij streven ernaar binnen 5 werkdagen te reageren en het probleem zorgvuldig te
              beoordelen
            </li>
            <li>
              Wij verzoeken je geen misbruik te maken van de kwetsbaarheid en deze niet
              openbaar te maken totdat wij een oplossing hebben kunnen implementeren
            </li>
          </ul>
          <p>
            <em>
              Het e-mailadres <strong>security@finnsight.nl</strong> is het beoogde
              responsible disclosure-kanaal. Mocht dit adres tijdelijk niet bereikbaar zijn,
              gebruik dan <a href="mailto:hello@finnsight.nl">hello@finnsight.nl</a> met
              als onderwerp "Security disclosure".
            </em>
          </p>
          <p>
            Een machine-leesbaar overzicht is beschikbaar via{' '}
            <a href="/.well-known/security.txt">/.well-known/security.txt</a>.
          </p>
        </section>

        <section className="highlight">
          <h2>6. Vragen over beveiliging</h2>
          <p>
            Heb je vragen over onze beveiligingsaanpak? Neem contact op via{' '}
            <CTAButton variant="text">hello@finnsight.nl</CTAButton> of bekijk onze{' '}
            <Link to="/compliance">Compliance</Link>-pagina voor de AVG- en AFM-aanpak.
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
          <Link to="/compliance">Compliance</Link>
          <span className="divider-muted">|</span>
          <Link to="/privacy">Privacy en voorwaarden</Link>
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
