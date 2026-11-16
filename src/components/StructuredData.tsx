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
    email: personalInfo.email,
    telephone: personalInfo.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Venice',
      addressCountry: 'IT',
    },
    sameAs: [
      personalInfo.linkedin,
      personalInfo.github,
    ],
    knowsAbout: [
      'Data Science',
      'Artificial Intelligence',
      'Machine Learning',
      'Python',
      'SQL',
      'Data Analysis',
      'Healthcare Technology',
      'Database Management',
    ],
    description: personalInfo.tagline,
  }

  const educationSchema = education.map((edu) => ({
    '@context': 'https://schema.org',
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: edu.degree,
    recognizedBy: {
      '@type': 'Organization',
      name: edu.institution,
    },
    dateCreated: edu.endDate || new Date().toISOString().split('T')[0],
    description: edu.description,
  }))

  const experienceSchema = experience.map((exp) => ({
    '@context': 'https://schema.org',
    '@type': 'WorkExperience',
    title: exp.role,
    employer: {
      '@type': 'Organization',
      name: exp.company,
    },
    location: exp.location,
    startDate: exp.startDate,
    endDate: exp.endDate || undefined,
    description: exp.responsibilities.join('; '),
    skills: exp.technologies,
  }))

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      {educationSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {experienceSchema.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
