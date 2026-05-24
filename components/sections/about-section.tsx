'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="sobre"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-label="Sobre Red"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary tracking-widest"
        >
          SOBRE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 mb-12 text-balance"
        >
          Criando experiências digitais
          <span className="text-primary"> memoráveis</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="glass rounded-xl p-6 text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Olá, sou <span className="text-foreground font-medium">Red</span>, co-fundador da{' '}
              <span className="text-primary font-medium">KZR Studios</span> — criada em 2026 ao lado de{' '}
              <span className="text-foreground font-medium">Mariana</span> e{' '}
              <span className="text-foreground font-medium">Zensh</span>. Sou um desenvolvedor front-end e designer
              digital apaixonado por criar interfaces elegantes e experiências imersivas.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Minha jornada começou em 2023 com os primeiros projetos web. Em 2025 passei a integrar IA como
              auxílio criativo, elevando a qualidade e velocidade das entregas. Hoje foco em desenvolvimento
              web, UI/UX design, branding e identidade visual.
            </p>
          </motion.div>
        </div>

        {/* Skills badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-3 mt-12"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm glass rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
