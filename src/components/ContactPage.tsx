import { useEffect, useState } from 'react'

type ContactPageProps = {
  cvHref: string
  email: string
  phone?: string
  linkedinHref: string
}

export function ContactPage({ cvHref, email, phone, linkedinHref }: ContactPageProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const copyEmail = () => {
    navigator.clipboard?.writeText(email).then(
      () => setCopied(true),
      () => setCopied(true),
    )
  }

  return (
    <section id="contact" className="section-fade bg-navy px-4 py-7 text-white md:py-9">
      <div className="mx-auto max-w-[1180px]">
        <div className="border border-gold/70 p-7 md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Contact</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Let&apos;s build the future of finance - together.
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/80">
            I&apos;m open to full-time opportunities and collaborations in capital markets, risk,
            analytics, automation, business analysis, advisory and consultancy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={cvHref} className="dark-button">
              Download CV
            </a>
            <button type="button" onClick={copyEmail} className="dark-button">
              Email
            </button>
            {phone ? (
              <a href={`tel:${phone.replace(/\s+/g, '')}`} className="dark-button">
                <span aria-hidden="true">📞</span>&nbsp;Phone
              </a>
            ) : null}
            <a href={linkedinHref} target="_blank" rel="noreferrer" className="dark-button">
              LinkedIn
            </a>
            {copied ? <p className="copy-toast">Work email copied to clipboard</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
