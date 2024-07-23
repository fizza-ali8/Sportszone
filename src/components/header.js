import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
        <div className="header">
            <div className="logo">
                <img src="/img/logo.png" alt="Logo" /> 
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search" />
                <button className="search-button">
                    <img src="/img/searchbutton.png" alt="Search" />
                </button>
                <button className="nightmode-button">
                    <img src="/img/Darkmode.png" alt="Night Mode" />
                </button>
                <img src="/img/Language.png" alt="Earth" className="earth-logo" />
            </div>
      </div>
    </header>
  );
};

export default Header;
