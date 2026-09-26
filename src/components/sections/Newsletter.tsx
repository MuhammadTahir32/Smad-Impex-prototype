import { useState } from 'react';
import { content } from '../../data/content';
import { useScrollReveal } from '../../hooks/useScrollReveal';

/** What the buyer actually receives in the quote */
const quoteIncludes = [
  'Costed BOM with per-unit pricing',
  'Fabric, trim & GSM spec sheet',
  'Fit sample timeline — 7 working days',
  'DDP freight options to your market',
];

/** Capability chips — non-numeric proof points */
const capabilities = [
  'Tech pack supported',
  'Free fabric swatches',
  'AQL 2.5 final inspection',
  'OEKO-TEX certified fabrics',
  'Custom labels & hangtags',
];

const qtyOptions = ['100 – 500 pcs', '500 – 2,000 pcs', '2,000 – 10,000 pcs', '10,000+ pcs'];

export default function Newsletter() {
  const [sectionRef, sectionVisible] = useScrollReveal<HTMLElement>({ threshold: 0.15 });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const headlineParts = content.newsletter.headline.split(/(scale)/i);

  return (
    <section
      ref={sectionRef}
      id="newsletter"
      className="relative bg-ink-950 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          GET STARTED — split block (96svh)
          ═══════════════════════════════════════════ */}
      <div className="relative lg:h-[96svh] lg:min-h-[640px] lg:flex lg:items-center overflow-hidden">
        {/* Ambient olive glow, top-left */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-48 -left-40 w-[560px] h-[560px] rounded-full bg-lime-500/[0.09] blur-[130px]"
        />
        {/* Ambient olive glow, bottom-right */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-56 -right-32 w-[520px] h-[520px] rounded-full bg-olive-400/[0.10] blur-[140px]"
        />
        {/* Fine engineering grid, faded at the edges */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(250,249,242,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(250,249,242,0.05)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(75%_65%_at_50%_45%,black,transparent)]"
        />
        {/* Concentric rings behind the panel */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[-160px] top-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full border border-cream-50/[0.07]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-[-60px] top-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-lime-500/[0.12]"
        />

        <div
          className={`relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-20 lg:py-0 transition-all duration-1000 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* ── Left: copy ── */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
                  Get Started
                </span>
              </div>

              <h2
                className="font-display font-black leading-[0.88] tracking-[-0.04em] text-cream-50 mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.75rem)' }}
              >
                {headlineParts.map((part, i) =>
                  part.toLowerCase() === 'scale' ? (
                    <span key={i} className="text-lime-500">
                      {part}
                    </span>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </h2>

              <p className="text-cream-50/55 text-sm md:text-lg font-body max-w-xl leading-relaxed mb-9">
                {content.newsletter.subheadline}
              </p>

              {/* What's inside the quote */}
              <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/30 mb-4">
                Every quote includes
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                {quoteIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4 mt-0.5 shrink-0 text-olive-400"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm font-body text-cream-50/60 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-cream-50/30 text-xs font-body mt-8">
                No commitment required · Response within 24 hours · MOQ as low as 100 units
              </p>
            </div>

            {/* ── Right: quote panel ── */}
            <div className="lg:col-span-6 lg:pl-6 xl:pl-16">
              <div className="relative rounded-3xl border border-cream-50/10 bg-ink-950/60 backdrop-blur-sm p-6 md:p-9 shadow-[0_40px_90px_-40px_rgba(200,241,105,0.25)]">
                {/* Panel head */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
                    Request a quote
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-cream-50/[0.05] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cream-50/50">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lime-500" />
                    </span>
                    Sourcing desk online
                  </span>
                </div>

                {isSubmitted ? (
                  <div className="py-6">
                    <div className="w-12 h-12 rounded-full bg-lime-500 flex items-center justify-center text-ink-950 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-cream-50 font-display font-bold text-lg mb-1">
                      Request Received
                    </h3>
                    <p className="text-cream-50/60 font-body text-sm">
                      Thank you! Our sourcing team will contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setIsSubmitted(true);
                    }}
                    className="flex flex-col gap-3"
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your business email"
                      className="w-full rounded-full bg-cream-50/[0.06] border border-cream-50/10 px-6 py-3.5 text-sm text-cream-50 placeholder:text-cream-50/30 font-body focus:outline-none focus:border-lime-500/50 focus:bg-cream-50/[0.08] transition-all duration-300"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="relative">
                        <select
                          defaultValue={content.about.categories[0]}
                          aria-label="Product category"
                          className="w-full rounded-full bg-cream-50/[0.06] border border-cream-50/10 px-5 py-3.5 pr-10 text-sm text-cream-50/80 font-body focus:outline-none focus:border-lime-500/50 transition-all duration-300 appearance-none"
                        >
                          {content.about.categories.map((cat) => (
                            <option key={cat} value={cat} className="bg-ink-950 text-cream-50">
                              {cat}
                            </option>
                          ))}
                          <option value="Other" className="bg-ink-950 text-cream-50">
                            Other / Mixed order
                          </option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-50/35"
                        >
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>

                      <div className="relative">
                        <select
                          defaultValue={qtyOptions[1]}
                          aria-label="Order quantity"
                          className="w-full rounded-full bg-cream-50/[0.06] border border-cream-50/10 px-5 py-3.5 pr-10 text-sm text-cream-50/80 font-body focus:outline-none focus:border-lime-500/50 transition-all duration-300 appearance-none"
                        >
                          {qtyOptions.map((qty) => (
                            <option key={qty} value={qty} className="bg-ink-950 text-cream-50">
                              {qty}
                            </option>
                          ))}
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cream-50/35"
                        >
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>

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

                    <p className="text-[11px] text-cream-50/30 font-body text-center pt-1">
                      Attach your tech pack later — we'll reply with a link to upload files.
                    </p>
                  </form>
                )}

                {/* Direct contact strip */}
                <div className="mt-6 pt-6 border-t border-cream-50/10 flex items-center justify-between gap-4">
                  <a
                    href={`mailto:${content.global.contactEmail}`}
                    className="text-xs text-cream-50/45 hover:text-lime-500 transition-colors duration-300 font-body truncate"
                  >
                    {content.global.contactEmail}
                  </a>
                  <a
                    href={`tel:${content.global.contactPhone.replace(/\s/g, '')}`}
                    className="text-xs text-cream-50/45 hover:text-lime-500 transition-colors duration-300 font-body whitespace-nowrap"
                  >
                    {content.global.contactPhone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Capability chips ── */}
          <div className="mt-12 lg:mt-16 border-t border-cream-50/10 pt-7 flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/30 mr-2">
              Capabilities
            </span>
            {capabilities.map((item) => (
              <span
                key={item}
                className="group inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-cream-50/[0.04] px-4 py-2 text-xs font-body text-cream-50/50 transition-all duration-300 hover:border-lime-500/40 hover:text-cream-50 hover:bg-cream-50/[0.07]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-olive-400 transition-colors duration-300 group-hover:bg-lime-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Divider — separates the CTA from the footer */}
      <div className="w-full h-px bg-cream-50/[0.12]" />

      {/* ═══════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════ */}
      <footer className="pt-14 md:pt-20 pb-10 md:pb-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-12 md:pb-14">

            {/* ── Brand block ── */}
            <div className="lg:col-span-5">
              <a href="#hero" className="inline-flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-lime-500 font-display font-black text-base leading-none text-ink-950">
                  S
                </span>
                <span className="font-display font-black text-xl tracking-tight text-cream-50">
                  {content.global.companyName}
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-50/40">
                Premium custom apparel manufacturer based in Sialkot, Pakistan. OEM & ODM
                services for global brands.
              </p>

              {/* Status + socials */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-cream-50/10 bg-cream-50/[0.04] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-cream-50/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
                  Open for new projects
                </span>

                {[
                  {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM.75 8.5h4.5V23H.75V8.5Zm8.4 0h4.31v1.98h.06c.6-1.14 2.08-2.35 4.29-2.35 4.58 0 5.43 3.01 5.43 6.93V23h-4.5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.71-2.54 3.49V23h-4.5V8.5Z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Instagram',
                    href: 'https://www.instagram.com',
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                        <rect x="3" y="3" width="18" height="18" rx="5" />
                        <circle cx="12" cy="12" r="4" />
                        <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Email',
                    href: `mailto:${content.global.contactEmail}`,
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                        <rect x="3" y="5" width="18" height="14" rx="3" />
                        <path d="m4 7.5 7.1 4.7a2 2 0 0 0 2.2 0L20.5 7.5" strokeLinecap="round" />
                      </svg>
                    ),
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-cream-50/10 text-cream-50/45 transition-all duration-300 hover:border-lime-500/50 hover:text-lime-500 hover:-translate-y-0.5"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Link columns ── */}
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">

              {/* Navigation */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-5 block">
                  Navigation
                </span>
                <ul className="space-y-3.5">
                  {content.nav.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-2 text-sm text-cream-50/50 transition-all duration-300 font-body hover:text-lime-500 hover:translate-x-1"
                      >
                        <span className="h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-3" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categories */}
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-5 block">
                  Categories
                </span>
                <ul className="space-y-3.5">
                  {content.about.categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#products"
                        className="group inline-flex items-center gap-2 text-sm text-cream-50/50 transition-all duration-300 font-body hover:text-lime-500 hover:translate-x-1"
                      >
                        <span className="h-px w-0 bg-lime-500 transition-all duration-300 group-hover:w-3" />
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream-50/25 mb-5 block">
                  Contact
                </span>
                <ul className="space-y-3.5 text-sm font-body text-cream-50/50">
                  <li>
                    <a
                      href={`mailto:${content.global.contactEmail}`}
                      className="inline-block transition-all duration-300 hover:text-lime-500 hover:translate-x-1 break-all"
                    >
                      {content.global.contactEmail}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${content.global.contactPhone.replace(/\s/g, '')}`}
                      className="inline-block transition-all duration-300 hover:text-lime-500 hover:translate-x-1"
                    >
                      {content.global.contactPhone}
                    </a>
                  </li>
                  <li className="leading-relaxed text-cream-50/40 transition-colors duration-300 hover:text-cream-50">
                    {content.global.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="h-px bg-cream-50/[0.08]" />
          <div className="pt-7 flex items-center justify-between flex-wrap gap-y-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="text-xs text-cream-50/25 font-body">
                © {new Date().getFullYear()} {content.global.companyName}. All rights reserved.
              </span>
              <span className="hidden sm:inline-flex items-center gap-2 text-xs text-cream-50/25 font-body">
                <span className="h-1.5 w-1.5 rounded-full bg-olive-400" />
                Sialkot, Pakistan · GMT+5
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-xs text-cream-50/25 hover:text-cream-50/70 transition-colors duration-300 font-body">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-cream-50/25 hover:text-cream-50/70 transition-colors duration-300 font-body">
                Terms of Service
              </a>
              <a
                href="#hero"
                aria-label="Back to top"
                className="group inline-flex items-center gap-2 text-xs text-cream-50/25 transition-colors duration-300 font-body hover:text-lime-500"
              >
                Back to top
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-6 6m6-6 6 6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
