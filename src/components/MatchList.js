import React from 'react';
import MatchCard from './MatchCard';

const MatchList = ({ matches }) => (
  <div className="match-list">
    {matches.map((match, index) => (
      <MatchCard key={index} {...match} />
    ))}
  </div>
);

export default MatchList;
