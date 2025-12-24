import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import TrustPage from './pages/TrustPage'
import DemosPage from './pages/DemosPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      {currentPage === 'landing' && <LandingPage onNavigate={navigate} />}
      {currentPage === 'trust' && <TrustPage onNavigate={navigate} />}
      {currentPage === 'demos' && <DemosPage onNavigate={navigate} />}
    </div>
  )
}
