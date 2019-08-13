import React from 'react';
import Moment from 'moment';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Experiences from './components/Experiences/Experiences';
import ExperienceType from './models/ExperienceType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const workExperiences: ExperienceType[] = [
  {
    title: "Graduate Developer",
    organisation: "Readify",
    startDate: Moment("01-01-2018"),
    endDate: null,
    description: "Working in Readify's Managed Services team, doing sustained engineering for a range of customers. In the past, I have worked on creating a scheduling web application to reduce time spent allocating resources within the team from 3 days to 3 hours a month, using C# & ASP.NET for the back end, and React+Redux for the interactive UI. I've also worked on other projects using Angular and .NET Core.",
    skills: ["C#","ASP.NET", ".NET Core", "React + Redux", "Angular", "JavaScript", "HTML + CSS", "Scrum", "Kanban", "Azure DevOps", "Git", "stakeholder engagement", "teamwork", "attention to detail"]
  },
  {
    title: "Managing Director",
    organisation: "Technologetic",
    startDate: Moment("09-01-2010"),
    endDate: null,
    description: "I founded Technologetic as a YouTube channel covering technology as an intersection of my love for technology, videography and public speaking. Since 2010 I've researched, scripted, filmed, presented, edited and published over 170 videos, with no end in sight! Recently I've begun using the Technologetic brand to offer videography, photography and other online media creation services to anyone. Find out more at technologetic.com.",
    skills: ["Videography", "video editing", "photography", "photo editing", "public speaking", "educating & instructing", "digital promotion", "social media", "web development"]
  },
  {
    title: "Venue Technician",
    organisation: "Haileybury",
    startDate: Moment("01-01-2015"),
    endDate: null,
    description: "After being heavily involved in the technical side of most assemblies, live music, plays & musicals and other live events during my time at Haileybury, I was employed to continue to provide AV support. This has also extended to corporate events suchs as launches or school open days across the four campuses in Victoria. It includes working in large teams on big productions, to working autonomously and discretely at corporate events.",
    skills: ["Audio engineering", "lighting design & operation", "AV support", "general facilities tasks", "teamwork", "independence", "attention to detail"]
  },
  {
    title: "Supervisor/Front of House",
    organisation: "Palace Cinemas",
    startDate: Moment("05-01-2014"),
    endDate: Moment("08-01-2018"),
    description: "Working as part of a team at the box office, I primarily sell tickets and concession items. This role involves wearing many hats, from being a coffee barista in the morning, to a bartender at night, and a warm welcome and first port of call to cinema patrons throughout the day. I also take on a supervisor role, managing up to ten staff at a time, handling large amounts of money and being ultimately responsible for customer satisfaction at the time.",
    skills: ["PoS and EFTPOS operation", "responsible service of alcohol", "teamwork", "customer service", "cleaning", "restocking", "closing", "AV programming & operation"]
  },
  {
    title: "Summer Research Student",
    organisation: "Monash University",
    startDate: Moment("12-01-2016"),
    endDate: Moment("03-01-2017"),
    description: "Worked on a project for Woodside energy, enabling multiple users across the internet to simultaneously view and interact with 3D models in the browser. In particular, this project was enabling collaboration and discussion between researchers in Melbourne, and gas pipeline teams in Perth.",
    skills: ["NodeJS", "Python", "React + Redux", "JavaScript", "jQuery", "HTML + CSS"]
  }
];

const educationExperiences: ExperienceType[] = [
  {
    title: "Bachelor of Informations & Computation Advanced (Honours)",
    organisation: "Monash University",
    startDate: Moment("03-01-2015"),
    endDate: Moment("06-01-2019"),
    description: "Majoring in Computer Science while taking electives in journalism. Distinction average. Worked on an evacuation simulation tool for my honours thesis. Also completed several other research projects including a summer research scholarship. Involved in student mentoring.",
    skills: []
  },
  {
    title: "VCE",
    organisation: "Haileybury College",
    startDate: Moment("01-01-2009"),
    endDate: Moment("11-01-2014"),
    description: "Achieved an ATAR in the top 3% of the country while being involved in a huge range of extra-curricular activites including school leadership, debating, backstage crew and sports in my senior years of schooling. A highlight was receiving a Premier's Award for VCE Music Technology.",
    skills: []
  }
]

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar className="sidebar"/>
      <div className="content">
        <Experiences title="Work Experience" experiences={workExperiences} icon={<FontAwesomeIcon className="experience-icon" icon={faBriefcase} />}/>
        <Experiences title="Education" experiences={educationExperiences} icon={<FontAwesomeIcon className="experience-icon" icon={faGraduationCap} />}/>
      </div>
    </div>
  );
}

export default App;
