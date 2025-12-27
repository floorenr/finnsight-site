import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';

// Helper to wrap component with Router context and HelmetProvider
const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>{ui}</MemoryRouter>
    </HelmetProvider>
  );
};

describe('LandingPage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays hero headline', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    expect(screen.getByText(/Inzicht in jouw financiële toekomst/i)).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('displays primary action button', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has footer with navigation links', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
