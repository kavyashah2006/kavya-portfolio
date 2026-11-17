import { Metadata } from 'next'
import { Writing } from '@/components/Writing'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Technical articles, case studies, and deep dives on data science, AI, healthcare technology, and product building.',
}

export default function WritingPageRoute() {
  return <Writing />
}