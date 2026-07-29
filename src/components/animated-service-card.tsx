'use client'

import { useEffect, useId, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ServiceItem } from '@/data/services'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedServiceCardProps extends ServiceItem {
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function AnimatedServiceCard({
  category,
  name,
  description,
  index,
  isOpen,
  onToggle,
}: AnimatedServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const panelId = useId()

  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const tween = gsap.fromTo(
      card,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: index * 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 88%',
          once: true,
        },
      },
    )

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
    }
  }, [index])

  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isOpen) {
      if (reduced) {
        panel.style.height = 'auto'
        panel.style.opacity = '1'
        return
      }
      gsap.fromTo(
        panel,
        { height: 0, opacity: 0 },
        {
          height: 'auto',
          opacity: 1,
          duration: 0.35,
          ease: 'power2.out',
        },
      )
      return
    }

    if (reduced) {
      panel.style.height = '0px'
      panel.style.opacity = '0'
      return
    }

    gsap.to(panel, {
      height: 0,
      opacity: 0,
      duration: 0.28,
      ease: 'power2.inOut',
    })
  }, [isOpen])

  return (
    <div
      ref={cardRef}
      className={`card-border group rounded-2xl transition-colors duration-300 ${
        isOpen ? 'border-gold/50 bg-gold/5' : 'hover:border-gold/40 hover:bg-gold/[0.03]'
      }`}
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <article className="min-w-0 flex-1">
          <p className="section-label mb-2 transition-colors group-hover:text-gold">{category}</p>
          <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-gold">
            {name}
          </h3>
        </article>
        <span
          className={`mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border/80 text-lg leading-none text-gold transition-transform duration-300 ${
            isOpen ? 'rotate-45 border-gold/50 bg-gold/10' : ''
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        id={panelId}
        ref={panelRef}
        className="overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  )
}

interface ServicesGridProps {
  services: ServiceItem[]
}

export function ServicesGrid({ services }: ServicesGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <AnimatedServiceCard
          key={service.name}
          {...service}
          index={index}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex((current) => (current === index ? null : index))}
        />
      ))}
    </div>
  )
}
