type OrderStatusPanelProps = {
  orderStatus: 'Waiting' | 'Filled'
  position: string
  currentPrice: number
  pnl: number
  message: string
}

export function OrderStatusPanel({
  orderStatus,
  position,
  currentPrice,
  pnl,
  message,
}: OrderStatusPanelProps) {
  return (
    <aside className="rounded border border-border bg-white p-4">
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Order Status</h3>
      <dl className="mt-3 space-y-3 text-sm text-ink">
        <div className="flex items-center justify-between border-b border-border pb-2">
          <dt>Status</dt>
          <dd className={orderStatus === 'Filled' ? 'text-positive' : 'text-gold'}>{orderStatus}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-2">
          <dt>Position</dt>
          <dd>{position}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-2">
          <dt>Last</dt>
          <dd>{currentPrice.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between border-b border-border pb-2">
          <dt>P&amp;L (USD)</dt>
          <dd className={pnl > 0 ? 'text-positive' : 'text-muted'}>+{pnl.toFixed(2)}</dd>
        </div>
      </dl>
      <p className="mt-3 text-sm text-body">{message}</p>
    </aside>
  )
}
