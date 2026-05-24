'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'

const founders = [
  {
    initial: 'M',
    name: 'Mariana',
    handle: '@mari',
    role: 'ARTE DIGITAL',
    description:
      'Responsável pela identidade visual e arte digital do estúdio. Transforma conceitos em ilustrações únicas com traço próprio e sensibilidade estética.',
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
    description:
      'Co-responsável pela produção visual e design do estúdio. Especialista em criar composições visuais que unem estética e funcionalidade.',
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
    description:
      'Fundador e desenvolvedor front-end do estúdio. Constrói as experiências digitais que dão vida às ideias — do código à interface final.',
    skills: ['Front-End Dev', 'UI/UX Design', 'IA Integrada'],
    href: '/red',
    color: 'from-cyan-500/20 to-blue-500/20',
    borderColor: 'hover:border-cyan-500/50',
    textColor: 'text-cyan-400',
  },
]

export function FoundersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="fundadores"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-label="Fundadores da KZR Studios"
    >
      <div className="mx-auto max-w-7xl px-6">
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

                <ul className="flex flex-wrap gap-2" aria-label={`Áreas de ${founder.name}`}>
                  {founder.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
