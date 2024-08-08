import React from "react";
import "../Style/ScheduleCard.css";

const ScheduleCard = ({ card }) => {
  return (
    <div className="schedule-card">
      <div className="left-side">
        <div className="series-name">{card.matchDetails}</div>
        <div className="teams">
          <div className="team">
            <img src={card.flag1} alt={`${card.team1} flag`} className="team-flag" />
            <span>{card.team1}</span>
          </div>
          <div className="team">
            <img src={card.flag2} alt={`${card.team2} flag`} className="team-flag" />
            <span>{card.team2}</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <div className="location">{card.venue}</div>
        <div className="date">{card.date}</div>
      </div>
    </div>
  );
};

export default ScheduleCard;
