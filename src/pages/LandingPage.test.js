// Mock IntersectionObserver for jsdom environment
beforeAll(() => {
  global.IntersectionObserver = class {
    constructor() {}
    observe() {}
    disconnect() {}
    unobserve() {}
  };
});

import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { ModalProvider } from '../context/site/ModalContext';
import LandingPage from '../pages/LandingPage';

// Helper to wrap component with Router context, HelmetProvider, and ModalProvider
const renderWithRouter = (ui) => {
  return render(
    <HelmetProvider>
      <MemoryRouter>
        <ModalProvider>{ui}</ModalProvider>
      </MemoryRouter>
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

  it('displays explainer video', () => {
    renderWithRouter(<LandingPage onNavigate={() => {}} />);
    const video = screen.getByTestId('explainer-video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('src', '/media/explainer_video.mp4');
    expect(video).toHaveAttribute('poster', '/media/explainer-video-poster.jpg');
  });
});
