// src/pages/News.js
import React from 'react';
import NewsCard from '../components/NewsCard';
import cardData from '../Helper/cardData';
import Footer from '../components/Footer'; // Import Footer component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import '../Style/News.css';
import '../Style/Card.css';

const News = () => {
  return (
    <div className="news-container">
      <div className="content">
        <div className="container">
          {cardData.map((card, index) => (
            <NewsCard key={index} card={card} />
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default News;
