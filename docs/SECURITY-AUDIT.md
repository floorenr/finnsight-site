# Security Audit - npm Vulnerabilities

**Last Updated:** 2026-01-27

## Summary

All identified npm security vulnerabilities have been successfully resolved.

**Current Status:** ✅ 0 vulnerabilities (as of `npm audit` run on 2026-01-27)

## Fixed Vulnerabilities ✅

### react-router (High Severity)

- **Fixed via:** `npm audit fix` (non-breaking)
- **Vulnerabilities:**
  - CSRF issue in Action/Server Action Request Processing (GHSA-h5cw-625j-3rxh)
  - XSS via Open Redirects (GHSA-2w69-qvjg-hvjx)
  - SSR XSS in ScrollRestoration (GHSA-8v8x-cx79-35w7)
- **Resolution:** Updated react-router from 7.11.0 → 7.13.0

### esbuild / vite (Moderate Severity)

- **Fixed via:** `npm audit fix --force` (breaking change upgrade)
- **Vulnerabilities:**
  - esbuild <=0.24.2: Development server request/response issue (GHSA-67mh-4wv8-2f99)
  - vite <=6.1.6: Multiple development server issues
    - Middleware file serving (GHSA-g4jq-h2w9-997c)
    - `server.fs` settings not applied to HTML (GHSA-jqfw-vq24-v9c3)
    - `server.fs.deny` bypass via backslash on Windows (GHSA-93m4-6634-74q7)
- **Resolution:** Upgraded vite from 4.5.14 → 7.3.1
- **Testing:** All tests, linting, formatting, and builds pass successfully with vite v7

## Upgrade Notes

The upgrade from vite v4 to v7 was successfully tested and verified:

- ✅ `npm run build` - Production build successful
- ✅ `npm run dev` - Development server starts correctly
- ✅ `npm test` - All 60 tests pass
- ✅ `npm run lint:ci` - Linting passes
- ✅ `npm run format:check` - Formatting passes

No breaking changes detected in the project configuration or codebase.

## Future Action

- Continue monitoring for new security advisories via `npm audit`
- Keep dependencies up to date with regular audits
- Consider adopting automated dependency update tools (e.g., Dependabot, Renovate)
