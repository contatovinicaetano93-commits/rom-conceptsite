import type { CSSProperties } from 'react'
import Image from 'next/image'
import {
  AtSign,
  Award,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Play,
} from 'lucide-react'
import { CountUp } from '@/components/count-up'
import { HeroCarousel } from '@/components/hero-carousel'
import { MusicPlayer } from '@/components/music-player'
import { ScrollProgress } from '@/components/scroll-progress'
import { MomentoMarquee } from '@/components/momento-marquee'
import { ScrollArrowLine } from '@/components/scroll-arrow-line'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ServicesMarquee } from '@/components/services-marquee'
import { SideGuide } from '@/components/side-guide'
import { SiteIntro } from '@/components/site-intro'
import {
  brand,
  mapUrl,
  salonWhatsappUrl,
  salons,
  stats,
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

export default function Home() {
  return (
    <>
      <SiteIntro />
      <ScrollReveal />
      <ScrollProgress />
      <SideGuide />

      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a className="group flex flex-col" href="/">
            <span className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">
              ROM
            </span>
            <span className="font-serif text-xl leading-none text-foreground transition-colors group-hover:text-gold-strong md:text-2xl">
              Concept
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#unidades" className="text-sm text-muted transition-colors hover:text-foreground">
              Unidades
            </a>
            <a href="#servicos" className="text-sm text-muted transition-colors hover:text-foreground">
              Serviços
            </a>
            <a href="#conceito" className="text-sm text-muted transition-colors hover:text-foreground">
              Conceito
            </a>
            <a href="#galeria" className="text-sm text-muted transition-colors hover:text-foreground">
              Galeria
            </a>
          </nav>
          <a
            className="cta-primary hidden items-center justify-center gap-2 rounded-full px-6 py-3 text-sm tracking-wide md:inline-flex"
            href="#unidades"
          >
            <MessageCircle className="size-4" aria-hidden />
            Agendar #SeuMomentoROM
          </a>
          <a href="#unidades" className="cta-primary rounded-full px-4 py-2 text-xs md:hidden">
            Agendar
          </a>
        </div>
      </header>

      <main>
        <section
          id="inicio"
          className="relative min-h-[88vh] overflow-hidden pt-36 pb-16 md:min-h-[92vh] md:pt-44 md:pb-24"
        >
          <HeroCarousel />
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/68 to-background/95"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,color-mix(in_srgb,var(--gold)_12%,transparent),transparent_70%)]"
            aria-hidden
          />

          <div className="absolute top-1/2 left-4 z-10 hidden -translate-y-1/2 md:block lg:left-7">
            <div className="flex -rotate-90 items-center gap-2 whitespace-nowrap text-[0.65rem] font-semibold tracking-[0.4em] text-gold/80 uppercase">
              <Award className="size-3.5 shrink-0" aria-hidden />
              Guinness World Records · maior salão de beleza do mundo
            </div>
          </div>

          <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="animate-fade-up-1">
                <p className="section-label mb-4 md:hidden">
                  Guinness World Records · maior salão de beleza do mundo
                </p>
                <p className="font-serif text-lg text-foreground/90 italic md:text-xl">
                  ROM, o poder de transformar.
                </p>
              </div>
              <h1 className="font-display animate-fade-up-2 mt-4 text-4xl leading-[1.08] font-light tracking-tight md:text-6xl lg:text-[4.25rem]">
                <span className="gold-text">Dois salões. Um conceito.</span>
              </h1>
              <div className="animate-fade-up-3">
                <p className="mx-auto mt-5 max-w-xl text-pretty text-balance text-base font-medium leading-relaxed text-foreground md:text-xl">
                  Beleza, saúde e bem-estar em um oásis de sofisticação — mais de 300 cadeiras entre
                  Av. Brasil e Shopping Iguatemi.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-foreground/90">
                  <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/55 px-4 py-2 backdrop-blur-sm">
                    <MapPin className="size-4 text-gold" aria-hidden />
                    <span>Av. Brasil · Iguatemi</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border/80 bg-background/55 px-4 py-2 backdrop-blur-sm">
                    <Clock className="size-4 text-gold" aria-hidden />
                    <span>Horários por unidade</span>
                  </div>
                </div>
                <div className="mt-10">
                  <p className="font-serif text-xl text-foreground md:text-2xl">
                    Agende seu <span className="text-gold-strong">#SeuMomentoROM</span>
                  </p>
                  <p className="mx-auto mt-3 inline-block rounded-full border border-border/80 bg-background/70 px-4 py-1.5 text-sm text-foreground/90 backdrop-blur-sm">
                    Escolha a unidade mais conveniente para você.
                  </p>
                  <div className="mx-auto mt-6 grid max-w-lg gap-3 sm:grid-cols-2">
                    {salons.map((salon) => {
                      const styles = accentStyles[salon.accent]
                      return (
                        <a
                          key={salon.id}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group rounded-2xl border bg-background/60 p-4 text-left backdrop-blur-sm transition hover:bg-background/75 ${styles.chip}`}
                          href={salonWhatsappUrl(salon)}
                        >
                          <span
                            className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase ${styles.text}`}
                          >
                            {salon.accent === 'brasil' ? 'Jardins' : 'Iguatemi'}
                          </span>
                          <span className="mt-1 block font-serif text-lg text-foreground group-hover:text-gold-strong">
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
                    className="mt-5 inline-block text-sm text-muted transition hover:text-gold"
                  >
                    Ver endereços completos e serviços →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div
            data-reveal="soft"
            className="my-8 h-px origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        <section className="border-y border-border bg-surface/50 py-14 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-x-6 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                data-reveal
                style={{ '--reveal-delay': index * 90 } as CSSProperties}
                className="flex flex-col items-center text-center"
              >
                <div className="medallion-ring flex size-28 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card/60 p-3 md:size-32">
                  <p className="font-serif text-lg leading-[1.15] text-gold-strong md:text-xl">
                    <CountUp value={stat.value} />
                  </p>
                </div>
                <p className="mt-4 max-w-[11rem] text-xs leading-relaxed text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="unidades" className="bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div data-reveal="lift" className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Onde estamos</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                Duas unidades em São Paulo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Escolha a unidade mais conveniente e agende #SeuMomentoROM pelo WhatsApp. A equipe
                confirma horário e serviço com você.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {salons.map((salon, index) => {
                const styles = accentStyles[salon.accent]
                return (
                  <div
                    key={salon.id}
                    data-reveal
                    style={{ '--reveal-delay': index * 120 } as CSSProperties}
                    className={`card-border flex h-full flex-col overflow-hidden rounded-3xl ${styles.card}`}
                  >
                    <article>
                      <div className="relative mb-6 -mx-0 overflow-hidden">
                        <Image
                          src={salon.image}
                          alt={salon.name}
                          width={600}
                          height={400}
                          className="h-auto w-full object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="px-6 pb-6 md:px-8 md:pb-8">
                        <div className="mb-4 flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] uppercase ${styles.badge}`}
                            >
                              {salon.shortName}
                            </span>
                            <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                              {salon.name}
                            </h3>
                          </div>
                          <span
                            className={`mt-2 size-2.5 shrink-0 rounded-full ${styles.dot}`}
                            aria-hidden
                          />
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
                            <a
                              href={`tel:${salon.phone.replace(/\D/g, '')}`}
                              className="hover:text-gold"
                            >
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

                        <p className="mb-6 text-base leading-relaxed text-muted">{salon.description}</p>

                        <ul className="mb-8 space-y-2">
                          {salon.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/90"
                            >
                              <span
                                className={`mt-1.5 size-1.5 shrink-0 rounded-full ${styles.dot}`}
                              />
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
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div data-reveal="lift" className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Serviços</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                O que fazemos
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Corte, coloração, mechas, tratamentos e bem-estar — com padrão ROM Concept. Valores
                variam conforme o serviço; a equipe confirma no agendamento.
              </p>
            </div>
          </div>
          <div className="mt-2">
            <ServicesMarquee />
          </div>
          <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
            <p data-reveal="soft" className="text-sm text-muted">
              Serviços exclusivos podem variar por unidade — consulte a equipe ao agendar.
            </p>
          </div>
        </section>

        <section id="conceito" className="relative overflow-hidden bg-surface/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div data-reveal="lift" className="mb-12 max-w-2xl">
              <p className="section-label mb-4">O conceito</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                O Conceito
              </h2>
            </div>
            <div data-reveal className="mb-12">
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                {brand.promise}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">{brand.manifesto}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--gold)_6%,transparent),transparent_70%)]" />
            <div className="relative z-10 grid items-start gap-4 md:grid-cols-3">
              {[
                { label: 'Visão', value: brand.vision },
                { label: 'Fundador', value: brand.founder },
                { label: 'Parceiros', value: brand.partners.join(' · ') },
              ].map((item, index) => (
                <article
                  key={item.label}
                  data-reveal
                  style={{ '--reveal-delay': index * 100 } as CSSProperties}
                  className="card-border card-glow rounded-2xl p-6"
                >
                  <p className="section-label mb-3">{item.label}</p>
                  <p className="text-base leading-relaxed text-foreground/90 md:text-lg">{item.value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ScrollArrowLine />

        <section id="romeu" className="relative overflow-hidden bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div data-reveal="lift" className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Quem conduz</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                Romeu Felipe
              </h2>
            </div>
            <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr]">
              <div
                data-reveal
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-border"
              >
                <video
                  src="/video/romeu-concept-loop.mp4"
                  poster="/video/romeu-concept-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 size-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
                  <span className="flex size-14 items-center justify-center rounded-full border border-gold/50 bg-background/70 text-gold backdrop-blur-sm transition group-hover:scale-105 group-hover:border-gold group-hover:bg-gold/10">
                    <Play className="size-6 fill-current pl-0.5" aria-hidden />
                  </span>
                </div>
              </div>

              <div
                data-reveal
                style={{ '--reveal-delay': 120 } as CSSProperties}
                className="relative min-h-[28rem] overflow-hidden rounded-3xl"
              >
                <Image
                  src="/images/romeu-portrait.jpg"
                  alt="Romeu Felipe"
                  fill
                  className="object-cover object-top opacity-40"
                  sizes="(max-width: 768px) 100vw, 700px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/75 to-surface/35" />
                <div className="relative z-10 p-6 md:p-10">
                  <p className="section-label mb-3">
                    Co-fundador ROM Concept · Educador Wella · Guinness World Records
                  </p>
                  <p className="text-base leading-relaxed text-muted md:text-lg">
                    Iniciou como educador Wella e se tornou referência mundial em coloração e mechas
                    criativas. Co-fundou o ROM Concept em 2019 — hoje o maior salão de beleza do
                    mundo. Atende celebridades como Yasmin Brunet, Mariana Rios, Juliette e Ticiane
                    Pinheiro.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {[
                      { value: '2024', label: 'Guinness' },
                      { value: '5.800 m²', label: 'ROM Concept' },
                      { value: 'Educador', label: 'Wella' },
                    ].map((item, index) => (
                      <div
                        key={item.label}
                        data-reveal="soft"
                        style={{ '--reveal-delay': 180 + index * 80 } as CSSProperties}
                        className="rounded-xl border border-border bg-card/50 p-4"
                      >
                        <p className="font-serif text-2xl text-gold-strong">{item.value}</p>
                        <p className="mt-1 text-xs text-muted">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MomentoMarquee />

        <section
          id="galeria"
          className="relative overflow-hidden border-t border-border bg-surface/50 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div data-reveal="lift" className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Galeria</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                <span className="gold-text">ROM Concept</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Do editorial à cadeira da cliente — a paleta e o método que Romeu Felipe desenvolveu
                para cabelo brasileiro.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div
                data-reveal
                className="relative aspect-square overflow-hidden rounded-2xl sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]"
              >
                <Image
                  src="/video/gallery-1-poster.jpg"
                  alt="Styling ao vivo — ROM Concept"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                data-reveal
                style={{ '--reveal-delay': 80 } as CSSProperties}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src="/images/romeu-galeria-pinterest.jpg"
                  alt="Romeu Felipe com cliente — parceria Wella"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div
                data-reveal
                style={{ '--reveal-delay': 140 } as CSSProperties}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <Image
                  src="/video/gallery-2-poster.jpg"
                  alt="Fachada da unidade Av. Brasil — ROM Concept"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div
                data-reveal
                style={{ '--reveal-delay': 200 } as CSSProperties}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:col-start-4"
              >
                <Image
                  src="/video/gallery-3-poster.jpg"
                  alt="Resultado de coloração — ROM Concept"
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div data-reveal className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">
                ROM Concept
              </p>
              <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
                Dois salões. Um conceito.
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{brand.promise}</p>
              <p className="mt-4 text-xs text-muted">{brand.partners.join(' · ')}</p>
              <div className="mt-4 space-y-1 text-sm text-muted">
                <p>
                  <a href="mailto:contato@romconcept.com.br" className="transition hover:text-gold">
                    contato@romconcept.com.br
                  </a>
                </p>
                <p>Brasil: (11) 2892-0096</p>
                <p>Iguatemi: (11) 3815-0920</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm tracking-wide md:text-base"
                href="https://wa.me/5511993021379?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20no%20ROM%20Concept."
              >
                <MessageCircle className="size-4" aria-hidden />
                Agendar #SeuMomentoROM
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                href="https://wa.me/5511993021379?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20no%20ROM%20Concept."
              >
                <MessageCircle className="size-4" aria-hidden />
                Tirar dúvidas no WhatsApp
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm text-muted transition hover:text-gold"
                href="https://romconcept.com.br"
              >
                romconcept.com.br →
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} ROM Concept. Todos os direitos reservados.</p>
            <p>Guinness World Records · Fundado em 2019</p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur-xl md:hidden">
        <a
          className="cta-primary flex w-full items-center justify-center rounded-full px-4 py-3 text-sm tracking-wide"
          href="#unidades"
        >
          Agende seu #SeuMomentoROM
        </a>
      </div>

      <MusicPlayer />
    </>
  )
}
