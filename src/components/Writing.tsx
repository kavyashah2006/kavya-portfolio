'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { BookOpen, FileText, Calendar, Tag, ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight, X, Search, LayoutGrid, List, Eye, Clock, Share2, Download, ArrowUpRight, ChevronsLeft, ChevronsRight } from 'lucide-react'
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
    status: 'Published',
    githubUrl: 'https://github.com/kavyashah/vitaverse',
    externalUrl: null,
    icon: BookOpen,
    color: 'accent',
    featured: true,
    wordCount: 3200,
    series: 'Digital Health',
    part: 1,
    totalParts: 3,
  },
  {
    id: 'pacman-engine-writeup',
    title: 'Pac-Man Engine in C++17: Object-Oriented Game Architecture',
    excerpt: 'Deep dive into building a complete game engine with quad-tree spatial partitioning, XML serialization, and modern C++17 patterns — a university project retrospective.',
    longDescription: 'A comprehensive retrospective on building a Pac-Man clone from scratch in C++17 as a university project. This article covers the complete architecture: entity-component system design, quad-tree spatial partitioning for efficient collision detection, XML-based level serialization, state machine implementation for ghost AI behaviors (chase, scatter, frightened, eaten), and modern C++17 patterns including smart pointers, structured bindings, and constexpr utilities. Includes performance benchmarks comparing quad-tree vs brute-force collision detection, and lessons learned about game loop architecture.',
    category: 'C++ Programming',
    tags: ['C++17', 'OOP', 'Game Dev', 'Data Structures', 'ECS', 'XML', 'AI'],
    date: '2025-12-20',
    readTime: '15 min',
    status: 'Published',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'primary',
    featured: true,
    wordCount: 4100,
    series: 'Game Engine Dev',
    part: 1,
    totalParts: 2,
  },
  {
    id: 'dungeon-procedural',
    title: 'Procedural Dungeon Generation in C: Algorithms & Implementation',
    excerpt: 'Exploring procedural content generation for a text-based adventure game — room placement, corridor tunneling, and recursive Padovan sequence for encounter balancing.',
    longDescription: 'An in-depth exploration of procedural dungeon generation algorithms implemented in C for a roguelike text adventure. Covers binary space partitioning (BSP) for room layout, A* corridor tunneling with Manhattan heuristics, cellular automata for cave-like structures, and a novel application of the recursive Padovan sequence for balanced encounter distribution. Includes visualizations of each generation step, complexity analysis of each algorithm, and a discussion of seed-based reproducibility for save/load systems. The article also covers memory-efficient implementation techniques for constrained environments.',
    category: 'Algorithms',
    tags: ['C', 'Procedural Gen', 'Algorithms', 'Game Dev', 'BSP', 'A*', 'Padovan'],
    date: '2025-11-10',
    readTime: '10 min',
    status: 'Published',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'secondary',
    featured: false,
    wordCount: 2800,
    series: 'Procedural Generation',
    part: 1,
    totalParts: 3,
  },
  {
    id: 'data-cleaning-guide',
    title: 'Practical Data Cleaning Patterns for Real-World Datasets',
    excerpt: 'Lessons from 200+ hours of data analysis internships — handling missing values, outlier detection, schema validation, and reproducible cleaning pipelines in Python and SQL.',
    longDescription: 'A practical guide distilled from hundreds of hours of real-world data analysis work. Covers systematic approaches to handling missing data (MCAR, MAR, MNAR classification with visualization), statistical outlier detection using IQR, Z-score, and isolation forests, schema validation with Great Expectations and custom SQL constraints, and building reproducible cleaning pipelines with dbt and Airflow. Includes code templates for common cleaning patterns, a decision tree for choosing imputation strategies, and anti-patterns to avoid. The article emphasizes pragmatic solutions over theoretical purity.',
    category: 'Data Science',
    tags: ['Python', 'SQL', 'Data Cleaning', 'Best Practices', 'Pandas', 'dbt', 'Great Expectations'],
    date: '2026-07-01',
    readTime: '8 min',
    status: 'Draft',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'accent',
    featured: false,
    wordCount: 2100,
    series: 'Data Engineering',
    part: 1,
    totalParts: 4,
  },
  {
    id: 'healthcare-ai-ethics',
    title: 'Privacy-Preserving AI in Healthcare: Local-First ML Approaches',
    excerpt: 'Examining federated learning, differential privacy, and on-device inference for sensitive health data — technical patterns for building trustworthy medical AI systems.',
    longDescription: 'A technical deep-dive into privacy-preserving machine learning for healthcare applications. Covers federated learning with TensorFlow.js for on-device training, differential privacy mechanisms (Gaussian, Laplace) with privacy budget accounting, secure multi-party computation basics, and homomorphic encryption trade-offs. Includes implementation patterns for local-first ML architectures, model inversion attack defenses, and regulatory compliance considerations (HIPAA, GDPR). The article provides a decision framework for choosing the right privacy technique based on data sensitivity, model complexity, and deployment constraints.',
    category: 'AI Ethics',
    tags: ['Privacy', 'Federated Learning', 'Healthcare', 'TensorFlow.js', 'Differential Privacy', 'HIPAA'],
    date: '2026-08-15',
    readTime: '18 min',
    status: 'In Progress',
    githubUrl: null,
    externalUrl: null,
    icon: BookOpen,
    color: 'primary',
    featured: true,
    wordCount: 5200,
    series: 'AI Safety',
    part: 1,
    totalParts: 2,
  },
  {
    id: 'fhir-standards-deep-dive',
    title: 'FHIR R4 for Developers: Building Interoperable Health Systems',
    excerpt: 'A practical guide to HL7 FHIR resources, profiles, and RESTful APIs — with code examples for patient records, observations, medications, and consent management.',
    longDescription: 'A developer-focused guide to HL7 FHIR R4, the standard for healthcare data interoperability. Covers core resources (Patient, Observation, MedicationRequest, Consent), profiling with StructureDefinitions, RESTful API patterns (search, bundles, transactions), SMART on FHIR authentication, and FHIRPath for clinical logic. Includes TypeScript examples using fhirclient, React hooks for FHIR data fetching, and a complete example of building a patient timeline view. Also covers validation with the FHIR validator, terminology services (LOINC, SNOMED CT, RxNorm), and common implementation pitfalls.',
    category: 'Healthcare Technology',
    tags: ['FHIR', 'HL7', 'Interoperability', 'Standards', 'TypeScript', 'SMART', 'FHIRPath'],
    date: '2026-09-01',
    readTime: '20 min',
    status: 'Planned',
    githubUrl: null,
    externalUrl: null,
    icon: FileText,
    color: 'secondary',
    featured: false,
    wordCount: 0,
    series: 'FHIR Development',
    part: 1,
    totalParts: 5,
  },
  {
    id: 'cpp-modern-patterns',
    title: 'Modern C++ Patterns: From C++11 to C++23',
    excerpt: 'A curated collection of modern C++ patterns that transform how we write systems code — concepts, ranges, coroutines, modules, and deducing this.',
    longDescription: 'A comprehensive tour of modern C++ features from C++11 through C++23 that fundamentally change systems programming. Covers concepts and constraints for template metaprogramming, ranges and views for algorithmic composition, coroutines for async/await patterns, modules for compilation speed, deducing this for CRTP elimination, std::expected for error handling, and std::mdspan for multi-dimensional arrays. Each pattern includes before/after code comparisons, compiler support tables, and performance implications. Written as a reference for C++ developers transitioning from legacy codebases.',
    category: 'C++ Programming',
    tags: ['C++20', 'C++23', 'Concepts', 'Ranges', 'Coroutines', 'Modules', 'Patterns'],
    date: '2026-03-15',
    readTime: '25 min',
    status: 'Published',
    githubUrl: 'https://github.com/kavyashah/cpp-modern-patterns',
    externalUrl: null,
    icon: FileText,
    color: 'primary',
    featured: true,
    wordCount: 6800,
    series: 'Modern C++',
    part: 1,
    totalParts: 3,
  },
  {
    id: 'ml-explainability-practices',
    title: 'ML Model Explainability in Production: SHAP, LIME, and Beyond',
    excerpt: 'Practical patterns for explaining model predictions in production systems — from global feature importance to local instance explanations with latency budgets.',
    longDescription: 'A production-focused guide to machine learning model explainability. Covers SHAP values (TreeSHAP, KernelSHAP, DeepSHAP) with performance optimization techniques, LIME for local explanations, integrated gradients for neural networks, and counterfactual explanations. Discusses latency budgets for real-time explanations, caching strategies for SHAP values, A/B testing explanation quality, and regulatory requirements for model transparency (EU AI Act, FDA guidance). Includes Python implementation patterns with shap, lime, and captum libraries, and architecture patterns for serving explanations alongside predictions.',
    category: 'Machine Learning',
    tags: ['SHAP', 'LIME', 'Explainability', 'Production ML', 'Python', 'Regulation', 'Captum'],
    date: '2026-05-20',
    readTime: '22 min',
    status: 'Published',
    githubUrl: 'https://github.com/kavyashah/ml-explainability',
    externalUrl: null,
    icon: BookOpen,
    color: 'secondary',
    featured: false,
    wordCount: 5900,
    series: 'ML Engineering',
    part: 2,
    totalParts: 4,
  },
  {
    id: 'typescript-type-system',
    title: 'Advanced TypeScript: Typing the Untypeable',
    excerpt: 'Pushing TypeScript\'s type system to its limits — conditional types, template literals, recursive types, and type-level programming for runtime safety.',
    longDescription: 'An exploration of TypeScript\'s advanced type system features for achieving runtime safety through compile-time guarantees. Covers conditional types with infer for pattern matching, template literal types for string manipulation, recursive types for tree structures, variadic tuple types for function composition, and type-level programming with the type-fest patterns. Includes practical examples: type-safe event emitters, database query builders, API client generation from OpenAPI specs, and form validation schemas. Also covers the limits of the type system and when to use runtime validation instead.',
    category: 'Web Development',
    tags: ['TypeScript', 'Type System', 'Conditional Types', 'Template Literals', 'Type-Level Programming'],
    date: '2026-04-10',
    readTime: '18 min',
    status: 'Published',
    githubUrl: 'https://github.com/kavyashah/ts-advanced-patterns',
    externalUrl: null,
    icon: FileText,
    color: 'accent',
    featured: false,
    wordCount: 4500,
    series: 'TypeScript Deep Dive',
    part: 1,
    totalParts: 3,
  },
]

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

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0],
    },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const categoryColors = {
  primary: { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', glow: 'primary' },
  accent: { bg: 'bg-accent/10', text: 'text-accent', border: 'border-accent/20', glow: 'accent' },
  secondary: { bg: 'bg-secondary/10', text: 'text-secondary', border: 'border-secondary/20', glow: 'secondary' },
}

const statusColors = {
  'Published': { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-200/50', icon: null },
  'Draft': { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-200/50', icon: null },
  'In Progress': { bg: 'bg-primary/10', text: 'text-primary', border: 'border-primary/20', icon: null },
  'Planned': { bg: 'bg-muted-foreground/10', text: 'text-muted-foreground', border: 'border-muted-foreground/20', icon: null },
}

interface WritingModalProps {
  piece: typeof writingPieces[0]
  isOpen: boolean
  onClose: () => void
  onNavigate: (direction: 'prev' | 'next') => void
  hasPrev: boolean
  hasNext: boolean
}

function WritingModal({ piece, isOpen, onClose, onNavigate, hasPrev, hasNext }: WritingModalProps) {
  const prefersReducedMotion = useReducedMotion()
  const colorScheme = categoryColors[piece.color as keyof typeof categoryColors] || categoryColors.primary
  const statusScheme = statusColors[piece.status as keyof typeof statusColors] || statusColors['Draft']

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft' && hasPrev) onNavigate('prev')
    if (e.key === 'ArrowRight' && hasNext) onNavigate('next')
  }

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, hasPrev, hasNext, onClose, onNavigate])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[600] flex items-center justify-center p-4 lg:p-8"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={overlayVariants}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <motion.div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          variants={overlayVariants}
        />

        <motion.div
          className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden glass-strong rounded-2xl"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between p-6 border-b border-border/30 sticky top-0 bg-background/95 backdrop-blur-sm z-10">
            <div className="flex-1 pr-6">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`} aria-hidden="true">
                  <piece.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border flex items-center gap-1.5`}>
                    {piece.status}
                  </span>
                  {piece.featured && (
                    <span className="ml-2 flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                      <span className="text-xs font-medium font-heading">Featured</span>
                    </span>
                  )}
                </div>
              </div>
              <h2 id="modal-title" className="text-h2 font-heading font-semibold tracking-tight text-foreground mb-2">
                {piece.title}
              </h2>
              <p id="modal-description" className="text-body text-muted-foreground">{piece.excerpt}</p>
            </div>

            <motion.button
              onClick={onClose}
              className="glass p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-accent/10 transition-all duration-fast flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close article details"
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Modal Content */}
          <div className="p-6 lg:p-8 overflow-y-auto max-h-[calc(90vh-80px)]">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-6">
                {/* Full Description */}
                <div className="space-y-4">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground">About This Article</h3>
                  <div className="prose prose-muted max-w-none">
                    <p className="text-body text-muted-foreground leading-relaxed whitespace-pre-wrap">{piece.longDescription}</p>
                  </div>
                </div>

                {/* Article Metadata */}
                <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
                    Article Details
                  </h3>
                  <dl className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <dt className="text-muted-foreground mb-1">Word Count</dt>
                      <dd className="text-foreground font-medium">{piece.wordCount > 0 ? piece.wordCount.toLocaleString() : '—'}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">Read Time</dt>
                      <dd className="text-foreground font-medium">{piece.readTime}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">Published</dt>
                      <dd className="text-foreground font-medium">{new Date(piece.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</dd>
                    </div>
                    <div>
                      <dt className="text-muted-foreground mb-1">Series</dt>
                      <dd className="text-foreground font-medium">{piece.series} {piece.totalParts > 1 ? `(Part ${piece.part} of ${piece.totalParts})` : ''}</dd>
                    </div>
                  </dl>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground flex items-center gap-2">
                    <Tag className="h-5 w-5 text-accent" aria-hidden="true" />
                    Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {piece.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Action Buttons */}
                <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm sticky top-24">
                  <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                    <ArrowUpRight className="h-5 w-5 text-accent" aria-hidden="true" />
                    Actions
                  </h3>
                  <div className="space-y-3">
                    {piece.githubUrl && (
                      <motion.a
                        href={piece.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label="View repository on GitHub"
                      >
                        <Github className="h-5 w-5" aria-hidden="true" />
                        View Repository
                      </motion.a>
                    )}
                    {piece.externalUrl && (
                      <motion.a
                        href={piece.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary w-full justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        aria-label="Read full article"
                      >
                        <ExternalLink className="h-5 w-5" aria-hidden="true" />
                        Read Article
                      </motion.a>
                    )}
                    {!piece.githubUrl && !piece.externalUrl && (
                      <div className="btn-ghost w-full justify-center gap-2 text-muted-foreground">
                        <span>Not yet published</span>
                      </div>
                    )}
                    <motion.button
                      className="btn-outline w-full justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigator.share?.({ title: piece.title, text: piece.excerpt, url: window.location.href })}
                    >
                      <Share2 className="h-5 w-5" aria-hidden="true" />
                      Share Article
                    </motion.button>
                    <motion.button
                      className="btn-ghost w-full justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Download className="h-5 w-5" aria-hidden="true" />
                      Save for Later
                    </motion.button>
                  </div>
                </div>

                {/* Series Navigation */}
                {piece.totalParts > 1 && (
                  <div className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm sticky top-24">
                    <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-accent" aria-hidden="true" />
                      Series: {piece.series}
                    </h3>
                    <div className="space-y-2">
                      {Array.from({ length: piece.totalParts }, (_, i) => i + 1).map((partNum) => (
                        <div
                          key={partNum}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                            partNum === piece.part
                              ? 'bg-accent/10 border-accent/30 border'
                              : 'bg-background/50 border-border/30 border'
                          }`}
                        >
                          <span className={`w-8 h-8 rounded-full flex items-center justify-center font-mono font-medium text-sm ${
                            partNum === piece.part
                              ? 'bg-accent text-bg'
                              : 'text-muted-foreground bg-muted/50'
                          }`}>
                            {partNum}
                          </span>
                          <span className={`font-medium ${partNum === piece.part ? 'text-foreground' : 'text-muted-foreground'}`}>
                            Part {partNum}
                          </span>
                          {partNum === piece.part && (
                            <span className="ml-auto text-xs font-medium text-accent">Current</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Modal Footer Navigation */}
          {(hasPrev || hasNext) && (
            <div className="flex items-center justify-between p-6 border-t border-border/30 bg-background/50 backdrop-blur-sm">
              <motion.button
                onClick={() => hasPrev && onNavigate('prev')}
                disabled={!hasPrev}
                className="btn-secondary gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Previous article"
              >
                <ChevronsLeft className="h-4 w-4" />
                Previous Article
              </motion.button>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">←</kbd>
                <span>Navigate Articles</span>
                <kbd className="px-2 py-1 rounded bg-background border border-border/50 font-mono">→</kbd>
              </div>
              <motion.button
                onClick={() => hasNext && onNavigate('next')}
                disabled={!hasNext}
                className="btn-secondary gap-2 ml-auto disabled:opacity-30 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                aria-label="Next article"
              >
                Next Article
                <ChevronsRight className="h-4 w-4" />
              </motion.button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export function Writing() {
  const prefersReducedMotion = useReducedMotion()
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid')
  const [openPiece, setOpenPiece] = React.useState<typeof writingPieces[0] | null>(null)
  const [currentPieceIndex, setCurrentPieceIndex] = React.useState(0)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [filterCategory, setFilterCategory] = React.useState<string>('All')
  const [filterStatus, setFilterStatus] = React.useState<string>('all')

  const featuredWriting = writingPieces.filter(w => w.featured)
  const allWriting = writingPieces

  // Filter writing pieces
  const filteredWriting = allWriting.filter(piece => {
    const matchesSearch = piece.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         piece.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         piece.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = filterCategory === 'All' || piece.category === filterCategory
    const matchesStatus = filterStatus === 'all' || piece.status.toLowerCase().replace(' ', '-') === filterStatus
    return matchesSearch && matchesCategory && matchesStatus
  })

  const categories = ['All', ...new Set(allWriting.map(w => w.category))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b))
  const statuses = [...new Set(allWriting.map(w => w.status.toLowerCase().replace(' ', '-')))].sort()

  const handleOpenModal = (piece: typeof writingPieces[0], index: number) => {
    setCurrentPieceIndex(index)
    setOpenPiece(piece)
  }

  const handleCloseModal = () => {
    setOpenPiece(null)
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    const currentIndex = filteredWriting.findIndex(p => p.id === openPiece?.id)
    if (currentIndex === -1) return

    let newIndex: number
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredWriting.length - 1
    } else {
      newIndex = currentIndex < filteredWriting.length - 1 ? currentIndex + 1 : 0
    }

    setCurrentPieceIndex(newIndex)
    setOpenPiece(filteredWriting[newIndex])
  }

  const hasPrev = filteredWriting.length > 1
  const hasNext = filteredWriting.length > 1

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

          {/* Controls - Search, Filters, View Mode */}
          <motion.div
            className="mb-10"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="glass p-4 rounded-2xl space-y-4">
              {/* Search */}
              <div className="relative max-w-md mx-auto sm:mx-0">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-12 py-3 pr-4 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all"
                  aria-label="Search articles"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="relative">
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all cursor-pointer"
                    aria-label="Filter by category"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                </div>
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="appearance-none px-4 py-2.5 pr-10 rounded-xl border border-border/30 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all cursor-pointer"
                    aria-label="Filter by status"
                  >
                    <option value="all">All Statuses</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                </div>
              </div>

              {/* View Mode Toggle */}
              <div className="flex justify-center">
                <div className="glass px-2 py-2 rounded-xl flex items-center gap-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'grid' ? 'text-foreground bg-accent/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                    }`}
                    aria-pressed={viewMode === 'grid'}
                    aria-label="Grid view"
                  >
                    <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">Grid</span>
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      viewMode === 'list' ? 'text-foreground bg-accent/10' : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                    }`}
                    aria-pressed={viewMode === 'list'}
                    aria-label="List view"
                  >
                    <List className="h-4 w-4" aria-hidden="true" />
                    <span className="hidden sm:inline">List</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Writing Grid */}
          {viewMode === 'grid' && (
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {filteredWriting.map((piece, index) => {
                const Icon = piece.icon
                const colorScheme = categoryColors[piece.color as keyof typeof categoryColors] || categoryColors.primary
                const statusScheme = statusColors[piece.status as keyof typeof statusColors] || statusColors['Draft']

                return (
                  <motion.article
                    key={piece.id}
                    className="card-editorial h-full flex flex-col overflow-hidden group cursor-pointer"
                    onClick={() => handleOpenModal(piece, index)}
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    {/* Status badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium font-heading ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border`}>
                        {piece.status}
                      </div>
                    </div>

                    {/* Article Visual */}
                    <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${piece.color}-glow)` }}>
                        <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
                          <Icon className="h-10 w-10" />
                        </div>
                      </div>

                      {/* Grid pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-normal"
                        aria-hidden="true"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath stroke='currentColor' strokeWidth='0.3' d='M0 0h40v40H0zM20 0v40M0 20h40'/%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: '40px 40px',
                          color: `var(--${piece.color})`,
                        }}
                      />

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-normal flex items-center justify-center gap-3 p-4">
                        {piece.githubUrl && (
                          <motion.a
                            href={piece.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            onClick={(e) => e.stopPropagation()}
                            aria-label="View repository on GitHub"
                          >
                            <Github className="h-4 w-4" aria-hidden="true" />
                            Repository
                          </motion.a>
                        )}
                        {piece.externalUrl && (
                          <motion.a
                            href={piece.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            onClick={(e) => e.stopPropagation()}
                            aria-label="Read full article"
                          >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Read Article
                          </motion.a>
                        )}
                        {!piece.githubUrl && !piece.externalUrl && (
                          <div className="glass px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground flex items-center gap-2">
                            <span>Coming Soon</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Article Content */}
                    <div className="flex-1 flex flex-col space-y-4">
                      {/* Category */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`}>
                          {piece.category}
                        </span>
                        {piece.featured && (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                            <span className="text-xs font-medium font-heading">Featured</span>
                          </span>
                        )}
                      </div>

                      <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2 line-clamp-2">
                        {piece.title}
                      </h3>

                      <p className="text-body text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {piece.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="pt-2 border-t border-border/30">
                        <div className="flex flex-wrap gap-1.5">
                          {piece.tags.slice(0, 5).map((tag) => (
                            <motion.span
                              key={tag}
                              className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.2 }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                          {piece.tags.length > 5 && (
                            <motion.span
                              className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.3 }}
                            >
                              +{piece.tags.length - 5} more
                            </motion.span>
                          )}
                        </div>
                      </div>

                      {/* Meta footer */}
                      <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-caption text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{formatDate(piece.date)}</span>
                          <span className="text-border">•</span>
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>{piece.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {piece.githubUrl && (
                            <a
                              href={piece.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg glass text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-fast"
                              onClick={(e) => e.stopPropagation()}
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
                              onClick={(e) => e.stopPropagation()}
                              aria-label="Read article"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* View Details CTA */}
                      <motion.div
                        className="pt-4 border-t border-border/30"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="flex items-center justify-between text-sm font-medium text-accent group-hover:gap-2 transition-gap">
                          <span>Read Article</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                        </div>
                      </motion.div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}

          {/* Writing List */}
          {viewMode === 'list' && (
            <motion.div
              className="space-y-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {filteredWriting.map((piece, index) => {
                const Icon = piece.icon
                const colorScheme = categoryColors[piece.color as keyof typeof categoryColors] || categoryColors.primary
                const statusScheme = statusColors[piece.status as keyof typeof statusColors] || statusColors['Draft']

                return (
                  <motion.article
                    key={piece.id}
                    className="card-editorial flex flex-row gap-6 p-6 group cursor-pointer overflow-hidden"
                    onClick={() => handleOpenModal(piece, index)}
                    variants={listItemVariants}
                    style={{ transitionDelay: `${index * 60}ms` }}
                  >
                    {/* Visual */}
                    <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center" style={{ background: `var(--${piece.color}-glow)` }}>
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border group-hover:scale-110 transition-transform duration-normal`} aria-hidden="true">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between min-w-0">
                      <div>
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${colorScheme.bg} ${colorScheme.text} ${colorScheme.border} border`}>
                            {piece.category}
                          </span>
                          <div className={`px-2.5 py-1 rounded-full text-xs font-medium font-heading ${statusScheme.bg} ${statusScheme.text} ${statusScheme.border} border`}>
                            {piece.status}
                          </div>
                          {piece.featured && (
                            <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-amber-500/10 text-amber-600 border border-amber-200/50">
                              <span className="text-xs font-medium font-heading">Featured</span>
                            </span>
                          )}
                        </div>

                        <h3 className="text-h4 font-heading font-medium tracking-tight text-foreground mb-2">
                          {piece.title}
                        </h3>

                        <p className="text-body text-muted-foreground leading-relaxed line-clamp-2">
                          {piece.excerpt}
                        </p>
                      </div>

                      {/* Tags + Actions + Meta */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-border/30">
                        <div className="flex flex-wrap gap-1.5">
                          {piece.tags.slice(0, 6).map((tag) => (
                            <span key={tag} className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast">
                              {tag}
                            </span>
                          ))}
                          {piece.tags.length > 6 && (
                            <span className="px-2.5 py-1 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-xs font-medium text-muted-foreground">
                              +{piece.tags.length - 6} more
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-2 text-caption text-muted-foreground">
                            <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{formatDate(piece.date)}</span>
                            <span className="text-border">•</span>
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>{piece.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            {piece.githubUrl && (
                              <a
                                href={piece.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                onClick={(e) => e.stopPropagation()}
                                aria-label="View repository on GitHub"
                              >
                                <Github className="h-4 w-4" aria-hidden="true" />
                                Repo
                              </a>
                            )}
                            {piece.externalUrl && (
                              <a
                                href={piece.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass px-3 py-2 rounded-xl text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-2"
                                whileHover={{ scale: 1.02 }}
                                onClick={(e) => e.stopPropagation()}
                                aria-label="Read full article"
                              >
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                                Read
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          )}

          {/* Empty State */}
          {filteredWriting.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Search className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" aria-hidden="true" />
              <h3 className="text-h3 font-heading font-medium text-foreground mb-2">No articles found</h3>
              <p className="text-body text-muted-foreground">Try adjusting your search or filters</p>
            </motion.div>
          )}

          {/* Results Count */}
          <motion.div
            className="mt-8 text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Showing {filteredWriting.length} of {allWriting.length} articles
          </motion.div>

          {/* Section Divider */}
          <div className="section-divider mt-12 lg:mt-16" aria-hidden="true">
            <span>End of Chapter Six</span>
          </div>
        </div>
      </section>

      {/* Writing Modal */}
      <WritingModal
        piece={openPiece!}
        isOpen={!!openPiece}
        onClose={handleCloseModal}
        onNavigate={handleNavigate}
        hasPrev={hasPrev}
        hasNext={hasNext}
      />
    </>
  )
}