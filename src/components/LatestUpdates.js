import React from 'react';
import '../Style/LatestUpdates.css';
import LatestUpdatesData from '../Helper/LatestUpdatesData';

const LatestUpdates = () => {
    return (
        <div className="latest-updates">
            {LatestUpdatesData.map((updates, index) => (
                <div key={index} className="updates-item">
                    <h3>{updates.title}</h3>
                    <p>{updates.content}</p>
                </div>
            ))}
        </div>
    );
};

export default LatestUpdates;
