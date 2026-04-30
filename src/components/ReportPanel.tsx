import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { exposureBreakdownData, pnlAttributionData } from '../data/chartData'

const exposureColors = ['#102033', '#B88746', '#1E3A5F', '#8EA9C4', '#C7A77C']

export function ReportPanel() {
  return (
    <article className="report-card overflow-hidden border-t-4 border-t-gold">
      <div className="border-b border-border bg-white px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          Portfolio Review Excerpt
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink">Risk & Exposure Reporting View</h3>
      </div>
      <div className="grid gap-6 p-5">
        <div>
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-base font-semibold text-ink">P&L Attribution by Driver</h4>
            <p className="text-xs text-muted">Illustrative contribution</p>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pnlAttributionData}>
                <CartesianGrid vertical={false} stroke="#E2E0DA" />
                <XAxis dataKey="driver" tick={{ fill: '#6B7280', fontSize: 11 }} />
                <YAxis tick={{ fill: '#6B7280', fontSize: 11 }} />
                <Tooltip formatter={(value) => [`${value}`, 'Contribution']} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {pnlAttributionData.map((entry) => (
                    <Cell
                      key={entry.driver}
                      fill={
                        entry.value < 0
                          ? '#B91C1C'
                          : entry.driver === 'Spot'
                            ? '#B88746'
                            : '#102033'
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex items-baseline justify-between gap-4">
            <h4 className="text-base font-semibold text-ink">Exposure Breakdown by Asset Class</h4>
            <p className="text-xs text-muted">Illustrative composition</p>
          </div>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={exposureBreakdownData}
                  dataKey="value"
                  nameKey="assetClass"
                  innerRadius={58}
                  outerRadius={94}
                  paddingAngle={2}
                >
                  {exposureBreakdownData.map((entry, index) => (
                    <Cell key={entry.assetClass} fill={exposureColors[index % exposureColors.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Exposure']} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <p className="border-l-4 border-gold bg-page px-4 py-3 text-sm leading-6 text-body">
          Illustrative sample only. Data is anonymised/recreated for portfolio demonstration
          purposes and does not represent confidential employer information, live market data or a
          directive.
        </p>
      </div>
    </article>
  )
}
