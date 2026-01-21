import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import Header from '../components/Header'
import CTAButton from '../components/CTAButton/CTAButton'
import { PAGE_SEO } from '../utils/seo'

export default function NotFoundPage() {
  const seo = PAGE_SEO.notFound

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        path={seo.path}
        noIndex={seo.noIndex}
      />
      <Header />

      <main className="content" id="main-content">
        <h1>Pagina niet gevonden</h1>
        <p className="lead">
          De pagina die je zocht bestaat niet of is verplaatst.
        </p>

        <section>
          <h2>Wat kun je doen?</h2>
          <ul>
            <li>
              <Link to="/">Ga naar de startpagina</Link> voor een overzicht van Finnsight
            </li>
            <li>
              <Link to="/trust">Lees over vertrouwen en compliance</Link>
            </li>
            <li>
              <Link to="/privacy">Bekijk onze privacy en voorwaarden</Link>
            </li>
          </ul>
          <p className="mt-lg">
            Denk je dat dit een fout is? <CTAButton variant="text">Neem contact met ons op</CTAButton>.
          </p>
        </section>
      </main>

      <footer className="footer">
        <img src="/brand/mark-on-dark.svg" alt="Finnsight" className="footer-mark" />
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link to="/">Start</Link>
          <span className="divider-muted">|</span>
          <Link to="/trust">Vertrouwen & Compliance</Link>
          <span className="divider-muted">|</span>
          <CTAButton variant="text" className="footer-cta-link">Contact</CTAButton>
        </nav>
        <p className="footer-note">&copy; 2025 Finnsight</p>
      </footer>
    </>
  )
}
