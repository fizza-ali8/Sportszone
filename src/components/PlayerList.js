import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = ({ players }) => (
  <div className="player-list">
    {Object.keys(players).map((role, index) => (
      <div key={index}>
        <h3>{role.charAt(0).toUpperCase() + role.slice(1)}</h3>
        <div className="player-cards">
          {players[role].map((player, index) => (
            <PlayerCard key={index} name={player} role={role} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default PlayerList;
