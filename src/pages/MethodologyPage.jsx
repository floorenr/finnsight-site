import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Header from '../components/Header';
import CTAButton from '../components/CTAButton/CTAButton';

export default function MethodologyPage({ onNavigate: _onNavigate }) {
  const seo = PAGE_SEO.methodology;

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
        <h1>Methodologie</h1>
        <p className="lead">
          Hoe Finnsight rekent: een transparante toelichting op onze aannames, bronnen en
          rekenstappen. Finnsight geeft inzicht — geen financieel advies.
        </p>

        <section>
          <h2>1. Overzicht van de aanpak</h2>
          <p>
            Finnsight gebruikt een <strong>deterministisch rekenmodel</strong>: dezelfde invoer
            geeft altijd dezelfde uitkomst. Er is geen willekeur, geen kansberekening en geen
            machine-learning in de kernberekeningen. Alle uitkomsten zijn stap voor stap herleidbaar
            tot de invoergegevens en de toegepaste rekenregels.
          </p>
          <p>
            De berekeningen zijn gebaseerd op <strong>vastgelegde rekenregels</strong> (bijv.
            belastingtarieven, pensioenformules, hypotheeknormen) en de gegevens die de gebruiker
            zelf invoert. Finnsight trekt geen conclusies over wat een gebruiker &lsquo;zou moeten
            doen&rsquo;.
          </p>
          <p>
            De rekenregels en aannames zijn vastgelegd als onderdeel van de methodologie;
            wijzigingen worden bijgehouden. Elke uitkomst is volledig{' '}
            <strong>traceerbaar en auditeerbaar</strong>: van invoer via de toegepaste regels tot
            eindresultaat.
          </p>
        </section>

        <section>
          <h2>2. Belastinglogica</h2>
          <p>
            <strong>Huidige aanpak:</strong> Finnsight past de Nederlandse inkomstenbelasting toe op
            basis van de geldende schijftarieven en heffingskortingen zoals deze door de
            Belastingdienst zijn gepubliceerd. De gehanteerde tarieven zijn een momentopname en
            worden niet automatisch bijgewerkt bij wetswijzigingen.
          </p>
          <ul>
            <li>Box 1-inkomen: progressieve tarieven (twee schijven)</li>
            <li>
              Algemene heffingskorting en arbeidskorting: forfaitaire bedragen op basis van inkomen
            </li>
            <li>Loonheffing: netto inkomen wordt geschat op basis van bruto invoer</li>
          </ul>
          <p>
            <em>
              Finnsight geeft een indicatief netto bedrag. Voor een exacte belastingberekening
              verwijzen we naar de Belastingdienst of een belastingadviseur.
            </em>
          </p>
        </section>

        <section>
          <h2>3. Pensioen: aannames en begrenzing</h2>
          <p>
            <strong>Huidige aanpak:</strong> Pensioenberekeningen zijn gebaseerd op gebruikersinvoer
            (bijv. huidige pensioenopbouw, verwachte pensioenleeftijd) en standaard aannames voor
            opbouwpercentages en indexatie. Deze aannames zijn <strong>illustratief</strong> en geen
            garantie voor toekomstige uitkeringen.
          </p>
          <ul>
            <li>
              Pensioenleeftijd: standaard AOW-leeftijd als uitgangspunt; aanpasbaar door de
              gebruiker
            </li>
            <li>
              Opbouw: gebaseerd op opgegeven werkgeversregeling of standaard middelloonformule
            </li>
            <li>
              Indexatie: geen rendementsverwachting; Finnsight raadt geen beleggingsstrategie aan
            </li>
          </ul>
          <p>
            <em>
              Finnsight doet geen uitspraken over verwacht beleggingsrendement of
              pensioenvermogensontwikkeling.
            </em>
          </p>
        </section>

        <section>
          <h2>4. Hypotheekberekeningen</h2>
          <p>
            <strong>Huidige aanpak:</strong> Hypotheeklasten worden berekend op basis van annuïtaire
            of lineaire aflossingssystematiek, met de door de gebruiker opgegeven rente en looptijd.
            De berekening toont maandlasten en restschuld in scenario's.
          </p>
          <ul>
            <li>Aflossingsvormen: annuïtair of lineair (door gebruiker te kiezen)</li>
            <li>Rente: opgegeven door gebruiker; geen marktrente-voorspelling</li>
            <li>Hypotheekrenteaftrek: indicatief meegenomen op basis van Box 1-tarief</li>
          </ul>
          <p>
            <em>
              Finnsight adviseert niet over hypotheekkeuze, rentevorm of looptijd. De uitkomsten
              zijn scenario-indicaties.
            </em>
          </p>
        </section>

        <section>
          <h2>5. Besteedbaar inkomen</h2>
          <p>
            <strong>Huidige aanpak:</strong> Besteedbaar inkomen wordt berekend als netto inkomen
            minus vaste lasten (bijv. woonlasten, pensioeninhoudingen) op basis van de door de
            gebruiker opgegeven gegevens. Dit geeft een indicatief beeld van de maandelijkse
            financiële ruimte.
          </p>
          <ul>
            <li>Inkomsten: netto salaris na belasting en heffingskortingen</li>
            <li>Vaste lasten: opgegeven door gebruiker (woonlasten, pensioen, overig)</li>
            <li>Uitkomst: indicatief maandbedrag; geen rekening met variabele uitgaven</li>
          </ul>
        </section>

        <section>
          <h2>6. Databronnen</h2>
          <p>
            Finnsight gebruikt de volgende bronnen als basis voor rekenregels (
            <strong>huidige aanpak</strong>; bronnen kunnen worden bijgewerkt):
          </p>
          <ul>
            <li>Belastingtarieven: gepubliceerde tarieven van de Nederlandse Belastingdienst</li>
            <li>AOW-leeftijd: Rijksoverheid / SVB (Sociale Verzekeringsbank)</li>
            <li>Hypotheeknormering: indicatieve NHG-normen en NIBUD-richtlijnen als referentie</li>
            <li>
              Pensioenregels: Pensioenwet als kader; specifieke regelingen op basis van
              gebruikersinvoer
            </li>
          </ul>
          <p>
            <em>
              Finnsight claimt geen officiële certificering door of samenwerking met bovengenoemde
              instanties. De bronnen worden gebruikt als publiek beschikbaar referentiekader.
            </em>
          </p>
        </section>

        <section>
          <h2>7. Wat Finnsight niet doet</h2>
          <ul>
            <li>
              <strong>Geen financieel advies:</strong> Finnsight adviseert niet over welke keuze je
              moet maken met je geld, pensioen of hypotheek.
            </li>
            <li>
              <strong>Geen rendementsverwachtingen:</strong> We doen geen uitspraken over
              beleggingsrendement, koersgroei of vermogensontwikkeling.
            </li>
            <li>
              <strong>Geen garanties:</strong> Uitkomsten zijn illustratief en gebaseerd op
              aannames; werkelijke bedragen kunnen afwijken.
            </li>
            <li>
              <strong>Geen AI in berekeningen:</strong> Machine-learning of generatieve AI wordt
              niet ingezet in de kernberekeningen.
            </li>
            <li>
              <strong>Geen externe data-opvraging:</strong> Finnsight haalt geen financiële gegevens
              op bij banken, pensioenfondsen of overheidsregisters.
            </li>
          </ul>
        </section>

        <section>
          <h2>8. Geen financieel advies</h2>
          <p>
            De uitkomsten van Finnsight zijn{' '}
            <strong>uitsluitend informatief en illustratief</strong>. Niets op dit platform is
            bedoeld als financieel advies, beleggingsadvies of pensioenadvies in de zin van de Wet
            op het financieel toezicht (Wft) of enige andere wet- of regelgeving.
          </p>
          <p>
            Finnsight helpt je begrijpen wat cijfers betekenen — jij neemt de beslissingen. Voor
            persoonlijk financieel advies raden wij je aan een gecertificeerd financieel adviseur te
            raadplegen.
          </p>
          <p>
            Meer over de governance van ons platform: zie <Link to="/compliance">Compliance</Link>{' '}
            en <Link to="/trust">Vertrouwen & Compliance</Link>.
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
