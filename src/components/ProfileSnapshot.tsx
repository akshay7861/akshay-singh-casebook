type ProfileSnapshotProps = {
  data: {
    experience: string
    markets: string
    risk: string
    tools: string
    focus: string
  }
}

export function ProfileSnapshot({ data }: ProfileSnapshotProps) {
  return (
    <article className="terminal-panel h-full overflow-hidden">
      <div className="terminal-panel-header">PROFILE SNAPSHOT</div>
      <dl className="divide-y divide-line/60 text-sm">
        <div className="grid grid-cols-[96px_1fr] gap-3 px-3 py-3">
          <dt className="terminal-label">Experience</dt>
          <dd className="font-semibold text-navy">{data.experience}</dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] gap-3 px-3 py-3">
          <dt className="terminal-label">Markets</dt>
          <dd className="text-slate">{data.markets}</dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] gap-3 px-3 py-3">
          <dt className="terminal-label">Risk</dt>
          <dd className="text-slate">{data.risk}</dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] gap-3 px-3 py-3">
          <dt className="terminal-label">Tools</dt>
          <dd className="text-slate">{data.tools}</dd>
        </div>
        <div className="grid grid-cols-[96px_1fr] gap-3 px-3 py-3">
          <dt className="terminal-label">Focus</dt>
          <dd className="text-slate">{data.focus}</dd>
        </div>
      </dl>
    </article>
  )
}
