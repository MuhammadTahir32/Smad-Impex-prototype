# Brand Theme — Smad Impex Landing Prototype
Reference: Lexufa (fashion e-commerce theme) → adapted for Smad Impex (custom apparel manufacturer, Sialkot)

## Why this palette, not a generic one
Lexufa's core move is an olive/lime field instead of white, with near-black
break sections and a single acid-lime accent. That reads as apparel /
streetwear without being a sports-jersey cliché — which fits Smad Impex:
they manufacture sportswear *and* casual *and* leather, so the palette
needs to feel like "apparel industry," not "one sport."

## Color

| Token | Hex | Use |
|---|---|---|
| `olive-400` | `#C3D47E` | Page background (the field) |
| `olive-200` | `#DBE6B0` | Secondary panel background |
| `olive-50` | `#F2F5E4` | Lightest surface tint |
| `lime-500` | `#C8F169` | Accent — CTA buttons, one highlighted card, marquee text |
| `ink-950` | `#14150F` | Near-black — break sections, headline text |
| `cream-50` | `#FAF9F2` | Card surfaces sitting on the olive field |

Rule: **lime-500 appears in at most 2–3 places per screen** (a button, a
highlighted card, the marquee band). If it starts showing up everywhere it
stops being an accent.

## Typography

- **Display**: Archivo (700/900 weight) — oversized, tight tracking
  (`-0.04em`), used for section headlines and the hero. This carries the
  brand's personality, matching Lexufa's big condensed headline treatment.
- **Body**: Inter (400/500/600) — everything else: paragraphs, nav, form
  labels, product detail text.
- Only two families, clearly distinct in weight and role — no third
  "accent" font.

## Layout principles

1. **Field, not canvas.** The olive tone is the page's default surface, not
   a white page with olive sections. Black sections are the break, used
   between 2–3 times max to reset pacing (after the product rail, before
   the closing CTA).
2. **Left-aligned, generous whitespace.** Lexufa's blocks are left-aligned
   with big type doing the work — not centered hero copy.
3. **Cards are content, not decoration.** Product cards, the certification
   badges, and the testimonial block use flat cream/black surfaces with
   no drop shadows — matches Lexufa's flat-card language and avoids the
   generic "soft-shadow SaaS card" look.
4. **One motion moment.** The marquee band is the only continuous
   animation; everything else is static or responds to hover/focus. This
   is deliberate — Lexufa doesn't scatter fade-ins across every section,
   and neither should this build.
5. **Numbered product cards** (01, 02, 03…) are appropriate here because
   the products genuinely are a browsable, ordered catalog line — not
   used as decoration elsewhere on the page.

## What NOT to carry over from Lexufa
- Don't copy fashion-brand voice ("Step into the world of fashion") —
  Smad Impex is B2B manufacturing. Copy should speak to buyers/brands
  sourcing production, not end consumers. Keep CTAs like "Get a
  Manufacturing Quote," not "Shop Now."
- Don't keep Lexufa's shopping-cart / product-price UI — Smad Impex isn't
  selling direct-to-consumer here; this is a manufacturer pitch page.
