import React from 'react';
import Card from '../components/Card';
import cardData from '../Helper/cardData';
import '../Style/News.css';

const News = () => {
  return (
    <>
      <div className="container">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </>
  );
};

export default News;
