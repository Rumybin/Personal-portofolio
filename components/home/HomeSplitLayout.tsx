import IdentityPanel from '@/components/home/IdentityPanel'
import StorySlide from '@/components/home/StorySlide'
import { siteConfig } from '@/data/site'
import type { SlideContent } from '@/types'

export default function HomeSplitLayout() {
  const slides: SlideContent[] = [
    ...siteConfig.stories.map((s) => ({ type: 'text' as const, ...s })),
    { type: 'projects' as const },
    { type: 'about' as const },
  ]

  return (
    <div className="flex h-screen flex-col md:grid md:grid-cols-2">
      <IdentityPanel />
      <StorySlide slides={slides} />
    </div>
  )
}

