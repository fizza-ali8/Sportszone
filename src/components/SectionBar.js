import React, { useState } from 'react';
import '../Style/SectionBar.css';


const SectionBar = () => {
  const [selectedSection, setSelectedSection] = useState('Matches');

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="section-bar">
      <button
        className={selectedSection === 'Matches' ? 'active' : ''}
        onClick={() => handleSectionClick('Matches')}
      >
        Matches
      </button>
      <button
        className={selectedSection === 'Squad' ? 'active' : ''}
        onClick={() => handleSectionClick('Squad')}
      >
        Squad
      </button>
    </div>
  );
};

export default SectionBar;
