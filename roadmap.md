# Roadmap — Smad Impex Landing Prototype

Goal: a polished, on-brand pitch prototype that convinces Smad Impex to
sign — styled on the Lexufa reference, built on the real content from
their current site.

## Phase 1 — Foundation
- [ ] Set up Vite + React + TanStack Router + Tailwind v4 project
- [ ] Define theme tokens in `styles.css` (see `brand-theme.md`)
- [ ] Pull real content into `data/content.ts` (products, testimonial,
      certifications, contact info, OEM/ODM copy)
- [ ] Build route + layout shell (`__root.tsx`, `index.tsx`, Navbar, Footer)

## Phase 2 — Section build-out
- [ ] Hero
- [ ] About / categories
- [ ] Marquee band
- [ ] Top-selling products rail
- [ ] Testimonials + why-choose-us + stats
- [ ] Certifications row
- [ ] Newsletter / closing CTA

## Phase 3 — Visual pass
- [ ] Source or place real product photography in product cards
- [ ] Add marquee keyframes + respect `prefers-reduced-motion`
- [ ] Tune hero type scale against real viewport widths
- [ ] Add one deliberate hover/interaction moment on product cards

## Phase 4 — Content completeness
- [ ] Build the OEM/ODM section (copy already drafted in content plan)
- [ ] Link category cards to filtered views (can stay static for pitch)
- [ ] Decide contact-form destination (mailto, WhatsApp, or real endpoint)

## Phase 5 — QA
- [ ] Test at 375px / 768px / 1440px
- [ ] Keyboard-focus states on nav, form, CTAs
- [ ] Lighthouse pass — confirm it stays fast once real images are added

## Phase 6 — Pitch
- [ ] Deploy a preview (Vercel/Netlify)
- [ ] Prepare a before/after view against Smad Impex's current site —
      that contrast is the actual sales pitch
- [ ] Walk the client through the prototype and lock the deal

## Milestone summary

| Phase | Deliverable | Depends on |
|---|---|---|
| 1 | Working local build, empty sections wired up | — |
| 2 | Full page, real copy, no imagery | Phase 1 |
| 3 | Visually finished prototype | Phase 2 |
| 4 | Content-complete, no placeholder sections | Phase 3 |
| 5 | QA'd across devices | Phase 4 |
| 6 | Client pitch delivered | Phase 5 |
