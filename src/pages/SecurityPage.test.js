import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import SecurityPage from '../pages/SecurityPage';

const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ModalProvider>{ui}</ModalProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('SecurityPage', () => {
  it('renders without crashing', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays the Beveiliging heading', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByRole('heading', { level: 1, name: /Beveiliging/i })).toBeInTheDocument();
  });

  it('has mobile navigation toggle button', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByRole('button', { name: /Menu/i })).toBeInTheDocument();
  });

  it('includes transport security section', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(
      screen.getByRole('heading', { name: /Transportbeveiliging/i })
    ).toBeInTheDocument();
  });

  it('mentions HTTPS enforcement', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    const httpsElements = screen.getAllByText(/HTTPS/i);
    expect(httpsElements.length).toBeGreaterThanOrEqual(1);
  });

  it('includes data protection and retention section', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByText(/Gegevensbescherming en -retentie/i)).toBeInTheDocument();
  });

  it('includes access control section', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByText(/Toegangsbeheer en authenticatie/i)).toBeInTheDocument();
  });

  it('includes infrastructure and deployment section', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByText(/Infrastructuur en deployment/i)).toBeInTheDocument();
  });

  it('mentions penetration test as planned target', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByText(/Penetratietest/i)).toBeInTheDocument();
  });

  it('mentions SOC 2 Type II as a roadmap target', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByText(/SOC 2/i)).toBeInTheDocument();
  });

  it('includes responsible disclosure section', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(
      screen.getByRole('heading', { name: /Responsible disclosure/i })
    ).toBeInTheDocument();
  });

  it('includes responsible disclosure contact email', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByRole('link', { name: /security@finnsight\.nl/i })).toBeInTheDocument();
  });

  it('links to the .well-known/security.txt file', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(
      screen.getByRole('link', { name: /\.well-known\/security\.txt/i })
    ).toHaveAttribute('href', '/.well-known/security.txt');
  });

  it('includes link to compliance page', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    const links = screen.getAllByRole('link', { name: /^Compliance$/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
    expect(links[0]).toHaveAttribute('href', '/compliance');
  });

  it('includes link to privacy page', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    const links = screen.getAllByRole('link', { name: /Privacy en voorwaarden/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
  });

  it('has footer with navigation links', () => {
    renderWithRouter(<SecurityPage onNavigate={() => {}} />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
