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
      className="relative bg-olive-400 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[1fr] lg:h-[96svh] lg:min-h-[560px]">

        {/* ── LEFT COLUMN: Text content ── */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-12 md:py-14 lg:py-10">

          {/* Eyebrow */}
          <div
            ref={headingRef}
            className={`transition-all duration-700 ease-out ${
              headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-ink-950/40" />
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.22em] text-ink-950/50">
                About Us
              </span>
            </div>

            {/* Large headline — same Archivo treatment */}
            <h2
              className="font-display font-black leading-[0.94] tracking-[-0.04em] text-ink-950 mb-6"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 3.75rem)' }}
            >
              {content.about.title.split(' ').slice(0, 2).join(' ')}
              <br />
              <span className="text-lime-500">
                {content.about.title.split(' ').slice(2).join(' ')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-ink-950/60 text-sm md:text-lg font-body max-w-lg leading-relaxed mb-8">
              {content.about.description}
            </p>
          </div>

          {/* Category tags — staggered reveal */}
          <div ref={tagsRef} className="flex flex-wrap gap-2.5 mb-10">
            {content.about.categories.map((cat, i) => (
              <span
                key={cat}
                className={`rounded-full bg-ink-950 text-cream-50 px-5 py-2.5 text-sm md:text-base font-semibold tracking-wide transition-all duration-600 ease-out ${
                  tagsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Stats row — staggered reveal */}
          <div ref={statsRef} className="grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`transition-all duration-700 ease-out ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 150 + 200}ms` }}
              >
                <span className="block font-display text-2xl md:text-4xl font-black tracking-tight text-ink-950 leading-none">
                  {stat.value}
                </span>
                <span className="block text-[11px] md:text-xs font-medium text-ink-950/45 uppercase tracking-wider mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Factory image in a framed container ── */}
        <div
          ref={imageRef}
          className={`relative flex items-center justify-center p-6 md:p-10 lg:p-12 transition-all duration-1000 ease-out ${
            imageVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'
          }`}
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl ring-1 ring-ink-950/10 shadow-2xl shadow-ink-950/20 w-full h-[260px] md:h-[340px] lg:absolute lg:inset-12 lg:h-auto lg:w-auto">
            <img
              src="/about-bg.jpg"
              alt="Smad Impex manufacturing floor"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-olive-400/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
