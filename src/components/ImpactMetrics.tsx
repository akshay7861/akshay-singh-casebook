import type { Metric } from '../data/siteContent'
import { MetricStrip } from './MetricStrip'

type ImpactMetricsProps = {
  metrics: Metric[]
}

export function ImpactMetrics({ metrics }: ImpactMetricsProps) {
  return (
    <section id="impact" className="section-fade border-b border-border bg-page">
      <div className="report-shell py-12">
        <MetricStrip metrics={metrics} />
      </div>
    </section>
  )
}
