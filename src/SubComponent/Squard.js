import React from 'react';
import '../Style/Squad.css'; // Import the CSS file for styling
import squadData from '../Helper/squadData'; // Import the squad data

const Squad = () => {
  return (
    <div className="box">
      <img src="FLAGS_IMAGES/ENGLAND.jpeg" className="flag left" alt="England Flag" />
      <img src="FLAGS_IMAGES/WESTINDIES.jpeg" className="flag right" alt="West Indies Flag" />
      
      <div className="player-info left-info">
        {squadData.left.map((player, index) => (
          <div key={index} className="player-container">
            <img src={player.imgSrc} alt={player.header} className="player-img" />
            <div className="text-overlay">
              <h4>{player.header}</h4>
              <h5>{player.subtext}</h5>
            </div>
          </div>
        ))}
      </div>
      
      <div className="player-info right-info">
        {squadData.right.map((player, index) => (
          <div key={index} className="player-container">
            <img src={player.imgSrc} alt={player.header} className="player-img" />
            <div className="text-overlay">
              <h4>{player.header}</h4>
              <h5>{player.subtext}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Squad;
