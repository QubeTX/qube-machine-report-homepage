import { useEffect, useState } from 'react'

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    let wasVisible = false

    const syncVisibility = () => {
      const threshold = Math.max(480, window.innerHeight * 0.6)
      const nextVisible = window.scrollY > threshold

      if (nextVisible !== wasVisible) {
        wasVisible = nextVisible
        setIsVisible(nextVisible)
      }
    }

    syncVisibility()
    window.addEventListener('scroll', syncVisibility, { passive: true })
    window.addEventListener('resize', syncVisibility)

    return () => {
      window.removeEventListener('scroll', syncVisibility)
      window.removeEventListener('resize', syncVisibility)
    }
  }, [])

  const scrollToTop = (event) => {
    event.currentTarget.blur()
    setIsHovered(false)

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth'
    })
  }

  return (
    <button
      type="button"
      className="back-to-top-button"
      aria-label="Back to top"
      aria-hidden={!isVisible}
      title="Back to top"
      tabIndex={isVisible ? 0 : -1}
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        right: 'clamp(1rem, 2vw, 2rem)',
        bottom: 'clamp(1rem, 2vw, 2rem)',
        width: '44px',
        height: '44px',
        display: 'grid',
        placeItems: 'center',
        border: `1px solid ${isHovered ? 'var(--accent-signal)' : '#444'}`,
        borderRadius: '50%',
        background: isHovered ? 'var(--accent-signal)' : 'rgba(10, 10, 10, 0.88)',
        color: isHovered ? 'var(--bg-void)' : 'var(--fg-bone)',
        boxShadow: isHovered
          ? '0 0 20px rgba(255, 0, 212, 0.25)'
          : '0 8px 24px rgba(0, 0, 0, 0.35)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(8px)',
        fontFamily: 'var(--font-mono)',
        fontSize: '1.15rem',
        lineHeight: 1,
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(8px) scale(0.96)',
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: [
          'opacity 220ms ease',
          'transform 220ms ease',
          'background-color 180ms ease',
          'border-color 180ms ease',
          'color 180ms ease',
          'box-shadow 180ms ease'
        ].join(', '),
        zIndex: 1000
      }}
    >
      <span aria-hidden="true">↑</span>
    </button>
  )
}
