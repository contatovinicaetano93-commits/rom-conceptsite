'use client'

import { useEffect, useRef, useState } from 'react'
import { ServicesMarquee } from '@/components/services-marquee'

const STEP_COUNT = 3

function stepFromProgress(progress: number) {
  if (progress <= 0) return 0
  if (progress >= 1) return STEP_COUNT - 1
  return Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT))
}

export function ServicosStory() {
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
    <section id="servicos">
      {/* Sticky effect only for the intro copy */}
      <div ref={trackRef} className="text-story">
        <div className="text-story__sticky">
          <div className="mx-auto flex h-full max-w-6xl items-center px-5 py-20 md:px-8 md:py-28">
            <div className="max-w-2xl">
              <p className={`scroll-story-step section-label mb-4 ${on(0) ? 'is-on' : ''}`}>
                Serviços
              </p>
              <h2
                className={`scroll-story-step font-serif text-3xl leading-tight font-normal tracking-[-0.02em] text-foreground md:text-5xl ${
                  on(1) ? 'is-on' : ''
                }`}
              >
                O que fazemos
              </h2>
              <p className={`copy scroll-story-step mt-5 ${on(2) ? 'is-on' : ''}`}>
                Corte, coloração, mechas, tratamentos e bem-estar — com padrão ROM Concept. Valores
                variam conforme o serviço; a equipe confirma no agendamento.
              </p>
            </div>
          </div>

          <div className="text-story__progress" aria-hidden>
            <div
              className="text-story__progress-bar"
              style={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Cards stay in normal layout, as before */}
      <div className="pb-20 md:pb-28">
        <div className="mt-2">
          <ServicesMarquee />
        </div>
        <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
          <p data-reveal="soft" className="copy copy--sm">
            Serviços exclusivos podem variar por unidade — consulte a equipe ao agendar.
          </p>
        </div>
      </div>
    </section>
  )
}
