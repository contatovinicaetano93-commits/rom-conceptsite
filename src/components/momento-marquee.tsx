const ITEMS = Array.from({ length: 10 }, () => 'Seu momento Rom')

export function MomentoMarquee() {
  const loop = [...ITEMS, ...ITEMS]

  return (
    <div className="momento-marquee" aria-hidden>
      <div className="momento-marquee__track">
        {loop.map((text, index) => (
          <span key={`${text}-${index}`} className="momento-marquee__item">
            {text}
            <span className="momento-marquee__sep">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
