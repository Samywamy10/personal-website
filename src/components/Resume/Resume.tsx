import React from 'react';
import Experiences from '../Experiences/Experiences';
import { Box } from '@material-ui/core';
import Moment from 'moment';
import ExperienceType from './../../models/ExperienceType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const haileyburyImage = require('./../../images/haileybury.png');
const palaceImage = require('./../../images/palace.png');
const telstraPurpleImage = require('./../../images/telstrapurple.png');
const technologeticImage = require('./../../images/technologetic.png');
const monashImage = require('./../../images/monash.png');

const workExperiences: ExperienceType[] = [
    {
      title: "Developer",
      organisation: "Telstra Purple",
      startDate: Moment("01-01-2020","DD-MM-YYYY"),
      endDate: null,
      image: telstraPurpleImage,
      description: <p>
        Working as a consultant solving business problems for a number of customers.
        <ul>
          <li>Updating and maintaining a coronavirus web dashboard for the Somalian 🤳👀 federal government</li>
          <li>
          Transforming an out of date and non-performant AngularJS/.NET based web form to a React/GraphQL based incident management system for an electricity regulator</li>
          <li>Creating a native iOS application for creating and maintaining bookings within an events space. Using SwiftUI and Google Firebase functions</li>
        </ul>
        </p>,
      skills: []
    },
    {
      title: "Graduate Developer",
      organisation: "Telstra Purple",
      startDate: Moment("01-01-2018","DD-MM-YYYY"),
      endDate: Moment("31-12-2019","DD-MM-YYYY"),
      image: telstraPurpleImage,
      description:
        <p>
          <ul>
            <li>
              Ongoing maintenance of a Xamarin iOS mobile application with a .NET Framework back end which enables sales people to place orders for customers remotely. This includes constant communication with the client to determine and understand new requirements, as well as responding to changing business requirements.
            </li>
            <li>
              A web application for scheduling which reduced time spent allocating resources within the team from 3 days to 3 hours a month. I was involved from project conception through an iterative development process taking on feedback from key users until delivery. We used C# & ASP.NET for the back end, and React+Redux for the interactive UI.
            </li>
            <li>
              A web application for managing the individual skills of consultants across Telstra Purple. The tool allows workforce planners to identify and more confidently place consultants onto different gigs given their skillsets. From the beginning of the project I was involved, being part of the core team to build, iterate and maintain the site. It is written with Angular, ngrx and a .NET Core backend.
            </li>
          </ul>
        </p>,
      skills: ["C#","ASP.NET", ".NET Core", "React + Redux", "Angular", "JavaScript", "HTML + CSS", "Scrum", "Kanban", "Azure DevOps", "Git", "stakeholder engagement", "teamwork", "attention to detail"]
    },
    {
      title: "Managing Director",
      organisation: "Technologetic",
      startDate: Moment("09-01-2010","DD-MM-YYYY"),
      endDate: null,
      image: technologeticImage,
      description: "I founded Technologetic as a YouTube channel covering technology as an intersection of my love for technology, videography and public speaking. Since 2010 I've researched, scripted, filmed, presented, edited and published over 170 videos, with no end in sight! Recently I've begun using the Technologetic brand to offer videography, photography and other online media creation services to anyone. Find out more at technologetic.com.",
      skills: ["Videography", "video editing", "photography", "photo editing", "public speaking", "educating & instructing", "digital promotion", "social media", "web development"]
    },
    {
      title: "Venue Technician",
      organisation: "Haileybury",
      startDate: Moment("01-01-2015","DD-MM-YYYY"),
      endDate: null,
      image: haileyburyImage,
      description: "After being heavily involved in the technical side of most assemblies, live music, plays & musicals and other live events during my time at Haileybury, I was employed to continue to provide AV support. This has also extended to corporate events suchs as launches or school open days across the four campuses in Victoria. It includes working in large teams on big productions, to working autonomously and discretely at corporate events.",
      skills: ["Audio engineering", "lighting design & operation", "AV support", "general facilities tasks", "teamwork", "independence", "attention to detail"]
    },
    {
      title: "Supervisor/Front of House",
      organisation: "Palace Cinemas",
      startDate: Moment("05-01-2014","DD-MM-YYYY"),
      endDate: Moment("08-01-2018","DD-MM-YYYY"),
      image: palaceImage,
      description: "Worked as part of a team at the box office, I primarily sold tickets and concession items. This role involved wearing many hats, from being a coffee barista in the morning, to a bartender at night, and a warm welcome and first port of call to cinema patrons throughout the day. I was also promoted to a supervisor role, managing up to ten staff at a time, handling large amounts of money and being ultimately responsible for customer satisfaction at any given time.",
      skills: ["PoS and EFTPOS operation", "responsible service of alcohol", "teamwork", "customer service", "cleaning", "restocking", "closing", "AV programming & operation"]
    },
    {
      title: "Summer Research Student",
      organisation: "Monash University",
      startDate: Moment("12-01-2016","DD-MM-YYYY"),
      endDate: Moment("03-01-2017","DD-MM-YYYY"),
      image: monashImage,
      description: "Worked on a project for Woodside energy, enabling multiple users across the internet to simultaneously view and interact with 3D models in the browser. In particular, this project was enabling collaboration and discussion between researchers in Melbourne, and gas pipeline teams in Perth.",
      skills: ["NodeJS", "Python", "React + Redux", "JavaScript", "jQuery", "HTML + CSS"]
    }
  ];
  
  const educationExperiences: ExperienceType[] = [
    {
      title: "Bachelor of Informatics & Computation Advanced (Honours)",
      organisation: "Monash University",
      startDate: Moment("03-01-2015","DD-MM-YYYY"),
      endDate: Moment("06-01-2019","DD-MM-YYYY"),
      description: "Majoring in Computer Science while taking electives in journalism. Distinction average. Worked on an evacuation simulation tool for my honours thesis. Also completed several other research projects including a summer research scholarship. Involved in student mentoring.",
      skills: []
    },
    {
      title: "VCE",
      organisation: "Haileybury College",
      startDate: Moment("01-01-2009","DD-MM-YYYY"),
      endDate: Moment("11-01-2014","DD-MM-YYYY"),
      description: "Achieved an ATAR in the top 3% of the country while being involved in a huge range of extra-curricular activites including school leadership, debating, backstage crew and sports in my senior years of schooling. A highlight was receiving a Premier's Award for VCE Music Technology.",
      skills: []
    }
  ]

const Resume: React.FC = () => {
    return (
        <Box>
            <Experiences title="Work Experience" experiences={workExperiences} icon={<FontAwesomeIcon className="experience-icon" icon={faBriefcase} />}/>
            <Experiences title="Education" experiences={educationExperiences} icon={<FontAwesomeIcon className="experience-icon" icon={faGraduationCap} />}/> 
        </Box>
    )
}

export default Resume;