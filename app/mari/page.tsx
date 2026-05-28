'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Brush, Heart, Flower2, Feather, Sparkles, Palette, ArrowRight } from 'lucide-react'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

const skills = [
  { icon: Brush, name: 'Design Digital', description: 'Criações artísticas personalizadas' },
  { icon: Heart, name: 'Arte Conceitual', description: 'Personagens e cenários únicos' },
  { icon: Flower2, name: 'Elementos Decorativos', description: 'Detalhes florais e orgânicos' },
  { icon: Feather, name: 'Traço Delicado', description: 'Estilo próprio e sensível' },
  { icon: Sparkles, name: 'Identidade Visual', description: 'Marcas com personalidade' },
  { icon: Palette, name: 'Paletas de Cores', description: 'Harmonias visuais únicas' },
]

const works = [
  {
    title: 'Character Designs',
    description: 'Personagens originais com personalidade e expressão única.',
    category: 'Ilustração',
  },
  {
    title: 'Design Digital',
    description: 'Desenhos e gravuras digitais com traço delicado e sensível.',
    category: 'Arte Digital',
  },
  {
    title: 'Brand Illustrations',
    description: 'Ilustrações personalizadas para marcas e projetos.',
    category: 'Identidade Visual',
  },
]

// Pre-defined decorative particles to avoid hydration mismatch
const decorativeParticles = [
  { left: 15, top: 25, opacity: 0.25, duration: 4.5, delay: 0.3 },
  { left: 45, top: 60, opacity: 0.35, duration: 5.2, delay: 1.1 },
  { left: 70, top: 20, opacity: 0.28, duration: 4.8, delay: 0.7 },
  { left: 30, top: 75, opacity: 0.32, duration: 5.5, delay: 1.8 },
  { left: 85, top: 45, opacity: 0.22, duration: 4.2, delay: 0.5 },
  { left: 55, top: 85, opacity: 0.30, duration: 5.0, delay: 1.4 },
]

function DecorativeParticles() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {decorativeParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `rgba(244, 114, 182, ${particle.opacity})`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function MariPage() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const worksRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' })
  const worksInView = useInView(worksRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects - soft pink/pastel */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-950/10 via-transparent to-rose-950/10" />
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-pink-400/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-rose-400/8 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-300/5 rounded-full blur-[120px]" />
      </div>

      {/* Decorative elements */}
      <DecorativeParticles />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-full text-pink-400 hover:text-pink-300 transition-colors"
        >
          <ArrowLeft size={16} />
          KZR Studios
        </Link>
      </motion.div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-pink-400/20 to-rose-400/20 flex items-center justify-center border border-pink-400/30 shadow-[0_0_60px_rgba(244,114,182,0.25)]"
            >
              <span className="text-6xl font-bold text-pink-400">M</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-pink-400 drop-shadow-[0_0_40px_rgba(244,114,182,0.4)]">Mariana</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-2"
            >
              <span className="text-pink-400">@</span>mari
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm font-medium text-pink-400 tracking-widest mb-8"
            >
              ARTE DIGITAL & ILUSTRAÇÃO
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10"
            >
              Responsável pela identidade visual e arte digital da KZR Studios. Transforma conceitos 
              em ilustrações únicas com traço próprio e sensibilidade estética. Cada peça carrega 
              emoção e conta uma história através de cores, formas e detalhes delicados.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="#trabalhos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-pink-500 text-white rounded-lg hover:bg-pink-400 transition-all duration-200 shadow-[0_0_30px_rgba(244,114,182,0.35)] group"
              >
                Ver Trabalhos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 font-medium glass text-foreground rounded-lg border border-pink-400/30 hover:border-pink-400/60 transition-all duration-200"
              >
                Entrar em Contato
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-pink-400 tracking-widest"
            >
              ESPECIALIDADES
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              Arte & <span className="text-pink-400">Expressão</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="p-6 rounded-xl glass border border-transparent hover:border-pink-400/30 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Works Section */}
        <section id="trabalhos" ref={worksRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-pink-400 tracking-widest"
            >
              TRABALHOS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              Criações <span className="text-pink-400">recentes</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={worksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative p-6 rounded-2xl glass border border-transparent hover:border-pink-400/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-rose-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-xs font-medium text-pink-400 tracking-wider">{work.category}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-2 mb-2">{work.title}</h3>
                    <p className="text-sm text-muted-foreground">{work.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contato">
          <ContactSection
            memberName="Mariana"
            memberSubject="Request for Mari — KZR Studios"
            memberMessage="Hello Mariana, I came through the KZR Studios website and would like to request a project/quote."
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
