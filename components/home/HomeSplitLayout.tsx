import IdentityPanel from '@/components/home/IdentityPanel'
import ProjectSlider from '@/components/home/ProjectSlider'
import { projects } from '@/data/projects'

const topProjects = projects.filter((p) => p.featured).slice(0, 3)

export default function HomeSplitLayout() {
  return (
    <div className="relative flex h-screen flex-col overflow-hidden md:grid md:grid-cols-[1fr_1fr]">
      {/* Background pattern — full bleed, no dividers */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/jigsaw.svg)',
          backgroundRepeat: 'repeat',
          backgroundSize: '80px 80px',
          opacity: 0.1,
        }}
        aria-hidden="true"
      />

      <IdentityPanel />
      <div className="relative z-10 flex h-full items-center justify-center">
        <ProjectSlider projects={topProjects} />
      </div>
    </div>
  )
}

