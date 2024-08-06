import React from 'react';
import '../Style/Matches.css';
import MatchCard from './MatchCard';


const Matches = ({matchesdata}) => {
  return (
    <div className="matches">
      {matchesdata.map((match, index) => (
        <MatchCard
          key={index}
          series={match.series}
          team1={match.team1}
          team2={match.team2}
          date={match.date}
          time={match.time}
          stadium={match.stadium}
          flag1={match.flag1}
          flag2={match.flag2}
        />
      ))}
    </div>
  );
};

export default Matches;
