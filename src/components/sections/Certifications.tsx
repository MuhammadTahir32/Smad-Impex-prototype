import { content } from '../../data/content';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

/** Map certification names to short descriptions for the cards */
const certDetails: Record<string, { desc: string; icon: string }> = {
  CE: { desc: 'European Conformity', icon: '🇪🇺' },
  FDA: { desc: 'Food & Drug Administration', icon: '🏛️' },
  GMP: { desc: 'Good Manufacturing Practice', icon: '🏭' },
  'ISO 9001': { desc: 'Quality Management System', icon: '✅' },
  'ISO 13485': { desc: 'Medical Devices QMS', icon: '🩺' },
  'OEKO-TEX': { desc: 'Textile Safety Standard', icon: '🧵' },
};

export default function Certifications() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="certifications"
      className="relative bg-olive-400 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24">

        {/* Section heading */}
        <div
          ref={headingRef}
          className={`mb-12 md:mb-16 transition-all duration-700 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-950/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-950/50">
              Certifications
            </span>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="font-display font-black leading-[0.90] tracking-[-0.04em] text-ink-950"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Globally
              <br />
              <span className="text-ink-950/30">Certified.</span>
            </h2>
            <p className="text-ink-950/45 text-sm font-body max-w-xs leading-relaxed">
              Every product leaving our facility meets international safety, quality, and sustainability standards.
            </p>
          </div>
        </div>

        {/* Certification badges grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {content.certifications.map((cert, i) => {
            const detail = certDetails[cert] || { desc: cert, icon: '📋' };
            return (
              <div
                key={cert}
                className={`group relative rounded-2xl bg-cream-50 p-6 flex flex-col items-center text-center transition-all duration-700 ease-out cursor-default hover:bg-ink-950 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon */}
                <span className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-110">
                  {detail.icon}
                </span>

                {/* Cert name */}
                <span className="font-display font-black text-ink-950 text-sm tracking-tight group-hover:text-lime-500 transition-colors duration-300">
                  {cert}
                </span>

                {/* Description */}
                <span className="text-[10px] text-ink-950/40 font-medium uppercase tracking-wider mt-1 group-hover:text-cream-50/40 transition-colors duration-300">
                  {detail.desc}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
