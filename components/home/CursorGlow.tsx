'use client'

import { useRef, useEffect } from 'react'

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  const posRef = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    let rafId: number

    const animate = () => {
      if (glowRef.current) {
        const { x, y } = posRef.current
        glowRef.current.style.transform = `translate(${x}px, ${y}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMove, { passive: true })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMove)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999]"
      style={{
        width: 128,
        height: 128,
          borderRadius: '50%',
          background:
          'radial-gradient(circle, rgba(163, 230, 53, 0.2) 0%, transparent 70%)',
        transform: 'translate(-500px, -500px)',
        }}
      aria-hidden="true"
      />
  )
}

