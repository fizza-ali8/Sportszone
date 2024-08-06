import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

import '../Style/Home.css'; // Include Home CSS for Home section styles
import '../Style/Card.css'; // Include Card CSS for card styles
import '../Style/News.css'; // Include News CSS for News section styles
 import NewsCard from '../components/NewsCard';
import HomeCardData from '../Helper/HomeCardData';
import cardData from '../Helper/cardData';


const Home = () => {
  const cardContainerRef = useRef(null);
  const navigate = useNavigate();

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  const handleCardClick = () => {
    navigate('/live-updates');
  };

  // Render Home content
  const homeContent = (
    <div className="home">
      <button className="scroll-button left" onClick={scrollLeft}>
        ←
      </button>
      <div className="card-container" ref={cardContainerRef}>
        {HomeCardData.map((card) => (
          <div key={card.id} className="card-home clickable-card" onClick={handleCardClick}>
            <p>{card.text1}</p>
            <div className="country-info">
              <img src={card.country1.flag} alt={`${card.country1.name} flag`} />
              <div className="country-name-goals">
                <span>{card.country1.name}</span>
                <span>{card.country1.goals}</span>
              </div>
            </div>
            <div className="country-info">
              <img src={card.country2.flag} alt={`${card.country2.name} flag`} />
              <div className="country-name-goals">
                <span>{card.country2.name}</span>
                <span>{card.country2.goals}</span>
              </div>
            </div>
            <p className="blue-text">{card.text2}</p>
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        →
      </button>
    </div>
  );

  // Render News content
  const newsContent = React.createElement(
    'div',
    { className: 'news-container' },
    React.createElement(
      'div',
      { className: 'line-container' },
      React.createElement(
        'div',
        { className: 'line' },
        React.createElement('span', { className: 'line-text' }, 'TOP STORIES')
      )
    ),
    React.createElement(
      'div',
      { className: 'content' },
      React.createElement(
        'div',
        { className: 'container' },
        cardData.map((card, index) =>
          React.createElement(NewsCard, { key: index, card: card })
        )
      )
    )
  );

  // Combine Home and News content
  return (
    <div className="home-page">
      {homeContent}
      {newsContent}
    </div>
  );
};

export default Home;
