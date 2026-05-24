'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Instagram, Github, Phone } from 'lucide-react'

const KZR_EMAIL = 'studioskzr@gmail.com'

interface ContactSectionProps {
  memberName?: string
  memberSubject?: string
  memberMessage?: string
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Resposta em até 24h',
    value: 'studioskzr@gmail.com',
    href: `mailto:${KZR_EMAIL}`,
  },
  {
    icon: Instagram,
    label: 'Projetos & bastidores',
    value: '@studioskzr',
    href: 'https://instagram.com/studioskzr',
  },
  {
    icon: Github,
    label: 'Código aberto',
    value: '@TheRealRed-hue',
    href: 'https://github.com/TheRealRed-hue',
  },
  {
    icon: Phone,
    label: 'Resposta rápida',
    value: '+55 88 98848-5985',
    href: 'https://wa.me/5588988485985',
  },
]

export function ContactSection({ memberName, memberSubject, memberMessage }: ContactSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const getMailtoLink = () => {
    const subject = memberSubject || 'Contato via KZR Studios'
    const body = memberMessage || 'Olá, vim através do site da KZR Studios e gostaria de solicitar um orçamento/projeto.'
    return `mailto:${KZR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const customContactLinks = contactLinks.map((link) => {
    if (link.icon === Mail) {
      return { ...link, href: getMailtoLink() }
    }
    return link
  })

  return (
    <section
      id="contato"
      ref={ref}
      className="py-24 md:py-32 relative"
      aria-label="Seção de contato"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium text-primary tracking-widest"
        >
          CONTATO
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance"
        >
          Vamos <span className="text-primary">Conversar?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mb-12"
        >
          {memberName 
            ? `Interessado no trabalho de ${memberName}? Entre em contato e vamos transformar suas ideias em realidade.`
            : 'Tem um projeto em mente? Entre em contato e vamos transformar suas ideias em realidade.'
          }
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {customContactLinks.map((link, index) => (
            <motion.a
              key={link.value}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="p-5 rounded-xl glass hover:border-primary/30 border border-transparent transition-all duration-300 group"
              aria-label={`${link.icon === Mail ? 'Email' : link.icon === Instagram ? 'Instagram' : link.icon === Github ? 'GitHub' : 'WhatsApp'}: ${link.value}`}
            >
              <link.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-xs text-muted-foreground mb-1">{link.label}</p>
              <p className="font-medium text-foreground text-sm">{link.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">OU ENVIE DIRETO</p>
          <a
            href={getMailtoLink()}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-primary text-primary-foreground rounded-xl hover:opacity-90 transition-all duration-200 glow-primary"
          >
            {KZR_EMAIL}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
