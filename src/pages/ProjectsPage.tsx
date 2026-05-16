import { useNavigate } from 'react-router-dom'

const PROJECTS = [
  {
    id: '01', sec: 'SEC-A1',
    title: 'Personal Website',
    desc: 'A high-performance portfolio shell built with custom CRT shaders and retro-futuristic UI. Optimized for mainframe access.',
    tags: ['REACT', 'TYPESCRIPT', 'VITE'],
  },
  {
    id: '02', sec: 'SEC-A2',
    title: 'Project Alpha',
    desc: 'Decentralized communication protocol for secure edge-node data transmission. Encrypted via quantum-resistant algorithms.',
    tags: ['RUST', 'P2P', 'CRYPTO'],
  },
  {
    id: '03', sec: 'SEC-B1',
    title: 'Project Beta',
    desc: 'AI-driven neural interface for real-time data visualization of biometric sensor arrays.',
    tags: ['PYTHON', 'PYTORCH', 'WEBGL'],
  },
  {
    id: '04', sec: 'SEC-C2',
    title: 'Project Gamma',
    desc: 'Automated threat detection system for cloud environments with a zero-latency terminal dashboard.',
    tags: ['GO', 'AWS', 'KUBERNETES'],
  },
]

export function ProjectsPage() {
  const navigate = useNavigate()

  return (
    <div className="projects">
      <header className="projects__header">
        <div className="projects__coord">
          LAT: 34.0522<br />LON: -118.2437<br />SYS_STATUS: ACTIVE
        </div>
        <p className="section-eyebrow">Portfolio</p>
        <h1 className="section-heading">Projects</h1>
        <div className="section-underline" />
      </header>

      <div className="projects__grid">
        {PROJECTS.map(({ id, sec, title, desc, tags }) => (
          <div key={id} className="proj-card">
            <div className="proj-card__top-line" />
            <div className="proj-card__meta">
              <span className="proj-card__num">// {id}</span>
              <span className="proj-card__sec">{sec}</span>
            </div>
            <h3 className="proj-card__title">{title}</h3>
            <p className="proj-card__desc">{desc}</p>
            <div className="proj-card__tags">
              {tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>

      <section className="projects__footer-cta">
        <div>
          <h4>System Ready</h4>
          <p>
            Full project documentation is available upon request through the
            encrypted contact terminal.
          </p>
        </div>
        <button className="btn-execute" onClick={() => navigate('/contact')}>
          EXECUTE_CONTACT.SH
        </button>
      </section>
    </div>
  )
}
