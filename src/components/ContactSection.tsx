type ContactSectionProps = {
  cvHref: string
  linkedinHref: string
  email: string
}

export function ContactSection({ cvHref, linkedinHref, email }: ContactSectionProps) {
  return (
    <section id="contact" className="border-b border-border bg-page">
      <div className="report-shell py-12">
        <div className="report-card border-t-4 border-t-gold p-8 md:p-10">
          <p className="section-label" id="cv">
            08 / CV & Contact
          </p>
          <div className="mt-3 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Open to roles across market risk, trading analytics, portfolio analytics, capital
              markets consulting and finance automation.
            </h2>
            <div className="flex flex-wrap gap-3">
              <a href={cvHref} className="primary-button">
                Download CV
              </a>
              <a href={`mailto:${email}`} className="secondary-button">
                Email
              </a>
              <a href={linkedinHref} target="_blank" rel="noreferrer" className="secondary-button">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
