/** Global CRT scanlines + schematic grid (fixed, non-interactive). */
export function TerminalBackdrop() {
  return (
    <>
      <div className="terminal-backdrop__grid" aria-hidden="true" />
      <div className="terminal-backdrop__scanlines" aria-hidden="true" />
    </>
  )
}
