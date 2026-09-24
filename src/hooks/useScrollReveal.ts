import { useEffect, useRef, useState } from 'react';

interface ScrollRevealOptions {
  /** Threshold (0–1) of visibility before triggering. Default 0.15 */
  threshold?: number;
  /** Root margin to expand/shrink the detection area. Default '0px' */
  rootMargin?: string;
  /** Only trigger once? Default true */
  once?: boolean;
}

/**
 * useScrollReveal
 *
 * Returns a ref to attach to any element and a boolean `isVisible`
 * that flips to true once the element scrolls into view.
 *
 * Usage:
 *   const [ref, isVisible] = useScrollReveal();
 *   <div ref={ref} className={isVisible ? 'opacity-100' : 'opacity-0'}>
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [React.RefObject<T | null>, boolean] {
  const { threshold = 0.15, rootMargin = '0px', once = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * useStaggerReveal
 *
 * Returns a ref for the parent container and an `isVisible` boolean.
 * Combine with CSS transition-delay on each child for staggered reveals.
 *
 * Usage:
 *   const [containerRef, isVisible] = useStaggerReveal();
 *   <div ref={containerRef}>
 *     {items.map((item, i) => (
 *       <div
 *         key={i}
 *         style={{ transitionDelay: `${i * 100}ms` }}
 *         className={`transition-all duration-700 ${
 *           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
 *         }`}
 *       > ... </div>
 *     ))}
 *   </div>
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
): [React.RefObject<T | null>, boolean] {
  return useScrollReveal<T>(options);
}
