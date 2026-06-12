import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article>
      {/* TODO: render project card — title, summary, tech stack, links */}
      {project.title} — {project.summary}
    </article>
  )
}
