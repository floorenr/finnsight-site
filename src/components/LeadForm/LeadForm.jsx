import { useState, useId } from 'react';
import { Link } from 'react-router-dom';

const ROLE_OPTIONS = [
  { value: '', label: 'Selecteer je rol...' },
  { value: 'werkgever', label: 'Werkgever / HR' },
  { value: 'medewerker', label: 'Medewerker' },
  { value: 'adviseur', label: 'Adviseur' },
  { value: 'anders', label: 'Anders' },
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LeadForm({ onSuccess, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    email: '',
    consent: false,
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [serverError, setServerError] = useState('');

  const formId = useId();

  const requiresCompany = formData.role === 'werkgever';

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Vul je naam in (minimaal 2 tekens)';
    }

    if (!formData.role) {
      newErrors.role = 'Selecteer je rol';
    }

    if (requiresCompany && !formData.company.trim()) {
      newErrors.company = 'Vul je organisatie in';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vul je e-mailadres in';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      newErrors.email = 'Vul een geldig e-mailadres in';
    }

    if (!formData.consent) {
      newErrors.consent = 'Je moet akkoord gaan om door te gaan';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus('submitting');
    setServerError('');

    try {
      const response = await fetch('/api/site/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          role: formData.role,
          company: formData.company.trim(),
          email: formData.email.trim().toLowerCase(),
          consent: formData.consent,
          source: window.location.href,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setServerError(
        error.message ||
          'Er is iets misgegaan. Probeer het later opnieuw of mail naar hello@finnsight.nl'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="form-success" role="alert" aria-live="polite">
        <div className="success-icon">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="success-title">Bedankt voor je interesse!</h3>
        <p className="success-message">
          We nemen binnen 2 werkdagen contact met je op via <strong>{formData.email}</strong>.
        </p>
        <button type="button" className="success-close" onClick={onClose}>
          Sluiten
        </button>
      </div>
    );
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      {status === 'error' && serverError && (
        <div className="form-error-message" role="alert">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{serverError}</span>
        </div>
      )}

      {/* Name */}
      <div className="form-group">
        <label htmlFor={`${formId}-name`} className="form-label">
          Naam{' '}
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="text"
          id={`${formId}-name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`form-input ${errors.name ? 'error' : ''}`}
          placeholder="Je volledige naam"
          aria-required="true"
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? `${formId}-name-error` : undefined}
          autoComplete="name"
        />
        {errors.name && (
          <span id={`${formId}-name-error`} className="form-error" role="alert">
            {errors.name}
          </span>
        )}
      </div>

      {/* Role */}
      <div className="form-group">
        <label htmlFor={`${formId}-role`} className="form-label">
          Rol{' '}
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <select
          id={`${formId}-role`}
          name="role"
          value={formData.role}
          onChange={handleChange}
          className={`form-select ${errors.role ? 'error' : ''}`}
          aria-required="true"
          aria-invalid={errors.role ? 'true' : 'false'}
          aria-describedby={errors.role ? `${formId}-role-error` : undefined}
        >
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.role && (
          <span id={`${formId}-role-error`} className="form-error" role="alert">
            {errors.role}
          </span>
        )}
      </div>

      {/* Company (conditional) */}
      <div className="form-group">
        <label htmlFor={`${formId}-company`} className="form-label">
          Organisatie{' '}
          {requiresCompany && (
            <span className="required" aria-hidden="true">
              *
            </span>
          )}
        </label>
        <input
          type="text"
          id={`${formId}-company`}
          name="company"
          value={formData.company}
          onChange={handleChange}
          className={`form-input ${errors.company ? 'error' : ''}`}
          placeholder="Naam van je organisatie"
          aria-required={requiresCompany ? 'true' : 'false'}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? `${formId}-company-error` : undefined}
          autoComplete="organization"
        />
        {errors.company && (
          <span id={`${formId}-company-error`} className="form-error" role="alert">
            {errors.company}
          </span>
        )}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor={`${formId}-email`} className="form-label">
          E-mailadres{' '}
          <span className="required" aria-hidden="true">
            *
          </span>
        </label>
        <input
          type="email"
          id={`${formId}-email`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'error' : ''}`}
          placeholder="naam@voorbeeld.nl"
          aria-required="true"
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <span id={`${formId}-email-error`} className="form-error" role="alert">
            {errors.email}
          </span>
        )}
      </div>

      {/* Consent */}
      <div className="form-group">
        <div className="consent-group">
          <input
            type="checkbox"
            id={`${formId}-consent`}
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="consent-checkbox"
            aria-required="true"
            aria-invalid={errors.consent ? 'true' : 'false'}
            aria-describedby={errors.consent ? `${formId}-consent-error` : undefined}
          />
          <label htmlFor={`${formId}-consent`} className="consent-label">
            Ik ga akkoord met het ontvangen van pilotinformatie per e-mail. Mijn gegevens worden
            alleen gebruikt om contact op te nemen over de pilot.
          </label>
        </div>
        {errors.consent && (
          <span id={`${formId}-consent-error`} className="form-error" role="alert">
            {errors.consent}
          </span>
        )}
      </div>

      {/* Privacy Notice */}
      <div className="privacy-notice">
        Dit is geen financieel intakeformulier. We verzamelen geen financiële gegevens via dit
        formulier. Zie onze{' '}
        <Link to="/privacy" onClick={onClose}>
          privacyvoorwaarden
        </Link>{' '}
        voor meer informatie.
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="form-submit"
        disabled={status === 'submitting'}
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <span className="spinner" aria-hidden="true" />
            Versturen...
          </>
        ) : (
          'Verstuur aanvraag'
        )}
      </button>
    </form>
  );
}
