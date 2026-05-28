'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { isMobile } from '@/hooks/use-reduced-motion'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    initial: 'B',
    title: 'Bar Website',
    description: 'Website moderno e elegante para bar/restaurante com menu interativo, reservas online e atmosfera imersiva.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    featured: true,
    previewUrl: '#',
    githubUrl: '#',
  },
  {
    initial: 'B',
    title: 'Book Landing Page',
    description: 'Landing page imersiva para lançamento de livro com animações cinematográficas e storytelling visual.',
    tech: ['React', 'GSAP', 'Styled Components'],
    featured: true,
    previewUrl: '#',
    githubUrl: '#',
  },
  {
    initial: 'C',
    title: 'Corporate Portfolio',
    description: 'Portfólio corporativo premium com design minimalista, navegação fluida e performance otimizada.',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS'],
    featured: false,
    previewUrl: '#',
    githubUrl: '#',
  },
  {
    initial: 'S',
    title: 'Scheduling System',
    description: 'Sistema de agendamento intuitivo com dashboard administrativo completo e notificações em tempo real.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    featured: false,
    previewUrl: '#',
    githubUrl: '#',
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mobile = isMobile()

      gsap.set('.projects-header', { opacity: 0, y: 30 })
      gsap.set('.projects-line', { scaleX: 0, transformOrigin: 'left center' })

      // Header
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      })
      .to('.projects-header', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .to('.projects-line', { scaleX: 1, duration: 1.0, ease: 'power2.out' }, '-=0.4')

      // Cards — reveal como créditos de abertura
      gsap.utils.toArray<HTMLElement>('.project-item').forEach((item, i) => {
        gsap.fromTo(item,
          {
            opacity: 0,
            y: 50,
            clipPath: mobile ? undefined : 'inset(0 0 100% 0)',
          },
          {
            opacity: 1,
            y: 0,
            clipPath: mobile ? undefined : 'inset(0 0 0% 0)',
            duration: mobile ? 0.6 : 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.05,
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="py-24 md:py-32 relative"
      aria-label="Projetos selecionados"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="projects-header will-change-transform">
          <span className="text-sm font-medium text-primary tracking-widest">PORTFÓLIO</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-4 text-balance">
            Projetos <span className="text-primary">Selecionados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mb-4">
            Uma seleção dos nossos trabalhos mais recentes e impactantes.
          </p>
          <div className="projects-line h-px bg-primary/30 mb-12 will-change-transform" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <article
              key={project.title}
              className="project-item p-6 rounded-2xl glass border border-transparent hover:border-primary/30 transition-all duration-300 group will-change-transform"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-xl font-bold text-primary">{project.initial}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.previewUrl}
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      aria-label={`Ver preview de ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                      aria-label={`Ver código de ${project.title}`}
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                    FEATURED
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
