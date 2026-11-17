'use client'

import * as React from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface TextScrambleProps {
  text: string
  className?: string
  speed?: number
  delay?: number
  chars?: string
  onComplete?: () => void
  trigger?: 'hover' | 'visible' | 'mount'
}

const DEFAULT_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()'

export function TextScramble({
  text,
  className = '',
  speed = 30,
  delay = 0,
  chars = DEFAULT_CHARS,
  onComplete,
  trigger = 'mount',
}: TextScrambleProps) {
  const reducedMotion = useReducedMotion()
  const [displayText, setDisplayText] = React.useState(text)
  const [isAnimating, setIsAnimating] = React.useState(false)
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const ref = React.useRef<HTMLSpanElement>(null)
  const animationRef = React.useRef<number>()

  const scramble = React.useCallback(() => {
    if (reducedMotion) {
      setDisplayText(text)
      setIsAnimating(false)
      onComplete?.()
      return
    }

    setIsAnimating(true)
    let iteration = 0
    const maxIterations = text.length * 2

    const animate = () => {
      if (iteration < maxIterations) {
        let scrambled = ''
        for (let i = 0; i < text.length; i++) {
          if (i < iteration / 2) {
            scrambled += text[i]
          } else {
            scrambled += chars[Math.floor(Math.random() * chars.length)]
          }
        }
        setDisplayText(scrambled)
        iteration++
        animationRef.current = requestAnimationFrame(animate)
      } else {
        setDisplayText(text)
        setIsAnimating(false)
        setHasAnimated(true)
        onComplete?.()
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }, [text, chars, reducedMotion, onComplete])

  const startAnimation = React.useCallback(() => {
    if (hasAnimated || isAnimating) return
    if (delay > 0) {
      setTimeout(scramble, delay)
    } else {
      scramble()
    }
  }, [scramble, delay, hasAnimated, isAnimating])

  // Trigger on mount
  React.useEffect(() => {
    if (trigger === 'mount') {
      startAnimation()
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [trigger, startAnimation])

  // Trigger on hover
  const handleMouseEnter = React.useCallback(() => {
    if (trigger === 'hover') {
      startAnimation()
    }
  }, [trigger, startAnimation])

  // Trigger when visible (using IntersectionObserver)
  React.useEffect(() => {
    if (trigger !== 'visible') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [trigger, hasAnimated, startAnimation])

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={handleMouseEnter}
      aria-label={text}
      data-scrambling={isAnimating}
    >
      {displayText}
    </span>
  )
}

interface ScrambleTextProps {
  children: React.ReactNode
  className?: string
  speed?: number
  delay?: number
  chars?: string
  trigger?: 'hover' | 'visible' | 'mount'
}

export function ScrambleText({
  children,
  className = '',
  speed = 30,
  delay = 0,
  chars = DEFAULT_CHARS,
  trigger = 'mount',
}: ScrambleTextProps) {
  const text = typeof children === 'string' ? children : ''
  return (
    <TextScramble
      text={text}
      className={className}
      speed={speed}
      delay={delay}
      chars={chars}
      trigger={trigger}
    />
  )
}

// Hook for manual control
export function useTextScramble(text: string, chars = DEFAULT_CHARS) {
  const reducedMotion = useReducedMotion()
  const [displayText, setDisplayText] = React.useState(text)
  const [isAnimating, setIsAnimating] = React.useState(false)

  const scramble = React.useCallback(
    (onComplete?: () => void) => {
      if (reducedMotion) {
        setDisplayText(text)
        onComplete?.()
        return
      }

      setIsAnimating(true)
      let iteration = 0
      const maxIterations = text.length * 2

      const animate = () => {
        if (iteration < maxIterations) {
          let scrambled = ''
          for (let i = 0; i < text.length; i++) {
            if (i < iteration / 2) {
              scrambled += text[i]
            } else {
              scrambled += chars[Math.floor(Math.random() * chars.length)]
            }
          }
          setDisplayText(scrambled)
          iteration++
          requestAnimationFrame(animate)
        } else {
          setDisplayText(text)
          setIsAnimating(false)
          onComplete?.()
        }
      }

      animate()
    },
    [text, chars, reducedMotion]
  )

  return { displayText, isAnimating, scramble }
}