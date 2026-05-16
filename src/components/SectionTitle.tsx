interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="section-title">
      {subtitle ? <p className="section-eyebrow">{subtitle}</p> : null}
      <h2 className="section-heading">{title}</h2>
    </header>
  )
}
