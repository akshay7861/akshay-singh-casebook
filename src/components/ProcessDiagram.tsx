type ProcessDiagramProps = {
  steps: string[]
  variant?: 'light' | 'dark'
}

export function ProcessDiagram({ steps, variant = 'light' }: ProcessDiagramProps) {
  const isDark = variant === 'dark'

  return (
    <div className="grid gap-3 md:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step}
          className={
            isDark
              ? 'border border-white/15 bg-white/5 p-4'
              : 'report-card p-4'
          }
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold">
            Step {index + 1}
          </p>
          <p className={isDark ? 'mt-2 text-base font-semibold text-white' : 'mt-2 text-base font-semibold text-ink'}>
            {step}
          </p>
        </div>
      ))}
    </div>
  )
}
