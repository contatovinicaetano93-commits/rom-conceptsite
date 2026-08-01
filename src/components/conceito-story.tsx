'use client'

import { useEffect, useRef, useState } from 'react'
import { brand } from '@/lib/content'

const CARD_STEPS = 3
/** Share of the sticky track reserved for drawing the arrow after cards are on */
const ARROW_SHARE = 0.35

const cards = [
  { label: 'Visão', value: brand.vision },
  { label: 'Fundador', value: brand.founder },
  { label: 'Parceiros', value: brand.partners.join(' · ') },
] as const

function cardStepFromProgress(contentProgress: number) {
  if (contentProgress <= 0) return 0
  if (contentProgress >= 1) return CARD_STEPS - 1
  return Math.min(CARD_STEPS - 1, Math.floor(contentProgress * CARD_STEPS))
}

export function ConceitoStory() {
  const trackRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  const headRef = useRef<SVGPathElement>(null)
  const [step, setStep] = useState(0)
  const [arrowProgress, setArrowProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(prefersReduced)
    if (prefersReduced) {
      setStep(CARD_STEPS - 1)
      setArrowProgress(1)
      return
    }

    const track = trackRef.current
    const path = pathRef.current
    const head = headRef.current
    if (!track || !path || !head) return

    const length = path.getTotalLength()
    path.style.strokeDasharray = `${length}`
    path.style.strokeDashoffset = `${length}`
    head.style.opacity = '0'

    let frame = 0
    const update = () => {
      frame = 0
      const rect = track.getBoundingClientRect()
      const total = Math.max(1, track.offsetHeight - window.innerHeight)
      const scrolled = Math.min(total, Math.max(0, -rect.top))
      const progress = scrolled / total

      const contentEnd = 1 - ARROW_SHARE
      const contentProgress = Math.min(1, progress / contentEnd)
      const nextArrow =
        progress <= contentEnd ? 0 : Math.min(1, (progress - contentEnd) / ARROW_SHARE)

      setStep(cardStepFromProgress(contentProgress))
      setArrowProgress(nextArrow)

      path.style.strokeDashoffset = `${length * (1 - nextArrow)}`
      head.style.opacity =
        nextArrow > 0.82 ? String(Math.min(1, (nextArrow - 0.82) / 0.18)) : '0'
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

  useEffect(() => {
    if (!reduced) return
    const path = pathRef.current
    const head = headRef.current
    if (!path || !head) return
    path.style.strokeDasharray = 'none'
    path.style.strokeDashoffset = '0'
    head.style.opacity = '1'
  }, [reduced])

  const on = (index: number) => reduced || step >= index
  const overallProgress = reduced
    ? 1
    : ((step + 1) / CARD_STEPS) * (1 - ARROW_SHARE) + arrowProgress * ARROW_SHARE

  return (
    <section id="conceito" className="bg-surface/40">
      {/* Intro copy — normal flow, above the pinned cards/arrow */}
      <div className="mx-auto max-w-6xl px-5 pt-20 md:px-8 md:pt-28">
        <div data-reveal="lift" className="mb-10 max-w-2xl md:mb-12">
          <p className="section-label mb-4">O conceito</p>
          <h2 className="font-serif text-3xl leading-tight font-normal tracking-[-0.02em] text-foreground md:text-5xl">
            O Conceito
          </h2>
        </div>
        <div data-reveal className="mb-4 max-w-3xl md:mb-6">
          <h3 className="font-serif text-2xl leading-tight font-normal tracking-[-0.02em] text-foreground md:text-4xl">
            {brand.promise}
          </h3>
          <p className="copy mt-5 max-w-3xl">{brand.manifesto}</p>
        </div>
      </div>

      {/* Sticky: cards appear, then arrow must finish before the page continues */}
      <div ref={trackRef} className="conceito-story">
        <div className="conceito-story__sticky">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--gold)_6%,transparent),transparent_70%)]" />

          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-20">
            <div className="grid items-start gap-4 md:grid-cols-3">
              {cards.map((item, index) => (
                <article
                  key={item.label}
                  className={`scroll-story-step card-border card-glow rounded-2xl p-5 md:p-6 ${
                    on(index) ? 'is-on' : ''
                  }`}
                >
                  <p className="section-label mb-3">{item.label}</p>
                  <p className="copy copy--bright copy--sm md:text-[1.125rem]">{item.value}</p>
                </article>
              ))}
            </div>

            <div className="scroll-arrow conceito-story__arrow mt-10 md:mt-14" aria-hidden>
              <div className="scroll-arrow__inner px-0">
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
          </div>

          <div className="text-story__progress" aria-hidden>
            <div
              className="text-story__progress-bar"
              style={{ width: `${Math.min(100, overallProgress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
