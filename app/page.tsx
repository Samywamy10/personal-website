import Sidebar from "./components/Sidebar";
import ExperienceSection from "./components/ExperienceSection";
import { workExperiences } from "./data/workExperiences";
import { educationExperiences } from "./data/educationExperiences";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-8">
          <Sidebar />
          <main className="flex flex-col flex-1 gap-8">
            {/* <div className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-700 flex flex-row text-md">
              <div className="border-r border-gray-200 dark:border-gray-900 py-4 px-8">
                Work Experience
              </div>
              <div className="dark:border-gray-900 py-4 px-8">Education</div>
            </div> */}
            <ExperienceSection
              title="Work Experience"
              experiences={workExperiences}
            />
            <ExperienceSection
              title="Education"
              experiences={educationExperiences}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
