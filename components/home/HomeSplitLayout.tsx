import { cn } from '@/lib/utils'
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
    <div className="flex h-screen flex-col overflow-hidden md:grid md:grid-cols-2">
      <IdentityPanel />
      <div className={cn('bg-panel')}>
        <StorySlide slides={slides} />
      </div>
    </div>
  )
}

