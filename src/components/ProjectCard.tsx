import type { Project } from '../data/siteContent'

type ProjectCardProps = {
  project: Project
  index: number
  compact?: boolean
}

export function ProjectCard({ project, index, compact = false }: ProjectCardProps) {
  const metadata = ['Market Intelligence', 'Risk Reporting', 'Macro Analysis', 'Technical Factsheet']

  return (
    <article className="casebook-row">
      <div className="grid gap-0 lg:grid-cols-[82px_1.2fr_1fr_1fr_1fr_250px]">
        <div className="casebook-cell flow-index-cell bg-page">
          <p className="font-serif text-4xl font-semibold text-gold">{String(index + 1).padStart(2, '0')}</p>
        </div>

        <div className="casebook-cell">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-gold">{project.category}</p>
          <h3 className="mt-2 font-serif text-[1.85rem] font-semibold leading-tight text-navy">{project.title}</h3>
          <p className="mt-2 text-base leading-7 text-ink">
            {project.thesis}
          </p>
          <span className="mt-4 inline-flex border border-gold/60 bg-page px-2 py-1 text-[0.68rem] font-bold uppercase tracking-[0.13em] text-navy">
            {metadata[index] ?? project.category}
          </span>
        </div>

        <div className="casebook-cell">
          <p className="mini-label">Context</p>
          <p className="mt-2 text-base leading-7 text-body">{project.problem}</p>
        </div>

        <div className="casebook-cell">
          <p className="mini-label">Method</p>
          <p className="mt-2 text-base leading-7 text-body">{project.approach}</p>
        </div>

        <div className="casebook-cell">
          <p className="mini-label">Output</p>
          <p className="mt-2 text-base leading-7 text-body">{project.output}</p>
        </div>

        <div className="casebook-cell">
          <p className="mini-label mb-2">Exhibit</p>
          <MiniVisual index={index} title={project.title} icon={project.visualIcon} />
          {!compact ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="report-chip">
                  {tool}
                </span>
              ))}
            </div>
          ) : null}
          {project.href === '#' ? (
            <span className="mt-4 inline-flex text-sm font-semibold text-muted">Project link to be added</span>
          ) : (
            <a
              href={project.href}
              target={project.external ? '_blank' : undefined}
              rel={project.external ? 'noreferrer' : undefined}
              className="mt-4 inline-flex text-sm font-semibold text-navy underline decoration-gold underline-offset-4 hover:text-gold"
            >
              {project.ctaLabel ?? 'View case study'}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function MiniVisual({ index, title, icon }: { index: number; title: string; icon?: string }) {
  if (index === 0) {
    return (
      <div className="mini-report flex items-center justify-center gap-3" aria-hidden="true">
        <img src="https://img.icons8.com/fluency/96/bullish.png" alt={`${title} bull icon`} className="h-12 w-12 object-contain" />
        <img src="https://img.icons8.com/fluency/96/bearish.png" alt={`${title} bear icon`} className="h-12 w-12 object-contain" />
      </div>
    )
  }

  if (icon) {
    return (
      <div className="mini-report flex items-center justify-center" aria-hidden="true">
        <img src={icon} alt={`${title} icon`} className="h-14 w-14 object-contain" />
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="mini-report" aria-hidden="true">
        <div className="h-2 w-28 bg-navy" />
        <div className="mt-3 grid grid-cols-[1fr_58px] gap-3">
          <div className="space-y-2">
            <span className="block h-2 w-full bg-border" />
            <span className="block h-2 w-4/5 bg-border" />
            <span className="block h-2 w-2/3 bg-border" />
          </div>
          <div className="rounded-full border-[10px] border-navy-soft border-r-gold p-4" />
        </div>
      </div>
    )
  }

  if (index === 3) {
    return (
      <div className="mini-chart" aria-hidden="true">
        {[24, 38, 49, 58, 61, 64, 66].map((height, itemIndex) => (
          <span key={itemIndex} style={{ height: `${height}%` }} />
        ))}
      </div>
    )
  }

  return (
    <div className="mini-flow" aria-hidden="true">
      <span />
      <i />
      <span />
      <i />
      <span />
      <i />
      <span />
    </div>
  )
}
