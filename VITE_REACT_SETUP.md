# VITE + REACT SETUP GUIDE

**Tech Stack:** Vite + React (Interactive prototype)
**Status:** Configuration ready, dependencies need installation
**Next Step:** Install dependencies + run dev server

---

## Quick Start

### 1. Install Dependencies

```bash
cd ~/Documents/GitHub/finnsight-site
npm install
```

This installs:
- `react` (v18.2.0) — UI framework
- `react-dom` (v18.2.0) — DOM rendering
- `@vitejs/plugin-react` (v4.2.0) — React plugin for Vite
- `vite` (v5.0.0) — Build tool

### 2. Run Development Server

```bash
npm run dev
```

Output:
```
VITE v5.0.0  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  Press h to show help
```

Open browser: **http://localhost:5173/**

### 3. Start Editing

All editable files are React components in `src/pages/`:
- `src/pages/LandingPage.jsx` — Landing page (copy + navigation)
- `src/pages/TrustPage.jsx` — Trust & compliance page (copy)
- `src/pages/DemosPage.jsx` — Interactive demo forms (state + interactivity)

Changes hot-reload automatically in browser.

### 4. Build for Production

```bash
npm run build
```

Outputs to `dist/` directory (ready for Vercel deployment).

---

## Project Structure

```
finnsight-site/
├── src/
│   ├── main.jsx                    ← React entry point
│   ├── App.jsx                     ← Router (pages logic)
│   ├── pages/
│   │   ├── LandingPage.jsx         ← Editable: landing page copy
│   │   ├── TrustPage.jsx           ← Editable: trust & compliance
│   │   └── DemosPage.jsx           ← Editable: demo forms + logic
│   └── styles/
│       └── main.css                ← Shared CSS (Phase 1 baseline)
├── index.html                      ← HTML entry point (don't edit)
├── vite.config.js                  ← Vite configuration
├── package.json                    ← Dependencies
└── dist/                           ← Build output (git-ignored)
```

---

## Workstream A: Edit Copy (LandingPage.jsx + TrustPage.jsx)

All placeholder text is in React components. Edit directly:

### Landing Page
File: `src/pages/LandingPage.jsx`
Edit these sections:
- Section 1 (`<h1>`) — Hero title
- Section 2–5 — Content text (inside `<p>`, `<li>`)
- CTAs remain as-is (mailto: links)

### Trust & Compliance
File: `src/pages/TrustPage.jsx`
Edit these sections:
- Sections 1–8 — All content text

---

## Workstream B: Interactive Demo Components

File: `src/pages/DemosPage.jsx`

### What's Already Built
- ✅ Quick-scan form (6 inputs)
- ✅ Quick-scan output visualization (range band)
- ✅ Goal-first form (goal buttons + age input)
- ✅ Goal-first output visualization (impact factors)
- ✅ State management (React hooks)
- ✅ Event handlers (form submit, button click)

### What You Can Customize
1. **Form inputs:** Values, labels, ranges
2. **Calculations:** Change illustrative math in `handleQuickScanSubmit()` (currently simplified)
3. **Output styling:** CSS classes in `src/styles/main.css`
4. **Disclaimer text:** Reword if needed (keep conservative tone)

### Example: Change Quick-Scan Calculation

Current (simplified):
```javascript
const monthlyAfterMortgage = income - mortgage - (spending * 0.5)
const pensionInput = Math.max(0, monthlyAfterMortgage * 0.12)
const lowEstimate = Math.round(pensionInput * 0.85)
const highEstimate = Math.round(pensionInput * 1.15)
```

This is **intentionally simplistic** (not engine-grade). You can make it more illustrative but **never call finnsight-core API or use real engine logic**.

---

## Workstream C: SEO + Analytics

### Meta Tags
File: `index.html` (at root)
- Add/edit meta tags (title, description, og:title, og:description)

### Analytics (Optional)
To add Plausible or Fathom:
1. Create account at https://plausible.io or https://usefathom.com
2. Add script to `index.html` `<head>`:

```html
<!-- Plausible example -->
<script defer data-domain="finnsight.app" src="https://plausible.io/js/script.js"></script>
```

### Schema (Organization)
File: `public/schema.json` (create)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Finnsight",
  "url": "https://finnsight.app",
  "description": "Deterministic financial planning for Dutch employees.",
  "areaServed": "NL"
}
```

---

## CSS: Phase 1 Branding Variables

All colors are in `src/styles/main.css`:

```css
:root {
    --color-primary: #1f2937;      /* dark slate */
    --color-secondary: #3b82f6;    /* blue (interactive) */
    --color-accent: #10b981;       /* emerald (positive) */
    /* ... more colors ... */
}
```

**To match Phase 1 baseline:**
- Change colors here
- Components automatically update

---

## Deployment Workflow

### Step 1: Test Locally
```bash
npm run dev
# Test all pages, demo interactivity
```

### Step 2: Build Production
```bash
npm run build
# Creates dist/ directory (ready for Vercel)
```

### Step 3: Deploy to Vercel
```bash
npm install -g vercel
vercel
# Select GitHub repo → auto-deployed on push
```

### Step 4: Domains
- Cloudflare: point `finnsight.app` to Vercel
- Vercel dashboard: add custom domain
- SSL auto-provisioned

---

## Styling (CSS)

All styling is in `src/styles/main.css` (no component-level CSS modules yet).

To add styles:
1. Open `src/styles/main.css`
2. Add CSS classes
3. Apply to components: `<div className="my-class">`

Example:
```css
/* Add to main.css */
.my-section {
  background: var(--color-bg-alt);
  padding: var(--spacing-lg);
}
```

```jsx
// Use in component
<section className="my-section">
  Content
</section>
```

---

## Common Tasks

### Change Demo Calculation
Edit `handleQuickScanSubmit()` in `src/pages/DemosPage.jsx`

### Add New Form Field
In `DemosPage.jsx`:
1. Add to state: `[quickScanInputs, setQuickScanInputs]`
2. Add input field
3. Add handler: `handleQuickScanChange()`

### Change Button Colors
Edit `--color-secondary` in `src/styles/main.css`

### Add Analytics
Add script to `index.html`

---

## Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 5174
```

### Clear Cache
```bash
rm -rf node_modules dist
npm install
npm run dev
```

### Build Fails
```bash
npm run build -- --debug
```

---

## Timeline (Estimated)

| Task | Time | Who |
|------|------|-----|
| Install dependencies | 5 min | CTO |
| Edit copy (A) | 2–3 days | Founder |
| Customize demos (B) | 2–3 days | Founder |
| SEO + analytics (C) | 1 day | CTO |
| Test + polish | 1–2 days | Team |
| Deploy | 1 day | CTO |
| **Total** | **~2 weeks** | Team |

---

## References

- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
- Phase 2 Spec: `../../../finnsight-core/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md`
- EXECUTION_CHECKLIST.md: Full phase-by-phase guide

---

**You're ready to code! Start with `npm install` → `npm run dev`.**
