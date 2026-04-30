import type { AnalyticalStackGroup } from '../data/siteContent'
import { SectionHeading } from './SectionHeading'

type AnalyticalStackProps = {
  groups: AnalyticalStackGroup[]
}

export function AnalyticalStack({ groups }: AnalyticalStackProps) {
  return (
    <section className="border-b border-border bg-section">
      <div className="report-shell py-12">
        <SectionHeading
          label="Analytical Stack"
          title="Skills & tools grouped by market workflow"
          description="A compact view of the markets, risk, systems and reporting capabilities behind the portfolio work."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article key={group.title} className="report-card report-card-hover border-t-4 border-t-gold p-5">
              <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="report-chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
