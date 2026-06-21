'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

type FormState = {
  name: string
  email: string
  phone: string
  eventDate: string
  eventType: string
  guestCount: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

function validate(form: FormState): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Please tell us a bit about your event.'
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    message: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors = validate(form)
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setLoading(true)
    // Simulate submission — replace with actual API/Formspree endpoint
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Get in Touch</span>
            <span className="gold-rule" />
            <h1 className="contact-h1">Let's Build<br /><em>Something Great.</em></h1>
            <p className="contact-hero-sub">
              Tell us about your event and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Contact Layout ───────────────────────────────────────── */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-layout">

            {/* Form */}
            <AnimatedSection className="contact-form-wrap">
              {submitted ? (
                <div className="contact-success">
                  <div className="contact-success__icon" aria-hidden="true">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="14" stroke="var(--gold)" strokeWidth="1.5"/>
                      <path d="M10 16l4 4 8-8" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3>Message Received!</h3>
                  <p>
                    Thanks for reaching out. We'll review your details and
                    get back to you within 24 hours.
                  </p>
                  <button className="btn btn-outline" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', eventDate: '', eventType: '', guestCount: '', message: '' }) }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                      <label htmlFor="name">Your Name <span aria-hidden="true">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        autoComplete="name"
                      />
                      {errors.name && <span className="form-error" role="alert">{errors.name}</span>}
                    </div>

                    <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                      <label htmlFor="email">Email Address <span aria-hidden="true">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error" role="alert">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">Phone <span className="form-optional">(optional)</span></label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(206) 555-0000"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventDate">Event Date <span className="form-optional">(optional)</span></label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={form.eventDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="eventType">Event Type</label>
                      <select id="eventType" name="eventType" value={form.eventType} onChange={handleChange}>
                        <option value="">Select an event type…</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="team-building">Team Building</option>
                        <option value="wedding">Wedding / Reception</option>
                        <option value="birthday">Birthday Party</option>
                        <option value="trade-show">Trade Show</option>
                        <option value="private-party">Private Party</option>
                        <option value="school">School / Community</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="guestCount">Expected Guests</label>
                      <select id="guestCount" name="guestCount" value={form.guestCount} onChange={handleChange}>
                        <option value="">How many guests?</option>
                        <option value="under-25">Under 25</option>
                        <option value="25-50">25 – 50</option>
                        <option value="50-100">50 – 100</option>
                        <option value="100-200">100 – 200</option>
                        <option value="200+">200+</option>
                      </select>
                    </div>
                  </div>

                  <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
                    <label htmlFor="message">Tell Us About Your Event <span aria-hidden="true">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Where is the event? What's the occasion? Any specific questions or requests?"
                    />
                    {errors.message && <span className="form-error" role="alert">{errors.message}</span>}
                  </div>

                  <button type="submit" className={`btn btn-primary form-submit${loading ? ' form-submit--loading' : ''}`} disabled={loading}>
                    {loading ? (
                      <>
                        <span className="spinner" aria-hidden="true" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={150} className="contact-sidebar">
              <div className="contact-info">
                <span className="eyebrow">Direct Contact</span>
                <span className="gold-rule" />

                <div className="contact-info__items">
                  <div className="contact-info__item">
                    <div className="contact-info__icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        <path d="M1 4.5l7 5 7-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Email</span>
                      <a href="mailto:pnwsimulators@gmail.com" className="contact-info__value">pnwsimulators@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-info__item">
                    <div className="contact-info__icon" aria-hidden="true">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5s4.5-4.75 4.5-8.5C12.5 3.51 10.49 1.5 8 1.5z" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                      </svg>
                    </div>
                    <div>
                      <span className="contact-info__label">Location</span>
                      <span className="contact-info__value">Seattle, Washington</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-respond">
                <div className="contact-respond__badge">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="6.5" stroke="var(--gold)" strokeWidth="1"/>
                    <path d="M8 4.5v3.75l2.25 1.5" stroke="var(--gold)" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  We respond within 24 hours
                </div>
                <p>
                  Give us as much detail as you can about your event and we'll
                  come back with a custom quote. No commitment required.
                </p>
              </div>

              <div className="contact-service-area">
                <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'block' }}>Service Area</span>
                <p className="contact-service-area__text">
                  Greater Seattle, Eastside, South Sound, and surrounding Pacific
                  Northwest. Have an event further out? Ask us and we may be able to help.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <style>{`
        .contact-h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          margin-top: 0.5rem;
        }
        .contact-h1 em { font-style: italic; color: var(--gold); }

        .contact-hero-sub {
          font-size: 0.95rem;
          color: var(--muted);
          margin-top: 1rem;
          max-width: 380px;
        }

        /* Layout */
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 4rem;
          align-items: start;
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .form-group label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--parchment);
        }

        .form-group label span[aria-hidden] {
          color: var(--gold);
        }

        .form-optional {
          font-weight: 400;
          text-transform: none;
          letter-spacing: 0;
          color: var(--muted);
          font-size: 0.72rem;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          background: var(--deep);
          border: 1px solid var(--border-sub);
          border-radius: 2px;
          color: var(--cream);
          font-family: var(--font-body);
          font-size: 0.9rem;
          padding: 0.75rem 1rem;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          outline: none;
          -webkit-appearance: none;
        }

        .form-group select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23C9AB6E' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: rgba(243, 237, 225, 0.25);
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: var(--gold);
          box-shadow: 0 0 0 3px var(--gold-dim);
        }

        .form-group--error input,
        .form-group--error textarea {
          border-color: #c0392b;
        }

        .form-error {
          font-size: 0.75rem;
          color: #e07060;
          margin-top: 0.1rem;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group input[type="date"] {
          color-scheme: dark;
        }

        .form-submit {
          align-self: flex-start;
          min-width: 160px;
          justify-content: center;
        }

        .form-submit--loading {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(11, 26, 11, 0.3);
          border-top-color: var(--forest);
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          flex-shrink: 0;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        /* Success */
        .contact-success {
          background: var(--deep);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 3rem 2.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .contact-success__icon {
          width: 64px;
          height: 64px;
          background: var(--gold-dim);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.5rem;
        }

        .contact-success h3 {
          font-size: 1.5rem;
        }

        .contact-success p {
          font-size: 0.9rem;
          color: var(--muted);
          max-width: 360px;
        }

        /* Sidebar */
        .contact-sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          position: sticky;
          top: 100px;
        }

        .contact-info {
          background: var(--deep);
          border: 1px solid var(--border-sub);
          border-radius: 4px;
          padding: 2rem;
        }

        .contact-info__items {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-top: 0.5rem;
        }

        .contact-info__item {
          display: flex;
          gap: 0.9rem;
          align-items: flex-start;
        }

        .contact-info__icon {
          width: 34px;
          height: 34px;
          background: var(--gold-dim);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
        }

        .contact-info__label {
          display: block;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--muted);
          margin-bottom: 0.2rem;
        }

        .contact-info__value {
          font-size: 0.88rem;
          color: var(--cream);
          transition: color 0.2s ease;
        }

        a.contact-info__value:hover {
          color: var(--gold);
        }

        .contact-respond {
          background: var(--moss);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 1.5rem;
        }

        .contact-respond__badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--gold);
          margin-bottom: 0.75rem;
        }

        .contact-respond p {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.7;
        }

        .contact-service-area {
          border-top: 1px solid var(--border-sub);
          padding-top: 1.5rem;
        }

        .contact-service-area__text {
          font-size: 0.82rem;
          color: var(--muted);
          line-height: 1.7;
        }

        @media (max-width: 900px) {
          .contact-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-sidebar {
            position: static;
          }
        }

        @media (max-width: 580px) {
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
