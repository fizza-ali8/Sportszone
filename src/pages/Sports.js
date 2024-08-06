import React, { useState } from 'react';
import Gender from '../components/Gender';
import LatestButton from '../components/LatestButton';
import LatestUpdates from '../components/LatestUpdates';
import ScheduleCard from '../components/ScheduleCard';
import SectionBar from '../components/SectionBar';
import MatchCategoryTitle from '../components/MatchCategoryTitle';
import '../Style/Sports.css';
import HorizontalScrollView from '../components/HorizontalScrollView';
import SportcardData from '../Helper/SportcardData';
import Playerlistdata from '../components/playerlistdata';

function Sports() {
  const [selectedSport, setSelectedSport] = useState('Cricket');
  const [selectedGender, setSelectedGender] = useState('men');
  const [selectedSection, setSelectedSection] = useState('matches');
  const [selectedSquad, setSelectedSquad] = useState('');




  

  // Filter the sport data based on the selected sport and gender
  const sportData = SportcardData.find(
    (data) => data.sportData.sportsname === selectedSport
  );

  // If there is no sport data, return a loading or no data message
  if (!sportData) return <div>Loading...</div>;

  const matches = sportData.sportData[selectedGender]?.matches || [];
  const squadData = sportData.sportData[selectedGender]?.sqaud?.matchCategory || [];
  const selectedCategory = squadData.find(
    (category) => category.matchCategoryTitle === selectedSquad
  );
  const playersData = selectedCategory?.players || [];





  return (
    <div className='sport'>
      <div className='horizontalscrollview'>
        <HorizontalScrollView selectedSport={selectedSport} setSelectedSport={setSelectedSport} />
      </div>
      <div className='sports_container'>
        <div className='matches_container'>
          <div className='gender'>
            <Gender selectedGender={selectedGender} setSelectedGender={setSelectedGender} />
          </div>
          <div className='section_bar'>
            <SectionBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
          </div>
          {selectedSection === 'matches' ? (
            <div className='sports_about'>
              <div className='matches_crad_view'>
                {matches.map((match, index) => (
                  <ScheduleCard key={index} card={match} />
                ))}
              </div>
            </div>
          ) : (
            <div className='squad'>
              <div className='match_category_title'>
                <MatchCategoryTitle
                  squad={squadData}
                  setSelectedSquad={setSelectedSquad}
                  selectedSquad={selectedSquad}
                />
              </div>
              <div className='players_data'>
                {playersData.map((category, index) => (
                  <div key={index} className='player_data'>
                    <Playerlistdata category={category} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className='latest_news_area'>
          <LatestButton />
          <div className='latest_news'>
            <LatestUpdates news={sportData.latestNew} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
