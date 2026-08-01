'use client'

import { useEffect, useRef, useState } from 'react'
import { UnidadesStage } from '@/components/unidades-stage'

const STEP_COUNT = 3

function stepFromProgress(progress: number) {
  if (progress <= 0) return 0
  if (progress >= 1) return STEP_COUNT - 1
  return Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT))
}

export function UnidadesStory() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(prefersReduced)
    if (prefersReduced) {
      setStep(STEP_COUNT - 1)
      return
    }

    const track = trackRef.current
    if (!track) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = track.getBoundingClientRect()
      const total = Math.max(1, track.offsetHeight - window.innerHeight)
      const scrolled = Math.min(total, Math.max(0, -rect.top))
      setStep(stepFromProgress(scrolled / total))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  const on = (index: number) => reduced || step >= index

  return (
    <section id="unidades" className="bg-surface/30">
      {/* Sticky effect only for the intro copy */}
      <div ref={trackRef} className="unidades-story">
        <div className="unidades-story__sticky">
          <div className="mx-auto flex h-full max-w-6xl items-center px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className={`scroll-story-step section-label mb-4 ${on(0) ? 'is-on' : ''}`}>
                Onde estamos
              </p>
              <h2
                className={`scroll-story-step font-display text-3xl text-foreground md:text-5xl ${
                  on(1) ? 'is-on' : ''
                }`}
              >
                Duas unidades em São Paulo
              </h2>
              <p
                className={`scroll-story-step mt-4 font-sans text-base leading-[1.55] text-muted md:text-lg ${
                  on(2) ? 'is-on' : ''
                }`}
              >
                Escolha a unidade mais conveniente e agende #SeuMomentoROM pelo WhatsApp. A equipe
                confirma horário e serviço com você.
              </p>
            </div>
          </div>

          <div className="unidades-story__progress" aria-hidden>
            <div
              className="unidades-story__progress-bar"
              style={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cards stay in normal layout, as before */}
      <div className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
        <UnidadesStage />
      </div>
    </section>
  )
}
