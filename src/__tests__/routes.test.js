import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import MethodologyPage from '../pages/MethodologyPage';
import CompliancePage from '../pages/CompliancePage';

// Follows the same routing/test approach used in all other page tests in this repo:
// render the page component inside MemoryRouter with initialEntries matching the route.
const renderAtRoute = (path, component) => {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        <ModalProvider>
          <Routes>
            <Route path={path} element={component} />
          </Routes>
        </ModalProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('Route registration', () => {
  it('renders MethodologyPage at /methodology route', () => {
    renderAtRoute('/methodology', <MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Methodologie/i })).toBeInTheDocument();
  });

  it('renders CompliancePage at /compliance route', () => {
    renderAtRoute('/compliance', <CompliancePage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Compliance/i })).toBeInTheDocument();
  });

  it('/methodology route renders full methodology page content', () => {
    renderAtRoute('/methodology', <MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/deterministisch rekenmodel/i)).toBeInTheDocument();
    expect(screen.getByText(/Wat Finnsight niet doet/i)).toBeInTheDocument();
  });

  it('/compliance route renders full compliance page content', () => {
    renderAtRoute('/compliance', <CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/AFM-grens als ontwerpintentie/i)).toBeInTheDocument();
    expect(screen.getByText(/Verwerkersovereenkomst \(DPA\)/i)).toBeInTheDocument();
  });
});
