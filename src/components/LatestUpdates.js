import React from 'react';
import '../Style/LatestUpdates.css';
import LatestUpdatesData from '../Helper/LatestUpdatesData';

const LatestUpdates = ({news}) => {
    return (
        <div className="latest-updates">
            {news.map((updates, index) => (
                <div key={index} className="updates-item">
                    <h3>{updates.title}</h3>
                    <p>{updates.news}</p>
                </div>
            ))}
        </div>
    );
};

export default LatestUpdates;
