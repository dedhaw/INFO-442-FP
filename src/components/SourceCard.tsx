import type { InterviewSource } from '../types/content'

type SourceCardProps = {
  source: InterviewSource
}

function SourceCard({ source }: SourceCardProps) {
  return (
    <article className="card">
      <div className="card__header">
        <h3>{source.title}</h3>
        <span className="pill">Good first</span>
      </div>
      <p className="muted">{source.context}</p>
      <div className="tags">
        {source.cues.map((cue) => (
          <span key={cue} className="tag">
            {cue}
          </span>
        ))}
      </div>
      <div className="question-box">
        <p className="label">Ask this</p>
        <ul>
          {source.sampleQuestions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default SourceCard
