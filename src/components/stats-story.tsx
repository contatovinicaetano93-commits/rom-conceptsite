'use client'

import { useEffect, useRef, useState } from 'react'
import { CountUp } from '@/components/count-up'
import { stats } from '@/lib/content'

const STEP_COUNT = 4

function stepFromProgress(progress: number) {
  if (progress <= 0) return 0
  if (progress >= 1) return STEP_COUNT - 1
  return Math.min(STEP_COUNT - 1, Math.floor(progress * STEP_COUNT))
}

function isStaticValue(value: string) {
  return value.length <= 2 || !/\d/.test(value)
}

function isHeroValue(value: string) {
  return value.length <= 2
}

export function StatsStory() {
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

  const progressPct = reduced ? 100 : ((step + 1) / STEP_COUNT) * 100

  if (reduced) {
    return (
      <section
        className="stats-story stats-story--static border-y border-border bg-surface/50 py-14 md:py-16"
        aria-label="Números ROM Concept"
      >
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <p className="stats-story__anchor mb-10 text-center">#SeuMomentoROM</p>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => {
              const staticValue = isStaticValue(stat.value)
              const hero = isHeroValue(stat.value)
              return (
                <div key={stat.label} className="flex flex-col items-center text-center">
                  <div className="stats-story__medallion flex shrink-0 items-center justify-center rounded-full p-3">
                    <p
                      className={`stats-story__value font-serif leading-none ${
                        hero ? 'stats-story__value--hero' : ''
                      }`}
                    >
                      {staticValue ? stat.value : <CountUp value={stat.value} />}
                    </p>
                  </div>
                  <p className="stats-story__label mt-4">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="stats-story border-y border-border bg-surface/50" aria-label="Números ROM Concept">
      <div ref={trackRef} className="stats-story__track">
        <div className="stats-story__sticky">
          <div className="stats-story__glow" aria-hidden />

          <p className="stats-story__anchor">#SeuMomentoROM</p>

          <div className="stats-story__stage">
            {stats.map((stat, index) => {
              const staticValue = isStaticValue(stat.value)
              const hero = isHeroValue(stat.value)
              const active = step === index

              return (
                <article
                  key={stat.label}
                  className={`stats-story__phase ${active ? 'is-active' : ''}`}
                  aria-hidden={!active}
                >
                  <div className="stats-story__medallion flex shrink-0 items-center justify-center rounded-full p-4 md:p-5">
                    <p
                      className={`stats-story__value font-serif leading-none ${
                        hero ? 'stats-story__value--hero' : ''
                      }`}
                    >
                      {staticValue ? (
                        stat.value
                      ) : active ? (
                        <CountUp value={stat.value} />
                      ) : (
                        stat.value
                      )}
                    </p>
                  </div>
                  <p className="stats-story__label">{stat.label}</p>

                  {index === 1 ? (
                    <div className="stats-story__split">
                      <span className="stats-story__split-item stats-story__split-item--brasil">
                        227 · Av. Brasil
                      </span>
                      <span className="stats-story__split-item stats-story__split-item--iguatemi">
                        110 · Iguatemi
                      </span>
                    </div>
                  ) : null}

                  {index === 2 ? (
                    <div className="stats-story__split">
                      <span className="stats-story__split-item stats-story__split-item--brasil">
                        4.000 m² · Av. Brasil
                      </span>
                      <span className="stats-story__split-item stats-story__split-item--iguatemi">
                        1.800 m² · Iguatemi
                      </span>
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>

          <div className="stats-story__progress" aria-hidden>
            <div className="stats-story__progress-bar" style={{ width: `${progressPct}%` }} />
          </div>
        </div>
      </div>
    </section>
  )
}
