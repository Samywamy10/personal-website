import { ExperienceType } from "../types/experience";
import Image from "next/image";
import { slugifyWithExperience } from "./slugify";

export default function Experience({
  title,
  organisation,
  image,
  jobs,
  skills,
}: ExperienceType) {
  return (
    <div
      id={slugifyWithExperience({ title, organisation, jobs, skills })}
      className="py-8 border-b border-gray-200 dark:border-gray-700 last:border-0"
    >
      <div className="flex items-start gap-4 flex-col md:flex-row">
        {image && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={`${image}`}
              alt={organisation}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {organisation}
          </h3>
          {jobs.map((job, index) => (
            <div key={index} className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {job.title}
              </h4>
              <p className="text-sm font-medium text-orange-700 dark:text-orange-400 mt-2">
                {new Date(job.startDate).toLocaleString("en-US", {
                  month: "long",
                  year: "numeric",
                })}{" "}
                -{" "}
                {job.endDate
                  ? new Date(job.endDate).toLocaleString("en-US", {
                      month: "long",
                      year: "numeric",
                    })
                  : "Present"}
              </p>
              <div className="mt-3 text-base leading-relaxed text-gray-800 dark:text-gray-200 font-normal">
                {job.description}
              </div>
            </div>
          ))}
          <div className="mt-5 flex flex-wrap gap-2">
            {skills?.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full font-medium text-gray-800 dark:text-gray-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
