import type { Metadata } from 'next'
import { siteConfig } from '@/data/site'

export function generateMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    ...overrides,
  }
}
