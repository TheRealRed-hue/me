'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Palette, Sparkles, Star, Moon, Eye, Wand2, ArrowRight } from 'lucide-react'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

const skills = [
  { icon: Palette, name: 'UI Design', description: 'Interfaces visualmente impactantes' },
  { icon: Sparkles, name: 'Arte Digital', description: 'Ilustrações e composições únicas' },
  { icon: Moon, name: 'Estética Visual', description: 'Atmosferas cósmicas e artísticas' },
  { icon: Eye, name: 'Direção de Arte', description: 'Visão criativa para projetos' },
]

const works = [
  {
    title: 'Cosmic Visuals',
    description: 'Série de ilustrações com temática espacial e atmosfera astral.',
    category: 'Arte Digital',
  },
  {
    title: 'Brand Identities',
    description: 'Criação de logos e identidades visuais com estética única.',
    category: 'Branding',
  },
  {
    title: 'UI Concepts',
    description: 'Conceitos de interface com design contemporâneo.',
    category: 'UI Design',
  },
]

// Pre-generated particle positions to avoid hydration mismatch
const particleData = [
  { x: 10, y: 15, duration: 12, delay: 0.5, yEnd: -150 },
  { x: 25, y: 80, duration: 15, delay: 1.2, yEnd: -180 },
  { x: 40, y: 30, duration: 11, delay: 2.1, yEnd: -120 },
  { x: 55, y: 65, duration: 14, delay: 0.8, yEnd: -200 },
  { x: 70, y: 45, duration: 13, delay: 3.0, yEnd: -160 },
  { x: 85, y: 90, duration: 16, delay: 1.5, yEnd: -140 },
  { x: 15, y: 55, duration: 12, delay: 2.8, yEnd: -170 },
  { x: 30, y: 20, duration: 18, delay: 0.3, yEnd: -190 },
  { x: 60, y: 75, duration: 10, delay: 4.2, yEnd: -130 },
  { x: 75, y: 10, duration: 14, delay: 1.9, yEnd: -210 },
  { x: 90, y: 50, duration: 17, delay: 3.5, yEnd: -145 },
  { x: 5, y: 85, duration: 13, delay: 0.7, yEnd: -175 },
]

// Floating particles component
function FloatingParticles() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particleData.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-400/40 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, particle.yEnd],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
}

export default function ZenshPage() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const worksRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' })
  const worksInView = useInView(worksRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects - cosmic/astral */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-indigo-950/20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>
      
      <FloatingParticles />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-full text-violet-400 hover:text-violet-300 transition-colors"
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
              className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 flex items-center justify-center border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.3)]"
            >
              <span className="text-6xl font-bold text-violet-400">Z</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-violet-400 drop-shadow-[0_0_40px_rgba(139,92,246,0.5)]">Zensh</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl text-muted-foreground mb-2"
            >
              <span className="text-violet-400">@</span>zensh
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm font-medium text-violet-400 tracking-widest mb-8"
            >
              DESIGN & ARTE DIGITAL
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10"
            >
              Co-responsável pela produção visual e design da KZR Studios. Especialista em criar 
              composições visuais que unem estética e funcionalidade, com uma abordagem artística 
              e atmosferas únicas que transportam o espectador para universos visuais imersivos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="#trabalhos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-violet-500 text-white rounded-lg hover:bg-violet-400 transition-all duration-200 shadow-[0_0_30px_rgba(139,92,246,0.4)] group"
              >
                Ver Trabalhos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 font-medium glass text-foreground rounded-lg border border-violet-500/30 hover:border-violet-500/60 transition-all duration-200"
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
              className="text-sm font-medium text-violet-400 tracking-widest"
            >
              ESPECIALIDADES
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              Arte & <span className="text-violet-400">Visão</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="p-6 rounded-xl glass border border-transparent hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-violet-400 mb-4 group-hover:scale-110 transition-transform" />
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
              className="text-sm font-medium text-violet-400 tracking-widest"
            >
              TRABALHOS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={worksInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              Criações <span className="text-violet-400">recentes</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {works.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={worksInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="group relative p-6 rounded-2xl glass border border-transparent hover:border-violet-500/30 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <span className="text-xs font-medium text-violet-400 tracking-wider">{work.category}</span>
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
            memberName="Zensh"
            memberSubject="Request for Zensh — KZR Studios"
            memberMessage="Hello Zensh, I came through the KZR Studios website and would like to request a project/quote."
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
