# Homepage Layout Spec

## Concept
The homepage is a split-screen, slide-based storytelling experience.

## Layout
- Left column: identity, biodata, photo/visual portrait, short positioning.
- Right column: scroll-driven content panels.
- The right column changes section by section.
- The experience should feel smooth and controlled.

## Slides
1. Overview
2. Top Project 1
3. Top Project 2
4. Top Project 3
5. Node / network visual ending

## Left Panel Content
- Name.
- Role / focus.
- Very short bio.
- Photo or portrait graphic.
- Optional contact hint or link.

## Right Panel Content
- Overview slide: full project summary and positioning.
- Project slides: one project per slide with title, short explanation, and link.
- Final slide: node-style visual composition with progressive reveal.

## Animation Notes
- Use scroll-triggered transitions.
- Reveal node elements one by one.
- Use fade-in from lower positions if it remains subtle.
- Keep timing readable.
- Do not over-animate.

## Mobile Behavior
The split-screen layout does not apply on mobile. Below the desktop breakpoint, the layout becomes a single stacked sequential flow:

1. Identity panel (left panel content) becomes the first section — not sticky, not anchored.
2. Each slide (Overview, Project 1-3, Node visual) becomes its own full-height section in normal document order.
3. Scroll-snap per section is preserved to keep the "one screen, one focus" feeling, without requiring a split-column layout.

Goal: preserve the slide-based pacing without forcing desktop-only layout mechanics (sticky panels, column splits) onto small screens.

## Node / Network Visual — Content Meaning
The node visual represents the author's learning journey: System Information → Data Analytics → AI Engineering. Nodes correspond to skills, tools, and milestones, with connections showing how areas relate or build on each other.

This section must be content-driven (sourced from structured data, e.g. a `journey` data file), not a static decorative SVG. Visual treatment stays minimal — the meaning comes from what's shown, not from animation density.

## Animation Approach
Scroll-driven transitions and progressive reveals are implemented using native CSS scroll-snap and the IntersectionObserver API. No animation library (Framer Motion, GSAP, etc.) is used unless explicitly approved.
