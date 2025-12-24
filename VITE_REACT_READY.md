# VITE + REACT SETUP COMPLETE ✅

**Date:** 24 Dec 2025
**Decisions:** Locked & Implemented
**Status:** Ready for development

---

## 🎯 Decisions Locked

- ✅ **Tech Stack:** Vite + React (interactive, founder control)
- ✅ **Designer:** Founder-led (templates + customization)
- ✅ **Demo Fidelity:** Interactive prototype (React state management)

---

## 📦 What's Ready (100%)

### Configuration Files
- ✅ `vite.config.js` — Vite build configuration
- ✅ `package.json` — React + Vite dependencies
- ✅ `index.html` — Entry point (React root)

### React Components (Editable)
1. ✅ `src/App.jsx` — Router (page navigation)
2. ✅ `src/main.jsx` — React entry point
3. ✅ `src/pages/LandingPage.jsx` — Landing page (7 sections)
4. ✅ `src/pages/TrustPage.jsx` — Trust & compliance (8 sections)
5. ✅ `src/pages/DemosPage.jsx` — Interactive demos (state management)

### Styling
- ✅ `src/styles/main.css` — Phase 1 branding variables + component styles

### Documentation
- ✅ `VITE_REACT_SETUP.md` — Quick-start guide for React development

---

## 🚀 Next Steps (3 Workstreams)

### Workstream A: Copy (Founder, 2–3 days)

**Files to edit:**
- `src/pages/LandingPage.jsx` — Fill in 7 sections
- `src/pages/TrustPage.jsx` — Fill in 8 sections

**How to edit:**
1. Open file in editor
2. Find `<h2>` and `<p>` tags
3. Replace placeholder text with governance-aligned copy
4. Save → hot-reload in browser

**Sources:**
- Strategic Foundation v1.0
- AI Roles & Governance v1.0
- Phase 2 spec

---

### Workstream B: Interactive Demos (Founder, 2–3 days)

**File to customize:**
- `src/pages/DemosPage.jsx` — Demo forms + interactivity

**What's already built:**
- ✅ Quick-scan form (6 inputs, state management, submit handler)
- ✅ Quick-scan output (range band visualization)
- ✅ Goal-first form (goal buttons, age input)
- ✅ Goal-first output (impact factors)

**What to customize:**
1. **Input values:** Labels, ranges, defaults
2. **Calculations:** Currently simplistic (intentional — keep non-canonical)
3. **Output text:** Disclaimers, impact descriptions
4. **Button styling:** Edit CSS in `src/styles/main.css`

**DO NOT:**
- Call finnsight-core API
- Use real engine logic
- Store PII

---

### Workstream C: SEO + Analytics (CTO, 1 day)

**Files to edit:**
- `index.html` — Meta tags + analytics script
- `public/schema.json` — Organization schema (create)

**Tasks:**
1. Update meta tags (title, description, OG tags)
2. Add privacy-respecting analytics (Plausible/Fathom, optional)
3. Create organization schema

---

## 🏃 How to Start Development

### Step 1: Install Dependencies
```bash
cd ~/Documents/GitHub/finnsight-site
npm install
```

### Step 2: Run Dev Server
```bash
npm run dev
```

Open: **http://localhost:5173/**

### Step 3: Edit & Hot-Reload
- Edit `src/pages/LandingPage.jsx`
- Save
- Browser auto-updates

### Step 4: Build for Production
```bash
npm run build
```

Output: `dist/` (ready for Vercel)

---

## 📝 File Structure Reference

```
finnsight-site/
├── src/
│   ├── main.jsx                 ✅ React entry (do not edit)
│   ├── App.jsx                  ✅ Router/navigation (do not edit)
│   ├── pages/
│   │   ├── LandingPage.jsx      🟡 Edit: copy + CTA text
│   │   ├── TrustPage.jsx        🟡 Edit: copy text
│   │   └── DemosPage.jsx        🟡 Edit: demo forms, text, interactivity
│   └── styles/
│       └── main.css             🟡 Edit: colors, fonts, custom styles
├── index.html                   🟡 Edit: meta tags, analytics script
├── public/
│   ├── sitemap.xml              ✅ Ready
│   ├── robots.txt               ✅ Ready
│   └── schema.json              🟡 Create: org schema
├── vite.config.js               ✅ Build config (do not edit)
├── package.json                 ✅ Dependencies (do not edit)
├── VITE_REACT_SETUP.md          📖 Development guide
└── dist/                        (created after npm build)
```

**Legend:**
- ✅ = Ready, do not edit
- 🟡 = Edit for your content
- 📖 = Reference doc

---

## 💡 Key Features

### Interactive Demo Components
Both demos use **React state** (`useState` hook):
- Form inputs bound to state
- Submit handlers process inputs
- Output conditionally rendered
- **No backend calls** (client-side only)
- **No PII storage** (values exist only in browser memory)

### Hot Module Replacement (HMR)
- Edit files → browser auto-updates
- No manual refresh needed
- Preserves component state during editing

### Single-Page App (SPA)
- Navigation between pages WITHOUT page reloads
- Smooth user experience
- Shared header/footer across pages

---

## 🔒 Governance Constraints

### Already Enforced
- ✅ No finnsight-core imports
- ✅ No API calls to finnsight-core
- ✅ Demos are non-canonical (illustrative data only)
- ✅ No user accounts or authentication
- ✅ No PII persistence

### To Verify (Founder)
- [ ] Copy matches governance documents
- [ ] Disclaimers explicit ("illustrative", "not engine-ready")
- [ ] CTA mechanics safe (mailto: or ephemeral form only)
- [ ] Demo outputs don't make guarantees

---

## 📅 Timeline (Vite + React Path)

```
Day 1 (Now): Vite + React setup ✅
Days 2–3: Workstream A (copy)
Days 2–3: Workstream B (demo customization)
Day 4: Workstream C (SEO + analytics)
Days 5–6: Test + polish locally
Days 7: Deploy (npm build + Vercel + domains)
```

**Hard deadline:** End of week 3 (per ROADMAP_v5 slip rule)

---

## 🎨 Styling: Phase 1 Branding

Colors are CSS variables in `src/styles/main.css`:

```css
:root {
    --color-primary: #1f2937;      /* dark slate */
    --color-secondary: #3b82f6;    /* blue */
    --color-accent: #10b981;       /* emerald */
}
```

To match Phase 1 baseline:
1. Update color values in CSS
2. All components automatically use new colors

---

## ✅ Pre-Development Checklist

Before you start editing:

- [ ] Read `VITE_REACT_SETUP.md` (development guide)
- [ ] Run `npm install` (dependencies)
- [ ] Run `npm run dev` (verify it works)
- [ ] Open `http://localhost:5173/` (view app)
- [ ] Edit a test field (verify hot-reload works)
- [ ] Review governance constraints (above)

---

## 🚨 Common Mistakes to Avoid

❌ **Call finnsight-core API in demo calculations**
✅ Use illustrative, client-side math only

❌ **Store form inputs to localStorage or database**
✅ Keep inputs in React state (ephemeral only)

❌ **Add new claims to copy**
✅ Reference only existing governance documents

❌ **Make demo outputs look "final" or "complete"**
✅ Always include disclaimers ("illustrative", "not engine-ready")

---

## 📚 Reference Documents

**In finnsight-site repo:**
- [VITE_REACT_SETUP.md](VITE_REACT_SETUP.md) ← Read this first!
- [EXECUTION_CHECKLIST.md](EXECUTION_CHECKLIST.md) — Phase-by-phase guide
- [BUILD_SUMMARY.md](BUILD_SUMMARY.md) — Overview

**In finnsight-core repo:**
- [PHASE_2_ONLINE_PRESENCE.md](../../../finnsight-core/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md) — Phase 2 spec
- [DECISION_LOG.md](../../../finnsight-core/docs/governance/DECISION_LOG.md) — Governance decisions

---

## 🎯 Ready to Code?

1. **Read:** `VITE_REACT_SETUP.md` (quick-start guide)
2. **Install:** `npm install`
3. **Run:** `npm run dev`
4. **Edit:** `src/pages/LandingPage.jsx` (copy work)
5. **Test:** Browser at `http://localhost:5173/`

**You're ready. Let's ship Phase 2.** 🚀

---

**Questions?**
- Quick start: See `VITE_REACT_SETUP.md`
- Detailed phases: See `EXECUTION_CHECKLIST.md`
- Governance: See `DECISION_LOG.md` in finnsight-core

**Status:** ✅ All infrastructure ready. Waiting for content work (Workstreams A–C).
