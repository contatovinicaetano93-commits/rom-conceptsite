import type { CSSProperties } from 'react'
import Image from 'next/image'
import { MessageCircle, Play } from 'lucide-react'
import { HeroStory } from '@/components/hero-story'
import { MusicPlayer } from '@/components/music-player'
import { ScrollProgress } from '@/components/scroll-progress'
import { MomentoMarquee } from '@/components/momento-marquee'
import { ScrollArrowLine } from '@/components/scroll-arrow-line'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ServicesMarquee } from '@/components/services-marquee'
import { SideGuide } from '@/components/side-guide'
import { SiteIntro } from '@/components/site-intro'
import { StatsOrbit } from '@/components/stats-orbit'
import { UnidadesStage } from '@/components/unidades-stage'
import { brand } from '@/lib/content'

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
        <HeroStory />

        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div
            data-reveal="soft"
            className="my-8 h-px origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
          />
        </div>

        <section className="border-y border-border bg-surface/50 py-14 md:py-16">
          <div className="mx-auto max-w-5xl px-5 md:px-8">
            <StatsOrbit />
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

            <UnidadesStage />
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
