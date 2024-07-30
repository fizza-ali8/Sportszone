import React, { useRef } from 'react';
import '../Style/Home.css'; // Include Home CSS for Home section styles
import '../Style/Card.css'; // Include Card CSS for card styles
import '../Style/News.css'; // Include News CSS for News section styles
import Card from '../components/Card';
import HomeCardData from '../Helper/HomeCardData';
import cardData from '../Helper/cardData'; // Ensure cardData is used if needed

const Home = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300, // Adjust the value based on how much you want to scroll
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300, // Adjust the value based on how much you want to scroll
        behavior: 'smooth',
      });
    }
  };

  // Render Home content
  const homeContent = React.createElement(
    'div',
    { className: 'home' },
    React.createElement(
      'button',
      { className: 'scroll-button left', onClick: scrollLeft },
      '←'
    ),
    React.createElement(
      'div',
      { className: 'card-container', ref: cardContainerRef },
      HomeCardData.map(card =>
        React.createElement(
          'div',
          { key: card.id, className: 'card-home' },
          React.createElement('p', null, card.text1),
          React.createElement(
            'div',
            { className: 'country-info' },
            React.createElement('img', { src: card.country1.flag, alt: `${card.country1.name} flag` }),
            React.createElement(
              'div',
              { className: 'country-name-goals' },
              React.createElement('span', null, card.country1.name),
              React.createElement('span', null, card.country1.goals)
            )
          ),
          React.createElement(
            'div',
            { className: 'country-info' },
            React.createElement('img', { src: card.country2.flag, alt: `${card.country2.name} flag` }),
            React.createElement(
              'div',
              { className: 'country-name-goals' },
              React.createElement('span', null, card.country2.name),
              React.createElement('span', null, card.country2.goals)
            )
          ),
          React.createElement('p', { className: 'blue-text' }, card.text2)
        )
      )
    ),
    React.createElement(
      'button',
      { className: 'scroll-button right', onClick: scrollRight },
      '→'
    )
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
          React.createElement(Card, { key: index, card: card })
        )
      )
    )
  );

  // Combine Home and News content
  return React.createElement(
    'div',
    { className: 'home-page' },
    homeContent,
    newsContent
  );
};

export default Home;
