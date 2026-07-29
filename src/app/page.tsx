import Image from 'next/image'
import { MapPin, MessageCircle, Clock } from 'lucide-react'
import { MusicPlayer } from '@/components/music-player'
import { ServicesSection } from '@/components/services-section'

const HERO_IMAGE =
  'https://twoarquitetura.com.br/wp-content/uploads/2023/12/T222227.jpg'

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-md">
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
        <section className="relative min-h-[88vh] overflow-hidden pt-36 pb-16 md:min-h-[92vh] md:pt-44 md:pb-24">
          <div className="absolute inset-0" aria-hidden>
            <Image
              src={HERO_IMAGE}
              alt="Vista ampla do salão — ROM Concept Jardins"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/68 to-background/95"
            aria-hidden
          />
          <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="animate-fade-up-1">
                <p className="font-serif text-lg text-foreground/90 italic md:text-xl">
                  ROM, o poder de transformar.
                </p>
              </div>
              <h1 className="font-display animate-fade-up-2 mt-4 text-4xl leading-[1.08] font-light tracking-tight md:text-6xl lg:text-[4.25rem]">
                <span className="gold-text">Dois salões. Um conceito.</span>
              </h1>
              <div className="animate-fade-up-3">
                <p className="mx-auto mt-5 max-w-xl text-pretty text-balance text-base font-medium leading-relaxed text-foreground md:text-xl">
                  Beleza, saúde e bem-estar em um oásis de sofisticação — mais de 300 cadeiras entre Av.
                  Brasil e Shopping Iguatemi.
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
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-brasil/35 bg-background/60 p-4 text-left backdrop-blur-sm transition hover:border-brasil/60 hover:bg-background/75"
                      href="https://wa.me/5511993021379?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20na%20unidade%20Av.%20Brasil."
                    >
                      <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-brasil uppercase">
                        Jardins
                      </span>
                      <span className="mt-1 block font-serif text-lg text-foreground group-hover:text-gold-strong">
                        Av. Brasil, 126
                      </span>
                      <span className="mt-1 block text-xs text-muted">Ter–sáb · 9h–21h</span>
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-iguatemi/35 bg-background/60 p-4 text-left backdrop-blur-sm transition hover:border-iguatemi/60 hover:bg-background/75"
                      href="https://wa.me/5511988600188?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20na%20unidade%20Iguatemi."
                    >
                      <span className="text-[0.65rem] font-semibold tracking-[0.2em] text-iguatemi uppercase">
                        Iguatemi
                      </span>
                      <span className="mt-1 block font-serif text-lg text-foreground group-hover:text-gold-strong">
                        Faria Lima, 2232
                      </span>
                      <span className="mt-1 block text-xs text-muted">Seg–sáb · 10h–22h</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-surface/50 py-14 md:py-16">
          <div className="mx-auto grid max-w-5xl gap-x-6 gap-y-10 px-5 sm:grid-cols-2 md:grid-cols-4 md:px-8">
            {[
              { value: 'Guinness', label: 'Maior salão de beleza do mundo · 2024' },
              { value: '337 cadeiras', label: '227 na Av. Brasil + 110 no Iguatemi' },
              { value: '5.800 m²', label: '4.000 m² Av. Brasil + 1.800 m² Iguatemi' },
              { value: '2', label: 'Unidades · Jardins e Shopping Iguatemi' },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="medallion-ring flex size-28 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-card/60 p-3 md:size-32">
                  <p className="font-serif text-lg leading-[1.15] text-gold-strong md:text-xl">
                    {item.value}
                  </p>
                </div>
                <p className="mt-4 max-w-[11rem] text-xs leading-relaxed text-muted">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="unidades" className="bg-surface/30 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Onde estamos</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
                Duas unidades em São Paulo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                Escolha a unidade mais conveniente e agende #SeuMomentoROM pelo WhatsApp.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <article className="card-border salon-card-brasil flex h-full flex-col overflow-hidden rounded-3xl p-6 md:p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-brasil/40 bg-brasil/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-brasil uppercase">
                  Brasil
                </span>
                <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                  ROM Concept · Av. Brasil
                </h3>
                <p className="mt-4 text-sm text-muted">Av. Brasil, 126 — Jardim Paulista</p>
                <p className="mt-2 text-sm text-muted">Terça a sábado · 9h às 21h</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm uppercase"
                  href="https://wa.me/5511993021379?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20na%20unidade%20Av.%20Brasil."
                >
                  Agendar aqui
                </a>
              </article>
              <article className="card-border salon-card-iguatemi flex h-full flex-col overflow-hidden rounded-3xl p-6 md:p-8">
                <span className="inline-flex w-fit items-center rounded-full border border-iguatemi/40 bg-iguatemi/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-iguatemi uppercase">
                  Iguatemi
                </span>
                <h3 className="mt-4 font-serif text-2xl text-foreground md:text-3xl">
                  ROM Concept · Iguatemi
                </h3>
                <p className="mt-4 text-sm text-muted">Av. Brigadeiro Faria Lima, 2232 · 9º andar</p>
                <p className="mt-2 text-sm text-muted">Seg–sáb 10h–22h · dom e feriados 12h–20h</p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-primary mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm uppercase"
                  href="https://wa.me/5511988600188?text=Ol%C3%A1!%20Quero%20agendar%20%23SeuMomentoROM%20na%20unidade%20Iguatemi."
                >
                  Agendar aqui
                </a>
              </article>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section id="conceito" className="relative overflow-hidden bg-surface/40 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="section-label mb-4">O conceito</p>
            <h2 className="font-serif text-3xl leading-tight font-light tracking-tight text-foreground md:text-5xl">
              Beleza não é tendência de feed. É engenharia de cor, corte e experiência — com padrão
              Guinness em cada detalhe.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
              Fundado em 2019 por Romeu Felipe e Henrique Rocha, o ROM Concept é o maior salão de
              beleza do mundo pelo Guinness World Records.
            </p>
          </div>
        </section>

        <section id="galeria" className="border-t border-border bg-surface/50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="section-label mb-4">Galeria</p>
              <h2 className="font-serif text-3xl leading-tight font-light tracking-tight md:text-5xl">
                <span className="gold-text">ROM Concept</span>
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                '/video/gallery-1-poster.jpg',
                '/images/romeu-galeria-pinterest.jpg',
                '/video/gallery-2-poster.jpg',
              ].map((src) => (
                <div key={src} className="relative aspect-video overflow-hidden rounded-2xl">
                  <Image src={src} alt="ROM Concept" fill className="object-cover" sizes="33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface/50">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.65rem] font-semibold tracking-[0.28em] text-gold uppercase">
            ROM Concept
          </p>
          <h2 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">
            Dois salões. Um conceito.
          </h2>
          <p className="mt-8 text-xs text-muted">© {new Date().getFullYear()} ROM Concept.</p>
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
