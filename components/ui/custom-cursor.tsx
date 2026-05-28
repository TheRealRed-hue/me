'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 768) return

    const cursor = cursorRef.current!
    const follower = followerRef.current!

    document.documentElement.style.cursor = 'none'

    // Usa requestAnimationFrame em vez de gsap.to a cada mousemove
    let mouseX = 0, mouseY = 0
    let followerX = 0, followerY = 0
    let rafId: number

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const tick = () => {
      followerX = lerp(followerX, mouseX, 0.12)
      followerY = lerp(followerY, mouseY, 0.12)
      gsap.set(cursor,   { x: mouseX,   y: mouseY })
      gsap.set(follower, { x: followerX, y: followerY })
      rafId = requestAnimationFrame(tick)
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(tick)

    const onEnterLink = (e: Event) => {
      const label = (e.currentTarget as HTMLElement).dataset.cursorLabel
      gsap.to(follower, { scale: 2.5, opacity: 0.15, duration: 0.3, ease: 'power2.out' })
      gsap.to(cursor,   { scale: 0.4, duration: 0.2 })
      if (label && labelRef.current) {
        labelRef.current.textContent = label
        gsap.to(labelRef.current, { opacity: 1, duration: 0.2 })
      }
    }

    const onLeaveLink = () => {
      gsap.to(follower, { scale: 1, opacity: 0.4, duration: 0.3, ease: 'power2.out' })
      gsap.to(cursor,   { scale: 1, duration: 0.2 })
      if (labelRef.current) gsap.to(labelRef.current, { opacity: 0, duration: 0.15 })
    }

    // Delega eventos via event delegation — sem observer, sem loop em todos os elementos
    const onDocEnter = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      if (el) onEnterLink({ currentTarget: el } as unknown as Event)
    }
    const onDocLeave = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest('a, button, [data-cursor]')
      if (el) {
        const related = e.relatedTarget as HTMLElement | null
        if (!el.contains(related)) onLeaveLink()
      }
    }

    document.addEventListener('mouseover',  onDocEnter, { passive: true })
    document.addEventListener('mouseout',   onDocLeave, { passive: true })

    return () => {
      document.documentElement.style.cursor = ''
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover',  onDocEnter)
      document.removeEventListener('mouseout',   onDocLeave)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference hidden md:block"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border border-primary/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-40 flex items-center justify-center hidden md:flex"
      >
        <span ref={labelRef} className="text-[9px] text-primary font-mono opacity-0 uppercase tracking-widest select-none">
          ver
        </span>
      </div>
    </>
  )
}
