import { useEffect, useState } from 'react'

type Phase = 'line' | 'expand' | 'fade' | 'done'

interface TVLoaderProps {
  onComplete: () => void
}

export function TVLoader({ onComplete }: TVLoaderProps) {
  const [phase, setPhase] = useState<Phase>('line')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('expand'), 700)
    const t2 = setTimeout(() => setPhase('fade'), 1750)
    const t3 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 2350)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [onComplete])

  if (phase === 'done') return null

  return (
    <div className={`tv-loader${phase === 'fade' ? ' tv-loader--fade' : ''}`}>
      <div className="tv-loader__vignette" />
      <div className={`tv-loader__line${phase !== 'line' ? ' tv-loader__line--expand' : ''}`} />
      <p className="tv-loader__status">SYSTEM_STATUS: IGNITION_SEQUENCE_START</p>
    </div>
  )
}
