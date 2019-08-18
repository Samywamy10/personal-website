import React from 'react';
import './Sidebar.css';
import profile from './../../images/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faHome, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons'
import SidebarInformation from '../SidebarInformation/SidebarInformation';
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'

type SidebarProps = {
  className: string;
}

const Sidebar: React.FC<SidebarProps> = ({className}) => {
  return (
    <aside className={className + " sidebar"}>
        <img src={profile} className="profile" alt="Sam" />
        <div className="bio">
          <div className="name">Sam Wright</div>
          <div className="title">Developer</div>
        </div>
        <SidebarInformation icon={<FontAwesomeIcon className="icon" icon={faHome} />} bigText={true}>
          <p>Melbourne, Australia</p>
        </SidebarInformation>
        <SidebarInformation icon={<FontAwesomeIcon className="icon" icon={faUser} />} bigText={false}>
          <p>I'm currently working as a graduate software developer at Readify. I'm also the managing director of my digital media production company Technologetic.</p>
          <p>In my spare time I run the Technologetic YouTube channel, take interesting photos and videos, fly my quadcopter and hit the gym.</p>
          <p>I want to help with your next digital project or event. Shoot me an email!</p>
          <p>
            <a href="https://www.linkedin.com/in/sjwright10/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
            <a href="https://github.com/Samywamy10"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
            <a href="https://medium.com/@samjwright"><FontAwesomeIcon className="social-icon" icon={faMedium} /></a>
          </p>
        </SidebarInformation>
        <SidebarInformation icon={<FontAwesomeIcon className="icon" icon={faEnvelope} />} bigText={true}>
          <p>sam@samjwright.com</p>
        </SidebarInformation>
        <SidebarInformation icon={<FontAwesomeIcon className="icon" icon={faCogs} />} bigText={false}>
          <p><strong>Skills:</strong> Python, PHP, C#, ASP.Net, .NET Core, Swift, Xamarin, Javascript: React+Redux, Angular, NodeJS, jQuery, HTML + CSS, R, Tableau, SQL, NoSQL, Git, Azure DevOps, Scrum, Adobe Creative Suite, Photography, Videography, Video editing</p>
        </SidebarInformation>
    </aside>
  );
}

export default Sidebar;
