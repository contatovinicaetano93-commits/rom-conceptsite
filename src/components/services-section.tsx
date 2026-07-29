'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ServicesGrid } from '@/components/animated-service-card'
import { ServicesMarquee } from '@/components/services-marquee'
import { SERVICES } from '@/data/services'

gsap.registerPlugin(ScrollTrigger)

export function ServicesSection() {
  const labelRef = useRef<HTMLParagraphElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const acts = [
      { el: labelRef.current, y: 16, delay: 0, duration: 0.5 },
      { el: titleRef.current, y: 30, delay: 0.12, duration: 0.7 },
      { el: subtitleRef.current, y: 20, delay: 0.28, duration: 0.6 },
    ]

    const tweens = acts
      .filter((act) => act.el)
      .map((act) =>
        gsap.fromTo(
          act.el,
          { opacity: 0, y: act.y },
          {
            opacity: 1,
            y: 0,
            duration: act.duration,
            delay: act.delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: act.el,
              start: 'top 88%',
              once: true,
            },
          },
        ),
      )

    return () => {
      tweens.forEach((tween) => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    }
  }, [])

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 max-w-2xl md:mb-12">
          <p ref={labelRef} className="section-label mb-4">
            Serviços
          </p>
          <h2
            ref={titleRef}
            className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl"
          >
            O que fazemos
          </h2>
          <p
            ref={subtitleRef}
            className="mt-4 text-base leading-relaxed text-muted md:text-lg"
          >
            Corte, coloração, mechas, tratamentos e bem-estar — com padrão ROM Concept. Valores
            variam conforme o serviço; a equipe confirma no agendamento.
          </p>
        </div>
      </div>

      <ServicesMarquee />

      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <ServicesGrid services={SERVICES} />
        <p className="mt-8 text-sm text-muted">
          Serviços exclusivos podem variar por unidade — consulte a equipe ao agendar.
        </p>
      </div>
    </section>
  )
}
