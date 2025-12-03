import type { GuideStep, InterviewSource, Organizer, Resource } from '../types/content'

export const interviewSources: InterviewSource[] = [
  {
    title: 'Students in the course',
    context: 'Ask current classmates about pain points in assignments and time management.',
    cues: ['Recent blockers', 'Study rituals', 'Peer coordination'],
    sampleQuestions: [
      'Walk me through how you prepared for the last quiz.',
      'Where do you lose time each week?',
      'How do you sync with your project partner?',
    ],
  },
  {
    title: 'Teaching team',
    context: 'Understand expectations, grading signals, and where students often slip.',
    cues: ['Rubrics', 'Common mistakes', 'Office hours patterns'],
    sampleQuestions: [
      'What concepts usually need a second pass?',
      'How do you wish students prepared for interviews?',
      'What excellent submissions have in common?',
    ],
  },
  {
    title: 'Alumni/mentors',
    context: 'Collect higher-level tactics and shortcuts from people who finished the course.',
    cues: ['Survival tactics', 'Resource stack', 'Reflection habits'],
    sampleQuestions: [
      'What would you redo if you took the course again?',
      'Which resources saved you during crunch weeks?',
      'How did you keep research notes organized?',
    ],
  },
]

export const resources: Resource[] = [
  {
    title: 'Interview script template',
    description: 'A structured script with intro, warmups, core prompts, and wrap-up checks.',
    role: 'Research Lead',
    goal: 'Prep interview',
    link: '#',
  },
  {
    title: 'Note-taking grid',
    description: 'Column-based doc for capturing quotes, behaviors, and evidence.',
    role: 'Note-taker',
    goal: 'Run interview',
    link: '#',
  },
  {
    title: 'Synthesis board',
    description: 'Affinity-style canvas to cluster observations and name patterns.',
    role: 'Research Lead',
    goal: 'Synthesize insights',
    link: '#',
  },
  {
    title: 'Reading tracker',
    description: 'Weekly checklist to log readings, deadlines, and reflection snippets.',
    role: 'Operations',
    goal: 'Stay organized',
    link: '#',
  },
  {
    title: 'Stakeholder update email',
    description: 'Copy-pasteable update template to share progress and next asks.',
    role: 'Communicator',
    goal: 'Share findings',
    link: '#',
  },
]

export const guideSteps: GuideStep[] = [
  {
    title: 'Frame the objective',
    detail: 'Write a 1–2 sentence goal for this week. Who is impacted and what evidence do you need?',
    tip: 'Good objectives include a behavior, a user, and a success signal.',
  },
  {
    title: 'Line up interviews',
    detail: 'Pick 2–3 sources from the guide below and schedule a 20-minute conversation.',
    tip: 'Send a short invite with time blocks and what you want to learn.',
  },
  {
    title: 'Run the session',
    detail: 'Open with context, ask open questions, and dig into specific moments.',
    tip: 'Listen for quotes and exact artifacts (screenshots, notes, calendar).',
  },
  {
    title: 'Synthesize within 24 hours',
    detail: 'Cluster observations, tag the biggest pains, and propose 1–2 tests.',
    tip: 'If a quote maps to a pain, capture the evidence next to it.',
  },
  {
    title: 'Share and act',
    detail: 'Publish a short recap with findings, decisions, and next actions for the team.',
    tip: 'Highlight what is blocked and what you need from others.',
  },
]

export const organizers: Organizer[] = [
  {
    title: 'Weekly compass',
    description: 'A snapshot of readings, deadlines, and your focus area for the week.',
    items: ['Top 3 readings', 'Next deadline + rubric link', 'One risk to unblock'],
  },
  {
    title: 'Assignment board',
    description: 'Track each assignment with status, evidence, and supporting links.',
    items: ['Task, owner, due date', 'Links to drafts + notes', 'Review checklist before submit'],
  },
  {
    title: 'Reflection loop',
    description: 'A 10-minute ritual after each milestone to capture what worked.',
    items: ['Wins, frictions, and surprises', 'What to repeat next sprint', 'Questions to ask in office hours'],
  },
]

export const roles = ['All roles', 'Research Lead', 'Note-taker', 'Communicator', 'Operations']

export const goals = ['Any goal', 'Prep interview', 'Run interview', 'Synthesize insights', 'Stay organized', 'Share findings']
