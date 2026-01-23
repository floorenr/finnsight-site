import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LeadForm from './LeadForm';

// Mock fetch
global.fetch = jest.fn();

const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('LeadForm', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('renders all required fields', () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    expect(screen.getByLabelText(/naam/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rol/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/organisatie/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mailadres/i)).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /verstuur/i })).toBeInTheDocument();
  });

  it('shows error for empty required fields on submit', async () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/vul je naam in/i)).toBeInTheDocument();
    });
  });

  it('shows error for invalid email format', async () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), { target: { value: 'invalid-email' } });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/vul een geldig e-mailadres in/i)).toBeInTheDocument();
    });
  });

  it('requires company when role is werkgever', async () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'werkgever' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/vul je organisatie in/i)).toBeInTheDocument();
    });
  });

  it('requires consent checkbox', async () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/je moet akkoord gaan/i)).toBeInTheDocument();
    });
  });

  it('shows loading state during submission', async () => {
    fetch.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ ok: true, json: () => ({ success: true }) }), 100)
        )
    );

    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /versturen/i })).toBeDisabled();
    });
  });

  it('shows success message after successful submit', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    const onSuccess = jest.fn();
    renderWithRouter(<LeadForm onSuccess={onSuccess} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/bedankt voor je interesse/i)).toBeInTheDocument();
    });
    expect(onSuccess).toHaveBeenCalled();
  });

  it('shows error message on server error', async () => {
    fetch.mockResolvedValue({
      ok: false,
      json: () => Promise.resolve({ error: 'Server error' }),
    });

    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  it('displays privacy notice', () => {
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={jest.fn()} />);

    expect(screen.getByText(/geen financieel intakeformulier/i)).toBeInTheDocument();
  });

  it('calls onClose when clicking close button in success state', async () => {
    fetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ success: true }),
    });

    const onClose = jest.fn();
    renderWithRouter(<LeadForm onSuccess={jest.fn()} onClose={onClose} />);

    fireEvent.change(screen.getByLabelText(/naam/i), { target: { value: 'Test User' } });
    fireEvent.change(screen.getByLabelText(/rol/i), { target: { value: 'medewerker' } });
    fireEvent.change(screen.getByLabelText(/e-mailadres/i), {
      target: { value: 'test@example.com' },
    });
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: /verstuur/i }));

    await waitFor(() => {
      expect(screen.getByText(/bedankt/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: /sluiten/i }));
    expect(onClose).toHaveBeenCalled();
  });
});
