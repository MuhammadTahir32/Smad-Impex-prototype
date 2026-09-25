import { useState } from 'react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';

const categories = [
  {
    id: 'sportswear',
    title: 'Custom Sportswear',
    subtitle: 'Manufacturer',
    description:
      'Performance-driven athletic wear engineered for your brand. From compression layers to team kits — precision cut, stitched, and shipped.',
    image: '/cat-sportswear.jpg',
    features: ['Moisture-Wicking', 'Sublimation Print', 'Team Kits'],
  },
  {
    id: 'casual',
    title: 'Custom Casual',
    subtitle: 'Clothing',
    description:
      'Premium streetwear and everyday essentials. Heavyweight hoodies, joggers, tees — crafted with 300 GSM fleece and organic cotton.',
    image: '/cat-casual.jpg',
    features: ['Heavyweight Fleece', 'Organic Cotton', 'Private Label'],
  },
  {
    id: 'leather',
    title: 'Custom Leather',
    subtitle: 'Goods',
    description:
      'Handcrafted genuine leather jackets, gloves, and accessories. Sialkot\'s century-old leather craft meets modern pattern making.',
    image: '/cat-leather.jpg',
    features: ['Genuine Leather', 'Hand-Stitched', 'Chrome-Free Tanning'],
  },
];

export default function Categories() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section
      id="categories"
      className="relative bg-ink-950 py-24 md:py-32 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Background decorative text */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[18vw] font-black leading-none tracking-tighter text-cream-50/[0.02] select-none whitespace-nowrap"
      >
        CATEGORIES
      </span>

      {/* Section header */}
      <div
        ref={headingRef}
        className={`max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-16 md:mb-20 transition-all duration-700 ease-out ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-lime-500" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-lime-500">
            What We Manufacture
          </span>
        </div>
        <h2
          className="font-display font-black leading-[0.90] tracking-[-0.04em] text-cream-50"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
        >
          Our Core
          <br />
          <span className="text-olive-400">Categories.</span>
        </h2>
      </div>

      {/* Category cards grid */}
      <div
        ref={cardsRef}
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
      >
        {categories.map((cat, i) => (
          <a
            key={cat.id}
            href="#products"
            className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out block ${
              cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${activeCard === cat.id ? 'md:col-span-1' : ''}`}
            style={{
              transitionDelay: `${i * 180}ms`,
              minHeight: '520px',
            }}
            onMouseEnter={() => setActiveCard(cat.id)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Card background image */}
            <img
              src={cat.image}
              alt={`${cat.title} ${cat.subtitle}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Default dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/30 to-ink-950/10 transition-opacity duration-500" />

            {/* Hover overlay — darker for text readability */}
            <div className="absolute inset-0 bg-ink-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* ── Card content ── */}
            <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-8">

              {/* Category number */}
              <span className="text-lime-500 font-display font-black text-sm mb-3 tracking-wider opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                0{i + 1}
              </span>

              {/* Title */}
              <h3 className="font-display font-black text-cream-50 leading-[0.92] tracking-[-0.03em] mb-2"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
              >
                {cat.title}
                <br />
                <span className="text-olive-400">{cat.subtitle}</span>
              </h3>

              {/* Description — slides up on hover */}
              <div className="overflow-hidden">
                <p className="text-cream-50/60 text-sm font-body leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Feature tags — stagger in on hover */}
              <div className="flex flex-wrap gap-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                {cat.features.map((feat) => (
                  <span
                    key={feat}
                    className="rounded-full border border-cream-50/20 bg-cream-50/5 backdrop-blur-sm px-3.5 py-1.5 text-[11px] font-medium text-cream-50/80 tracking-wide"
                  >
                    {feat}
                  </span>
                ))}
              </div>

              {/* Arrow indicator */}
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-cream-50/20 flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 delay-150 group-hover:border-lime-500">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-lime-500 -rotate-45">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
