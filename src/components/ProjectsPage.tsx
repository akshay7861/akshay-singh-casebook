import type { Project } from '../data/siteContent'
import { ProjectCard } from './ProjectCard'
import { SectionHeading } from './SectionHeading'

type ProjectsPageProps = {
  projects: Project[]
  preview?: boolean
}

export function ProjectsPage({ projects, preview = false }: ProjectsPageProps) {
  const visibleProjects = preview ? projects.slice(0, 2) : projects

  return (
    <section id={preview ? undefined : 'projects'} className="section-fade min-h-[calc(100vh-72px)] border-b border-border bg-page">
      <div className="report-shell py-10 md:py-14">
        <SectionHeading
          label={preview ? 'Selected Work Preview' : 'Selected Market / Risk Work'}
          title={preview ? 'Selected project preview' : 'Project case studies'}
          description="A selection of self-driven projects built to explore how finance workflows, research, risk analysis and decision-support are evolving through AI, Python, automation and product thinking."
        />
        <div className="mt-8 space-y-4">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        {preview ? (
          <a href="#projects" className="secondary-button mt-8">
            View all projects
          </a>
        ) : null}
      </div>
    </section>
  )
}
