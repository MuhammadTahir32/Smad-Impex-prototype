import { content } from '../../data/content';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[96vh] min-h-[600px] overflow-hidden"
    >
      {/* ── Full-bleed background image ── */}
      <img
        src="/hero-bg.jpg"
        alt="Smad Impex custom apparel"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* ── Gradient overlays for text readability ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ink-950/60 to-transparent" />

      {/* ── Text content — pinned to bottom-left like Lystre ── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-20 px-8 md:px-16 lg:px-24">

        {/* Eyebrow tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-lime-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
            Sialkot, Pakistan — Est. 2012
          </span>
        </div>

        {/* Oversized Archivo headline */}
        <h1
          className="font-display font-black leading-[0.88] tracking-[-0.04em] text-cream-50 mb-6"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
        >
          Built for
          <br />
          <span className="text-lime-500">Brands</span>
          <br />
          That Win.
        </h1>

        {/* Short sub-line */}
        <p className="text-cream-50/65 text-sm md:text-base font-body max-w-xs md:max-w-sm mb-10 leading-relaxed">
          Custom OEM &amp; ODM sportswear manufacturing from Sialkot.
        </p>

        {/* CTA buttons */}
        <div className="flex items-center gap-5 flex-wrap">
          <a
            href="#newsletter"
            id="hero-cta"
            className="inline-flex items-center gap-2 rounded-full bg-lime-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-cream-50 hover:scale-[1.04] hover:shadow-2xl hover:shadow-lime-500/25 active:scale-95"
          >
            {content.hero.cta}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="#products"
            className="text-sm font-medium text-cream-50/55 underline underline-offset-4 hover:text-cream-50 transition-colors duration-300"
          >
            View products
          </a>
        </div>
      </div>

      {/* ── Scroll indicator (right side) ── */}
      <div className="absolute bottom-10 right-10 z-10 items-center gap-2 hidden md:flex flex-col">
        <div className="w-px h-16 bg-cream-50/20 overflow-hidden relative">
          <div
            className="absolute top-0 left-0 w-full h-1/2 bg-lime-500"
            style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
          />
        </div>
        <span className="text-[9px] uppercase tracking-[0.3em] text-cream-50/35 font-medium">
          Scroll
        </span>
      </div>
    </section>
  );
}
