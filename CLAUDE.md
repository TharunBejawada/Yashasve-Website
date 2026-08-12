# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page dermatology practice website for Dr. Yashasve at Suseela Hospital, Kothapet, LB Nagar, Hyderabad. Built with React 19, TypeScript, Vite, and Tailwind CSS (loaded via CDN). Uses Framer Motion for animations and Lucide React for icons.

## Commands

- **Dev server:** `npm run dev`
- **Production build:** `npm run build` (outputs to `dist/`)
- **Preview build:** `npm run preview`
- **Install deps:** `npm install`

No test framework or linter is configured.

## Deployment

Deployed via AWS Amplify (build spec in `amplify.yml`), which builds `npm run build` and serves `dist/` from the domain root. The Vite `base` is `/`.

## Architecture

This is a flat, single-page app with no routing:

- **`index.html`** — Entry point. Loads Tailwind via CDN `<script>` tag (not PostCSS). Contains the full Tailwind config (custom colors, fonts, animations/keyframes) and global styles inline. Also has an `importmap` pointing dependencies to `esm.sh` CDN URLs.
- **`index.tsx`** — React root mount.
- **`App.tsx`** — The entire page in one component. Contains the navbar, hero, services grid, process steps, testimonials, FAQ accordion, contact form, and footer. All sections and sub-components (Logo, TiltCard, etc.) are defined in this file.
- **`components/ui.tsx`** — Shared UI primitives: `Button`, `Modal`, `Input`, `Textarea`, `SectionHeading`, `AccordionItem`, `BeforeAfterSlider`, `Reveal`/`FadeIn` animation wrappers, and the `cn()` utility (clsx + tailwind-merge).
- **`constants.tsx`** — All content data: `DOCTOR_PROFILE`, `SERVICES`, `TESTIMONIALS`, `FAQS`. This is where clinic info (phone, address, hours) and service descriptions live.
- **`types.ts`** — TypeScript interfaces: `Service`, `Testimonial`, `FAQ`, `DoctorProfile`.

## Key Patterns

- **Tailwind via CDN:** Tailwind config is in `index.html` inside a `<script>` block, not in `tailwind.config.js`. Custom theme tokens (colors `primary.*`, `secondary.*`; fonts `sans`/`heading`/`body`) are defined there.
- **Path alias:** `@/*` maps to the project root (configured in both `tsconfig.json` and `vite.config.ts`).
- **Icon mapping:** Service icons are stored as string names in `constants.tsx` and resolved to Lucide components via an `iconMap` record in `App.tsx`.
- **Animations:** Framer Motion is used throughout — scroll-triggered reveals, parallax transforms, spring-based 3D tilt on hover, AnimatePresence for modals/accordions.
- **Content updates:** To change clinic info, services, testimonials, or FAQs, edit `constants.tsx`. The `DOCTOR_PROFILE` object has phone, WhatsApp, email, map embed link, and hours.

## Content Policy — Originality Requirement

**All content for this website must be 100% original.** Zero tolerance for plagiarism, close paraphrasing, or derivative content from any source — competitor websites, health portals, medical device manufacturers, or any other origin. This applies to all text: service descriptions, doctor bio, headlines, meta tags, structured data, blog posts, FAQs, and testimonials.

- Write from first principles using medical knowledge, never by rewording existing content
- Template testimonials must be clearly marked — never present fabricated text as real patient words
- Never claim cures — use "manages", "reduces", "improves"
- Indian English conventions: centre, colour, programme
- Dr. Yashasve is male — use he/his in third person
- See `.claude/experts/dermatology-content.md` for the full content style guide

## Available Skills

### Engineering
| Skill | Command | Purpose |
|-------|---------|---------|
| Commit | `/commit` | Build-verify and commit with clean message |
| Review | `/review` | 6-agent parallel code review before PR |
| Review PR | `/review-pr` | Review a PR by number or branch |
| Audit Feature | `/audit-feature` | Pre-merge quality gate |
| Security Review | `/security-review` | OWASP security scan |
| Architect | `/architect` | Deep analysis for complex tasks |
| Design Doc | `/design-doc` | Generate technical design document |
| Deploy | `/deploy` | Build, verify, push to GitHub Pages |
| Test | `/test` | Run build and type checks |
| Wrap | `/wrap` | Session wrap-up with logs |

### Content (Dermatology-Specific)
| Skill | Command | Purpose |
|-------|---------|---------|
| Content Writer | `/content-writer` | Write original website copy (hero, about, headlines, CTAs) |
| Write Service | `/write-service` | Add/rewrite a dermatology service description |
| SEO Optimize | `/seo-optimize` | Local SEO — meta tags, structured data, keywords |
| Write Blog | `/write-blog` | Original dermatology patient education blog posts |
