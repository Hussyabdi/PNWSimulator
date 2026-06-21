import type { Metadata } from 'next'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

export const metadata: Metadata = {
  title: 'About',
  description:
    'PNW Simulators is a Seattle-based team passionate about bringing fun, accessible golf experiences to events across the Pacific Northwest.',
}

const values = [
  {
    title: 'Guest-First Experience',
    body: 'Every decision we make is about making your guests feel like they\'re at a premium venue, not a rental.',
  },
  {
    title: 'Seamless Execution',
    body: 'We arrive early, set up fast, and disappear when we\'re done. Zero stress for the host.',
  },
  {
    title: 'Accessible Fun',
    body: 'No golf experience required. Our simulators are intuitive and entertaining for absolute beginners and seasoned players alike.',
  },
  {
    title: 'Pacific Northwest Proud',
    body: 'We\'re a local team that knows Seattle and the PNW. We\'re invested in this community and the events that make it great.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="container">
          <AnimatedSection>
            <span className="eyebrow">Our Story</span>
            <span className="gold-rule" />
            <h1 className="about-h1">Built in Seattle.<br /><em>For Seattle Events.</em></h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────── */}
      <section className="section about-story">
        <div className="container">
          <div className="about-story__inner">
            <AnimatedSection className="about-story__text">
              <p className="about-story__lead">
                PNW Simulators started with a simple idea: great events deserve
                great entertainment, and a golf simulator is something almost
                anyone can enjoy.
              </p>
              <p>
                We're a Seattle-based team with a passion for creating experiences
                that bring people together. Whether it's a company team-building
                day, a wedding reception that needs a little something extra, or
                a birthday party the guest of honor will never forget. We bring
                the full experience directly to your venue.
              </p>
              <p>
                The Pacific Northwest has no shortage of world-class events. We
                built PNW Simulators to be the kind of vendor that makes hosts
                look great and guests feel like they got something special. No
                overcomplication. Just a professional setup, a great simulator,
                and people having fun.
              </p>
              <p>
                We're based right here in Seattle and serve events across the
                greater Puget Sound area and beyond. If you're planning something
                worth celebrating, we'd love to be part of it.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                Work With Us
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={150} className="about-story__aside">
              <div className="about-callout">
                <div className="about-callout__quote">
                  "We believe the best events create memories. We're here to
                  help you build one."
                </div>
                <div className="about-callout__attr">PNW Simulators Team</div>
              </div>

              <div className="about-location">
                <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'block' }}>Our Territory</span>
                <ul className="about-location__list">
                  {['Seattle & Greater Puget Sound', 'Bellevue & Eastside', 'Tacoma & South Sound', 'Kirkland, Redmond, Bothell', 'Surrounding PNW regions'].map(loc => (
                    <li key={loc}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <circle cx="5" cy="5" r="2" fill="var(--gold)" />
                      </svg>
                      {loc}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── Values ───────────────────────────────────────────────── */}
      <section className="section section--alt values-section">
        <div className="container">
          <AnimatedSection className="section-header">
            <span className="eyebrow">What We Stand For</span>
            <span className="gold-rule" />
            <h2>Our Principles</h2>
          </AnimatedSection>

          <div className="values-grid">
            {values.map(({ title, body }, i) => (
              <AnimatedSection key={title} delay={i * 80}>
                <div className="value-card">
                  <span className="value-card__num">0{i + 1}</span>
                  <h3 className="value-card__title">{title}</h3>
                  <p className="value-card__body">{body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="section about-cta">
        <div className="container">
          <AnimatedSection>
            <div className="about-cta__inner">
              <h2>Ready to Bring the Simulator<br /><em>to Your Event?</em></h2>
              <p>Get in touch and we'll put together a package that works for you.</p>
              <div className="about-cta__btns">
                <Link href="/contact" className="btn btn-primary">Book an Event</Link>
                <Link href="/services" className="btn btn-outline">Our Services</Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style>{`
        .about-h1 {
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 300;
          margin-top: 0.5rem;
        }

        .about-h1 em {
          font-style: italic;
          color: var(--gold);
        }

        /* Story */
        .about-story__inner {
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 5rem;
          align-items: start;
        }

        .about-story__lead {
          font-family: var(--font-display);
          font-size: clamp(1.15rem, 2.5vw, 1.5rem);
          font-weight: 400;
          line-height: 1.6;
          color: var(--cream);
          margin-bottom: 1.5rem;
        }

        .about-story__text p:not(.about-story__lead) {
          font-size: 0.95rem;
          color: var(--parchment);
          margin-bottom: 1.1rem;
        }

        /* Callout */
        .about-callout {
          background: var(--moss);
          border: 1px solid var(--border);
          border-left: 3px solid var(--gold);
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0 4px 4px 0;
        }

        .about-callout__quote {
          font-family: var(--font-display);
          font-size: 1.15rem;
          font-style: italic;
          font-weight: 400;
          line-height: 1.6;
          color: var(--cream);
          margin-bottom: 1rem;
        }

        .about-callout__attr {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
        }

        /* Location */
        .about-location__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .about-location__list li {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-size: 0.85rem;
          color: var(--parchment);
        }

        /* Values */
        .section-header {
          max-width: 560px;
          margin-bottom: 3.5rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .value-card {
          padding: 2rem;
          border: 1px solid var(--border-sub);
          border-radius: 4px;
          background: var(--forest);
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .value-card:hover {
          border-color: var(--border);
          transform: translateY(-3px);
        }

        .value-card__num {
          font-family: var(--font-display);
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--gold);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .value-card__title {
          font-size: 1.1rem;
          margin-bottom: 0.65rem;
        }

        .value-card__body {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.75;
        }

        /* About CTA */
        .about-cta {
          text-align: center;
        }

        .about-cta__inner {
          max-width: 580px;
          margin-inline: auto;
        }

        .about-cta__inner h2 em {
          font-style: italic;
          color: var(--gold);
        }

        .about-cta__inner p {
          color: var(--muted);
          font-size: 0.95rem;
          margin-top: 0.75rem;
        }

        .about-cta__btns {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        @media (max-width: 900px) {
          .about-story__inner {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 640px) {
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
