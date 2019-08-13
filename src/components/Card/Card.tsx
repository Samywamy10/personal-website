import React from 'react';
import './Card.css';

type CardTypes = {
  className?: string;
}

const Card: React.FC<CardTypes> = ({className, children}) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
}

export default Card;
