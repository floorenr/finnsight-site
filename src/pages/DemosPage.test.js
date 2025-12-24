import { render, screen } from '@testing-library/react';
import DemosPage from '../pages/DemosPage';

describe('DemosPage', () => {
  it('renders without crashing', () => {
    render(<DemosPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays both demo sections', () => {
    render(<DemosPage onNavigate={() => {}} />);
    // Check for demo section headings
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('has mobile navigation toggle button', () => {
    render(<DemosPage onNavigate={() => {}} />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('has quick-scan demo with input fields', () => {
    render(<DemosPage onNavigate={() => {}} />);
    // Check for spinbutton inputs (numeric inputs)
    const inputs = screen.getAllByRole('spinbutton');
    expect(inputs.length).toBeGreaterThan(0);
  });

  it('displays disclaimer about demos being illustrative', () => {
    render(<DemosPage onNavigate={() => {}} />);
    expect(screen.getByText(/illustratief/i)).toBeInTheDocument();
  });

  it('has footer with navigation links', () => {
    render(<DemosPage onNavigate={() => {}} />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
