'use client'

<<<<<<< HEAD
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
=======
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404

const navItems = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Fundadores', href: '/#fundadores' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Experiência', href: '/#experiencia' },
  { label: 'Contato', href: '/#contato' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
<<<<<<< HEAD
  const navRef = useRef<HTMLElement>(null)

  // Entrada inicial
  useEffect(() => {
    gsap.set(navRef.current, { y: -100, opacity: 0 })
    gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1.2 })
  }, [])

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onUpdate = (self: ScrollTrigger) => {
      const currentY = self.scroll()
      if (currentY < 100) {
        gsap.to(navRef.current, { y: 0, duration: 0.3, ease: 'power2.out' })
        return
      }
      if (self.direction === 1) {
        gsap.to(navRef.current, { y: '-100%', duration: 0.4, ease: 'power2.in' })
      } else {
        gsap.to(navRef.current, { y: 0, duration: 0.4, ease: 'power2.out' })
      }
    }

    const st = ScrollTrigger.create({ onUpdate })

    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)

    return () => {
      st.kill()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
=======

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between" aria-label="Navegação principal">
<<<<<<< HEAD
        <Link href="/" className="flex items-center gap-1 group" aria-label="KZR Studios — Início">
          <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:glow-text-primary">KZR</span>
          <span className="text-xs font-medium text-muted-foreground tracking-widest">STUDIOS</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200">
=======
        <Link 
          href="/" 
          className="flex items-center gap-1 group"
          aria-label="KZR Studios — Início"
        >
          <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:glow-text-primary">
            KZR
          </span>
          <span className="text-xs font-medium text-muted-foreground tracking-widest">
            STUDIOS
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/#contato"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 glow-primary"
          >
            Contato
          </Link>
        </div>

<<<<<<< HEAD
=======
        {/* Mobile Menu Button */}
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

<<<<<<< HEAD
=======
      {/* Mobile Menu */}
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/#contato"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-center font-medium bg-primary text-primary-foreground rounded-lg"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
<<<<<<< HEAD
    </header>
=======
    </motion.header>
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
  )
}
