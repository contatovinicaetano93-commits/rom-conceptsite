'use client'

import { SERVICE_MARQUEE_ITEMS } from '@/data/services'

export function ServicesMarquee() {
  const loop = [...SERVICE_MARQUEE_ITEMS, ...SERVICE_MARQUEE_ITEMS, ...SERVICE_MARQUEE_ITEMS]

  return (
    <div
      className="relative mb-10 overflow-hidden border-y border-border/70 py-4"
      aria-hidden="true"
    >
      <style>{`
        @keyframes rom-services-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        .rom-services-marquee-track {
          will-change: transform;
          animation: 42s linear infinite rom-services-marquee;
        }
        @media (prefers-reduced-motion: reduce) {
          .rom-services-marquee-track { animation: none; }
        }
      `}</style>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />
      <div className="rom-services-marquee-track flex w-max items-center gap-8 md:gap-12">
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-8 whitespace-nowrap text-[0.7rem] font-semibold tracking-[0.22em] text-muted uppercase md:gap-12 md:text-xs"
          >
            {item}
            <span className="text-gold/70" aria-hidden>
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
