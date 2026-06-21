import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'

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
    title: 'Trade Shows',
    description:
      'Stand out on the expo floor. A live golf simulator draws crowds, creates conversations, and leaves your booth memorable.',
  },
  {
    number: '05',
    title: 'School & Community',
    description:
      'Fundraisers, school events, and community gatherings. We make golf accessible and exciting for everyone.',
  },
  {
    number: '06',
    title: 'Private Parties',
    description:
      "Backyard bashes, holiday parties, team nights. Wherever friends gather, we bring something they'll still be talking about next week.",
  },
]

const steps = [
  {
    num: '1',
    title: 'Tell Us About Your Event',
    body: "Share your event date, size, and venue. We'll respond within 24 hours with everything you need to know.",
  },
  {
    num: '2',
    title: 'We Bring & Set Up',
    body: 'Our team arrives early and handles full delivery, installation, and testing. You focus on your guests.',
  },
  {
    num: '3',
    title: 'Guests Play & Compete',
    body: "Everyone swings, competes, and creates lasting memories. We pack everything up when you're done.",
  },
]

const benefits = [
  {
    title: 'Professional Setup',
    body: 'We handle every detail from delivery to installation. Your venue, our gear, zero stress for you.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Indoor & Outdoor',
    body: 'Ballrooms, backyards, warehouses, or parks. Our portable setup adapts to any environment.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="2.5" fill="currentColor" opacity="0.4"/>
      </svg>
    ),
  },
  {
    title: 'Friendly Staff',
    body: 'Our on-site team keeps the experience running smoothly and ensures every guest feels welcome.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Memorable Experiences',
    body: 'A golf simulator is the kind of activity guests talk about long after the event is over.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.9 5.9L21 9l-4.5 4.4 1.1 6.3L12 17l-5.6 2.7 1.1-6.3L3 9l6.1-.9L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Competitive Challenges',
    body: 'Closest to the pin, longest drive, and full course play. Built-in games make every event lively.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'No Experience Needed',
    body: 'First-time swinger or seasoned golfer, everyone picks it up fast and has a great time.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const marqueeItems = [
  'Corporate Events',
  'Weddings',
  'Birthday Parties',
  'Trade Shows',
  'School Events',
  'Private Parties',
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="hero">
        <span className="hero__bg-word" aria-hidden="true">PNW</span>

        <div className="container hero__content">
          <p className="hero__location">Seattle, WA · Est. 2026</p>

          <h1 className="hero__headline">
            <span className="hero__hl-small">Mobile Golf</span>
            <span className="hero__hl-big">Simulator</span>
            <span className="hero__hl-tail">Experiences</span>
          </h1>

          <p className="hero__tagline">
            Professional golf simulator rental for any event.<br />
            We deliver, set up, and run everything.
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

          <div className="hero__meta">
            <span>Setup in ~90 min</span>
            <span aria-hidden="true">·</span>
            <span>10 ft min ceiling</span>
            <span aria-hidden="true">·</span>
            <span>Greater Seattle</span>
          </div>
        </div>

        <div className="hero__scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────── */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1, 2].map((n) => (
            <span key={n} className="marquee-inner">
              {marqueeItems.map((item) => (
                <span key={item} className="marquee-item">
                  <span className="marquee-dot" />
                  {item}
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats Bar ────────────────────────────────────────────── */}
      <section className="stats-bar" aria-label="Key specs">
        <div className="container stats-bar__grid">
          {[
            { num: '~90', unit: 'min', label: 'Average Setup Time' },
            { num: '10+', unit: 'ft',  label: 'Min. Ceiling Height' },
            { num: '15×15', unit: 'ft', label: 'Min. Floor Space' },
            { num: '24',  unit: 'hrs', label: 'Quote Turnaround' },
          ].map(({ num, unit, label }) => (
            <div key={label} className="stat-item">
              <div className="stat-item__num">
                {num}<span className="stat-item__unit">{unit}</span>
              </div>
              <div className="stat-item__label">{label}</div>
            </div>
          ))}
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
                Just an unforgettable activity your guests will love, whether
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

            <AnimatedSection className="what-we-do__panel-wrap" delay={150}>
              <div className="feature-panel">
                <h3 className="feature-panel__heading">Any Venue.<br />Any Event.</h3>
                <p className="feature-panel__body">
                  Backyards, ballrooms, warehouses, parks. If there's space,
                  we'll make it work. Our portable setup is designed for
                  flexibility without sacrificing quality.
                </p>
                <div className="feature-panel__list">
                  {[
                    'Indoor & outdoor ready',
                    'Setup in under 2 hours',
                    'Works on any surface',
                    'Professional-grade simulator tech',
                  ].map((item) => (
                    <div key={item} className="feature-panel__item">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="#1E6B24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="section section--alt how-it-works">
        <div className="container">
          <AnimatedSection>
            <h2 className="steps-heading">How It Works</h2>
          </AnimatedSection>

          <div className="steps-grid">
            {steps.map(({ num, title, body }, i) => (
              <AnimatedSection key={num} delay={i * 120}>
                <div className="step">
                  <div className="step__num">{num}</div>
                  <div className="step__rule" aria-hidden="true" />
                  <h3 className="step__title">{title}</h3>
                  <p className="step__body">{body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Types ──────────────────────────────────────────── */}
      <section className="section events-section">
        <div className="container">
          <AnimatedSection className="events-header">
            <h2>Events We Love</h2>
            <p className="events-header__sub">
              From corporate retreats to wedding receptions, we bring
              the right experience to any occasion.
            </p>
          </AnimatedSection>

          <div className="events-list">
            {eventTypes.map(({ number, title, description }, i) => (
              <AnimatedSection key={number} delay={i * 55}>
                <Link href="/contact" className="event-row">
                  <span className="event-row__num">{number}</span>
                  <h3 className="event-row__title">{title}</h3>
                  <p className="event-row__desc">{description}</p>
                  <span className="event-row__arrow" aria-hidden="true">→</span>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="section section--alt benefits-section">
        <div className="container">
          <div className="benefits-inner">
            <AnimatedSection className="benefits-left">
              <h2>Everything<br />You Need</h2>
              <p>Built for hosts who want a great event, not a logistics headache.</p>
              <Link href="/contact" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                Book an Event
              </Link>
            </AnimatedSection>

            <div className="benefits-right">
              {benefits.map(({ title, body, icon }, i) => (
                <AnimatedSection key={title} delay={i * 60}>
                  <div className="benefit-item">
                    <div className="benefit-item__icon" aria-hidden="true">{icon}</div>
                    <div>
                      <h3 className="benefit-item__title">{title}</h3>
                      <p className="benefit-item__body">{body}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ──────────────────────────────────────────────── */}
      <GallerySection />

      {/* ── Testimonials ─────────────────────────────────────────── */}
      <TestimonialsSection />

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <FAQSection />

      {/* ── Service Area ─────────────────────────────────────────── */}
      <section className="section section--alt service-area">
        <div className="container">
          <div className="service-area__inner">
            <AnimatedSection className="service-area__text">
              <h2>We Serve<br />Greater Seattle</h2>
              <p>
                Based in the Pacific Northwest, we cover Seattle and the
                surrounding metro. If you're planning an event in the region,
                we've got you covered.
              </p>
              <ul className="service-area__list">
                {[
                  'Seattle & Surrounding Areas',
                  'Bellevue & the Eastside',
                  'Tacoma & South Sound',
                  'Kirkland, Redmond & Bothell',
                  'Greater Puget Sound Region',
                ].map((area) => (
                  <li key={area}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                      <circle cx="4" cy="4" r="3" fill="#1E6B24" />
                    </svg>
                    {area}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                Check Your Area
              </Link>
            </AnimatedSection>

            <AnimatedSection className="service-area__map-wrap" delay={150}>
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172203.15688025654!2d-122.4796157!3d47.6062095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sus!4v1703000000000!5m2!1sen!2sus"
                  title="PNW Simulators service area — greater Seattle"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Pricing CTA ──────────────────────────────────────────── */}
      <section className="pricing-cta">
        <div className="container">
          <AnimatedSection>
            <div className="pricing-cta__inner">
              <div className="pricing-cta__left">
                <span className="eyebrow pricing-cta__eyebrow">Pricing</span>
                <h2>Custom Packages<br /><em>for Every Event</em></h2>
              </div>
              <div className="pricing-cta__right">
                <p>
                  Every event is different. We offer flexible packages based on
                  duration, size, and location, starting at rates that work for
                  birthdays and scale up to full corporate productions.
                </p>
                <div className="pricing-cta__btns">
                  <Link href="/contact?type=quote" className="btn btn-primary">
                    Get a Free Quote
                  </Link>
                  <Link href="/services" className="btn btn-outline">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        /* ── Hero ────────────────────────────────────────────────── */
        .hero {
          position: relative;
          display: flex;
          align-items: flex-start;
          padding-top: calc(72px + 2.5rem);
          padding-bottom: 4rem;
          overflow: hidden;
          background: #fff;
        }

        /* Editorial device: oversized background word */
        .hero__bg-word {
          position: absolute;
          right: -4%;
          top: 50%;
          transform: translateY(-52%);
          font-family: var(--font-display);
          font-size: clamp(16rem, 40vw, 50rem);
          font-weight: 700;
          line-height: 0.85;
          letter-spacing: -0.04em;
          color: rgba(20, 67, 26, 0.038);
          pointer-events: none;
          user-select: none;
          font-style: italic;
        }

        .hero__content {
          position: relative;
          z-index: 1;
          padding-bottom: clamp(3rem, 6vw, 5rem);
        }

        .hero__location {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6B7A69;
          margin-bottom: 2.5rem;
          animation: fadeInUp 0.8s var(--ease-out-expo) both;
        }

        .hero__headline {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
          animation: fadeInUp 0.9s 0.1s var(--ease-out-expo) both;
        }

        /* Three tiers of size create real typographic tension */
        .hero__hl-small {
          font-family: var(--font-body);
          font-size: clamp(0.8rem, 1.8vw, 1.05rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #6B7A69;
          margin-bottom: 0.1rem;
        }

        .hero__hl-big {
          font-family: var(--font-display);
          font-size: clamp(4.5rem, 13vw, 12rem);
          font-weight: 300;
          line-height: 0.88;
          letter-spacing: -0.03em;
          color: #14431A;
          font-style: italic;
        }

        .hero__hl-tail {
          font-family: var(--font-display);
          font-size: clamp(1.1rem, 3vw, 2.4rem);
          font-weight: 400;
          color: #1E6B24;
          letter-spacing: 0.06em;
          margin-top: 0.35rem;
        }

        .hero__tagline {
          font-size: clamp(0.88rem, 1.6vw, 1rem);
          color: #6B7A69;
          font-weight: 300;
          line-height: 1.9;
          max-width: 400px;
          animation: fadeInUp 0.8s 0.22s var(--ease-out-expo) both;
        }

        .hero__ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2.5rem;
          animation: fadeInUp 0.8s 0.32s var(--ease-out-expo) both;
        }

        .hero__meta {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          margin-top: 3.5rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6B7A69;
          animation: fadeInUp 0.8s 0.42s var(--ease-out-expo) both;
        }

        .hero__meta span:nth-child(even) {
          opacity: 0.3;
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
          color: #6B7A69;
          writing-mode: vertical-rl;
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #1E6B24, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* ── Marquee ─────────────────────────────────────────────── */
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid rgba(20, 67, 26, 0.08);
          border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          padding-block: 0.85rem;
          background: #F5F8F5;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 26s linear infinite;
        }

        .marquee-inner {
          display: flex;
          align-items: center;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.67rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6B7A69;
          padding-right: 2.5rem;
          white-space: nowrap;
        }

        .marquee-dot {
          display: inline-block;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #1E6B24;
          opacity: 0.45;
          flex-shrink: 0;
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
          color: #1E6B24;
        }

        .what-we-do__text p {
          margin-top: 1.25rem;
        }

        /* Feature panel: left-border + editorial heading, no icon boxes */
        .feature-panel {
          border-left: 2px solid rgba(20, 67, 26, 0.14);
          padding-left: 2.5rem;
        }

        .feature-panel__heading {
          font-size: clamp(1.75rem, 3.5vw, 2.75rem);
          color: #14431A;
          line-height: 1.1;
          margin-bottom: 1.25rem;
        }

        .feature-panel__body {
          font-size: 0.88rem;
          margin-bottom: 2rem;
          color: #374535;
          line-height: 1.75;
        }

        .feature-panel__list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .feature-panel__item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.82rem;
          color: #374535;
        }

        /* ── How It Works ────────────────────────────────────────── */
        .steps-heading {
          margin-bottom: 4rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(20, 67, 26, 0.12);
        }

        .step {
          padding: 3rem 3rem 3rem 0;
          border-right: 1px solid rgba(20, 67, 26, 0.08);
        }

        .step:not(:first-child) {
          padding-left: 3rem;
        }

        .step:last-child {
          border-right: none;
          padding-right: 0;
        }

        /* Large italic numeral is the visual anchor, not a faint watermark */
        .step__num {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 6.5rem);
          font-weight: 300;
          line-height: 1;
          color: #1E6B24;
          font-style: italic;
          margin-bottom: 1.75rem;
        }

        .step__rule {
          width: 2rem;
          height: 1px;
          background: rgba(20, 67, 26, 0.2);
          margin-bottom: 1.5rem;
        }

        .step__title {
          font-size: 1.1rem;
          margin-bottom: 0.65rem;
          color: #14431A;
        }

        .step__body {
          font-size: 0.88rem;
          color: #6B7A69;
          line-height: 1.7;
        }

        /* ── Event Types ─────────────────────────────────────────── */
        /* Editorial row list — not a card grid */
        .events-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .events-header h2 {
          margin: 0;
        }

        .events-header__sub {
          font-size: 0.88rem;
          color: #6B7A69;
          max-width: 280px;
          text-align: right;
          line-height: 1.65;
          padding-top: 0.4rem;
        }

        .events-list {
          border-top: 1px solid rgba(20, 67, 26, 0.12);
        }

        .event-row {
          display: grid;
          grid-template-columns: 3.5rem 1fr 2fr 1.5rem;
          gap: 2.5rem;
          align-items: center;
          padding: 2.25rem 0;
          border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          text-decoration: none;
          transition: padding-left 0.32s var(--ease-out-expo);
        }

        .event-row:hover {
          padding-left: 0.85rem;
        }

        .event-row__num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(30, 107, 36, 0.45);
          letter-spacing: 0.08em;
          font-style: italic;
        }

        .event-row__title {
          font-size: clamp(0.95rem, 1.8vw, 1.25rem);
          font-weight: 500;
          color: #14431A;
          margin: 0;
          transition: color 0.2s ease;
        }

        .event-row:hover .event-row__title {
          color: #1E6B24;
        }

        .event-row__desc {
          font-size: 0.85rem;
          color: #6B7A69;
          line-height: 1.65;
          margin: 0;
        }

        .event-row__arrow {
          font-size: 1rem;
          color: #1E6B24;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.2s ease, transform 0.3s var(--ease-out-expo);
          justify-self: end;
        }

        .event-row:hover .event-row__arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* ── Benefits ────────────────────────────────────────────── */
        /* Sticky 2-col: pinned heading + right-side item grid */
        .benefits-inner {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: clamp(4rem, 8vw, 8rem);
          align-items: start;
        }

        .benefits-left {
          position: sticky;
          top: calc(72px + 3rem);
        }

        .benefits-left h2 {
          margin-bottom: 1.25rem;
          line-height: 1.05;
        }

        .benefits-left p {
          font-size: 0.88rem;
          color: #6B7A69;
        }

        .benefits-right {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .benefit-item {
          display: flex;
          gap: 1.1rem;
          padding: 2rem;
          border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          border-right: 1px solid rgba(20, 67, 26, 0.08);
          align-items: flex-start;
        }

        .benefit-item:nth-child(even) {
          border-right: none;
        }

        .benefit-item:nth-last-child(-n+2) {
          border-bottom: none;
        }

        .benefit-item__icon {
          color: #1E6B24;
          flex-shrink: 0;
          margin-top: 0.15rem;
        }

        .benefit-item__title {
          font-size: 0.92rem;
          font-weight: 500;
          color: #14431A;
          margin-bottom: 0.4rem;
        }

        .benefit-item__body {
          font-size: 0.82rem;
          color: #6B7A69;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Pricing CTA ─────────────────────────────────────────── */
        /* Split layout — heading left, body + CTAs right */
        .pricing-cta {
          padding-block: clamp(5rem, 10vw, 8rem);
          background: #14431A;
        }

        .pricing-cta__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        .pricing-cta__eyebrow {
          color: rgba(126, 200, 130, 0.7);
          display: block;
          margin-bottom: 1.25rem;
        }

        .pricing-cta__inner h2 {
          color: #fff;
          margin: 0;
        }

        .pricing-cta__inner h2 em {
          font-style: italic;
          color: #7EC882;
        }

        .pricing-cta__right p {
          font-size: 0.92rem;
          color: rgba(255, 255, 255, 0.58);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .pricing-cta__btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .pricing-cta .btn-primary {
          background: #fff;
          color: #14431A;
        }

        .pricing-cta .btn-primary:hover {
          background: #EBF3EC;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
        }

        .pricing-cta .btn-outline {
          color: rgba(255, 255, 255, 0.72);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .pricing-cta .btn-outline:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.55);
        }

        /* ── Keyframes ───────────────────────────────────────────── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1); }
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }

        /* ── Stats Bar ───────────────────────────────────────────── */
        .stats-bar {
          background: #14431A;
          padding-block: 3rem;
        }

        .stats-bar__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .stat-item {
          text-align: center;
          padding: 0.5rem 1.5rem;
          border-right: 1px solid rgba(255, 255, 255, 0.08);
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-item__num {
          font-family: var(--font-display);
          font-size: clamp(2.25rem, 5vw, 3.75rem);
          font-weight: 300;
          color: #fff;
          line-height: 1;
          font-style: italic;
          margin-bottom: 0.5rem;
        }

        .stat-item__unit {
          font-size: 0.42em;
          font-style: normal;
          color: #7EC882;
          margin-left: 0.1em;
          vertical-align: middle;
        }

        .stat-item__label {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
        }

        /* ── Service Area ────────────────────────────────────────── */
        .service-area__inner {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        .service-area__text h2 {
          margin-bottom: 1.25rem;
        }

        .service-area__text p {
          font-size: 0.9rem;
          color: #6B7A69;
          line-height: 1.75;
          margin-bottom: 0;
        }

        .service-area__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.75rem;
        }

        .service-area__list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.88rem;
          color: #374535;
        }

        .map-frame {
          border-radius: 4px;
          overflow: hidden;
          height: 460px;
          border: 1px solid rgba(20, 67, 26, 0.1);
        }

        .map-frame iframe {
          width: 100%;
          height: 100%;
          display: block;
        }

        /* ── Responsive ──────────────────────────────────────────── */
        @media (max-width: 1024px) {
          .benefits-inner { grid-template-columns: 1fr; }
          .benefits-left { position: static; }
          .event-row { grid-template-columns: 3rem 1fr 1.5rem; gap: 1.5rem; }
          .event-row__desc { display: none; }
        }

        @media (max-width: 1024px) {
          .stats-bar__grid { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .stat-item:nth-child(1),
          .stat-item:nth-child(2) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 1.5rem;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 900px) {
          .what-we-do__inner { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; }
          .step {
            padding: 2.5rem 0;
            border-right: none;
            border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          }
          .step:not(:first-child) { padding-left: 0; }
          .step:last-child { border-bottom: none; }
          .pricing-cta__inner { grid-template-columns: 1fr; }
          .events-header { flex-direction: column; gap: 1rem; }
          .events-header__sub { text-align: left; max-width: 100%; }
          .service-area__inner { grid-template-columns: 1fr; }
          .map-frame { height: 340px; }
        }

        @media (max-width: 640px) {
          .hero__bg-word { font-size: 58vw; right: -8%; }
          .event-row { grid-template-columns: 2.5rem 1fr 1.5rem; gap: 1rem; }
          .benefits-right { grid-template-columns: 1fr; }
          .benefit-item { border-right: none; }
          .benefit-item:nth-last-child(-n+2) {
            border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          }
          .benefit-item:last-child { border-bottom: none; }
        }
      `}</style>
    </>
  )
}
