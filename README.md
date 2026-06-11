# Personal Portfolio

Personal portfolio website built with [Next.js](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/).

## About

This is my personal portfolio — a place to showcase projects, skills, and professional experience. The site is designed to be clean, readable, and focused on content.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/              # Route pages and root layout
├── components/       # React components
│   ├── layout/       # Header, Footer, ThemeToggle
│   ├── sections/     # Page sections (Hero, About, Projects, Skills, Contact)
│   ├── home/         # Homepage split-screen layout components
│   └── ui/           # Reusable primitives (Button, Container, Badge, etc.)
├── data/             # Local content — projects, skills, site config
├── types/            # TypeScript type definitions
├── lib/              # Utilities, constants, metadata helpers
├── public/           # Static assets (images, icons, resume)
└── docs/             # Project documentation and design decisions
```

## Status

Phase 1 — Initial scaffold complete. Placeholder data in place, awaiting real content.

## License

MIT
