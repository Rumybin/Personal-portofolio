# Personal Portfolio Website — PRD

## Project Overview

This project is a personal portfolio website for **TOR Drive**, a System Information student at Universitas Airlangga who is transitioning toward **Data Analytics** and **AI Engineering**.

The website must function as:
- A professional portfolio for recruiters, hiring managers, clients, and collaborators.
- A proof-of-work artifact that demonstrates software engineering quality, not just visual polish.
- A training ground for building a production-style web project using modern industry practices.

The portfolio should feel credible, clear, modern, and personal — not generic, not overdesigned, and not like low-quality AI-generated output.

---

## Main Goals

1. Present TOR Drive professionally for internship, freelance, and junior-level opportunities.
2. Showcase projects in data analytics, AI, programming, and web development.
3. Demonstrate strong engineering habits: clean code, maintainable structure, accessibility, and performance.
4. Build with a free-tier stack only, without sacrificing professional standards.
5. Create a reusable foundation that can evolve into a sellable portfolio template or personal brand website.

---

## Success Criteria

The project is successful if it meets these conditions:

- The website clearly communicates identity, skills, projects, and contact information.
- The codebase is readable, maintainable, and consistent.
- The UI feels intentionally designed and avoids common "AI-generated" patterns.
- The site is responsive, accessible, and fast.
- The project can be deployed for free.
- Future edits can be made without large rewrites.

---

## Target Audience

### Primary Audience
- Recruiters.
- Hiring managers.
- Technical interviewers.
- Potential freelance clients.

### Secondary Audience
- Other developers.
- Classmates and peers.
- Communities around data analytics, AI, and web development.

---

## Positioning

The portfolio should position TOR Drive as:
- A serious learner with strong growth direction.
- Someone bridging analytics, engineering, and practical implementation.
- A candidate who values software quality, documentation, and maintainability.
- A builder who can turn ideas into real, structured deliverables.

---

## Core Messaging

The site should communicate these ideas clearly:

- System Information student with a practical path into Data Analytics and AI Engineering.
- Strong interest in building useful systems, not just learning theory.
- Comfortable with Python, Java, analytics workflows, and modern development tooling.
- Focused on clarity, structure, continuous learning, and professional execution.

---

## Scope

### In Scope (Phase 1)
- Landing/Home page.
- About section/page.
- Projects section/page.
- Skills/Tools section.
- Contact section/page.
- Resume/CV link.
- External links to GitHub, LinkedIn, and relevant platforms.
- Responsive layout for mobile and desktop.
- Dark mode if implementation remains clean and low-maintenance.
- SEO basics.

### Optional in Scope (Phase 2)
- Blog/articles.
- Case-study detail pages.
- CMS-backed content.
- Project filtering by category.
- Certificates section.
- Timeline / journey section.

### Out of Scope (Phase 1)
- Authentication.
- Dashboard/admin panel.
- Complex backend.
- Paid services that are not required.
- Heavy animations that reduce clarity or maintainability.

---

## Functional Requirements

### 1. Home
Must include:
- Name and role statement.
- Clear short value proposition.
- Primary CTA to view projects.
- Secondary CTA to contact or view GitHub.
- Short highlights of focus areas.

### 2. About
Must include:
- Short introduction.
- Educational background.
- Transition narrative toward analytics and AI engineering.
- Work style / values.
- Optional personal interests if they strengthen personality without distracting.

### 3. Projects
Must include:
- Featured projects list.
- Each project should show title, summary, tech stack, and links.
- Projects should emphasize problem, approach, and result.
- Placeholder project cards are allowed temporarily, but structure must support real data later.

### 4. Skills
Must include:
- Core technical skills.
- Tools and platforms.
- Optional grouping by category (languages, analytics, AI, development, tooling).
- Avoid inflated skill visualization unless meaningful.

### 5. Contact
Must include:
- Clear contact CTA.
- Email or contact form.
- GitHub and LinkedIn.
- Optional downloadable CV.

---

## Non-Functional Requirements

### Code Quality
- Must prioritize readability and maintainability.
- Must follow project clean-code rules.
- Must avoid unnecessary abstraction.
- Must avoid dead code, unused imports, and weak naming.

### Design Quality
- Must avoid generic AI-looking layouts and wording.
- Must feel intentional and restrained.
- Must prioritize typography, spacing, hierarchy, and clarity.

### Performance
- Fast initial load.
- Optimized images.
- Minimal unnecessary dependencies.

### Accessibility
- Semantic HTML.
- Keyboard navigability.
- Sufficient color contrast.
- Proper heading structure.
- Alt text for meaningful images.

### Maintainability
- Easy to add/edit projects.
- Easy to replace copy and links.
- Folder structure should remain understandable.

---

## Recommended Tech Stack

- Framework: Next.js (App Router).
- Language: TypeScript.
- Styling: Tailwind CSS.
- Deployment: Vercel.
- Version Control: GitHub.
- Content source for Phase 1: local structured data.
- Optional Phase 2 CMS: Sanity.

Constraint: stack should remain **free-tier friendly** and suitable for industry-style development.

---

## Content Strategy

### Tone
- Professional.
- Clear.
- Concise.
- Personal but not overly casual.
- Specific instead of generic.

### Writing Rules
- Avoid vague slogans.
- Avoid AI-sounding filler.
- Prefer concrete descriptions.
- Show evidence through projects and implementation.

---

## Design Direction

The design direction is **Minimal Swiss + Technical**.

The design should aim for:
- Strong typography.
- Clear hierarchy.
- Generous whitespace.
- Neutral surfaces with one restrained accent color.
- Technical credibility without looking like a dashboard or toy UI.
- No overuse of gradients, glassmorphism, glowing effects, or template-like card spam.

Dark mode is included in the MVP, but only if it remains simple, readable, and low-maintenance.

The site should look like a real developer built it with intention.

---

## SEO Requirements

Minimum requirements:
- Title and meta description per page.
- Open Graph metadata.
- Semantic markup.
- Name-based discoverability.
- Clean URLs.

---

## Deployment Requirements

- Deployable on free Vercel tier.
- Connected to GitHub for automatic deployment.
- Environment variables only if needed.
- No paid infrastructure required for Phase 1.

---

## Risks

- Overbuilding before core content is ready.
- Too much AI-generated copy making the site feel generic.
- Over-engineering the component architecture.
- Adding too many libraries too early.
- Prioritizing aesthetics over credibility.

---

## Decisions to Confirm Later

These details still need user confirmation before implementation begins:

1. Which projects will be featured first.
2. Which social/profile links are public and ready.
3. Whether a blog is included now or later.
4. Whether contact uses direct email only or a real form.
5. Whether bilingual presentation needs special page-level handling later.

---

## MVP Definition

The MVP is complete when the site has:
- A polished Home page.
- An About section/page.
- A Projects section/page with real or near-real project entries.
- A Contact section/page.
- Clean responsive layout.
- Deployment to Vercel.
- Acceptable code quality and documentation.

---

## Homepage Experience

The homepage should use a split-screen storytelling layout instead of a standard long-scroll landing page.

### Left Side
- Identity and biodata.
- Portrait or visual representation.
- Short personal positioning.

### Right Side
- Scroll-driven slides.
- Overview.
- Top 3 projects.
- Final node/network visual section.

### Slide Behavior
- The right side changes as the user scrolls.
- Each slide has one main purpose.
- The experience should feel like moving through chapters or slides.
- The final section should use a connected node-like visual motif.
