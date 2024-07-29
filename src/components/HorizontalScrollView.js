import React, { useState } from 'react';
import '../Style/HorizontalScrollView.css';

const HorizontalScrollView = () => {
  const [selectedItem, setSelectedItem] = useState('Cricket');

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
            className={`scroll-item ${selectedItem === item ? 'selected' : ''}`} 
            onClick={() => setSelectedItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollView;
