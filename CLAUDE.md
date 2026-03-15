# Boone PDR - Claude Code Project Guide

## Project Overview
Next.js 16 website for Boone Paintless Dent Repair (DFW metroplex). TypeScript + Tailwind CSS 4 + Framer Motion.

## Tech Stack
- **Framework**: Next.js 16 (App Router) with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 via PostCSS
- **Animations**: framer-motion
- **Icons**: react-icons
- **Linting**: ESLint 9 with Next.js config

## Key Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (use to validate changes)
- `npm run lint` — Run ESLint
- `npx tsc --noEmit` — Type-check without emitting

## Project Structure
- `src/app/` — Next.js App Router pages and layouts
- `src/components/` — Reusable React components
- `src/lib/` — Utilities, constants, and schema generators
- `public/images/` — Static assets and gallery photos

## Development Guidelines
- Mobile-first responsive design
- Maintain SEO metadata and schema.org structured data on all pages
- Quote form submits to n8n webhook — do not change the webhook URL without confirmation
- Business constants live in `src/lib/constants.ts`
- All pages should maintain accessibility standards (semantic HTML, alt text, ARIA labels)

## Codex Review Integration
This project uses a Codex review hook that automatically reviews Claude Code's changes
to website components and tool designs. The review script lives at `.claude/scripts/codex-review.sh`
and is triggered via Claude Code hooks on PostToolUse events for Edit/Write tools.

Review focuses on:
- UI/UX quality and consistency
- Accessibility compliance
- Performance best practices
- Mobile responsiveness
- SEO impact of changes
