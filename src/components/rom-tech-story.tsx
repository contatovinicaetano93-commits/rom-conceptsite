'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { HERO_IMAGES } from '@/lib/content'

type Caption = {
  label: string
  title: string
  body: string
}

const CAPTIONS: Caption[] = [
  {
    label: 'O salão',
    title: 'Por fora, o oásis.',
    body: 'Arquitetura, luz e escala Guinness — o primeiro olhar do #SeuMomentoROM.',
  },
  {
    label: 'Por dentro',
    title: 'Entramos na operação.',
    body: 'Estações, espelhos e fluxo — cada metro² pensado para experiência e precisão.',
  },
  {
    label: 'Método',
    title: 'A tecnologia ROM.',
    body: 'Engenharia de cor, corte e processo — o que o olho não vê, o resultado entrega.',
  },
  {
    label: 'Essência',
    title: '#SeuMomentoROM',
    body: 'Do salão à cadeira: a mesma ciência, o mesmo padrão, em cada detalhe.',
  },
]

function clamp01(n: number) {
  return Math.min(1, Math.max(0, n))
}

function rangeProgress(progress: number, start: number, end: number) {
  if (end <= start) return progress >= end ? 1 : 0
  return clamp01((progress - start) / (end - start))
}

function captionIndex(progress: number) {
  if (progress < 0.22) return 0
  if (progress < 0.48) return 1
  if (progress < 0.74) return 2
  return 3
}

export function RomTechStory() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setReduced(prefersReduced)
    if (prefersReduced) {
      setProgress(1)
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
      setProgress(scrolled / total)
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

  const p = reduced ? 1 : progress
  const cap = CAPTIONS[captionIndex(p)]

  const exteriorScale = 1 + rangeProgress(p, 0, 0.45) * 0.28
  const exteriorOpacity = 1 - rangeProgress(p, 0.28, 0.55) * 0.35
  const interiorReveal = rangeProgress(p, 0.18, 0.55)
  const detailReveal = rangeProgress(p, 0.42, 0.78)
  const techReveal = rangeProgress(p, 0.58, 0.95)
  const frameGlow = 0.25 + techReveal * 0.55

  const exteriorStyle = {
    opacity: exteriorOpacity,
    transform: `scale(${exteriorScale})`,
  }
  const interiorStyle = {
    opacity: 0.25 + interiorReveal * 0.75,
    clipPath: `inset(${(1 - interiorReveal) * 42}% ${(1 - interiorReveal) * 18}% ${
      (1 - interiorReveal) * 18
    }% ${(1 - interiorReveal) * 18}% round 2rem)`,
    transform: `scale(${0.92 + interiorReveal * 0.08})`,
  }
  const detailStyle = {
    opacity: detailReveal,
    clipPath: `circle(${detailReveal * 72}% at 50% 48%)`,
    transform: `scale(${1.08 - detailReveal * 0.08})`,
  }

  return (
    <section id="tecnologia" className="bg-background">
      <div ref={trackRef} className="rom-tech">
        <div className="rom-tech__sticky">
          <div
            className="rom-tech__glow"
            style={{ opacity: frameGlow }}
            aria-hidden
          />

          <div className="rom-tech__stage">
            <div className="rom-tech__layer rom-tech__layer--exterior" style={exteriorStyle}>
              <Image
                src={HERO_IMAGES[0].src}
                alt={HERO_IMAGES[0].alt}
                fill
                priority={false}
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="rom-tech__layer rom-tech__layer--interior" style={interiorStyle}>
              <Image
                src={HERO_IMAGES[2].src}
                alt={HERO_IMAGES[2].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div className="rom-tech__layer rom-tech__layer--detail" style={detailStyle}>
              <Image
                src={HERO_IMAGES[1].src}
                alt={HERO_IMAGES[1].alt}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            <div
              className="rom-tech__tech"
              style={{ opacity: techReveal }}
              aria-hidden
            >
              <div className="rom-tech__tech-grid" />
              <div className="rom-tech__tech-ring" />
              <div className="rom-tech__tech-ring rom-tech__tech-ring--inner" />
              <ul className="rom-tech__tech-points">
                <li>Engenharia de cor</li>
                <li>Fluxo de estações</li>
                <li>Padrão Guinness</li>
              </ul>
            </div>

            <div className="rom-tech__vignette" aria-hidden />
          </div>

          <div className="rom-tech__copy">
            <p className="section-label mb-3">{cap.label}</p>
            <h2 className="font-serif text-3xl leading-tight font-normal tracking-[-0.02em] text-foreground md:text-5xl">
              {cap.title}
            </h2>
            <p className="copy mt-4 max-w-xl">{cap.body}</p>
          </div>

          <div className="text-story__progress" aria-hidden>
            <div
              className="text-story__progress-bar"
              style={{ width: `${Math.min(100, p * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
