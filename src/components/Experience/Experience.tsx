import React from 'react';
import './Experience.css';
import ExperienceType from '../../models/ExperienceType';

type ExperienceTypes = {
  experience: ExperienceType;
}

const Experience: React.FC<ExperienceTypes> = ({experience}) => {
  return (
    <div className="experience">
      <h3>{experience.title} - <span>{experience.organisation}</span></h3>
      <span className="date">{experience.startDate.format("MMMM YYYY")} - { experience.endDate ? experience.endDate.format("MMMM YYYY") : "Present"}</span>
      {experience.image ? <img src={experience.image} className="organisation-logo" alt={experience.organisation} /> : ''}
      <p>{experience.description}</p>
      {experience.skills.length > 0 ? <p><strong>Skills:</strong> {experience.skills.map((skill, index) => index === experience.skills.length - 1 ? skill : skill + ", ")}</p> : ""}
    </div>
  );
}

export default Experience;
