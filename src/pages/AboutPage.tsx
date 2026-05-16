const SKILLS = [
  'UI / UX Design', 'React', 'TypeScript', 'Figma',
  'CSS', 'Node.js', 'Git', 'Python',
]

export function AboutPage() {
  return (
    <div className="about">

      <div className="about__session-header">
        <p>[SYSTEM SESSION STARTED AT 10:24:59 GMT+0]</p>
        <p>ID: USER_CHRLN_042 // ROOT ACCESS GRANTED</p>
      </div>

      {/* whoami */}
      <div className="terminal-block">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">whoami</span>
        </div>
        <div className="terminal-output--whoami">
          <h1>
            Hi, I'm Charlene — a designer &amp; developer bridging the gap
            between technical precision and human-centric aesthetics.
          </h1>
        </div>
      </div>

      {/* cat bio.txt */}
      <div className="terminal-block">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">cat bio.txt</span>
        </div>
        <div className="terminal-output">
          <p>
            Based in a digital-first environment, I specialize in crafting robust
            design systems and high-performance web applications.
          </p>
          <p>
            My workflow is rooted in the philosophy that software should be as
            expressive as it is functional, often drawing inspiration from
            retro-computational aesthetics and brutalist structures.
          </p>
        </div>
      </div>

      {/* ls skills/ */}
      <div className="terminal-block">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">ls skills/</span>
        </div>
        <div className="skills-grid">
          {SKILLS.map(s => (
            <span key={s} className="skill-tag">{s}</span>
          ))}
        </div>
      </div>

      {/* cat interests.txt */}
      <div className="terminal-block">
        <div className="terminal-line">
          <span className="terminal-prompt">$</span>
          <span className="terminal-cmd">cat interests.txt</span>
        </div>
        <div className="terminal-output">
          <p>Design Systems · Open Source · Photography · Coffee · Sci-Fi</p>
        </div>
      </div>

      {/* active cursor */}
      <div className="terminal-cursor-line">
        <span className="terminal-prompt">$</span>
        <div className="terminal-cursor-block" />
      </div>

    </div>
  )
}
