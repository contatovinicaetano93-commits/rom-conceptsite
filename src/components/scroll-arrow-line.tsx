'use client'

import { useEffect, useRef } from 'react'

/**
 * Decorative gold arrow that draws across the page as you scroll
 * between Conceito and Romeu. Overlay only — no content changes.
 */
export function ScrollArrowLine() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const headRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const path = pathRef.current
    const head = headRef.current
    if (!wrap || !path || !head) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    head.style.opacity = '0'

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      path.style.strokeDashoffset = '0'
      head.style.opacity = '1'
      return
    }

    const update = () => {
      const rect = wrap.getBoundingClientRect()
      const view = window.innerHeight
      // Progress while the band crosses the middle of the viewport
      const start = view * 0.75
      const end = view * 0.25
      const raw = (start - rect.top) / (start - end)
      const progress = Math.min(1, Math.max(0, raw))

      path.style.strokeDashoffset = `${length * (1 - progress)}`
      head.style.opacity = progress > 0.82 ? String(Math.min(1, (progress - 0.82) / 0.18)) : '0'
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div ref={wrapRef} className="scroll-arrow" aria-hidden>
      <div className="scroll-arrow__inner">
        <svg
          className="scroll-arrow__svg"
          viewBox="0 0 1200 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            ref={pathRef}
            className="scroll-arrow__path"
            d="M40 48 C 220 18, 380 68, 560 36 C 740 6, 900 62, 1080 34"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            ref={headRef}
            className="scroll-arrow__head"
            d="M1062 18 L1110 34 L1058 52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
