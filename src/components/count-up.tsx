'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

function parseValue(raw: string) {
  const match = raw.match(/^([\d.,]+)(.*)$/)
  if (!match) return null

  const [, numStr, suffix] = match
  const usesThousandDot = numStr.includes('.') && !numStr.includes(',')
  const number = Number(numStr.replace(/\./g, '').replace(',', '.'))
  if (Number.isNaN(number)) return null

  const format = (n: number) =>
    usesThousandDot ? Math.round(n).toLocaleString('pt-BR') : String(Math.round(n))

  return { number, suffix, format }
}

function isRoughlyInView(el: HTMLElement) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || 0
  const vw = window.innerWidth || 0
  return rect.bottom > 0 && rect.top < vh && rect.right > 0 && rect.left < vw
}

export function CountUp({ value }: { value: string }) {
  const parsed = useMemo(() => parseValue(value), [value])
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(() =>
    parsed ? parsed.format(parsed.number) + parsed.suffix : value,
  )

  useEffect(() => {
    if (!parsed) {
      setDisplay(value)
      return
    }

    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(parsed.format(parsed.number) + parsed.suffix)
      return
    }

    // Start at 0 only once we know we can animate; keep final value as safe default.
    const run = () => {
      if (started.current) return
      started.current = true
      setDisplay(parsed.format(0) + parsed.suffix)

      const start = performance.now()
      const duration = 1200

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        const eased = 1 - (1 - progress) ** 2
        setDisplay(parsed.format(parsed.number * eased) + parsed.suffix)
        if (progress < 1) requestAnimationFrame(tick)
      }

      requestAnimationFrame(tick)
    }

    // 3D orbit items often fail IntersectionObserver — use loose observe + fallback.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        run()
        observer.disconnect()
      },
      { threshold: 0.01, rootMargin: '120px 0px 120px 0px' },
    )

    observer.observe(el)

    const fallback = window.setTimeout(() => {
      if (started.current) return
      if (isRoughlyInView(el)) run()
      else setDisplay(parsed.format(parsed.number) + parsed.suffix)
    }, 900)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [parsed, value])

  return <span ref={ref}>{display}</span>
}
