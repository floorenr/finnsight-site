import { render, screen } from '@testing-library/react';
import LandingPage from '../pages/LandingPage';

describe('LandingPage', () => {
  it('renders without crashing', () => {
    render(<LandingPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays hero headline', () => {
    render(<LandingPage onNavigate={() => {}} />);
    expect(screen.getByText(/Inzicht in jouw financiële toekomst/i)).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    render(<LandingPage onNavigate={() => {}} />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('displays primary action button', () => {
    render(<LandingPage onNavigate={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('has footer with navigation links', () => {
    render(<LandingPage onNavigate={() => {}} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
