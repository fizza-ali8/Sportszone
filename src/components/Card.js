import React from 'react';
import '../Style/Card.css';
import { useNavigate } from 'react-router-dom';


const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/SubCard'); // Change to your desired route
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={card.imageUrl} alt="Event" />
      <div className="card-body">
        <p className="date">{card.date}</p>
        <p>{card.description}</p>
      </div>
    </div>
  );
};

export default Card;