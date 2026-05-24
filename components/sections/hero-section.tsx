'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const specialties = ['Front-End Developer', 'Digital Designer', 'UI/UX Specialist']

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Apresentação"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle text-sm text-primary mb-8"
        >
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-wider mb-6"
        >
          <span className="text-primary glow-text-primary">K</span>
          <span className="text-foreground mx-2 sm:mx-4">Z</span>
          <span className="text-primary glow-text-primary">R</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
          aria-label="Especialidades"
        >
          {specialties.map((specialty, index) => (
            <span
              key={specialty}
              className="text-sm sm:text-base text-muted-foreground"
            >
              {specialty}
              {index < specialties.length - 1 && (
                <span className="text-primary ml-3">•</span>
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-xl mx-auto text-muted-foreground mb-10 text-balance"
        >
          Transformando ideias em experiências digitais modernas — fundadores da KZR Studios
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/#projetos"
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
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
