import type { Resource } from '../types/content'

type ResourceCardProps = {
  resource: Resource
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="resource">
      <div className="resource__meta">
        <span className="pill pill--outline">{resource.role}</span>
        <span className="pill pill--green">{resource.goal}</span>
      </div>
      <h3>{resource.title}</h3>
      <p className="muted">{resource.description}</p>
      <a href={resource.link} className="secondary">
        Open resource
      </a>
    </div>
  )
}

export default ResourceCard
