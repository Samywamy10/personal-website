import React from "react";
import { ExperienceSectionType } from "../types/experience";
import Experience from "./Experience";

export default function ExperienceSection({
  title,
  experiences,
}: ExperienceSectionType) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "-")}
      className="bg-white dark:bg-gray-800 shadow-lg overflow-hidden"
    >
      <div className="border-b border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-700 px-8 py-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          {title}
        </h2>
      </div>
      <div className="px-8">
        <div className="flex flex-col">
          {experiences.map((experience) => (
            <Experience {...experience} key={experience.organisation} />
          ))}
        </div>
      </div>
    </section>
  );
}
