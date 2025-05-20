import { ExperienceType } from "../types/experience";

export function slugify(str: string) {
  return str.toLowerCase().replace(/\s+/g, "-");
}

export function slugifyWithExperience(experience: ExperienceType) {
  return `${slugify(experience.title)}${slugify(experience.organisation)}`;
}
