# Workstream D — Engineering Hygiene & Quality Baseline

## Objective

Reduce long-term maintenance cost and increase delivery confidence.

---

## Scope Constraints (Complexity Creep Prevention)

To keep this workstream focused on hygiene, the following are explicitly **out of scope**:

- No new runtime dependencies (devDependencies only)
- No new state management libraries
- No SSR/prerender introduction
- No TypeScript migration
- No pre-commit hooks (Husky/lint-staged) — can be Phase 2

---

## Current State Assessment

| Area            | Status              | Notes                                                         |
| --------------- | ------------------- | ------------------------------------------------------------- |
| **Linting**     | Not configured      | No ESLint dependencies or config                              |
| **Formatting**  | Not configured      | No Prettier dependencies or config                            |
| **CI**          | Partial             | GitHub Actions runs tests + build, but no code quality checks |
| **Testing**     | Good foundation     | Jest + Testing Library, 6 test files                          |
| **Tech Stack**  | React 18 + Vite 4.5 | Modern, well-structured                                       |
| **API Surface** | `api/site/leads.js` | Vercel serverless function exists                             |

---

## Implementation Plan

### Phase 1: ESLint Setup

**Goal:** Establish consistent code quality rules across `src/` and `api/`.

#### Tasks

1. **Install ESLint dependencies**

   ```bash
   npm install -D eslint @eslint/js eslint-plugin-react eslint-plugin-react-hooks globals
   ```

2. **Create `eslint.config.js`** (flat config format)
   - Use recommended JS rules
   - Add React and React Hooks plugins
   - Configure for browser + ES2020 environment
   - Set rules appropriate for existing codebase (avoid breaking changes)

3. **Add npm scripts** (separate dev and CI)

   ```json
   "lint": "eslint src api",
   "lint:fix": "eslint src api --fix",
   "lint:ci": "eslint src api --max-warnings 0"
   ```

   - `lint` — developer use, warnings allowed
   - `lint:ci` — CI use, zero warnings tolerance (deterministic)

4. **Initial lint pass**
   - Run `npm run lint` to identify issues
   - Fix auto-fixable issues with `npm run lint:fix`
   - Address remaining issues manually

**Files to modify:** `package.json`, new `eslint.config.js`

---

### Phase 2: Prettier + EditorConfig Setup

**Goal:** Enforce consistent code formatting across the entire project.

#### Tasks

1. **Install Prettier dependencies**

   ```bash
   npm install -D prettier eslint-config-prettier
   ```

2. **Create `.prettierrc`**

   ```json
   {
     "semi": true,
     "singleQuote": true,
     "tabWidth": 2,
     "trailingComma": "es5",
     "printWidth": 100
   }
   ```

3. **Create `.prettierignore`**

   ```
   dist/
   node_modules/
   coverage/
   package-lock.json
   ```

4. **Create `.editorconfig`** (editor-level consistency)

   ```ini
   root = true

   [*]
   charset = utf-8
   end_of_line = lf
   indent_style = space
   indent_size = 2
   insert_final_newline = true
   trim_trailing_whitespace = true

   [*.md]
   trim_trailing_whitespace = false
   ```

5. **Update ESLint config**
   - Add `eslint-config-prettier` to disable conflicting rules

6. **Add npm scripts** (format entire project, let ignores do the work)

   ```json
   "format": "prettier --write .",
   "format:check": "prettier --check ."
   ```

7. **Initial format pass**
   - Run `npm run format` to apply consistent formatting
   - Commit as a single dedicated "formatting" commit

**Files to create/modify:** `package.json`, `eslint.config.js`, `.prettierrc`, `.prettierignore`, `.editorconfig`

---

### Phase 3: CI Enforcement

**Goal:** Fail builds on linting/formatting violations.

#### Tasks

1. **Update `.github/workflows/ci.yml`**
   - Add new job: `lint` that runs in parallel with `test`
   - Commands to run:
     ```yaml
     - run: npm run lint:ci
     - run: npm run format:check
     ```

2. **Job structure**

   ```
   lint ─────┐
             ├──→ build
   test ─────┘
   ```

   - `lint` and `test` run in parallel (independent)
   - `build` depends on both passing

**Files to modify:** `.github/workflows/ci.yml`

---

### Phase 4: Extend Test Coverage

**Goal:** Cover newly introduced interactions (forms, 404 page).

#### Current Test Coverage

| Component       | Has Tests | Notes                     |
| --------------- | --------- | ------------------------- |
| `LandingPage`   | Yes       | Rendering + content tests |
| `TrustPage`     | Yes       | Rendering + content tests |
| `ErrorBoundary` | Yes       | Error handling tests      |
| `CTAButton`     | Yes       | Click interaction tests   |
| `LeadForm`      | Yes       | Form validation tests     |
| `LeadModal`     | Yes       | Modal behavior tests      |

#### Components Needing Tests

1. **`NotFoundPage`** (404 page)
   - Test: Page renders with correct messaging
   - Test: "Return home" link navigates correctly

2. **`Header`** component (if interactive)
   - Test: Navigation links render
   - Test: Mobile menu toggle works

3. **`api/site/leads.js`** (Vercel function)
   - Test: Request validation
   - Test: Response structure

#### Tasks

1. **Create `src/pages/NotFoundPage.test.js`**
   - Verify 404 content renders
   - Verify navigation link works

2. **Create `src/components/Header/Header.test.js`** (if Header has interactions)
   - Test navigation rendering
   - Test any interactive elements

3. **Run coverage report**
   ```bash
   npm run test:coverage
   ```

**Note:** Coverage percentage is informational, not a merge gate. For a marketing site, strict coverage thresholds add friction without proportional value.

**Files to create:** 2-3 test files

---

### Phase 5: Final Cleanup

**Goal:** Ensure clean, consistent codebase ready for iteration.

#### Tasks

1. **Remove unused code**
   - Run ESLint to identify unused variables/imports
   - Remove dead code paths

2. **Verify build integrity**
   - Run `npm run build`
   - Confirm no new warnings
   - Verify `dist/` output is correct

3. **Update documentation**
   - Add "Development" section to README if missing
   - Document lint/format commands

4. **Final CI verification**
   - Push changes to a PR
   - Verify all CI jobs pass
   - Confirm workflow runs lint, format check, test, and build

---

## Definition of Done Checklist

- [ ] ESLint configured with React rules (covers `src/` and `api/`)
- [ ] Prettier configured for entire project
- [ ] `.editorconfig` in place
- [ ] `npm run lint:ci` passes with zero warnings
- [ ] `npm run format:check` passes with no violations
- [ ] CI workflow enforces linting and formatting
- [ ] Tests cover NotFoundPage (404)
- [ ] Tests cover any new interactive components
- [ ] New interactions have tests (coverage % is informational)
- [ ] No new runtime dependencies added
- [ ] Clean build with no warnings

---

## Files to Create/Modify Summary

| Action | File                                               |
| ------ | -------------------------------------------------- |
| Create | `eslint.config.js`                                 |
| Create | `.prettierrc`                                      |
| Create | `.prettierignore`                                  |
| Create | `.editorconfig`                                    |
| Create | `src/pages/NotFoundPage.test.js`                   |
| Create | `src/components/Header/Header.test.js` (if needed) |
| Modify | `package.json` (scripts + devDependencies)         |
| Modify | `.github/workflows/ci.yml`                         |

---

## Risks & Mitigations

| Risk                                        | Mitigation                                                       |
| ------------------------------------------- | ---------------------------------------------------------------- |
| Large formatting diff on first Prettier run | Apply in single dedicated commit, clearly labeled                |
| ESLint rules too strict for existing code   | Start with recommended rules, disable problematic ones as needed |
| "Works locally, fails in CI" confusion      | Separate `lint` (dev) and `lint:ci` (strict) scripts             |

---

## Execution Order

1. Phase 1 (ESLint) — Foundation for code quality
2. Phase 2 (Prettier + EditorConfig) — Consistent formatting
3. Phase 3 (CI) — Enforce quality gates
4. Phase 4 (Tests) — Extend coverage
5. Phase 5 (Cleanup) — Final polish

Each phase should be a separate PR for clean review and easy rollback if needed.
