import type { Experience } from '../data/siteContent'

type ExperienceCardProps = {
  experience: Experience
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <article className="report-card report-card-hover p-6 lg:even:mt-8">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold">
        {experience.company}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-ink">{experience.role}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.coverageTags.map((tag) => (
          <span key={tag} className="report-chip">
            {tag}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-3 text-base leading-7 text-body">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="border-l-2 border-border pl-4">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  )
}
