import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton/CTAButton';

export default function CompliancePage({ onNavigate: _onNavigate }) {
  const seo = PAGE_SEO.compliance;

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
        <h1>Compliance</h1>
        <p className="lead">
          Hoe Finnsight is ingericht ten aanzien van AFM-grenzen, AVG, werkgeversprivacy en
          gegevensbescherming. Waar formele juridische toetsing nog niet is afgerond, is dit
          expliciet als zodanig vermeld.
        </p>

        <section>
          <h2>1. Deterministische engine vs. uitleglaag</h2>
          <p>
            De kern van Finnsight is een <strong>deterministische rekenengine</strong>: alle
            berekeningen (belasting, pensioen, hypotheek, besteedbaar inkomen) worden uitgevoerd
            door vaste, herleidbare code. Dezelfde invoer levert altijd dezelfde uitkomst op.
          </p>
          <p>
            <strong>Geen generatieve AI in de kernberekeningen.</strong> Machine-learning of
            generatieve AI-modellen worden niet ingezet voor het produceren van financiële
            uitkomsten. De uitleglaag (toelichting op uitkomsten in begrijpelijke taal) kan in een
            latere fase gebruik maken van AI, maar uitsluitend{' '}
            <em>ter samenvatting van reeds berekende feiten</em> — nooit ter vervanging van de
            rekenlogica.
          </p>
          <p>
            Dit onderscheid is fundamenteel voor het complianceprofiel van het platform: de
            uitkomst is auditeerbaar en reproduceerbaar.
          </p>
        </section>

        <section>
          <h2>2. AFM-grens als ontwerpintentie</h2>
          <p>
            <strong>Ontwerpintentie (nog niet formeel getoetst door de AFM):</strong> Finnsight is
            ontworpen om buiten de vergunningsplicht voor financieel advies te blijven zoals
            bedoeld in de Wet op het financieel toezicht (Wft).
          </p>
          <ul>
            <li>
              Finnsight geeft <strong>geen beleggingsadvies, pensioenadvies of hypotheekadvies</strong>{' '}
              in de zin van de Wft.
            </li>
            <li>
              Het platform rekent scenario&rsquo;s door op basis van door de gebruiker opgegeven
              gegevens en publiek beschikbare rekenregels.
            </li>
            <li>
              Finnsight doet <strong>geen aanbevelingen</strong> over financiële producten,
              instellingen of handelingen.
            </li>
            <li>
              De uitkomsten zijn informatief en illustratief; de gebruiker behoudt altijd
              zelfstandig de beslissingsvrijheid.
            </li>
          </ul>
          <p>
            <em>
              Formele juridische classificatie door of afstemming met de AFM heeft op dit moment
              nog niet plaatsgevonden. De bovenstaande positionering is de huidige ontwerpintentie
              en is onderwerp van lopende juridische beoordeling.
            </em>
          </p>
        </section>

        <section>
          <h2>3. AVG / verwerkerrol</h2>
          <p>
            <strong>Huidige aanpak (subject to legal review):</strong> In de pilotopzet treedt
            Finnsight op als <strong>verwerker</strong> in de zin van de Algemene Verordening
            Gegevensbescherming (AVG / GDPR), waarbij de werkgever de verwerkingsverantwoordelijke
            is voor de inzet van het platform binnen de arbeidsrelatie.
          </p>
          <ul>
            <li>
              Persoonsgegevens worden verwerkt op basis van de doelen en instructies van de
              verwerkingsverantwoordelijke (werkgever/pilotpartner).
            </li>
            <li>
              Finnsight verwerkt alleen de gegevens die noodzakelijk zijn voor de werking van het
              platform (dataminimalisatie).
            </li>
            <li>
              Gegevens worden niet gedeeld met derden buiten de verwerkingsketen die noodzakelijk
              is voor de dienstverlening.
            </li>
            <li>
              Gebruikers kunnen verzoeken tot inzage, correctie en verwijdering van hun gegevens
              richten aan hello@finnsight.nl.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Privacy en dataminimalisatie</h2>
          <p>
            Finnsight hanteert een <strong>privacy-by-design</strong> aanpak:
          </p>
          <ul>
            <li>Alleen gegevens die strikt noodzakelijk zijn voor de berekening worden verwerkt.</li>
            <li>
              Geen opslag van financiële invoergegevens op de publieke website; rekenuitkomsten
              worden client-side gegenereerd waar mogelijk.
            </li>
            <li>Geen tracking cookies of third-party analytics op het publieke platform.</li>
            <li>
              Werknemersgegevens worden niet gebruikt voor profilering, scoring of commerciële
              doeleinden buiten de dienstverlening.
            </li>
          </ul>
          <p>
            Voor een volledig overzicht van de privacyaanpak, zie{' '}
            <Link to="/privacy">Privacy en voorwaarden</Link>.
          </p>
        </section>

        <section>
          <h2>5. Werkgever-aggregatiedrempel en medewerkersbescherming</h2>
          <p>
            Werkgevers ontvangen <strong>nooit financiële data</strong> op individueel niveau.
            Operationele voortgangsrapportage (bijv. aantallen deelnemers, voltooiingspercentages)
            wordt alleen gedeeld wanneer de groepsomvang boven een{' '}
            <strong>minimumdrempel van 15 deelnemers</strong> uitkomt.
          </p>
          <ul>
            <li>
              <strong>Drempelregel:</strong> cohortrapportage wordt niet gegenereerd voor groepen
              kleiner dan 15 deelnemers, om herleidbaarheid naar individuen te voorkomen.
            </li>
            <li>
              Financiële gegevens (bedragen, scenario-uitkomsten, inkomensgegevens) worden nooit
              in werkgeversrapportages opgenomen — ook niet geaggregeerd.
            </li>
            <li>
              Werkgevers zien uitsluitend operationele metrics (deelname, voltooiing) zonder
              financiële inhoud.
            </li>
          </ul>
          <p>
            <em>
              De technische implementatie van deze drempelregel is onderdeel van het
              privacyontwerp en wordt gedocumenteerd in de verwerkersovereenkomst.
            </em>
          </p>
        </section>

        <section>
          <h2>6. Verwerkersovereenkomst (DPA)</h2>
          <p>
            Voor pilotpartners stelt Finnsight een{' '}
            <strong>verwerkersovereenkomst (Data Processing Agreement, DPA)</strong> beschikbaar.
          </p>
          <p>
            <strong>Huidige status:</strong> De DPA is beschikbaar als concept/template en is
            onderwerp van lopende juridische beoordeling. De definitieve versie wordt voor de
            start van een productie-pilot ter ondertekening aangeboden.
          </p>
          <ul>
            <li>Scope: verwerking van persoonsgegevens in het kader van de Finnsight-dienst</li>
            <li>
              Inhoud: verplichtingen van Finnsight als verwerker, rechten van de
              verwerkingsverantwoordelijke, beveiligingsmaatregelen en bewaartermijnen
            </li>
            <li>
              Verzoek DPA-concept: neem contact op via hello@finnsight.nl
            </li>
          </ul>
          <p>
            <em>
              Juridische review van de DPA is nog niet volledig afgerond. De inhoud is gebaseerd op
              standaard AVG-verwerkersvereisten en kan worden aangepast op basis van de specifieke
              pilotcontext.
            </em>
          </p>
        </section>

        <section className="highlight">
          <h2>7. Vragen over compliance</h2>
          <p>
            Heb je vragen over onze complianceaanpak, de DPA of de AFM-positionering? Neem contact
            op via{' '}
            <CTAButton variant="text">hello@finnsight.nl</CTAButton> of zie{' '}
            <Link to="/methodology">Methodologie</Link> voor een toelichting op de rekenlogica.
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
          <Link to="/methodology">Methodologie</Link>
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
