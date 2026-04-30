import type { NavItem } from '../data/siteContent'

type HeaderProps = {
  items: NavItem[]
}

export function Header({ items }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur">
      <div className="report-shell flex items-center justify-between gap-5 py-4">
        <a href="#home" className="font-serif text-2xl font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
          Akshay Singh
        </a>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-semibold text-ink md:gap-x-8">
            {items.map((item) => (
              <li key={item.label}>
                <a className="transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
