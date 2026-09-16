export type Role = "student" | "academician" | "industry" | "institution";

export type ThemeMode = "light" | "dark";

export type ApplicationStatus =
  | "applied"
  | "review"
  | "shortlisted"
  | "interview"
  | "selected"
  | "rejected";

export type CollaborationStatus =
  | "proposed"
  | "discussion"
  | "approved"
  | "active"
  | "completed";

export type OpportunityKind =
  | "internship"
  | "job"
  | "apprenticeship"
  | "project"
  | "training"
  | "fdp"
  | "workshop"
  | "consultancy"
  | "research"
  | "challenge"
  | "guest-lecture"
  | "mentorship";

export type EventKind =
  | "hackathon"
  | "seminar"
  | "competition"
  | "workshop"
  | "conference"
  | "talk"
  | "career-fair";

export type SkillCategory =
  | "technical"
  | "soft"
  | "aptitude"
  | "programming"
  | "communication"
  | "problemSolving"
  | "leadership";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
  title: string;
  org: string;
  city: string;
  avatarHue: number;
}

export interface SkillScore {
  id: string;
  name: string;
  category: SkillCategory;
  level: number;
  verified: boolean;
}

export interface StudentProfile {
  userId: string;
  name: string;
  handle: string;
  degree: string;
  year: string;
  department: string;
  cgpa: number;
  institution: string;
  city: string;
  bio: string;
  interests: string[];
  targetRoles: string[];
  skills: SkillScore[];
  availability: string;
}

export interface AcademicianProfile {
  userId: string;
  name: string;
  handle: string;
  designation: string;
  department: string;
  institution: string;
  expertise: string[];
  publications: number;
  experienceYears: number;
  bio: string;
}

export const ROLE_LABEL: Record<Role, string> = {
  student: "Student",
  academician: "Academician",
  industry: "Industry",
  institution: "Institution",
};

export const SKILL_LABELS: Record<SkillCategory, string> = {
  technical: "Technical",
  soft: "Soft skills",
  aptitude: "Aptitude",
  programming: "Programming",
  communication: "Communication",
  problemSolving: "Problem solving",
  leadership: "Leadership",
};

export const STATUS_LABEL: Record<ApplicationStatus, string> = {
  applied: "Applied",
  review: "Under review",
  shortlisted: "Shortlisted",
  interview: "Interview",
  selected: "Selected",
  rejected: "Rejected",
};
