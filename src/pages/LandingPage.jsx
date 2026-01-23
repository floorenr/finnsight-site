import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { PAGE_SEO } from '../utils/seo';
import Header from '../components/Header';
import ScrollProgress from '../components/ScrollProgress';
import ExplainerVideo from '../components/ExplainerVideo';
import CTAButton from '../components/CTAButton/CTAButton';
import { initializeGlobalObserver } from '../hooks/useIntersectionObserver';

export default function LandingPage({ onNavigate }) {
  useEffect(() => {
    const observer = initializeGlobalObserver();
    return () => observer?.disconnect();
  }, []);

  const seo = PAGE_SEO.landing;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
      />
      <ScrollProgress />
      <Header />

      <main id="main-content">
        {/* Section 1: What is Finnsight */}
        <section id="what" className="section hero scroll-target is-visible">
          <h1>Inzicht in jouw financiële toekomst</h1>
          <p className="lead">
            Finnsight geeft Nederlandse medewerkers een helder overzicht van hun besteedbaar
            inkomen, woonlasten en pensioen.
          </p>
          <p className="subtext">Transparante berekeningen en scenario's, jij beslist.</p>
          <div className="mt-xl">
            <CTAButton variant="primaryLarge">Vraag pilotinformatie aan</CTAButton>
          </div>
        </section>

        {/* Section 2: Who it's for */}
        <section className="section">
          <h2>Voor wie is Finnsight?</h2>
          <div className="grid-2">
            <article>
              <h3>Voor medewerkers</h3>
              <p>
                Wil je weten wat je later overhoudt? Finnsight laat zien hoe inkomen, woonlasten,
                belasting en pensioen samenhangen — en wat er verandert als aannames veranderen.
              </p>
            </article>
            <article>
              <h3>Voor werkgevers</h3>
              <p>
                Financiële onzekerheid speelt vaak een grote rol. Finnsight kan medewerkers
                praktisch helpen met overzicht en scenario's — en kan zo bijdragen aan rust en
                focus.
              </p>
            </article>
          </div>
        </section>

        {/* Section 2b: HR Value Proposition */}
        <section className="section highlight">
          <h2>HR-waarde, zonder privacy-compromissen</h2>
          <p className="subtext mb-xl">
            Geef medewerkers één helder overzicht van inkomen, woonlasten en pensioen in scenario's.
            Werkgevers ontvangen nooit financiële data—niet individueel en niet als financiële
            aggregaten. Hooguit zien zij operationele voortgang (bijv. aantallen
            deelnemers/voltooiingen), zonder financiële inhoud.
          </p>

          <div className="grid-2 mb-xl">
            <article>
              <h3>Employee-first ervaring</h3>
              <p>
                Medewerkers krijgen één overzicht (pensioen, hypotheek, vermogen) met scenario's. HR
                hoeft geen individuele dossiers of financiële vragen te beheren.
              </p>
            </article>
            <article>
              <h3>Privacy by design</h3>
              <p>
                Werkgevers ontvangen nooit financiële data. Punt. Hooguit zien zij operationele
                voortgang (bijv. aantallen deelnemers/voltooiingen), zonder financiële inhoud.
              </p>
            </article>
          </div>

          <article className="mb-lg">
            <h3>Audit-ready uitgangspunt</h3>
            <p>
              Transparante aannames en een deterministische rekenkern: dezelfde input geeft dezelfde
              uitkomst. Uitleg verwijst uitsluitend naar deze meetbare uitkomst.
            </p>
          </article>

          <div className="panel mb-lg">
            <h3 className="mt-0">Pilot (4–6 weken)</h3>
            <ul className="mb-0">
              <li>Snelle start met een kleine groep medewerkers</li>
              <li>Minimale HR-belasting (alleen communicatie + opt-in)</li>
              <li>Evaluatie op adoptie, begrip en product-fit (kwalitatief, zonder HR-data)</li>
            </ul>
          </div>

          <div className="text-center">
            <CTAButton variant="primary">Vraag pilotinformatie aan</CTAButton>
            <p className="mt-sm mb-xs">Beschikbaar voor 2–3 nieuwe pilots per maand.</p>
            <p className="mb-sm">
              Pilotfase nu open; bredere uitrol gepland voor 2026 (planning onder voorbehoud).
            </p>
            <p className="legal-note-text">
              Finnsight geeft inzicht en scenario-impact; geen financieel advies.
            </p>
          </div>
        </section>

        {/* Section 2c: Product mockups */}
        <section className="section">
          <h2>Hoe het er voor medewerkers uitziet</h2>
          <p className="subtext mb-xl">
            Voorbeeldweergave uit de pilotversie: deterministische berekeningen, scenario's per
            maand en toelichting die alleen naar meetbare uitkomsten verwijst.
          </p>

          <div className="mock-grid">
            <article className="mock-card mock-card-light">
              <div className="mock-card-header">
                <span className="mock-card-title">Netto besteedbaar per maand</span>
                <span className="mock-card-subtitle">Scenario A · Basis</span>
              </div>
              <p className="mock-card-text">
                Inclusief woonlasten, belasting, pensioenpremies en vaste lasten. Geen advies,
                alleen inzicht.
              </p>

              <div className="mock-panel mock-panel-dark">
                <div className="mock-panel-row">
                  <span>2025 · Na vaste lasten</span>
                  <strong>€3.120</strong>
                </div>
                <div className="progress-track" role="img" aria-hidden="true">
                  <div className="progress-fill progress-cyan" style={{ width: '82%' }} />
                </div>
                <div className="mock-panel-row">
                  <span>2030 · Na vaste lasten</span>
                  <strong>€3.480</strong>
                </div>
                <div className="progress-track" role="img" aria-hidden="true">
                  <div className="progress-fill progress-sky" style={{ width: '91%' }} />
                </div>
                <div className="bar-grid">
                  <div className="bar-col">
                    <div className="bar bar-short" />
                    <span>2025</span>
                  </div>
                  <div className="bar-col">
                    <div className="bar bar-mid" />
                    <span>2026</span>
                  </div>
                  <div className="bar-col">
                    <div className="bar bar-tall" />
                    <span>2027</span>
                  </div>
                  <div className="bar-col">
                    <div className="bar bar-x-tall" />
                    <span>2028</span>
                  </div>
                </div>
              </div>
            </article>

            <article className="mock-card mock-card-dark">
              <div className="mock-card-header">
                <span className="mock-card-title">Netto vermogen over tijd</span>
                <span className="mock-card-subtitle">Scenario B · +2% sparen</span>
              </div>
              <p className="mock-card-text mock-card-text-muted">
                Spaar- en belegcomponent uitgesplitst. Alle bedragen in euro, maandstart als tijdas.
              </p>

              <div className="stacked-grid">
                <div className="stacked-col">
                  <div className="stacked bar-top" />
                  <div className="stacked bar-bottom" />
                  <span>2025</span>
                </div>
                <div className="stacked-col">
                  <div className="stacked bar-top tall" />
                  <div className="stacked bar-bottom mid" />
                  <span>2027</span>
                </div>
                <div className="stacked-col">
                  <div className="stacked bar-top taller" />
                  <div className="stacked bar-bottom tall" />
                  <span>2030</span>
                </div>
              </div>

              <div className="mock-panel-row">
                <span>Sparen + beleggen (2030)</span>
                <strong>€78.400</strong>
              </div>
              <div className="mock-panel-row">
                <span>Hypotheekrestant (2030)</span>
                <strong>€212.000</strong>
              </div>
            </article>

            <article className="mock-card mock-card-plain">
              <div className="mock-card-header">
                <span className="mock-card-title">Scenariovergelijking</span>
                <span className="legend">
                  <span className="legend-dot legend-cyan" />
                  <small>Basis</small>
                  <span className="legend-dot legend-indigo" />
                  <small>Aflossing aanpassen (scenario)</small>
                </span>
              </div>
              <p className="mock-card-text">
                Je ziet direct wat er verandert als je aannames wijzigt (bijv. aflossing of sparen).
                Inzicht per maand.
              </p>

              <div className="mock-metrics">
                <div className="mock-metric-row">
                  <span>Netto besteedbaar</span>
                  <span className="metric-strong">€+140</span>
                </div>
                <div className="progress-track light" role="img" aria-hidden="true">
                  <div className="progress-fill progress-cyan" style={{ width: '74%' }} />
                  <div className="progress-fill progress-indigo overlay" style={{ width: '88%' }} />
                </div>

                <div className="mock-metric-row mt-sm">
                  <span>Resthypotheek 2030</span>
                  <span className="metric-strong">€-14.200</span>
                </div>
                <div className="progress-track light" role="img" aria-hidden="true">
                  <div className="progress-fill progress-cyan" style={{ width: '72%' }} />
                  <div className="progress-fill progress-indigo overlay" style={{ width: '58%' }} />
                </div>

                <div className="mock-metric-row mt-sm">
                  <span>Pensioen + AOW (projectie)</span>
                  <span className="metric-strong">€3.250 p/m</span>
                </div>
                <div className="progress-track light" role="img" aria-hidden="true">
                  <div className="progress-fill progress-cyan" style={{ width: '81%' }} />
                  <div className="progress-fill progress-indigo overlay" style={{ width: '81%' }} />
                </div>
              </div>

              <div className="mock-footer">
                <span>Alle teksten verwijzen naar meetbare modeluitkomsten.</span>
              </div>
            </article>
          </div>

          <p className="mock-caption">
            Data zijn illustratief, berekeningen deterministisch en consistent met de rekenkern.
            Uitkomsten zijn projecties op basis van aannames en jouw input.
          </p>
        </section>

        {/* Section 2d: Explainer Video */}
        <section className="section" id="glass-box-video">
          <h2>In 1 minuut: De Glazen Doos</h2>
          <p className="subtext mb-xl">
            Zie hoe Finnsight transparantie en controleerbaarheid combineert in een praktisch
            overzicht.
          </p>
          <ExplainerVideo />
        </section>

        {/* Section 3: Problems addressed */}
        <section className="section">
          <h2>De problemen die we oplossen</h2>
          <div className="problems-grid">
            <article className="problem-card">
              <img
                src="/illustrations/icon-mortgage.svg"
                alt=""
                className="problem-icon"
                aria-hidden="true"
              />
              <h3>Financiële onzekerheid</h3>
              <p>
                Veel medewerkers weten niet hoe hun inkomen, hypotheek, en pensioen samen optellen
                tot een werkelijk beeld naar de toekomst.
              </p>
            </article>
            <article className="problem-card">
              <img
                src="/illustrations/icon-transparent.svg"
                alt=""
                className="problem-icon"
                aria-hidden="true"
              />
              <h3>Onduidelijke adviezen</h3>
              <p>
                Online calculators zijn vaak vaag of geven tegenstrijdig advies. Wij geven alleen
                feiten.
              </p>
            </article>
            <article className="problem-card">
              <img
                src="/illustrations/icon-privacy.svg"
                alt=""
                className="problem-icon"
                aria-hidden="true"
              />
              <h3>Privacy</h3>
              <p>
                Medewerkers zitten niet te wachten op een werkgever die in hun portemonnee kijkt.
                Dat zal ook nooit gebeuren.
              </p>
            </article>
          </div>
        </section>

        {/* Section 4: How it works */}
        <section className="section">
          <h2>Hoe werkt Finnsight?</h2>
          <figure className="how-figure-large">
            <img
              src="/illustrations/how-it-works.svg"
              alt="Schematisch: jouw input → deterministische berekening → helder overzicht"
              className="how-illustration-large"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="visually-hidden">
              Visuele weergave van het Finnsight proces: jouw financiële gegevens worden verwerkt
              door een deterministische rekenkern tot een helder overzicht.
            </figcaption>
          </figure>
          <ol className="process">
            <li>
              <strong>Jij deelt je situatie:</strong> Inkomsten, woning, schulden, pensioen,
              uitgaven.
            </li>
            <li>
              <strong>Finnsight rekent:</strong> Deterministische berekeningen (geen AI-adviezen)
              tonen je financiële beeld.
            </li>
            <li>
              <strong>Jij ziet helderheid:</strong> Inzichtelijk overzicht met scenario's. Geen
              interpretatie. Jij besluit.
            </li>
          </ol>
          <p>
            Bijvoorbeeld: wat er gebeurt met je besteedbaar inkomen als rente, woonlasten of
            pensioenleeftijd verandert.
          </p>
        </section>

        {/* Section 5: CTA */}
        <section className="section cta-section">
          <h2>Interesse?</h2>
          <p>
            We draaien pilots met een select aantal werkgevers om Finnsight verder aan te scherpen
            in de praktijk.
          </p>
          <p>Ben je werkgever, onderzoeker, journalist, of adviseur?</p>
          <CTAButton variant="primary">Vraag pilotinformatie aan</CTAButton>
        </section>
      </main>

      <footer className="footer">
        <img src="/brand/mark-on-dark.svg" alt="" className="footer-mark" aria-hidden="true" />
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span className="divider-muted">|</span>
          <CTAButton variant="text" className="footer-cta-link">
            Contact
          </CTAButton>
          <span className="divider-muted">|</span>
          <Link to="/privacy">Privacy en voorwaarden</Link>
        </nav>
        <p className="footer-note">&copy; 2025 Finnsight</p>
      </footer>
    </>
  );
}
