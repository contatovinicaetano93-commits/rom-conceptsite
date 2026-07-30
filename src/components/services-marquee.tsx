'use client'

import { services } from '@/lib/content'

export function ServicesMarquee() {
  const loop = [...services, ...services]

  return (
    <>
      <div
        data-reveal
        className="services-grid mx-auto max-w-6xl px-5"
        aria-label="Serviços em destaque"
      >
        {services.map((service) => (
          <article key={service.name} className="card-border card-glow services-grid__card">
            <p className="section-label mb-2">{service.category}</p>
            <h3 className="text-base font-medium text-foreground">{service.name}</h3>
          </article>
        ))}
      </div>

      <div data-reveal className="services-marquee" aria-label="Serviços em destaque">
        <div className="services-marquee__track">
          {loop.map((service, index) => (
            <article
              key={`${service.name}-${index}`}
              className="card-border card-glow services-marquee__card"
              aria-hidden={index >= services.length ? true : undefined}
            >
              <p className="section-label mb-2">{service.category}</p>
              <h3 className="text-base font-medium text-foreground md:text-lg">{service.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
