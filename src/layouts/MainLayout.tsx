import { useState, useCallback } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Footer, TVLoader, LightTrails } from '@/components'
import SplashCursor from '@/components/SplashCursor'

export function MainLayout() {
  const [loaded, setLoaded] = useState(false)
  const location = useLocation()
  const handleLoaded = useCallback(() => setLoaded(true), [])

  return (
    <div className="layout layout--fixed-footer">
      <div className="page-gradient" aria-hidden="true" />
      <div className="crt-vignette" aria-hidden="true" />

      {!loaded && <TVLoader onComplete={handleLoaded} />}

      {loaded && <LightTrails />}

      {loaded && (
        <div className="splash-cursor-layer">
          <SplashCursor
            DENSITY_DISSIPATION={3.5}
            VELOCITY_DISSIPATION={2}
            PRESSURE={0.1}
            CURL={3}
            SPLAT_RADIUS={0.2}
            SPLAT_FORCE={6000}
            COLOR_UPDATE_SPEED={10}
            SHADING
            RAINBOW_MODE={false}
            COLOR="#00FF9C"
          />
        </div>
      )}

      <Navbar />
      <main>
        <div key={location.pathname} className="page-enter">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
