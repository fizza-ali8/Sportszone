import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import '../Style/Home.css';

import HomeCardData from '../Helper/HomeCardData';
import HomeGalleryData from '../Helper/HomeGalleryData';

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

  const handleGalleryCardClick = () => {
    navigate('/gallery');
  };

  const renderCard = (card) => {
    if (card.isGallery) {
      const cardClassName = card.id === 8 ? 'gallery-card11 special-gallery-card11' : 'gallery-card11';

      return (
        <div key={card.id} className={cardClassName} onClick={handleGalleryCardClick}>
          <div className="slider">
            {card.images.map((imgSrc, index) => (
              <img key={index} src={imgSrc} alt={`Slider ${index + 1}`} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div key={card.id} className="gallery-card11">
          <img src={card.imgSrc} alt={`Card ${card.id}`} />
          <p className="blue-text">{card.time}</p>
          <p>{card.title}</p>
        </div>
      );
    }
  };

  return (
    <div className="home-page">
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
      
      <div className="line-container">
        <div className="line">
          <span className="line-text2">TOP STORIES</span>
        </div>
      </div>
      
      <div className="gallery-section">
        <div className="row1">
          {renderCard(HomeGalleryData[0])}
          {renderCard(HomeGalleryData[1])}
          {renderCard(HomeGalleryData[7])} {/* Gallery card */}
        </div>
        <div className="row1">
          {renderCard(HomeGalleryData[2])}
          {renderCard(HomeGalleryData[3])}
          {renderCard(HomeGalleryData[4])}
          {renderCard(HomeGalleryData[5])}
          
          <div className="gallery-card11 empty-card"></div> {/* Empty card to keep the structure */}
        </div>
        <div className="row1">
          {renderCard(HomeGalleryData[6])}
          {renderCard(HomeGalleryData[8])}
          {renderCard(HomeGalleryData[9])}
        </div>
      </div>
    </div>
  );
};

export default Home;
