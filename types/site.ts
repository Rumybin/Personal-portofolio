export interface Story {
  id: string
  title: string
  content: string
}

export interface SiteConfig {
  name: string
  role: string
  description: string
  githubUrl: string
  linkedinUrl: string
  email: string
  stories: Story[]
}

export type SlideContent =
  | { type: 'text'; id: string; title: string; content: string }
  | { type: 'projects' }
  | { type: 'about' }
