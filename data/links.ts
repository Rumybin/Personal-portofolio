import { siteConfig } from './site'

export interface SocialLink {
  label: string
  url: string
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    url: siteConfig.githubUrl,
  },
  {
    label: 'LinkedIn',
    url: siteConfig.linkedinUrl,
  },
]
