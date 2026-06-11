export interface Project {
  id: string
  title: string
  summary: string
  techStack: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
}

export interface SkillGroup {
  category: string
  skills: string[]
}
