import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { FoundersSection } from '@/components/sections/founders-section'
import { SkillsSection } from '@/components/sections/skills-section'
import { ProjectsSection } from '@/components/sections/projects-section'
import { JourneySection } from '@/components/sections/journey-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background noise">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FoundersSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
