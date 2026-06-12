# Project Progress

## Current Status

**Status:** Planning

This project is currently in the planning and standards-definition phase.

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

---

## Tentative / Placeholder

- Top 3 featured projects: placeholder content allowed for initial build, but must be clearly marked as placeholder in code/comments and structured so real project data can be swapped in without layout changes.
- Identity visual: will use an illustrated portrait, not a generic template photo — final asset not yet ready.

---

## Open Questions

1. Which projects should be featured first (final selection)?
2. Which links are ready to publish (GitHub, LinkedIn, email, resume)?

---

## Not Started

### Setup
- [ ] Initialize Next.js project.
- [ ] Configure TypeScript and Tailwind.
- [ ] Configure linting and formatting.
- [ ] Create initial route pages.

### Content
- [ ] Finalize personal introduction copy.
- [ ] Finalize featured projects list.
- [ ] Finalize skills list.
- [ ] Finalize contact details and external links.
- [ ] Decide whether resume file is ready for upload.

### UI
- [ ] Build layout shell.
- [ ] Build home page sections.
- [ ] Build projects page.
- [ ] Build about page.
- [ ] Build contact page.

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

Next step: confirm missing product and design decisions with the user before generating implementation files or code.
