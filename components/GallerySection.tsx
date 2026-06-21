import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/AnimatedSection'

const items = [
  {
    num: '01',
    title: 'Corporate Events',
    sub: 'Team outings & client entertainment',
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80',
    alt: 'Corporate event setup with guests at tables',
  },
  {
    num: '02',
    title: 'Weddings',
    sub: 'Receptions & rehearsal dinners',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80',
    alt: 'Elegant wedding reception with string lights',
  },
  {
    num: '03',
    title: 'Birthday Parties',
    sub: 'Celebrations for all ages',
    src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    alt: 'Birthday party celebration with guests',
  },
  {
    num: '04',
    title: 'Trade Shows',
    sub: 'Expo floors & brand activations',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80',
    alt: 'Trade show floor with booths and visitors',
  },
  {
    num: '05',
    title: 'School & Community',
    sub: 'Fundraisers & community events',
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
    alt: 'Community gathering with groups of people',
  },
  {
    num: '06',
    title: 'Private Parties',
    sub: 'Backyard bashes & team nights',
    src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80',
    alt: 'Private party with friends gathered together',
  },
]

export default function GallerySection() {
  return (
    <section className="section gallery-section">
      <div className="container">
        <AnimatedSection className="gallery-header">
          <h2>Events We've<br /><em>Made Memorable</em></h2>
          <p className="gallery-header__sub">
            Real photos from our events coming as we grow. In the meantime,
            here's a look at the kinds of occasions we serve.
          </p>
        </AnimatedSection>

        <div className="gallery-grid">
          {items.map(({ num, title, sub, src, alt }, i) => (
            <AnimatedSection key={num} delay={i * 65}>
              <div className="gallery-card">
                {/* Photo */}
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="gallery-card__img"
                  style={{ objectFit: 'cover' }}
                />

                {/* Dark overlay so text is always readable */}
                <div className="gallery-card__overlay" aria-hidden="true" />

                {/* Text block — bottom left */}
                <div className="gallery-card__body">
                  <div className="gallery-card__rule" aria-hidden="true" />
                  <h3 className="gallery-card__title">{title}</h3>
                  <p className="gallery-card__sub">{sub}</p>
                </div>

                {/* Faint number top-right — editorial device */}
                <span className="gallery-card__num" aria-hidden="true">{num}</span>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="gallery-footer">
          <p className="gallery-note">
            Booking events now.{' '}
            <Link href="/contact">Be part of the first gallery.</Link>
          </p>
        </AnimatedSection>
      </div>

      <style>{`
        .gallery-section {
          background: #fff;
        }

        .gallery-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .gallery-header h2 {
          margin: 0;
        }

        .gallery-header h2 em {
          font-style: italic;
          color: #1E6B24;
        }

        .gallery-header__sub {
          font-size: 0.88rem;
          color: #78736A;
          max-width: 280px;
          text-align: right;
          line-height: 1.7;
          padding-top: 0.4rem;
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4px;
          margin-bottom: 1.5rem;
        }

        .gallery-card {
          position: relative;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          border-radius: 3px;
          cursor: default;
        }

        .gallery-card__img {
          transition: transform 0.6s var(--ease-out-expo);
        }

        .gallery-card:hover .gallery-card__img {
          transform: scale(1.04);
        }

        /* Gradient overlay — bottom-heavy so text sits on dark */
        .gallery-card__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(10, 25, 12, 0.08) 0%,
            rgba(10, 25, 12, 0.35) 50%,
            rgba(10, 25, 12, 0.72) 100%
          );
          transition: opacity 0.35s ease;
          z-index: 1;
        }

        /* Faint editorial number — top right */
        .gallery-card__num {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          font-family: var(--font-display);
          font-size: 0.72rem;
          font-weight: 400;
          font-style: italic;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.45);
          z-index: 2;
        }

        /* Text — bottom left */
        .gallery-card__body {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1.4rem 1.5rem;
          z-index: 2;
        }

        .gallery-card__rule {
          width: 1.5rem;
          height: 1px;
          background: rgba(255, 255, 255, 0.4);
          margin-bottom: 0.6rem;
          transition: width 0.35s var(--ease-out-expo);
        }

        .gallery-card:hover .gallery-card__rule {
          width: 2.75rem;
        }

        .gallery-card__title {
          font-family: var(--font-display);
          font-size: clamp(0.95rem, 2vw, 1.3rem);
          font-weight: 400;
          font-style: italic;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.15;
          margin-bottom: 0.25rem;
        }

        .gallery-card__sub {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.42);
          line-height: 1;
          margin: 0;
          transition: color 0.3s ease;
        }

        .gallery-card:hover .gallery-card__sub {
          color: rgba(255, 255, 255, 0.65);
        }

        .gallery-footer {
          text-align: center;
        }

        .gallery-note {
          font-size: 0.82rem;
          color: #78736A;
          text-align: center;
        }

        .gallery-note a {
          color: #1E6B24;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .gallery-note a:hover {
          color: #2E8B35;
        }

        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gallery-header { flex-direction: column; gap: 1rem; }
          .gallery-header__sub { text-align: left; max-width: 100%; }
        }

        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  )
}
