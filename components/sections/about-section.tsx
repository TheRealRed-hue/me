'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMobile } from '@/hooks/use-reduced-motion'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '3+', label: 'Anos de experiência' },
  { value: '20+', label: 'Projetos entregues' },
  { value: '100%', label: 'Comprometimento' },
]

const skills = [
  'Desenvolvimento Web',
  'UI/UX Design',
  'Branding',
  'Logo Design',
  'Motion Design',
  'Experiências Digitais',
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mobile = isMobile()

      gsap.set('.about-label', { opacity: 0, x: -30 })
      gsap.set('.about-title', { opacity: 0, y: 40, scale: 0.97 })
      gsap.set('.about-text', { opacity: 0, y: 30 })
      gsap.set('.about-stat', { opacity: 0, y: 20, scale: 0.9 })
      gsap.set('.about-skill', { opacity: 0, y: 15 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 25%',
          toggleActions: 'play none none reverse',
        },
      })

      tl.to('.about-label', { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' })
        .to('.about-title', { opacity: 1, y: 0, scale: 1, duration: 0.9, ease: 'power3.out' }, '-=0.3')
        .to('.about-text', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12 }, '-=0.5')
        .to('.about-stat', { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'back.out(1.4)', stagger: 0.1 }, '-=0.4')
        .to('.about-skill', { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', stagger: 0.06 }, '-=0.3')

      // Dolly in — conteúdo avança enquanto entra na view (apenas desktop)
      if (!mobile) {
        gsap.fromTo('.about-content',
          { z: -60 },
          {
            z: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top center',
              scrub: 1.2,
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 md:py-32 relative"
      style={{ perspective: '1200px' }}
      aria-label="Sobre a KZR Studios"
    >
      <div className="about-content mx-auto max-w-7xl px-6 will-change-transform">
        <span className="about-label block text-sm font-medium text-primary tracking-widest mb-4 will-change-transform">
          SOBRE
        </span>

        <h2 className="about-title text-3xl md:text-5xl font-bold mt-4 mb-12 text-balance will-change-transform">
          Criando experiências digitais
          <span className="text-primary"> memoráveis</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="about-stat glass rounded-xl p-6 text-center will-change-transform">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="about-text text-muted-foreground leading-relaxed will-change-transform">
              Olá, sou <span className="text-foreground font-medium">Red</span>, co-fundador da{' '}
              <span className="text-primary font-medium">KZR Studios</span> — criada em 2026 ao lado de{' '}
              <span className="text-foreground font-medium">Mariana</span> e{' '}
              <span className="text-foreground font-medium">Zensh</span>. Sou um desenvolvedor front-end e designer
              digital apaixonado por criar interfaces elegantes e experiências imersivas.
            </p>
            <p className="about-text text-muted-foreground leading-relaxed will-change-transform">
              Minha jornada começou em 2023 com os primeiros projetos web. Em 2025 passei a integrar IA como
              auxílio criativo, elevando a qualidade e velocidade das entregas. Hoje foco em desenvolvimento
              web, UI/UX design, branding e identidade visual.
            </p>
          </div>
        </div>

        {/* Skills badges */}
        <div className="flex flex-wrap gap-3 mt-12">
          {skills.map((skill) => (
            <span
              key={skill}
              className="about-skill px-4 py-2 text-sm glass rounded-full text-muted-foreground hover:text-foreground transition-colors will-change-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
