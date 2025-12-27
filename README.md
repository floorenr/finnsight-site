# Finnsight

Deterministic financial planning for Dutch employees.

## About

Finnsight helps Dutch employees understand their financial future through transparent, private analysis. No advice. No guesses. Only facts.
- **What you get:** Clear view of your income, housing, pensions, taxes, and available funds
- **How it works:** Share your situation → deterministic calculation → understand your options
- **Your privacy:** Your data stays with you. Employers never see individual information.

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

- This site contains no interactive demos. It presents the proposition, trust/compliance, and a contact CTA.

## Privacy
- Your data is never sent to servers
- No cookies, no tracking
- Employer-neutral (your employer never sees your data)

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
