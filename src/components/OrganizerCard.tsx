import type { Organizer } from '../types/content'

type OrganizerCardProps = {
  organizer: Organizer
}

function OrganizerCard({ organizer }: OrganizerCardProps) {
  return (
    <div className="organizer">
      <div className="organizer__header">
        <h3>{organizer.title}</h3>
        <span className="pill pill--outline">Template</span>
      </div>
      <p>{organizer.description}</p>
      <ul>
        {organizer.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button className="ghost">Open template</button>
    </div>
  )
}

export default OrganizerCard
