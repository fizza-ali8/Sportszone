// src/components/SectionBar.js
import React from 'react';
import '../Style/SectionBar.css';

const SectionBar = ({ setSelectedSection, selectedSection }) => {
  return (
    <div className="section-bar">
      <p  
        className={selectedSection === 'matches' ? 'active' : ''} 
        onClick={() => setSelectedSection('matches')}
      >
        Matches
      </p>
      <p 
        className={selectedSection === 'squad' ? 'active' : ''} 
        onClick={() => setSelectedSection('squad')}
      >
        Squad
      </p>
    </div>
  );
};

export default SectionBar;
