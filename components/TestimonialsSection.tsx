import AnimatedSection from '@/components/AnimatedSection'

const testimonials = [
  {
    quote:
      'PNW Simulators absolutely made our corporate retreat. Every single person was locked in within minutes — even the people who said they don\'t like golf. Setup was flawless and the staff kept everything running perfectly.',
    name: 'Marcus T.',
    title: 'Director of Operations',
    event: 'Corporate Retreat · Bellevue, WA',
  },
  {
    quote:
      'We added the golf simulator to our wedding reception on a bit of a whim. Hands down the best decision of the whole event. Guests from 10 to 80 were competing and laughing all night. Would hire again in a heartbeat.',
    name: 'Sarah & James R.',
    title: '',
    event: 'Wedding Reception · Seattle, WA',
  },
  {
    quote:
      'Hired PNW Simulators for my dad\'s 60th birthday. The setup was professional, the staff were genuinely fun to have around, and every guest had a blast regardless of their golf experience. Completely stress-free for me as the host.',
    name: 'Kevin L.',
    title: '',
    event: 'Birthday Party · Kirkland, WA',
  },
]

function StarRating() {
  return (
    <div className="stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1l1.6 3.3 3.6.5-2.6 2.6.6 3.6L7 9.3 3.8 11l.6-3.6L1.8 4.8l3.6-.5L7 1z"
            fill="#1E6B24"
            stroke="#1E6B24"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <AnimatedSection className="section-header">
          <span className="eyebrow">What People Say</span>
          <span className="gold-rule" />
          <h2>Guests Come Back<br /><em>Talking About It</em></h2>
        </AnimatedSection>

        <div className="testimonials-grid">
          {testimonials.map(({ quote, name, title, event }, i) => (
            <AnimatedSection key={name} delay={i * 100}>
              <div className="testimonial-card">
                <div className="testimonial-card__top">
                  <StarRating />
                  <div className="testimonial-card__quote-mark" aria-hidden="true">"</div>
                </div>
                <blockquote className="testimonial-card__quote">{quote}</blockquote>
                <footer className="testimonial-card__footer">
                  <div className="testimonial-card__avatar" aria-hidden="true">
                    {name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{name}</p>
                    {title && <p className="testimonial-card__role">{title}</p>}
                    <p className="testimonial-card__event">{event}</p>
                  </div>
                </footer>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-section {
          background: #F6F3ED;
        }

        .testimonials-section .section-header h2 em {
          font-style: italic;
          color: #1E6B24;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .testimonial-card {
          background: #fff;
          border: 1px solid rgba(28, 55, 28, 0.08);
          border-radius: 4px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .testimonial-card:hover {
          box-shadow: 0 4px 24px rgba(20, 67, 26, 0.08);
          transform: translateY(-2px);
        }

        .testimonial-card__top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .stars {
          display: flex;
          gap: 2px;
        }

        .testimonial-card__quote-mark {
          font-family: var(--font-display);
          font-size: 4rem;
          line-height: 1;
          color: #1E6B24;
          opacity: 0.12;
          margin-top: -1rem;
          user-select: none;
        }

        .testimonial-card__quote {
          font-size: 0.88rem;
          line-height: 1.8;
          color: #393D36;
          flex: 1;
          font-style: normal;
        }

        .testimonial-card__footer {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding-top: 1.25rem;
          border-top: 1px solid rgba(28, 55, 28, 0.07);
        }

        .testimonial-card__avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #E8F0E6;
          border: 1px solid rgba(30, 107, 36, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 400;
          color: #1E6B24;
          flex-shrink: 0;
        }

        .testimonial-card__name {
          font-size: 0.85rem;
          font-weight: 600;
          color: #18201A;
          line-height: 1.3;
        }

        .testimonial-card__role {
          font-size: 0.75rem;
          color: #78736A;
          line-height: 1.3;
        }

        .testimonial-card__event {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #1E6B24;
          opacity: 0.7;
          line-height: 1.3;
          margin-top: 0.15rem;
        }

        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-card { max-width: 560px; }
        }

        @media (max-width: 640px) {
          .testimonial-card { max-width: 100%; }
        }
      `}</style>
    </section>
  )
}
