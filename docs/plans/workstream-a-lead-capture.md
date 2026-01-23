# Workstream A: Conversion & Lead Capture Implementation Plan

## Objective

Replace all `mailto:` CTAs with a unified lead capture form, sending submissions directly to hello@finnsight.nl—privacy-first, cookie-less, no database.

---

## Architecture Overview

```
CTA → Modal → Form → /api/site/leads → Email to hello@finnsight.nl
```

**Components:**

- `LeadModal.jsx` - Modal overlay with focus trap
- `LeadForm.jsx` - Form with validation and states
- `CTAButton.jsx` - Unified button triggering modal
- `ModalContext.jsx` - Website-only UI state (scoped to site, not product)
- `/api/site/leads.js` - Sends leads directly to email via Resend

---

## Files Modified

| File                             | Changes                                                         |
| -------------------------------- | --------------------------------------------------------------- |
| `src/pages/LandingPage.jsx`      | Replaced 3 mailto buttons + footer link with CTAButton          |
| `src/components/Header.jsx`      | Replaced Contact mailto with CTAButton                          |
| `src/pages/TrustPage.jsx`        | Replaced inline/footer mailto links with CTAButton              |
| `src/pages/PrivacyTermsPage.jsx` | Replaced contact links + added "Pilotformulier" privacy section |
| `src/App.jsx`                    | Wrapped with ModalContext.Provider, added LeadModal             |
| `src/styles/main.css`            | Added text button styling                                       |

## Files Created

| File                                     | Purpose                                      |
| ---------------------------------------- | -------------------------------------------- |
| `src/components/LeadModal/LeadModal.jsx` | Modal component with accessibility           |
| `src/components/LeadModal/LeadModal.css` | Modal and form styles                        |
| `src/components/LeadForm/LeadForm.jsx`   | Form component with validation               |
| `src/components/CTAButton/CTAButton.jsx` | Unified CTA button                           |
| `src/context/site/ModalContext.jsx`      | Website-only modal state                     |
| `api/site/leads.js`                      | Serverless endpoint - sends email via Resend |

---

## Form Specification

**Unified CTA text:** "Vraag pilotinformatie aan" (employer-first framing)

**Fields:**
| Field | Type | Required | Validation |
|-------|------|----------|------------|
| Naam | text | Yes | min 2 chars |
| Rol | select | Yes | Werkgever/HR, Medewerker, Adviseur, Anders |
| Organisatie | text | Conditional | Required if Rol = Werkgever/HR |
| E-mailadres | email | Yes | Valid email format |
| Toestemming | checkbox | Yes | Must be checked |

**Privacy notice (below form):**

> Dit is geen financieel intakeformulier. We verzamelen geen financiële gegevens via dit formulier.

**Success message:**

> Bedankt voor je interesse in de Finnsight pilot! We nemen binnen 2 werkdagen contact met je op via het opgegeven e-mailadres.

---

## API Specification

**Endpoint:** `POST /api/site/leads`

**Request:**

```json
{
  "name": "string",
  "role": "werkgever|medewerker|adviseur|anders",
  "company": "string (optional)",
  "email": "string",
  "consent": true,
  "source": "URL"
}
```

**Response (201):** `{ "success": true }`
**Response (400):** `{ "success": false, "error": "message" }`

**Behavior:**

- Validates input
- Sends formatted notification email to hello@finnsight.nl with lead details
- Sends confirmation email to the requester
- Reply-to set appropriately for easy two-way communication
- No database storage

---

## Environment Variables

```
RESEND_API_KEY=re_xxxxx
NOTIFICATION_EMAIL=hello@finnsight.nl  # optional, defaults to hello@finnsight.nl
```

**Note:** Airtable variables removed. Only Resend API key needed.

---

## Verification

1. **Unit tests:** `npm test` passes
2. **Manual verification:**
   - Click each CTA on landing, header, trust, privacy pages → modal opens
   - Submit form → success message shown
   - Check hello@finnsight.nl inbox → lead email received
   - Reply to email → reaches submitter
3. **Accessibility:** Test with keyboard only, VoiceOver
4. **Mobile:** Test on iOS Safari, Android Chrome

---

## Founder Decisions (Resolved)

| Decision         | Choice             | Implication                                                            |
| ---------------- | ------------------ | ---------------------------------------------------------------------- |
| Primary audience | **Employer-first** | CTA copy targets werkgevers; employees/adviseurs allowed but secondary |
| Response SLA     | **Hard promise**   | "binnen 2 werkdagen" — requires operational guarantee                  |
| Storage          | **Email-only**     | No database; leads arrive directly in hello@finnsight.nl               |

---

## Out of Scope (Future)

- Database/CRM storage (Airtable, Supabase)
- Email verification/double opt-in
- UTM tracking
- Calendar booking integration
- A/B testing
