import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ModalProvider, useModal } from '../../context/site/ModalContext'
import LeadModal from './LeadModal'

// Helper to render with required providers
const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <ModalProvider>{ui}</ModalProvider>
    </MemoryRouter>
  )
}

// Component to trigger modal open
function ModalTrigger() {
  const { openModal, isOpen } = useModal()
  return (
    <>
      <button onClick={() => openModal()}>Open Modal</button>
      <span data-testid="modal-state">{isOpen ? 'open' : 'closed'}</span>
    </>
  )
}

describe('LeadModal', () => {
  it('does not render when closed', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders when opened', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('has correct aria attributes', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    const dialog = screen.getByRole('dialog')
    expect(dialog).toHaveAttribute('aria-modal', 'true')
    expect(dialog).toHaveAttribute('aria-labelledby', 'modal-title')
  })

  it('displays modal title', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByText('Vraag pilotinformatie aan')).toBeInTheDocument()
  })

  it('closes when clicking close button', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('Sluiten'))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('closes when pressing Escape key', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('does NOT close when clicking overlay background (prevents accidental data loss)', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    // Click on the overlay (parent of dialog) - should NOT close
    const overlay = screen.getByRole('dialog').parentElement
    fireEvent.click(overlay)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('contains lead capture form', () => {
    renderWithProviders(
      <>
        <ModalTrigger />
        <LeadModal />
      </>
    )

    fireEvent.click(screen.getByText('Open Modal'))
    expect(screen.getByLabelText(/naam/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rol/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/e-mailadres/i)).toBeInTheDocument()
  })
})
