"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { workExperiences } from "../data/workExperiences";
import { educationExperiences } from "../data/educationExperiences";
import { slugify, slugifyWithExperience } from "./slugify";

function TableOfContents() {
  const sections = [
    { title: "Work Experience", experiences: workExperiences },
    { title: "Education", experiences: educationExperiences },
  ];

  // Flatten all ids for scrollspy
  const tocItems = sections.flatMap((section) => [
    { id: slugify(section.title), label: section.title, type: "section" },
    ...section.experiences.map((exp) => ({
      id: slugifyWithExperience(exp),
      label: exp.organisation,
      type: "experience",
    })),
  ]);

  const [activeId, setActiveId] = useState<string>(tocItems[0]?.id || "");

  useEffect(() => {
    function onScroll() {
      const offsets = tocItems.map((item) => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: rect.top };
      });
      // Find the last item above the top of the viewport
      const active = offsets.filter((o) => o.top < 120).pop();
      if (active && active.id !== activeId) setActiveId(active.id);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [tocItems, activeId]);

  // Smooth scroll handler
  function handleSmoothScroll(
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -16; // adjust for sticky headers if needed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      // Update the URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    }
  }

  return (
    <div className="sticky top-2">
      <ul className="space-y-6">
        {sections.map((section) => (
          <li key={section.title}>
            <a
              href={`#${slugify(section.title)}`}
              onClick={(e) => handleSmoothScroll(e, slugify(section.title))}
              className={`block text-lg font-semibold transition-colors duration-200 mb-2 pl-1
                ${
                  activeId === slugify(section.title)
                    ? "text-white border-l-4 border-orange-400 bg-orange-700/30"
                    : "text-gray-100 hover:text-orange-300"
                }
              `}
            >
              {section.title}
            </a>
            <ul className="ml-4 mt-1 space-y-1">
              {section.experiences.map((experience) => (
                <li key={slugifyWithExperience(experience)}>
                  <a
                    href={`#${slugifyWithExperience(experience)}`}
                    onClick={(e) =>
                      handleSmoothScroll(e, slugifyWithExperience(experience))
                    }
                    className={`block text-base rounded px-2 py-1 transition-colors duration-200
                      ${
                        activeId === slugifyWithExperience(experience)
                          ? "text-white bg-orange-900/40 font-semibold"
                          : "text-gray-300 hover:text-orange-200"
                      }
                    `}
                  >
                    {experience.organisation}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-sidebar dark:bg-sidebarDark text-white dark:text-white shadow-neutral-400 shadow-lg dark:shadow-none text-left flex flex-col">
      <div className="overflow-hidden w-full">
        <Image
          src="profile.jpeg"
          alt="Profile"
          layout="responsive"
          width={500}
          height={358}
          className="object-cover"
        />
      </div>
      <div className="p-5 flex flex-col gap-4 flex-grow">
        <div className="flex flex-col gap-1" id="profile">
          <h1 className="text-3xl font-bold">Sam Wright</h1>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Melbourne, Australia</span>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-sm" id="bio">
          <p>
            I&apos;m a product-minded Frontend Engineer at Canva with a
            particular passion for using data to help drive decisions.
          </p>
        </div>

        <div id="contact" className="flex flex-col gap-3">
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/sjwright10/">
              <svg
                shapeRendering="geometricPrecision"
                textRendering="geometricPrecision"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                className="w-6 h-6 hover:text-gray-300 transition-all duration-300"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M474.919 0H38.592C17.72 0 0 16.504 0 36.841V475.14C0 495.496 11.629 512 32.492 512h436.327C489.718 512 512 495.496 512 475.14V36.841C512 16.504 495.809 0 474.919 0zM195.043 195.043h68.928v35.136h.755c10.505-18.945 41.541-38.177 79.921-38.177 73.655 0 94.214 39.108 94.214 111.538v135.321h-73.148V316.883c0-32.427-12.947-60.883-43.227-60.883-36.768 0-54.295 24.889-54.295 65.758v117.103h-73.148V195.043zM73.139 438.861h73.148V195.043H73.139v243.818zm82.289-329.148c0 25.258-20.457 45.715-45.715 45.715-25.258 0-45.715-20.457-45.715-45.715 0-25.258 20.457-45.715 45.715-45.715 25.258 0 45.715 20.457 45.715 45.715z" />
              </svg>
            </a>
            <a href="https://github.com/Samywamy10">
              <svg
                className="w-6 h-6 hover:text-gray-300 transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.285-.011-1.04-.017-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.182 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.655.243 2.879.119 3.182.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.476 5.921.43.371.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.293 0 .319.218.694.825.576 4.765-1.588 8.199-6.085 8.199-11.385 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>sam@samjwright.com</span>
          </div>
        </div>
        <div id="skills">
          <h3 className="text-lg font-semibold">Skills:</h3>
          <p className="text-sm">
            JavaScript, React, Node.js, HTML + CSS, C#, Java, Swift, Python,
            SQL, NoSQL, Git
          </p>
        </div>
        <hr />
        <TableOfContents />
      </div>
    </aside>
  );
}
