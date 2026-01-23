import { useEffect, useRef, useMemo } from 'react'

export default function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)

  // Memoize options to prevent effect re-runs on every render
  const observerOptions = useMemo(() => ({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }), [options.threshold, options.rootMargin, options.root])

  useEffect(() => {
    // Fallback: if IntersectionObserver is unsupported, show element immediately
    if (typeof IntersectionObserver === 'undefined') {
      if (elementRef.current) {
        elementRef.current.classList.add('is-visible')
      }
      return
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [observerOptions])

  return elementRef
}

// Initialize global observer for all animatable elements
export function initializeGlobalObserver(options = {}) {
  // Selector for elements that should animate on scroll
  const selector = '.section, .mock-grid > article, .problems-grid > article'
  const sectionsToObserve = document.querySelectorAll(selector)

  // Fallback: if IntersectionObserver is unsupported, show all elements immediately
  if (typeof IntersectionObserver === 'undefined') {
    sectionsToObserve.forEach((element) => {
      element.classList.add('is-visible')
    })
    return null
  }

  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, defaultOptions)

  sectionsToObserve.forEach((element) => {
    observer.observe(element)
  })

  return observer
}
