// src/pages/International.js

import React, { useRef } from "react";
import "../Style/Card.css";
import "../Style/international.css";
import "../Style/SubCard.css";
import Card from "../components/NewsCard";
import HomeCardData from "../Helper/HomeCardData";
import cardData from "../Helper/cardData";

function International() {
  const cardContainerRef = useRef(null);
  const scrollLeft = () => {
    cardContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    cardContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
  return (
    <div>
    <div className="international-updates">
    <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
      <div className="updates" ref={cardContainerRef}>
        {HomeCardData.map(card =>
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
        )}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
    </div>

      <div>
        <div className="navbar-line">
          <span className="navbar-text">Top Stories</span>
        </div>

        {/* Top Stories Section */}
        <div className="top-stories">
          <div className="stories-grid">
            {cardData.map((item, index) => (
              <Card key={index} card={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default International;
