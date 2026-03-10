import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { ModalProvider } from './context/site/ModalContext';
import LeadModal from './components/LeadModal/LeadModal';
import LandingPage from './pages/LandingPage'; // Eager load - critical path

// Lazy load non-critical routes
const TrustPage = lazy(() => import('./pages/TrustPage'));
const PrivacyTermsPage = lazy(() => import('./pages/PrivacyTermsPage'));
const MethodologyPage = lazy(() => import('./pages/MethodologyPage'));
const CompliancePage = lazy(() => import('./pages/CompliancePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function AppContent() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page === 'landing' ? '' : page}`);
    window.scrollTo(0, 0);
  };

  return (
    <ModalProvider>
      <ErrorBoundary>
        <div className="app">
          <Suspense fallback={<div className="page-loading">Laden...</div>}>
            <Routes>
              <Route path="/" element={<LandingPage onNavigate={handleNavigate} />} />
              <Route path="/trust" element={<TrustPage onNavigate={handleNavigate} />} />
              <Route path="/privacy" element={<PrivacyTermsPage onNavigate={handleNavigate} />} />
              <Route
                path="/methodology"
                element={<MethodologyPage onNavigate={handleNavigate} />}
              />
              <Route path="/compliance" element={<CompliancePage onNavigate={handleNavigate} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </div>
        <LeadModal />
      </ErrorBoundary>
    </ModalProvider>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
