# Boone Sanders PDR Website

## Project Overview
- **Client:** Boone Sanders — Paintless Dent Repair (PDR) business in DFW, Texas
- **Package:** Professional ($4,500 build + $125/mo)
- **Business name:** TBD (confirm with Boone)
- **Status:** Initial build complete, awaiting client content and final polish

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 + Framer Motion + React Icons
- Deployed on Vercel (auto-deploy from GitHub)

## Repo & Deployment
- **Local:** `~/Desktop/Clients/BooneSanders-PDR-Website/website/`
- **GitHub:** `iambradass/boonepdr` (branch: `main`)
- **Vercel project:** `boonepdr` (team: `bradass-projects`)
- **Vercel URLs:** `boonepdr-bradass-projects.vercel.app`
- **No custom domain yet** — will be set when Boone confirms business name/domain
- Push to `main` → Vercel auto-deploys

## Architecture
- App Router: all pages under `src/app/`
- Shared components in `src/components/`
- Quote form submits to n8n webhook
- Images in `public/images/`

## Pages
| Route | File |
|-------|------|
| `/` | `src/app/page.tsx` |
| `/about` | `src/app/about/page.tsx` |
| `/services` | `src/app/services/page.tsx` |
| `/services/hail-damage-repair` | `src/app/services/hail-damage-repair/page.tsx` |
| `/services/door-ding-dent-repair` | `src/app/services/door-ding-dent-repair/page.tsx` |
| `/services/lease-return` | `src/app/services/lease-return/page.tsx` |
| `/insurance` | `src/app/insurance/page.tsx` |
| `/service-area` | `src/app/service-area/page.tsx` |
| `/gallery` | `src/app/gallery/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |
| `/privacy` | `src/app/privacy/page.tsx` |
| `/terms` | `src/app/terms/page.tsx` |

## Components
- `Header.tsx` — sticky nav with mobile menu
- `Footer.tsx` — contact info, links
- `Hero.tsx` — split hero with before/after slider
- `BeforeAfterSlider.tsx` — drag-to-compare image slider
- `TestimonialCarousel.tsx` — 3-up static testimonial wall
- `ServiceCard.tsx` — service highlight cards
- `QuoteForm.tsx` — form with photo upload → n8n webhook
- `FAQAccordion.tsx` — expandable Q&A sections
- `FloatingCTA.tsx` — fixed mobile quote button
- `TrustBadges.tsx` — warranty, insurance, rating badges
- `Logo.tsx` — inline SVG logo (PDR rod silhouette)
- `InstagramFeed.tsx` — hidden until Elfsight app ID configured
- `ScrollReveal.tsx` — scroll-triggered animations

## Development
```bash
cd ~/Desktop/Clients/BooneSanders-PDR-Website/website
npm run dev     # localhost:3000
npm run build   # production build
```

## Design Tokens
- Primary: dark navy (#1B3A5C or similar)
- Accent: red (used in logo and CTAs)
- Typography: clean sans-serif
- Mobile-first: 375px base viewport

## SEO
- LocalBusiness schema markup
- Unique title/meta per page with DFW location keywords
- XML sitemap via `src/app/sitemap.ts`
- Open Graph tags

## Rules
- Mobile-first on all work: 375px viewport, 44px touch targets
- Optimize all images before committing
- Test `npm run build` before pushing — Vercel will fail on type/lint errors
- Keep placeholder content realistic until Boone provides real copy
