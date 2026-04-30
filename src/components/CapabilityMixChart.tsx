import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { capabilityMixData } from '../data/chartData'

export function CapabilityMixChart() {
  return (
    <article className="report-card p-6">
      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
        <div>
          <p className="section-label">Profile Capability Mix</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">Capability Mix</h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-muted">
          Illustrative profile mix based on experience focus, not a quantitative skills score.
        </p>
      </div>
      <div className="mt-6 h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={capabilityMixData} layout="vertical" margin={{ left: 12, right: 24 }}>
            <CartesianGrid horizontal={false} stroke="#E5E7EB" />
            <XAxis type="number" domain={[0, 35]} tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis
              type="category"
              dataKey="name"
              width={170}
              tick={{ fill: '#4B5563', fontSize: 12 }}
            />
            <Tooltip
              cursor={{ fill: '#EEF1F4' }}
              formatter={(value) => [`${value}%`, 'Illustrative share']}
            />
            <Bar dataKey="value" fill="#1E3A5F" radius={[0, 4, 4, 0]} barSize={22} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </article>
  )
}
