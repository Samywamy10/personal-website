export type JobType = {
  title: string;
  startDate: string;
  endDate: string | null;
  description: React.ReactNode;
};

export type ExperienceType = {
  title: string;
  organisation: string;
  image?: string;
  jobs: JobType[];
  skills: string[];
};

export type ExperienceSectionType = {
  title: string;
  experiences: ExperienceType[];
};
