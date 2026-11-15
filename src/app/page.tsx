import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Skills } from '@/components/Skills'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { VitaVerse } from '@/components/VitaVerse'
import { Education } from '@/components/Education'
import { CareerInterests } from '@/components/CareerInterests'
import { CurrentlyLearning } from '@/components/CurrentlyLearning'
import { ProfessionalJourney } from '@/components/ProfessionalJourney'
import { ApproachStages } from '@/components/ApproachStages'
import { Certifications } from '@/components/Certifications'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="min-h-screen" role="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VitaVerse />
        <Education />
        <CareerInterests />
        <CurrentlyLearning />
        <ProfessionalJourney />
        <ApproachStages />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  )
}