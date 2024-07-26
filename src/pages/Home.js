

import React from 'react';
 import '../Style/Home.css'; // Ensure this path is correct
import HomeCardData from '../Helper/HomeCardData';

const Home = () => {
    return (
        <div className="home">
            <h1>Hello</h1>
            <div className="card-container">
                {HomeCardData.map(card => (
                    <div key={card.id} className="card-home">
                        <p>{card.text1}</p>
                        <div className="country-info">
                            <span>{card.country1.name} ({card.country1.goals})</span>
                            <img src={card.country1.flag} alt={`${card.country1.name} flag`} className="flag" />
                        </div>
                        <div className="country-info">
                            <span>{card.country2.name} ({card.country2.goals})</span>
                            <img src={card.country2.flag} alt={`${card.country2.name} flag`} className="flag" />
                        </div>
                        <p className="blue-text">{card.text2}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
