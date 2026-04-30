import type { Metric } from '../data/siteContent'

type MetricCardProps = {
  metric: Metric
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <article className="report-card p-5 transition hover:border-gold">
      <p className="text-3xl font-semibold text-navy">{metric.value}</p>
      <p className="mt-3 text-sm leading-6 text-body">{metric.label}</p>
    </article>
  )
}
