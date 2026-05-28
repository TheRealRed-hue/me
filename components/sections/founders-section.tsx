'use client'

<<<<<<< HEAD
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMobile } from '@/hooks/use-reduced-motion'

gsap.registerPlugin(ScrollTrigger)
=======
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404

const founders = [
  {
    initial: 'M',
    name: 'Mariana',
    handle: '@mari',
    role: 'ARTE DIGITAL',
<<<<<<< HEAD
    description: 'Responsável pela identidade visual e arte digital do estúdio. Transforma conceitos em ilustrações únicas com traço próprio e sensibilidade estética.',
=======
    description:
      'Responsável pela identidade visual e arte digital do estúdio. Transforma conceitos em ilustrações únicas com traço próprio e sensibilidade estética.',
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
    skills: ['Ilustração Digital', 'Arte Conceitual', 'Identidade Visual'],
    href: '/mari',
    color: 'from-pink-500/20 to-rose-500/20',
    borderColor: 'hover:border-pink-500/50',
    textColor: 'text-pink-400',
  },
  {
    initial: 'Z',
    name: 'Zensh',
    handle: '@zensh',
    role: 'DESIGN & ARTE DIGITAL',
<<<<<<< HEAD
    description: 'Co-responsável pela produção visual e design do estúdio. Especialista em criar composições visuais que unem estética e funcionalidade.',
=======
    description:
      'Co-responsável pela produção visual e design do estúdio. Especialista em criar composições visuais que unem estética e funcionalidade.',
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
    skills: ['UI Design', 'Arte Digital', 'Motion & Visual'],
    href: '/zensh',
    color: 'from-violet-500/20 to-indigo-500/20',
    borderColor: 'hover:border-violet-500/50',
    textColor: 'text-violet-400',
  },
  {
    initial: 'R',
    name: 'Red',
    handle: '@mythicthefirst',
    role: 'DEV & DIGITAL DESIGNER',
<<<<<<< HEAD
    description: 'Fundador e desenvolvedor front-end do estúdio. Constrói as experiências digitais que dão vida às ideias — do código à interface final.',
=======
    description:
      'Fundador e desenvolvedor front-end do estúdio. Constrói as experiências digitais que dão vida às ideias — do código à interface final.',
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
    skills: ['Front-End Dev', 'UI/UX Design', 'IA Integrada'],
    href: '/red',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/50',
    textColor: 'text-cyan-400',
  },
]

export function FoundersSection() {
<<<<<<< HEAD
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mobile = isMobile()

      gsap.set('.founders-header', { opacity: 0, y: 30 })
      gsap.set('.founder-card', { opacity: 0, x: mobile ? 0 : 60, rotateY: mobile ? 0 : 8, y: mobile ? 30 : 0 })

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }).to('.founders-header', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })

      gsap.to('.founder-card', {
        opacity: 1,
        x: 0,
        y: 0,
        rotateY: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.founders-grid',
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      })

      // Parallax horizontal — apenas desktop, sem parallax por card individual
      if (!mobile) {
        gsap.to('.founders-grid', {
          x: -10,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 2,
          },
        })

        // Magnetic hover — throttled com rAF
        const cards = gsap.utils.toArray<HTMLElement>('.founder-card')
        cards.forEach(card => {
          let rafId: number
          const onMove = (e: MouseEvent) => {
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(() => {
              const rect = card.getBoundingClientRect()
              const x = e.clientX - rect.left - rect.width / 2
              const y = e.clientY - rect.top - rect.height / 2
              gsap.to(card, {
                x: x * 0.08,
                y: y * 0.06,
                rotateX: -(y * 0.03),
                rotateY: x * 0.03,
                duration: 0.5,
                ease: 'power2.out',
              })
            })
          }
          const onLeave = () => {
            cancelAnimationFrame(rafId)
            gsap.to(card, {
              x: 0, y: 0, rotateX: 0, rotateY: 0,
              duration: 0.7,
              ease: 'elastic.out(1, 0.5)',
            })
          }
          card.addEventListener('mousemove', onMove)
          card.addEventListener('mouseleave', onLeave)
          card.style.transformStyle = 'preserve-3d'
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="fundadores"
=======
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="fundadores"
      ref={ref}
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
      className="py-24 md:py-32 relative"
      aria-label="Fundadores da KZR Studios"
    >
      <div className="mx-auto max-w-7xl px-6">
<<<<<<< HEAD
        <div className="founders-header will-change-transform">
          <span className="text-sm font-medium text-primary tracking-widest">FUNDADORES</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            As pessoas por trás da<span className="text-primary"> KZR</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-12">
            Três fundadores, um estúdio. Cada um trazendo sua especialidade para criar algo maior.
          </p>
        </div>

        <div className="founders-grid grid md:grid-cols-3 gap-6" style={{ perspective: '1000px' }}>
          {founders.map((founder) => (
            <div key={founder.name} className="founder-card will-change-transform">
              <Link
                href={founder.href}
                data-cursor-label="→"
                className={`block h-full p-6 rounded-2xl glass border border-transparent ${founder.borderColor} transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${founder.color} flex items-center justify-center mb-4`}>
                  <span className={`text-2xl font-bold ${founder.textColor}`}>{founder.initial}</span>
                </div>
=======
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary tracking-widest"
        >
          FUNDADORES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance"
        >
          As pessoas por trás da
          <span className="text-primary"> KZR</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-12"
        >
          Três fundadores, um estúdio. Cada um trazendo sua especialidade para criar algo maior.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link
                href={founder.href}
                className={`block h-full p-6 rounded-2xl glass border border-transparent ${founder.borderColor} transition-all duration-300 group`}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${founder.color} flex items-center justify-center mb-4`}>
                  <span className={`text-2xl font-bold ${founder.textColor}`}>
                    {founder.initial}
                  </span>
                </div>

>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {founder.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">
                  <span className={founder.textColor}>@</span>
                  {founder.handle.replace('@', '')}
                </p>
                <p className={`text-xs font-medium ${founder.textColor} tracking-wider mb-4`}>
                  {founder.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {founder.description}
                </p>
<<<<<<< HEAD
                <ul className="flex flex-wrap gap-2" aria-label={`Áreas de ${founder.name}`}>
                  {founder.skills.map((skill) => (
                    <li key={skill} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground">
=======

                <ul className="flex flex-wrap gap-2" aria-label={`Áreas de ${founder.name}`}>
                  {founder.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground"
                    >
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
                      {skill}
                    </li>
                  ))}
                </ul>
              </Link>
<<<<<<< HEAD
            </div>
=======
            </motion.div>
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
          ))}
        </div>
      </div>
    </section>
  )
}
