'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion, isMobile } from '@/hooks/use-reduced-motion'

gsap.registerPlugin(ScrollTrigger)

const specialties = ['Front-End Developer', 'Digital Designer', 'UI/UX Specialist']

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mobile = isMobile()

      // Estado inicial
      gsap.set('.hero-badge', { opacity: 0, y: -20 })
      gsap.set('.hero-letter', {
        opacity: 0,
        y: mobile ? 30 : 80,
        rotateX: mobile ? 0 : -45,
      })
      gsap.set('.hero-specialties', { opacity: 0, y: 20 })
      gsap.set('.hero-description', { opacity: 0, y: 20 })
      gsap.set('.hero-buttons', { opacity: 0, y: 20 })
      gsap.set('.hero-scroll', { opacity: 0 })
      gsap.set('.hero-blob', { scale: 0.3, opacity: 0 })

      const tl = gsap.timeline({ delay: reducedMotion ? 0 : 0.2 })

      // 1. Blobs emergem criando atmosfera
      tl.to('.hero-blob', {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
        stagger: 0.3,
      })

      // 2. Badge entra
      .to('.hero-badge', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
      }, '-=1.5')

      // 3. Letras KZR com perspectiva 3D
      .to('.hero-letter', {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: mobile ? 0.7 : 1.1,
        ease: 'power3.out',
        stagger: mobile ? 0.08 : 0.12,
      }, '-=0.4')

      // 4. Especialidades
      .to('.hero-specialties', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.5')

      // 5. Descrição
      .to('.hero-description', {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
      }, '-=0.4')

      // 6. Botões
      .to('.hero-buttons', {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, '-=0.4')

      // 7. Scroll indicator
      .to('.hero-scroll', {
        opacity: 1,
        duration: 0.5,
      }, '-=0.2')

      // Parallax dos blobs (apenas desktop)
      if (!mobile) {
        gsap.to('.hero-blob-1', {
          y: -120,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })

        gsap.to('.hero-blob-2', {
          y: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 2,
          },
        })
      }

      // Exit cinematográfico ao scrollar
      gsap.to('.hero-content', {
        opacity: 0,
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center top',
          end: 'bottom top',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      className="relative hero-full-height flex items-center justify-center overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="hero-blob hero-blob-1 absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl will-change-transform" />
      <div className="hero-blob hero-blob-2 absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl will-change-transform" />

      <div className="hero-content relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-sm text-primary mb-8 will-change-transform">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Disponível para novos projetos
        </div>

        {/* Título KZR */}
        <h1
          className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-wider mb-6"
          style={{ perspective: '800px' }}
        >
          <span className="hero-letter inline-block text-primary glow-text-primary will-change-transform">K</span>
          <span className="hero-letter inline-block text-foreground mx-2 sm:mx-4 will-change-transform">Z</span>
          <span className="hero-letter inline-block text-primary glow-text-primary will-change-transform">R</span>
        </h1>

        {/* Especialidades */}
        <div
          className="hero-specialties flex flex-wrap justify-center gap-3 mb-6 will-change-transform"
          aria-label="Especialidades"
        >
          {specialties.map((specialty, index) => (
            <span key={specialty} className="text-sm sm:text-base text-muted-foreground">
              {specialty}
              {index < specialties.length - 1 && (
                <span className="text-primary ml-3">•</span>
              )}
            </span>
          ))}
        </div>

        {/* Descrição */}
        <p className="hero-description max-w-xl mx-auto text-muted-foreground mb-10 text-balance will-change-transform">
          Transformando ideias em experiências digitais modernas — fundadores da KZR Studios
        </p>

        {/* Botões */}
        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4 will-change-transform">
          <Link
            href="/#projetos"
            data-cursor-label="ver"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 glow-primary group"
          >
            Ver Projetos
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contato"
            className="inline-flex items-center justify-center px-6 py-3 font-medium glass text-foreground rounded-lg hover:bg-secondary/80 transition-all duration-200"
          >
            Entrar em Contato
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 will-change-transform">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
