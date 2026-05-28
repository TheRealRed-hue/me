'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Figma, 
  Sparkles, 
  Globe, 
  Server, 
  Bot, 
  Palette, 
  Film, 
  Layers 
} from 'lucide-react'

const skills = [
  {
    icon: Figma,
    name: 'Figma',
    description: 'Design de interfaces',
  },
  {
    icon: Sparkles,
    name: 'Framer Motion',
    description: 'Animações fluidas',
  },
  {
    icon: Globe,
    name: 'Vercel',
    description: 'Deploy & infra',
  },
  {
    icon: Server,
    name: 'Node.js',
    description: 'Back-end JavaScript',
  },
  {
    icon: Bot,
    name: 'IA Integrada',
    description: 'Auxílio com IA em projetos',
  },
  {
    icon: Palette,
    name: 'UI Design',
    description: 'Interfaces elegantes',
  },
  {
    icon: Film,
    name: 'Motion Design',
    description: 'Visuais cinematográficos',
  },
  {
    icon: Layers,
    name: 'Branding',
    description: 'Identidade visual',
  },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-label="Habilidades e tecnologias"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary tracking-widest"
        >
          HABILIDADES
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance"
        >
          Tecnologias &
          <span className="text-primary"> Ferramentas</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-12"
        >
          As ferramentas que utilizo para transformar ideias em realidade digital.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
              className="p-5 rounded-xl glass hover:border-primary/30 border border-transparent transition-all duration-300 group"
            >
              <skill.icon 
                className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" 
              />
              <h3 className="font-semibold text-foreground mb-1">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
