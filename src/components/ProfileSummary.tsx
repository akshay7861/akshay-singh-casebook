import type { ProfileSummaryBlock } from '../data/siteContent'
type ProfileSummaryProps = {
  blocks: ProfileSummaryBlock[]
}

export function ProfileSummary({ blocks }: ProfileSummaryProps) {
  return (
    <section className="section-fade border-b border-border bg-page">
      <div className="report-shell py-10">
        <div className="ornament-heading">
          <span />
          <p>Coverage & Analytical Toolkit</p>
          <span />
        </div>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {blocks.map((block) => {
            const footers: Record<string, string> = {
              Markets: 'Asset-class coverage',
              Risk: 'Risk lens',
              Systems: 'Automation layer',
            }

            return (
              <article key={block.title} className="value-card">
                <div className="value-mark" aria-hidden="true">
                  {block.iconPng ? (
                    <img src={block.iconPng} alt={block.iconAlt ?? `${block.title} icon`} className="h-10 w-10 object-contain" />
                  ) : (
                    block.title.slice(0, 1)
                  )}
                </div>
                <div>
                  <p className="mini-label">Coverage</p>
                  <h3 className="font-serif text-3xl font-semibold text-navy">{block.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {block.items.map((item) => (
                      <span key={item} className="toolkit-chip">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 border-t border-border pt-3 text-xs font-bold uppercase tracking-[0.14em] text-muted">
                    {footers[block.title]}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
