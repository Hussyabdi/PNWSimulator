import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <span className="gold">PNW</span> Simulators
            </Link>
            <p className="footer__tagline">
              Mobile Golf Simulator Experiences<br />
              for Events in the Pacific Northwest
            </p>
          </div>

          <nav className="footer__nav">
            <div className="footer__nav-col">
              <h4>Navigate</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer__nav-col">
              <h4>Get in Touch</h4>
              <ul>
                <li><a href="mailto:hello@pnwsimulators.com">hello@pnwsimulators.com</a></li>
                <li><a href="tel:+12065550000">(206) 555-0000</a></li>
                <li className="footer__location">Seattle, WA</li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="divider" />

        <div className="footer__bottom">
          <p>© {year} PNW Simulators. All rights reserved.</p>
          <p className="footer__made">Seattle-Based · Mobile Events · Pacific Northwest</p>
        </div>
      </div>

      <style>{`
        .footer {
          background: #070F07;
          border-top: 1px solid var(--border-sub);
          padding-block: 4rem 2rem;
        }

        .footer__top {
          display: flex;
          gap: 4rem;
          justify-content: space-between;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .footer__logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--cream);
          display: block;
          margin-bottom: 1rem;
        }

        .footer__tagline {
          font-size: 0.8rem;
          line-height: 1.6;
          color: var(--muted);
          max-width: 220px;
        }

        .footer__nav {
          display: flex;
          gap: 4rem;
          flex-wrap: wrap;
        }

        .footer__nav-col h4 {
          font-family: var(--font-body);
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 1.25rem;
        }

        .footer__nav-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .footer__nav-col a {
          font-size: 0.85rem;
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .footer__nav-col a:hover {
          color: var(--cream);
        }

        .footer__location {
          font-size: 0.85rem;
          color: var(--muted);
        }

        .footer__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding-top: 2rem;
        }

        .footer__bottom p {
          font-size: 0.75rem;
          color: var(--muted);
          line-height: 1;
        }

        .footer__made {
          letter-spacing: 0.06em;
        }

        .gold { color: var(--gold); }

        @media (max-width: 600px) {
          .footer__top { flex-direction: column; gap: 2.5rem; }
          .footer__nav { gap: 2rem; }
          .footer__bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </footer>
  )
}
