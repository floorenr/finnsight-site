import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import TrustPage from '../pages/TrustPage';

// Helper to wrap component with Router context and HelmetProvider
const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </HelmetProvider>
  );
};

describe('TrustPage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays trust and transparency section', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/Vertrouwen & Compliance/i)).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('displays determinism guarantee', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/deterministische logica/i)).toBeInTheDocument();
  });

  it('mentions no AI in calculations', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/Geen AI in jouw financiële berekeningen/i)).toBeInTheDocument();
  });

  it('has footer with navigation links', () => {
    renderWithRouter(<TrustPage onNavigate={() => {}} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
