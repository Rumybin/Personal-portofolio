import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'TOR Drive',
    template: '%s | TOR Drive',
  },
  description: 'Personal portfolio — System Information student with a path into Data Analytics and AI Engineering.',
  openGraph: {
    siteName: 'TOR Drive',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
