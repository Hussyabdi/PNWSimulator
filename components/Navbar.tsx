'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}${menuOpen ? ' navbar--open' : ''}`}>
        <div className="navbar__inner container">
          <Link href="/" className="navbar__logo">
            <Image
              src="/logo.png"
              alt="PNW Simulators"
              width={52}
              height={52}
              className="navbar__logo-img"
              priority
            />
            <span className="navbar__logo-text">
              <span className="navbar__logo-pnw">PNW</span>
              <span className="navbar__logo-sim"> Simulators</span>
            </span>
          </Link>

          <ul className="navbar__links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`navbar__link${pathname === href ? ' navbar__link--active' : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/contact" className="btn btn-primary navbar__cta">
            Book Now
          </Link>

          <button
            className={`navbar__burger${menuOpen ? ' navbar__burger--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul className="mobile-menu__links">
          {navLinks.map(({ href, label }, i) => (
            <li key={href} style={{ '--i': i } as React.CSSProperties}>
              <Link
                href={href}
                className={pathname === href ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" className="btn btn-primary mobile-menu__cta" onClick={() => setMenuOpen(false)}>
          Book an Event
        </Link>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(20, 67, 26, 0.08);
          transition: box-shadow 0.3s ease;
        }

        .navbar--scrolled {
          box-shadow: 0 2px 20px rgba(20, 67, 26, 0.08);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          gap: 2rem;
          height: 72px;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-shrink: 0;
          text-decoration: none;
        }

        .navbar__logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
        }

        .navbar__logo-text {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 400;
          letter-spacing: 0.06em;
          line-height: 1;
          text-transform: uppercase;
        }

        .navbar__logo-pnw {
          color: #1E6B24;
        }

        .navbar__logo-sim {
          color: #1C3461;
        }

        .navbar__links {
          display: flex;
          align-items: center;
          gap: 2rem;
          list-style: none;
          margin-left: auto;
        }

        .navbar__link {
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #374535;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.2s ease;
        }

        .navbar__link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #1E6B24;
          transition: width 0.3s var(--ease-out-expo);
        }

        .navbar__link:hover,
        .navbar__link--active {
          color: #14431A;
        }

        .navbar__link:hover::after,
        .navbar__link--active::after {
          width: 100%;
        }

        .navbar__cta {
          margin-left: 1rem;
          padding: 0.65rem 1.4rem;
          font-size: 0.72rem;
        }

        .navbar__burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          margin-left: auto;
        }

        .navbar__burger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #14431A;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .navbar__burger--active span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar__burger--active span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .navbar__burger--active span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          background: #fff;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-menu--open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu__links {
          list-style: none;
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .mobile-menu__links li {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.4s ease calc(var(--i) * 0.07s + 0.1s),
                      transform 0.4s ease calc(var(--i) * 0.07s + 0.1s);
        }

        .mobile-menu--open .mobile-menu__links li {
          opacity: 1;
          transform: translateY(0);
        }

        .mobile-menu__links a {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 3rem);
          font-weight: 400;
          color: #14431A;
          transition: color 0.2s ease;
        }

        .mobile-menu__links a:hover,
        .mobile-menu__links a.active {
          color: #1E6B24;
        }

        .mobile-menu__cta {
          margin-top: 1rem;
        }

        @media (max-width: 768px) {
          .navbar__links,
          .navbar__cta {
            display: none;
          }

          .navbar__burger {
            display: flex;
          }
        }
      `}</style>
    </>
  )
}
