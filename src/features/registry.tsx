import type { Role } from "@/lib/types";
import * as S from "./student";
import * as I from "./industry";
import * as A from "./academician";
import * as N from "./institution";

type Page = () => React.JSX.Element;

const student: Record<string, Page> = {
  index: S.StudentOverview,
  assessment: S.AssessmentPage,
  skills: S.SkillsPage,
  gap: S.GapPage,
  careers: S.CareersPage,
  roadmap: S.RoadmapPage,
  courses: S.CoursesPage,
  internships: S.InternshipsPage,
  jobs: S.JobsPage,
  applications: S.ApplicationsPage,
  projects: S.ProjectsPage,
  mentors: S.MentorsPage,
  events: S.EventsPage,
  achievements: S.AchievementsPage,
  portfolio: S.PortfolioPage,
  buddy: S.StudentBuddy,
};

const industry: Record<string, Page> = {
  index: I.IndustryOverview,
  profile: I.IndustryProfile,
  skills: I.SkillRequirements,
  internships: I.IndustryInternships,
  jobs: I.IndustryJobs,
  apprenticeships: I.IndustryApprentice,
  candidates: I.CandidatesPage,
  pipeline: I.PipelinePage,
  applications: I.IndustryApplications,
  projects: I.IndustryProjects,
  programs: I.IndustryPrograms,
  workshops: I.IndustryWorkshops,
  mentorship: I.IndustryMentorship,
  challenges: I.IndustryChallenges,
  analytics: I.IndustryAnalytics,
  collaboration: I.IndustryCollab,
};

const academician: Record<string, Page> = {
  index: A.AcademicianOverview,
  profile: A.FacultyProfile,
  internships: A.FacultyInternships,
  training: A.FacultyTraining,
  fdp: A.FacultyFdp,
  workshops: A.FacultyWorkshops,
  consultancy: A.FacultyConsultancy,
  research: A.FacultyResearch,
  projects: A.FacultyProjects,
  mentorship: A.FacultyMentorship,
  lectures: A.FacultyLectures,
  collaboration: A.FacultyCollab,
  applications: A.FacultyApplications,
};

const institution: Record<string, Page> = {
  index: N.InstitutionOverview,
  students: N.StudentsAdmin,
  faculty: N.FacultyAdmin,
  departments: N.DepartmentsPage,
  skills: N.SkillAnalytics,
  gaps: N.GapAnalytics,
  internships: N.InternshipAnalytics,
  placements: N.PlacementAnalytics,
  connections: N.ConnectionsPage,
  collaboration: N.InstitutionCollab,
  readiness: N.ReadinessPage,
  demand: N.DemandPage,
  reports: N.ReportsPage,
};

const MAP: Record<Role, Record<string, Page>> = {
  student,
  industry,
  academician,
  institution,
};

export function RoleSection({ role, section }: { role: Role; section: string }) {
  const page = MAP[role]?.[section] ?? MAP[role]?.index;
  if (!page) {
    return (
      <div className="p-8">
        <p className="font-display text-2xl">Section not found</p>
        <p className="mt-2 text-muted-foreground">No page registered for {role}/{section}</p>
      </div>
    );
  }
  const Page = page;
  return <Page />;
}
