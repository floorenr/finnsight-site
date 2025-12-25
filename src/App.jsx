import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import LandingPage from './pages/LandingPage'
import TrustPage from './pages/TrustPage'
import PrivacyTermsPage from './pages/PrivacyTermsPage'

function AppContent() {
  const navigate = useNavigate()

  const handleNavigate = (page) => {
    navigate(`/${page === 'landing' ? '' : page}`)
    window.scrollTo(0, 0)
  }

  return (
    <ErrorBoundary>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
          <Route path="/trust" element={<TrustPage onNavigate={handleNavigate} />} />
          <Route path="/privacy" element={<PrivacyTermsPage onNavigate={handleNavigate} />} />
          {/* Catch-all: redirect unknown routes to home */}
          <Route path="*" element={<LandingPage onNavigate={handleNavigate} />} />
        </Routes>
      </div>
    </ErrorBoundary>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
