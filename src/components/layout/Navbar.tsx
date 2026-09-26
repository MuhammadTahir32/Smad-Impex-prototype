import { useState, useEffect, useMemo, useRef } from 'react';
import { content } from '../../data/content';
import { products } from '../../data/products';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const blurTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.moq.toLowerCase().includes(q)
      )
      .slice(0, 6);
  }, [query]);

  const openProduct = () => {
    setQuery('');
    setSearchOpen(false);
    const target = document.getElementById('products');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = 'products';
  };

  const handleBlur = () => {
    blurTimer.current = setTimeout(() => setSearchOpen(false), 150);
  };

  const handleFocus = () => {
    if (blurTimer.current) clearTimeout(blurTimer.current);
    setSearchOpen(true);
  };

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
          ? 'py-3 bg-white/95 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
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

        {/* ── Desktop product search ── */}
        <div id="navbar-search" className="hidden md:block relative">
          <div
            className={`flex items-center gap-2 rounded-full border py-2 pl-4 pr-3 transition-all duration-300 ${
              searchOpen
                ? 'w-72 border-ink-950/25 bg-cream-50 shadow-lg shadow-ink-950/10'
                : 'w-56 border-ink-950/10 bg-ink-950/[0.06]'
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              className="w-4 h-4 shrink-0 text-ink-950/45"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearchOpen(true);
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={(e) => {
                if (e.key === 'Escape') setSearchOpen(false);
                if (e.key === 'Enter') {
                  e.preventDefault();
                  if (results.length) openProduct();
                  else document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-44 xl:w-56 bg-transparent text-sm text-ink-950 placeholder:text-ink-950/40 focus:outline-none"
            />
          </div>

          {/* Results dropdown */}
          {searchOpen && query.trim() !== '' && (
            <div className="absolute right-0 top-full mt-2 w-80 overflow-hidden rounded-2xl border border-ink-950/10 bg-cream-50 shadow-2xl shadow-ink-950/15">
              {results.length > 0 ? (
                <ul className="max-h-80 overflow-y-auto py-1">
                  {results.map((product) => (
                    <li key={product.id}>
                      <button
                        type="button"
                        onMouseDown={(e) => e.preventDefault()}
                        onClick={openProduct}
                        className="group flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors duration-200 hover:bg-olive-50"
                      >
                        <span className="min-w-0">
                          <span className="block truncate text-sm font-medium text-ink-950">
                            {product.name}
                          </span>
                          <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-ink-950/40">
                            {product.category} · {product.moq}
                          </span>
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="w-4 h-4 shrink-0 text-ink-950/30 transition-all duration-200 group-hover:text-lime-500 group-hover:translate-x-0.5"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-4 py-4 text-sm text-ink-950/50">
                  No products match “{query.trim()}”.
                </p>
              )}
            </div>
          )}
        </div>

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
