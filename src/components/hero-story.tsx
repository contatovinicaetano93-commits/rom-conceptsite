'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Clock, MapPin } from 'lucide-react'
import { HeroCarousel } from '@/components/hero-carousel'
import { salonWhatsappUrl, salons } from '@/lib/content'

const accentStyles = {
  brasil: {
    chip: 'border-brasil/35 hover:border-brasil/60',
    text: 'text-brasil',
  },
  iguatemi: {
    chip: 'border-iguatemi/35 hover:border-iguatemi/60',
    text: 'text-iguatemi',
  },
} as const

/** Cumulative steps revealed by scroll progress through the sticky track */
const STEP_COUNT = 8

function stepFromProgress(progress: number) {
  if (progress <= 0) return 0
  if (progress >= 1) return STEP_COUNT - 1
  return Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT))
}

export function HeroStory() {
  const trackRef = useRef<HTMLElement>(null)
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
    <section id="inicio" ref={trackRef} className="hero-story">
      <div className="hero-story__sticky">
        <HeroCarousel />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/68 to-background/95"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,color-mix(in_srgb,var(--gold)_12%,transparent),transparent_70%)]"
          aria-hidden
        />

        <div
          className={`hero-story__step absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 md:block lg:left-7 ${
            on(0) ? 'is-on' : ''
          }`}
        >
          <div className="flex -rotate-90 items-center gap-2 whitespace-nowrap text-[0.65rem] font-semibold tracking-[0.4em] text-gold/80 uppercase">
            <Award className="size-3.5 shrink-0" aria-hidden />
            Guinness World Records · maior salão de beleza do mundo
          </div>
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-5 md:px-8">
          <div className="mx-auto w-full max-w-3xl pt-20 pb-10 text-center md:pt-24">
            <div className={`hero-story__step ${on(0) ? 'is-on' : ''}`}>
              <p className="section-label mb-4 md:hidden">
                Guinness World Records · maior salão de beleza do mundo
              </p>
              <p className="font-display text-xl italic tracking-[-0.01em] text-foreground/90 md:text-2xl">
                ROM, o poder de transformar.
              </p>
            </div>

            <h1
              className={`hero-story__step display-hero mt-5 ${
                on(1) ? 'is-on' : ''
              }`}
            >
              <span className="gold-text">Dois salões. Um conceito.</span>
            </h1>

            <p
              className={`hero-story__step mx-auto mt-5 max-w-xl text-pretty text-balance font-sans text-base font-medium leading-[1.55] text-foreground md:text-xl ${
                on(2) ? 'is-on' : ''
              }`}
            >
              Beleza, saúde e bem-estar em um oásis de sofisticação — mais de 300 cadeiras entre Av.
              Brasil e Shopping Iguatemi.
            </p>

            <div
              className={`hero-story__step mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/90 ${
                on(3) ? 'is-on' : ''
              }`}
            >
              <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/55 px-4 py-2 backdrop-blur-sm">
                <MapPin className="size-4 text-gold" aria-hidden />
                <span>Av. Brasil · Iguatemi</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/55 px-4 py-2 backdrop-blur-sm">
                <Clock className="size-4 text-gold" aria-hidden />
                <span>Horários por unidade</span>
              </div>
            </div>

            <p
              className={`hero-story__step font-display mt-10 text-2xl tracking-[-0.015em] text-foreground md:text-3xl ${
                on(4) ? 'is-on' : ''
              }`}
            >
              Agende seu <span className="text-gold-strong">#SeuMomentoROM</span>
            </p>

            <p
              className={`hero-story__step mx-auto mt-3 inline-block rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-sm text-foreground/90 backdrop-blur-sm ${
                on(5) ? 'is-on' : ''
              }`}
            >
              Escolha a unidade mais conveniente para você.
            </p>

            <div
              className={`hero-story__step mx-auto mt-6 grid max-w-lg gap-3 sm:grid-cols-2 ${
                on(6) ? 'is-on' : ''
              }`}
            >
              {salons.map((salon) => {
                const styles = accentStyles[salon.accent]
                return (
                  <a
                    key={salon.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group rounded-2xl border bg-background/60 p-4 text-left backdrop-blur-sm transition hover:bg-background/75 ${styles.chip}`}
                    href={salonWhatsappUrl(salon)}
                    tabIndex={on(6) ? 0 : -1}
                  >
                    <span
                      className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase ${styles.text}`}
                    >
                      {salon.accent === 'brasil' ? 'Jardins' : 'Iguatemi'}
                    </span>
                    <span className="mt-1 block font-display text-lg tracking-[-0.01em] text-foreground group-hover:text-gold-strong">
                      {salon.accent === 'brasil' ? 'Av. Brasil, 126' : 'Faria Lima, 2232'}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {salon.accent === 'brasil' ? 'Ter–sáb · 9h–21h' : 'Seg–sáb · 10h–22h'}
                    </span>
                  </a>
                )
              })}
            </div>

            <a
              href="#unidades"
              tabIndex={on(7) ? 0 : -1}
              className={`hero-story__step mt-5 inline-block text-sm text-muted transition hover:text-gold ${
                on(7) ? 'is-on' : ''
              }`}
            >
              Ver endereços completos e serviços →
            </a>
          </div>
        </div>

        <div className="hero-story__progress" aria-hidden>
          <div
            className="hero-story__progress-bar"
            style={{ width: `${((step + 1) / STEP_COUNT) * 100}%` }}
          />
        </div>
      </div>
    </section>
  )
}
