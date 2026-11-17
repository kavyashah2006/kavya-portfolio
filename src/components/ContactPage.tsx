'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Loader2, AlertCircle, MessageSquare, Clock, Globe } from 'lucide-react'
import { personalInfo } from '@/lib/data'

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

export function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In production, you'd integrate with a service like Formspree, EmailJS, or a custom API
      // For now, we'll simulate success
      setStatus('success')
      setFormState({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or email directly.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="section relative overflow-hidden" aria-labelledby="contact-hero-title">
        <div className="container-custom">
          <motion.div
            className="max-w-4xl mx-auto text-center py-20 lg:py-28"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.span
              className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-6 font-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Chapter Two — Connect
            </motion.span>
            <motion.h1
              id="contact-hero-title"
              className="text-h1 lg:text-display font-heading font-semibold tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Let&apos;s build
              <br />
              <span className="text-accent">something meaningful</span>
              <br />
              together
            </motion.h1>
            <motion.p
              className="text-body-lg lg:text-h3 text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Open to internships, research collaborations, and conversations about data science,
              AI, healthcare technology, and digital innovation. Currently based in Venice,
              working globally.
            </motion.p>
          </motion.div>

          {/* Decorative orbs */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-muted/30" aria-labelledby="contact-content-title">
        <div className="container-custom">
          <motion.div
            className="grid lg:grid-cols-12 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
          >
            {/* Left Column - Editorial Context */}
            <div className="lg:col-span-7 space-y-8">
              {/* Introduction */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Get in Touch
                  </h2>
                  <p className="text-body text-muted-foreground mt-2">
                    The best conversations start with curiosity
                  </p>
                </header>
                <div className="prose space-y-6">
                  <p className="text-body text-muted-foreground leading-relaxed drop-cap">
                    Whether you&apos;re looking for a data science intern, exploring a research
                    collaboration, or just want to chat about the future of AI in healthcare&mdash;
                    I&apos;d love to hear from you.
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    I&apos;m currently a second-year BSc Data Science student at Ca&apos; Foscari
                    University of Venice, with hands-on experience in data analysis, machine learning,
                    and building digital health products. My background spans Python, SQL, statistical
                    modeling, and modern web technologies.
                  </p>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    I respond to most messages within 24-48 hours. For time-sensitive opportunities,
                    email is the fastest way to reach me.
                  </p>
                </div>

                {/* Pull quote */}
                <blockquote className="pull-quote my-8 relative">
                  <span className="absolute -top-8 left-0 text-6xl font-heading text-primary/20" aria-hidden="true">&ldquo;</span>
                  <p className="relative text-h3 font-heading font-medium text-foreground leading-tight italic">
                    &ldquo;The most interesting problems live at the intersection of disciplines.
                    Data science isn&rsquo;t just about code&mdash;it&rsquo;s about understanding
                    people, systems, and the world we&rsquo;re building.&rdquo;
                  </p>
                </blockquote>
              </motion.article>

              {/* What I'm Looking For */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Currently Seeking
                  </h2>
                </header>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { icon: Briefcase, title: 'Data Science Internships', description: 'Summer 2025 / Off-cycle roles in analytics, ML, or data engineering', color: 'primary' },
                    { icon: Brain, title: 'AI/ML Research', description: 'Collaborations on NLP, computer vision, or healthcare AI projects', color: 'accent' },
                    { icon: HeartPulse, title: 'Healthcare Tech', description: 'Digital health, FHIR, medical AI, or health data analytics', color: 'secondary' },
                    { icon: Globe, title: 'Global Impact', description: 'UN agencies, NGOs, or international organizations', color: 'primary' },
                    { icon: Lightbulb, title: 'Product Building', description: 'Early-stage ventures at the data×health intersection', color: 'accent' },
                    { icon: MessageSquare, title: 'Mentorship & Guidance', description: 'Coffee chats with fellow builders and researchers', color: 'secondary' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="glass p-5 rounded-xl border border-border/50 group hover:border-accent/30 hover:shadow-lg transition-all duration-normal"
                      variants={itemVariants}
                      style={{ transitionDelay: `${index * 60}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${item.color === 'primary' ? 'bg-primary/10 text-primary' : item.color === 'accent' ? 'bg-accent/10 text-accent' : 'bg-secondary/10 text-secondary'}`}
                          aria-hidden="true"
                        >
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-foreground font-heading">
                            {item.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.article>

              {/* Skills Highlight */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h2 className="text-h2 font-heading font-medium tracking-tight text-foreground">
                    Technical Toolkit
                  </h2>
                </header>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    'Python', 'SQL', 'TypeScript', 'React', 'Next.js',
                    'Pandas', 'NumPy', 'scikit-learn', 'TensorFlow', 'PyTorch',
                    'D3.js', 'Recharts', 'Tableau', 'PostgreSQL', 'Firebase',
                    'Git', 'Docker', 'REST APIs', 'GraphQL', 'Tailwind CSS',
                    'Framer Motion', 'Figma', 'LaTeX', 'R', 'MATLAB'
                  ].map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm text-sm font-medium text-foreground hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                      variants={itemVariants}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            </div>

            {/* Right Column - Contact Form & Info */}
            <div className="lg:col-span-5 space-y-8">
              {/* Contact Methods */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Direct Channels
                  </h3>
                  <p className="text-body text-muted-foreground mt-2">
                    Fastest ways to reach me
                  </p>
                </header>
                <div className="space-y-3">
                  {[
                    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, description: 'Preferred for opportunities', primary: true },
                    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kavyashah', href: personalInfo.linkedin, description: 'Professional network', external: true },
                    { icon: Github, label: 'GitHub', value: 'github.com/kavyashah', href: personalInfo.github, description: 'Code & experiments', external: true },
                    { icon: Download, label: 'Download CV', value: 'CV.pdf', href: personalInfo.cvUrl, description: 'Full resume (PDF)', download: true },
                  ].map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.external ? '_blank' : undefined}
                      rel={contact.external ? 'noopener noreferrer' : undefined}
                      download={contact.download}
                      className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-normal group ${
                        contact.primary
                          ? 'border-accent/30 bg-accent/5'
                          : 'border-border/50 bg-background/50 hover:border-accent/30'
                      }`}
                    >
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-fast ${
                          contact.primary
                            ? 'bg-accent/10 text-accent'
                            : 'bg-primary/10 text-primary'
                        }`}
                        aria-hidden="true"
                      >
                        <contact.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                          {contact.label}
                        </p>
                        <p className="text-sm text-foreground truncate group-hover:text-accent transition-colors">
                          {contact.value}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{contact.description}</p>
                      </div>
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true">&rarr;</span>
                    </a>
                  ))}
                </div>
              </motion.article>

              {/* Quick Facts */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Good to Know
                  </h3>
                </header>
                <dl className="space-y-4" role="list">
                  {[
                    { label: 'Location', value: 'Venice, Italy', icon: MapPin },
                    { label: 'Timezone', value: 'CET (UTC+1)', icon: Clock },
                    { label: 'Availability', value: 'Remote-friendly, global', icon: Globe },
                    { label: 'Response Time', value: '24-48 hours typically', icon: Clock },
                    { label: 'Work Authorization', value: 'EU Student Visa', icon: Shield },
                    { label: 'English', value: 'IELTS C1 (Proficient)', icon: Award },
                  ].map((fact, index) => (
                    <motion.div
                      key={fact.label}
                      className="p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm group hover:border-accent/30 transition-all duration-normal"
                      variants={itemVariants}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <dt className="text-xs font-medium text-muted-foreground uppercase tracking-widest font-heading mb-2 flex items-center gap-2">
                        <fact.icon className="h-4 w-4" aria-hidden="true" />
                        {fact.label}
                      </dt>
                      <dd className="text-body font-medium text-foreground ml-6">
                        {fact.value}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.article>

              {/* Contact Form */}
              <motion.article
                className="card-editorial space-y-6"
                variants={itemVariants}
              >
                <header>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-body text-muted-foreground mt-2">
                    Or use the form below&mdash;I read every message
                  </p>
                </header>

                {/* Success State */}
                {status === 'success' && (
                  <motion.div
                    className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium">Message sent successfully!</p>
                        <p className="text-sm opacity-80 mt-1">I&apos;ll get back to you within 24-48 hours.</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-4 text-sm font-medium text-emerald-600 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}

                {/* Error State */}
                {status === 'error' && (
                  <motion.div
                    className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <p className="text-sm">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  aria-label="Contact form"
                  style={{ opacity: status === 'success' ? 0.5 : 1, pointerEvents: status === 'success' ? 'none' : 'auto' }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground font-heading"
                      >
                        Name <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-transparent transition-all duration-fast disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="Your name"
                        aria-required="true"
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground font-heading"
                      >
                        Email <span className="text-destructive" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-transparent transition-all duration-fast disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="you@example.com"
                        aria-required="true"
                        autoComplete="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground font-heading"
                    >
                      Subject <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-transparent transition-all duration-fast disabled:opacity-50 disabled:cursor-not-allowed appearance-none bg-no-repeat bg-right"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 12px center',
                        backgroundSize: '16px',
                        paddingRight: '44px',
                      }}
                      aria-required="true"
                    >
                      <option value="" disabled>
                        Select a topic
                      </option>
                      <option value="internship">Internship Opportunity</option>
                      <option value="research">Research Collaboration</option>
                      <option value="healthcare">Healthcare Technology</option>
                      <option value="product">Product / Startup</option>
                      <option value="mentorship">Mentorship / Coffee Chat</option>
                      <option value="speaking">Speaking / Workshop</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground font-heading"
                    >
                      Message <span className="text-destructive" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      disabled={status === 'submitting'}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-transparent transition-all duration-fast resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Tell me about your project, opportunity, or question..."
                      aria-required="true"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-6 rounded-xl font-medium font-heading text-sm transition-all duration-fast group flex items-center justify-center gap-2
                      bg-accent text-accent-foreground hover:shadow-xl hover:shadow-accent/25
                      disabled:opacity-50 disabled:cursor-not-allowed
                      focus:outline-none focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you agree to share your name and email for the purpose of this conversation.
                    No spam, ever. See <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
                  </p>
                </form>
              </motion.article>
            </div>
          </motion.div>

          {/* Section Divider */}
          <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
            <span>End of Chapter Two</span>
          </div>
        </div>
      </section>
    </>
  )
}