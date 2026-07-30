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

export function CountUp({ value }: { value: string }) {
  const parsed = useMemo(() => parseValue(value), [value])
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)
  const [display, setDisplay] = useState(() =>
    parsed ? parsed.format(0) + parsed.suffix : value,
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const duration = 1200

        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - progress) ** 2
          setDisplay(parsed.format(parsed.number * eased) + parsed.suffix)
          if (progress < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [parsed, value])

  return <span ref={ref}>{display}</span>
}
