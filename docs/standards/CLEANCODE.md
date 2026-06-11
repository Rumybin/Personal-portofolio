# Clean Code Standard

## Purpose
This document is the project's coding quality baseline.

## Core Rules
- Use TypeScript.
- Prefer clear names over clever names.
- Keep functions small and single-purpose.
- Avoid duplicated logic.
- Remove unused imports and dead code.
- Keep components focused.
- Use semantic HTML.
- Write comments only for why something exists, not what obvious code does.
- Prefer simple abstractions.
- Do not add libraries without explicit need.
- Keep formatting consistent.
- Make behavior easy to test.

## Naming
- Variables and functions must reveal intent.
- Components use PascalCase.
- Files should follow project conventions.
- Avoid generic names unless context makes them precise.

## Functions
- One responsibility per function.
- Prefer fewer parameters.
- Extract only when clarity improves.
- Avoid flag arguments when possible.

## Components
- One component should do one job.
- Move shared UI into reusable primitives only when truly reused.
- Keep page-level files focused on composition.

## Refactoring Checklist
- Can the code be understood in one pass?
- Is there duplication that should be extracted?
- Does the change improve maintenance?
- Did the change preserve behavior?
- Are all imports used?
- Are all names specific and consistent?

## Quality Gates
- Formatter passes.
- Linter passes.
- Type check passes.
- Tests pass when available.
