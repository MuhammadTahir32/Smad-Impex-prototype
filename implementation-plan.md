# Implementation Plan — Smad Impex Landing Prototype
Stack: React + TanStack Router (file-based routing) + Tailwind CSS v4

## Architecture decisions

- **TanStack Router, file-based.** For a single-page pitch prototype this
  is one route (`/`), but file-based routing keeps room to add `/products`
  or `/contact` later without restructuring.
- **Tailwind v4, CSS-first config.** No `tailwind.config.js` — theme
  tokens (from `brand-theme.md`) live in `src/styles.css` via `@theme`, so
  the whole design system is one file, not scattered class strings.
- **Content separated from presentation.** All of Smad Impex's real copy
  (products, testimonial, certifications, contact info, OEM/ODM text)
  lives in `src/data/content.ts`. When the client sends revised copy, you
  edit one file, not eight components.
- **One file per landing-page section.** Each block on the page (Hero,
  About, TopSelling, Testimonials, Certifications, Newsletter) is its own
  component. Client feedback like "change the hero" maps to one file.

## File structure

```
src/
├── main.tsx                    # router bootstrap
├── styles.css                  # Tailwind v4 @theme tokens
├── routes/
│   ├── __root.tsx               # shared Navbar + Footer chrome
│   └── index.tsx                 # composes all sections in order
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── MarqueeBand.tsx
│   │   ├── TopSelling.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Certifications.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       └── ProductCard.tsx
└── data/
    └── content.ts               # real Smad Impex copy, isolated
```

## Section-by-section build order

| # | Section | Source content | Notes |
|---|---|---|---|
| 1 | Navbar | Company name, nav links | Sticky, pill CTA button |
| 2 | Hero | New headline (not Lexufa's fashion copy) | Oversized display type, one CTA |
| 3 | About | "Welcome to Smad Impex" intro + 3 category tags | Left text / right tag list split |
| 4 | Marquee band | OEM / ODM / Custom Sportswear / Bulk Manufacturing | Black section, one animation moment |
| 5 | Top Selling | 8 real products from current site | Horizontal scroll, one highlighted card |
| 6 | Testimonials | David Thompson quote + "why choose us" + stats | Black section, split layout |
| 7 | Certifications | CE, FDA, GMP, ISO 9001, ISO 13485, OEKO-TEX | Simple badge row |
| 8 | Newsletter / CTA | "Get a manufacturing quote" + email capture | Closing black band |
| — | Footer | Address, phone, email | Real contact info from current site |

## Open technical decisions (flag with client / mentor before building)

- **Images**: current plan is text-first cards for the pitch prototype —
  confirm whether real product photography should be sourced before the
  pitch, or added after the deal is locked.
- **Form handling**: newsletter/contact form is UI-only in the prototype —
  needs a real endpoint (Formspree, client's mail server, etc.) before
  this goes live.
- **Deployment target for the pitch**: Vercel or Netlify both work with
  zero config on this Vite setup — pick one before Phase 5.
