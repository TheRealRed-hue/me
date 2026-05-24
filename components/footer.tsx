import Link from 'next/link'

const footerLinks = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Fundadores', href: '/#fundadores' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Experiência', href: '/#experiencia' },
  { label: 'Contato', href: '/#contato' },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-xl font-bold text-primary">KZR</span>
            <span className="text-xs font-medium text-muted-foreground tracking-widest">STUDIOS</span>
          </Link>

          <nav aria-label="Links de navegação do rodapé">
            <ul className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 KZR Studios — Feito com ♥ por Red
          </p>
        </div>
      </div>
    </footer>
  )
}
