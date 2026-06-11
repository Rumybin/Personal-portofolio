# Project Progress

## Current Status

**Status:** Phase 1 — Initial Scaffold Complete

The Next.js portfolio project has been scaffolded with all config files, route pages, UI components, data stubs, and type definitions. Placeholder data is in place for projects, skills, and personal info, awaiting real content from the owner.

---

## Final Decisions

- Visual direction: Minimal Swiss + Technical.
- Homepage uses a split-screen, slide-based layout on desktop.
- Mobile uses a stacked sequential layout (no split columns).
- Scroll transitions: native CSS scroll-snap + IntersectionObserver, no animation libraries.
- Node/network closing section represents the author's learning journey (System Information → Data Analytics → AI Engineering), content-driven, not decorative.
- Bilingual content (ID/EN mix) is a content/voice decision only — no i18n architecture for Phase 1.
- Blog/CMS postponed until core features are complete.
- `docs/design/design-direction.md`, `layout-spec.md`, and `design-inspiration.md` are part of the source-of-truth chain.
- Accent color: slate-based palette (accent-50 through accent-900) defined in `tailwind.config.ts`.
- Config file: `next.config.mjs` (not `.ts` — Next.js 14 does not support `.ts` config).

---

## Tentative / Placeholder

- Top 3 featured projects: placeholder content in `data/projects.ts`, clearly marked as PLACEHOLDER.
- Skills: placeholder groups in `data/skills.ts` (Languages, Analytics, Tools).
- Personal info (role, description, GitHub, LinkedIn, email): placeholder values in `data/site.ts`.
- Identity visual: will use an illustrated portrait, not a generic template photo — final asset not yet ready.

---

## Open Questions

1. Which projects should be featured first (final selection)?
2. Which links are ready to publish (GitHub, LinkedIn, email, resume)?
3. Dark mode implementation approach — needs decision on using `next-themes` or manual `localStorage` before ThemeToggle can be wired up.

---

## Completed

### Setup
- [x] Initialize Next.js project (package.json, configs).
- [x] Configure TypeScript (`tsconfig.json` — strict mode, @ alias).
- [x] Configure Tailwind (`tailwind.config.ts` — content paths, slate accent palette).
- [x] Configure PostCSS (`postcss.config.js`).
- [x] Configure ESLint (`.eslintrc.json` — next/core-web-vitals).
- [x] Configure Prettier (`.prettierrc` — single quotes, no semis, 2 spaces).
- [x] Create initial route pages (/, /about, /projects, /contact).

### UI (Scaffold / Stubs)
- [x] Root layout with Header + Footer (`app/layout.tsx`).
- [x] Global CSS with Tailwind directives (`app/globals.css`).
- [x] Header — site name, nav links, ThemeToggle stub (`components/layout/Header.tsx`).
- [x] Footer — copyright, GitHub/LinkedIn placeholder links (`components/layout/Footer.tsx`).
- [x] ThemeToggle stub — renders button, no logic yet (`components/layout/ThemeToggle.tsx`).
- [x] Container UI component (`components/ui/Container.tsx`).
- [x] SectionHeading UI component (`components/ui/SectionHeading.tsx`).
- [x] Button UI component — primary + secondary variants (`components/ui/Button.tsx`).
- [x] ProjectCard UI component (`components/ui/ProjectCard.tsx`).
- [x] SkillBadge UI component (`components/ui/SkillBadge.tsx`).
- [x] Section stubs — Hero, AboutPreview, FeaturedProjects, Skills, Contact.
- [x] Homepage split layout stubs — HomeSplitLayout, IdentityPanel, StorySlide.

### Data Layer
- [x] Site config data (`data/site.ts` — placeholder values).
- [x] Projects data (`data/projects.ts` — 3 placeholder entries).
- [x] Skills data (`data/skills.ts` — 3 placeholder groups).
- [x] Social links data (`data/links.ts` — GitHub, LinkedIn).

### Types
- [x] Project + SkillGroup interfaces (`types/project.ts`).
- [x] SiteConfig interface (`types/site.ts`).
- [x] Re-export index (`types/index.ts`).

### Utilities
- [x] `cn()` helper for class merging (`lib/utils.ts`).
- [x] Constants re-export (`lib/constants.ts`).
- [x] Metadata helper (`lib/metadata.ts`).

### Directories
- [x] `public/images/`, `public/icons/`, `public/resume/` created.

---

## Not Started

### Content
- [ ] Finalize personal introduction copy.
- [ ] Finalize featured projects list.
- [ ] Finalize skills list.
- [ ] Finalize contact details and external links.
- [ ] Decide whether resume file is ready for upload.

### UI (Implementation)
- [ ] Build home page sections (Hero, AboutPreview, FeaturedProjects, Skills, Contact).
- [ ] Build projects page.
- [ ] Build about page.
- [ ] Build contact page.
- [ ] Wire up home split-screen layout (scroll-driven slides + IdentityPanel).
- [ ] Implement ThemeToggle dark mode logic.

### Quality
- [ ] Add metadata and SEO basics.
- [ ] Validate responsive behavior.
- [ ] Check accessibility.
- [ ] Optimize assets.
- [ ] Deploy to Vercel.

---

## Risks and Watchouts

- Scope creep before MVP is complete.
- Over-engineering too early.
- Placeholder content becoming permanent.
- Generic portfolio copy reducing credibility.
- Too many dependencies for a simple portfolio.

---

## Next Recommended Step

Replace all `PLACEHOLDER` values in `data/` files with real content (projects, skills, personal info, links). Then proceed with building out the actual section components.
