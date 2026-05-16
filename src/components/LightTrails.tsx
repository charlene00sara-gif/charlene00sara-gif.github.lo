/** Cyber neon planet — particle surface + ring system (reference asset). */
export function LightTrails() {
  return (
    <div className="planet-scene" aria-hidden="true">
      <div className="planet-scene__halo" />
      <div className="planet-scene__halo planet-scene__halo--outer" />
      <img
        className="planet-scene__img"
        src="/images/planet-neon.png"
        alt=""
        width={718}
        height={1024}
        loading="lazy"
        decoding="async"
        draggable={false}
      />
    </div>
  )
}
