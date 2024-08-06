import React from 'react';
import '../Style/Schedule.css'; // Adjust the path if needed

const Schedule = () => {
  return (
    <div className="schedule-box">
      <h4 className="match-heading">Wed, 10 Jul '24   1st Test - Lord's, July 10 - 12, 2024, West Indies tour of England</h4>
      <div className="match-details">
        <div className="match">
          <img src="FLAGS_IMAGES/WESTINDIES.jpeg" alt="Country 1 Flag" className="flag1" />
          <span className="country-name">West Indies</span>
          <span className="score">Score: 250</span>
        </div>
        <div className="match">
          <img src="FLAGS_IMAGES/ENGLAND.jpeg" alt="Country 2 Flag" className="flag1" />
          <span className="country-name">England</span>
          <span className="score">Score: 245</span>
        </div>
        <h5 className="match-result">England won by an innings and 114 runs.</h5>
      </div>

      <h4 className="match-heading">Thu, 18 Jul '24   2nd Test - Nottingham, July 18 - 22, 2024, West Indies tour of England</h4>
      <div className="match-details">
        <div className="match">
          <img src="FLAGS_IMAGES/WESTINDIES.jpeg" alt="Country 1 Flag" className="flag1" />
          <span className="country-name">West Indies</span>
          <span className="score">3:00 PM</span>
        </div>
        <div className="match">
          <img src="FLAGS_IMAGES/ENGLAND.jpeg" alt="Country 2 Flag" className="flag1" />
          <span className="country-name">England</span>
          <span className="score">10:00 am GMT | 11:00 am Local</span>
        </div>
        <h5 className="match-result">Match starts in 5 hrs 37 mins.</h5>
      </div>

      <h4 className="match-heading">Fri, 26 Jul '24   3rd Test - Birmingham, July 26 - 30, 2024, West Indies tour of England</h4>
      <div className="match-details">
        <div className="match">
          <img src="FLAGS_IMAGES/WESTINDIES.jpeg" alt="Country 1 Flag" className="flag1" />
          <span className="country-name">West Indies</span>
          <span className="score">3:00 PM</span>
        </div>
        <div className="match">
          <img src="FLAGS_IMAGES/ENGLAND.jpeg" alt="Country 2 Flag" className="flag1" />
          <span className="country-name">England</span>
          <span className="score">10:00 am GMT | 11:00 am Local</span>
        </div>
        <h5 className="match-result">Match yet to begin.</h5>
      </div>
    </div>
  );
};

export default Schedule;
