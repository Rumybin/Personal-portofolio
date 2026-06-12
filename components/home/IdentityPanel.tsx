import { siteConfig } from '@/data/site'

export default function IdentityPanel() {
  return (
    <>
      {/* Mobile: compact header */}
      <div className="relative z-10 flex h-auto flex-col justify-center bg-background px-6 py-4 md:hidden border-b border-border-subtle">
        <h1 className="text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-secondary">
          {siteConfig.role}
        </p>
      </div>

      {/* Desktop: full panel — pushed toward center-right */}
      <div className="relative z-10 bg-background hidden h-full flex-col items-end justify-center md:flex">
        <div className="max-w-md pr-8 xl:pr-16">
          <h1 className="mb-3 text-5xl font-bold tracking-tight text-foreground xl:text-6xl">
          {siteConfig.name}
        </h1>
          <p className="mb-4 text-lg leading-relaxed text-secondary">
          {siteConfig.role}
        </p>
        <p className="mb-8 max-w-sm text-base leading-relaxed text-secondary">
          {siteConfig.description}
        </p>
        <div className="flex gap-6">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-secondary underline underline-offset-4 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base text-secondary underline underline-offset-4 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </div>
    </>
  )
}

