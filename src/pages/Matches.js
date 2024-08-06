import React, { useState } from 'react';
import HorizontalScrollView from '../components/HorizontalScrollView';
import '../Style/Matches.css';
import ScheduleCard from '../components/ScheduleCard';
import {
  cricketData,
  footballData,
  basketballData,
  hockeyData,
  badmintonData,
  tennisData,
  tableTennisData,
  iceHockeyData,
  snookerData,
  poloData,
  tentPeggingData,
  kabaddiData,
} from '../Helper/matchData';

const dataMap = {
  Cricket: cricketData,
  Football: footballData,
  Basketball: basketballData,
  Hockey: hockeyData,
  Badminton: badmintonData,
  Tennis: tennisData,
  'Table Tennis': tableTennisData,
  'Ice Hockey': iceHockeyData,
  Snooker: snookerData,
  Polo: poloData,
  'Tent Pegging': tentPeggingData,
  Kabaddi: kabaddiData,
};

function Matches() {
  const [selectedSport, setSelectedSport] = useState('Cricket');

  const matchData = dataMap[selectedSport] || [];

  return (
    <div className='matches-page'>
      <div className='horizontal-scrollview'>
        <HorizontalScrollView selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
      </div>
      <div className='matches-container'>
        <div className='matches'>
          {matchData.map((card, index) => (
            <ScheduleCard key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Matches;
