import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { Lab } from '@/components/Lab'
import { Writing } from '@/components/Writing'
import { Providers } from '@/components/Providers'
import Link from 'next/link'
import { ArrowRight, MessageSquare, Mail } from 'lucide-react'

export default function Home() {
  return (
    <Providers>
      <Hero />
      <Work />
      <Lab />
      <Writing />
      {/* CTA Section - Link to dedicated About & Contact pages */}
      <section className="section bg-muted/30" aria-labelledby="cta-title">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass p-8 lg:p-12 rounded-2xl border border-border/50">
              <h2 id="cta-title" className="text-h1 lg:text-h1 font-heading font-semibold tracking-tight text-foreground mb-4">
                Want to know more?
              </h2>
              <p className="text-body-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Explore the full story — my background, interests, and how to get in touch.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-medium font-heading text-sm hover:shadow-xl hover:shadow-accent/25 transition-all duration-fast"
                >
                  Read Full Story
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm text-foreground font-medium font-heading text-sm hover:border-accent/30 hover:bg-accent/5 transition-all duration-fast"
                >
                  <MessageSquare className="h-4 w-4" aria-hidden="true" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Providers>
  )
}