import React from 'react';
import '../Style/Card.css';


const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.imageUrl} alt="Event" />
      <div className="card-body">
        <p>{card.date}</p>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default Card;