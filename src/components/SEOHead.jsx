import { Helmet } from 'react-helmet-async'
import { SITE_CONFIG } from '../utils/seo'

/**
 * SEOHead component - Manages all SEO-related meta tags per page
 *
 * @param {string} title - Page title
 * @param {string} description - Meta description
 * @param {string|null} path - URL path (e.g., '/', '/trust') - null for 404
 * @param {string} [ogTitle] - Open Graph title (defaults to title)
 * @param {string} [ogDescription] - Open Graph description (defaults to description)
 * @param {string} [ogImage] - Open Graph image URL (defaults to site default)
 * @param {string} [ogType='website'] - Open Graph type
 * @param {boolean} [noIndex=false] - Whether to add noindex,nofollow (for 404)
 */
export default function SEOHead({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  noIndex = false,
}) {
  const { baseUrl, siteName, defaultImage, twitterCard, locale, hreflang } = SITE_CONFIG
  const canonicalUrl = path !== null ? `${baseUrl}${path}` : null
  const fullOgImage = ogImage || defaultImage

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Robots directive for 404 */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL (not for 404) */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* hreflang tags (not for 404) */}
      {canonicalUrl && <link rel="alternate" hrefLang={hreflang} href={canonicalUrl} />}
      {canonicalUrl && <link rel="alternate" hrefLang="x-default" href={baseUrl} />}

      {/* Open Graph tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={fullOgImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter Card tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={fullOgImage} />
    </Helmet>
  )
}
