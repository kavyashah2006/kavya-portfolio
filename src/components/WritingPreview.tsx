'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BookOpen, FileText, Calendar, Tag, ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Writing/Articles data - derived from existing projects and content
const writingPieces = [
  {
    id: 'vitaverse-concept',
    title: 'Building VitaVerse: A Patient-Centric Digital Health Ecosystem',
    excerpt: 'How I designed a personal health vault with AI-powered insights, QR emergency access, and FHIR-compliant interoperability — from concept to technical architecture.',
    category: 'Healthcare Technology',
    tags: ['Product Strategy', 'FHIR', 'AI/ML', 'Privacy'],
    date: '2026-01-15',
    readTime: '12 min',
    status: 'Published',
    githubUrl: 'https://github.com/kavyashah/vitaverse',
    externalUrl: null,
    icon: BookOpen,
    color: 'accent',
  },
  {
    id: 'pacman-engine-writeup',
    title: 'Pac-Man Engine in C++17: Object-Oriented Game Architecture',
    excerpt: 'Deep dive into building a complete game engine with quad-tree spatial partitioning, XML serialization, and modern C++17 patterns — a university project retrospective.',
    category: 'C++ Programming',
    tags: ['C++17', 'OOP', 'Game Dev', 'Data Structures'],
    date: '2025-12-20',
    readTime: '15 min',
    status: 'Published',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'primary',
  },
  {
    id: 'dungeon-procedural',
    title: 'Procedural Dungeon Generation in C: Algorithms & Implementation',
    excerpt: 'Exploring procedural content generation for a text-based adventure game — room placement, corridor tunneling, and recursive Padovan sequence for encounter balancing.',
    category: 'Algorithms',
    tags: ['C', 'Procedural Gen', 'Algorithms', 'Game Dev'],
    date: '2025-11-10',
    readTime: '10 min',
    status: 'Published',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'secondary',
  },
  {
    id: 'data-cleaning-guide',
    title: 'Practical Data Cleaning Patterns for Real-World Datasets',
    excerpt: 'Lessons from 200+ hours of data analysis internships — handling missing values, outlier detection, schema validation, and reproducible cleaning pipelines in Python and SQL.',
    category: 'Data Science',
    tags: ['Python', 'SQL', 'Data Cleaning', 'Best Practices'],
    date: '2026-07-01',
    readTime: '8 min',
    status: 'Draft',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'accent',
  },
  {
    id: 'healthcare-ai-ethics',
    title: 'Privacy-Preserving AI in Healthcare: Local-First ML Approaches',
    excerpt: 'Examining federated learning, differential privacy, and on-device inference for sensitive health data — technical patterns for building trustworthy medical AI systems.',
    category: 'AI Ethics',
    tags: ['Privacy', 'Federated Learning', 'Healthcare', 'TensorFlow.js'],
    date: '2026-08-15',
    readTime: '18 min',
    status: 'In Progress',
    githubUrl: null,
    externalUrl: null,
    icon: BookOpen,
    color: 'primary',
  },
  {
    id: 'fhir-standards-deep-dive',
    title: 'FHIR R4 for Developers: Building Interoperable Health Systems',
    excerpt: 'A practical guide to HL7 FHIR resources, profiles, and RESTful APIs — with code examples for patient records, observations, medications, and consent management.',
    category: 'Healthcare Technology',
    tags: ['FHIR', 'HL7', 'Interoperability', 'Standards'],
    date: '2026-09-01',
    readTime: '20 min',
    status: 'Planned',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'secondary',
  },
]

const categories = ['All', 'Healthcare Technology', 'C++ Programming', 'Algorithms', 'Data Science', 'AI Ethics']

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const categoryColors = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
}

const statusColors = {
  'Published': 'bg-emerald-500/10 text-emerald-600 border-emerald-200/50',
  'Draft': 'bg-amber-500/10 text-amber-600 border-amber-200/50',
  'In Progress': 'bg-primary/10 text-primary border-primary/20 border',
  'Planned': 'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20',
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function WritingPreview() {
  const prefersReducedMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = React.useState('All')
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const itemsPerView = 3

  const filteredWriting = activeCategory === 'All'
    ? writingPieces
    : writingPieces.filter(w => w.category === activeCategory)

  const visibleWriting = filteredWriting.slice(currentIndex, currentIndex + itemsPerView)
  const hasNext = currentIndex + itemsPerView < filteredWriting.length
  const hasPrev = currentIndex > 0

  const handleNext = () => {
    if (hasNext) setCurrentIndex(prev => prev + itemsPerView)
  }

  const handlePrev = () => {
    if (hasPrev) setCurrentIndex(prev => prev - itemsPerView)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setCurrentIndex(0)
  }

  return (
    <section
      id="writing"
      className="section"
      aria-labelledby="writing-title"
    >
      <div className="container-custom">
        {/* Section Header - Editorial */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 lg:mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
            variants={itemVariants}
          >
            Chapter Six
          </motion.span>
          <motion.h2
            id="writing-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Writing & <span className="text-primary">research</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Technical articles, project retrospectives, and research notes on data science, AI, and healthcare technology.
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="glass px-2 py-2 rounded-xl flex flex-wrap gap-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-heading transition-all duration-fast ${
                  activeCategory === category
                    ? 'bg-accent text-bg shadow-glass'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5 dark:hover:bg-black/5'
                }`}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Writing Shelf - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          className="relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Navigation arrows - desktop */}
          <div className="hidden lg:flex items-center justify-between mb-8">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="glass px-4 py-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous articles"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="glass px-4 py-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next articles"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Writing Grid - Desktop: 3 columns, Mobile: horizontal scroll */}
          <div className="grid lg:grid-cols-3 gap-6 snap-x lg:snap-none overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {visibleWriting.map((piece, index) => {
              const Icon = piece.icon
              const colorClass = categoryColors[piece.color as keyof typeof categoryColors] || categoryColors.primary
              const statusColor = statusColors[piece.status as keyof typeof statusColors] || statusColors['Draft']

              return (
                <motion.article
                  key={piece.id}
                  className="card-editorial h-full flex flex-col overflow-hidden group snap-center lg:snap-none min-w-[320px] lg:min-w-0"
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusColor}`}>
                      {piece.status}
                    </div>
                  </div>

                  {/* Article Visual */}
                  <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${piece.color}-glow)` }}>
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${colorClass} border border-${piece.color}/30 group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
                        <Icon className="h-10 w-10" />
                      </div>
                    </div>

                    {/* Subtle pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
                      aria-hidden="true"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath stroke='currentColor' strokeWidth='0.3' d='M0 0h40v40H0zM20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '40px 40px',
                        color: `var(--${piece.color})`,
                      }}
                    />
                  </div>

                  {/* Article Content */}
                  <div className="flex-1 flex flex-col space-y-4">
                    {/* Category & Date */}
                    <div className="flex items-center justify-between gap-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorClass}`}>
                        {piece.category}
                      </span>
                      <time className="text-caption text-muted-foreground font-mono" dateTime={piece.date}>
                        {formatDate(piece.date)}
                      </time>
                    </div>

                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-fast">
                      {piece.title}
                    </h3>

                    <p className="text-body text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                      {piece.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {piece.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-xs font-medium font-heading text-muted-foreground bg-muted/50 border border-border/30"
                        >
                          {tag}
                        </span>
                      ))}
                      {piece.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-xs font-medium font-heading text-muted-foreground bg-muted/50 border border-border/30">
                          +{piece.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Meta footer */}
                    <div className="pt-3 border-t border-border/30 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-caption text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{piece.readTime} read</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {piece.githubUrl && (
                          <a
                            href={piece.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg glass text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast"
                            aria-label="View repository"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {piece.externalUrl && (
                          <a
                            href={piece.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg glass text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast"
                            aria-label="Read article"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>

          {/* Navigation arrows - mobile */}
          <div className="lg:hidden flex items-center justify-between mt-6">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className="glass px-4 py-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous articles"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className="glass px-4 py-3 rounded-xl text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next articles"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>

        {/* More Writing CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Button variant="secondary" className="gap-2" size="lg">
            <a
              href="https://github.com/kavyashah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Writing
              <ExternalLink className="h-5 w-5" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
          <span>End of Chapter Six</span>
        </div>
      </div>
    </section>
  )
}
