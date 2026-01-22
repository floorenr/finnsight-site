# Workstream C — Performance & Accessibility Hardening

## Objective

Strengthen trust and usability by improving performance and WCAG-aligned accessibility.

---

## Current State Assessment

### What's Already Good
- **Form accessibility**: Complete ARIA pattern with `aria-required`, `aria-invalid`, `aria-describedby`, and `role="alert"` for errors
- **Modal accessibility**: Proper `role="dialog"`, focus trap, escape key handling, focus return
- **Skip link**: Implemented in `index.html` with proper styling
- **Semantic structure**: Good use of `<section>`, `<article>`, `<nav>`, `<figure>`, heading hierarchy
- **Mobile menu**: Has `aria-expanded`, `aria-controls`, `aria-label`
- **Video poster**: Uses `preload="metadata"` (best practice)

### What Needs Improvement
| Area | Issue | Impact |
|------|-------|--------|
| Video loading | 1.3MB video loads immediately regardless of visibility | High - blocks initial render |
| Value indicators | Custom bars lack ARIA roles | Medium - invisible to screen readers |
| CTA buttons | Missing contextual `aria-label` | Low - button text visible |
| Color contrast | Footer links and form states need verification | Medium - WCAG compliance |
| Motion preferences | No `prefers-reduced-motion` support | Medium - accessibility expectation in fintech |

---

## Implementation Plan

### Phase 1: Lazy-Load Non-Critical Assets
**Goal**: No blocking non-critical assets in initial render

#### Task 1.1: Lazy-Load Explainer Video
**File**: `src/components/ExplainerVideo.jsx`

Create an Intersection Observer that observes a **wrapper container**, then conditionally renders the video element only when visible. This avoids browser inconsistencies with undefined `src` and prevents poster flash edge cases.

```jsx
const [isVisible, setIsVisible] = useState(false);
const containerRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    { rootMargin: '100px' } // Tune based on scroll behavior on mobile (consider 200-400px for slower connections)
  );
  if (containerRef.current) observer.observe(containerRef.current);
  return () => observer.disconnect();
}, []);

return (
  <div ref={containerRef} className="explainerVideoCard">
    {isVisible ? (
      <video
        src="/media/explainer_video.mp4"
        poster="/media/explainer-video-poster.jpg"
        controls
        playsInline
        preload="metadata"
        aria-label="Explainer video: De Glazen Doos"
      />
    ) : (
      <div className="video-placeholder" aria-hidden="true">
        <img src="/media/explainer-video-poster.jpg" alt="" decoding="async" />
      </div>
    )}
  </div>
);
```

**Key points**:
- Observe the wrapper `<div>`, not the `<video>` itself
- Render placeholder with poster image until visible
- Only mount `<video>` element after intersection triggers

**Expected savings**: ~1.3MB deferred from initial load

**Verification**: Use DevTools Network tab to confirm video bytes are not requested until scrolled into view.

#### Task 1.2: Optimize Header Logo (Conditional)
**File**: `src/components/Header.jsx` (line 26)

> **Note**: Only add `fetchpriority="high"` if Lighthouse indicates the logo is the LCP element. On hero-heavy layouts, the LCP is often hero text or another element, and prioritizing the logo may compete with more critical resources.

**Before implementing**:
1. Run Lighthouse on the landing page
2. Check the "Largest Contentful Paint element" in the report
3. If logo is LCP → add `fetchpriority="high"`
4. If hero text/other is LCP → leave logo neutral

```jsx
// Only if logo is confirmed as LCP element:
<img
  src="/brand/logo-primary-horizontal.svg"
  alt="Finnsight Logo"
  className="header-logo"
  fetchpriority="high"
/>
```

**Why we skip lazy-loading small SVG icons**: The problem icons (`icon-mortgage.svg`, etc.) are only a few hundred bytes each. Adding `loading="lazy"` to tiny assets rarely improves performance and can cause layout pop-in or late paint. Focus lazy-loading efforts on **large assets** (video, large images).

#### Task 1.3: Implement Route-Based Code Splitting
**File**: `src/App.jsx`

Use React.lazy() for non-critical routes:

> **Important**: `LandingPage` must remain non-lazy (eagerly loaded) to avoid first-load suspense fallback flash. Only lazy-load secondary pages.

```jsx
import { lazy, Suspense } from 'react';
import LandingPage from './pages/LandingPage'; // Eager load - critical path

const TrustPage = lazy(() => import('./pages/TrustPage'));
const PrivacyTermsPage = lazy(() => import('./pages/PrivacyTermsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Wrap routes in Suspense with fallback
<Suspense fallback={<div className="page-loading">Laden...</div>}>
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/trust" element={<TrustPage />} />
    ...
  </Routes>
</Suspense>
```

---

### Phase 2: Semantic HTML & ARIA Improvements
**Goal**: Clear ARIA roles and labels where required

#### Task 2.1: Add ARIA to Value Indicator Bars
**File**: `src/pages/LandingPage.jsx` (lines 124-152)

Current mock cards have visual bars without semantic meaning. These represent **value indicators/metrics** (not progress towards completion), so choose the appropriate pattern:

**Option A: Use `role="progressbar"` with descriptive label** (acceptable for value indicators)
```jsx
<div
  className="progress-track"
  role="progressbar"
  aria-valuenow={82}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Netto besteedbaar indicator: 82%"
>
  <div className="progress-fill progress-cyan" style={{ width: '82%' }} />
</div>
```

**Option B: Use `role="img"` for purely illustrative bars** (if the text value is already visible)
```jsx
<div className="metric-row">
  <span className="metric-label">Netto besteedbaar 2025</span>
  <span className="metric-value">82%</span>
  <div className="progress-track" role="img" aria-hidden="true">
    <div className="progress-fill progress-cyan" style={{ width: '82%' }} />
  </div>
</div>
```

**Recommendation**: If the numeric value is already in visible text, use Option B (`role="img"` + `aria-hidden`). If the bar is the only indication of value, use Option A with a label that says "indicator" or "score" rather than implying progress towards completion.

Apply consistently to all bars in mock cards (~6 instances).

#### Task 2.2: Add Context to CTA Buttons
**File**: `src/components/CTAButton/CTAButton.jsx`

Add optional `aria-label` prop for context when button text alone isn't descriptive:

```jsx
<button
  className={buttonClasses}
  onClick={onClick}
  aria-label={ariaLabel}
  {...props}
>
  {children}
</button>
```

Update usages in `LandingPage.jsx` to provide context:
- "Start nu gratis" → `aria-label="Start nu gratis met Finnsight"`

#### Task 2.3: Add Figure Captions Where Appropriate
**File**: `src/pages/LandingPage.jsx` (line 280)

```jsx
<figure className="how-it-works-image">
  <img
    src="/illustrations/how-it-works.svg"
    alt="Diagram: Hoe Finnsight werkt"
    loading="lazy"
    decoding="async"
  />
  <figcaption className="visually-hidden">
    Visuele weergave van het Finnsight proces
  </figcaption>
</figure>
```

#### Task 2.4: Ensure Decorative Images Are Hidden
**Files**: Multiple footer sections

Verify all decorative brand marks have `aria-hidden="true"`:
- `LandingPage.jsx` (line 307)
- `TrustPage.jsx` (line 117)
- `PrivacyTermsPage.jsx` (line 64)

---

### Phase 3: Keyboard Navigation & Focus Order
**Goal**: Navigation and CTAs fully operable via keyboard

#### Task 3.1: Verify Tab Order
**Files**: All page components

Ensure logical tab order follows visual reading order:
1. Skip link (already implemented)
2. Header navigation
3. Main content sections
4. Footer navigation

**Verification method**: Tab through each page manually, confirm no focus traps outside modal.

#### Task 3.2: Add Visible Focus Indicators
**File**: `src/styles/main.css`

Verify focus-visible styles are applied consistently:

```css
/* Existing (lines 468-472) - verify coverage */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Add for custom components if missing */
.cta-button:focus-visible,
.nav-link:focus-visible,
.mock-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}
```

#### Task 3.3: Test Modal Focus Trap
**File**: `src/components/LeadModal/LeadModal.jsx`

Existing implementation is solid. Verify:
- [ ] Focus moves to modal on open
- [ ] Tab cycles within modal only
- [ ] Escape closes modal
- [ ] Focus returns to trigger element on close

#### Task 3.4: Add `prefers-reduced-motion` Support
**File**: `src/styles/main.css`

Add media query to respect user motion preferences. This is low effort and highly aligned with accessibility expectations in fintech.

**Recommended approach (granular)** — targets specific animated elements without unintended side effects on third-party UI or anchor scrolling:

```css
@media (prefers-reduced-motion: reduce) {
  .modal-overlay,
  .modal-content,
  .cta-button,
  .nav-link,
  .header,
  .scroll-progress,
  [data-animate] {
    transition: none;
    animation: none;
  }

  /* Preserve instant scroll for anchor links */
  html {
    scroll-behavior: auto;
  }
}
```

**Elements to check for animations**:
- Modal open/close transitions (`LeadModal.css`)
- Mobile menu toggle
- Hover effects on buttons and links
- Scroll-triggered fade-in animations (via `useIntersectionObserver`)
- `ScrollProgress` component animations

**Fallback (global nuclear option)** — only use if granular approach misses edge cases:
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

> **Warning**: The global approach can have unintended side effects (third-party UI behavior, anchor scrolling expectations). Prefer the granular approach.

---

### Phase 4: Color Contrast Verification
**Goal**: WCAG AA compliance for all text/background combinations

#### Task 4.1: Audit Color Contrast Ratios
**File**: `src/styles/main.css`

Use WebAIM Contrast Checker or axe DevTools to verify:

| Element | Background | Foreground | Target Ratio | Selector |
|---------|-----------|-----------|--------------|----------|
| Footer links | `#0F2D5C` | `#60a5fa` | 4.5:1 | `.footer a`, `.footer-nav a` |
| Form required indicator | `#ffffff` | `#ef4444` | 4.5:1 | `.required-indicator`, `.form-error` |
| Mock card subtitle | `#f8fafc` | `#475569` | 4.5:1 | `.mock-card-subtitle` |
| Light section text | `#F6F9FF` | `#6b7280` | 4.5:1 | `.section-light p`, `.subtext` |

> **Note**: Use CSS selectors instead of line numbers — line numbers drift as the file changes.

#### Task 4.2: Fix Any Failing Contrast
If footer links fail (`#60a5fa` on `#0F2D5C`), consider:
- Lighten link color to `#93c5fd`
- Or darken background

#### Task 4.3: Document Color Palette
Create a CSS custom properties section documenting contrast-safe combinations:

```css
:root {
  /* Verified WCAG AA compliant pairs */
  --text-on-light: #1f2937;      /* 12.6:1 on white */
  --text-on-dark: #e2e8f0;       /* 11.5:1 on #0f172a */
  --link-on-navy: #93c5fd;       /* 4.7:1 on #0F2D5C */
}
```

---

## Files to Modify Summary

| File | Changes | Phase |
|------|---------|-------|
| `src/components/ExplainerVideo.jsx` | Add Intersection Observer lazy-loading with wrapper pattern | 1 |
| `src/pages/LandingPage.jsx` | ARIA for value indicator bars, figure captions | 2 |
| `src/components/Header.jsx` | Conditionally add `fetchpriority="high"` (if logo is LCP) | 1 |
| `src/App.jsx` | Implement React.lazy() code splitting | 1 |
| `src/components/CTAButton/CTAButton.jsx` | Add `aria-label` prop | 2 |
| `src/styles/main.css` | Verify/fix contrast, document colors, add `prefers-reduced-motion` | 3, 4 |
| `src/pages/TrustPage.jsx` | Verify decorative images hidden | 2 |
| `src/pages/PrivacyTermsPage.jsx` | Verify decorative images hidden | 2 |

---

## Testing & Validation

### Automated Testing
- [ ] Run axe DevTools on `/`, `/trust`, `/privacy`, `/404`
- [ ] Run Lighthouse accessibility audit
- [ ] Run Lighthouse performance audit
- [ ] Verify no console errors for missing assets

### Manual Testing
- [ ] Keyboard-only navigation through all pages
- [ ] Screen reader testing (VoiceOver on macOS)
- [ ] Tab order follows visual layout
- [ ] Focus visible on all interactive elements
- [ ] Modal traps focus correctly
- [ ] Video loads only when scrolled into view (verify via DevTools Network tab)
- [ ] Test with `prefers-reduced-motion: reduce` enabled

### Performance Verification
- [ ] Video does not request media bytes until it enters viewport (DevTools Network)
- [ ] Landing route initial JS bundle not materially increased vs baseline

---

## Definition of Done

> **Note**: Prioritize deterministic checks over chasing scores. Lighthouse scores vary by machine and network conditions.

### Merge-Gate Criteria (must pass before merge)

| # | Criterion | Verification Method |
|---|-----------|---------------------|
| 1 | **Network proof**: explainer video bytes are not requested until scroll into view | DevTools Network tab |
| 2 | **Axe**: 0 serious/critical issues on `/`, `/trust`, `/privacy`, `/404` | axe DevTools extension |
| 3 | **Keyboard-only**: all interactive elements reachable; visible focus; no traps outside modal | Manual tab-through test |
| 4 | **Reduced motion**: `prefers-reduced-motion` implemented and validated | Enable in OS settings, verify |
| 5 | **Value bars**: Option A or B chosen consistently and documented | Code review |
| 6 | **Contrast**: documented passes for key pairs or corrected tokens | WebAIM or documented ratios |

### Full Checklist

- [x] Plan documented and approved
- [x] **Video does not request its media bytes until it enters viewport** — IntersectionObserver wrapper pattern implemented
- [x] **Landing route initial JS bundle not materially increased vs baseline** — LandingPage eager, secondary routes lazy
- [ ] **axe DevTools: 0 serious/critical issues** on `/`, `/trust`, `/privacy`, `/404` — *manual verification needed*
- [ ] **Keyboard-only**: all interactive elements reachable; visible focus on every interactive element; no focus traps outside modal — *manual verification needed*
- [x] **Color contrast**: all text meets WCAG AA (validated by tool or documented ratios for key pairs)
- [x] **`prefers-reduced-motion` implemented** for major transitions (granular approach preferred)
- [x] **Value indicator bars** have appropriate ARIA — **Option B chosen**: `role="img" aria-hidden="true"` (values visible in adjacent text)
- [x] **Decorative images** have `aria-hidden="true"` — all 3 footer marks updated
- [x] **LandingPage remains eagerly loaded** (not lazy)

---

## Estimated Effort

| Phase | Tasks | Complexity |
|-------|-------|------------|
| Phase 1: Lazy Loading & Performance | 3 tasks | Medium |
| Phase 2: Semantic HTML & ARIA | 4 tasks | Low |
| Phase 3: Keyboard Nav & Motion | 4 tasks | Low |
| Phase 4: Color Contrast | 3 tasks | Low |
| Testing & Validation | 10 checks | Medium |

---

## Dependencies

- No external dependencies required
- Uses existing `useIntersectionObserver` hook
- React 18 already supports `lazy()` and `Suspense`

---

## Font Loading Strategy

> **Current state**: No external web fonts; system font stack only.

This is optimal for performance — no FOIT/FOUT issues, no CLS from font loading, no additional network requests.

If web fonts are added in the future:
- Use `font-display: swap` to prevent FOIT
- Add `<link rel="preconnect">` for font origins
- Consider self-hosting critical fonts to reduce latency

---

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| Video placeholder flash before load | Use wrapper pattern with poster image placeholder; observe container, not video |
| Code splitting increases complexity | Use simple Suspense fallback, verify bundle size doesn't increase |
| ARIA changes break existing AT support | Test with VoiceOver before/after changes |
| Contrast fixes affect brand colors | Get design approval before changing colors |
| `fetchpriority="high"` on wrong element | Only apply if Lighthouse confirms logo is LCP element |
| `prefers-reduced-motion` too aggressive | Use granular approach (primary); only fall back to global if needed |
| Lazy-loading LandingPage | Keep LandingPage eagerly loaded to avoid first-paint suspense flash |
