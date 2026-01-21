/**
 * Website-only lead capture endpoint.
 * NOT part of Finnsight core domain - operational website functionality only.
 *
 * Sends lead submissions directly to hello@finnsight.nl via Resend.
 * No database storage - email-only for simplicity.
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'hello@finnsight.nl'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALID_ROLES = ['werkgever', 'medewerker', 'adviseur', 'anders']

function validateInput(body) {
  const errors = []

  if (!body.name || typeof body.name !== 'string' || body.name.trim().length < 2) {
    errors.push('Vul je naam in (minimaal 2 tekens)')
  }

  if (!body.role || !VALID_ROLES.includes(body.role)) {
    errors.push('Selecteer een geldige rol')
  }

  if (body.role === 'werkgever' && (!body.company || body.company.trim().length === 0)) {
    errors.push('Vul je organisatie in')
  }

  if (!body.email || !EMAIL_REGEX.test(body.email)) {
    errors.push('Vul een geldig e-mailadres in')
  }

  if (body.consent !== true) {
    errors.push('Je moet akkoord gaan om door te gaan')
  }

  return errors
}

async function sendNotificationEmail(data) {
  const roleLabels = {
    werkgever: 'Werkgever/HR',
    medewerker: 'Medewerker',
    adviseur: 'Adviseur',
    anders: 'Anders',
  }

  const timestamp = new Date().toLocaleString('nl-NL', {
    timeZone: 'Europe/Amsterdam',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Finnsight Website <noreply@finnsight.nl>',
      to: [NOTIFICATION_EMAIL],
      reply_to: data.email,
      subject: `Pilotaanvraag: ${data.name} (${roleLabels[data.role]})`,
      html: `
        <h2>Nieuwe pilotaanvraag ontvangen</h2>
        <p style="color: #666; margin-bottom: 20px;">Ontvangen op ${timestamp}</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb; width: 140px;"><strong>Naam</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Rol</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${roleLabels[data.role]}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Organisatie</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.company || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>E-mail</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;"><a href="mailto:${data.email}">${data.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb; background: #f9fafb;"><strong>Bron</strong></td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">${data.source || 'direct'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; padding: 12px; background: #fef3c7; border-radius: 6px; color: #92400e;">
          <strong>Actie:</strong> Neem binnen 2 werkdagen contact op met ${data.name}.
        </p>
        <p style="margin-top: 16px; font-size: 12px; color: #9ca3af;">
          Je kunt direct antwoorden op deze e-mail om ${data.name} te bereiken.
        </p>
      `,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Notification email failed: ${response.status} - ${errorText}`)
  }

  return response.json()
}

async function sendConfirmationEmail(data) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Finnsight <hello@finnsight.nl>',
      to: [data.email],
      reply_to: NOTIFICATION_EMAIL,
      subject: 'Bedankt voor je pilotaanvraag - Finnsight',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e293b;">Bedankt voor je interesse in Finnsight, ${data.name}!</h2>

          <p style="color: #475569; line-height: 1.6;">
            We hebben je aanvraag voor pilotinformatie ontvangen. Fijn dat je geïnteresseerd bent in hoe Finnsight kan helpen bij het bieden van financieel inzicht aan medewerkers.
          </p>

          <p style="color: #475569; line-height: 1.6;">
            <strong>Wat kun je verwachten?</strong><br>
            We nemen binnen 2 werkdagen contact met je op via dit e-mailadres om je vragen te beantwoorden en de mogelijkheden te bespreken.
          </p>

          <p style="color: #475569; line-height: 1.6;">
            Heb je in de tussentijd vragen? Je kunt altijd antwoorden op deze e-mail.
          </p>

          <p style="color: #475569; line-height: 1.6; margin-top: 32px;">
            Met vriendelijke groet,<br>
            <strong>Team Finnsight</strong>
          </p>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />

          <p style="font-size: 12px; color: #9ca3af;">
            Dit is een automatisch gegenereerde e-mail. Je ontvangt deze omdat je het pilotformulier op finnsight.nl hebt ingevuld.
          </p>
        </div>
      `,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Confirmation email failed: ${response.status} - ${errorText}`)
  }

  return response.json()
}

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  // Check required environment variables
  if (!RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable')
    return res.status(500).json({
      success: false,
      error: 'Er is iets misgegaan. Probeer het later opnieuw of mail naar hello@finnsight.nl',
    })
  }

  try {
    const { name, role, company, email, consent, source } = req.body

    // Validate input
    const validationErrors = validateInput({ name, role, company, email, consent })
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        error: validationErrors[0],
        errors: validationErrors,
      })
    }

    // Sanitize data
    const leadData = {
      name: name.trim(),
      role,
      company: company ? company.trim() : '',
      email: email.trim().toLowerCase(),
      source: source || req.headers.referer || 'direct',
    }

    // Send notification to Finnsight team
    await sendNotificationEmail(leadData)

    // Send confirmation to the requester
    await sendConfirmationEmail(leadData)

    return res.status(201).json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return res.status(500).json({
      success: false,
      error: 'Er is iets misgegaan. Probeer het later opnieuw of mail naar hello@finnsight.nl',
    })
  }
}
