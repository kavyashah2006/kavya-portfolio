import { Metadata } from 'next'
import { AboutPage } from '@/components/AboutPage'

export const metadata: Metadata = {
  title: 'About',
  description: "Second-year BSc Data Science student at Ca' Foscari University of Venice. Exploring the intersection of Data, Intelligence & Technology.",
}

export default function AboutPageRoute() {
  return <AboutPage />
}