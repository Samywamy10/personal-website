import { format, parse } from "date-fns";
import type { ExperienceType } from "../types/experience";

export const educationExperiences: ExperienceType[] = [
  {
    title: "Education",
    jobs: [
      {
        title: "Bachelor of Informatics & Computation Advanced (Honours)",
        startDate: format(
          parse("03-01-2015", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("06-01-2019", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description:
          "Majoring in Computer Science while taking electives in journalism. Distinction average. Worked on an evacuation simulation tool for my honours thesis. Also completed several other research projects including a summer research scholarship. Involved in student mentoring.",
      },
    ],
    organisation: "Monash University",
    skills: [],
  },
  {
    title: "Education",
    jobs: [
      {
        title: "VCE",
        startDate: format(
          parse("01-01-2009", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("11-01-2014", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description:
          "Achieved an ATAR (Final year score) in the top 3% of the country while being involved in a huge range of extra-curricular activites including school leadership, debating, backstage crew and sports in my senior years of schooling. A highlight was receiving a Premier's Award for VCE Music Technology.",
      },
    ],
    organisation: "Haileybury College",
    skills: [],
  },
];
