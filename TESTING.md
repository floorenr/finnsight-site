# Testing & CI/CD Guide

## Running Tests Locally

### Install dependencies
```bash
npm install
```

### Run all tests
```bash
npm test
```

### Run tests in watch mode (re-run on file changes)
```bash
npm test:watch
```

### Generate coverage report
```bash
npm test:coverage
```

This creates a `coverage/` folder with detailed coverage metrics.

## Test Structure

Tests follow the pattern: `**/*.test.js`

**Component tests:**
- `src/pages/LandingPage.test.js` — Landing page rendering, navigation, footer
- `src/pages/TrustPage.test.js` — Trust & compliance page content
- `src/components/ErrorBoundary.test.js` — Error handling, recovery UI

**Scope:**
- Render tests: Component mounts without crashing
- Content tests: Key text/headings present
- Accessibility tests: Buttons, navigation, footer exist
- Form tests: Inputs and spinbuttons accessible

**NOT tested (by design):**
- Complex calculations (Phase 2 is illustrative, not canonical)
- User interactions (click, form submit) — too complex for Phase 2
- Styling (CSS is not unit-tested)
- API calls (none exist in Phase 2)

## GitHub Actions CI Pipeline

**Trigger:** Every push to `main` branch and all pull requests

**Jobs:**

1. **Test Job** (runs first)
   - Installs dependencies
   - Runs Jest test suite
   - Uploads coverage report to Codecov (optional)
   - **Fails if:** Any test fails

2. **Build Job** (runs after tests pass)
   - Verifies Vite build succeeds
   - Creates `dist/` production bundle
   - Uploads artifacts for 7 days
   - **Fails if:** Build fails or `dist/` not created

## Deployment

**Vercel Git Integration:**
- PRs deploy to Preview environments automatically
- Merges to `main` deploy to Production automatically
- No deploy job in GitHub Actions; Vercel handles deployment directly

## Configuration Files

**jest.config.js**
- Test environment: jsdom (browser-like)
- Setup file: jest.setup.js (imports @testing-library/jest-dom)
- Module mapper: CSS modules → identity-obj-proxy (mock imports)
- Transform: JSX → JS via babel-jest

**.babelrc.json**
- Preset: @babel/preset-env (for Jest)
- Preset: @babel/preset-react with automatic runtime

**package.json scripts:**
```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage"
}
```

## Vercel Setup

Vercel deployment is configured via Git integration in the Vercel dashboard. No GitHub secrets required for deployment.
   - `VERCEL_PROJECT_ID` — Your finnsight-site project ID

Without these, the deploy job will fail silently.

## Best Practices

✅ **Do:**
- Write tests for new components
- Keep tests simple and focused (one assertion per test)
- Use semantic queries: `getByRole`, `getByText`, `getByLabelText`
- Run `npm test:watch` while developing
- Run `npm run build` before committing

❌ **Don't:**
- Test implementation details (internal state, props)
- Test CSS or styling
- Create complex multi-step interaction tests
- Add tests that require real API calls
- Test business logic (calculations belong in Phase 4/5 engines)

## Debugging Failed Tests

### Common errors:

**"Unable to find an element..."**
- Element text may be broken across multiple DOM nodes
- Use `screen.debug()` in your test to inspect rendered output
- Use a more flexible matcher: `screen.getByText(text => text.includes('...'))`

**"Cannot find module..."**
- Check import paths are correct
- Run `npm install` to ensure dependencies installed
- Verify Jest config moduleNameMapper for CSS/asset imports

**Test passes locally but fails in CI/CD:**
- Node version mismatch — CI uses Node 20.x, ensure local is same
- Package cache — CI uses `npm ci` (clean install), try `rm -rf node_modules && npm install` locally
- Timing issues — Unlikely in Phase 2 (no async)

## Coverage Goals

**Phase 2 target:** 70%+ line coverage on components

- `LandingPage.jsx` — Core component, high coverage
- `TrustPage.jsx` — Core component, high coverage
- `DemosPage.jsx` — Core component, high coverage
- `ErrorBoundary.jsx` — Error handling, high coverage
- `App.jsx` — Thin wrapper, lower priority

Run `npm test:coverage` to see current coverage by file.

## Future (Phase 4+)

As Phase 4 adds form inputs, validation, and calculation logic:

- Add interaction tests (React Testing Library: fireEvent, userEvent)
- Add input validation tests
- Add business logic unit tests (for deterministic engines only)
- Consider snapshot tests for large output structures
- Add accessibility compliance tests (axe-core)

For now, Phase 2 tests verify rendering and basic content — that's sufficient.
