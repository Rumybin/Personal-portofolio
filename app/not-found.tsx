import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
}

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <p className="text-8xl font-bold tracking-tighter text-neutral-200 dark:text-neutral-800 sm:text-9xl">
        404
      </p>
      <h1 className="-mt-2 text-base font-medium text-neutral-600 dark:text-neutral-400">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-500">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-neutral-500 underline underline-offset-4 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
      >
        Back to Homepage &rarr;
      </Link>
    </div>
  )
}
