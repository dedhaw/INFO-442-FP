# Course Companion Hub (INFO 442)

A focused hub for INFO 442 students to:
- Pick interview sources and know what to ask
- Organize readings, assignments, and reflections
- Filter helpful links by role/goal
- Follow a step-by-step guide for interviewing and synthesis

## Getting started

Prereqs: Node 18+ and npm.

Install dependencies:
```bash
npm install
```

Run the dev server with hot reload:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```
Preview the production build:
```bash
npm run preview
```

## Project structure
- `src/views/CourseCompanion.tsx` – top-level page layout and state for filters.
- `src/components/` – small presentational pieces (Hero, SourceCard, OrganizerCard, ResourceCard, StepItem).
- `src/data/content.ts` – copy and configuration for sources, resources, roles/goals, and guide steps.
- `src/types/content.ts` – shared TypeScript types for the data objects.
- `src/App.tsx` – entry point that renders the view.
- `src/App.css` & `src/index.css` – visuals, layout, and interactions.

## Customization tips
- Update `src/data/content.ts` with real links, interview prompts, and organizers.
- Adjust chips, hero copy, or progress values in `CourseCompanion.tsx`.
- Tweak colors/spacing/hover states in `src/App.css`.

## Testing
Run a production sanity check:
```bash
npm run build
```
