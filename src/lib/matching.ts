import type { Opportunity, StudentProfile, SkillCategory } from "./types";
import { SKILL_LABELS } from "./types";

export function matchOpportunity(student: StudentProfile, opp: Opportunity): number {
  if (!opp.skills?.length) return 65;
  const studentSkills = new Map(student.skills.map((s) => [s.name.toLowerCase(), s.level]));
  let score = 0;
  let weight = 0;
  for (const skill of opp.skills) {
    const level = studentSkills.get(skill.toLowerCase()) ?? 0;
    score += level;
    weight += 100;
  }
  const base = weight ? Math.round((score / weight) * 100) : 50;
  // slight boost for target role alignment
  const roleBoost = student.targetRoles.some((r) =>
    opp.title.toLowerCase().includes(r.toLowerCase().split(" ")[0] ?? ""),
  )
    ? 6
    : 0;
  return Math.min(99, Math.max(35, base + roleBoost));
}

export function gapForRole(student: StudentProfile, roleSkills: string[]): { skill: string; current: number; required: number; gap: number }[] {
  const map = new Map(student.skills.map((s) => [s.name.toLowerCase(), s.level]));
  return roleSkills.map((skill) => {
    const current = map.get(skill.toLowerCase()) ?? 20;
    const required = 80;
    return { skill, current, required, gap: Math.max(0, required - current) };
  });
}

export function careerRecommendations(student: StudentProfile) {
  const avg =
    student.skills.reduce((a, s) => a + s.level, 0) / Math.max(1, student.skills.length);
  return [
    { role: "Frontend Engineer", match: Math.min(96, Math.round(avg + 8)), why: "Strong JS/React signals" },
    { role: "Full-stack Developer", match: Math.min(92, Math.round(avg + 4)), why: "Balanced technical + projects" },
    { role: "SDE Intern", match: Math.min(90, Math.round(avg + 2)), why: "Campus-ready profile" },
  ];
}

export function readinessScore(student: StudentProfile): number {
  if (!student.skills.length) return 40;
  const skillAvg = student.skills.reduce((a, s) => a + s.level, 0) / student.skills.length;
  const cgpaPart = Math.min(100, student.cgpa * 10);
  return Math.round(skillAvg * 0.7 + cgpaPart * 0.3);
}
