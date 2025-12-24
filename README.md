# finnsight-site

Public online presence for Finnsight (Phase 2, ROADMAP v5).

**Repository:** Dedicated, independent from `finnsight-core`
**Domain:** `finnsight.app` (Phase 2), `finnsight.nl` (brand, redirect only)
**Spec Reference:** [PHASE_2_ONLINE_PRESENCE.md](https://github.com/finnsight/finnsight-core/blob/main/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md)

---

## Structure

```
finnsight-site/
├── README.md
├── package.json (if using Vite/React)
├── .gitignore
├── docs/
│   └── PHASE_2_EXECUTION_GUIDE.md
├── src/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── pages/
│   │   ├── index.html (landing)
│   │   ├── trust.html (trust & compliance)
│   │   └── demos.html (both demos)
│   └── assets/
│       └── (images, logos)
├── public/
│   ├── sitemap.xml
│   └── robots.txt
└── .env.example
```

---

## Quick Start

### Option 1: HTML + CSS (Recommended for Phase 2)

```bash
# No build step needed
# Serve directly or via Vercel
```

### Option 2: Vite + React

```bash
npm install
npm run dev      # local development
npm run build    # production build
npm run preview  # preview build
```

---

## Phase 2 Deliverables

- [ ] Landing page (sections 1–7 per spec)
- [ ] Trust & compliance page
- [ ] Quick-scan demo (range-based, non-canonical)
- [ ] Goal-first demo (illustrative only)
- [ ] SEO baseline (meta, sitemap, robots.txt)
- [ ] CTA mechanics (mailto: or ephemeral form)
- [ ] Privacy-respecting analytics setup
- [ ] No coupling with finnsight-core
- [ ] Governance decisions logged in finnsight-core DECISION_LOG.md ✅

---

## Governance Boundaries (Non-Negotiable)

**Forbidden:**
- Calls to finnsight-core API
- Canonical calculations
- User accounts or authentication
- PII storage
- Personalised advice
- Outputs marked as "final" or "accurate"

**Required:**
- Explicit disclaimers ("indicative", "not engine-ready")
- Clear statement: "Employers never see individual employee data"
- Privacy-by-design analytics
- Zero code reuse with Phase 5

---

## Hosting & Domains

- **Hosting:** Vercel (locked for Phases 5–9; Phase 2 can use alternatives)
- **Primary domain:** `finnsight.app`
- **Brand domain:** `finnsight.nl` (redirect to .app)
- **DNS/SSL:** Cloudflare (~€30/year)

---

## Timeline

- **Week 1 (Days 1–5):** Copy, mockups, repo structure
- **Week 2 (Days 6–10):** Landing page, demos, trust page live
- **Week 2 (Days 8–10):** SEO baseline, analytics, final polish
- **Week 3 (Hard deadline):** Phase reflection, sign-off

**Slip rule:** >week 3 requires Founder re-plan (per ROADMAP_v5).

---

## Links & References

- Phase 2 Spec: [PHASE_2_ONLINE_PRESENCE.md (finnsight-core)](../../../finnsight-core/docs/roadmap/PHASE_2_ONLINE_PRESENCE.md)
- Roadmap v5: [ROADMAP_v5_LINEAR.md (finnsight-core)](../../../finnsight-core/docs/roadmap/ROADMAP_v5_LINEAR.md)
- Strategic Foundation: (reference)
- AI Roles & Governance: (reference)

---

## Owner & Contact

**Owner:** Founder
**CTO Support:** Infrastructure, contract tests (Phase 7+)
**Questions:** Reference PHASE_2_ONLINE_PRESENCE.md Section 1–10
