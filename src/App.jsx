import { useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import LandingPage from './pages/LandingPage'
import TrustPage from './pages/TrustPage'

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const navigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  return (
    <ErrorBoundary>
      <div className="app">
        {currentPage === 'landing' && <LandingPage onNavigate={navigate} />}
        {currentPage === 'trust' && <TrustPage onNavigate={navigate} />}
      </div>
    </ErrorBoundary>
  )
}
