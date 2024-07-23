import React from 'react';
import Card from '../components/Card';
import cardData from '../Helper/cardData';
import '../Style/News.css';

const News = () => {
  return (
    <>
      <h1>News</h1>
      <div className="container">
        {cardData.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </>
  );
};

export default News;
