'use client'

import { personalInfo, education, experience } from '@/lib/data'

export function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: personalInfo.name,
    jobTitle: personalInfo.title,
    worksFor: {
      '@type': 'Organization',
      name: personalInfo.university,
    },
    url: 'https://kavyashah.dev',
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    email: personalInfo.email,
    knowsAbout: [
      'Data Science',
      'Artificial Intelligence',
      'Machine Learning',
      'Python',
      'SQL',
      'Data Analysis',
      'Healthcare Technology',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: "Ca' Foscari University of Venice",
    },
  }

  const educationSchema = education.map((edu) => ({
    '@type': 'EducationalOccupationalCredential',
    educationalLevel: edu.degree,
    recognizedBy: {
      '@type': 'CollegeOrUniversity',
      name: edu.institution,
    },
    dateCreated: edu.endDate || new Date().toISOString().split('T')[0],
  }))

  const experienceSchema = experience.map((exp) => ({
    '@type': 'WorkExperience',
    organization: {
      '@type': 'Organization',
      name: exp.company,
    },
    jobTitle: exp.role,
    startDate: exp.startDate,
    endDate: exp.endDate || undefined,
    description: exp.responsibilities.join('; '),
  }))

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      personSchema,
      ...educationSchema,
      ...experienceSchema,
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
    />
  )
}