# EduRoute — Academia–Industry Collaboration Portal

**SIH PS26044** · Skill Assessment → Skill Mapping → Learning → Internship → Projects → Mentorship → Portfolio → Placement → Industry–Academia Collaboration

A premium multi-role platform connecting **Students**, **Academicians**, **Industries**, and **Institutions**.

## Demo (no backend required)

```bash
npm install
npm run dev
```

Open the app and use the four **Continue as …** cards on the landing page, or sign in with:

| Role          | Email                    | Password |
|---------------|--------------------------|----------|
| Student       | student@eduroute.app     | demo     |
| Academician   | faculty@eduroute.app     | demo     |
| Industry      | industry@eduroute.app    | demo     |
| Institution   | institution@eduroute.app | demo     |

### Suggested demo flow

1. **Student** → Skill Assessment → Skill Gap → Roadmap → Internships (filter & apply) → Portfolio → AI Buddy  
2. **Industry** → Post Internship → Candidate Discovery → Shortlist → Recruitment Pipeline  
3. **Institution** → Skill Analytics → Internship / Placement Analytics  
4. **Academician** → Faculty Profile → FDPs / Research → Collaboration board  

## Tech stack (demo)

- React 19 + Vite + TanStack Router / Start  
- Tailwind CSS v4 + Framer Motion + Recharts + Lucide  
- Zustand (client state + rich seed data)  
- Optional AI Buddy via xAI (server function; falls back gracefully without key)

Production mapping: React frontend → **Golang REST API + JWT + RBAC → MySQL**. AI calls stay server-side.

## Features

- Role-based dashboards (Student / Academician / Industry / Institution)
- AI-style skill assessment + visual skill radar + gap analysis
- Explainable skill matching for internships & jobs
- Learning roadmaps, courses, certifications
- Application pipeline (Applied → Review → Shortlisted → Interview → Selected/Rejected)
- Digital portfolio (share link + printable résumé)
- Collaboration board (Proposed → Discussion → Approved → Active → Completed)
- Gamification (XP, levels, streaks, badges)
- Events, mentorship, analytics charts
- Light / Dark mode

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run typecheck` — TypeScript check

Built for Smart India Hackathon PS26044 demonstration.
