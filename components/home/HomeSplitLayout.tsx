import IdentityPanel from '@/components/home/IdentityPanel'
import ProjectSlider from '@/components/home/ProjectSlider'
import { projects } from '@/data/projects'

const topProjects = projects.filter((p) => p.featured).slice(0, 3)
export default function HomeSplitLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden md:grid md:grid-cols-2">
      <IdentityPanel />
      <div className="flex h-full items-center justify-start pl-4 md:pl-8">
        <ProjectSlider projects={topProjects} />
      </div>
    </div>
  )
}

