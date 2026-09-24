import { useState, useEffect } from 'react';
import { content } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? 'py-3 bg-olive-400/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* ── Logo ── */}
        <a
          href="#"
          id="navbar-logo"
          className="font-display text-xl font-black tracking-tight text-ink-950 transition-transform duration-300 hover:scale-[1.03]"
        >
          {content.global.companyName}
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-8">
          {content.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-ink-950/70 transition-colors duration-300 hover:text-ink-950 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-ink-950 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Desktop CTA button ── */}
        <a
          href="#newsletter"
          id="navbar-cta"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-lime-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-ink-950 hover:text-lime-500 hover:shadow-lg hover:shadow-lime-500/20 active:scale-95"
        >
          {content.hero.cta}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path
              fillRule="evenodd"
              d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* ── Mobile hamburger button ── */}
        <button
          id="navbar-mobile-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 gap-[5px] group"
        >
          <span
            className={`block h-[2px] w-6 bg-ink-950 transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink-950 transition-all duration-300 ${
              mobileOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink-950 transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ── Mobile overlay menu ── */}
      <div
        id="navbar-mobile-menu"
        className={`fixed inset-0 z-40 bg-olive-400 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col items-start justify-center px-10 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-6">
          {content.nav.map((link, i) => (
            <li
              key={link.href}
              className="overflow-hidden"
              style={{
                transitionDelay: mobileOpen ? `${i * 80 + 100}ms` : '0ms',
              }}
            >
              <a
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block font-display text-4xl font-black tracking-tight text-ink-950 transition-all duration-500 ease-out hover:text-lime-500 ${
                  mobileOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-full opacity-0'
                }`}
                style={{
                  transitionDelay: mobileOpen ? `${i * 80 + 100}ms` : '0ms',
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <a
          href="#newsletter"
          onClick={() => setMobileOpen(false)}
          className={`mt-10 inline-flex items-center gap-2 rounded-full bg-lime-500 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all duration-500 ease-out hover:bg-ink-950 hover:text-lime-500 active:scale-95 ${
            mobileOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: mobileOpen ? `${content.nav.length * 80 + 200}ms` : '0ms',
          }}
        >
          {content.hero.cta}
        </a>
      </div>
    </nav>
  );
}
