'use client'

import { useEffect, useState } from 'react'

const MUSIC_BUTTON_SIZE_PX = 32

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = document.querySelector('audio')
    if (!audio) return

    setIsPlaying(true)

    const unlock = () => {
      audio.muted = false
      void audio.play().catch(() => {})
      setIsPlaying(true)
    }

    window.addEventListener('pointerdown', unlock, { once: true })
    window.addEventListener('keydown', unlock, { once: true })
    window.addEventListener('scroll', unlock, { once: true })

    return () => {
      window.removeEventListener('pointerdown', unlock)
      window.removeEventListener('keydown', unlock)
      window.removeEventListener('scroll', unlock)
    }
  }, [])

  const togglePlay = () => {
    const audio = document.querySelector('audio')
    if (!audio) return

    if (audio.paused || audio.muted) {
      audio.muted = false
      void audio.play().catch(() => {})
      setIsPlaying(true)
      return
    }

    audio.pause()
    setIsPlaying(false)
  }

  return (
    <>
      <button
        type="button"
        onClick={togglePlay}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: `${MUSIC_BUTTON_SIZE_PX}px`,
          height: `${MUSIC_BUTTON_SIZE_PX}px`,
          borderRadius: '50%',
          border: 'none',
          background: 'linear-gradient(135deg, #fbbf24 0%, #f97316 100%)',
          color: 'white',
          fontSize: '14px',
          cursor: 'pointer',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.18)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1.08)'
          el.style.boxShadow = '0 4px 14px rgba(251, 191, 36, 0.4)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget
          el.style.transform = 'scale(1)'
          el.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.18)'
        }}
        title="Play / Pause"
        aria-label="Play ou pausar música"
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <audio src="/rich-girl.mp3" loop autoPlay muted />
    </>
  )
}
