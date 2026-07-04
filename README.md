# seobox-marketing

Marketing site for Seobox — **Next.js 16 (App Router) + React 19 + Tailwind v4 + Inter + Lucide**.
Follows the InboxKit brand theme (dark teal `#103938`, light mode only) and applies the
`emil-design-eng` motion principles (custom easing curves, transform/opacity-only animation,
press feedback, staggered scroll reveals, reduced-motion support).

## Pages
- `/` — Home (hero, trust marquee, features, 18-stage pipeline, CTA)
- `/pricing` — Three plans + credit top-ups
- `/faq` — Animated accordion
- `/contact` — Contact form + channels
- `/resources` — Index → **Learn** (`/resources/learn`) and **Guide** (`/resources/guide`)

## Develop
```bash
npm install
cp .env.example .env.local   # set NEXT_PUBLIC_APP_URL to your dashboard URL
npm run dev                  # http://localhost:3002
```

## Build
```bash
npm run build && npm start    # serves on :3002
```

All pages are statically prerendered. CTAs (`Start free`, `Sign in`) point to the dashboard
via `NEXT_PUBLIC_APP_URL` (defaults to `http://localhost:3000`).

## Design system
- **Identity** comes from `../BRAND_THEME.md`: Inter, `#103938` accent on white, fine gray
  borders, subtle shadows, `rounded-full` primary CTAs, grid overlay + ambient blobs.
- **Motion craft** (emil-design-eng): `--ease-out: cubic-bezier(0.23,1,0.32,1)`, button
  `:active { scale(0.97) }`, 30–80ms stagger between revealed items, `prefers-reduced-motion`
  drops movement but keeps fades. Animations use only `transform`/`opacity` (GPU-friendly).
