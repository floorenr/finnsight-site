import { useRef } from 'react'
import { useModal } from '../../context/site/ModalContext'

/**
 * Unified CTA button that opens the lead capture modal.
 *
 * Variants:
 * - primary: Large button with brand styling (for hero sections)
 * - primaryLarge: Extra large primary button
 * - nav: Header navigation style
 * - text: Inline text link style
 */
export default function CTAButton({
  children = 'Vraag pilotinformatie aan',
  variant = 'primary',
  className = '',
  ...props
}) {
  const { openModal } = useModal()
  const buttonRef = useRef(null)

  const handleClick = (e) => {
    e.preventDefault()
    openModal(buttonRef)
  }

  const baseClasses = {
    primary: 'btn btn-primary',
    primaryLarge: 'btn btn-primary btn-large',
    nav: 'cta-nav',
    text: '', // Inherits link styling from parent
  }

  const variantClass = variant in baseClasses ? baseClasses[variant] : baseClasses.primary
  const classes = [variantClass, className]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      ref={buttonRef}
      type="button"
      className={classes}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
