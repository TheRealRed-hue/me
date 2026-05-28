import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
<<<<<<< HEAD
import { LenisProvider } from '@/components/providers/lenis-provider'
import { CustomCursor } from '@/components/ui/custom-cursor'
=======
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'KZR Studios | Desenvolvimento Web & Design Digital',
  description: 'Estúdio criativo especializado em desenvolvimento web, UI/UX design e identidade visual. Transformando ideias em experiências digitais memoráveis.',
  keywords: ['desenvolvimento web', 'design digital', 'UI/UX', 'KZR Studios', 'front-end', 'branding'],
  authors: [{ name: 'KZR Studios' }],
  openGraph: {
    title: 'KZR Studios | Desenvolvimento Web & Design Digital',
    description: 'Estúdio criativo especializado em desenvolvimento web, UI/UX design e identidade visual.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
<<<<<<< HEAD
        <LenisProvider>
          <CustomCursor />
          {children}
        </LenisProvider>
=======
        {children}
>>>>>>> 5335aa480d6026ac1a1e676135624b78a736b404
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
