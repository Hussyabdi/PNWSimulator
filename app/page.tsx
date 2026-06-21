import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'
import GallerySection from '@/components/GallerySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'PNW Simulators — Mobile Golf Simulator Events in Seattle',
}

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
          <p className="hero__location">Seattle, WA</p>

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

      {/* ── Simulator Specs ──────────────────────────────────────── */}
      <section className="section specs-section">
        <div className="container">
          <AnimatedSection className="specs-header">
            <span className="eyebrow">The Setup</span>
            <span className="gold-rule" />
            <h2>Everything Included,<br />Nothing to Worry About</h2>
          </AnimatedSection>

          <div className="specs-grid">
            {/* Main spec card */}
            <AnimatedSection className="spec-card spec-card--main" delay={0}>
              <div className="spec-card__tag">Mobile Simulator Bay</div>
              <div className="spec-card__dims">
                <div className="spec-dim">
                  <span className="spec-dim__val">15<span className="spec-dim__u">ft</span></span>
                  <span className="spec-dim__label">Min. Width</span>
                </div>
                <div className="spec-dim__sep" />
                <div className="spec-dim">
                  <span className="spec-dim__val">15<span className="spec-dim__u">ft</span></span>
                  <span className="spec-dim__label">Min. Depth</span>
                </div>
                <div className="spec-dim__sep" />
                <div className="spec-dim">
                  <span className="spec-dim__val">10<span className="spec-dim__u">ft</span></span>
                  <span className="spec-dim__label">Min. Ceiling</span>
                </div>
              </div>
              <ul className="spec-card__list">
                {[
                  'Professional-grade launch monitor',
                  '40+ world-famous courses',
                  'Closest to pin & longest drive games',
                  'Works on any flat surface',
                  'Setup in under 90 minutes',
                ].map(item => (
                  <li key={item}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7l3 3 6-6" stroke="#1E6B24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            {/* What's included cards */}
            <div className="spec-includes">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Full Delivery & Setup',
                  body: 'We drive to your venue, install everything, and test it before your first guest arrives.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'On-Site Staff',
                  body: 'A trained attendant runs the simulator all night — games, tech support, and guest coaching included.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'All Equipment Provided',
                  body: 'Clubs, balls, mat, screen, projector — we bring it all. You provide the space and the guests.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M3 12l9-9 9 9M5 10v9a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                  title: 'Indoor & Outdoor Ready',
                  body: 'Ballrooms, backyards, warehouses, hotel lobbies — if there\'s space, we can make it work.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'Full Teardown',
                  body: 'When the event ends, we pack up everything. Your venue is back to normal within 60 minutes.',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  title: 'Custom Game Modes',
                  body: 'Closest to pin, longest drive, full course rounds — we set up whatever fits your crowd.',
                },
              ].map(({ icon, title, body }, i) => (
                <AnimatedSection key={title} delay={i * 60}>
                  <div className="spec-include-item">
                    <div className="spec-include-item__icon">{icon}</div>
                    <div>
                      <h3 className="spec-include-item__title">{title}</h3>
                      <p className="spec-include-item__body">{body}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Indoor / Outdoor Callout ──────────────────────────────── */}
      <section className="venue-callout">
        <div className="container">
          <AnimatedSection>
            <div className="venue-callout__inner">
              <div className="venue-callout__left">
                <span className="eyebrow venue-callout__eyebrow">Venue Flexibility</span>
                <h2>We Go Where<br />Your Event Is</h2>
                <p>
                  Backyard in Bellevue. Ballroom in downtown Seattle. Hotel lobby
                  in Tacoma. We've set up in all of them. If there's 15×15 ft of
                  flat space and 10 ft of ceiling, we're in business.
                </p>
                <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem' }}>
                  Tell Us About Your Venue
                </Link>
              </div>
              <div className="venue-callout__right">
                <div className="venue-type-list">
                  {[
                    { label: 'Backyard & Patio', note: 'Most popular for private parties' },
                    { label: 'Hotel & Event Venue', note: 'Ballrooms, lobbies, conference rooms' },
                    { label: 'Office & Warehouse', note: 'Perfect for corporate events' },
                    { label: 'Park & Outdoor Space', note: 'Covered areas work great' },
                    { label: 'Wedding Venue', note: 'Ceremony halls & reception spaces' },
                  ].map(({ label, note }, i) => (
                    <div key={label} className="venue-type-item" style={{ animationDelay: `${i * 0.07}s` }}>
                      <div className="venue-type-item__dot" />
                      <div>
                        <span className="venue-type-item__label">{label}</span>
                        <span className="venue-type-item__note">{note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────── */}
      <section className="section section--alt how-it-works" style={{ paddingTop: 0 }}>
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
          padding-top: calc(72px + 1.5rem);
          padding-bottom: 2.5rem;
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
        }

        .hero__location {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6B7A69;
          margin-bottom: 1.5rem;
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
          margin-top: 2rem;
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

        /* ── Simulator Specs ────────────────────────────────────────*/
        .specs-section {
          background: #fff;
        }

        .specs-header {
          margin-bottom: 2.5rem;
        }

        .specs-header h2 {
          margin-top: 0;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: clamp(2rem, 4vw, 4rem);
          align-items: start;
        }

        .spec-card {
          background: #14431A;
          border-radius: 6px;
          padding: 2.5rem;
          position: sticky;
          top: calc(72px + 2rem);
        }

        .spec-card__tag {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #7EC882;
          margin-bottom: 2rem;
        }

        .spec-card__dims {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 2rem;
        }

        .spec-dim {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
          text-align: center;
        }

        .spec-dim__val {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.75rem);
          font-weight: 400;
          color: #fff;
          line-height: 1;
          letter-spacing: 0.02em;
        }

        .spec-dim__u {
          font-size: 0.45em;
          color: #7EC882;
          margin-left: 0.1em;
          vertical-align: middle;
        }

        .spec-dim__label {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        .spec-dim__sep {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.08);
          flex-shrink: 0;
        }

        .spec-card__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }

        .spec-card__list li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
        }

        .spec-card__list svg {
          flex-shrink: 0;
        }

        .spec-card__list svg path {
          stroke: #7EC882;
        }

        /* 2-column grid of include items */
        .spec-includes {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid rgba(20, 67, 26, 0.1);
          border-left: 1px solid rgba(20, 67, 26, 0.1);
        }

        .spec-include-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          padding: 1.75rem;
          border-bottom: 1px solid rgba(20, 67, 26, 0.1);
          border-right: 1px solid rgba(20, 67, 26, 0.1);
          transition: background 0.2s ease;
        }

        .spec-include-item:hover {
          background: #F5F8F5;
        }

        .spec-include-item__icon {
          color: #1E6B24;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .spec-include-item__title {
          font-family: var(--font-body);
          font-size: 0.88rem;
          font-weight: 600;
          color: #14431A;
          margin-bottom: 0.35rem;
          text-transform: none;
          letter-spacing: 0;
          line-height: 1.3;
        }

        .spec-include-item__body {
          font-size: 0.8rem;
          color: #78736A;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Venue Callout ───────────────────────────────────────── */
        .venue-callout {
          background: #F6F3ED;
          padding-block: clamp(3rem, 5vw, 5rem);
        }

        .venue-callout__inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: center;
        }

        .venue-callout__eyebrow {
          display: block;
          margin-bottom: 1.5rem;
        }

        .venue-callout__left h2 {
          margin-bottom: 1.25rem;
        }

        .venue-callout__left p {
          font-size: 0.92rem;
          color: #78736A;
          line-height: 1.8;
        }

        .venue-type-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid rgba(20, 67, 26, 0.1);
          border-radius: 6px;
          overflow: hidden;
          background: #fff;
        }

        .venue-type-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          transition: background 0.2s ease;
        }

        .venue-type-item:last-child {
          border-bottom: none;
        }

        .venue-type-item:hover {
          background: #F5F8F5;
        }

        .venue-type-item__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #1E6B24;
          opacity: 0.6;
          flex-shrink: 0;
        }

        .venue-type-item__label {
          display: block;
          font-size: 0.88rem;
          font-weight: 500;
          color: #18201A;
          line-height: 1.3;
        }

        .venue-type-item__note {
          display: block;
          font-size: 0.72rem;
          color: #8C8375;
          margin-top: 0.1rem;
        }

        /* ── How It Works ────────────────────────────────────────── */
        .steps-heading {
          margin-bottom: 2.5rem;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid rgba(20, 67, 26, 0.12);
        }

        .step {
          padding: 2rem 2rem 2rem 0;
          border-right: 1px solid rgba(20, 67, 26, 0.08);
        }

        .step:not(:first-child) {
          padding-left: 2rem;
        }

        .step:last-child {
          border-right: none;
          padding-right: 0;
        }

        /* Large italic numeral is the visual anchor, not a faint watermark */
        .step__num {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 400;
          line-height: 1;
          color: #1E6B24;
          font-style: italic;
          margin-bottom: 1rem;
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

        /* ── Pricing CTA ─────────────────────────────────────────── */
        /* Split layout — heading left, body + CTAs right */
        .pricing-cta {
          padding-block: clamp(3.5rem, 6vw, 5.5rem);
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
          padding-block: 1.75rem;
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
          .specs-grid { grid-template-columns: 1fr; }
          .spec-card { position: static; }
          .venue-callout__inner { grid-template-columns: 1fr; }
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
          .spec-includes { grid-template-columns: 1fr; }
          .spec-card__dims { gap: 0.75rem; }
          .hero__bg-word { font-size: 58vw; right: -8%; }
        }
      `}</style>
    </>
  )
}
