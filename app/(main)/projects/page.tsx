import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A selection of projects by TOR Drive — spanning data analytics, AI engineering, and systems work.',
  openGraph: {
    title: 'Projects | TOR Drive',
    description: 'A selection of projects by TOR Drive — spanning data analytics, AI engineering, and systems work.',
  },
}

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* TODO: fill with all-projects listing */}
    </section>
  )
}
