import type { NavItem } from '../data/siteContent'

type HeaderProps = {
  items: NavItem[]
  phone?: string
  email: string
  linkedinHref: string
}

export function Header({ items, phone, email, linkedinHref }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-white/95 backdrop-blur">
      <div className="report-shell flex items-center justify-between gap-5 py-3">
        <a href="#home" className="font-serif text-2xl font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
          Akshay Singh
        </a>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          {phone ? (
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              <span aria-hidden="true">📞</span>
              <span>{phone}</span>
            </a>
          ) : null}
          <a
            href={linkedinHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-ink transition hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12Zm-1.34 2h2.67V19H5.6v-8.5Zm4.36 0h2.56v1.17h.04c.36-.67 1.24-1.37 2.56-1.37 2.73 0 3.24 1.8 3.24 4.13V19H15.7v-3.99c0-.95-.02-2.18-1.33-2.18-1.33 0-1.54 1.04-1.54 2.11V19H9.96v-8.5Z" />
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-border bg-white text-ink transition hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            aria-label="Send email"
            title="Email"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
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
      </div>
    </header>
  )
}
