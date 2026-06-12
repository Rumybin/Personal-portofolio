# Project Structure

## Goal

This file defines the intended folder and file organization for the personal portfolio project.

The structure must remain simple, scalable, and easy to understand.

---

## High-Level Structure

```text
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── home/
│   │   ├── HomeSplitLayout.tsx    # Builds slide array, wraps IdentityPanel + StorySlide
│   │   ├── IdentityPanel.tsx      # Left panel — dual mode (mobile compact / desktop full)
│   │   └── StorySlide.tsx         # Right panel — vertical scroll-driven slide deck
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutPreviewSection.tsx
│   │   ├── FeaturedProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeading.tsx
│       ├── ProjectCard.tsx
│       ├── SkillBadge.tsx
│       └── Container.tsx
│
├── lib/
│   ├── constants.ts
│   ├── utils.ts
│   └── metadata.ts
│
├── data/
│   ├── site.ts
│   ├── projects.ts
│   ├── skills.ts
│   └── links.ts
│
├── types/
│   ├── project.ts
│   ├── site.ts
│   └── index.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume/
│   └── favicon.ico
│
├── docs/
│   ├── standards/
│   │   ├── CLEANCODE.md
│   │   └── ANTI_AI_SLOP.md
│   └── design/
│       ├── design-direction.md
│       ├── layout-spec.md
│       └── design-inspiration.md
│
├── PRD.md
├── CLAUDE.md
├── STRUCTURE.md
├── PROGRESS.md
├── package.json
├── tsconfig.json
├── next.config.mjs
└── README.md
```

---

## Directory Rules

### `app/`
Contains routes and page-level entry files.

Rules:
- One directory per route when needed.
- Keep page files focused on composition, not low-level UI logic.
- Shared site shell belongs in `layout.tsx`.

### `components/home/`
Contains components specific to the home page slide deck.

Files:
- `HomeSplitLayout.tsx` — builds the slide array from data, renders IdentityPanel + StorySlide.
- `IdentityPanel.tsx` — left panel with two modes: compact header (mobile) and full panel (desktop).
- `StorySlide.tsx` — right panel scroll-driven slide deck. Handles wheel, touch swipe, and keyboard navigation. Renders different slide types based on `SlideContent` union type.

### `components/layout/`
Contains global layout components.

Examples:
- Header.
- Footer.
- Theme toggle.

### `components/sections/`
Contains page sections or larger content blocks.

Examples:
- Hero section.
- Featured projects section.
- Skills section.

These can be reused across pages but should stay cohesive.

### `components/ui/`
Contains smaller reusable building blocks.

Examples:
- Buttons.
- Containers.
- Cards.
- Labels.

Do not move every component here by default. Only reusable presentational pieces belong here.

### `lib/`
Contains utilities, metadata helpers, constants, and shared logic that is not content data.

Rules:
- Keep utilities pure where possible.
- Avoid turning `lib/` into a dumping ground.

### `data/`
Contains structured content for Phase 1.

Examples:
- Project entries.
- Skills list.
- Site metadata.
- External links.

This allows content editing without changing component logic.

### `types/`
Contains TypeScript types and interfaces.

Rules:
- Shared types belong here.
- Keep type files focused by domain.
- Avoid giant miscellaneous type files unless necessary.

### `public/`
Contains static assets.

Rules:
- Images go in `public/images/`.
- Icons go in `public/icons/` if not handled inline.
- Resume/CV file goes in `public/resume/`.

### `docs/standards/`
Contains curated standards documents.

Required files:
- `CLEANCODE.md`
- `ANTI_AI_SLOP.md`

These are referenced by `CLAUDE.md` and must remain aligned with project practice.

### `docs/design/`
Contains design and layout decisions that are part of the project's source of truth, not just inspiration material.

Required files:
- `design-direction.md` — chosen visual direction and motion rules.
- `layout-spec.md` — homepage layout and slide behavior spec.
- `design-inspiration.md` — reference links only, not binding decisions.

These are referenced by `CLAUDE.md` and must stay aligned with implementation.

---

## Placement Rules

### Create a new file only when
- the file has a clear responsibility,
- it fits an existing directory purpose,
- and it improves readability or maintainability.

### Do not create a new file when
- the logic is tiny and tightly tied to one component,
- splitting would create unnecessary indirection,
- or the new file exists only to look “architected”.

---

## Naming Conventions

### Components
- Use `PascalCase`.
- Example: `ProjectCard.tsx`, `HeroSection.tsx`.

### Routes
- Use folder-based route naming.
- Example: `/projects`, `/about`, `/contact`.

### Utility and data files
- Use `camelCase` or lowercase descriptive names.
- Example: `metadata.ts`, `projects.ts`, `site.ts`.

### Type files
- Use domain-based names.
- Example: `project.ts`, `site.ts`.

---

## Architecture Notes

### Phase 1 Content Strategy
Use local structured content in `data/`.

Reason:
- simpler,
- cheaper,
- easier to maintain,
- and appropriate for MVP scope.

### Phase 2 Expansion Path
If needed later, this structure can support:
- CMS integration,
- blog posts,
- case study pages,
- richer project metadata,
- multilingual content.

---

## Anti-Complexity Rules

Avoid these unless clearly needed:
- excessive hooks files,
- deep abstraction layers,
- one-component-per-folder for trivial components,
- global state management for static content,
- service layers without real services,
- separate config files for tiny concerns.

This project should feel intentionally structured, not inflated.

---

## Homepage-Specific Components

The homepage uses a split-screen storytelling pattern.

Components:
- `HomeSplitLayout.tsx` — container. Builds `SlideContent[]` array, renders IdentityPanel + StorySlide.
- `IdentityPanel.tsx` — left panel. Compact header on mobile, full panel on desktop.
- `StorySlide.tsx` — right panel. Vertical scroll-driven slide deck.

Slide types (defined in `types/site.ts` as `SlideContent` union type):
- `'text'` — story slides sourced from `siteConfig.stories`.
- `'projects'` — featured projects grid using ProjectCard.
- `'about'` — about preview with name, role, bio, skill badges, link to /about.

Behavior:
- Left panel stays anchored on desktop.
- Right panel advances by slide on wheel scroll, touch swipe, or Arrow Up/Down keys.
- Animation lock prevents concurrent transitions during the 0.55s animation window.
- `html` and `body` are set to `overflow: hidden` to suppress the native browser scrollbar.
