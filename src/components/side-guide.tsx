'use client'

import { useEffect, useState } from 'react'

type SectionId = 'inicio' | 'unidades' | 'servicos' | 'conceito' | 'romeu' | 'galeria'

const SECTIONS: { id: SectionId; label: string }[] = [
  { id: 'inicio', label: 'Início' },
  { id: 'unidades', label: 'Unidades' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'conceito', label: 'Conceito' },
  { id: 'romeu', label: 'Romeu' },
  { id: 'galeria', label: 'Galeria' },
]

export function SideGuide() {
  const [activeId, setActiveId] = useState<SectionId>('inicio')

  useEffect(() => {
    const elements = SECTIONS.map((section) => document.getElementById(section.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    )
    if (elements.length === 0) return

    const isSectionId = (id: string): id is SectionId =>
      SECTIONS.some((section) => section.id === id)

    const pickActive = () => {
      const midpoint = window.innerHeight * 0.35
      let current: SectionId = 'inicio'
      for (const el of elements) {
        if (el.getBoundingClientRect().top - midpoint <= 0 && isSectionId(el.id)) {
          current = el.id
        }
      }
      setActiveId(current)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const id = visible[0]?.target.id
        if (id && isSectionId(id)) {
          setActiveId(id)
          return
        }

        pickActive()
      },
      {
        threshold: [0.15, 0.35, 0.55],
        rootMargin: '-20% 0px -45% 0px',
      },
    )

    for (const el of elements) observer.observe(el)

    const onScroll = () => {
      pickActive()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setActiveId(id)
  }

  return (
    <nav className="side-guide" aria-label="Navegação da página">
      <ul className="side-guide__list">
        {SECTIONS.map((section) => {
          const active = section.id === activeId
          return (
            <li key={section.id}>
              <button
                type="button"
                className={`side-guide__item${active ? ' is-active' : ''}`}
                aria-current={active ? 'true' : undefined}
                onClick={() => scrollTo(section.id)}
              >
                <span className="side-guide__label">{section.label}</span>
                <span className="side-guide__dot" aria-hidden />
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
