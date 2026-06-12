'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export default function FeaturedProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const featured = projects.filter((p) => p.featured)
  const displayProjects = featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)

  return (
    <section ref={ref} className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of work I've been involved with."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {displayProjects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className={cn(
              'inline-block text-sm font-medium tracking-wide uppercase transition-colors',
              'text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white',
            )}
          >
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
