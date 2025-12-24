# Finnsight

Deterministic financial planning for Dutch employees.

## About

Finnsight helps Dutch employees understand their financial future through transparent, private analysis. No advice. No guesses. Only facts.

- **What you get:** Clear view of your income, housing, pensions, taxes, and available funds
- **How it works:** Share your situation → deterministic calculation → understand your options
- **Your privacy:** Your data stays with you. Employers never see individual information.

## Demo

Try the interactive demos at [finnsight.app](https://finnsight.app):
- **Quick-scan:** 6 questions, 1 minute
- **Goal-first:** Choose your goal, see what it takes

## Technology

Built with:
- **Frontend:** Vite 4.5.14 + React 18.2
- **Deployment:** Vercel
- **Domains:** finnsight.app (primary), finnsight.nl (redirect)

## Structure

```
src/
├── pages/
│   ├── LandingPage.jsx         # Hero, benefits, demos CTA
│   ├── TrustPage.jsx           # Transparency & compliance
│   └── DemosPage.jsx           # Interactive demos
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

## Important Notes

### Non-canonical demos
The demos on this site are **illustrative only**:
- They do not store your data
- They use simplified logic (not the full finnsight-core engines)
- Results are ranges, not precise predictions
- They are meant to show what's possible, not deliver final answers

### Privacy
- Your data is never sent to servers
- No cookies, no tracking
- Employer-neutral (your employer never sees your data)

### Accessibility
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

**Phase 2 Status:** ✅ Live & production-ready  
**Last Updated:** 2025-12-24
