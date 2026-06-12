# Homepage Layout Spec

## Concept
The homepage is a split-screen, slide-based storytelling experience.

## Layout
- Left column: identity, biodata, short positioning — stays anchored on desktop.
- Right column: scroll-driven content panels using Framer Motion AnimatePresence with vertical slide (320px translate, 0.55s ease-in-out).
- The right column changes section by section via wheel scroll, touch swipe, or Arrow Up/Down keys.
- Animation lock prevents concurrent transitions.
- The experience should feel smooth and controlled.

## Slides
1. Overview (text slide from siteConfig.stories)
2. What I Do (text slide)
3. My Approach (text slide)
4. Featured Projects (project cards grid)
5. About Preview (name, role, bio, skill badges, link to /about)
6. Node / network visual ending (not yet implemented)

## Left Panel Content
- Name.
- Role / focus.
- Short bio.
- GitHub and LinkedIn links.

## Right Panel Content
- Text slides: title and paragraph from siteConfig.stories.
- Projects slide: grid of ProjectCard components for featured projects.
- About slide: name, role, description, skill badges, link to /about.
- Final slide (future): node-style visual composition.

## Animation Notes
- Uses Framer Motion AnimatePresence mode="wait" with vertical translate variants.
- enter: y=320 (down) or y=-320 (up) depending on direction, opacity 0.
- center: y=0, opacity 1.
- exit: y=-320 (down) or y=320 (up) depending on direction, opacity 0.
- Duration: 0.55s, easing: easeInOut.
- isAnimating guard prevents scroll spam during transitions.
- Keep timing readable. Do not over-animate.

## Mobile Behavior
- IdentityPanel collapses to a compact header (h-auto, px-6 py-4) showing only name and role.
- Layout switches from grid (desktop) to flex column (mobile).
- StorySlide fills remaining viewport height below the compact header.
- All slide types and navigation behavior remain identical to desktop.
- No hamburger menu. No split columns on small screens.

## Node / Network Visual — Content Meaning
The node visual represents the author's learning journey: System Information → Data Analytics → AI Engineering. Nodes correspond to skills, tools, and milestones, with connections showing how areas relate or build on each other.

This section must be content-driven (sourced from structured data, e.g. a `journey` data file), not a static decorative SVG. Visual treatment stays minimal — the meaning comes from what's shown, not from animation density. Not yet implemented.
