import { render, screen } from '@testing-library/react';
import TrustPage from '../pages/TrustPage';

describe('TrustPage', () => {
  it('renders without crashing', () => {
    render(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays trust and transparency section', () => {
    render(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/Vertrouwen & Compliance/i)).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    render(<TrustPage onNavigate={() => {}} />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('displays determinism guarantee', () => {
    render(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/deterministische logica/i)).toBeInTheDocument();
  });

  it('mentions no AI in calculations', () => {
    render(<TrustPage onNavigate={() => {}} />);
    expect(screen.getByText(/Geen AI in jouw financiële berekeningen/i)).toBeInTheDocument();
  });

  it('has footer with navigation links', () => {
    render(<TrustPage onNavigate={() => {}} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
