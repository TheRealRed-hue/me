'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const milestones = [
  {
    year: '2026',
    badge: 'MARCO',
    title: 'Fundação da KZR Studios',
    description:
      'Fundação oficial da KZR Studios junto com Mariana e Zensh — um estúdio criativo focado em desenvolvimento web e design digital de alta qualidade.',
  },
  {
    year: '2025',
    badge: 'MARCO',
    title: 'Primeiros Clientes & IA Integrada',
    description:
      'Chegada dos primeiros clientes oficiais e adoção de IA como auxílio em projetos, acelerando entregas e expandindo as possibilidades criativas.',
  },
  {
    year: '2023',
    badge: null,
    title: 'Primeiros Projetos',
    description:
      'Desenvolvimento dos primeiros projetos web — ainda sem visibilidade pública, mas onde as bases do estilo e da qualidade foram construídas.',
  },
]

export function JourneySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="experiencia"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-label="Trajetória e experiência"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary tracking-widest"
        >
          TRAJETÓRIA
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance"
        >
          Minha <span className="text-primary">Jornada</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-12"
        >
          Os marcos que me trouxeram até aqui.
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary glow-primary" />

                <div className="p-6 rounded-2xl glass">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-2xl font-bold text-primary">
                      {milestone.year}
                    </span>
                    {milestone.badge && (
                      <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                        {milestone.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
