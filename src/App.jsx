import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ErrorBoundary from './components/ErrorBoundary'
import { ModalProvider } from './context/site/ModalContext'
import LeadModal from './components/LeadModal/LeadModal'
import LandingPage from './pages/LandingPage'
import TrustPage from './pages/TrustPage'
import PrivacyTermsPage from './pages/PrivacyTermsPage'
import NotFoundPage from './pages/NotFoundPage'

function AppContent() {
  const navigate = useNavigate()

  const handleNavigate = (page) => {
    navigate(`/${page === 'landing' ? '' : page}`)
    window.scrollTo(0, 0)
  }

  return (
    <ModalProvider>
      <ErrorBoundary>
        <div className="app">
          <Routes>
            <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
            <Route path="/trust" element={<TrustPage onNavigate={handleNavigate} />} />
            <Route path="/privacy" element={<PrivacyTermsPage onNavigate={handleNavigate} />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <LeadModal />
      </ErrorBoundary>
    </ModalProvider>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
