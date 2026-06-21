'use client'

import { useState } from 'react'
import AnimatedSection from '@/components/AnimatedSection'

const faqs = [
  {
    q: 'How much space is needed for the simulator?',
    a: 'Our setup requires approximately 15–20 feet wide, 15 feet deep, and at least 10 feet of ceiling clearance. We\'ll review your venue details before confirming the booking to make sure the space works well.',
  },
  {
    q: 'Can the simulator be used indoors and outdoors?',
    a: 'Yes, we\'re set up for both. Ballrooms, warehouses, hotel event spaces, patios, backyards, parks, and covered outdoor areas all work. We assess each venue individually so you always get the best possible setup.',
  },
  {
    q: 'How long does setup take?',
    a: 'We typically arrive 90–120 minutes before your event to complete installation and testing. Teardown takes approximately 60 minutes after your event ends. We handle all of it. You won\'t need to lift a finger.',
  },
  {
    q: 'Do you provide staff at the event?',
    a: 'Every booking includes at least one trained on-site attendant. They manage the simulator, walk guests through it, run any game modes or competitions, and handle anything technical so you can focus on your guests.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve greater Seattle, Bellevue and the Eastside, Tacoma and South Sound, and surrounding Pacific Northwest areas including Kirkland, Redmond, and Bothell. Have an event further out? Reach out and we may still be able to accommodate.',
  },
  {
    q: 'Do guests need to know how to play golf?',
    a: 'Not at all. Our simulators are intuitive and guests typically start having fun within minutes. We have multiple game modes designed specifically for beginners, and our staff is there to help everyone feel comfortable right away.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  function toggle(i: number) {
    setOpen(prev => (prev === i ? null : i))
  }

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="faq-inner">
          <AnimatedSection className="faq-header">
            <span className="eyebrow">FAQ</span>
            <span className="gold-rule" />
            <h2>Common<br /><em>Questions</em></h2>
            <p>
              Everything you need to know before booking. Don't see your
              question? <a href="/contact">Just ask us.</a>
            </p>
          </AnimatedSection>

          <div className="faq-list">
            {faqs.map(({ q, a }, i) => {
              const isOpen = open === i
              return (
                <AnimatedSection key={q} delay={i * 60}>
                  <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                    <button
                      className="faq-item__btn"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                    >
                      <span className="faq-item__question">{q}</span>
                      <span className="faq-item__icon" aria-hidden="true">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M3 6l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div id={`faq-panel-${i}`} className="faq-item__body" role="region" aria-label={q}>
                      <p className="faq-item__answer">{a}</p>
                    </div>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background: #fff;
        }

        .faq-inner {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: clamp(3rem, 6vw, 6rem);
          align-items: start;
        }

        .faq-header {
          position: sticky;
          top: 100px;
        }

        .faq-header h2 em {
          font-style: italic;
          color: #1E6B24;
        }

        .faq-header p {
          font-size: 0.88rem;
          color: #78736A;
          margin-top: 1rem;
          line-height: 1.75;
        }

        .faq-header p a {
          color: #1E6B24;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .faq-header p a:hover {
          color: #2E8B35;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
        }

        .faq-item {
          border-bottom: 1px solid rgba(28, 55, 28, 0.08);
        }

        .faq-item:first-child {
          border-top: 1px solid rgba(28, 55, 28, 0.08);
        }

        .faq-item__btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          background: none;
          border: none;
          padding: 1.4rem 0;
          cursor: pointer;
          text-align: left;
        }

        .faq-item__question {
          font-family: var(--font-body);
          font-size: clamp(0.92rem, 2vw, 1rem);
          font-weight: 500;
          color: #18201A;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .faq-item__btn:hover .faq-item__question,
        .faq-item--open .faq-item__question {
          color: #1E6B24;
        }

        .faq-item__icon {
          flex-shrink: 0;
          color: #78736A;
          transition: transform 0.3s var(--ease-out-expo), color 0.2s ease;
        }

        .faq-item--open .faq-item__icon {
          transform: rotate(180deg);
          color: #1E6B24;
        }

        .faq-item__body {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s var(--ease-out-expo);
          overflow: hidden;
        }

        .faq-item--open .faq-item__body {
          grid-template-rows: 1fr;
        }

        .faq-item__answer {
          font-size: 0.88rem;
          color: #78736A;
          line-height: 1.8;
          padding-bottom: 1.4rem;
          min-height: 0;
        }

        @media (max-width: 768px) {
          .faq-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .faq-header {
            position: static;
          }
        }
      `}</style>
    </section>
  )
}
