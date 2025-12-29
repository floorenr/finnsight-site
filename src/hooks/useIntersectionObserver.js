import { useEffect, useRef } from 'react'

export default function useIntersectionObserver(options = {}) {
  const elementRef = useRef(null)
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [defaultOptions])

  return elementRef
}

// Initialize global observer for all animatable elements
export function initializeGlobalObserver(options = {}) {
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

  // Observe all elements that need animation
  const sectionsToObserve = document.querySelectorAll(
    '.section, .mock-grid > article, .problems-grid > article'
  )
  
  sectionsToObserve.forEach((element) => {
    observer.observe(element)
  })

  return observer
}
