# Project Progress

## Current Status

**Status:** Phase 5 completed (Project detail pages with dynamic routing). Phase 6 partially done (custom 404 built, metadata on subpages). Working toward Phase 6 completion and Phase 7 (deploy).

---

## Completed Phases

### Phase 1 — Project Setup
- [x] Initialize Next.js project with TypeScript
- [x] Configure Tailwind CSS
- [x] Configure ESLint and Prettier
- [x] Set up folder structure per STRUCTURE.md
- [x] Install `framer-motion` and `lucide-react`

### Phase 2 — Data Layer & Types
- [x] Define all TypeScript interfaces (`project.ts`, `site.ts`)
- [x] Create data files (`projects.ts`, `skills.ts`, `links.ts`, `site.ts`)
- [x] Add `SlideContent` union type for home slide deck
- [x] Add `Story` interface for text slides
- [x] Add `types/index.ts` barrel export for cleaner imports

### Phase 3 — Layout & Navigation
- [x] Build Header with navigation links
- [x] Build Footer
- [x] Build ThemeToggle (dark/light mode stub — no functional logic yet)
- [x] Build Container wrapper
- [x] Build SlideIndicator (vertical bar-style dot navigation on StorySlide)
- [x] Create all route pages (`/`, `/about`, `/projects`, `/contact`)

### Phase 4 — Home Page Slide Deck
- [x] **StorySlide**: vertical scroll-driven slide deck with wheel, touch swipe, and keyboard navigation
- [x] **Animation lock**: prevents scroll spam during transitions (0.55s animation duration)
- [x] **Auto-scroll**: slides advance after 8s idle period on text slides
- [x] **Text slides**: 3 story slides sourced from `siteConfig.stories`
- [x] **Projects slide**: renders FeaturedProjectsSection as a slide in the deck
- [x] **About slide**: renders AboutPreviewSection as the final slide
- [x] **IdentityPanel**: dual layout — compact header on mobile, full panel on desktop
- [x] **SlideIndicator**: vertical bar-style dot indicators on the right edge of StorySlide
- [x] **HomeSplitLayout**: flex layout on mobile (stack), grid layout on desktop (split)
- [x] **Overflow hidden**: `html` and `body` set to `overflow: hidden` to suppress browser scrollbar
- [x] All components under 200 lines
- [x] Zero TypeScript `any`
- [x] Build passes with zero errors

### Phase 5 — Project Detail Pages
- [x] Add `app/work/[slug]/page.tsx` with dynamic routing
- [x] Display project title, description, tech stack, links
- [x] Layout consistent with existing monochrome design
- [x] Breadcrumb back navigation to `/projects`
- [x] Fallback state for invalid slugs via `notFound()`
- [x] `generateStaticParams` for pre-building valid project pages
- [x] `generateMetadata` for per-page SEO

### Phase 6 — Finishing & Polish (Partial)
- [x] Meta tags / SEO for all pages (title, description, Open Graph, Twitter cards)
- [x] Custom 404 page (`app/not-found.tsx`)
- [x] Globals CSS module declaration (`globals.d.ts`)
- [ ] Favicon
- [ ] Accessibility review (aria labels, keyboard nav, contrast)
- [ ] Performance audit (Lighthouse 90+)

### Phase 7 — Deploy (Not Started)
- [ ] Build test (`npm run build` — zero errors)
- [ ] Deploy to Vercel
- [ ] Custom domain setup (if applicable)
- [ ] Final smoke test on live environment

---

## Decisions

- Visual direction: Minimal Swiss + Technical.
- Homepage uses a split-screen, slide-based layout on desktop.
- Mobile uses a stacked sequential layout with compact identity header.
- Scroll transitions: Framer Motion `AnimatePresence` with vertical translate (100px), 0.55s ease-in-out.
- Navigation: wheel scroll, touch swipe, keyboard Arrow Up/Down. Auto-scroll after 8s idle. No prev/next buttons.
- Slide types: `'text'`, `'projects'`, `'about'` — defined as `SlideContent` union type.
- Animation lock: `isAnimating` boolean prevents concurrent transitions.
- Auto-scroll: `AUTO_SCROLL_DELAY = 8000ms` — resets on user interaction. Only advances forward.
- Node/network closing section is planned but not yet implemented.
- Bilingual content (ID/EN mix) is a content/voice decision only — no i18n architecture for Phase 1.
- Blog/CMS postponed until core features are complete.
- SlideIndicator uses vertical bar-style dots (active dot is a tall rectangle, inactive dots are short).
- ThemeToggle is a stub with no dark mode switching logic.
- Project detail routes live under `/work/[slug]`, not nested under `/projects`.
- Button component uses hardcoded accent color classes (accent-500, accent-600) that do not match the Tailwind config's custom accent tokens.
- Header, Footer, SectionHeading, NotFound use hardcoded zinc/neutral color classes instead of Tailwind config tokens.

## Known Inconsistencies

1. Color palette in tailwind.config.ts uses dark green/lime theme (`panel: #0a1a06`, `accent: #a3e635`), but several components (Header, Footer, SectionHeading, not-found, ProjectDetailPage) use hardcoded zinc/neutral/gray Tailwind classes — no actual dark mode or theme-aware color integration.
2. ThemeToggle has no functional dark mode switching — no provider, no localStorage, no class toggling.
3. Button component references `accent-500`/`accent-600`/`accent-700` color classes not defined in the Tailwind config.
4. `data/site.ts` content still contains `PLACEHOLDER:` strings for role, description, URLs, and email.
5. **`FeaturedProjectsSection.tsx` is dead code** — not imported or used anywhere.
6. **`HeroSection.tsx`, `SkillsSection.tsx`, `ContactSection.tsx` are dead code** — stub components never imported by any page.
7. **`data/links.ts` is unused** — Header, Footer, IdentityPanel all reference `siteConfig` or hardcode URLs directly instead of using the `socialLinks` export.
8. **Footer hardcodes placeholder URLs** — uses `PLACEHOLDER_GITHUB_URL` / `PLACEHOLDER_LINKEDIN_URL` instead of importing from `data/links.ts` or `siteConfig`.

## Tentative / Placeholder

- Top 3 featured projects: placeholder content allowed for initial build, but must be clearly marked as placeholder in code/comments and structured so real project data can be swapped in without layout changes.
- Identity visual: will use an illustrated portrait, not a generic template photo — final asset not yet ready.

## Open Questions

1. Which projects should be featured first (final selection)?
2. Which links are ready to publish (GitHub, LinkedIn, email, resume)?
3. Should the node/network visual be a separate slide or integrated into the about slide?
4. Should dark mode be implemented, or should the site stay light-only with the dark green theme?

## Not Started

### Content
- [ ] Finalize personal introduction copy (replace `PLACEHOLDER:` strings in data/site.ts)
- [ ] Finalize featured projects list (replace `PLACEHOLDER:` strings in data/projects.ts)
- [ ] Finalize skills list (replace `PLACEHOLDER:` strings in data/skills.ts)
- [ ] Finalize contact details and external links
- [ ] Decide whether resume file is ready for upload

### UI (Unfinished)
- [ ] Implement functional theme toggle with dark/light mode
- [ ] Fill `/projects` page with all-projects listing
- [ ] Fill `/about` page with full content
- [ ] Fill `/contact` page with contact form or links
- [ ] Build HeroSection, SkillsSection, ContactSection (currently stubs)
- [ ] Build proper ProjectCard UI (currently just renders title + summary inline)
- [ ] Align hardcoded color classes across all components with tailwind.config.ts tokens

### Quality
- [ ] Add favicon
- [ ] Validate responsive behavior
- [ ] Check accessibility
- [ ] Optimize assets
- [ ] Deploy to Vercel

---

## Risks and Watchouts

- Scope creep before MVP is complete.
- Over-engineering too early.
- Placeholder content becoming permanent.
- Generic portfolio copy reducing credibility.
- Too many dependencies for a simple portfolio.
- Hardcoded colors inconsistent with the defined theme palette.
- ThemeToggle stub could block dark mode if left unresolved late in the cycle.

---

## Next Recommended Step

Resolve placeholder content in data files, implement theme toggle, and fill stub pages with real content.

