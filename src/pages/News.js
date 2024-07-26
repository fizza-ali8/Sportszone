// src/pages/News.js
import React from 'react';
import Card from '../components/Card';
import cardData from '../Helper/cardData';
import Footer from '../components/Footer'; // Import Footer component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../Style/News.css';

const News = () => {
  return (
    <div className="news-container">
      <div className="content">
        <div className="container">
          {cardData.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
