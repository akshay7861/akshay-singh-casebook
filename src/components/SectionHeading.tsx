type SectionHeadingProps = {
  label: string
  title: string
  description?: string
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl border-l-4 border-gold pl-5">
      <p className="section-label">{label}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-body">{description}</p> : null}
    </div>
  )
}
