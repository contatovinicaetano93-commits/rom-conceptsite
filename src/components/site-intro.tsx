'use client'

import { useEffect, useState } from 'react'

const INTRO_DURATION_MS = 3500

export function SiteIntro() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const timer = window.setTimeout(() => {
      setVisible(false)
      document.body.style.overflow = previousOverflow
    }, INTRO_DURATION_MS)

    return () => {
      window.clearTimeout(timer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="site-intro"
      role="dialog"
      aria-modal="true"
      aria-label="Introdução ROM Concept"
      aria-live="polite"
    >
      <div className="site-intro__veil" aria-hidden />
      <div className="site-intro__content">
        <p className="site-intro__line site-intro__line--primary">#SEU MOMENTO ROM</p>
        <p className="site-intro__line site-intro__line--secondary">DOIS SALÕES. UM CONCEITO</p>
      </div>
    </div>
  )
}
