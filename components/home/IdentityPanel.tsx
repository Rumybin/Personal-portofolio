import { cn } from '@/lib/utils'
import { siteConfig } from '@/data/site'

export default function IdentityPanel() {
  return (
    <>
      {/* Mobile: compact header */}
      <div
        className={cn(
          'flex h-auto flex-col justify-center px-6 py-4 md:hidden',
          'border-b border-neutral-200 dark:border-neutral-800',
        )}
      >
        <h1 className="text-lg font-semibold tracking-tight text-black dark:text-white">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          {siteConfig.role}
        </p>
      </div>

      {/* Desktop: full panel */}
      <div className="hidden h-full flex-col justify-center p-8 md:flex">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white">
          {siteConfig.name}
        </h1>
        <p className="mb-6 max-w-sm text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
          {siteConfig.role}
        </p>
        <p className="mb-8 max-w-sm text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
          {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-500 underline underline-offset-4 hover:text-black dark:hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}
