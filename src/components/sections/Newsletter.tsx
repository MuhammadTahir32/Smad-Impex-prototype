import { content } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Newsletter() {
  const [sectionRef, sectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative bg-ink-950 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          CTA BLOCK
          ═══════════════════════════════════════════ */}
      <div className="py-28 md:py-40">
        {/* Background watermark */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[20vw] font-black leading-none tracking-tighter text-cream-50/[0.02] select-none whitespace-nowrap"
        >
          SMAD
        </span>

        <div
          className={`max-w-3xl mx-auto px-8 md:px-16 text-center transition-all duration-1000 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-lime-500" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
              Get Started
            </span>
            <span className="h-px w-8 bg-lime-500" />
          </div>

          {/* Headline */}
          <h2
            className="font-display font-black leading-[0.90] tracking-[-0.04em] text-cream-50 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5rem)' }}
          >
            {content.newsletter.headline}
          </h2>

          {/* Subheadline */}
          <p className="text-cream-50/50 text-sm md:text-base font-body max-w-lg mx-auto leading-relaxed mb-12">
            {content.newsletter.subheadline}
          </p>

          {/* CTA Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Your business email"
              className="flex-1 rounded-full bg-cream-50/[0.06] border border-cream-50/10 px-6 py-3.5 text-sm text-cream-50 placeholder:text-cream-50/30 font-body focus:outline-none focus:border-lime-500/50 focus:bg-cream-50/[0.08] transition-all duration-300"
            />
            <button
              type="submit"
              id="newsletter-cta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-cream-50 hover:scale-[1.03] hover:shadow-2xl hover:shadow-lime-500/20 active:scale-95 whitespace-nowrap"
            >
              {content.newsletter.cta}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
              </svg>
            </button>
          </form>

          {/* Trust line */}
          <p className="text-cream-50/25 text-xs font-body mt-6">
            No commitment required · Response within 24 hours · MOQ as low as 100 units
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="h-px bg-cream-50/[0.06]" />
      </div>

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          {/* Footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">

            {/* Column 1: Brand */}
            <div className="md:col-span-1">
              <span className="font-display font-black text-cream-50 text-xl tracking-tight">
                {content.global.companyName}
              </span>
              <p className="text-cream-50/30 text-xs font-body leading-relaxed mt-3">
                Premium custom apparel manufacturer based in Sialkot, Pakistan. OEM & ODM services for global brands.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-4 block">
                Navigation
              </span>
              <ul className="space-y-2.5">
                {content.nav.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-cream-50/50 hover:text-cream-50 transition-colors duration-300 font-body"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Categories */}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-4 block">
                Categories
              </span>
              <ul className="space-y-2.5">
                {content.about.categories.map((cat) => (
                  <li key={cat}>
                    <span className="text-sm text-cream-50/50 font-body">{cat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-4 block">
                Contact
              </span>
              <ul className="space-y-2.5">
                <li className="text-sm text-cream-50/50 font-body">
                  {content.global.contactEmail}
                </li>
                <li className="text-sm text-cream-50/50 font-body">
                  {content.global.contactPhone}
                </li>
                <li className="text-sm text-cream-50/50 font-body leading-relaxed">
                  {content.global.address}
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px bg-cream-50/[0.06] mb-8" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <span className="text-xs text-cream-50/20 font-body">
              © {new Date().getFullYear()} {content.global.companyName}. All rights reserved.
            </span>
            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-cream-50/20 hover:text-cream-50/50 transition-colors font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-cream-50/20 hover:text-cream-50/50 transition-colors font-body">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
