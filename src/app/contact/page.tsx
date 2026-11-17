import { Metadata } from 'next'
import { ContactPage } from '@/components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch for internship opportunities, collaborations, or questions. Currently seeking paid internships in Data Science, AI, and Healthcare Technology.',
}

export default function ContactPageRoute() {
  return <ContactPage />
}