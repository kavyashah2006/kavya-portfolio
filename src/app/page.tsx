import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Work } from '@/components/Work'
import { Lab } from '@/components/Lab'
import { Writing } from '@/components/Writing'
import { Contact } from '@/components/Contact'
import { Providers } from '@/components/Providers'

export default function Home() {
  return (
    <Providers>
      <Hero />
      <About />
      <Work />
      <Lab />
      <Writing />
      <Contact />
    </Providers>
  )
}