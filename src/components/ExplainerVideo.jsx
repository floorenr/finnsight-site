import { useState, useEffect, useRef } from 'react'

export default function ExplainerVideo() {
  // If IntersectionObserver is unsupported, show video immediately
  const [isVisible, setIsVisible] = useState(() => typeof IntersectionObserver === 'undefined')
  const containerRef = useRef(null)

  useEffect(() => {
    // Fallback for browsers without IntersectionObserver
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' } // Tune based on scroll behavior on mobile (consider 200-400px for slower connections)
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="explainerVideoCard">
      {isVisible ? (
        <video
          className="explainerVideo"
          src="/media/explainer_video.mp4"
          poster="/media/explainer-video-poster.jpg"
          controls
          playsInline
          preload="metadata"
          data-testid="explainer-video"
          aria-label="Explainer video: De Glazen Doos"
        >
          <p className="explainerVideoFallback">
            Je browser ondersteunt geen video. <a href="/media/explainer_video.mp4" download>Download de video</a>.
          </p>
        </video>
      ) : (
        <div className="video-placeholder" aria-hidden="true">
          <img
            src="/media/explainer-video-poster.jpg"
            alt=""
            className="explainerVideo"
            decoding="async"
          />
        </div>
      )}
      <p className="explainerVideoCaption">
        Transparant rekenen. Controleerbare uitkomsten.
      </p>
    </div>
  )
}
