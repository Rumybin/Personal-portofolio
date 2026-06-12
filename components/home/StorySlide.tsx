'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import type { TouchEvent, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { SlideContent } from '@/types'
import SlideIndicator from '@/components/home/SlideIndicator'
import ProjectCard from '@/components/ui/ProjectCard'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import { projects } from '@/data/projects'

const THROTTLE_MS = 1000
const DELTA_THRESHOLD = 30
const AUTO_SCROLL_DELAY = 8000
const SWIPE_THRESHOLD = 50

interface Props {
  slides: SlideContent[]
}

const variants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
}

export default function StorySlide({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const isAnimatingRef = useRef(false)
  useEffect(() => { isAnimatingRef.current = isAnimating }, [isAnimating])

  const lastTransitionTime = useRef(0)
  const autoScrollTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartY = useRef(0)

  const totalSlides = slides.length

  const clearAutoScroll = useCallback(() => {
    if (autoScrollTimer.current !== null) {
      clearTimeout(autoScrollTimer.current)
      autoScrollTimer.current = null
    }
  }, [])

  const goTo = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, totalSlides - 1))
      const now = Date.now()

      if (isAnimating) return
      if (now - lastTransitionTime.current < THROTTLE_MS) return
      if (clampedIndex === currentIndex) return

      setIsAnimating(true)
      setDirection(clampedIndex > currentIndex ? 1 : -1)
      setCurrentIndex(clampedIndex)
      lastTransitionTime.current = now
    },
    [currentIndex, isAnimating, totalSlides]
  )

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      goTo(currentIndex + 1)
    }
  }, [currentIndex, totalSlides, goTo])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      goTo(currentIndex - 1)
    }
  }, [currentIndex, goTo])

  const scheduleAutoScroll = useCallback(() => {
    if (currentIndex < totalSlides - 1) {
      clearAutoScroll()
      autoScrollTimer.current = setTimeout(() => {
        goNext()
      }, AUTO_SCROLL_DELAY)
    }
  }, [currentIndex, totalSlides, clearAutoScroll, goNext])

  const resetAndSchedule = useCallback(() => {
    clearAutoScroll()
    scheduleAutoScroll()
  }, [clearAutoScroll, scheduleAutoScroll])

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return

      if (deltaY > 0) {
        goNext()
      } else {
        goPrev()
      }
      resetAndSchedule()
    },
    [goNext, goPrev, resetAndSchedule]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown') {
        goNext()
        resetAndSchedule()
      } else if (e.key === 'ArrowUp') {
        goPrev()
        resetAndSchedule()
      }
    },
    [goNext, goPrev, resetAndSchedule]
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()

      if (isAnimatingRef.current) return

      const now = Date.now()
      if (now - lastTransitionTime.current < THROTTLE_MS) return
      if (Math.abs(e.deltaY) < DELTA_THRESHOLD) return

      if (e.deltaY > 0) {
        goNext()
      } else {
        goPrev()
      }
      resetAndSchedule()
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [goNext, goPrev, resetAndSchedule])

  useEffect(() => {
    scheduleAutoScroll()
    return () => clearAutoScroll()
  }, [currentIndex, scheduleAutoScroll, clearAutoScroll])

  const slideKey = `slide-${currentIndex}`

  function renderSlideContent(slide: SlideContent) {
    switch (slide.type) {
      case 'text':
        return (
          <div>
            <h2 className="mb-4 text-2xl font-bold text-foreground">{slide.title}</h2>
            <p className="text-secondary leading-relaxed">{slide.content}</p>
          </div>
        )
      case 'projects':
        return (
          <div>
            <h2 className="mb-6 text-2xl font-bold text-foreground">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {projects
                .filter((p) => p.featured)
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>
        )
      case 'about':
        return <AboutPreviewSection />
      default:
        return null
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative h-full overflow-hidden focus:outline-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slideKey}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          onAnimationComplete={() => setIsAnimating(false)}
          className="h-full"
        >
          <div className="flex h-full items-center justify-center p-6">
            <div className="h-full w-full rounded-xl border border-border-subtle bg-surface p-8">
              {renderSlideContent(slides[currentIndex])}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <SlideIndicator
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        onDotClick={goTo}
      />
    </div>
  )
}
