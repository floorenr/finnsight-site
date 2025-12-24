# PHASE 2 EXECUTION GUIDE

**Status:** Templates created, ready for content and decision

---

## Quick Start Checklist

### Pre-Build Decisions (BLOCKING)

Before proceeding, **choose:**

- [ ] **Tech Stack:**
  - [ ] Option A: HTML + CSS (simplest, no build)
  - [ ] Option B: Vite + React (if demos interactive)
- [ ] **Designer:**
  - [ ] Founder-led with templates
  - [ ] Hire contractor
- [ ] **Demo Fidelity:**
  - [ ] Static mockups (recommended)
  - [ ] Interactive prototype

**Once decided, proceed to Workstreams A–C below.**

---

## Workstream A: Messaging & Copy (Founder-led)

**Deliverables:**
- [ ] Landing page copy (index.html sections 1–7)
- [ ] Trust & compliance copy (trust.html sections 1–8)
- [ ] Demo page intro text
- [ ] CTA text (for mailto: link)

**Sources (non-negotiable):**
- Strategic Foundation v1.0
- AI Roles & Governance v1.0
- AI Compliance Appendix v1.1
- PHASE_2_ONLINE_PRESENCE.md spec (already in repo)

**No new claims.** Only reference existing governance documents.

**Timeline:** 3–5 days

**Files to edit:**
- `src/pages/index.html` (sections 1–7)
- `src/pages/trust.html` (sections 1–8)
- `src/pages/demos.html` (intro, demo descriptions)

---

## Workstream B: Visual Design & Demos (Founder + Designer optional)

**Deliverables:**

1. **Branding direction:**
   - [ ] Color palette (reference Phase 1 baseline)
   - [ ] Typography (fonts, sizes, hierarchy)
   - [ ] Logo / wordmark

2. **Quick-scan demo:**
   - [ ] Mockup: 6-question form (static or interactive)
   - [ ] Output: range visualization (e.g., "€1.800–€2.200/month")
   - [ ] Disclaimer: "illustrative, not engine-ready"

3. **Goal-first demo:**
   - [ ] Mockup: goal input (minimum/comfortable/ideal)
   - [ ] Output: trade-off signals (which factors matter most)
   - [ ] No optimization, no persistence

**Technical Form (choose one):**
- Static HTML mockup (ready)
- Figma interactive prototype (sharelink)
- Lightweight React component (Vite + React option)

**Timeline:** 5–7 days

**Files to edit:**
- `src/styles/main.css` (colors, fonts per Phase 1 baseline)
- `src/pages/demos.html` (demo HTML / form interactions)
- Add logo to `src/assets/` (create directory)

---

## Workstream C: SEO & Analytics (CTO + Founder)

**Deliverables:**

- [ ] Meta tags (title, description, OG tags) — already in templates
- [ ] Semantic HTML — already in templates
- [ ] Sitemap.xml — ✅ created
- [ ] Robots.txt — ✅ created
- [ ] Structured data (Organization schema) — create as `public/schema.json`
- [ ] Analytics setup (optional):
  - [ ] Plausible or Fathom account
  - [ ] Script tag added to `<head>`
  - [ ] Privacy policy updated

**Timeline:** 1–2 days

**Files:**
- `public/sitemap.xml` — ✅ ready
- `public/robots.txt` — ✅ ready
- `public/schema.json` — create
- `src/pages/index.html` — add analytics script if enabled

---

## Phase 2a: Landing Page (Week 2, Days 6–8)

**Milestones:**
1. Founder completes copy (Workstream A)
2. Designer finalizes branding (Workstream B)
3. CSS updated with colors/fonts
4. Pages render correctly
5. Links work (to trust.html, demos.html)

**Acceptance:**
- [ ] `finnsight.app/` loads
- [ ] Copy is governance-aligned (checked against DECISION_LOG)
- [ ] Visual design matches Phase 1 baseline
- [ ] All links functional

---

## Phase 2b: Demo Pages Integration (Week 2, Days 6–10)

**Milestones:**
1. Demo mockups complete (Workstream B)
2. Quick-scan form HTML ready
3. Goal-first form HTML ready
4. Disclaimer text present ("illustrative, not engine-ready")
5. Output visualization works (range bands, trade-off signals)

**Acceptance:**
- [ ] Quick-scan demo submits, shows range output
- [ ] Goal-first demo submits, shows impact signals
- [ ] Both carry explicit disclaimers
- [ ] No backend calls (client-side only)
- [ ] Forms do NOT persist data

---

## Phase 2c: Trust & Compliance Page (Week 2, Days 8–10)

**Milestones:**
1. Copy review (governance alignment)
2. Sections 1–8 complete
3. Links back to landing page
4. Footer navigation works

**Acceptance:**
- [ ] Page is explicit and conservative
- [ ] No promises about accuracy or completeness
- [ ] Clear statement: "Employers never see individual employee data"
- [ ] Deterministic kernel vs AI explanation layer explained
- [ ] AFM boundaries clear

---

## Phase 2d: SEO & Analytics (Week 2, Days 8–10)

**Milestones:**
1. Sitemap.xml — ✅
2. Robots.txt — ✅
3. Organization schema created
4. Analytics setup complete (if enabled)
5. Privacy policy statement added

**Acceptance:**
- [ ] Sitemap is valid (can validate at https://www.xml-sitemaps.com/)
- [ ] Robots.txt is correct
- [ ] Meta tags present
- [ ] Analytics script loads (if enabled)
- [ ] GDPR notice visible

---

## Definition of Done — Phase 2

Phase 2 is **DONE** when:

- [ ] `finnsight-site` repository exists (GitHub)
- [ ] Landing page live on `finnsight.app`
- [ ] Quick-scan demo implemented (range-based, non-canonical)
- [ ] Goal-first demo implemented (range-based, non-canonical)
- [ ] Trust & compliance page live
- [ ] SEO baseline present (meta, sitemap, robots.txt)
- [ ] CTA mechanics safe (mailto: or ephemeral form only)
- [ ] No coupling with `finnsight-core` (verified by import scan)
- [ ] Governance decisions logged in finnsight-core DECISION_LOG.md ✅
- [ ] Commit + push to GitHub completed
- [ ] Domain `finnsight.app` resolves (via Cloudflare)
- [ ] Domain `finnsight.nl` redirects to `.app`
- [ ] Phase reflection completed (lessons, timing, next actions)

---

## Deployment Options

### Option 1: Vercel (Recommended for Phase 5+, acceptable for Phase 2)

```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel
```

**Pros:** Fast, zero-config, automatic HTTPS
**Cons:** Slight vendor lock-in

### Option 2: Netlify

```bash
# Deploy via UI or CLI
netlify deploy --prod
```

### Option 3: AWS S3 + CloudFront (Manual)

```bash
# Upload to S3, CloudFront distribution, DNS via Cloudflare
# (More manual, not recommended for Phase 2 MVP)
```

**Recommendation:** Vercel or Netlify. Ship fast.

---

## Timeline Summary

| Week | Owner | Activity | Deliverable |
|------|-------|----------|-------------|
| W1 (Days 1–2) | CTO | Repo setup, domain setup | finnsight-site repo live, Cloudflare DNS |
| W1 (Days 3–5) | Founder | Copy + messaging | Landing page copy, trust page copy |
| W1 (Days 3–5) | Designer/Founder | Mockups & branding | Demo mockups, visual baseline |
| W2 (Days 6–8) | CTO/Designer | Integration | Landing page live on finnsight.app |
| W2 (Days 8–10) | CTO/Founder | Polish + SEO | Demo pages, trust page, SEO baseline |
| W2 (Days 10–14) | Founder | Reflection + sign-off | Phase 2 complete, sign-off documented |

**Hard deadline:** End of Week 3 (per ROADMAP_v5 slip rule)

---

## Governance Checkpoints

### Before Launch

- [ ] Copy matches DECISION_LOG entries (non-canonical demos, privacy principle)
- [ ] No new claims introduced (only references existing governance)
- [ ] No engine calls (verified by code review)
- [ ] No PII storage (code review)
- [ ] Disclaimers explicit on all demo outputs

### Post-Launch

- [ ] Analytics (if enabled) shows baseline traffic
- [ ] SEO baseline indexed by search engines
- [ ] Trust & compliance page accessible
- [ ] CTA receives inquiries (tracked in founder CRM)

---

## Questions & Support

**Q: Can we change fonts/colors from Phase 1 baseline?**
A: No — this is locked. Phase 1 spec Section 5.1 requires "Phase-1 branding baseline (colors, typography, tone of voice)."

**Q: Can we add forms to store emails for "newsletter"?**
A: No — Phase 2 spec Section 2.2 forbids "Storage of PII". CTA is `mailto:` or ephemeral form only.

**Q: Can we call finnsight-core API in the demos?**
A: No — Section 3.1 locks "No imports, APIs, or engine calls."

**Q: When do we add "full intake" functionality?**
A: Phase 5. Phase 2 is messaging and directional demos only.

---

**End of Phase 2 Execution Guide**
