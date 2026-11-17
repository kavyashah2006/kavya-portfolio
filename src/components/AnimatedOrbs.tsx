'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AnimatedOrbs() {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--accent)', opacity: 0.05 }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ background: 'var(--accent-strong)', opacity: 0.04 }} />
        <div className="absolute top-1/3 right-1/6 w-64 h-64 rounded-full blur-3xl" style={{ background: 'var(--accent)', opacity: 0.03 }} />
        <div
          className="absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath stroke='currentColor' strokeWidth='0.5' d='M0 0h80v80H0zM40 0v80M0 40h80'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
            color: 'var(--border)',
          }}
        />
      </div>
    )
  }

  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      {/* Base gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Floating orbs - primary */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'var(--accent)', opacity: 0.08 }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating orbs - secondary */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ background: 'var(--accent-strong)', opacity: 0.06 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Floating orbs - accent */}
      <motion.div
        className="absolute top-1/3 right-1/6 w-64 h-64 rounded-full blur-3xl"
        style={{ background: 'var(--accent)', opacity: 0.05 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Editorial grid pattern - subtle */}
      <div
        className="absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath stroke='currentColor' strokeWidth='0.5' d='M0 0h80v80H0zM40 0v80M0 40h40'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px',
          color: 'var(--border)',
        }}
      />

      {/* Central ring - subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-border/30 rounded-full" />
    </div>
  )
}
