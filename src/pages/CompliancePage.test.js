import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import CompliancePage from '../pages/CompliancePage';

const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ModalProvider>{ui}</ModalProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('CompliancePage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the Compliance heading', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Compliance/i })).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByRole('button', { name: /Menu/i })).toBeInTheDocument();
  });

  it('includes deterministic engine vs explanation layer section', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/Deterministische engine vs. uitleglaag/i)).toBeInTheDocument();
  });

  it('describes AFM boundary as design intent', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/AFM-grens als ontwerpintentie/i)).toBeInTheDocument();
  });

  it('includes GDPR / processor role framing', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/AVG \/ verwerkerrol/i)).toBeInTheDocument();
  });

  it('includes employer aggregation threshold wording', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/minimumdrempel van 15 deelnemers/i)).toBeInTheDocument();
  });

  it('prohibits individual employee financial data for employers', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/nooit individuele financiële data/i)).toBeInTheDocument();
  });

  it('states cohort reporting is not traceable to individuals', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/niet herleidbaar tot individuen/i)).toBeInTheDocument();
  });

  it('prohibits individual-level profiling and scoring', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/Geen individueel financieel profiel, scoring/i)).toBeInTheDocument();
  });

  it('frames pilot-phase employer reporting conservatively', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/huidige pilotfase/i)).toBeInTheDocument();
  });

  it('includes DPA status section', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/Verwerkersovereenkomst \(DPA\)/i)).toBeInTheDocument();
  });

  it('states DPA is a concept/template under legal review', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByText(/concept\/template/i)).toBeInTheDocument();
  });

  it('states AFM classification is design intent, not formally established', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(
      screen.getByText(/Ontwerpintentie \(nog niet formeel getoetst door de AFM\)/i)
    ).toBeInTheDocument();
  });

  it('includes link to methodology page', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    const methodologyLinks = screen.getAllByRole('link', { name: /^Methodologie$/i });
    expect(methodologyLinks.length).toBeGreaterThanOrEqual(1);
    expect(methodologyLinks[0]).toHaveAttribute('href', '/methodology');
  });

  it('has footer with navigation links', () => {
    renderWithRouter(<CompliancePage onNavigate={() => {}} />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
