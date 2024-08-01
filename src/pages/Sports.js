import React from 'react';
import Gender from '../components/Gender';
import LatestButton from '../components/LatestButton';
import LatestUpdates from '../components/LatestUpdates';
import MatchCard from '../components/MatchCard';
import Matches from '../components/Matches';
import SectionBar from '../components/SectionBar';
import '../Style/Sports.css'

const Sports = () => {
    return (
        <div className="Sports">


            <div className="main-wrapper">
                <div className='main-content'>
                    <Gender />
                    <SectionBar />
                    <Matches />
                </div>
                <div className='latest-content'>
                    <div class="button-container">
                        <button class="latest-button">Latest</button>
                    </div>
                    <LatestUpdates />
                </div>
            </div>


        </div>

    );
};

export default Sports;
