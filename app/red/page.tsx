'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, Code, Palette, Layers, Sparkles, Monitor, Cpu, Globe, ArrowRight } from 'lucide-react'
import { ContactSection } from '@/components/sections/contact-section'
import { Footer } from '@/components/footer'

const skills = [
  { icon: Code, name: 'Front-End Development', description: 'React, Next.js, TypeScript' },
  { icon: Palette, name: 'UI/UX Design', description: 'Interfaces modernas e intuitivas' },
  { icon: Layers, name: 'Design Systems', description: 'Componentes escaláveis' },
  { icon: Sparkles, name: 'Animações', description: 'Framer Motion, GSAP' },
  { icon: Monitor, name: 'Responsividade', description: 'Mobile-first approach' },
  { icon: Cpu, name: 'IA Integrada', description: 'Assistência inteligente' },
]

const projects = [
  {
    title: 'KZR Studios Website',
    description: 'Site oficial do estúdio com design futurista e animações fluidas.',
    tech: ['Next.js', 'Framer Motion', 'TailwindCSS'],
  },
  {
    title: 'Bar Website',
    description: 'Website elegante para restaurante com menu interativo.',
    tech: ['Next.js', 'TailwindCSS'],
  },
  {
    title: 'Book Landing Page',
    description: 'Landing page imersiva com storytelling visual.',
    tech: ['React', 'GSAP'],
  },
]

export default function RedPage() {
  const heroRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  
  const heroInView = useInView(heroRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true, margin: '-100px' })
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium glass rounded-full text-cyan-400 hover:text-cyan-300 transition-colors"
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
              transition={{ duration: 0.6 }}
              className="w-32 h-32 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 shadow-[0_0_60px_rgba(6,182,212,0.3)]"
            >
              <span className="text-6xl font-bold text-cyan-400">R</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(6,182,212,0.5)]">Red</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-2"
            >
              <span className="text-cyan-400">@</span>mythicthefirst
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm font-medium text-cyan-400 tracking-widest mb-8"
            >
              FRONT-END DEVELOPER & DIGITAL DESIGNER
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto text-muted-foreground leading-relaxed mb-10"
            >
              Fundador e desenvolvedor front-end da KZR Studios. Especializado em criar experiências
              digitais modernas, interfaces elegantes e animações fluidas. Do código à interface final,
              transformo ideias em realidade.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium bg-cyan-500 text-background rounded-lg hover:bg-cyan-400 transition-all duration-200 shadow-[0_0_30px_rgba(6,182,212,0.4)] group"
              >
                Ver Projetos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 font-medium glass text-foreground rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-200"
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
              className="text-sm font-medium text-cyan-400 tracking-widest"
            >
              ESPECIALIDADES
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={skillsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              O que eu <span className="text-cyan-400">faço</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="p-6 rounded-xl glass border border-transparent hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos" ref={projectsRef} className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-cyan-400 tracking-widest"
            >
              PROJETOS
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mt-4 mb-12"
            >
              Trabalhos <span className="text-cyan-400">recentes</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="p-6 rounded-2xl glass border border-transparent hover:border-cyan-500/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <div id="contato">
          <ContactSection
            memberName="Red"
            memberSubject="Request for Red — KZR Studios"
            memberMessage="Hello Red, I came through the KZR Studios website and would like to request a project/quote."
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
