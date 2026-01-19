export default function ExplainerVideo() {
  return (
    <div className="explainerVideoCard">
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
      <p className="explainerVideoCaption">
        Transparant rekenen. Controleerbare uitkomsten.
      </p>
    </div>
  )
}
