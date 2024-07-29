import React from 'react';
import HorizontalScrollView from '../components/HorizontalScrollView';
import '../Style/Matches.css';
import MatchData from '../Helper/matchData';
import ScheduleCard from '../components/ScheduleCard';



function Matches() {
  return (
    <div className='matches-page'>
      <div className='horizontal-scrollview'>
        <HorizontalScrollView />
      </div>
      <div className='matches-container'>
        <div className='matches'>
        {MatchData.map((card, index) => (
           <ScheduleCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Matches;
