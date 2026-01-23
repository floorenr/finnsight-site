import { useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useModal } from '../../context/site/ModalContext';
import LeadForm from '../LeadForm/LeadForm';
import './LeadModal.css';

const FOCUSABLE_SELECTORS = [
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  'a[href]',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

export default function LeadModal() {
  const { isOpen, closeModal } = useModal();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus close button on open, manage body scroll
  // Note: focus return to trigger is handled by ModalContext
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  // Focus trap
  const handleKeyDown = useCallback((e) => {
    if (e.key !== 'Tab' || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(FOCUSABLE_SELECTORS);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: if on first element, move to last
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: if on last element, move to first
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, []);

  const handleFormSuccess = () => {
    // Keep modal open to show success state
    // User can close manually
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" aria-hidden="false">
      <div
        ref={modalRef}
        className="modal-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onKeyDown={handleKeyDown}
      >
        <div className="modal-header">
          <h2 id="modal-title" className="modal-title">
            Vraag pilotinformatie aan
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            className="modal-close"
            onClick={closeModal}
            aria-label="Sluiten"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="modal-body">
          <p className="modal-intro">
            Vul je gegevens in en ontvang informatie over deelname aan de Finnsight pilot.
          </p>
          <LeadForm onSuccess={handleFormSuccess} onClose={closeModal} />
        </div>
      </div>
    </div>,
    document.body
  );
}
