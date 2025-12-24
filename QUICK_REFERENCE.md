# PHASE 2 QUICK REFERENCE CARD

**Tech Stack:** Vite + React (Interactive prototype)
**Status:** Infrastructure 100% ready | Content pending

---

## 🚀 5-Minute Quick Start

```bash
# 1. Install dependencies
cd ~/Documents/GitHub/finnsight-site
npm install

# 2. Start dev server
npm run dev

# 3. Open browser
http://localhost:5173/
```

**That's it.** You now have:
- ✅ Landing page (editable React component)
- ✅ Trust & compliance page (editable React component)
- ✅ Interactive demo forms (quick-scan + goal-first)
- ✅ Hot-reload (auto-update when you save)

---

## 📝 3 Workstreams

### A: Landing Page Copy (2–3 days)
**File:** `src/pages/LandingPage.jsx`
- Section 1: Hero title
- Sections 2–7: Content + CTAs

**How:** Edit text inside `<h2>`, `<p>`, `<li>` tags

### B: Demo Customization (2–3 days)
**File:** `src/pages/DemosPage.jsx`
- Quick-scan form + output
- Goal-first form + output

**What's ready:** Forms, state management, calculations
**What to customize:** Input labels, output text, styling

### C: SEO + Analytics (1 day)
**Files:** `index.html`, `public/schema.json`
- Meta tags (title, description)
- Analytics script (optional)
- Organization schema

---

## 📂 Key Files to Edit

| File | Purpose | Edit? |
|------|---------|-------|
| `src/pages/LandingPage.jsx` | Landing page copy | 🟡 Yes |
| `src/pages/TrustPage.jsx` | Trust page copy | 🟡 Yes |
| `src/pages/DemosPage.jsx` | Demo forms + interactivity | 🟡 Yes |
| `src/styles/main.css` | Colors, fonts, layout | 🟡 Yes |
| `index.html` | Meta tags, analytics | 🟡 Yes |
| `src/App.jsx` | Page router | ❌ No |
| `vite.config.js` | Build config | ❌ No |

---

## 🎨 Styling Quick Tips

All colors in `src/styles/main.css`:

```css
--color-primary: #1f2937;    /* Change to match Phase 1 */
--color-secondary: #3b82f6;  /* Change to match Phase 1 */
```

Components auto-update when you change these.

---

## ✅ Before You Start

- [ ] `npm install` (installs React, Vite, @vitejs/plugin-react)
- [ ] `npm run dev` (starts dev server on localhost:5173)
- [ ] Browser opens automatically
- [ ] Try editing a file → see hot-reload work

---

## 🛑 What NOT to Do

❌ Call finnsight-core API
❌ Store PII (use React state only)
❌ Make demo outputs look "final"
❌ Make new financial claims
❌ Use real engine logic (illustrative math only)

---

## 📊 Demo Interactivity (Already Built)

### Quick-Scan Form
```jsx
<input name="age" value={quickScanInputs.age} onChange={handleQuickScanChange} />
// Updates state on every keystroke
// Submit button triggers calculation
// Output renders conditionally
```

### Goal-First Form
```jsx
<button onClick={() => handleGoalButtonClick('minimum')}>
  // Click state → update, render "active" class
<button />
// Age input → update state
// Submit → show output
```

**All interactive — no backend needed.**

---

## 🧪 Test Locally Before Deploy

```bash
# 1. Run dev server
npm run dev

# 2. Test each page
- Landing page loads
- Trust page loads
- Demo pages work (try submitting forms)
- Links navigate correctly
- Mobile responsive? (resize browser)

# 3. No console errors? → Ready to build
```

---

## 📦 Build & Deploy

```bash
# 1. Build for production
npm run build
# Output: dist/ directory (static files)

# 2. Deploy to Vercel
npm install -g vercel
vercel
# Follow prompts, connect GitHub repo

# 3. Setup domains
# Cloudflare: register finnsight.nl, finnsight.app
# Vercel: add custom domain finnsight.app
# DNS: point to Vercel (auto-provisioned)
```

---

## 💬 Common Questions

**Q: Where do I edit the landing page copy?**
A: `src/pages/LandingPage.jsx` — find `<h2>` tags, edit text

**Q: How do I change colors?**
A: Edit CSS variables in `src/styles/main.css`

**Q: Can I add new form fields?**
A: Yes! Edit `src/pages/DemosPage.jsx` — add input + state + handler

**Q: Will changes auto-reload?**
A: Yes! Hot Module Replacement (HMR) updates browser instantly

**Q: Can I call finnsight-core API?**
A: No. Keep demos illustrative + client-side only

---

## 📖 Read This First

👉 **[VITE_REACT_SETUP.md](VITE_REACT_SETUP.md)** — Detailed development guide

Then:
- [EXECUTION_CHECKLIST.md](EXECUTION_CHECKLIST.md) — Phase-by-phase guide
- [00_START_HERE.md](00_START_HERE.md) — High-level overview

---

## 🎯 Timeline

```
Today:   Infrastructure ready ✅
Days 2–3: Copy work (A)
Days 2–3: Demo customization (B)
Day 4:   SEO + analytics (C)
Days 5–6: Test + polish
Day 7:   Deploy to Vercel
```

**Hard deadline:** End of week 3

---

## ✨ You're Ready

```bash
npm install
npm run dev
# http://localhost:5173/
# Edit files, see changes instantly
# Ship Phase 2 in 2 weeks
```

**Let's build.** 🚀
