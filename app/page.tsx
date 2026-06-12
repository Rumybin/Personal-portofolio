import type { Metadata } from 'next'
import HomeSplitLayout from '@/components/home/HomeSplitLayout'

export const metadata: Metadata = {
  title: 'TOR Drive',
  openGraph: {
    title: 'TOR Drive',
    description: 'Personal portfolio — System Information student with a path into Data Analytics and AI Engineering.',
  },
  twitter: {
    title: 'TOR Drive',
    description: 'Personal portfolio — System Information student with a path into Data Analytics and AI Engineering.',
  },
}

export default function HomePage() {
  return (
    <main className="h-screen overflow-hidden">
        <HomeSplitLayout />
    </main>
  )
}
