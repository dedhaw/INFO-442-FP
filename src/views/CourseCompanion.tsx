import { useMemo, useState } from 'react'
import Hero from '../components/Hero'
import OrganizerCard from '../components/OrganizerCard'
import ResourceCard from '../components/ResourceCard'
import SourceCard from '../components/SourceCard'
import StepItem from '../components/StepItem'
import { goals, guideSteps, interviewSources, organizers, resources, roles } from '../data/content'

function CourseCompanion() {
  const [selectedRole, setSelectedRole] = useState<string>('All roles')
  const [selectedGoal, setSelectedGoal] = useState<string>('Any goal')

  const filteredResources = useMemo(() => {
    return resources.filter((resource) => {
      const roleMatch = selectedRole === 'All roles' || resource.role === selectedRole
      const goalMatch = selectedGoal === 'Any goal' || resource.goal === selectedGoal
      return roleMatch && goalMatch
    })
  }, [selectedRole, selectedGoal])

  return (
    <div className="page">
      <div className="backdrop" />
      <main className="shell">
        <Hero
          eyebrow="INFO 442 · Course Companion Hub"
          title="Interview smarter. Organize confidently. Deliver insights without the scramble."
          lede="A single space to find interview sources, keep readings and assignments tidy, and follow a repeatable research rhythm for this class."
          chips={['Team-ready', 'Low-friction', 'Evidence-first']}
          primaryLabel="Start with the step-by-step guide"
          secondaryLabel="Browse interview sources"
          cardTitle="Interview Source Guide"
          cardDescription="Pick two sources, send invites, and collect one artifact per conversation."
          stats={[
            { label: 'This week', value: '2 interviews' },
            { label: 'Artifacts', value: 'Quotes + screenshots' },
          ]}
          progress={0.62}
        />

        <section className="panel">
          <div className="panel__heading">
            <div>
              <p className="eyebrow">Interview Source Guide</p>
              <h2>Who to talk to and what to listen for</h2>
              <p>Choose a mix of sources to triangulate insights quickly.</p>
            </div>
            <button className="secondary">Copy invite blurb</button>
          </div>
          <div className="card-grid">
            {interviewSources.map((source) => (
              <SourceCard key={source.title} source={source} />
            ))}
          </div>
        </section>

        <section className="panel two-column">
          <div className="panel__heading">
            <p className="eyebrow">Study Organizers</p>
            <h2>Keep readings, assignments, and reflections aligned</h2>
            <p className="muted">
              Fast templates that fit a 60-minute weekly review or a quick pre-class reset.
            </p>
          </div>
          <div className="organizers">
            {organizers.map((organizer) => (
              <OrganizerCard key={organizer.title} organizer={organizer} />
            ))}
            <div className="checklist">
              <p className="label">Rapid checklist</p>
              <ul>
                <li>Pick one organizer to update every Monday.</li>
                <li>Archive old links into the tracker.</li>
                <li>Share a screenshot in your team channel.</li>
                <li>Book office hours for one risk weekly.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="panel">
          <div className="panel__heading">
            <div>
              <p className="eyebrow">Filter Links by Role</p>
              <h2>Find the right resource for your role and goal</h2>
            </div>
            <div className="filters">
              <div className="select">
                <label htmlFor="role">Role</label>
                <select
                  id="role"
                  value={selectedRole}
                  onChange={(event) => setSelectedRole(event.target.value)}
                >
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select">
                <label htmlFor="goal">Goal</label>
                <select
                  id="goal"
                  value={selectedGoal}
                  onChange={(event) => setSelectedGoal(event.target.value)}
                >
                  {goals.map((goal) => (
                    <option key={goal} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="resource-grid">
            {filteredResources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
            {filteredResources.length === 0 && (
              <div className="empty">No links yet. Try a different role or goal.</div>
            )}
          </div>
        </section>

        <section className="panel steps">
          <div className="panel__heading">
            <p className="eyebrow">Step-by-Step Guide</p>
            <h2>Run interviews and synthesize without guessing</h2>
          </div>
          <div className="timeline">
            {guideSteps.map((step, index) => (
              <StepItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default CourseCompanion
