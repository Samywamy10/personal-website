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
    <article>
      <Card> 
        {icon}
        <div className="article-content">
          <h1>{title}</h1>
          {experiences.map((experience) => 
            <Experience experience={experience} />
          )}
        </div>
      </Card>
    </article>
  );
}

export default Experiences;
