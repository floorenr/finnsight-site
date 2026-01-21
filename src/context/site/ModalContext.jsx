/**
 * Website-only UI state for lead capture modal.
 * NOT used in product apps - scoped to marketing site only.
 */

import { createContext, useContext, useState, useCallback } from 'react'

const ModalContext = createContext(null)

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [triggerRef, setTriggerRef] = useState(null)

  const openModal = useCallback((ref = null) => {
    setTriggerRef(ref)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    // Return focus to trigger element after modal closes
    if (triggerRef?.current) {
      setTimeout(() => {
        triggerRef.current?.focus()
      }, 0)
    }
    setTriggerRef(null)
  }, [triggerRef])

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
