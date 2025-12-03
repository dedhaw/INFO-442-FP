type HeroStat = {
  label: string
  value: string
}

type HeroProps = {
  eyebrow: string
  title: string
  lede: string
  chips: string[]
  primaryLabel: string
  secondaryLabel: string
  cardTitle: string
  cardDescription: string
  stats: HeroStat[]
  progress: number
}

function Hero({
  eyebrow,
  title,
  lede,
  chips,
  primaryLabel,
  secondaryLabel,
  cardTitle,
  cardDescription,
  stats,
  progress,
}: HeroProps) {
  return (
    <header className="hero">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
        <div className="hero-actions">
          <button className="primary">{primaryLabel}</button>
          <button className="ghost">{secondaryLabel}</button>
        </div>
        <div className="chips">
          {chips.map((chip) => (
            <span key={chip} className="chip">
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="hero-card">
        <div className="hero-card__header">
          <p>Weekly focus</p>
          <span className="pill pill--green">Live</span>
        </div>
        <div className="hero-card__body">
          <h3>{cardTitle}</h3>
          <p>{cardDescription}</p>
          <div className="mini-grid">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="label">{stat.label}</p>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
          <div className="progress">
            <div className="progress__bar" style={{ width: `${Math.min(progress, 1) * 100}%` }} />
          </div>
          <button className="secondary">View the checklist</button>
        </div>
      </div>
    </header>
  )
}

export default Hero
