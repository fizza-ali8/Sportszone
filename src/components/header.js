import React, { useState } from 'react';
import '../Style/header.css';
import { useTheme } from '../components/ThemeContext';

const Header = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const handleLanguageChange = () => {
    // Placeholder for changing language
    console.log('Language change triggered');
  };

  return (
    <header>
      <div className={`header ${isDarkMode ? 'dark-header' : ''}`}>
        <div className="logo">
          <img src="/img/logo.png" alt="Logo" />
        </div>
        <div className="searchbar">
          {searchVisible && (
            <input type="text" placeholder="Search" className="search-input" />
          )}
          <button className="search-button"  onClick={toggleSearch}>
            <img src="/img/searchbutton.png" alt="Search" />
          </button>
          <button className="nightmode-button" onClick={toggleDarkMode}>
            <img
              src={isDarkMode ? "/img/Lightmode.svg" : "/img/Darkmode.png"}
              alt="Night Mode"
            />
          </button>
          <img
            src="/img/Language.png"
            alt="Earth"
            className="earth-logo"
            onClick={handleLanguageChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
