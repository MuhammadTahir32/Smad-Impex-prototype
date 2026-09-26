import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const steps = [
  {
    id: '01',
    title: 'Design & Tech Pack',
    description: 'Submit your tech packs or collaborate with our in-house design team. We finalize fabrics, trims, patterns, and sizing grades.',
  },
  {
    id: '02',
    title: 'Prototyping & Sampling',
    description: 'We craft initial physical samples for your review. We iterate on fit, feel, and finish until the prototype is 100% approved.',
  },
  {
    id: '03',
    title: 'Bulk Production',
    description: 'Once approved, we move to full-scale OEM/ODM manufacturing. Our Sialkot facility handles cutting, stitching, and finishing at scale.',
  },
  {
    id: '04',
    title: 'QA & Global Delivery',
    description: 'Every piece undergoes a strict 6-point quality check before being packed and shipped to your warehouse, anywhere in the world.',
  },
];

export default function Process() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [stepsRef, stepsVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="manufacturing"
      className="relative bg-olive-200 py-20 md:py-28 lg:py-0 lg:h-[96svh] lg:min-h-[640px] lg:flex lg:items-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Section header */}
        <div
          ref={headingRef}
          className={`mb-12 md:mb-16 lg:mb-14 transition-all duration-700 ease-out ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-ink-950/40" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-950/50">
              OEM & ODM Process
            </span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <h2
              className="font-display font-black leading-[0.90] tracking-[-0.04em] text-ink-950"
              style={{ fontSize: 'clamp(2.25rem, 4.2vw, 4rem)' }}
            >
              How We
              <br />
              <span className="text-ink-950">Manufacture.</span>
            </h2>
            <p className="text-ink-950/60 text-sm md:text-base font-body max-w-md leading-relaxed lg:text-right lg:ml-auto">
              A transparent, end-to-end manufacturing pipeline designed to scale your apparel brand with zero friction.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div
          ref={stepsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4 relative"
        >
          {/* Decorative connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-ink-950/10 z-0" />

          {steps.map((step, i) => (
            <div
              key={step.id}
              className={`relative z-10 group transition-all duration-700 ease-out ${
                stepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Number circle */}
              <div className="w-24 h-24 rounded-full bg-cream-50 flex items-center justify-center border-4 border-olive-200 mb-8 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-xl shadow-ink-950/5">
                <span className="font-display font-black text-3xl text-ink-950/20 group-hover:text-lime-500 transition-colors duration-300">
                  {step.id}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-ink-950 text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-ink-950/60 text-sm font-body leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
