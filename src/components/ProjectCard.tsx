import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { id, secId, title, description, tags } = project

  return (
    <article className="proj-card">
      <div className="proj-card__top-line" aria-hidden="true" />
      <div className="proj-card__head">
        <span className="proj-card__num">// {id}</span>
        <span className="proj-card__sec">{secId}</span>
      </div>
      <div className="proj-card__media">
        <div className="proj-card__media-placeholder" aria-hidden="true" />
      </div>
      <h3 className="proj-card__title">{title}</h3>
      <p className="proj-card__desc">{description}</p>
      <div className="proj-card__tags">
        {tags.map(tag => (
          <span key={tag} className="proj-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
