import React from 'react';
import '../Style/MatchCard.css';


const MatchCard = ({ series, team1, team2, date, time, stadium, flag1, flag2 }) => {
  return (
    <div className="match-card">
      <div className="match-info">
        <div className="match-row1">
          <div className="series-info">{series}</div>
          <div className="stadium-info">{stadium}</div>
        </div>

        <div className="teams">
          <div className="team">
            <img src={flag1} alt={team1} className="flag" />
            <span className="team-name">{team1}</span>
          </div>
          <div className="match-row3">
            <div className="team">
              <img src={flag2} alt={team2} className="flag" />
              <span className="team-name">{team2}</span>
            </div>
            <div className="match-time">{date}, {time}</div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default MatchCard;
