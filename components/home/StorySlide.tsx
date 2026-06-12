'use client'

import { useState, useCallback, useRef, type WheelEvent, type TouchEvent, type KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ui/ProjectCard'
import AboutPreviewSection from '@/components/sections/AboutPreviewSection'
import type { SlideContent } from '@/types'

interface StorySlideProps {
  slides: SlideContent[]
}

const slideVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 320 : -320,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 320 : -320,
    opacity: 0,
  }),
}

function TextSlide({ title, content }: { title: string; content: string }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-black dark:text-white">
        {title}
      </h2>
      <p className="text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
        {content}
      </p>
    </div>
  )
}

function ProjectsSlide() {
  const featured = projects.filter((p) => p.featured)
  const display = featured.length > 0 ? featured.slice(0, 3) : projects.slice(0, 3)

  return (
    <div className="flex h-full flex-col justify-center">
      <h2 className="mb-6 text-xl font-semibold tracking-tight text-black dark:text-white">
        Featured Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {display.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

function slideKey(slide: SlideContent): string {
  if (slide.type === 'text') return slide.id
  if (slide.type === 'projects') return 'projects'
  return 'about'
}

export default function StorySlide({ slides }: StorySlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false)

  const touchStartY = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = slides.length
  const current = slides[currentIndex]

  const goTo = useCallback(
    (index: number) => {
      const target = Math.max(0, Math.min(index, totalSlides - 1))
      if (target === currentIndex || isAnimating) return
      setDirection(target > currentIndex ? 1 : -1)
      setIsAnimating(true)
      setCurrentIndex(target)
    },
    [currentIndex, totalSlides, isAnimating],
  )

  const goNext = useCallback(() => {
    if (currentIndex < totalSlides - 1) goTo(currentIndex + 1)
  }, [currentIndex, totalSlides, goTo])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1)
  }, [currentIndex, goTo])

  const handleWheel = useCallback(
    (e: WheelEvent<HTMLDivElement>) => {
        e.preventDefault()
      if (isAnimating) return
      if (e.deltaY > 0) goNext()
      else if (e.deltaY < 0) goPrev()
    },
    [isAnimating, goNext, goPrev],
  )

  const handleTouchStart = useCallback((e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(
    (e: TouchEvent<HTMLDivElement>) => {
      const deltaY = touchStartY.current - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < 50) return
      if (deltaY > 0) goNext()
      else goPrev()
    },
    [goNext, goPrev],
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        goPrev()
      }
    },
    [goNext, goPrev],
  )

  if (!current) return null

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative flex h-full flex-col overflow-hidden p-8',
        current.type === 'text' ? 'justify-center' : 'justify-start pt-12',
      )}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Story slides"
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slideKey(current)}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: 'easeInOut' }}
          onAnimationComplete={() => setIsAnimating(false)}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${currentIndex + 1} of ${totalSlides}`}
          className="h-full"
        >
          {current.type === 'text' ? (
            <TextSlide title={current.title} content={current.content} />
          ) : current.type === 'projects' ? (
            <ProjectsSlide />
          ) : (
            <AboutPreviewSection />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
