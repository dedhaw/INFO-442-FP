import type { GuideStep } from '../types/content'

type StepItemProps = {
  step: GuideStep
  index: number
}

function StepItem({ step, index }: StepItemProps) {
  return (
    <div className="step">
      <div className="step__badge">
        <span>{index + 1}</span>
      </div>
      <div className="step__body">
        <div className="step__title">
          <h3>{step.title}</h3>
          <span className="pill">20–40 min</span>
        </div>
        <p>{step.detail}</p>
        <p className="label">{step.tip}</p>
      </div>
    </div>
  )
}

export default StepItem
