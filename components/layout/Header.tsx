import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          TOR Drive
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/about"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Contact
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
