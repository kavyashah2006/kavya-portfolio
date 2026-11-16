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
import { Contact } from '@/components/Contact'
import { Providers } from '@/components/Providers'

export default function Home() {
  return (
    <Providers>
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
      <Contact />
    </Providers>
  )
}