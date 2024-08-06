import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeCardData from '../Helper/HomeCardData';
import Squad from '../SubComponent/Squard';
import Schedule from '../SubComponent/Schedule';
import Scorecard from '../SubComponent/ScoreCard';
import Commentary from '../SubComponent/Commentary';
import '../Style/Home.css';
import '../Style/LiveUpdates.css';



const LiveUpdates = () => {
    const [selectedLayout, setSelectedLayout] = useState(null);
    const cardContainerRef = useRef(null);
  
    const scroll = (scrollOffset) => {
      if (cardContainerRef.current) {
        cardContainerRef.current.scrollBy({
          left: scrollOffset,
          behavior: 'smooth',
        });
      }
    };
  
    const renderCard = (card) => (
      <div
        key={card.id}
        className="card-home clickable-card"
      >
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
    );
  
    const matchInfo = [
      { label: 'Date and Time:', value: '18 July, 3:30 PM' },
      { label: 'Venue:', value: 'Trent Bridge, Nottingham' },
      { label: 'MATCH:', value: '2nd Test, England vs West Indies 2024' },
      { label: 'TOSS:', value: 'TOSS YET TO TAKE PLACE' }
    ];
  
    const renderTextRow = ({ label, value }) => (
      <div
        className="text-line-row"
        style={{ display: 'flex', justifyContent: 'space-between', width: '70%', paddingTop: '10px' }}
      >
        <div className="label" style={{ fontWeight: 'bold' }}>{label}</div>
        <div className="value" style={{ fontWeight: 'bold' }}>{value}</div>
      </div>
    );
  
    const renderLayout = () => {
      switch (selectedLayout) {
        case 'squad':
          return <Squad />;
        case 'schedule':
          return <Schedule />;
        case 'scorecard':
          return <Scorecard />;
        case 'commentary':
          return <Commentary />;
        default:
          return null;
      }
    };
  
    return (
      <div className="live-updates-page">
        <div className="scrolling-cards-container">
          <button className="scroll-button left" onClick={() => scroll(-300)}>←</button>
          <div className="card-container" ref={cardContainerRef}>
            {HomeCardData.map(renderCard)}
          </div>
          <button className="scroll-button right" onClick={() => scroll(300)}>→</button>
        </div>
        <div className="live-updates-content">
          <div className="flag-text-container">
            <div className="flag-text-row">
              <img src="FLAGS_IMAGES/ENGLAND.JPEG" alt="Flag 1" className="flag-image" />
              <p className="flag-text bold-text">
                2nd Test, richards-botham trophy, 2024<br/><br/>England vs west indies
              </p>
            </div>
            <div className="flag-text-row">
              <img src="FLAGS_IMAGES/WESTINDIES.JPEG" alt="Flag 2" className="flag-image" />
            </div>
          </div>
          <div className="centered-container">
            <div className="container" style={{ border: '2px solid #BDC1CAFF', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', paddingTop: '10px' }}>
              {matchInfo.map(renderTextRow)}
            </div>
          </div>
          <div className="button-container">
            <button onClick={() => setSelectedLayout('squad')}>Squad</button>
            <button onClick={() => setSelectedLayout('schedule')}>Schedule</button>
            <button onClick={() => setSelectedLayout('scorecard')}>Scorecard</button>
            <button onClick={() => setSelectedLayout('commentary')}>Commentary</button>
          </div>
          <div className="layout-container">
            {renderLayout()}
          </div>
        </div>
      </div>
    );
  };
  
  export default LiveUpdates;