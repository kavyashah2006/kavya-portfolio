import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { WorkPreview } from '@/components/WorkPreview'
import { LabPreview } from '@/components/LabPreview'
import { WritingPreview } from '@/components/WritingPreview'
import { Contact } from '@/components/Contact'
import { Providers } from '@/components/Providers'

export default function Home() {
  return (
    <Providers>
      <Hero />
      <About />
      <WorkPreview />
      <LabPreview />
      <WritingPreview />
      <Contact />
    </Providers>
  )
}