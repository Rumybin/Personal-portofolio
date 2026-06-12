'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '@/types'

const AUTO_ADVANCE_MS = 3000

interface Props {
  projects: Project[]
}

const variants = {
  enter: {
    y: 30,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -30,
    opacity: 0,
  },
}

export default function ProjectSlider({ projects }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const totalSlides = projects.length

  const advance = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const clearTimer = useCallback(() => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const startTimer = useCallback(() => {
    clearTimer()
    timerRef.current = setInterval(() => {
      advance()
    }, AUTO_ADVANCE_MS)
  }, [advance, clearTimer])

  useEffect(() => {
    if (!isPaused) {
      startTimer()
    } else {
      clearTimer()
    }
    return () => clearTimer()
  }, [isPaused, startTimer, clearTimer])

  const project = projects[currentIndex]
  if (!project) return null

  return (
    <div
      className="flex items-center justify-start"
    >
      <div className="w-full max-w-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={project.id}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="w-full rounded-2xl border border-border-subtle bg-panel p-6 transition-all duration-500 ease-in-out hover:scale-[1.02] hover:border-accent"
            style={{
              boxShadow: 'none',
              transitionProperty: 'transform, border-color, box-shadow',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.boxShadow = '0 0 28px rgba(163, 230, 53, 0.12)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div className="space-y-3">
              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border-subtle bg-accent-muted px-2 py-0.5 text-xs text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-foreground">
                {project.title}
              </h3>

              {/* Summary */}
              <p className="text-sm leading-relaxed text-secondary">
                {project.summary}
              </p>

              {/* Bottom row: view link + dot indicators */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-accent">View &rarr;</span>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'bg-accent' : 'bg-border-subtle'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
