import { useStaggerReveal } from '../../hooks/useScrollReveal';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { products, type Product, type ProductCategory } from '../../data/products';

const categoryColors: Record<ProductCategory, string> = {
  Sportswear: 'bg-lime-500 text-ink-950',
  Casual: 'bg-ink-950 text-cream-50',
  Leather: 'bg-olive-200 text-ink-950',
};

export default function Products() {
  const [headingRef, headingVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const [row1Ref, row1Visible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const [row2Ref, row2Visible] = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

  const topRow = products.slice(0, 4);
  const bottomRow = products.slice(4, 8);

  return (
    <section
      id="products"
      className="relative bg-olive-400 py-24 md:py-32 overflow-hidden"
    >
      {/* Section header */}
      <div
        ref={headingRef}
        className={`max-w-7xl mx-auto px-8 md:px-16 lg:px-24 mb-14 md:mb-20 transition-all duration-700 ease-out ${
          headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ink-950/50">
            Our Top Sellers
          </span>
        </div>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2
            className="font-display font-black leading-[0.90] tracking-[-0.04em] text-ink-950"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
          >
            Top-Selling
            <br />
            <span className="text-ink-950">Products.</span>
          </h2>
          <p className="text-ink-950/50 text-sm font-body max-w-xs leading-relaxed">
            Custom manufactured with your brand, your specs, your standards. Every piece below ships from our Sialkot facility.
          </p>
        </div>
      </div>

      {/* ── TOP ROW — 4 products ── */}
      <div
        ref={row1Ref}
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8"
      >
        {topRow.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            isVisible={row1Visible}
          />
        ))}
      </div>

      {/* ── BOTTOM ROW — 4 products ── */}
      <div
        ref={row2Ref}
        className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {bottomRow.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            isVisible={row2Visible}
          />
        ))}
      </div>
    </section>
  );
}

/** Individual product card with hover effects */
function ProductCard({
  product,
  index,
  isVisible,
}: {
  product: Product;
  index: number;
  isVisible: boolean;
}) {
  const num = String(product.id).padStart(2, '0');

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-cream-50 transition-all duration-700 ease-out cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/40 transition-colors duration-500" />

        {/* Product number — top left */}
        <span className="absolute top-4 left-4 text-ink-950/20 font-display font-black text-2xl group-hover:text-cream-50/60 transition-colors duration-300">
          {num}
        </span>

        {/* Category badge — top right */}
        <span
          className={`absolute top-4 right-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${categoryColors[product.category]} opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-100`}
        >
          {product.category}
        </span>

        {/* Quick view arrow — bottom right on hover */}
        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-lime-500 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 delay-150">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-ink-950 -rotate-45">
            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-3.96a.75.75 0 1 1 1.06-1.06l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06l3.96-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      {/* Card footer */}
      <div className="px-4 py-4">
        <h3 className="font-display font-bold text-sm text-ink-950 leading-tight mb-1 group-hover:text-ink-950 transition-colors">
          {product.name}
        </h3>
        <span className="text-[11px] text-ink-950/40 font-medium uppercase tracking-wider">
          {product.moq}
        </span>
      </div>
    </div>
  );
}
