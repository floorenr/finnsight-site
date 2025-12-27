# Finnsight Brand Assets (SVG)

This folder contains the canonical Finnsight logo system.

## 1) Single Source of Truth

### `mark-master.svg`
This is the ONLY file where the mark geometry may be edited.
All other assets must be derived from this mark by scaling/positioning only.

If you change the mark, regenerate all dependent variants.

## 2) Color Tokens (Authoritative)

- Brand navy: `#0F2D5C` (identity, trust)
- Data accent: `#2F6FDB` (calm blue, non-normative)
- Background: `#F6F9FF` (soft off-white)

## 3) File Overview & Intended Use

### Primary logos
- `logo-primary-horizontal.svg`
  - Use in website headers/navbars and product UI.
- `logo-primary-stacked.svg`
  - Use on covers (pitch decks, trust pages, hero sections).

### Monochrome variants (print/legal/dark backgrounds)
- `logo-mono-dark-stacked.svg`
- `logo-mono-light-stacked.svg`
- `logo-mono-dark-horizontal.svg`
- `logo-mono-light-horizontal.svg`

### Marks (icon-only)
- `mark-master.svg` (canonical geometry)
- `mark-mono-dark.svg`
- `mark-mono-light.svg`
- `mark-on-dark.svg` (white mark on navy background)

### Platform assets
- `favicon.svg`
  - Simplified (ring + bars only). Handle removed for micro-legibility.
- `app-icon.svg`
- `app-icon-maskable.svg`
  - Maskable-safe padding for Android/PWA.
- `og-image.svg`
  - 1200x630 Open Graph share image.
- `social-avatar.svg`
  - 1024x1024 for social profiles.

### Common startup collateral
- `brand-badge.svg`
  - Rounded pill for “Trusted by”, partner pages, deck badges.
- `press-kit-header.svg`
  - Header banner for press kits / one-pagers.
- `email-signature-banner.svg`
  - Banner master for email signatures (export to PNG recommended).

## 4) Typography Notes

SVG wordmarks use system fallbacks (Inter if available). For pixel-perfect rendering
across systems, convert wordmarks to outlines in a design tool when finalizing
trademark/print deliverables.

## 5) Export Guidance (PNG)

Prefer SVG wherever possible. Export to PNG only for platforms that require it
(e.g., some email clients, app stores, ad networks).

Example (Inkscape):
- `inkscape brand/og-image.svg --export-type=png --export-filename=public/og.png --export-width=1200`
- `inkscape brand/app-icon.svg --export-type=png --export-filename=public/icon-512.png --export-width=512`

## 6) Non-Negotiables (Fintech/HR Trust)

- No currency symbols (EU-based, neutral stance).
- No “always up-and-to-the-right” performance messaging.
- Mark must remain calm, factual, and non-normative.
