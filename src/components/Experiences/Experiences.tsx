import React from 'react';
import './Experiences.css';
import Card from '../Card/Card';
import Experience from '../Experience/Experience';
import ExperienceType from '../../models/ExperienceType';

type ExperiencesTypes = {
  title:string,
  experiences: ExperienceType[],
  icon:JSX.Element
}

const Experiences: React.FC<ExperiencesTypes> = ({experiences, icon, title}) => {
  return (
    <article className="experiences">
      <Card> 
        {icon}
        <div className="article-content">
          <h1>{title}</h1>
          {experiences.map((experience, index) => 
            <Experience experience={experience} key={index} />
          )}
        </div>
      </Card>
    </article>
  );
}

export default Experiences;
