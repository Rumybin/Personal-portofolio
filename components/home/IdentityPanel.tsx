import { siteConfig } from '@/data/site'
export default function IdentityPanel() {
  return (
    <>
      {/* Mobile: compact header */}
      <div
        className="flex h-auto flex-col justify-center bg-background px-6 py-4 md:hidden border-b border-border-subtle"
      >
        <h1 className="text-lg font-semibold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="text-sm text-secondary">
          {siteConfig.role}
        </p>
      </div>

      {/* Desktop: full panel */}
      <div className="bg-background hidden h-full flex-col justify-center p-8 md:flex">
        <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
          {siteConfig.name}
        </h1>
        <p className="mb-6 max-w-sm text-base leading-relaxed text-secondary">
          {siteConfig.role}
        </p>
        <p className="mb-8 max-w-sm text-sm leading-relaxed text-secondary">
          {siteConfig.description}
        </p>
        <div className="flex gap-4">
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary underline underline-offset-4 hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-secondary underline underline-offset-4 hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  )
}

