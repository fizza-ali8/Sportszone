import React, { useState } from 'react';
import '../Style/Gender.css';


const Gender = ({ selectedGender, setSelectedGender }) => {

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="gender-toggle">
      <button
        className={selectedGender === 'Women' ? 'active' : ''}
        onClick={() => handleGenderClick('Women')}
      >
        Women
      </button>
      <button
        className={selectedGender === 'Men' ? 'active' : ''}
        onClick={() => handleGenderClick('Men')}
      >
        Men
      </button>
    </div>
  );
};

export default Gender;
