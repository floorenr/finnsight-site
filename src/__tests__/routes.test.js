import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from '../App';

// Renders the real App (with BrowserRouter + Suspense + lazy routes as in production).
// Sets window.location via pushState before rendering so BrowserRouter picks up the correct route.
const renderAppAtPath = (path) => {
  window.history.pushState({}, '', path);
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
};

afterEach(() => {
  window.history.pushState({}, '', '/');
});

describe('App route wiring', () => {
  it('renders MethodologyPage at /methodology', async () => {
    renderAppAtPath('/methodology');
    expect(
      await screen.findByRole('heading', { level: 1, name: /Methodologie/i })
    ).toBeInTheDocument();
  });

  it('renders CompliancePage at /compliance', async () => {
    renderAppAtPath('/compliance');
    expect(
      await screen.findByRole('heading', { level: 1, name: /Compliance/i })
    ).toBeInTheDocument();
  });

  it('/methodology renders deterministic methodology content', async () => {
    renderAppAtPath('/methodology');
    expect(await screen.findByText(/deterministisch rekenmodel/i)).toBeInTheDocument();
    expect(screen.getByText(/Wat Finnsight niet doet/i)).toBeInTheDocument();
  });

  it('/compliance renders AFM and DPA compliance content', async () => {
    renderAppAtPath('/compliance');
    expect(await screen.findByText(/AFM-grens als ontwerpintentie/i)).toBeInTheDocument();
    expect(screen.getByText(/Verwerkersovereenkomst \(DPA\)/i)).toBeInTheDocument();
  });

  it('renders SecurityPage at /security', async () => {
    renderAppAtPath('/security');
    expect(
      await screen.findByRole('heading', { level: 1, name: /Beveiliging/i })
    ).toBeInTheDocument();
  });

  it('/security renders responsible disclosure content', async () => {
    renderAppAtPath('/security');
    expect(await screen.findByRole('heading', { name: /Responsible disclosure/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /security@finnsight\.nl/i })).toBeInTheDocument();
  });
});
