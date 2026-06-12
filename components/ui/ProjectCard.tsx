import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.id}`}
      className="group block rounded-lg border border-neutral-200 p-6 transition-colors hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
    >
      <article>
        <h3 className="text-lg font-semibold text-neutral-900 group-hover:text-black dark:text-neutral-100 dark:group-hover:text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
          {project.summary}
        </p>

        {project.techStack.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </article>
    </Link>
  )
}
