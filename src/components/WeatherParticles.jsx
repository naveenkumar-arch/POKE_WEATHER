import { useMemo } from 'react'

/* Generates weather-specific background particle effects */
export default function WeatherParticles({ condition }) {
  const drops = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    height: `${Math.random() * 60 + 40}px`,
    delay: `${Math.random() * 2}s`,
    duration: `${Math.random() * 0.5 + 0.6}s`,
    opacity: Math.random() * 0.5 + 0.3,
  })), [])

  const flakes = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 14 + 8}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 4 + 4}s`,
  })), [])

  if (condition === 'Rain' || condition === 'Drizzle') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {drops.map(d => (
          <div
            key={d.id}
            className="rain-drop"
            style={{
              left: d.left,
              height: d.height,
              animationDelay: d.delay,
              animationDuration: d.duration,
              opacity: d.opacity,
            }}
          />
        ))}
      </div>
    )
  }

  if (condition === 'Thunderstorm') {
    return (
      <>
        <div className="lightning-flash" />
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {drops.slice(0, 20).map(d => (
            <div
              key={d.id}
              className="rain-drop"
              style={{
                left: d.left,
                height: d.height,
                animationDelay: d.delay,
                animationDuration: d.duration,
                opacity: d.opacity,
                background: 'linear-gradient(transparent, #a78bfa)',
              }}
            />
          ))}
        </div>
      </>
    )
  }

  if (condition === 'Snow') {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {flakes.map(f => (
          <div
            key={f.id}
            className="snow-flake"
            style={{
              left: f.left,
              fontSize: f.size,
              animationDelay: f.delay,
              animationDuration: f.duration,
            }}
          >
            ❄
          </div>
        ))}
      </div>
    )
  }

  if (condition === 'Mist' || condition === 'Fog' || condition === 'Haze') {
    return <div className="fog-overlay" />
  }

  if (condition === 'Clear') {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-10 right-10 w-40 h-40 rounded-full opacity-20 sun-glow"
          style={{ background: 'radial-gradient(circle, #fbbf24, transparent)' }}
        />
      </div>
    )
  }

  return null
}
