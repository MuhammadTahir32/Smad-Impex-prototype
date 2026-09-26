import { content } from '../../data/content';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

/** Why-choose-us feature items */
const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: 'Custom Design',
    description: 'Full OEM & ODM capability. From your sketch to finished product — we handle pattern making, sampling, and full production.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: '30-day average lead time from sample approval to bulk delivery. Express runs available for rush orders.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Certified Quality',
    description: 'ISO 9001, OEKO-TEX, and GMP certified facility. Every batch passes 6-point quality inspection before shipping.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Global Shipping',
    description: 'We ship to 35+ countries. DDP, FOB, and CIF terms available. Full export documentation handled in-house.',
  },
];

/** Additional testimonials beyond the one in content.ts */
const testimonials = [
  {
    quote: content.testimonials.quote,
    author: content.testimonials.author,
    role: content.testimonials.role,
  },
  {
    quote: 'We switched three manufacturers before finding Smad Impex. Their leather craftsmanship is unmatched — our customers can feel the difference instantly.',
    author: 'Sarah Mitchell',
    role: 'Founder, MITCH Leather Co.',
  },
  {
    quote: 'From sampling to bulk, everything was seamless. The 50k monthly capacity meant we could scale without changing partners. Highly recommended.',
    author: 'James Park',
    role: 'COO, Vanguard Sports',
  },
];

export default function Testimonials() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [featuresRef, featuresVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const [quotesRef, quotesVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const [statsRef, statsVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.2 });

  const stats = content.testimonials.stats;

  return (
    <section
      id="testimonials"
      className="relative bg-ink-950 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          PART 1: Why Choose Us
          ═══════════════════════════════════════════ */}
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          {/* Section heading */}
          <div
            ref={headingRef}
            className={`mb-16 md:mb-20 transition-all duration-700 ease-out ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-lime-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
                Why Choose Us
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
              <h2
                className="font-display font-black leading-[0.90] tracking-[-0.04em] text-cream-50"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
              >
                Built Different.
                <br />
                <span className="text-olive-400">Built Better.</span>
              </h2>
              <p className="text-cream-50/50 text-sm md:text-base font-body max-w-md leading-relaxed lg:text-right lg:ml-auto">
                Sialkot has been the world's manufacturing powerhouse for over a century. We bring that heritage to every stitch.
              </p>
            </div>
          </div>

          {/* Feature cards — 4-column grid */}
          <div
            ref={featuresRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className={`group relative rounded-2xl border border-cream-50/[0.06] bg-cream-50/[0.03] p-7 transition-all duration-700 ease-out hover:border-lime-500/30 hover:bg-cream-50/[0.06] ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-lime-500/10 flex items-center justify-center text-lime-500 mb-5 group-hover:bg-lime-500/20 transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-cream-50 text-base mb-2">
                  {feat.title}
                </h3>
                <p className="text-cream-50/40 text-sm font-body leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PART 2: Testimonials & Stats (Shade shift to separate sections)
          ═══════════════════════════════════════════ */}
      <div className="py-24 md:py-32 bg-cream-50/[0.02] border-t border-cream-50/[0.08]">
        <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          {/* Testimonials heading */}
          <div className="flex items-center gap-3 mb-14">
            <span className="h-px w-8 bg-cream-50/20" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-50/30">
              Client Testimonials
            </span>
          </div>

          {/* Testimonial cards grid */}
          <div
            ref={quotesRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20"
          >
            {testimonials.map((t, i) => (
              <div
                key={t.author}
                className={`relative rounded-2xl p-8 transition-all duration-700 ease-out ${
                  i === 0
                    ? 'bg-olive-400 text-ink-950'
                    : 'bg-cream-50/[0.04] border border-cream-50/[0.06] text-cream-50'
                } ${quotesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${i * 160}ms` }}
              >
                {/* Quote mark */}
                <span
                  className={`block font-display text-5xl font-black leading-none mb-4 ${
                    i === 0 ? 'text-ink-950/15' : 'text-cream-50/10'
                  }`}
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p
                  className={`text-sm leading-relaxed font-body mb-8 ${
                    i === 0 ? 'text-ink-950/70' : 'text-cream-50/55'
                  }`}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 mt-auto">
                  {/* Author avatar placeholder (initials) */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${
                      i === 0
                        ? 'bg-ink-950 text-olive-400'
                        : 'bg-cream-50/10 text-cream-50/60'
                    }`}
                  >
                    {t.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span
                      className={`block text-sm font-semibold ${
                        i === 0 ? 'text-ink-950' : 'text-cream-50'
                      }`}
                    >
                      {t.author}
                    </span>
                    <span
                      className={`block text-xs ${
                        i === 0 ? 'text-ink-950/50' : 'text-cream-50/35'
                      }`}
                    >
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════════════════════════════════
              PART 3: Big Stats
              ═══════════════════════════════════════════ */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-cream-50/[0.06] rounded-2xl overflow-hidden"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-ink-950 p-10 md:p-12 flex flex-col items-center text-center transition-all duration-700 ease-out ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 180}ms` }}
              >
                <span
                  className="font-display font-black leading-none tracking-[-0.04em] text-cream-50 mb-2"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium text-cream-50/35 uppercase tracking-[0.2em]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
