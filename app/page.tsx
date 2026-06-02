import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'PNW Simulators — Mobile Golf Simulator Events in Seattle',
}

const eventTypes = [
  {
    number: '01',
    title: 'Corporate Events',
    description:
      'Elevate team outings, client entertainment, and company celebrations with a premium golf experience your guests will talk about.',
  },
  {
    number: '02',
    title: 'Weddings',
    description:
      'Add a memorable touch to your reception or rehearsal dinner. A crowd-pleasing activity for guests of all skill levels.',
  },
  {
    number: '03',
    title: 'Birthday Parties',
    description:
      'Make their day unforgettable. Indoor or outdoor, we bring the full setup wherever the party is.',
  },
  {
    number: '04',
    title: 'School & Community',
    description:
      'Fundraisers, school events, and community gatherings — we make golf accessible and exciting for everyone.',
  },
]

const steps = [
  { num: '1', title: 'Request a Quote', body: 'Tell us about your event — date, size, venue. We\'ll respond within 24 hours.' },
  { num: '2', title: 'We Handle Setup', body: 'Our team arrives early and handles full installation. You focus on your guests.' },
  { num: '3', title: 'Play & Enjoy', body: 'Guests swing, compete, and create lasting memories. We pack up when you\'re done.' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="container hero__content">
          <div className="hero__eyebrow-wrap">
            <span className="eyebrow">Seattle, Washington</span>
            <span className="hero__dot" aria-hidden="true" />
            <span className="eyebrow">Est. 2024</span>
          </div>

          <h1 className="hero__headline">
            <span className="hero__headline-line hero__headline-pnw">PNW</span>
            <span className="hero__headline-line">Simulators</span>
          </h1>

          <div className="hero__divider" aria-hidden="true" />

          <p className="hero__tagline">
            Mobile Golf Simulator Experiences<br />
            for Events in the Pacific Northwest
          </p>

          <div className="hero__ctas">
            <Link href="/contact" className="btn btn-primary">
              Book an Event
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact?type=quote" className="btn btn-outline">
              Get a Quote
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">Indoor</span>
              <span className="hero__stat-label">& Outdoor</span>
            </div>
            <div className="hero__stat-div" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-num">Full</span>
              <span className="hero__stat-label">Setup Included</span>
            </div>
            <div className="hero__stat-div" aria-hidden="true" />
            <div className="hero__stat">
              <span className="hero__stat-num">Custom</span>
              <span className="hero__stat-label">Packages</span>
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── What We Do ───────────────────────────────────────────── */}
      <section className="section what-we-do">
        <div className="container">
          <div className="what-we-do__inner">
            <AnimatedSection className="what-we-do__text">
              <span className="eyebrow">What We Do</span>
              <span className="gold-rule" />
              <h2>Bring the Course<br /><em>to Your Event</em></h2>
              <p>
                PNW Simulators delivers a professional-grade golf simulator
                experience straight to your venue. No tee times. No dress codes.
                Just an unforgettable activity your guests will love — whether
                they've never held a club or shoot under par.
              </p>
              <p>
                We handle everything: delivery, setup, operation, and teardown.
                You get a turnkey experience that makes you look great as a host.
              </p>
              <Link href="/services" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                See All Services
              </Link>
            </AnimatedSection>

            <AnimatedSection className="what-we-do__feature" delay={150}>
              <div className="feature-card">
                <div className="feature-card__icon" aria-hidden="true">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                    <path d="M16 4v3M16 25v3M4 16h3M25 16h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M8.5 8.5l2.1 2.1M21.4 21.4l2.1 2.1M8.5 23.5l2.1-2.1M21.4 10.6l2.1-2.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>Any Venue. Any Event.</h3>
                <p>
                  Backyards, ballrooms, warehouses, parks — if there's space,
                  we'll make it work. Our portable setup is designed for
                  flexibility without sacrificing quality.
                </p>
                <div className="feature-card__list">
                  {['Indoor & outdoor ready', 'Setup in under 2 hours', 'Works on any surface', 'Professional-grade simulator tech'].map(item => (
                    <div key={item} className="feature-card__list-item">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Event Types ──────────────────────────────────────────── */}
      <section className="section section--alt events-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Who We Serve</span>
            <span className="gold-rule" />
            <h2>Events We Love</h2>
            <p className="section-header__sub">
              From corporate retreats to wedding receptions, we bring the perfect
              experience to any occasion.
            </p>
          </AnimatedSection>

          <div className="events-grid">
            {eventTypes.map(({ number, title, description }, i) => (
              <AnimatedSection key={number} delay={i * 80}>
                <div className="event-card">
                  <span className="event-card__num">{number}</span>
                  <div className="event-card__rule" aria-hidden="true" />
                  <h3 className="event-card__title">{title}</h3>
                  <p className="event-card__desc">{description}</p>
                  <Link href="/contact" className="event-card__link">
                    Inquire
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6h8M6.5 2.5L10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="section how-it-works">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">Simple Process</span>
            <span className="gold-rule" />
            <h2>How It Works</h2>
          </AnimatedSection>

          <div className="steps-grid">
            {steps.map(({ num, title, body }, i) => (
              <AnimatedSection key={num} delay={i * 100}>
                <div className="step">
                  <div className="step__num">{num}</div>
                  <h3 className="step__title">{title}</h3>
                  <p className="step__body">{body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Pricing Teaser ───────────────────────────────────────── */}
      <section className="pricing-cta">
        <div className="container">
          <AnimatedSection>
            <div className="pricing-cta__inner">
              <span className="eyebrow">Pricing</span>
              <span className="gold-rule gold-rule--center" />
              <h2>Custom Packages<br /><em>Built for Your Event</em></h2>
              <p>
                Every event is different. We offer flexible packages based on
                duration, size, and location — starting at rates that work for
                birthdays and scale up to full corporate productions.
              </p>
              <div className="pricing-cta__tag">Starting at customizable packages</div>
              <div className="hero__ctas">
                <Link href="/contact?type=quote" className="btn btn-primary">
                  Get a Free Quote
                </Link>
                <Link href="/services" className="btn btn-outline">
                  View Services
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        /* ── Hero ────────────────────────────────────────────────── */
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding-top: 72px;
          overflow: hidden;
        }

        .hero__bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(201, 171, 110, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201, 171, 110, 0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%);
        }

        .hero__content {
          position: relative;
          z-index: 1;
          padding-block: clamp(4rem, 8vw, 8rem);
        }

        .hero__eyebrow-wrap {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s var(--ease-out-expo) both;
        }

        .hero__dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.6;
          flex-shrink: 0;
        }

        .hero__headline {
          display: flex;
          flex-direction: column;
          animation: fadeInUp 0.9s 0.1s var(--ease-out-expo) both;
        }

        .hero__headline-line {
          display: block;
          line-height: 0.95;
        }

        .hero__headline-pnw {
          color: var(--gold);
          font-style: italic;
        }

        .hero__divider {
          width: 80px;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), transparent);
          margin-block: 2rem;
          animation: fadeInUp 0.8s 0.2s var(--ease-out-expo) both;
        }

        .hero__tagline {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--muted);
          font-weight: 300;
          line-height: 1.8;
          max-width: 520px;
          animation: fadeInUp 0.8s 0.25s var(--ease-out-expo) both;
        }

        .hero__ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2.5rem;
          animation: fadeInUp 0.8s 0.35s var(--ease-out-expo) both;
        }

        .hero__stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border-sub);
          flex-wrap: wrap;
          animation: fadeInUp 0.8s 0.45s var(--ease-out-expo) both;
        }

        .hero__stat {
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .hero__stat-num {
          font-family: var(--font-display);
          font-size: 1.25rem;
          font-weight: 500;
          color: var(--cream);
        }

        .hero__stat-label {
          font-size: 0.72rem;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: var(--muted);
          text-transform: uppercase;
        }

        .hero__stat-div {
          width: 1px;
          height: 32px;
          background: var(--border-sub);
        }

        .hero__scroll-hint {
          position: absolute;
          bottom: 2rem;
          right: var(--gutter);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .hero__scroll-hint span {
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--muted);
          writing-mode: vertical-rl;
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--gold), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* ── What We Do ──────────────────────────────────────────── */
        .what-we-do__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        .what-we-do__text h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .what-we-do__text p {
          margin-top: 1.25rem;
        }

        .feature-card {
          background: var(--moss);
          border: 1px solid var(--border);
          border-radius: 4px;
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--fern));
        }

        .feature-card__icon {
          color: var(--gold);
          margin-bottom: 1.25rem;
        }

        .feature-card h3 {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }

        .feature-card p {
          font-size: 0.88rem;
          margin-bottom: 1.5rem;
        }

        .feature-card__list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .feature-card__list-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: var(--parchment);
        }

        /* ── Section Header ──────────────────────────────────────── */
        .section-header {
          max-width: 560px;
          margin-bottom: 3.5rem;
        }

        .section-header h2 {
          margin-bottom: 0.75rem;
        }

        .section-header__sub {
          font-size: 0.95rem;
          color: var(--muted);
        }

        /* ── Events Grid ─────────────────────────────────────────── */
        .events-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5px;
          background: var(--border-sub);
          border: 1px solid var(--border-sub);
        }

        .event-card {
          background: var(--deep);
          padding: 2.5rem;
          position: relative;
          transition: background 0.3s ease;
        }

        .event-card:hover {
          background: var(--moss);
        }

        .event-card__num {
          font-family: var(--font-display);
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.08em;
        }

        .event-card__rule {
          width: 40px;
          height: 1px;
          background: var(--border);
          margin-block: 1rem;
          transition: background 0.3s ease, width 0.3s ease;
        }

        .event-card:hover .event-card__rule {
          background: var(--gold);
          width: 60px;
        }

        .event-card__title {
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        .event-card__desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: var(--muted);
          margin-bottom: 1.5rem;
        }

        .event-card__link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          transition: gap 0.2s ease;
        }

        .event-card__link:hover {
          gap: 0.65rem;
        }

        /* ── How It Works ────────────────────────────────────────── */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 1rem;
        }

        .step {
          position: relative;
          padding-left: 1rem;
          border-left: 1px solid var(--border);
        }

        .step__num {
          font-family: var(--font-display);
          font-size: 3.5rem;
          font-weight: 300;
          line-height: 1;
          color: var(--gold);
          opacity: 0.4;
          margin-bottom: 1rem;
        }

        .step__title {
          font-size: 1.15rem;
          margin-bottom: 0.65rem;
        }

        .step__body {
          font-size: 0.88rem;
          color: var(--muted);
          line-height: 1.7;
        }

        /* ── Pricing CTA ─────────────────────────────────────────── */
        .pricing-cta {
          padding-block: clamp(5rem, 10vw, 8rem);
          background: var(--deep);
          text-align: center;
        }

        .pricing-cta__inner {
          max-width: 600px;
          margin-inline: auto;
        }

        .pricing-cta__inner h2 {
          margin-bottom: 1rem;
        }

        .pricing-cta__inner h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .pricing-cta__inner p {
          font-size: 0.95rem;
          color: var(--muted);
          max-width: 480px;
          margin-inline: auto;
        }

        .pricing-cta__tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--forest);
          background: var(--gold);
          padding: 0.4rem 1.1rem;
          border-radius: 2px;
          margin: 1.75rem auto;
        }

        .pricing-cta .hero__ctas {
          justify-content: center;
          animation: none;
        }

        /* ── Keyframes ───────────────────────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 900px) {
          .what-we-do__inner {
            grid-template-columns: 1fr;
          }
          .steps-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .events-grid {
            grid-template-columns: 1fr;
          }
          .hero__stats {
            gap: 1.25rem;
          }
          .hero__stat-div {
            display: none;
          }
        }
      `}</style>
    </>
  )
}
