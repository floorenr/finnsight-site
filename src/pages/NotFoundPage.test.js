import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import NotFoundPage from './NotFoundPage';

const renderWithProviders = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ModalProvider>{ui}</ModalProvider>
      </MemoryRouter>
    </HelmetProvider>
  );
};

describe('NotFoundPage', () => {
  it('renders without crashing', () => {
    renderWithProviders(<NotFoundPage />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('displays 404 message in Dutch', () => {
    renderWithProviders(<NotFoundPage />);
    expect(screen.getByText(/Pagina niet gevonden/i)).toBeInTheDocument();
  });

  it('shows explanation text', () => {
    renderWithProviders(<NotFoundPage />);
    expect(screen.getByText(/De pagina die je zocht bestaat niet/i)).toBeInTheDocument();
  });

  it('has link to homepage', () => {
    renderWithProviders(<NotFoundPage />);
    const homeLink = screen.getByRole('link', { name: /Ga naar de startpagina/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('has link to trust page', () => {
    renderWithProviders(<NotFoundPage />);
    const trustLink = screen.getByRole('link', { name: /Lees over vertrouwen en compliance/i });
    expect(trustLink).toBeInTheDocument();
    expect(trustLink).toHaveAttribute('href', '/trust');
  });

  it('has link to privacy page', () => {
    renderWithProviders(<NotFoundPage />);
    const privacyLink = screen.getByRole('link', { name: /Bekijk onze privacy en voorwaarden/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  it('has mobile navigation toggle button', () => {
    renderWithProviders(<NotFoundPage />);
    const navToggle = screen.getByRole('button', { name: /Menu/i });
    expect(navToggle).toBeInTheDocument();
  });

  it('has footer with copyright', () => {
    renderWithProviders(<NotFoundPage />);
    expect(screen.getByText(/© 2025 Finnsight/i)).toBeInTheDocument();
  });
});
