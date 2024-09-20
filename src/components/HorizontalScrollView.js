import React from 'react';
import '../Style/HorizontalScrollView.css';

const HorizontalScrollView = ({ selectedSport, setSelectedSport }) => {
  const items = [
    'Cricket', 'Football', 'Basketball', 'Hockey', 'Badminton', 'Tennis',
    'Table Tennis', 'Ice Hockey', 'Snooker', 'Polo', 'Tent Pegging', 'Kabaddi'
  ];

  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-view">
        {items.map(item => (
          <div 
            key={item} 
            className={`scroll-item ${selectedSport === item ? 'selected' : ''}`} 
            onClick={() => setSelectedSport(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollView;
