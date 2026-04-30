import type { Metric } from '../data/siteContent'

type MetricStripProps = {
  metrics: Metric[]
}

export function MetricStrip({ metrics }: MetricStripProps) {
  const categories = ['Experience', 'Exposure', 'Attribution', 'Cost', 'Controls', 'Coverage']

  return (
    <article className="report-card market-monitor overflow-hidden border-t-4 border-t-gold">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
        <p className="section-label">Risk & Portfolio Impact Snapshot</p>
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
          Exposure | Attribution | Controls
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-6">
        {metrics.map((metric, index) => (
          <div
            key={metric.label}
            className={`metric-cell relative overflow-hidden p-6 ${index > 0 ? 'border-t border-border md:border-l md:border-t-0' : ''}`}
          >
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-gold">
              {categories[index] ?? 'Metric'}
            </p>
            <p className="text-4xl font-semibold tracking-tight text-navy">{metric.value}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{metric.label}</p>
            <div className="metric-spark" aria-hidden="true">
              {[34, 48, 42, 68, 56, 76].map((height, itemIndex) => (
                <span key={itemIndex} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
