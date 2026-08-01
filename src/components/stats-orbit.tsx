'use client'

import type { CSSProperties } from 'react'
import { CountUp } from '@/components/count-up'
import { stats } from '@/lib/content'

export function StatsOrbit() {
  return (
    <div className="stats-orbit" data-reveal aria-label="Números ROM Concept">
      <div className="stats-orbit__stage">
        <div className="stats-orbit__ring">
          {stats.map((stat, index) => {
            const isHeroValue = stat.value.length <= 3
            return (
              <div
                key={stat.label}
                className="stats-orbit__item"
                style={{ '--orbit-index': index } as CSSProperties}
              >
                <div className="stats-orbit__billboard">
                  <div className="stats-orbit__face">
                    <div className="medallion-ring stats-orbit__medallion flex shrink-0 items-center justify-center rounded-full p-3">
                      <p
                        className={`stats-orbit__value font-serif leading-[1.1] ${
                          isHeroValue ? 'stats-orbit__value--hero' : ''
                        }`}
                      >
                        <CountUp value={stat.value} />
                      </p>
                    </div>
                    <p className="stats-orbit__label">{stat.label}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
