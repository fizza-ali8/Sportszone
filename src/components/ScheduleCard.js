import React from "react";
import "../Style/ScheduleCard.css";

const ScheduleCard = ({ card }) => {
  return (
    <div className="schedule-card">
      <div className="match-info">
        <div className="match">{card.matchDetails}</div>
        <div className="teams">
          <div className="team">
            <img src={card.flag1} alt={`${card.team1} flag`} className="flag" />
            <span>{card.team1}</span>
          </div>
         
          <div className="team">
            <img src={card.flag2} alt={`${card.team2} flag`} className="flag" />
            <span>{card.team2}</span>
          </div>
        </div>
      </div>
      <div className="match-details">
      <div className="match-location">{card.venue}</div>
        <div className="match-date">{card.date}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
