import { content } from '../../data/content';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

export default function About() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const [tagsRef, tagsVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.2 });
  const [statsRef, statsVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.25 });

  const stats = content.testimonials.stats;

  return (
    <section
      id="about"
      className="relative min-h-screen bg-olive-400 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* ── LEFT COLUMN: Text content ── */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 lg:py-0">

          {/* Eyebrow */}
          <div
            ref={headingRef}
            className={`transition-all duration-700 ease-out ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-ink-950/40" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-950/50">
                About Us
              </span>
            </div>

            {/* Large headline — same Archivo treatment */}
            <h2
              className="font-display font-black leading-[0.90] tracking-[-0.04em] text-ink-950 mb-8"
              style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
            >
              {content.about.title.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="text-lime-500">
                {content.about.title.split(' ').slice(2).join(' ')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-ink-950/60 text-sm md:text-base font-body max-w-md leading-relaxed mb-10">
              {content.about.description}
            </p>
          </div>

          {/* Category tags — staggered reveal */}
          <div ref={tagsRef} className="flex flex-wrap gap-3 mb-12">
            {content.about.categories.map((cat, i) => (
              <span
                key={cat}
                className={`rounded-full bg-ink-950 text-cream-50 px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-600 ease-out ${
                  tagsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Stats row — staggered reveal */}
          <div ref={statsRef} className="grid grid-cols-3 gap-6 max-w-md">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ease-out ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <span className="block font-display text-3xl md:text-4xl font-black tracking-tight text-ink-950 leading-none">
                  {stat.value}
                </span>
                <span className="block text-[10px] md:text-xs font-medium text-ink-950/45 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Factory image ── */}
        <div
          ref={imageRef}
          className={`relative overflow-hidden transition-all duration-1000 ease-out ${
            imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'
          }`}
        >
          <img
            src="/about-bg.jpg"
            alt="Smad Impex manufacturing floor"
            className="w-full h-full object-cover min-h-[400px] lg:min-h-screen"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-olive-400/20" />

          {/* Floating label on image */}
          <div className="absolute bottom-8 left-8 bg-ink-950/80 backdrop-blur-sm rounded-xl px-5 py-3">
            <span className="text-lime-500 font-display font-black text-lg">50k+</span>
            <span className="text-cream-50/70 text-xs ml-2 font-medium uppercase tracking-wider">units / month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
