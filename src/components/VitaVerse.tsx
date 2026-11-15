'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { HeartPulse, Shield, QrCode, Smartphone, Cloud, Cpu, Zap, ArrowRight, CheckCircle, Github } from 'lucide-react'

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

const features = [
  {
    id: 'health-vault',
    title: 'Health Vault',
    description: 'Secure, patient-owned personal health record storage with end-to-end encryption. Consolidate medical history, lab results, prescriptions, and immunizations in one place — fully under your control.',
    icon: Shield,
    iconBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    highlights: ['End-to-end encryption', 'FHIR-compliant data model', 'Patient-controlled access', 'Audit trail & consent management'],
  },
  {
    id: 'ai-insights',
    title: 'AI Health Insights',
    description: 'Personalized health analytics powered by machine learning. Trend detection, anomaly alerts, medication adherence tracking, and predictive insights — all processed locally for privacy.',
    icon: Cpu,
    iconBg: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    highlights: ['Local-first ML processing', 'Trend & anomaly detection', 'Medication adherence', 'Predictive risk scoring'],
  },
  {
    id: 'qr-sharing',
    title: 'QR Health Sharing',
    description: 'Instant emergency access via dynamic QR codes. First responders scan to view critical health data — allergies, conditions, medications, emergency contacts — without login or app installation.',
    icon: QrCode,
    iconBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
    highlights: ['No app required for access', 'Configurable data visibility', 'Time-limited emergency tokens', 'Offline-capable QR codes'],
  },
  {
    id: 'wearable-integration',
    title: 'Wearable Integration',
    description: 'Real-time health monitoring through seamless wearable device connectivity. Sync heart rate, sleep, activity, SpO2, and more — feeding the Health Vault and powering AI insights.',
    icon: Smartphone,
    iconBg: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    highlights: ['Apple HealthKit / Google Fit', 'Continuous glucose monitors', 'ECG & SpO2 devices', 'Background sync & battery optimization'],
  },
  {
    id: 'ecosystem',
    title: 'Digital Healthcare Ecosystem',
    description: 'Interoperable platform connecting patients, providers, and researchers. Secure data exchange with consent, clinical trial matching, and population health analytics — all privacy-preserving.',
    icon: Cloud,
    iconBg: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400',
    highlights: ['Provider portal & API', 'Research data marketplace', 'Consent-driven sharing', 'Regulatory compliance (GDPR, HIPAA)'],
  },
  {
    id: 'privacy-first',
    title: 'Privacy-First Architecture',
    description: 'Built on zero-knowledge principles. Your health data never leaves your control — encrypted at rest, encrypted in transit, processed locally. No surveillance, no data monetization, ever.',
    icon: Zap,
    iconBg: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    highlights: ['Zero-knowledge encryption', 'Local-first computation', 'No third-party data access', 'Open-source core components'],
  },
]

const techStack = [
  { name: 'Next.js 14', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Supabase/Firebase', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Prisma ORM', category: 'Database' },
  { name: 'OpenAI API', category: 'AI/ML' },
  { name: 'TensorFlow.js', category: 'AI/ML' },
  { name: 'FHIR R4', category: 'Standards' },
  { name: 'HealthKit/Google Fit', category: 'Integrations' },
  { name: 'Web Crypto API', category: 'Security' },
  { name: 'PWA', category: 'Platform' },
]

export function VitaVerse() {
  return (
    <section
      id="vitaverse"
      className="section bg-gradient-to-b from-background via-muted/30 to-background"
      aria-labelledby="vitaverse-title"
    >
      <div className="container-custom">
        {/* Hero Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-20 relative"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Decorative accent line */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
            variants={itemVariants}
            aria-hidden="true"
          />

          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4"
            variants={itemVariants}
          >
            Startup Concept — In Development
          </motion.span>

          <motion.h2
            id="vitaverse-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            VitaVerse
          </motion.h2>

          <motion.p
            className="text-h3 font-body font-normal text-accent mb-8 font-medium"
            variants={itemVariants}
          >
            Your Life. Your Health. One Ecosystem.
          </motion.p>

          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A comprehensive digital health platform concept combining personal health record management,
            AI-powered health insights, QR-based emergency health sharing, and wearable technology integration.
            <br /><br />
            <span className="text-sm font-medium text-muted-foreground/80">
              Currently in early-stage development — exploring product strategy, data architecture, and technical feasibility.
            </span>
          </motion.p>

          {/* Status badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
            variants={itemVariants}
          >
            <span className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground">
              Concept Stage
            </span>
            <span className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground">
              Not a Registered Company
            </span>
            <span className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium text-foreground">
              No Medical Validation Claimed
            </span>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.id}
              className="card-hover p-6 h-full flex flex-col"
              variants={itemVariants}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconBg} mb-4`}>
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-body text-muted-foreground leading-relaxed mb-5 flex-1">
                {feature.description}
              </p>

              <ul className="space-y-2" role="list">
                {feature.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>

        {/* Technical Architecture */}
        <motion.div
          className="mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-wider mb-4"
              variants={itemVariants}
            >
              Technical Architecture
            </motion.span>
            <motion.h3
              className="text-h2 font-heading font-medium tracking-tight text-foreground"
              variants={itemVariants}
            >
              Planned technology stack & standards
            </motion.h3>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto"
            variants={itemVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="p-4 rounded-lg border border-border bg-card text-center hover:border-accent/30 transition-all duration-base group"
                variants={itemVariants}
                style={{ transitionDelay: `${index * 30}ms` }}
              >
                <p className="text-body font-medium text-foreground">{tech.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{tech.category}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Vision & Roadmap */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Vision */}
          <div className="card p-8">
            <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-6 flex items-center gap-3">
              <HeartPulse className="h-6 w-6 text-accent" aria-hidden="true" />
              Vision
            </h3>
            <div className="space-y-4 text-body text-muted-foreground leading-relaxed">
              <p>
                VitaVerse envisions a world where every individual owns and controls their complete health narrative —
                seamlessly portable, intelligently analyzed, and securely shareable on their terms.
              </p>
              <p>
                By combining patient-owned data vaults with local-first AI and universal emergency access,
                we aim to bridge the gap between fragmented healthcare systems and empowered patients.
              </p>
              <p className="text-accent font-medium">
                This is a concept under active exploration — not a launched product or medically validated system.
              </p>
            </div>
          </div>

          {/* Roadmap */}
          <div className="card p-8">
            <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-6 flex items-center gap-3">
              <Zap className="h-6 w-6 text-accent" aria-hidden="true" />
              Development Roadmap
            </h3>
            <ol className="space-y-4" role="list">
              {[
                { phase: 'Phase 1', title: 'Core Health Vault', desc: 'Secure record storage, FHIR data model, encryption, consent management' },
                { phase: 'Phase 2', title: 'QR Emergency Access', desc: 'Dynamic QR codes, offline capability, configurable visibility' },
                { phase: 'Phase 3', title: 'Wearable Integration', desc: 'HealthKit/Google Fit sync, background updates, battery optimization' },
                { phase: 'Phase 4', title: 'AI Insights Engine', desc: 'Local ML models, trend detection, anomaly alerts, privacy-preserving' },
                { phase: 'Phase 5', title: 'Ecosystem & API', desc: 'Provider portal, researcher access, clinical trial matching, compliance' },
              ].map((item, index) => (
                <motion.li
                  key={item.phase}
                  className="flex gap-4"
                  variants={itemVariants}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-accent font-medium text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-medium text-accent uppercase tracking-wider">{item.phase}</span>
                      <span className="text-body font-medium text-foreground">{item.title}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-body text-muted-foreground mb-6">
            Interested in collaborating, providing feedback, or learning more?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/kavyashah/vitaverse"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="h-5 w-5 mr-2" aria-hidden="true" />
              View Repository
            </a>
            <a
              href="#contact"
              className="btn-secondary"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
              <ArrowRight className="h-5 w-5 ml-2" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}