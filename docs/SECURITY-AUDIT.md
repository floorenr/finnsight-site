# Security Audit - npm Vulnerabilities

**Last Updated:** 2026-01-27

## Summary

This document tracks the status of npm security vulnerabilities identified in the project.

### Fixed Vulnerabilities ✅

- **react-router (High Severity)** - Fixed via `npm audit fix`
  - CSRF issue in Action/Server Action Request Processing (GHSA-h5cw-625j-3rxh)
  - XSS via Open Redirects (GHSA-2w69-qvjg-hvjx)
  - SSR XSS in ScrollRestoration (GHSA-8v8x-cx79-35w7)
  - **Resolution:** Updated react-router from 7.11.0 → 7.13.0

### Remaining Vulnerabilities 📋

#### esbuild <=0.24.2 (Moderate Severity)

- **Issue:** esbuild enables any website to send requests to the development server and read the response
- **Advisory:** [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99)
- **Impact:** Development server only - does not affect production builds
- **Fix Available:** Requires `npm audit fix --force` which upgrades vite from v4 to v7 (breaking change)
- **Recommendation:** Accept this risk for now. The vulnerability only affects the development server, which:
  1. Is not exposed to the public internet in production
  2. Should only be run in trusted local environments
  3. Is never deployed

#### vite <=6.1.6 (Moderate Severity - Multiple Issues)

- **Issues:**
  - Middleware may serve files with same name prefix (GHSA-g4jq-h2w9-997c)
  - `server.fs` settings not applied to HTML files (GHSA-jqfw-vq24-v9c3)
  - `server.fs.deny` bypass via backslash on Windows (GHSA-93m4-6634-74q7)
- **Impact:** Development server only - does not affect production builds
- **Fix Available:** Requires upgrading to vite@7+ (breaking change)
- **Recommendation:** Accept this risk for now. These vulnerabilities only affect the development server.

## Rationale

This is a **static marketing site** built with Vite. The identified vulnerabilities only affect:
- The development server (`npm run dev`)
- Local development environments

They do **NOT** affect:
- Production builds (`npm run build`)
- The deployed static assets
- End users visiting the site

Upgrading vite from v4 to v7 would be a breaking change that requires:
- Testing all build configurations
- Potentially updating multiple dependencies
- Risk of introducing regressions

For a marketing site with minimal runtime dependencies, the risk/benefit tradeoff does not favor forcing a major version upgrade at this time.

## Future Action

- Monitor for non-breaking security updates to vite and esbuild
- Consider upgrading to vite v7 in a dedicated refactoring sprint
- Re-run `npm audit` monthly to catch new vulnerabilities
