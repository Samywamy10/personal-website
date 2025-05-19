import { format, parse } from "date-fns";
const telstraPurpleImage = "/telstrapurple.png";
const technologeticImage = "/technologetic.png";
const haileyburyImage = "/haileybury.png";
const palaceImage = "/palace.png";
const monashImage = "/monash.png";
const canva = "/canva.jpg";
import type { ExperienceType } from "../types/experience";

export const workExperiences: ExperienceType[] = [
  {
    organisation: "Canva",
    image: canva,
    jobs: [
      {
        title: "Engineering Manager/Senior Frontend Engineer",
        startDate: format(
          parse("01-12-2023", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: null,
        description: (
          <div>
            <p className="mb-3">
              Currently leading the Browse Experience team working on{" "}
              <a
                href="https://canva.com/templates"
                className="hover:underline text-gray-600 dark:text-gray-400"
              >
                Canva&apos;s Templates Marketplace
              </a>
              , enabling millions of users begin designing every day.
            </p>
            <List>
              <li className="leading-relaxed">
                <strong>Led the development of a new search experience</strong>,
                pivoting the team&apos;s focus to launch a new unified search
                platform in time for millions of users to use following a major
                public launch. A major part of this project was the development
                of a new, scalable Backend-For-Frontend (BFF), allowing for both
                Frontend and Backend to evolve in parallel without blocking each
                other.
              </li>
              <li className="leading-relaxed">
                <strong>
                  Lead the development of a new landing page Templates
                </strong>
                , moving away from a complex to discern and static presentation
                of Canva's extensive template library to a personalised and
                simplified homepage experience.
              </li>
              <li className="leading-relaxed">
                <strong>
                  Re-prioritised team's focus using data-driven insights
                </strong>{" "}
                by developing and circulating comprehensive analyses connecting
                project investment to usage and engagement metrics, directly
                influencing leadership decisions to reduce or sunset
                lower-impact initiatives. In one case this led to a 50% increase
                in team capacity, which was able to be directed to higher
                priority projects.
              </li>
              <li className="leading-relaxed">
                <strong>Directly managed up to 6 engineers</strong>,
                facilitating their achievement of key goals, growing them into
                new opportunities, and successfully supporting promotion
                milestones.
              </li>
              <li className="leading-relaxed">
                <strong>
                  Led technical problem-solving and incident response
                </strong>
                , often acting as the technical lead for high-severity
                incidents. This has has required rapid understanding of both
                impact and root cause to identify the best course of action; and
                then collaboration with other technical teams across the
                business to mitigate and resolve the problem.
              </li>
            </List>
          </div>
        ),
      },
      {
        title: "Frontend Engineer",
        startDate: format(
          parse("01-02-2021", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("01-12-2023", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description: (
          <div>
            <List>
              <li className="leading-relaxed">
                <strong>
                  Owned Canva&apos;s Typescript, NodeJS and Java-based
                  Server-Side Rendering (SSR) stack
                </strong>
                , leading a number of improvements around performance,
                observability and reliability. Led several architectural changes
                to the SSR stack, including:
                <ul className="list-disc pl-6 mt-1">
                  <li>
                    A company-wide initiative (changing the behaviour of 500+
                    frontend engineers) to move away from Web APIs in server
                    renders
                  </li>
                  <li>
                    Moving the bespoke SSR stack to Bazel-based builds, enabling
                    more robust and reproducible deployments inline with the
                    rest of the Canva stack
                  </li>
                  <li>
                    Proposing a modernisation of the server-side rendering flow
                    using the latest in React developments
                  </li>
                </ul>
              </li>
              <li className="leading-relaxed">
                <strong>
                  Introduced an interactive component library using Storybook
                  for the Group&apos;s frontend components
                </strong>
                , allowing non-technical stakeholders to easily understand what
                UI features are available when creating new experiences.
              </li>
            </List>
          </div>
        ),
      },
    ],
    skills: [
      "Typescript",
      "React",
      "MobX",
      "NodeJS",
      "Java",
      "Protobuf",
      "Bazel",
    ],
  },
  {
    organisation: "Telstra Purple",
    image: telstraPurpleImage,
    jobs: [
      {
        title: "Developer",
        startDate: format(
          parse("01-01-2020", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("01-02-2021", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description: (
          <div>
            <p className="mb-3">
              Working as a consultant solving business problems for a number of
              customers.
            </p>
            <List>
              <li className="leading-relaxed">
                Updating and maintaining a coronavirus web dashboard for the
                Australian federal government
              </li>
              <li className="leading-relaxed">
                Transforming an out of date and non-performant AngularJS/.NET
                based web form to a React/GraphQL based incident management
                system for an electricity regulator
              </li>
              <li className="leading-relaxed">
                Creating a native iOS application for creating and maintaining
                bookings within an events space. Using SwiftUI and Google
                Firebase functions
              </li>
            </List>
          </div>
        ),
      },
      {
        title: "Graduate Developer",
        startDate: format(
          parse("01-01-2018", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("31-12-2019", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description: (
          <div>
            <List>
              <li className="leading-relaxed">
                Ongoing maintenance of a Xamarin iOS mobile application with a
                .NET Framework back end which enables sales people to place
                orders for customers remotely. This includes constant
                communication with the client to determine and understand new
                requirements, as well as responding to changing business
                requirements.
              </li>
              <li className="leading-relaxed">
                A web application for scheduling which reduced time spent
                allocating resources within the team from 3 days to 3 hours a
                month. I was involved from project conception through an
                iterative development process taking on feedback from key users
                until delivery. We used C# & ASP.NET for the back end, and
                React+Redux for the interactive UI.
              </li>
              <li className="leading-relaxed">
                A web application for managing the individual skills of
                consultants across Telstra Purple. The tool allows workforce
                planners to identify and more confidently place consultants onto
                different gigs given their skillsets. From the beginning of the
                project I was involved, being part of the core team to build,
                iterate and maintain the site. It is written with Angular, ngrx
                and a .NET Core backend.
              </li>
            </List>
          </div>
        ),
      },
    ],
    skills: ["C#", ".NET Core", "React w/ Redux", "Angular", "JavaScript"],
  },
  {
    organisation: "Technologetic",
    image: technologeticImage,
    jobs: [
      {
        title: "Managing Director",
        startDate: format(
          parse("09-01-2010", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: null,
        description: (
          <>
            I founded the{" "}
            <a
              href="https://youtube.com/technologetic"
              target="_blank"
              className="hover:underline text-gray-600 dark:text-gray-400"
            >
              Technologetic YouTube channel
            </a>{" "}
            covering technology as an intersection of my love for technology,
            videography and public speaking. Since 2010 I&apos;ve researched,
            scripted, filmed, presented, edited and published over 170 videos.
          </>
        ),
      },
    ],
    skills: ["Videography", "Public speaking"],
  },
  {
    organisation: "Haileybury",
    image: haileyburyImage,
    jobs: [
      {
        title: "Venue Technician",
        startDate: format(
          parse("01-01-2015", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: null,
        description:
          "After being heavily involved in the technical side of most assemblies, live music, plays & musicals and other live events during my time at Haileybury, I was employed to continue to provide AV support. This has also extended to corporate events suchs as launches or school open days across the four campuses in Victoria. It includes working in large teams on big productions, to working autonomously and discretely at corporate events.",
      },
    ],
    skills: [
      "Audio engineering",
      "lighting design & operation",
      "AV support",
      "general facilities tasks",
      "teamwork",
      "independence",
      "attention to detail",
    ],
  },
  {
    organisation: "Palace Cinemas",
    image: palaceImage,
    jobs: [
      {
        title: "Supervisor/Front of House",
        startDate: format(
          parse("05-01-2014", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("08-01-2018", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description:
          "Worked as part of a team at the box office, I primarily sold tickets and concession items. This role involved wearing many hats, from being a coffee barista in the morning, to a bartender at night, and a warm welcome and first port of call to cinema patrons throughout the day. I was also promoted to a supervisor role, managing up to ten staff at a time, handling large amounts of money and being ultimately responsible for customer satisfaction at any given time.",
      },
    ],
    skills: [
      "PoS and EFTPOS operation",
      "responsible service of alcohol",
      "teamwork",
      "customer service",
      "cleaning",
      "restocking",
      "closing",
      "AV programming & operation",
    ],
  },
  {
    organisation: "Monash University",
    image: monashImage,
    jobs: [
      {
        title: "Summer Research Student",
        startDate: format(
          parse("12-01-2016", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        endDate: format(
          parse("03-01-2017", "dd-MM-yyyy", new Date()),
          "yyyy-MM-dd"
        ),
        description:
          "Worked on a project for Woodside energy, enabling multiple users across the internet to simultaneously view and interact with 3D models in the browser. In particular, this project was enabling collaboration and discussion between researchers in Melbourne, and gas pipeline teams in Perth.",
      },
    ],
    skills: [
      "NodeJS",
      "Python",
      "React + Redux",
      "JavaScript",
      "jQuery",
      "HTML + CSS",
    ],
  },
];

export function List({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc pl-5 flex flex-col gap-1">{children}</ul>;
}
