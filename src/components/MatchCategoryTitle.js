import React from 'react';
import '../Style/MatchCategoryTitle.css'; // Ensure you have the CSS file for styling

const MatchCategoryTitle = ({ selectedSquad, squad, setSelectedSquad }) => {
  return (
    <div className="match-category-title">
      <div className="button-group">
        {squad.map((item,index)=>(
  <p       onClick={() => setSelectedSquad(item.matchCategoryTitle)}   >{item.matchCategoryTitle}</p>
        ))}
      
       
      </div>
    </div>
  );
};

export default MatchCategoryTitle;
