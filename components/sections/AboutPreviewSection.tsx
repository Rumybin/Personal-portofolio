'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'
import { skillGroups } from '@/data/skills'
import SkillBadge from '@/components/ui/SkillBadge'

export default function AboutPreviewSection() {
  const topSkills = skillGroups.flatMap((g) => g.skills).slice(0, 5)

    return (
    <div className="flex h-full flex-col justify-center">
      <h2 className="mb-1 text-xl font-semibold tracking-tight text-foreground">
        {siteConfig.name}
      </h2>
      <p className="mb-4 text-sm text-secondary">
        {siteConfig.role}
      </p>
      <p className="mb-6 text-base leading-relaxed text-secondary">
        {siteConfig.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {topSkills.map((skill) => (
          <SkillBadge key={skill} name={skill} />
        ))}
      </div>

      <Link
        href="/about"
        className={cn(
          'inline-block text-sm font-medium tracking-wide uppercase transition-colors',
          'text-secondary hover:text-accent',
        )}
      >
        More About Me &rarr;
      </Link>
    </div>
  )
}
