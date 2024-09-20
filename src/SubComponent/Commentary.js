import React from 'react';
import '../Style/Commentary.css'; // Import the CSS file

const Commentary = () => {
  return React.createElement('div', { className: 'commentary' },
    React.createElement('p', null, 
      'Raza tackles Evans with a hug that brings them both to the turf. Zimbabwe goes bonkers on the field and there\'s wild cheers from a strong Zimbabwean contingent in the stands. The Zimbabwean squad does a mini-lap of honor high-fiving the healthy contingent of fans who have come out to support them.'
    )
  );
};

export default Commentary;
