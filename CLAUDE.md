# AI Project Rules

## Purpose

This file defines how AI must work on this project.

This project is a personal portfolio website for **TOR Drive**. The project is also a learning vehicle for building production-style software with modern engineering standards.

AI must optimize for:
- correctness,
- maintainability,
- clarity,
- low hallucination,
- strong project context adherence,
- clean code,
- and output that does not feel generic or obviously AI-generated.

---

## Source of Truth Priority

When working on this project, follow this priority order:

1. `CLAUDE.md`
2. `docs/standards/CLEANCODE.md`
3. `docs/standards/ANTI_AI_SLOP.md`
4. `PRD.md`
5. `STRUCTURE.md`
6. `docs/design/design-direction.md`, `docs/design/layout-spec.md`, `docs/design/design-inspiration.md`
7. `PROGRESS.md`
8. Direct task prompt from current session

If the current prompt conflicts with the project standards, prefer the project standards unless the user explicitly overrides them.

---

## Working Style

Before writing code:
- Read the relevant project context first.
- Do not assume missing requirements.
- Ask for clarification when uncertainty affects architecture, content, logic, or UX.
- Work in small, reviewable steps.
- Prefer editing existing files over creating new patterns unnecessarily.

When responding:
- Be concrete.
- State assumptions explicitly if needed.
- Do not invent requirements, libraries, routes, or data models.
- Do not produce filler explanation just to sound helpful.

---

## Project Goals

The site must:
- present TOR Drive professionally,
- showcase projects and skills,
- demonstrate engineering quality,
- remain free-tier friendly,
- and be easy to maintain and extend.

The code should be portfolio-quality and credible to real developers.

---

## Tech Stack Rules

Default stack:
- Next.js with App Router.
- TypeScript.
- Tailwind CSS.
- Vercel deployment.

Unless explicitly approved:
- do not install new libraries,
- do not introduce state libraries,
- do not add a CMS yet,
- do not add animation libraries,
- do not add heavy UI frameworks.

Prefer built-in platform features and simple local data structures first.

---

## Clean Code Rules

Always follow these rules:

### Naming
- Use clear, descriptive names.
- Avoid generic names like `data`, `value`, `temp`, `result` unless context truly makes them precise.
- Use consistent naming conventions.
- Use singular/plural correctly.
- Name based on intent, not implementation accident.

### Functions and Components
- One clear responsibility per function/component.
- Keep functions reasonably short.
- Avoid too many parameters.
- Extract logic only when it improves clarity.
- Do not create abstractions prematurely.

### Structure
- Keep files cohesive.
- Group related logic together.
- Avoid duplication.
- Prefer simple composition over complex inheritance or indirection.

### Comments
- Comment **why**, not **what**.
- Remove obvious comments.
- Do not leave tutorial-style comments in production code.
- Do not leave commented-out code.

### Safety
- No unused imports.
- No dead code.
- No placeholder code left without explicit marking in progress docs.
- No `any` unless explicitly approved and justified.

---

## Anti-AI-Slop Rules

Avoid output that feels generic, overproduced, or obviously machine-generated.

### Do not do these
- Generic startup copy.
- Template-like layout repetition without purpose.
- Over-engineered folder structures.
- Decorative effects that do not support content.
- Overexplaining comments.
- Fake personality in code or copy.
- Unnecessary abstractions.
- Perfect-but-empty UI.
- Writing code that looks like it was generated without review.

### Prefer these
- Specific copy.
- Real project context.
- Clean hierarchy.
- Intentional whitespace.
- Clear trade-offs.
- Simple implementation.
- Human-like judgment.
- Design that matches the creator, not a trend.

The goal is not to make code messy. The goal is to make it credible, purposeful, and human-reviewed.

---

## Hallucination Prevention Rules

AI must not:
- invent project files that do not exist,
- invent available components,
- invent design decisions already made,
- invent user biography details beyond approved content,
- invent API structures,
- invent database schemas,
- invent deployment settings,
- invent assets or links.

If something is missing, ask first.

---

## Design Rules

The portfolio should follow the **Minimal Swiss + Technical** direction.

The portfolio should feel:
- modern,
- minimal,
- readable,
- credible,
- intentional,
- and slightly technical without becoming cold or sterile.

Avoid:
- loud gradients,
- glowing blobs,
- glassmorphism by default,
- over-rounded template aesthetics,
- fake startup copy,
- excessive motion,
- purely aesthetic sections without informational value.

Dark mode is allowed in MVP only if it stays simple and maintainable.

Design should communicate maturity, not trend-chasing.

---

## Content Rules

Writing must be:
- specific,
- concise,
- professional,
- and grounded.

Avoid:
- vague self-branding phrases,
- exaggerated skill claims,
- generic motivational language,
- filler adjectives.

Prefer:
- real tools,
- real interests,
- real focus areas,
- real project descriptions,
- clear outcomes and responsibilities.

---

## Implementation Rules

When asked to build something:
- identify the exact file to create or edit,
- preserve existing structure,
- explain major trade-offs briefly,
- keep code readable,
- and avoid solving unrelated problems.

When refactoring:
- preserve behavior,
- simplify structure,
- improve naming,
- remove duplication,
- and avoid style-only churn with no maintainability benefit.

---

## File Creation Rules

Do not create new files unless one of these is true:
- the user asked for it,
- the architecture clearly requires it,
- or separation materially improves maintainability.

If creating a file, ensure:
- the file belongs in the documented structure,
- the naming follows project conventions,
- and the reason is obvious.

---

## Git and Progress Discipline

Treat each meaningful change as a small reviewable unit.

Whenever a significant feature is completed, update `PROGRESS.md` with:
- what was added,
- what changed,
- any unresolved issues,
- and any decisions made.

---

## Clarification Triggers

Ask the user before proceeding if any of these are unclear:
- featured projects,
- social/contact links,
- preferred design direction,
- final page list,
- tone of personal introduction,
- whether bilingual support needs special handling,
- whether blog/CMS is Phase 1 or later.

---

## Definition of Done

A task is not done unless:
- the result matches the requested scope,
- the code is readable,
- no obvious dead code remains,
- naming is sensible,
- structure is consistent,
- and the output aligns with project standards.

---

## Homepage Interaction Rules

The homepage follows a split-screen, scroll-driven slide structure.

- Left side stays mostly anchored with identity and portrait content.
- Right side changes by section.
- Overview and top 3 projects must appear as separate slides.
- The final slide should present a node/network visual.
- Motion should be subtle and readable.
- Do not replace this structure with a standard long-scroll page unless explicitly requested.
- Preserve the storytelling order unless the user changes it.
