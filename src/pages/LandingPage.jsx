export default function LandingPage({ onNavigate }) {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">Finnsight</div>
          <ul>
            <li><a href="#what" onClick={() => {}}>Wat is Finnsight</a></li>
            <li><a href="#demos" onClick={() => {}}>Demo's</a></li>
            <li><a href="#trust" onClick={(e) => { e.preventDefault(); onNavigate('trust'); }}>Vertrouwen</a></li>
            <li><a href="#cta" className="cta-nav" onClick={() => window.location.href = 'mailto:hello@finnsight.nl'}>Interesse? Laat het weten</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Section 1: What is Finnsight */}
        <section id="what" className="section hero">
          <h1>Inzicht in jouw financiële toekomst</h1>
          <p className="lead">Finnsight geeft Nederlandse werknemers een helder beeld van hun financiële mogelijkheden — tot en met pensioen.</p>
          <p className="subtext">Geen adviezen. Geen vragen. Alleen feiten over wat jij kunt doen.</p>
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
            <li><strong>Jij brengt feiten:</strong> Inkomsten, woning, schulden, pensioen, uitgaven.</li>
            <li><strong>Finnsight rekent:</strong> Deterministische berekeningen (geen AI-adviezen) tonen je financiële beeld.</li>
            <li><strong>Jij ziet helderheid:</strong> Dashboard met scenario's. Geen interpretatie. Jij besluit.</li>
          </ol>
        </section>

        {/* Section 5: What Finnsight does NOT do */}
        <section className="section highlight">
          <h2>Wat Finnsight NIET doet</h2>
          <ul className="dont-list">
            <li>❌ Biedt financieel advies (AFM-gerelateerd)</li>
            <li>❌ Gebruikt AI om conclusies te genereren</li>
            <li>❌ Slaat persoonlijke gegevens op als je alleen een demo wilt zien</li>
            <li>❌ Geeft je werkgever inzicht in jouw financiën</li>
            <li>❌ Maakt beloftes over toekomstprognoses</li>
          </ul>
        </section>

        {/* Section 6: Demos */}
        <section id="demos" className="section">
          <h2>Probeer de demo's</h2>
          <p>Beide demo's zijn illustratief. Ze gebruiken geen persoonlijke gegevens en slaan niets op.</p>
          <div className="grid-2">
            <div className="demo-card">
              <h3>Quick-scan</h3>
              <p>6 vragen, 1 minuut. Wat ziet jij als je verder kijkt?</p>
              <button className="btn" onClick={() => onNavigate('demos')}>Quick-scan proberen</button>
            </div>
            <div className="demo-card">
              <h3>Goal-first</h3>
              <p>Begin met wat je wilt bereiken. Finnsight toont impact en trade-offs.</p>
              <button className="btn" onClick={() => onNavigate('demos')}>Goal-first proberen</button>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section id="cta" className="section cta-section">
          <h2>Interesse?</h2>
          <p>We zoeken werkgevers die samen willen werken. Of ben je onderzoeker / journalist?</p>
          <a href="mailto:hello@finnsight.nl" className="btn btn-primary">Neem contact op</a>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Finnsight. <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('trust'); }}>Vertrouwen & Compliance</a></p>
      </footer>
    </>
  )
}
