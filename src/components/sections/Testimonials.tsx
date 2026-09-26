import { content } from '../../data/content';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

/** Why-choose-us feature items */
const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
      </svg>
    ),
    title: 'Custom Design',
    description: 'Full OEM & ODM capability. From your sketch to finished product — we handle pattern making, sampling, and full production.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Fast Turnaround',
    description: '30-day average lead time from sample approval to bulk delivery. Express runs available for rush orders.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: 'Certified Quality',
    description: 'ISO 9001, OEKO-TEX, and GMP certified facility. Every batch passes 6-point quality inspection before shipping.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-7 md:h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Global Shipping',
    description: 'We ship to 35+ countries. DDP, FOB, and CIF terms available. Full export documentation handled in-house.',
  },
];

export default function Testimonials() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [featuresRef, featuresVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const [tHeadingRef, tHeadingVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -25% 0px',
  });
  const [cardsRef, cardsVisible] = useStaggerReveal<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: '0px 0px -30% 0px',
  });

  const t = content.testimonials;

  /** 3-card testimonials — first one is the existing site testimonial */
  const testimonials = [
    {
      quote: t.quote,
      author: t.author,
      role: t.role,
      avatar: 'bg-olive-400',
    },
    {
      quote:
        'Sampling turnaround was faster than anyone we have worked with in Europe. The tech-pack feedback loop is genuinely two-way, and the final bulk matched the approved sample exactly.',
      author: 'Marta Kowalski',
      role: 'Founder, Nordik Activewear',
      avatar: 'bg-lime-500',
    },
    {
      quote:
        'We scaled from 2k to 18k units a month without a single missed shipment. Their QA reports are detailed enough that our retail partners trust every carton.',
      author: 'James Okafor',
      role: 'Head of Supply Chain, Volt Sportswear',
      avatar: 'bg-cream-50',
    },
  ];

  /** Multi-directional reveal: left → bottom → right */
  const cardEnter = [
    'opacity-0 -translate-x-24',
    'opacity-0 translate-y-24',
    'opacity-0 translate-x-24',
  ];
  const cardRest = 'opacity-100 translate-x-0 translate-y-0';
  const cardDelay = ['delay-0', 'delay-[220ms]', 'delay-[440ms]'];

  return (
    <section
      id="testimonials"
      className="relative bg-ink-950 overflow-hidden"
    >
      {/* ═══════════════════════════════════════════
          PART 1: Why Choose Us
          ═══════════════════════════════════════════ */}
      <div className="py-20 md:py-28 lg:py-0 lg:h-[96svh] lg:min-h-[640px] lg:flex lg:items-center">
        <div className="w-full max-w-[1648px] mx-auto px-8 md:px-16 lg:px-24">

          {/* Section heading */}
          <div
            ref={headingRef}
            className={`mb-12 md:mb-16 lg:mb-14 transition-all duration-700 ease-out ${
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
                style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)' }}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feat, i) => (
              <div
                key={feat.title}
                className={`group relative flex flex-col rounded-2xl border border-cream-50/[0.06] bg-cream-50/[0.03] p-7 md:p-8 transition-all duration-700 ease-out hover:border-lime-500/30 hover:bg-cream-50/[0.06] hover:-translate-y-2 ${
                  featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${i * 140}ms` }}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-lime-500/10 flex items-center justify-center text-lime-500 mb-6 group-hover:bg-lime-500/20 transition-colors duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-display font-bold text-cream-50 text-lg md:text-xl mb-3">
                  {feat.title}
                </h3>
                <p className="text-cream-50/60 text-sm md:text-base font-body leading-relaxed flex-1">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════
          PART 2: Testimonials — 3-card multi-directional reveal
          ═══════════════════════════════════════════ */}
      <div className="py-20 md:py-24 lg:py-0 lg:h-[96svh] lg:min-h-[640px] lg:flex lg:items-center bg-cream-50/[0.02] border-t border-cream-50/[0.08]">
        <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

          {/* Section heading */}
          <div
            ref={tHeadingRef}
            className={`mb-10 md:mb-14 transition-all duration-900 ease-out ${
              tHeadingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-lime-500" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
                Testimonials
              </span>
            </div>
            <h2
              className="font-display font-black leading-[0.95] tracking-[-0.04em] text-cream-50"
              style={{ fontSize: 'clamp(2rem, 3.6vw, 3.25rem)' }}
            >
              What Our Partners Say.
            </h2>
          </div>

          {/* 3-card testimonials — multi-directional reveal */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
          >
            {testimonials.map((item, i) => (
              <figure
                key={item.author}
                className={`group relative flex flex-col rounded-2xl border border-cream-50/[0.06] bg-cream-50/[0.03] p-7 transition-all duration-1000 ease-out group-hover:delay-0 hover:border-lime-500/30 hover:bg-cream-50/[0.06] hover:-translate-y-2 ${cardDelay[i]} ${
                  cardsVisible ? cardRest : cardEnter[i]
                }`}
              >
                {/* Quote mark */}
                <span className="block font-display text-lime-500 text-5xl font-black leading-none mb-4 opacity-30">
                  &ldquo;
                </span>

                {/* Quote */}
                <blockquote className="text-cream-50/70 text-sm md:text-[15px] font-body leading-relaxed flex-1">
                  {item.quote}
                </blockquote>

                {/* Author */}
                <figcaption className="flex items-center gap-3 mt-6 pt-6 border-t border-cream-50/[0.08]">
                  <span
                    className={`w-11 h-11 shrink-0 rounded-full ${item.avatar} text-ink-950 flex items-center justify-center font-display font-black text-base`}
                  >
                    {item.author.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-cream-50 font-bold text-sm truncate">
                      {item.author}
                    </span>
                    <span className="block text-lime-500/80 text-[11px] font-medium uppercase tracking-wider truncate">
                      {item.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
