# Finnsight

> Governing source of truth for narrative, governance, boundary rules, and messaging: `docs/governance/FINNSIGHT_MASTER_CONSTITUTION_v1_0.md` in `finnsight-core`

Employee-first, employer-sponsored deterministic financial scenario planning for Dutch employees.

## About

Finnsight helps Dutch employees understand how income, housing, tax, and pension interact under different scenarios through deterministic, transparent calculations.

It is designed around clear boundaries:
- **What employees get:** personal financial insight and scenario visibility
- **What employers get:** a privacy-safe employee benefit and rollout visibility only
- **What Finnsight does not do:** financial advice, AI-generated calculations, or employer-facing employee financial outcomes

Core product principles:
- deterministic calculations
- transparent assumptions
- privacy by design
- no financial advice
- same input, same output

## Live

Public site: https://finnsight.app

## Technology

Built with:

- **Frontend:** Vite 4.5.14 + React 18.2
- **Deployment:** Vercel
- **Domains:** finnsight.app (primary), finnsight.nl (redirect)

## Structure

```
src/
├── pages/
│   ├── LandingPage.jsx         # Hero, benefits, contact CTA
│   └── TrustPage.jsx           # Transparency & compliance
├── components/
│   └── ErrorBoundary.jsx       # Error handling
└── styles/
    └── main.css                # Design system

public/
├── favicon.svg
├── sitemap.xml
└── robots.txt

index.html                       # SPA entry point
```

## Development

```bash
# Install dependencies
npm install

# Local development
npm run dev         # Open http://localhost:5173

# Production build
npm run build       # Creates dist/

# Preview build
npm run preview
```

## Workflow (CI/CD)

- Branches: `main` is production and protected.
- CI: GitHub Actions workflow `CI` runs on PRs to `main` and pushes to `main`.
  It executes: `npm ci` → `npm test` (with coverage; `--passWithNoTests`) → Codecov upload (best-effort) → `npm run build`
  → verifies `dist/` exists → uploads `dist/` as an artifact (7 days retention). Concurrency cancels redundant runs per ref.
- PR flow: create a branch → push → open PR to `main` → CI must pass → Vercel posts a Preview URL → run smoke checks → merge → production deploy.
- Vercel: PRs deploy to Preview (Preview env vars); merges to `main` deploy to Production (Production env vars). Keep secrets separated.
- Rollback: prefer revert via PR; emergency = Vercel "Promote previous deployment" then follow with a revert PR to fix `main`.

## Important Notes

- This site contains no live financial product. It presents Finnsight’s proposition, trust/compliance posture, and pilot contact flow.

## Privacy

- We do not store financial intake submissions via the public website.
- No tracking cookies and no third-party analytics.
- Employers do not receive employee financial outcomes, individually or as financial aggregates.
- Employers may see privacy-safe operational rollout information only, such as participation or completion counts, without financial content.

## Accessibility

The site supports:

- Keyboard navigation
- Screen readers (WCAG 2.1 AA)
- Mobile & tablet devices
- Zoom & high contrast modes

## Compliance

Finnsight operates within Dutch financial regulations (AFM):

- No personalized financial advice
- No investment return predictions
- Transparent assumptions
- Privacy by design

## Contact

Questions or interest in partnership?
[hello@finnsight.nl](mailto:hello@finnsight.nl)

---

**Public Site Status:** ✅ Live
**Last Updated:** 2025-12-25
