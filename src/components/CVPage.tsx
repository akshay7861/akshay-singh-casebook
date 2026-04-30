type CVPageProps = {
  cvHref: string
}

export function CVPage({ cvHref }: CVPageProps) {
  return (
    <section id="cv" className="section-fade border-b border-border bg-page">
      <div className="report-shell py-7 md:py-9">
        <div className="report-card p-7 md:p-8">
          <p className="section-label">CV</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-navy md:text-[2.6rem]">
            Download recruiter-ready profile
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-7 text-body">
            Built for market risk, trading analytics, portfolio intelligence and finance
            automation conversations.
          </p>
          <a href={cvHref} className="primary-button mt-6">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
