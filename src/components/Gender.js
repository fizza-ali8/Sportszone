import React from 'react';
import '../Style/Gender.css';

const Gender = ({ setSelectedGender, selectedGender }) => {
  return (
    <div className="gender-container">
      <button 
        className={`gender-button ${selectedGender === 'men' ? 'active' : ''}`} 
        onClick={() => setSelectedGender('men')}
      >
        Men
      </button>
      <button 
        className={`gender-button ${selectedGender === 'women' ? 'active' : ''}`} 
        onClick={() => setSelectedGender('women')}
      >
        Women
      </button>
    </div>
  );
};

export default Gender;
