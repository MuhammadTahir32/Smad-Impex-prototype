import { content } from '../../data/content';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

/** Real certification marks served from /public/certs */
const certMarks: Record<string, { logo: string; desc: string }> = {
  CE: { logo: '/certs/ce.svg', desc: 'European Conformity' },
  FDA: { logo: '/certs/fda.svg', desc: 'Food & Drug Administration' },
  GMP: { logo: '/certs/gmp.svg', desc: 'Good Manufacturing Practice' },
  'ISO 9001': { logo: '/certs/iso9001.svg', desc: 'Quality Management System' },
  'ISO 13485': { logo: '/certs/iso13485.svg', desc: 'Medical Devices QMS' },
  'OEKO-TEX': { logo: '/certs/oekotex.svg', desc: 'Textile Safety Standard' },
};

export default function Certifications() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [gridRef, gridVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="certifications"
      className="relative bg-cream-50 border-t border-b border-ink-950/[0.08] py-[54px] md:py-[70px] lg:py-[86px] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8 md:px-16">

        {/* ── Centered heading: OUR CERTIFICATIONS ── */}
        <div
          ref={headingRef}
          className={`mb-8 md:mb-10 text-center transition-all duration-700 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="font-display font-black uppercase tracking-[-0.02em] text-ink-950"
            style={{ fontSize: 'clamp(1.375rem, 2.6vw, 2.25rem)' }}
          >
            Our <span className="text-moss-700">Certifications</span>
          </h2>
        </div>

        {/* ── Real logos row — always one line from sm up ── */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-6 gap-x-4 gap-y-6 sm:gap-x-6"
        >
          {content.certifications.map((cert, i) => {
            const mark = certMarks[cert];
            if (!mark) return null;
            return (
              <div
                key={cert}
                title={`${cert} — ${mark.desc}`}
                className={`group flex h-14 md:h-16 items-center justify-center transition-all duration-700 ease-out ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 110}ms` }}
              >
                <img
                  src={mark.logo}
                  alt={`${cert} — ${mark.desc}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
