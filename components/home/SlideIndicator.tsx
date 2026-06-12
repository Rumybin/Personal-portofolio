'use client'

import { cn } from '@/lib/utils'

interface Props {
  currentIndex: number
  totalSlides: number
  onDotClick?: (index: number) => void
}

export default function SlideIndicator({ currentIndex, totalSlides, onDotClick }: Props) {
  if (totalSlides < 1) return null

  return (
    <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col items-center gap-3">
      {Array.from({ length: totalSlides }).map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Go to slide ${i + 1}`}
          onClick={() => onDotClick?.(i)}
          className={cn(
            'transition-all duration-300',
            i === currentIndex ? 'h-6 w-1 bg-accent' : 'h-2 w-1 bg-border-subtle opacity-40'
          )}
        />
      ))}
    </div>
  )
}
