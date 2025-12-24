import { useState } from 'react'

export default function DemosPage({ onNavigate }) {
  const [quickScanInputs, setQuickScanInputs] = useState({
    age: 35,
    income: 3500,
    mortgage: 1200,
    spending: 1800,
    pensionYears: 30,
    savings: 50000
  })

  const [quickScanOutput, setQuickScanOutput] = useState(null)

  const [goalFirstInputs, setGoalFirstInputs] = useState({
    goal: '',
    age: 35
  })

  const [goalFirstOutput, setGoalFirstOutput] = useState(null)

  // Quick-scan calculation (illustrative, non-canonical)
  const handleQuickScanSubmit = (e) => {
    e.preventDefault()
    const { age, income, mortgage, spending, pensionYears } = quickScanInputs

    // Simplified, illustrative calculation (NOT engine logic)
    const monthlyAfterMortgage = income - mortgage - (spending * 0.5)
    const pensionInput = Math.max(0, monthlyAfterMortgage * 0.12)
    const lowEstimate = Math.round(pensionInput * 0.85)
    const highEstimate = Math.round(pensionInput * 1.15)

    setQuickScanOutput({
      low: lowEstimate,
      high: highEstimate
    })
  }

  // Goal-first calculation (illustrative)
  const handleGoalFirstSubmit = (e) => {
    e.preventDefault()
    setGoalFirstOutput({
      goal: goalFirstInputs.goal,
      age: goalFirstInputs.age
    })
  }

  const handleQuickScanChange = (e) => {
    const { name, value } = e.target
    setQuickScanInputs({
      ...quickScanInputs,
      [name]: parseInt(value)
    })
  }

  const handleGoalButtonClick = (goal) => {
    setGoalFirstInputs({
      ...goalFirstInputs,
      goal
    })
  }

  const handleGoalFirstChange = (e) => {
    const { name, value } = e.target
    setGoalFirstInputs({
      ...goalFirstInputs,
      [name]: parseInt(value)
    })
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="logo">Finnsight</div>
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>← Terug naar start</a>
        </nav>
      </header>

      <main className="content">
        <h1>Demo's</h1>
        <p className="disclaimer">⚠️ Deze demo's zijn illustratief en niet bindend. Ze slaan je gegevens niet op. Ze gebruiken voorbeeld-data.</p>

        {/* Quick-Scan Demo */}
        <section className="demo-section">
          <h2>Quick-scan Demo</h2>
          <p><strong>6 vragen, 1 minuut.</strong> Wat zie je als je 30 jaar vooruit kijkt?</p>

          <form className="demo-form" onSubmit={handleQuickScanSubmit}>
            <fieldset>
              <legend>Jouw situatie</legend>

              <div className="form-group">
                <label htmlFor="age">Hoe oud ben je nu?</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  min="18"
                  max="100"
                  value={quickScanInputs.age}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="income">Bruto maandinkomens (€)</label>
                <input
                  type="number"
                  id="income"
                  name="income"
                  min="0"
                  step="100"
                  value={quickScanInputs.income}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="mortgage">Hypotheek (€ maandelijks)</label>
                <input
                  type="number"
                  id="mortgage"
                  name="mortgage"
                  min="0"
                  step="100"
                  value={quickScanInputs.mortgage}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="spending">Maandelijkse uitgaven (€)</label>
                <input
                  type="number"
                  id="spending"
                  name="spending"
                  min="0"
                  step="100"
                  value={quickScanInputs.spending}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="pensionYears">Hoeveel jaar tot pensioen?</label>
                <input
                  type="number"
                  id="pensionYears"
                  name="pensionYears"
                  min="0"
                  max="50"
                  value={quickScanInputs.pensionYears}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="savings">Spaargeld / netto vermogen (€)</label>
                <input
                  type="number"
                  id="savings"
                  name="savings"
                  min="0"
                  step="1000"
                  value={quickScanInputs.savings}
                  onChange={handleQuickScanChange}
                  required
                />
              </div>
            </fieldset>

            <button type="submit" className="btn btn-primary">Bekijk demo-resultaat</button>
          </form>

          {quickScanOutput && (
            <div className="demo-output">
              <h3>Demo-resultaat</h3>
              <div className="disclaimer">
                ℹ️ Dit is een <strong>illustratief bereik</strong>. Geen exacte voorspelling. De werkelijke bedragen hangen af van veel meer factoren.
              </div>

              <div className="result-band">
                <h4>Maandelijks beschikbaar na pensioen</h4>
                <p className="range">
                  <strong>€{quickScanOutput.low} – €{quickScanOutput.high}</strong>
                </p>
                <p className="note">Dit bereik is gebaseerd op jouw input. <strong>Niet bindend.</strong></p>
              </div>

              <div className="result-insights">
                <h4>Wat dit bereik beïnvloedt</h4>
                <ul>
                  <li>Maandelijkse uitgaven vandaag</li>
                  <li>Hypotheekaflossingsplannen</li>
                  <li>Pensioenopbouw</li>
                  <li>Toekomstige belastingtariefen (onzeker)</li>
                </ul>
              </div>

              <p className="cta-link">
                Wil je meer weten? <a href="mailto:hello@finnsight.nl">Neem contact op</a> voor echte planning.
              </p>
            </div>
          )}
        </section>

        {/* Goal-First Demo */}
        <section className="demo-section">
          <h2>Goal-First Demo</h2>
          <p><strong>Begin met wat je wilt bereiken.</strong> Finnsight toont wat nodig is.</p>

          <form className="demo-form" onSubmit={handleGoalFirstSubmit}>
            <fieldset>
              <legend>Je financiële doel</legend>

              <div className="form-group">
                <label>Wat wil je maandelijks beschikbaar hebben na pensioen?</label>
                <div className="goal-buttons">
                  <button
                    type="button"
                    className={`goal-btn ${goalFirstInputs.goal === 'minimum' ? 'active' : ''}`}
                    onClick={() => handleGoalButtonClick('minimum')}
                  >
                    <span className="goal-label">Minimum</span>
                    <span className="goal-value">€1.500</span>
                  </button>
                  <button
                    type="button"
                    className={`goal-btn ${goalFirstInputs.goal === 'comfortable' ? 'active' : ''}`}
                    onClick={() => handleGoalButtonClick('comfortable')}
                  >
                    <span className="goal-label">Comfortabel</span>
                    <span className="goal-value">€2.500</span>
                  </button>
                  <button
                    type="button"
                    className={`goal-btn ${goalFirstInputs.goal === 'ideal' ? 'active' : ''}`}
                    onClick={() => handleGoalButtonClick('ideal')}
                  >
                    <span className="goal-label">Ideaal</span>
                    <span className="goal-value">€3.500</span>
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="goalAge">Hoe oud ben je?</label>
                <input
                  type="number"
                  id="goalAge"
                  name="age"
                  min="18"
                  max="100"
                  value={goalFirstInputs.age}
                  onChange={handleGoalFirstChange}
                  required
                />
              </div>
            </fieldset>

            <button type="submit" className="btn btn-primary">Bekijk impact</button>
          </form>

          {goalFirstOutput && (
            <div className="demo-output">
              <h3>Demo-resultaat</h3>
              <div className="disclaimer">
                ℹ️ Dit toont welke <strong>factoren</strong> jouw doel beïnvloeden. Niet hoe je het bereikt.
              </div>

              <div className="result-trade-offs">
                <h4>Wat beïnvloedt dit doel</h4>
                <ul className="factors">
                  <li className="factor-high">
                    <span className="factor-label">Maandelijkse uitgaven</span>
                    <span className="factor-impact">⭐⭐⭐ Zeer belangrijk</span>
                  </li>
                  <li className="factor-high">
                    <span className="factor-label">Pensioenopbouw</span>
                    <span className="factor-impact">⭐⭐⭐ Zeer belangrijk</span>
                  </li>
                  <li className="factor-medium">
                    <span className="factor-label">Hypotheekstrategie</span>
                    <span className="factor-impact">⭐⭐ Matig</span>
                  </li>
                  <li className="factor-low">
                    <span className="factor-label">Beleggingsstrategie</span>
                    <span className="factor-impact">⭐ Minimaal (voor dit doel)</span>
                  </li>
                </ul>
              </div>

              <p className="cta-link">
                Wil je weten hoe je dit kunt bereiken? <a href="mailto:hello@finnsight.nl">Neem contact op</a> voor echte planning.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 Finnsight. <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}>Terug naar start</a></p>
      </footer>
    </>
  )
}
