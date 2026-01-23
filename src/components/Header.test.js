import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import Header from './Header';

const renderWithProviders = (ui, { route = '/' } = {}) => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ModalProvider>{ui}</ModalProvider>
    </MemoryRouter>
  );
};

describe('Header', () => {
  it('renders without crashing', () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole('navigation', { name: /Main navigation/i })).toBeInTheDocument();
  });

  it('displays Finnsight logo', () => {
    renderWithProviders(<Header />);
    const logo = screen.getByAltText(/Finnsight/i);
    expect(logo).toBeInTheDocument();
  });

  it('has logo link to homepage', () => {
    renderWithProviders(<Header />);
    const logoLink = screen.getByRole('link', { name: /Ga naar startpagina/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('has mobile menu toggle button', () => {
    renderWithProviders(<Header />);
    const toggle = screen.getByRole('button', { name: /Menu/i });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('toggles mobile menu on button click', () => {
    renderWithProviders(<Header />);
    const toggle = screen.getByRole('button', { name: /Menu/i });

    // Initially closed
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    // Open menu
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');

    // Close menu
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('shows Vertrouwen link when not on trust page', () => {
    renderWithProviders(<Header />, { route: '/' });
    const trustLink = screen.getByRole('link', { name: /Vertrouwen/i });
    expect(trustLink).toBeInTheDocument();
    expect(trustLink).toHaveAttribute('href', '/trust');
  });

  it('shows back link when on trust page', () => {
    renderWithProviders(<Header />, { route: '/trust' });
    const backLink = screen.getByRole('link', { name: /Terug naar start/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/');
  });

  it('has Contact button', () => {
    renderWithProviders(<Header />);
    const contactButton = screen.getByRole('button', { name: /Contact/i });
    expect(contactButton).toBeInTheDocument();
  });
});
