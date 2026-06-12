import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { projects } from '@/data/projects'
// Local fallback for Container to avoid missing-module build error.
// Replace with the real Container import when available in the project.
const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
)

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.summary,
  }
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  const hasLiveUrl = !project.liveUrl.includes('PLACEHOLDER')
  const hasGithubUrl = !project.githubUrl.includes('PLACEHOLDER')

  return (
    <Container className="py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-sm text-neutral-500 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
      >
        &larr; Back to Projects
      </Link>

      <article className="mt-8 max-w-prose">
        <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
          {project.title}
        </h1>

        {project.techStack.length > 0 && (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-neutral-100 px-3 py-1 text-sm font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
          {project.summary}
        </p>

        {(hasLiveUrl || hasGithubUrl) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                GitHub &nearr;
              </a>
            )}
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Live Site &nearr;
              </a>
            )}
          </div>
        )}
      </article>
    </Container>
  )
}
