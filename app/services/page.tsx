import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Full-service mobile golf simulator rentals for events in Seattle and the Pacific Northwest. Indoor, outdoor, custom packages available.',
}

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="8" width="22" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 8V6a4 4 0 018 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Mobile Golf Simulator',
    tagline: 'The full experience, anywhere.',
    description:
      'Our professional-grade simulator projects onto a high-quality impact screen and tracks ball flight, speed, spin, and trajectory. Guests can play real world courses or practice games. Zero golf experience required.',
    includes: [
      'High-definition impact screen',
      'Professional launch monitor',
      'Real-world course library',
      'Multiplayer game modes',
      'Works indoors and outdoors',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22V10l10-6 10 6v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="10" y="14" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Setup & Breakdown',
    tagline: 'Turnkey. Zero lift from you.',
    description:
      'Our team handles everything from arrival through teardown. We arrive 90–120 minutes before your event, set up professionally, and pack everything up when the event concludes. Your only job is to enjoy it.',
    includes: [
      'Delivery & logistics handled',
      'Professional installation',
      'On-site attendant available',
      'Full teardown & cleanup',
      'Typically 2-hour setup window',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 4v4M14 20v4M4 14h4M20 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="3" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
    title: 'Indoor & Outdoor Events',
    tagline: 'The PNW in all conditions.',
    description:
      'Whether you\'re in a ballroom, a backyard, a warehouse, or a park, we\'re built for it. Our equipment is designed for flexibility and looks great in any environment. We\'ll assess your space and make it work.',
    includes: [
      'Indoor ballrooms & venues',
      'Outdoor spaces & parks',
      'Patios & covered areas',
      'Warehouses & large halls',
      'Weather contingency planning',
    ],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 20h16M6 14h10M6 8h13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M20 17l4-3-4-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Packages',
    tagline: 'Your event, your rules.',
    description:
      'No two events are the same. We offer flexible packages based on duration, headcount, location, and add-ons. Tell us what you\'re planning and we\'ll build a quote that works within your budget.',
    includes: [
      '2, 4, and full-day rental blocks',
      'Multi-bay configurations',
      'Corporate branding options',
      'Skill contest & tournament modes',
      'Pricing tailored to your needs',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">What We Offer</span>
            <span className="gold-rule" />
            <h1 className="services-h1">Everything Included.<br /><em>Nothing Overlooked.</em></h1>
            <p className="services-hero-sub">
              One rental covers the full experience: equipment, setup, operation, and teardown.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="section services-list">
        <div className="container">
          <div className="services-grid">
            {services.map(({ icon, title, tagline, description, includes }, i) => (
              <AnimatedSection key={title} delay={i * 100}>
                <div className="service-card">
                  <div className="service-card__header">
                    <div className="service-card__icon" aria-hidden="true">{icon}</div>
                    <div>
                      <span className="service-card__tagline">{tagline}</span>
                      <h3 className="service-card__title">{title}</h3>
                    </div>
                  </div>

                  <div className="service-card__rule" aria-hidden="true" />

                  <p className="service-card__desc">{description}</p>

                  <ul className="service-card__includes">
                    {includes.map(item => (
                      <li key={item}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <path d="M2 6l3 3 5-5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── What's Always Included ───────────────────────────────── */}
      <section className="section section--alt always-included">
        <div className="container">
          <AnimatedSection>
            <div className="always-included__inner">
              <div className="always-included__text">
                <span className="eyebrow">Every Booking</span>
                <span className="gold-rule" />
                <h2>Always Included,<br /><em>Always.</em></h2>
                <p>
                  No hidden fees. No surprise add-ons. Every rental includes
                  our full professional setup, an on-site point of contact,
                  and complete teardown.
                </p>
              </div>

              <div className="always-included__grid">
                {[
                  ['Delivery', 'We bring it to you.'],
                  ['Full Setup', '90–120 min install.'],
                  ['Guest Instruction', 'We get everyone playing.'],
                  ['Teardown', 'Leave it better than we found it.'],
                  ['Tech Support', 'On-site the whole time.'],
                  ['No Experience Needed', 'Beginners welcome.'],
                ].map(([label, sub]) => (
                  <div key={label} className="always-item">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <circle cx="7" cy="7" r="6" stroke="var(--gold)" strokeWidth="1"/>
                      <path d="M4 7l2 2 4-4" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div>
                      <strong>{label}</strong>
                      <span>{sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section services-cta">
        <div className="container">
          <AnimatedSection>
            <div className="services-cta__inner">
              <h2>Build Your Package</h2>
              <p>
                Every event has a budget and a vision. Share yours and we'll
                create something that works.
              </p>
              <div className="services-cta__btns">
                <Link href="/contact?type=quote" className="btn btn-primary">Get a Free Quote</Link>
                <Link href="/contact" className="btn btn-outline">Ask a Question</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        .services-h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          margin-top: 0.5rem;
        }

        .services-h1 em { font-style: italic; color: var(--gold); }

        .services-hero-sub {
          font-size: 0.95rem;
          color: var(--muted);
          margin-top: 1rem;
          max-width: 420px;
        }

        /* Services Grid */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .service-card {
          background: var(--deep);
          border: 1px solid var(--border-sub);
          border-radius: 4px;
          padding: 2.5rem;
          transition: border-color 0.3s ease;
        }

        .service-card:hover {
          border-color: var(--border);
        }

        .service-card__header {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .service-card__icon {
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          background: var(--gold-dim);
          border: 1px solid var(--border);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
        }

        .service-card__tagline {
          display: block;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 0.3rem;
        }

        .service-card__title {
          font-size: 1.2rem;
          font-weight: 500;
        }

        .service-card__rule {
          width: 100%;
          height: 1px;
          background: var(--border-sub);
          margin-bottom: 1.5rem;
        }

        .service-card__desc {
          font-size: 0.88rem;
          line-height: 1.75;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .service-card__includes {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.55rem;
        }

        .service-card__includes li {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
          color: var(--parchment);
        }

        /* Always Included */
        .always-included__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        .always-included__text h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .always-included__text p {
          font-size: 0.9rem;
          color: var(--muted);
          margin-top: 1rem;
        }

        .always-included__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .always-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .always-item svg { flex-shrink: 0; margin-top: 3px; }

        .always-item strong {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--cream);
          margin-bottom: 0.15rem;
        }

        .always-item span {
          font-size: 0.77rem;
          color: var(--muted);
        }

        /* Services CTA */
        .services-cta { text-align: center; }

        .services-cta__inner {
          max-width: 480px;
          margin-inline: auto;
        }

        .services-cta__inner p {
          color: var(--muted);
          font-size: 0.95rem;
          margin-top: 0.75rem;
        }

        .services-cta__btns {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        @media (max-width: 900px) {
          .always-included__inner { grid-template-columns: 1fr; gap: 3rem; }
        }

        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
          .always-included__grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
