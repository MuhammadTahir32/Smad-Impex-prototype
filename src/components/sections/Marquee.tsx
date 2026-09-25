/**
 * Marquee Band
 *
 * The single continuous animation on the page (per brand-theme.md rule 4).
 * Infinite horizontal scroll of repeated text using pure CSS `@keyframes`.
 * Uses `prefers-reduced-motion` to pause for accessibility.
 */
export default function Marquee() {
  // Text items that scroll. Repeated twice in the DOM so the loop is seamless.
  const items = [
    'Custom Sportswear',
    '★',
    'OEM & ODM',
    '★',
    'Sialkot Manufacturing',
    '★',
    'Casual Wear',
    '★',
    'Leather Goods',
    '★',
    'Private Label',
    '★',
    '50k+ Units / Month',
    '★',
  ];

  const marqueeContent = items.join(' \u00A0\u00A0 '); // non-breaking spaces as separators

  return (
    <div
      id="marquee"
      className="relative bg-lime-500 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Top border accent */}
      <div className="h-px bg-ink-950/10" />

      <div className="py-5 md:py-6 flex whitespace-nowrap">
        {/* Two identical strips side-by-side create the infinite loop illusion */}
        <div
          className="flex shrink-0 items-center gap-0 animate-marquee"
          style={{ animationDuration: '30s' }}
        >
          <span className="font-display font-black text-ink-950 text-lg md:text-2xl tracking-[-0.02em] uppercase px-4">
            {marqueeContent}
          </span>
          <span className="font-display font-black text-ink-950 text-lg md:text-2xl tracking-[-0.02em] uppercase px-4">
            {marqueeContent}
          </span>
          <span className="font-display font-black text-ink-950 text-lg md:text-2xl tracking-[-0.02em] uppercase px-4">
            {marqueeContent}
          </span>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px bg-ink-950/10" />
    </div>
  );
}
