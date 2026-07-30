'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { HERO_IMAGES } from '@/lib/content'

const INTERVAL_MS = 5200

export function HeroCarousel() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % HERO_IMAGES.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="hero-parallax absolute inset-0" aria-hidden>
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            index === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  )
}
