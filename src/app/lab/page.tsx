import { Metadata } from 'next'
import { Lab } from '@/components/Lab'

export const metadata: Metadata = {
  title: 'Lab',
  description: 'Interactive prototypes, visualizations, and experimental projects exploring the boundaries of data science, AI, and healthcare technology.',
}

export default function LabPageRoute() {
  return <Lab />
}