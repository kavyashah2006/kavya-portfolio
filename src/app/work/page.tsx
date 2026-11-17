import { Metadata } from 'next'
import { Work } from '@/components/Work'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work and implementations demonstrating practical data science, AI concepts, and healthcare technology applications — from research to production.',
}

export default function WorkPageRoute() {
  return <Work />
}