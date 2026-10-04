import { SiteHeader } from '@/components/portfolio/site-header'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Experience } from '@/components/portfolio/experience'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Education } from '@/components/portfolio/education'
import { ResumeSection } from '@/components/portfolio/resume-section'
import { Contact } from '@/components/portfolio/contact'
import { SiteFooter } from '@/components/portfolio/site-footer'

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
