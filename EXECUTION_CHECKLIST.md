# PHASE 2 BUILD EXECUTION CHECKLIST

**Status:** Infrastructure ✅ Ready | Content 🔲 Pending
**Owner:** Founder (primary), CTO (infrastructure)
**Timeline:** 2–3 weeks (hard deadline)

---

## 🟢 BLOCKING DECISIONS (Founder to decide NOW)

- [ ] **Tech Stack:** HTML + CSS (recommended) OR Vite + React?
- [ ] **Designer:** Founder-led (templates provided) OR hire contractor?
- [ ] **Demo Fidelity:** Static mockups OR interactive prototype?

**Once decided → proceed to parallel workstreams below**

---

## WORKSTREAM A: Copy & Messaging (3–5 days)

**Owner:** Founder
**Governance Source:** Strategic Foundation v1.0, AI Roles & Governance v1.0, Phase 2 spec

### Landing Page (index.html)
- [ ] Section 1: Hero intro ("Inzicht in jouw financiële toekomst")
- [ ] Section 2: Who it's for (employees & employers)
- [ ] Section 3: Problems solved
- [ ] Section 4: How it works (3-step pipeline)
- [ ] Section 5: What Finnsight does NOT do
- [ ] Section 6: Demo CTAs
- [ ] Section 7: Pilot interest CTA

**Files:** `src/pages/index.html`
**Template Status:** ✅ HTML structure ready, copy placeholders need filling

### Trust & Compliance (trust.html)
- [ ] Section 1: Deterministic kernel vs AI explanation
- [ ] Section 2: No LLM in calculations (explicit)
- [ ] Section 3: No personalised advice
- [ ] Section 4: No data persistence in Phase 2
- [ ] Section 5: Privacy by design (employers never see data)
- [ ] Section 6: AFM boundaries
- [ ] Section 7: What we measure (metrics, not PII)
- [ ] Section 8: Trust + next steps

**Files:** `src/pages/trust.html`
**Template Status:** ✅ HTML structure ready, copy placeholders need filling

### Demo Pages (demos.html)
- [ ] Quick-scan demo intro text
- [ ] Goal-first demo intro text
- [ ] Disclaimer text (both demos illustrative, non-canonical)
- [ ] CTA text linking to trust.html

**Files:** `src/pages/demos.html`
**Template Status:** ✅ Forms and JS logic ready, intro/description text needed

---

## WORKSTREAM B: Visual Design & Demo Mockups (5–7 days)

**Owner:** Founder + Designer (optional contractor)
**Reference:** Phase 1 Branding Baseline (colors, typography, tone)

### Branding Direction
- [ ] Logo / wordmark finalized
- [ ] Color palette locked (reference Phase 1 variables in CSS)
- [ ] Typography: primary font, header/body sizes (reference Phase 1)
- [ ] Tone of voice: Dutch, clear, conservative, employee-first

**Files:** `src/styles/main.css` (colors/fonts already templated with Phase 1 variables)
**Impact:** Affects landing page visual appearance

### Quick-Scan Demo Mockup
- [ ] 6-question form layout (age, income, mortgage, spending, pension years, savings)
- [ ] Form styling (input fields, labels, spacing)
- [ ] Output visualization (range band: "€1.800 – €2.200/month")
- [ ] Disclaimer: "Illustrative. Not engine-ready."
- [ ] CTA: "Wil je meer weten? Neem contact op"

**Format:** Choose ONE:
- [ ] Static HTML (form already in demos.html, style with CSS)
- [ ] Figma mockup (share link)
- [ ] Interactive Vite + React component (if using Vite option)

**Files:** `src/pages/demos.html`, `src/styles/main.css`
**Template Status:** ✅ Form HTML ready, styling in progress

### Goal-First Demo Mockup
- [ ] Goal selection buttons (Minimum €1.500, Comfortabel €2.500, Ideaal €3.500)
- [ ] Goal button styling (active state, hover)
- [ ] Age input
- [ ] Output visualization (trade-off factors with importance ratings ⭐)
- [ ] Disclaimer: "Shows impact factors, not how to achieve."
- [ ] CTA: "Wil je weten hoe je dit bereikt? Neem contact op"

**Format:** Choose ONE (same as quick-scan):
- [ ] Static HTML
- [ ] Figma mockup
- [ ] Interactive React component

**Files:** `src/pages/demos.html`, `src/styles/main.css`
**Template Status:** ✅ Form HTML ready, styling in progress

---

## WORKSTREAM C: SEO & Analytics (1–2 days)

**Owner:** CTO + Founder (analytics policy decision)

### SEO Baseline
- [ ] Meta tags (title, description) — review in HTML
- [ ] Semantic HTML (headings, nav, sections) — ✅ already in templates
- [ ] Sitemap.xml — ✅ `public/sitemap.xml` ready
- [ ] Robots.txt — ✅ `public/robots.txt` ready
- [ ] Organization schema — create `public/schema.json`

**Files:** `public/sitemap.xml` ✅, `public/robots.txt` ✅, `public/schema.json` (create)
**Status:** 80% complete

### Analytics Setup (Optional)
- [ ] Choose provider: Plausible (recommended) OR Fathom
- [ ] Create account
- [ ] Add script tag to HTML `<head>`
- [ ] Privacy policy update (if analytics enabled)
- [ ] Verify tracking works (no PII, GDPR-compliant)

**Files:** `src/pages/index.html` (add analytics script)
**Status:** Optional, but recommended for Phase 2 metrics

---

## PHASE 2a: LANDING PAGE LIVE (Week 2, Days 6–8)

**Milestones:**
1. Copy complete (Workstream A)
2. Branding finalized (Workstream B)
3. CSS updated with colors/fonts
4. Pages render correctly locally
5. All links functional

**Acceptance Criteria:**
- [ ] `finnsight.app/` loads without errors
- [ ] All copy is present and governance-aligned
- [ ] Visual design matches Phase 1 baseline
- [ ] Navigation links work (to trust.html, demos.html)
- [ ] Footer present
- [ ] Mobile responsive (test on tablet/phone)

**Test Locally:**
```bash
cd ~/Documents/GitHub/finnsight-site
# If HTML + CSS: open src/pages/index.html in browser
# If Vite: npm run dev, then visit http://localhost:5173
```

---

## PHASE 2b: DEMO PAGES (Week 2, Days 6–10)

**Milestones:**
1. Demo mockups complete (Workstream B)
2. Quick-scan form styling done
3. Goal-first form styling done
4. Demo output visualization working
5. Disclaimers present and visible

**Acceptance Criteria:**
- [ ] Quick-scan form submits, shows range output
- [ ] Goal-first form submits, shows impact signals
- [ ] Both carry explicit disclaimers ("illustrative", "not engine-ready")
- [ ] No backend calls (client-side only, no finnsight-core API)
- [ ] Forms do NOT persist data to localStorage or database
- [ ] Output values are illustrative/hardcoded (not calculated from real engine)
- [ ] CTA buttons link to mailto: or ephemeral form

**Test Locally:**
```bash
# Test quick-scan form
1. Fill in 6 questions
2. Click submit
3. Verify output shows range band
4. Verify disclaimer is visible
5. Click CTA, verify mail client opens

# Test goal-first form
1. Click goal button (Minimum/Comfortabel/Ideaal)
2. Fill age
3. Click submit
4. Verify impact factors displayed
5. Verify disclaimer is visible
```

---

## PHASE 2c: TRUST & COMPLIANCE PAGE (Week 2, Days 8–10)

**Milestones:**
1. Copy complete (Workstream A)
2. All 8 sections present
3. Navigation links work
4. Footer links work

**Acceptance Criteria:**
- [ ] Page is explicit and conservative (no overstatement)
- [ ] No promises about accuracy or future value
- [ ] Clear statement: "Employers never see individual employee data"
- [ ] Deterministic kernel vs AI explanation clearly explained
- [ ] AFM boundaries explicit (what Finnsight does NOT do)
- [ ] Privacy-by-design principle visible
- [ ] Contact link present (mailto:)
- [ ] Links back to landing page

**Test Locally:**
```bash
1. Navigate to trust.html from landing page
2. Read all 8 sections
3. Verify all links work
4. Verify no broken images or formatting
5. Test mobile responsive
```

---

## PHASE 2d: SEO, ANALYTICS, FINAL POLISH (Week 2, Days 8–10)

**Milestones:**
1. Organization schema created (JSON-LD)
2. Analytics script added (if enabled)
3. Sitemap.xml verified
4. Robots.txt verified
5. All meta tags reviewed

**Acceptance Criteria:**
- [ ] `public/schema.json` created and valid
- [ ] Analytics script loads (if enabled)
- [ ] Sitemap.xml is valid (test at https://www.xml-sitemaps.com/)
- [ ] Robots.txt is correct
- [ ] Meta description present on all pages
- [ ] OG tags present (og:title, og:description)
- [ ] Favicon added (optional but nice-to-have)
- [ ] 404 page exists (optional for Phase 2)

**Test:**
```bash
# Validate sitemap
curl -s https://finnsight.app/sitemap.xml | head -20

# Check robots.txt
curl -s https://finnsight.app/robots.txt

# Validate schema
# Paste public/schema.json into https://schema.org/validator
```

---

## 🚀 DEPLOYMENT (Week 2, Days 10–12)

### Step 1: Push to GitHub
```bash
cd ~/Documents/GitHub/finnsight-site
git add .
git commit -m "Phase 2: MVP landing page, demos, trust & compliance"
git remote add origin https://github.com/finnsight/finnsight-site.git
git push -u origin main
```

### Step 2: Domains (Cloudflare)
- [ ] Register `finnsight.nl` (~€10/year)
- [ ] Register `finnsight.app` (~€10/year)
- [ ] Setup DNS: point both to Vercel (Vercel will provide CNAME/A records)
- [ ] SSL auto-provisioned by Cloudflare
- [ ] `finnsight.nl` redirect to `finnsight.app`

**Cost:** ~€30/year total

### Step 3: Deploy to Vercel
```bash
npm install -g vercel
vercel
# Select GitHub repo: finnsight/finnsight-site
# Enter custom domain: finnsight.app
# Vercel handles SSL + deployment
```

**Result:**
- `finnsight-site.vercel.app` (auto-generated)
- `finnsight.app` (via DNS)

---

## PHASE 2 DEFINITION OF DONE

Phase 2 is **COMPLETE** when ALL checked:

- [ ] `finnsight-site` repository exists on GitHub (public)
- [ ] Landing page live on `finnsight.app`
  - [ ] 7 sections present and copy complete
  - [ ] Visual design matches Phase 1 baseline
  - [ ] All links functional
- [ ] Quick-scan demo working
  - [ ] 6 questions functional
  - [ ] Output shows range band
  - [ ] Disclaimer visible
  - [ ] CTA present (mailto:)
- [ ] Goal-first demo working
  - [ ] Goal selection buttons functional
  - [ ] Output shows trade-off factors
  - [ ] Disclaimer visible
  - [ ] CTA present (mailto:)
- [ ] Trust & compliance page live
  - [ ] 8 sections complete
  - [ ] Governance-aligned copy
  - [ ] AFM boundaries explicit
  - [ ] Privacy principle clear
- [ ] SEO baseline in place
  - [ ] Meta tags on all pages
  - [ ] Sitemap.xml present and valid
  - [ ] Robots.txt present
  - [ ] Organization schema valid
- [ ] Analytics setup complete (if enabled)
  - [ ] Privacy-respecting tool (Plausible/Fathom)
  - [ ] Privacy policy updated
  - [ ] Tracking verified (no PII)
- [ ] CTA mechanics verified
  - [ ] `mailto:hello@finnsight.nl` works
  - [ ] No database storage
  - [ ] No tracking IDs
  - [ ] Ephemeral form only (no persistence)
- [ ] **CRITICAL:** No coupling with finnsight-core
  - [ ] Zero imports from finnsight-core
  - [ ] Zero API calls to finnsight-core
  - [ ] Repository independent
- [ ] Governance decisions logged
  - [ ] DECISION_LOG.md in finnsight-core updated ✅ (already done)
  - [ ] Phase 2 non-canonical demos documented
  - [ ] Repository separation documented
- [ ] Commit + push completed
  - [ ] All code committed to GitHub
  - [ ] Clean git history
- [ ] Domains configured
  - [ ] `finnsight.nl` and `finnsight.app` registered
  - [ ] DNS records configured
  - [ ] SSL certificates valid
- [ ] Phase reflection completed
  - [ ] Lessons documented (what went well, what was hard)
  - [ ] Timeline actual vs planned captured
  - [ ] Blockers identified
  - [ ] Next phase (Phase 3) can start immediately

---

## GOVERNANCE CHECKPOINTS

### Before Launch
- [ ] Copy matches governance documents (no new claims)
- [ ] AFM boundaries respected (no advice language)
- [ ] Privacy principle explicit (employers never see individual data)
- [ ] Demo disclaimers clear ("illustrative", "not engine-ready")
- [ ] No PII storage
- [ ] No finnsight-core API calls

### During Launch
- [ ] Monitor for broken links (test all pages)
- [ ] Verify analytics (if enabled) does not collect PII
- [ ] Confirm domains resolve correctly

### Post-Launch
- [ ] Founder uses CTA form for outreach
- [ ] Metrics show: page views, demo usage, trust page engagement
- [ ] No critical bugs reported
- [ ] Copy resonates with pilot prospects (qualitative feedback)

---

## TIMELINE OVERVIEW

```
Week 1
├─ Days 1–2 (CTO): Repo + domain setup
├─ Days 3–5 (Founder): Copy complete (A)
└─ Days 3–5 (Designer): Mockups + branding (B)

Week 2
├─ Days 6–8: Landing page live (A + B)
├─ Days 8–10: Demo pages, trust page, SEO (C)
├─ Days 10–12: Deploy to Vercel, test domains
└─ Days 12–14: Polish, reflection, sign-off

Week 3
└─ Buffer for slip (if needed)
```

**Hard deadline:** End of Week 3 (per ROADMAP_v5 slip rule)

---

## REFERENCE FILES

**In finnsight-site repo:**
- [BUILD_SUMMARY.md](BUILD_SUMMARY.md) — Overview of what's ready
- [docs/PHASE_2_EXECUTION_GUIDE.md](docs/PHASE_2_EXECUTION_GUIDE.md) — Detailed execution guide
- [README.md](README.md) — Quick-start guide

**In finnsight-core repo:**
- [docs/roadmap/PHASE_2_ONLINE_PRESENCE.md](../../../finnsight-core/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md) — Phase 2 spec
- [docs/roadmap/ROADMAP_v5_LINEAR.md](../../../finnsight-core/docs/roadmap/ROADMAP_v5_LINEAR.md) — Full roadmap context
- [docs/governance/DECISION_LOG.md](../../../finnsight-core/docs/governance/DECISION_LOG.md) — Governance decisions

---

**Print this checklist, hang it on the wall, check items off as you complete them.**

**Questions?** Refer to BUILD_SUMMARY.md or PHASE_2_EXECUTION_GUIDE.md.

**Ready to start?** Decide: tech stack, designer, demo fidelity. Then → Workstreams A–C.
