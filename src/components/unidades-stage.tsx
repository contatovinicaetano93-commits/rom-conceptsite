'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import Image from 'next/image'
import {
  AtSign,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from 'lucide-react'
import {
  mapUrl,
  salonWhatsappUrl,
  salons,
  type SalonUnit,
} from '@/lib/content'

const accentStyles = {
  brasil: {
    badge: 'border-brasil/40 bg-brasil/10 text-brasil',
    card: 'salon-card-brasil',
    dot: 'bg-brasil',
    chip: 'border-brasil/35 hover:border-brasil/60',
    text: 'text-brasil',
  },
  iguatemi: {
    badge: 'border-iguatemi/40 bg-iguatemi/10 text-iguatemi',
    card: 'salon-card-iguatemi',
    dot: 'bg-iguatemi',
    chip: 'border-iguatemi/35 hover:border-iguatemi/60',
    text: 'text-iguatemi',
  },
} as const

const DRAG_THRESHOLD = 56

function SalonCard({ salon }: { salon: SalonUnit }) {
  const styles = accentStyles[salon.accent]

  return (
    <article
      className={`card-border flex h-full flex-col overflow-hidden rounded-3xl ${styles.card}`}
    >
      <div className="relative mb-6 overflow-hidden">
        <Image
          src={salon.image}
          alt={salon.name}
          width={600}
          height={400}
          className="h-auto w-full object-cover"
          sizes="(max-width: 768px) 92vw, 45vw"
          draggable={false}
        />
      </div>
      <div className="flex flex-1 flex-col px-6 pb-6 md:px-7 md:pb-8">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] uppercase ${styles.badge}`}
            >
              {salon.shortName}
            </span>
            <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">{salon.name}</h3>
          </div>
          <span className={`mt-2 size-2.5 shrink-0 rounded-full ${styles.dot}`} aria-hidden />
        </div>

        <div className="mb-4 space-y-3 text-sm text-muted">
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
            <div>
              <p className="text-foreground/90">{salon.location}</p>
              <p>{salon.address}</p>
              {salon.floor ? <p>{salon.floor}</p> : null}
              <p>São Paulo — SP · CEP {salon.cep}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="size-4 shrink-0 text-gold" aria-hidden />
            <a href={`tel:${salon.phone.replace(/\D/g, '')}`} className="hover:text-gold">
              {salon.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <AtSign className="size-4 shrink-0 text-gold" aria-hidden />
            <a
              href={salon.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              @{salon.instagram.split('/').pop()}
            </a>
          </div>
        </div>

        <p className="copy mb-6">{salon.description}</p>

        <ul className="mb-8 space-y-3">
          {salon.highlights.map((item) => (
            <li key={item} className="copy copy--sm copy--bright flex items-start gap-2">
              <span className={`mt-2 size-1.5 shrink-0 rounded-full ${styles.dot}`} />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 sm:flex-row">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm uppercase"
            href={salonWhatsappUrl(salon)}
          >
            <MessageCircle className="size-4" aria-hidden />
            Agendar aqui
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
            href={mapUrl(salon.mapQuery)}
          >
            <Navigation className="size-4" aria-hidden />
            Como chegar
          </a>
        </div>

        <p className="mt-4 flex items-center gap-2 text-xs text-muted">
          <Clock className="size-3.5 shrink-0" aria-hidden />
          {salon.hours}
        </p>
      </div>
    </article>
  )
}

export function UnidadesStage() {
  const [active, setActive] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [dragX, setDragX] = useState(0)
  const startX = useRef(0)
  const pointerId = useRef<number | null>(null)
  const suppressClick = useRef(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setActive((i) => Math.min(salons.length - 1, i + 1))
      if (event.key === 'ArrowLeft') setActive((i) => Math.max(0, i - 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const finishDrag = (deltaX: number) => {
    if (Math.abs(deltaX) >= DRAG_THRESHOLD) {
      if (deltaX < 0) setActive((i) => Math.min(salons.length - 1, i + 1))
      else setActive((i) => Math.max(0, i - 1))
      suppressClick.current = true
    }
    setDragging(false)
    setDragX(0)
    pointerId.current = null
  }

  return (
    <div className="unidades-stage">
      <div className="unidades-stage__tabs" role="tablist" aria-label="Escolher unidade">
        {salons.map((salon, index) => {
          const styles = accentStyles[salon.accent]
          const selected = index === active
          return (
            <button
              key={salon.id}
              type="button"
              role="tab"
              aria-selected={selected}
              className={`unidades-stage__tab ${selected ? 'is-active' : ''} ${styles.chip}`}
              onClick={() => setActive(index)}
            >
              <span className={`unidades-stage__tab-dot ${styles.dot}`} aria-hidden />
              {salon.shortName}
            </button>
          )
        })}
      </div>

      <div
        className={`unidades-stage__viewport${dragging ? ' is-dragging' : ''}`}
        onPointerDown={(event) => {
          if (event.button !== 0) return
          const target = event.target as HTMLElement
          if (target.closest('a, button')) return
          pointerId.current = event.pointerId
          startX.current = event.clientX
          setDragging(true)
          setDragX(0)
          event.currentTarget.setPointerCapture(event.pointerId)
        }}
        onPointerMove={(event) => {
          if (pointerId.current !== event.pointerId) return
          setDragX(event.clientX - startX.current)
        }}
        onPointerUp={(event) => {
          if (pointerId.current !== event.pointerId) return
          finishDrag(event.clientX - startX.current)
        }}
        onPointerCancel={() => {
          setDragging(false)
          setDragX(0)
          pointerId.current = null
        }}
        onClickCapture={(event) => {
          if (!suppressClick.current) return
          event.preventDefault()
          event.stopPropagation()
          suppressClick.current = false
        }}
      >
        <div className="unidades-stage__deck">
          {salons.map((salon, index) => {
            const isActive = index === active
            const sideClass = index === 0 ? 'is-left' : 'is-right'
            const style =
              isActive && dragX !== 0
                ? ({
                    '--drag-x': `${dragX * 0.2}px`,
                    '--drag-rot': `${dragX * -0.02}deg`,
                  } as CSSProperties)
                : undefined

            return (
              <div
                key={salon.id}
                className={`unidades-stage__card ${sideClass} ${isActive ? 'is-active' : 'is-idle'}`}
                style={style}
                onClick={() => {
                  if (!isActive) setActive(index)
                }}
              >
                <SalonCard salon={salon} />
              </div>
            )
          })}
        </div>
      </div>

      <p className="unidades-stage__hint">Arraste ou escolha a unidade · {active + 1}/2</p>
    </div>
  )
}
