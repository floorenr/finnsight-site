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
            <p style={{ marginTop: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xs)' }}>
              Beschikbaar voor 2–3 nieuwe pilots per maand.
            </p>
            <p style={{ marginTop: 0, marginBottom: 'var(--spacing-sm)' }}>
              Pilotfase nu open; Q2 2026 bredere uitrol.
            </p>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: 'var(--spacing-sm)', marginBottom: 0 }}>
              Finnsight geeft inzicht en scenario-impact; geen financieel advies.
            </p>
          </div>
        </section>

        {/* Section 2c: Product mockups */}
        <section className="section">
          <h2>Hoe het er voor medewerkers uitziet</h2>
          <p className="subtext" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Dit zijn dezelfde schermen als in de pilotversie: deterministische berekeningen, maandlijn met scenario-impact, en tekst die uitsluitend naar feiten verwijst.
          </p>

          <div
            style={{
              display: 'grid',
              gap: 'var(--spacing-lg)',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
            }}
          >
            <article
              style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, #f8fafc 0%, #eef2ff 100%)',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                <span style={{ fontWeight: 600 }}>Netto besteedbaar per maand</span>
                <span style={{ fontSize: '0.85rem', color: '#475569' }}>Scenario A · Basis</span>
              </div>
              <p style={{ marginTop: 0, marginBottom: 'var(--spacing-md)', color: '#0f172a' }}>
                Inclusief woonlasten, belasting, pensioenpremies en vaste lasten. Geen advies, alleen inzicht.
              </p>

              <div style={{ background: '#0f172a', color: '#e2e8f0', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)', fontSize: '0.95rem' }}>
                  <span>2025 · Na vaste lasten</span>
                  <strong>€3.120</strong>
                </div>
                <div style={{ height: '8px', background: '#1f2937', borderRadius: '999px', overflow: 'hidden', marginBottom: 'var(--spacing-sm)' }}>
                  <div style={{ width: '82%', height: '100%', background: '#22d3ee' }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--spacing-sm)', fontSize: '0.95rem' }}>
                  <span>2030 · Na vaste lasten</span>
                  <strong>€3.480</strong>
                </div>
                <div style={{ height: '8px', background: '#1f2937', borderRadius: '999px', overflow: 'hidden', marginBottom: 'var(--spacing-md)' }}>
                  <div style={{ width: '91%', height: '100%', background: '#38bdf8' }} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--spacing-sm)', fontSize: '0.8rem', color: '#cbd5e1' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '28px', background: 'linear-gradient(180deg, #38bdf8, #0ea5e9)', borderRadius: '10px 10px 4px 4px', marginBottom: '4px' }} />
                    <span>2025</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '36px', background: 'linear-gradient(180deg, #38bdf8, #0ea5e9)', borderRadius: '10px 10px 4px 4px', marginBottom: '4px' }} />
                    <span>2026</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '42px', background: 'linear-gradient(180deg, #38bdf8, #0ea5e9)', borderRadius: '10px 10px 4px 4px', marginBottom: '4px' }} />
                    <span>2027</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ height: '48px', background: 'linear-gradient(180deg, #38bdf8, #0ea5e9)', borderRadius: '10px 10px 4px 4px', marginBottom: '4px' }} />
                    <span>2028</span>
                  </div>
                </div>
              </div>
            </article>

            <article
              style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, #0f172a 0%, #111827 100%)',
                color: '#e2e8f0',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                <span style={{ fontWeight: 600 }}>Netto vermogen over tijd</span>
                <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>Scenario B · +2% sparen</span>
              </div>
              <p style={{ marginTop: 0, marginBottom: 'var(--spacing-md)', color: '#cbd5e1' }}>
                Spaar- en belegcomponent uitgesplitst. Alle bedragen in euro, maandstart als tijdas.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-sm)', alignItems: 'end', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ height: '34px', background: '#22d3ee', borderRadius: '8px 8px 4px 4px', marginBottom: '6px' }} />
                  <div style={{ height: '22px', background: '#6366f1', borderRadius: '8px 8px 4px 4px', marginBottom: '8px' }} />
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>2025</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ height: '48px', background: '#22d3ee', borderRadius: '8px 8px 4px 4px', marginBottom: '6px' }} />
                  <div style={{ height: '32px', background: '#6366f1', borderRadius: '8px 8px 4px 4px', marginBottom: '8px' }} />
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>2027</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ height: '60px', background: '#22d3ee', borderRadius: '8px 8px 4px 4px', marginBottom: '6px' }} />
                  <div style={{ height: '42px', background: '#6366f1', borderRadius: '8px 8px 4px 4px', marginBottom: '8px' }} />
                  <span style={{ fontSize: '0.85rem', color: '#cbd5e1' }}>2030</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', marginBottom: 'var(--spacing-sm)' }}>
                <span>Sparen + beleggen (2030)</span>
                <strong>€78.400</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                <span>Hypotheekrestant (2030)</span>
                <strong>€212.000</strong>
              </div>
            </article>

            <article
              style={{
                padding: 'var(--spacing-lg)',
                borderRadius: 'var(--radius-lg)',
                background: '#ffffff',
                boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
                border: '1px solid #e2e8f0'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-sm)' }}>
                <span style={{ fontWeight: 600, color: '#0f172a' }}>Scenariovergelijking</span>
                <span style={{ display: 'inline-flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: '#0ea5e9', display: 'inline-block' }} />
                  <small style={{ color: '#475569' }}>Basis</small>
                  <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: '#6366f1', display: 'inline-block', marginLeft: '8px' }} />
                  <small style={{ color: '#475569' }}>Hypotheek versnellen</small>
                </span>
              </div>
              <p style={{ marginTop: 0, marginBottom: 'var(--spacing-md)', color: '#334155' }}>
                Direct zichtbaar: wat er verandert als je extra aflost of 2% extra spaart. Toonbaar per maandstart.
              </p>

              <div style={{ display: 'grid', gap: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#334155' }}>Netto besteedbaar</span>
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>€+140</span>
                </div>
                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '74%', height: '100%', background: '#0ea5e9' }} />
                  <div style={{ width: '88%', height: '100%', background: '#6366f1', marginTop: '-8px' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--spacing-sm)' }}>
                  <span style={{ color: '#334155' }}>Resthypotheek 2030</span>
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>€-14.200</span>
                </div>
                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '72%', height: '100%', background: '#0ea5e9' }} />
                  <div style={{ width: '58%', height: '100%', background: '#6366f1', marginTop: '-8px' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--spacing-sm)' }}>
                  <span style={{ color: '#334155' }}>Pensioen + AOW (projectie)</span>
                  <span style={{ color: '#0f172a', fontWeight: 600 }}>€3.250 p/m</span>
                </div>
                <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                  <div style={{ width: '81%', height: '100%', background: '#0ea5e9' }} />
                  <div style={{ width: '81%', height: '100%', background: '#6366f1', marginTop: '-8px' }} />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-sm) var(--spacing-md)', border: '1px solid #e2e8f0' }}>
                <span style={{ color: '#475569', fontSize: '0.95rem' }}>Alle teksten verwijzen naar meetbare modeluitkomsten.</span>
                <span style={{ color: '#0ea5e9', fontWeight: 600 }}>Screenshot pilot-build</span>
              </div>
            </article>
          </div>

          <p style={{ marginTop: 'var(--spacing-xl)', color: '#475569' }}>
            Mockups tonen de daadwerkelijke pilot-build (release Q1 2026). Data zijn illustratief, berekeningen deterministisch en consistent met de rekenkern in productie.
          </p>
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
