import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with TOR Drive — available for collaboration, questions, or professional opportunities.',
  openGraph: {
    title: 'Contact | TOR Drive',
    description: 'Get in touch with TOR Drive — available for collaboration, questions, or professional opportunities.',
  },
}

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      {/* TODO: fill with contact form or direct contact links */}
    </section>
  )
}
