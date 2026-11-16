'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Linkedin, Github, MapPin, Phone, Download, Send, CheckCircle, AlertCircle, Loader2, ArrowRight, Sparkles, Target } from 'lucide-react'

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

export function Contact() {
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email address'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setFormState('submitting')

    // Simulate form submission (replace with actual endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, send to your backend/Formspree/EmailJS/etc.
    console.log('Form submitted:', formData)

    setFormState('success')
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset to idle after 5 seconds
    setTimeout(() => setFormState('idle'), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, copyable: true },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kavyashah', href: personalInfo.linkedin, external: true },
    { icon: Github, label: 'GitHub', value: 'github.com/kavyashah', href: personalInfo.github, external: true },
    { icon: MapPin, label: 'Location', value: 'Venice, Italy', copyable: false },
    { icon: Phone, label: 'Phone (IT)', value: '+39 393 457 5246', href: 'tel:+393934575246', copyable: true },
  ]

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-title"
    >
      <div className="container-custom">
        {/* Section Header - Editorial */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 lg:mb-20"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.span
            className="inline-block text-xs font-medium text-accent uppercase tracking-widest mb-4 font-heading"
            variants={itemVariants}
          >
            Chapter Ten
          </motion.span>
          <motion.h2
            id="contact-title"
            className="text-h1 font-heading font-semibold tracking-tight text-foreground mb-6"
            variants={itemVariants}
          >
            Let&apos;s <span className="text-primary">work together</span>
          </motion.h2>
          <motion.p
            className="text-body-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Currently seeking paid internships and professional opportunities in Data Science,
            AI, and Healthcare Technology. Open to remote and international roles.
          </motion.p
        </motion.div>

        {/* Contact Layout - Editorial Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-24"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Contact Info - Editorial Card */}
          <motion.div variants={itemVariants}>
            <div className="card-editorial p-6 lg:p-8 h-full">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                  <Mail className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground mb-3">
                    Get in Touch
                  </h3>
                  <p className="text-body text-muted-foreground leading-relaxed">
                    Whether you have a project in mind, an internship opportunity, or just want to connect —
                    I'd love to hear from you. I typically respond within 24-48 hours.
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-normal group"
                    variants={itemVariants}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all duration-fast" aria-hidden="true">
                      <contact.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.external ? '_blank' : undefined}
                          rel={contact.external ? 'noopener noreferrer' : undefined}
                          className="text-body text-foreground hover:text-accent transition-colors duration-fast truncate block group-hover:text-accent"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-body text-foreground">{contact.value}</p>
                      )}
                    </div>
                    {contact.copyable && (
                      <button
                        className="p-2 rounded-lg bg-muted hover:bg-muted-foreground/10 transition-colors text-muted-foreground hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group-hover:opacity-100 opacity-0 transition-opacity"
                        onClick={() => navigator.clipboard.writeText(contact.value)}
                        aria-label={`Copy ${contact.label.toLowerCase()}`}
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Quick stats */}
              <div className="pt-6 border-t border-border/30 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-foreground">24-48h</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">Response Time</p>
                </div>
                <div className="text-center border-x border-border/30">
                  <p className="text-2xl font-heading font-bold text-foreground">Global</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">Remote Friendly</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-foreground">Open</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading mt-1">To Opportunities</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Editorial Card */}
          <motion.div variants={itemVariants}>
            <div className="card-editorial p-6 lg:p-8 h-full">
              <header className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                    <Send className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">
                    Send a Message
                  </h3>
                </div>
                <p className="text-body text-muted-foreground leading-relaxed">
                  Direct messages reach me fastest. I read every submission personally.
                </p>
              </header>

              {formState === 'success' && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50/50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-200/50 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm">I'll get back to you within 24-48 hours.</p>
                  </div>
                </motion.div>
              )}

              {formState === 'error' && (
                <motion.div
                  className="flex items-center gap-3 p-4 rounded-xl bg-red-50/50 text-red-700 dark:bg-red-900/20 dark:text-red-400 border border-red-200/50 mb-6"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Failed to send message</p>
                    <p className="text-sm">Please try again or email me directly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    name="name"
                    label="Full Name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    error={errors.name || undefined}
                    required
                    autoComplete="name"
                    className="w-full"
                  />
                  <Input
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email || undefined}
                    required
                    autoComplete="email"
                    className="w-full"
                  />
                </div>

                <Input
                  name="subject"
                  label="Subject"
                  placeholder="Internship opportunity / Collaboration / Question"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject || undefined}
                  required
                  className="w-full"
                />

                <Textarea
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project, role, or question... (minimum 20 characters)"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message || undefined}
                  required
                  rows={5}
                  className="w-full"
                />

                <Button
                  type="submit"
                  className="w-full sm:w-auto group"
                  loading={formState === 'submitting'}
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" aria-hidden="true" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" aria-hidden="true" />
                      Send Message
                      <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to your data being processed in accordance with my
                  <a href="#" className="underline hover:text-accent transition-colors">Privacy Policy</a>.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Alternative Contact Methods - Editorial */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="card-editorial p-6 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center" aria-hidden="true">
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium text-accent uppercase tracking-widest font-heading">Other Ways to Connect</p>
                  <h3 className="text-h3 font-heading font-medium tracking-tight text-foreground">Let's start a conversation</h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="btn-primary"
                >
                  <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
                  Email Directly
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Linkedin className="h-5 w-5 mr-2" aria-hidden="true" />
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <Github className="h-5 w-5 mr-2" aria-hidden="true" />
                  GitHub
                </a>
                <a
                  href="/cv.pdf"
                  download="Kavya_Shah_CV.pdf"
                  className="btn-ghost"
                >
                  <Download className="h-5 w-5 mr-2" aria-hidden="true" />
                  Download CV
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-border/30 text-center">
                <p className="text-body text-muted-foreground mb-4">
                  Prefer a quick chat? Mention "VitaVerse" or "Data Science Internship" in your subject line
                  for priority attention.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-accent font-medium">
                  <Target className="h-4 w-4" aria-hidden="true" />
                  <span>Currently prioritizing: AI/ML Internships · Healthcare Tech Roles · Research Positions</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Divider */}
        <div className="section-divider mt-16 lg:mt-20" aria-hidden="true">
          <span>End of Chapter Ten</span>
        </div>
      </div>
    </section>
  )
}
