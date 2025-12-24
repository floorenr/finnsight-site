# PHASE 2 BUILD: EXECUTION SUMMARY

**Status:** ✅ Repository structure & templates ready
**Next Step:** Founder decisions + content work

---

## What's Been Done

### ✅ Infrastructure Created

1. **finnsight-site repository** (at `/Users/reneflooren/Documents/GitHub/finnsight-site/`)
   - Git initialized
   - README with quick-start guide
   - Execution guide with timeline and DoD checklist
   - All templates ready

2. **Page Templates**
   - `src/pages/index.html` — Landing page (7 sections)
   - `src/pages/trust.html` — Trust & compliance (8 principles)
   - `src/pages/demos.html` — Quick-scan + goal-first demos (interactive shells)

3. **Styling**
   - `src/styles/main.css` — Production-grade CSS (Phase 1 branding baseline variables)

4. **SEO Baseline**
   - `public/sitemap.xml` — Ready
   - `public/robots.txt` — Ready
   - Meta tags in HTML heads — Ready

5. **Build Tools**
   - `package.json` — Vite configuration included (opt-in)
   - `.gitignore` — Standard Node/Python/OS ignore rules

---

## What Needs Founder Input (BLOCKING)

**Before proceeding with content, decide:**

| Question | Option A | Option B | Recommendation |
|----------|----------|----------|---|
| **Tech Stack** | HTML + CSS (ship fast) | Vite + React (if interactive) | HTML + CSS |
| **Designer** | Founder-led + templates | Hire contractor | Founder-led |
| **Demo Fidelity** | Static mockups | Interactive prototype | Static mockups |

**Timeline Impact:**
- HTML + CSS: 3–4 days to ship
- Vite + React: 5–7 days to ship
- Contractor designer: +1 week lead time

---

## Workstreams (Parallel)

### A: Messaging & Copy (Founder-led, 3–5 days)

**Files to edit:**
- `src/pages/index.html` — Fill in sections 1–7 with copy
- `src/pages/trust.html` — Fill in sections 1–8 with copy
- `src/pages/demos.html` — Add demo descriptions

**Sources (non-negotiable):**
- Strategic Foundation v1.0
- AI Roles & Governance v1.0
- AI Compliance Appendix v1.1
- PHASE_2_ONLINE_PRESENCE.md (in finnsight-core repo)

**Governance checkpoint:** Copy must reference only existing governance documents. No new claims.

---

### B: Visual Design & Demos (Founder + Designer optional, 5–7 days)

**Deliverables:**
1. Logo / wordmark
2. Color palette (use Phase 1 baseline)
3. Typography (use Phase 1 baseline)
4. Quick-scan demo mockup (6-question form, range output)
5. Goal-first demo mockup (goal input, trade-off signals)

**Implementation:**
- If HTML + CSS: edit `src/styles/main.css` (colors/fonts already templated)
- If Vite + React: install dependencies (`npm install`)
- Demo interactions: already scripted in `src/pages/demos.html`

---

### C: SEO & Analytics (CTO, 1–2 days)

**Deliverables:**
- [ ] Organization schema (JSON-LD)
- [ ] Analytics setup (Plausible/Fathom, optional)
- [ ] Verify meta tags
- [ ] Test sitemap.xml validity

**Files:**
- `public/schema.json` — Create organization schema
- `src/pages/index.html` — Add analytics script (if enabled)

---

## Deployment Path

### Step 1: Push to GitHub

```bash
cd ~/Documents/GitHub/finnsight-site
git remote add origin https://github.com/finnsight/finnsight-site.git
git branch -M main
git push -u origin main
```

### Step 2: Setup Domains (Cloudflare)

- [ ] Register `finnsight.nl` (Cloudflare)
- [ ] Register `finnsight.app` (Cloudflare)
- [ ] SSL auto-configured by Cloudflare
- [ ] Cost: ~€30/year

### Step 3: Deploy to Vercel

```bash
npm install -g vercel
vercel
# Follow prompts, connect GitHub repo
```

**Result:** `finnsight-app.vercel.app` (temporary) → `finnsight.app` (via DNS)

---

## Phase 2 Timeline (Proposed)

| Week | Days | Owner | Activity | Deliverable |
|------|------|-------|----------|---|
| W1 | 1–2 | CTO | Repo setup, domains | finnsight-site on GitHub, Cloudflare DNS |
| W1 | 3–5 | Founder | Copy + messaging | Landing page copy, trust page copy |
| W1 | 3–5 | Designer/Founder | Mockups & branding | Demo mockups, visual direction |
| W2 | 6–8 | CTO/Designer | Integration | Landing page live on finnsight.app |
| W2 | 8–10 | Team | Polish | Demo pages, trust page, SEO, analytics |
| W2 | 10–14 | Founder | Reflection | Phase 2 complete, sign-off |

**Hard deadline:** End of Week 3 (per ROADMAP_v5 slip rule)

---

## Key Constraints (Non-Negotiable)

✗ **Forbidden:**
- Calls to finnsight-core API
- Canonical calculations
- User accounts or authentication
- PII storage
- Personalised advice
- Any output marked "final" or "accurate"

✓ **Required:**
- Explicit disclaimers ("illustrative", "not engine-ready")
- Clear statement: "Employers never see individual employee data"
- Zero code reuse with Phase 5
- Governance decisions logged in finnsight-core DECISION_LOG.md

---

## Definition of Done — Phase 2

Phase 2 is complete when:

- [ ] Repository exists and is public on GitHub
- [ ] Landing page live (`finnsight.app/`)
- [ ] Quick-scan demo works (range-based, non-canonical)
- [ ] Goal-first demo works (illustrative, no persistence)
- [ ] Trust & compliance page live
- [ ] SEO baseline present
- [ ] CTA mechanics safe (mailto: only)
- [ ] No coupling with finnsight-core (verified)
- [ ] Governance decisions logged in finnsight-core DECISION_LOG.md ✅
- [ ] Phase reflection completed (lessons, timing, blockers)

---

## File Structure Reference

```
finnsight-site/
├── README.md                          ✅ Ready
├── package.json                       ✅ Ready (Vite config)
├── .gitignore                         ✅ Ready
├── docs/
│   └── PHASE_2_EXECUTION_GUIDE.md    ✅ Ready (detailed checklist)
├── src/
│   ├── pages/
│   │   ├── index.html                ✅ Ready (landing page template)
│   │   ├── trust.html                ✅ Ready (trust & compliance template)
│   │   └── demos.html                ✅ Ready (demo form shells + JS)
│   ├── styles/
│   │   └── main.css                  ✅ Ready (Phase 1 baseline variables)
│   └── assets/                        📁 (create for logo, images)
└── public/
    ├── sitemap.xml                    ✅ Ready
    └── robots.txt                     ✅ Ready
```

---

## Next Immediate Actions

### For Founder

1. **Decide:** Tech stack (HTML/CSS recommended), designer, demo fidelity
2. **Start Workstream A:** Copy the templates, fill in governance-aligned copy
3. **Start Workstream B:** Mockups and visual direction (reference Phase 1 baseline)

### For CTO

1. **Domain setup:** Register `finnsight.nl` and `finnsight.app` on Cloudflare
2. **GitHub setup:** Create `finnsight` organization, push finnsight-site repo
3. **Vercel setup:** Connect GitHub to Vercel, ready for deployment

### For Team

1. **Review PHASE_2_EXECUTION_GUIDE.md** in finnsight-site/docs/
2. **Populate remaining templates** (copy, images, branding)
3. **Execute deployment pipeline** (push → Vercel → domain setup)

---

## Questions?

- **Spec Reference:** [PHASE_2_ONLINE_PRESENCE.md](../../../finnsight-core/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md) (finnsight-core repo)
- **Execution Guide:** `finnsight-site/docs/PHASE_2_EXECUTION_GUIDE.md`
- **Roadmap Context:** [ROADMAP_v5_LINEAR.md](../../../finnsight-core/docs/roadmap/ROADMAP_v5_LINEAR.md) (finnsight-core repo)

---

**Build Status:** 🟢 Ready to execute
**Remaining:** Founder decisions + content work (Workstreams A–C)
**Timeline:** 2–3 weeks (hard deadline per ROADMAP_v5)
