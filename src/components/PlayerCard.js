import React from 'react';

const PlayerCard = ({ name, role }) => (
  <div className="player-card">
    <h4>{name}</h4>
    <p>Role: {role.charAt(0).toUpperCase() + role.slice(1)}</p>
  </div>
);

export default PlayerCard;
