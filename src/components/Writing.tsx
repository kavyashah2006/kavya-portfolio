'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BookOpen, FileText, Calendar, Tag, ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, X, Search, LayoutGrid, List, Eye, Clock, Share2, Download, ArrowUpRight, ChevronsLeft, ChevronsRight, Star, Clipboard, HeartPulse, Activity, Database, Brain, Rocket, Code } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

// Writing/Articles data - derived from existing projects and content
const writingPieces = [
  {
    id: 'vitaverse-concept',
    title: 'Building VitaVerse: A Patient-Centric Digital Health Ecosystem',
    excerpt: 'How I designed a personal health vault with AI-powered insights, QR emergency access, and FHIR-compliant interoperability — from concept to technical architecture.',
    longDescription: 'This article documents the complete journey of building VitaVerse, a digital health platform prototype exploring how modern web technologies can improve personal health management. I cover the product strategy behind a patient-centric approach, the technical architecture using Next.js 14 with Firebase, FHIR R4 data modeling for healthcare interoperability, AI integration patterns using OpenAI for health insights, QR-code-based emergency access for first responders, and privacy-first design with local-first architecture. The article includes code samples for FHIR resource creation, authentication flows, and offline synchronization patterns.',
    category: 'Healthcare Technology',
    tags: ['Product Strategy', 'FHIR', 'AI/ML', 'Privacy', 'Next.js', 'Firebase', 'OpenAI'],
    date: '2026-01-15',
    readTime: '12 min',
    featured: true,
    status: 'Published',
    url: null,
    githubUrl: 'https://github.com/kavyashah/vitaverse',
  },
  {
    id: 'data-viz-principles',
    title: 'Effective Data Visualization: Principles Over Tools',
    excerpt: 'Why the best visualizations come from understanding perception, not mastering libraries. A practitioner\'s guide to choosing the right chart for the right question.',
    longDescription: 'After building dozens of dashboards and visualizations, I\'ve learned that tool choice matters far less than understanding the fundamentals of visual perception and data storytelling. This piece covers the cognitive principles behind effective charts — preattentive attributes, Gestalt principles, color theory for data, and progressive disclosure patterns. I walk through real examples from my work, showing how the same dataset tells different stories depending on the visualization approach.',
    category: 'Data Visualization',
    tags: ['D3.js', 'Recharts', 'Perception', 'Cognitive Load', 'Dashboard Design'],
    date: '2025-11-20',
    readTime: '8 min',
    featured: true,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/data-viz-principles',
    githubUrl: null,
  },
  {
    id: 'sql-patterns-analytics',
    title: 'SQL Patterns Every Data Analyst Should Know',
    excerpt: 'From window functions to recursive CTEs — practical SQL patterns that transform how you query and analyze data. With real examples from production workloads.',
    longDescription: 'SQL is often treated as a simple query language, but its advanced features enable powerful analytical workflows that would otherwise require complex application code. This article covers window functions for running totals and rankings, recursive CTEs for hierarchical data, lateral joins for complex calculations, and materialized views for performance optimization. Each pattern includes a real-world scenario from my internship experience, the SQL implementation, and performance considerations.',
    category: 'Data Engineering',
    tags: ['SQL', 'PostgreSQL', 'Window Functions', 'CTEs', 'Performance', 'Analytics'],
    date: '2025-09-10',
    readTime: '10 min',
    featured: false,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/sql-patterns',
    githubUrl: null,
  },
  {
    id: 'ml-production-lessons',
    title: 'Taking ML Models from Notebook to Production',
    excerpt: 'The gap between a working Jupyter notebook and a reliable production ML system. Lessons learned deploying models at scale — monitoring, drift detection, and CI/CD for ML.',
    longDescription: 'Building a model is only 20% of the work. The other 80% is making it reliable, monitorable, and maintainable in production. This article shares hard-won lessons from deploying ML systems: feature store design, model versioning with MLflow, data drift detection using statistical tests, automated retraining pipelines, and A/B testing frameworks. I also cover the organizational challenges — model ownership, incident response, and the relationship between data scientists and ML engineers.',
    category: 'Machine Learning',
    tags: ['MLOps', 'Model Deployment', 'Monitoring', 'Drift Detection', 'CI/CD', 'MLflow'],
    date: '2025-07-22',
    readTime: '15 min',
    featured: false,
    status: 'In Progress',
    url: null,
    githubUrl: 'https://github.com/kavyashah/ml-production-patterns',
  },
  {
    id: 'healthcare-data-privacy',
    title: 'Privacy-First Architecture for Healthcare Applications',
    excerpt: 'Designing systems that protect sensitive health data by default — encryption, access control, audit logging, and compliance patterns for HIPAA/GDPR alignment.',
    longDescription: 'Healthcare data demands a fundamentally different approach to privacy and security. This article explores architectural patterns for building privacy-first systems: end-to-end encryption with client-side keys, attribute-based access control (ABAC) for fine-grained permissions, comprehensive audit logging with tamper-proof storage, data minimization principles, and consent management workflows. I also discuss the tension between privacy and utility — how to enable AI insights on encrypted data using techniques like federated learning and secure multi-party computation.',
    category: 'Healthcare Technology',
    tags: ['Privacy', 'Security', 'HIPAA', 'GDPR', 'Encryption', 'Federated Learning', 'Architecture'],
    date: '2025-05-18',
    readTime: '11 min',
    featured: true,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/healthcare-privacy',
    githubUrl: null,
  },
  {
    id: 'student-to-founder',
    title: 'From Student Project to Startup: The VitaVerse Journey',
    excerpt: 'Building a digital health startup while completing a BSc. The realities of balancing academic deadlines with product development, fundraising, and team building.',
    longDescription: 'A candid reflection on the journey from a university project to a venture-backed startup. I share the timeline, the pivotal decisions, the mistakes, and the unexpected lessons. Topics include: validating a problem space as a student, building an MVP with limited resources, the first hires and advisors, navigating Italian/EU startup regulations as a student founder, balancing coursework with investor meetings, and the mental health reality of the founder journey. This isn\'t a success story — it\'s a work-in-progress report.',
    category: 'Entrepreneurship',
    tags: ['Startup', 'Founder Journey', 'Student Entrepreneurship', 'Digital Health', 'Venture Capital', 'Team Building'],
    date: '2025-03-05',
    readTime: '9 min',
    featured: false,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/student-to-founder',
    githubUrl: null,
  },
  {
    id: 'fhir-healthcare-interop',
    title: 'FHIR R4 in Practice: Building Interoperable Health Systems',
    excerpt: 'A practical guide to implementing FHIR resources, bundles, and search patterns in real applications. Code-first approach with TypeScript and HAPI FHIR.',
    longDescription: 'FHIR (Fast Healthcare Interoperability Resources) is the modern standard for healthcare data exchange, but its complexity can be daunting. This article provides a practical, code-first introduction to FHIR R4: resource types and profiles, Bundles for transactions and search results, the RESTful search API with chained parameters, FHIRPath for querying, and validation against profiles. I include TypeScript interfaces generated from the official specification, HAPI FHIR server setup, and patterns for mapping between FHIR and application domain models.',
    category: 'Healthcare Technology',
    tags: ['FHIR', 'Healthcare Interoperability', 'HAPI FHIR', 'TypeScript', 'HL7', 'Standards'],
    date: '2025-01-30',
    readTime: '14 min',
    featured: false,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/fhir-practice',
    githubUrl: 'https://github.com/kavyashah/fhir-typescript-starter',
  },
  {
    id: 'async-react-patterns',
    title: 'Async Patterns in React: Beyond useEffect',
    excerpt: 'Managing asynchronous state in React applications — from data fetching to background jobs. Comparing TanStack Query, SWR, React Query, and custom solutions.',
    longDescription: 'React\'s built-in tools for async state are minimal by design, leaving developers to choose from a growing ecosystem of solutions. This article compares the major approaches: TanStack Query (React Query) for server state, SWR for lightweight caching, RTK Query for Redux integration, and custom hooks for specialized needs. I cover caching strategies, optimistic updates, background refetching, pagination patterns, mutation handling, and the often-overlooked topic of testing async components. Performance benchmarks and bundle size comparisons included.',
    category: 'Software Engineering',
    tags: ['React', 'TanStack Query', 'SWR', 'State Management', 'Async', 'Performance', 'Testing'],
    date: '2024-11-12',
    readTime: '13 min',
    featured: false,
    status: 'Published',
    url: 'https://kavyashah.dev/writing/async-react',
    githubUrl: null,
  },
]

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Healthcare Technology': HeartPulse,
  'Data Visualization': Activity,
  'Data Engineering': Database,
  'Machine Learning': Brain,
  'Entrepreneurship': Rocket,
  'Software Engineering': Code,
}

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Published: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/20' },
  'In Progress': { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20' },
  Draft: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' },
}

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

export function Writing() {
  const prefersReducedMotion = useReducedMotion()
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')
  const [openArticle, setOpenArticle] = React.useState<typeof writingPieces[0] | null>(null)
  const [currentArticleIndex, setCurrentArticleIndex] = React.useState(0)

  const categories = ['all', ...Array.from(new Set(writingPieces.map(p => p.category)))]

  const filteredArticles = writingPieces.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleOpenModal = (article: typeof writingPieces[0], index: number) => {
    setCurrentArticleIndex(index)
    setOpenArticle(article)
  }

  const handleCloseModal = () => {
    setOpenArticle(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentArticleIndex > 0 ? currentArticleIndex - 1 : filteredArticles.length - 1)
      : (currentArticleIndex < filteredArticles.length - 1 ? currentArticleIndex + 1 : 0)
    setCurrentArticleIndex(newIndex)
    setOpenArticle(filteredArticles[newIndex])
  }

  const hasPrev = filteredArticles.length > 1
  const hasNext = filteredArticles.length > 1

  return (
    <>
      <section
        id="writing"
        className="section"
        aria-labelledby="writing-title"
      >
        <div className="container-custom">
          {/* Section Header - Editorial */}
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12 lg:mb-16"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
              variants={itemVariants}
            >
              Chapter Three
            </motion.span>
            <motion.h2
              id="writing-title"
              className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
              variants={itemVariants}
            >
              Writing & <span className="text-primary">deep dives</span>
            </motion.h2>
            <motion.p
              className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Technical articles, case studies, and deep dives on data science, AI, healthcare technology, and product building.
            </motion.p>
          </motion.div>

          {/* Controls */}
          <motion.div
            className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-transparent transition-all duration-fast"
                aria-label="Search articles"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium font-heading transition-all duration-fast ${
                    selectedCategory === cat
                      ? 'bg-accent text-accent-foreground shadow-xl shadow-accent/25'
                      : 'border border-border/50 bg-background/50 backdrop-blur-sm text-foreground hover:border-accent/30'
                  }`}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat === 'all' ? 'All' : cat}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 border border-border/50 bg-background/50 backdrop-blur-sm rounded-xl p-1" role="group" aria-label="View mode">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-fast ${
                  viewMode === 'grid'
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <LayoutGrid className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-fast ${
                  viewMode === 'list'
                    ? 'bg-accent text-accent-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <List className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          {/* Results Count */}
          <motion.p
            className="text-sm text-muted-foreground mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            Showing {filteredArticles.length} of {writingPieces.length} articles
          </motion.p>

          {/* Articles Grid/List */}
          <motion.div
            className={viewMode === 'grid' ? 'grid gap-6 lg:grid-cols-2 xl:grid-cols-3' : 'space-y-4'}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {filteredArticles.map((article, index) => {
              const CategoryIcon = categoryIcons[article.category] || FileText
              const statusStyle = statusColors[article.status] || statusColors.Published

              if (viewMode === 'grid') {
                return (
                  <motion.article
                    key={article.id}
                    className="card-editorial h-full flex flex-col overflow-hidden relative group cursor-pointer"
                    onClick={() => handleOpenModal(article, index)}
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Category & Status Badges */}
                    <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}
                      >
                        {article.status}
                      </div>
                      {article.featured && (
                        <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                          <Star className="h-3 w-3" aria-hidden="true" />
                          <span className="text-xs font-medium font-heading">Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Article Header Visual */}
                    <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" aria-hidden="true" />
                      <div className="relative z-10 absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-2xl bg-white/50 backdrop-blur-sm flex items-center justify-center border border-border/30 group-hover:scale-110 transition-transform duration-normal">
                          <CategoryIcon className="h-10 w-10 text-primary/50" aria-hidden="true" />
                        </div>
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-center justify-center">
                        <motion.div
                          className="glass px-4 py-2 rounded-xl text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          aria-label="Read article"
                        >
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          Read Article
                        </motion.div>
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 flex flex-col space-y-4">
                      {/* Category & Date */}
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}
                          aria-hidden="true"
                        >
                          <CategoryIcon className="h-4 w-4" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading">
                          {article.category}
                        </span>
                        <span className="text-xs text-muted-foreground ml-auto">
                          {new Date(article.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>

                      <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-body text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-border/30">
                        {article.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast cursor-default"
                          >
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 4 && (
                          <span className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground">
                            +{article.tags.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Meta & Actions */}
                      <div className="flex items-center justify-between pt-2 border-t border-border/30">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            {article.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-accent group-hover:gap-2 transition-gap flex items-center">
                            Read
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              } else {
                // List view
                return (
                  <motion.article
                    key={article.id}
                    className="card-editorial flex flex-row gap-6 p-6 group cursor-pointer"
                    onClick={() => handleOpenModal(article, index)}
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {/* Left: Visual */}
                    <div className="relative w-48 h-32 lg:w-56 lg:h-36 flex-shrink-0 overflow-hidden rounded-xl">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10" aria-hidden="true" />
                      <div className="relative z-10 absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-white/50 backdrop-blur-sm flex items-center justify-center border border-border/30">
                          <CategoryIcon className="h-8 w-8 text-primary/50" aria-hidden="true" />
                        </div>
                      </div>
                    </div>

                    {/* Right: Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}
                            aria-hidden="true"
                          >
                            <CategoryIcon className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading">
                            {article.category}
                          </span>
                          {article.featured && (
                            <span className="ml-auto flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                              <Star className="h-3 w-3" aria-hidden="true" />
                              <span className="text-xs font-medium font-heading">Featured</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-2 group-hover:text-accent transition-colors">
                          {article.title}
                        </h3>

                        <p className="text-body text-muted-foreground leading-relaxed line-clamp-2 mb-3">
                          {article.excerpt}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {article.tags.slice(0, 5).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast cursor-default"
                            >
                              {tag}
                            </span>
                          ))}
                          {article.tags.length > 5 && (
                            <span className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground">
                              +{article.tags.length - 5}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border/30 mt-4">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            {article.readTime}
                          </span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium font-heading ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border} border`}
                          >
                            {article.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-accent group-hover:gap-2 transition-gap flex items-center">
                            Read
                            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              }
            })}

            {filteredArticles.length === 0 && (
              <motion.div
                className="col-span-full text-center py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <Search className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-h3 font-heading font-medium text-foreground mb-2">No articles found</h3>
                <p className="text-body text-muted-foreground">Try adjusting your search or filter criteria.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Section Divider */}
          <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
            <span>End of Chapter Three</span>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      <AnimatePresence>
        {openArticle && (
          <motion.div
            className="fixed inset-0 z-[600] flex items-center justify-center p-4 lg:p-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.2 } },
              exit: { opacity: 0, transition: { duration: 0.2 } },
            }}
            onClick={handleCloseModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.2 } },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
            />

            {/* Modal Window */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-strong rounded-2xl"
              variants={{
                hidden: { opacity: 0, scale: 0.95, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
                exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.25, ease: [0.7, 0, 0.84, 0] } },
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
                <div className="flex-1 pr-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        openArticle.category === 'Healthcare Technology' ? 'bg-accent/10 text-accent border-accent/20 border' :
                        openArticle.category === 'Machine Learning' ? 'bg-primary/10 text-primary border-primary/20 border' :
                        openArticle.category === 'Data Visualization' ? 'bg-secondary/10 text-secondary border-secondary/20 border' :
                        openArticle.category === 'Entrepreneurship' ? 'bg-accent/10 text-accent border-accent/20 border' :
                        openArticle.category === 'Software Engineering' ? 'bg-primary/10 text-primary border-primary/20 border' :
                        'bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20 border'
                      }`}
                      aria-hidden="true"
                    >
                      {(() => {
                        const Icon = categoryIcons[openArticle.category] || FileText;
                        return <Icon className="h-5 w-5" />;
                      })()}
                    </div>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${
                        openArticle.status === 'Published'
                          ? 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20 border'
                          : openArticle.status === 'In Progress'
                          ? 'bg-primary/10 text-primary border-primary/20 border'
                          : 'bg-amber-500/10 text-amber-600 border-amber-500/20 border'
                      }`}>
                        {openArticle.status}
                      </span>
                      {openArticle.featured && (
                        <span className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                          <Star className="h-3 w-3" aria-hidden="true" />
                          <span className="text-xs font-medium font-heading">Featured</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <h2 id="article-modal-title" className="text-h1 lg:text-h2 font-heading font-semibold tracking-tight text-foreground mb-2">
                    {openArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {new Date(openArticle.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {openArticle.readTime}
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <motion.button
                  onClick={handleCloseModal}
                  className="glass p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-fast flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </motion.button>
              </div>

              {/* Modal Content */}
              <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
                {/* Excerpt */}
                <div className="prose max-w-none mb-8">
                  <p className="text-body-lg text-muted-foreground leading-relaxed drop-cap">
                    {openArticle.excerpt}
                  </p>
                </div>

                {/* Full Content */}
                <div className="prose max-w-none space-y-6">
                  <p className="text-body text-muted-foreground leading-relaxed">
                    {openArticle.longDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-border/30">
                  <Tag className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                  {openArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border/30">
                  {openArticle.url && (
                    <motion.a
                      href={openArticle.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="Read full article"
                    >
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                      Read Full Article
                    </motion.a>
                  )}
                  {openArticle.githubUrl && (
                    <motion.a
                      href={openArticle.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      aria-label="View source on GitHub"
                    >
                      <Github className="h-5 w-5" aria-hidden="true" />
                      View Source
                    </motion.a>
                  )}
                  <motion.button
                    className="btn-outline gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigator.share?.({ title: openArticle.title, text: openArticle.excerpt, url: window.location.href })}
                  >
                    <Share2 className="h-5 w-5" aria-hidden="true" />
                    Share
                  </motion.button>
                  <motion.button
                    className="btn-outline gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      const text = `${openArticle.title}\n${openArticle.url || window.location.href}\n\n${openArticle.excerpt}`
                      navigator.clipboard.writeText(text)
                    }}
                  >
                    <Clipboard className="h-5 w-5" aria-hidden="true" />
                    Copy Link
                  </motion.button>
                </div>
              </div>

              {/* Modal Footer Navigation */}
              {(hasPrev || hasNext) && (
                <div className="flex items-center justify-between p-6 border-t border-border/30 bg-background/50 backdrop-blur-sm">
                  <motion.button
                    onClick={() => hasPrev && handleNavigate('prev')}
                    disabled={!hasPrev}
                    className="btn-secondary gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Previous article"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous Article
                  </motion.button>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">←</kbd>
                    <span>Navigate</span>
                    <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">→</kbd>
                  </div>
                  <motion.button
                    onClick={() => hasNext && handleNavigate('next')}
                    disabled={!hasNext}
                    className="btn-secondary gap-2 ml-auto disabled:opacity-30 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Next article"
                  >
                    Next Article
                    <ChevronRight className="h-4 w-4" />
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}