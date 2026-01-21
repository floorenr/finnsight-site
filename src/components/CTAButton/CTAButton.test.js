import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ModalProvider, useModal } from '../../context/site/ModalContext'
import CTAButton from './CTAButton'

// Helper to render with required providers
const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter>
      <ModalProvider>{ui}</ModalProvider>
    </MemoryRouter>
  )
}

// Component to check modal state
function ModalStateChecker() {
  const { isOpen } = useModal()
  return <span data-testid="modal-state">{isOpen ? 'open' : 'closed'}</span>
}

describe('CTAButton', () => {
  it('renders with default text', () => {
    renderWithProviders(<CTAButton />)
    expect(screen.getByRole('button', { name: /vraag pilotinformatie aan/i })).toBeInTheDocument()
  })

  it('renders with custom text', () => {
    renderWithProviders(<CTAButton>Custom CTA</CTAButton>)
    expect(screen.getByRole('button', { name: /custom cta/i })).toBeInTheDocument()
  })

  it('renders with primary variant', () => {
    renderWithProviders(<CTAButton variant="primary">Primary</CTAButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn', 'btn-primary')
  })

  it('renders with primaryLarge variant', () => {
    renderWithProviders(<CTAButton variant="primaryLarge">Large</CTAButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('btn', 'btn-primary', 'btn-large')
  })

  it('renders with nav variant', () => {
    renderWithProviders(<CTAButton variant="nav">Nav</CTAButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('cta-nav')
  })

  it('renders with text variant (no special class)', () => {
    renderWithProviders(<CTAButton variant="text">Text Link</CTAButton>)
    const button = screen.getByRole('button')
    expect(button).not.toHaveClass('btn')
    expect(button).not.toHaveClass('cta-nav')
  })

  it('opens modal when clicked', () => {
    renderWithProviders(
      <>
        <CTAButton>Click me</CTAButton>
        <ModalStateChecker />
      </>
    )

    expect(screen.getByTestId('modal-state')).toHaveTextContent('closed')

    fireEvent.click(screen.getByRole('button', { name: /click me/i }))

    expect(screen.getByTestId('modal-state')).toHaveTextContent('open')
  })

  it('accepts additional className', () => {
    renderWithProviders(<CTAButton className="custom-class">Button</CTAButton>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('passes through additional props', () => {
    renderWithProviders(<CTAButton data-testid="custom-button" aria-label="Custom label">Button</CTAButton>)
    const button = screen.getByTestId('custom-button')
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })
})
