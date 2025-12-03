export type Resource = {
  title: string
  description: string
  role: string
  goal: string
  link: string
}

export type GuideStep = {
  title: string
  detail: string
  tip: string
}

export type InterviewSource = {
  title: string
  context: string
  cues: string[]
  sampleQuestions: string[]
}

export type Organizer = {
  title: string
  description: string
  items: string[]
}
