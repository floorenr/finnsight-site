import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import MethodologyPage from '../pages/MethodologyPage';

const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ModalProvider>{ui}</ModalProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('MethodologyPage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the Methodologie heading', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Methodologie/i })).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('button', { name: /Menu/i })).toBeInTheDocument();
  });

  it('includes an overview of the deterministic approach', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/deterministisch rekenmodel/i)).toBeInTheDocument();
  });

  it('includes tax logic section', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/Belastinglogica/i)).toBeInTheDocument();
  });

  it('includes pension assumptions section', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/Pensioen: aannames en begrenzing/i)).toBeInTheDocument();
  });

  it('includes mortgage calculations section', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/Hypotheekberekeningen/i)).toBeInTheDocument();
  });

  it('includes spending power section', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { name: /Besteedbaar inkomen/i })).toBeInTheDocument();
  });

  it('includes "what Finnsight does not do" section', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/Wat Finnsight niet doet/i)).toBeInTheDocument();
  });

  it('includes no-advice language', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByText(/uitsluitend informatief en illustratief/i)).toBeInTheDocument();
  });

  it('includes link to compliance page', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    const complianceLinks = screen.getAllByRole('link', { name: /^Compliance$/i });
    expect(complianceLinks.length).toBeGreaterThanOrEqual(1);
    expect(complianceLinks[0]).toHaveAttribute('href', '/compliance');
  });

  it('has footer with navigation links', () => {
    renderWithRouter(<MethodologyPage onNavigate={() => {}} />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
