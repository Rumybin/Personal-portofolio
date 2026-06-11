export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} TOR Drive.
        </p>
        <div className="flex gap-4">
          <a
            href="PLACEHOLDER_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href="PLACEHOLDER_LINKEDIN_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
