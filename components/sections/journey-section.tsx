'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const milestones = [
  {
    year: '2026',
    badge: 'MARCO',
    title: 'Fundação da KZR Studios',
    description: 'Fundação oficial da KZR Studios junto com Mariana e Zensh — um estúdio criativo focado em desenvolvimento web e design digital de alta qualidade.',
  },
  {
    year: '2025',
    badge: 'MARCO',
    title: 'Primeiros Clientes & IA Integrada',
    description: 'Chegada dos primeiros clientes oficiais e adoção de IA como auxílio em projetos, acelerando entregas e expandindo as possibilidades criativas.',
  },
  {
    year: '2023',
    badge: null,
    title: 'Primeiros Projetos',
    description: 'Desenvolvimento dos primeiros projetos web — ainda sem visibilidade pública, mas onde as bases do estilo e da qualidade foram construídas.',
  },
]

export function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.journey-header', { opacity: 0, y: 30 })
      gsap.set('.journey-line-fill', { scaleY: 0, transformOrigin: 'top center' })

      // Header
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }).to('.journey-header', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })

      // Linha da timeline cresce com o scroll (rasga a tela)
      gsap.to('.journey-line-fill', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey-line-track',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.8,
        },
      })

      // Itens entram quando a linha chega neles
      gsap.utils.toArray<HTMLElement>('.journey-item').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      className="py-24 md:py-32 relative"
      aria-label="Trajetória e experiência"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="journey-header will-change-transform">
          <span className="text-sm font-medium text-primary tracking-widest">TRAJETÓRIA</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Minha <span className="text-primary">Jornada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">Os marcos que nos trouxeram até aqui.</p>
        </div>

        <div className="relative journey-line-track">
          {/* Linha base */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />
          {/* Linha animada que cresce */}
          <div className="journey-line-fill absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary will-change-transform" />

          <div className="space-y-8">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="journey-item relative pl-12 md:pl-20 will-change-transform"
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary glow-primary" />

                <div className="p-6 rounded-2xl glass">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                    {milestone.badge && (
                      <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                        {milestone.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
