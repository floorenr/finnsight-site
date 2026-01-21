# Workstream B — SEO & Discoverability Hardening

## Objective

Improve organic discoverability and clarity for search engines without compromising privacy or compliance.

## Scope

- Page-specific `<title>` and `<meta description>` for Landing, Trust, and Privacy pages
- Per-route Open Graph and Twitter metadata (best-effort in-browser)
- Add `hreflang` for NL targeting
- Replace catch-all redirects with a proper 404 page

## Definition of Done

- Each route has unique, intentional metadata in the client-rendered DOM
- Valid canonical and hreflang configuration per route
- Dedicated 404 page with user-friendly recovery
- Strong default OG/Twitter tags preserved in `index.html` for social scrapers
- No regressions in existing SEO signals

---

## Non-goals / Constraints

- **Non-goal:** Full SEO parity with SSR sites. This is a client-rendered SPA.
- **Constraint:** Per-route OG/Twitter tags may not be picked up by social scrapers without prerender/SSR. Social platforms (Facebook, X/Twitter, LinkedIn) fetch initial HTML only and do not execute JS.
- **Mitigation:** Maintain strong default OG/Twitter tags in `index.html` as fallback for social previews.

---

## Current State

- **Framework:** Vite + React + react-router-dom v7 with react-helmet-async
- **Pages:** Have basic `<title>` and `<meta description>` via Helmet
- **index.html:** Has hardcoded OG/Twitter tags pointing to root URL only
- **404:** Catch-all route renders LandingPage instead of a proper 404

---

## Implementation Plan

### Phase 1: Create SEO Infrastructure

**1.1 Create `src/utils/seo.js`** — Centralized SEO config

```js
export const SITE_CONFIG = {
  baseUrl: 'https://finnsight.app',
  siteName: 'Finnsight',
  defaultImage: 'https://finnsight.app/og-image.png',
  twitterCard: 'summary',
  locale: 'nl_NL',
  hreflang: 'nl-NL', // More precise than 'nl'
}

export const PAGE_SEO = {
  landing: {
    path: '/',
    title: 'Finnsight — Rust en inzicht voor medewerkers',
    description: 'Finnsight geeft Nederlandse medewerkers helder inzicht in hun financiële toekomst — deterministisch, privacy-first.',
    ogTitle: 'Finnsight — Inzicht in jouw financiële toekomst',
    ogDescription: 'Deterministische financiële planning voor Nederlandse medewerkers. Geen adviezen, alleen feiten.',
  },
  trust: {
    path: '/trust',
    title: 'Vertrouwen & Compliance — Finnsight',
    description: 'Hoe Finnsight deterministisch rekent, privacy bewaakt en binnen AFM-kaders blijft.',
    ogTitle: 'Vertrouwen & Compliance — Finnsight',
    ogDescription: 'Transparant uitgelegd: hoe Finnsight rekent, wat we wel/niet doen, en hoe privacy is geborgd.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy en voorwaarden — Finnsight',
    description: 'Hoe Finnsight omgaat met privacy, opslag en gebruiksvoorwaarden.',
    ogTitle: 'Privacy en voorwaarden — Finnsight',
    ogDescription: 'Kernsamenvatting van hoe wij met je gegevens en gebruik omgaan.',
  },
  notFound: {
    path: null, // 404 has no canonical
    title: 'Pagina niet gevonden — Finnsight',
    description: 'De pagina die je zocht bestaat niet of is verplaatst.',
    noIndex: true,
  },
}
```

**1.2 Create `src/components/SEOHead.jsx`** — Reusable component

Generates all SEO tags via Helmet:
- `<title>` and `<meta name="description">`
- `<link rel="canonical">` (per-page URL, absolute, no trailing slash inconsistency)
- `<link rel="alternate" hreflang="nl-NL">` and `hreflang="x-default"`
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`, `og:site_name`, `og:locale`)
- Twitter Card tags
- `<meta name="robots" content="noindex">` for 404

---

### Phase 2: Create 404 Page

**2.1 Create `src/pages/NotFoundPage.jsx`**

- Uses `SEOHead` with `noIndex: true` and `path: null` (no canonical)
- Dutch copy: "Pagina niet gevonden"
- Recovery links: Home, Trust, Privacy, Contact CTA
- Consistent layout with Header and Footer

---

### Phase 3: Update Existing Pages

Replace Helmet with SEOHead in:
- `src/pages/LandingPage.jsx`
- `src/pages/TrustPage.jsx`
- `src/pages/PrivacyTermsPage.jsx`

**Change pattern:**
```jsx
// Before
import { Helmet } from 'react-helmet-async'
<Helmet>
  <title>...</title>
  <meta name="description" content="..." />
</Helmet>

// After
import SEOHead from '../components/SEOHead'
import { PAGE_SEO } from '../utils/seo'
const seo = PAGE_SEO.landing
<SEOHead
  title={seo.title}
  description={seo.description}
  path={seo.path}
  ogTitle={seo.ogTitle}
  ogDescription={seo.ogDescription}
/>
```

---

### Phase 4: Update Routing

**4.1 Update `src/App.jsx`**

```jsx
import NotFoundPage from './pages/NotFoundPage'

// Change catch-all route from:
<Route path="*" element={<LandingPage onNavigate={handleNavigate} />} />
// To:
<Route path="*" element={<NotFoundPage />} />
```

---

### Phase 5: Minimal index.html Cleanup

**5.1 Update `index.html`** — Conservative changes only

**Keep all existing OG/Twitter tags** (social scrapers need them):
- `og:type`, `og:url`, `og:title`, `og:description`, `og:site_name`, `og:image`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- Default `<title>` and `<meta name="description">`
- Structured Data (Organization schema)

**Only remove:**
- `<link rel="canonical" href="https://finnsight.app/">` — canonical will be per-route via Helmet (falls back gracefully for scrapers)

**Rationale:** Social scrapers fetch initial HTML only. Keeping strong defaults ensures good social previews regardless of JS execution.

---

## Files Summary

| Action | File |
|--------|------|
| CREATE | `src/utils/seo.js` |
| CREATE | `src/components/SEOHead.jsx` |
| CREATE | `src/pages/NotFoundPage.jsx` |
| MODIFY | `src/pages/LandingPage.jsx` |
| MODIFY | `src/pages/TrustPage.jsx` |
| MODIFY | `src/pages/PrivacyTermsPage.jsx` |
| MODIFY | `src/App.jsx` |
| MODIFY | `index.html` |

---

## Verification

1. **Run dev server:** `npm run dev`
2. **Check each page in browser DevTools (Elements panel):**
   - `/` — Verify `<title>`, OG tags, hreflang, canonical are injected in DOM
   - `/trust` — Same checks
   - `/privacy` — Same checks
   - `/nonexistent` — Should show 404 page, verify `<meta name="robots" content="noindex">`
3. **Check what scrapers see (curl):**
   - `curl -s https://finnsight.app/ | grep -E '<title>|og:|twitter:'`
   - Confirm default OG/Twitter tags are present in raw HTML
4. **Run tests:** `npm test`
5. **Social preview validation (on deployed preview):**
   - Facebook: https://developers.facebook.com/tools/debug/
   - Twitter: https://cards-dev.twitter.com/validator
6. **Build check:** `npm run build` — Ensure no errors

---

## Future Considerations

When SEO/social preview quality becomes critical, the next step is **prerendering** at build time:
- Prerender `/`, `/trust`, `/privacy` into static HTML
- This ensures social scrapers see per-route metadata
- Tools: vite-plugin-prerender, react-snap, or similar
- Not required for this workstream; documented as the honest roadmap path
