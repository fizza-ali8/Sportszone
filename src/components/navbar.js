import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/navbar.css';

const Navbar = () => {
  // Track the selected item
  const [selected, setSelected] = useState('Live Updates');
  const location = useLocation();

  // Function to update the selected item based on the path
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/home':
        setSelected('Live Updates');
        break;
      case '/news':
        setSelected('News');
        break;
      case '/matches':
        setSelected('Matches');
        break;
      case '/articles':
        setSelected('Articles');
        break;
      case '/sports':
        setSelected('Sports');
        break;
      case '/international':
        setSelected('International');
        break;
      case '/gallery':
        setSelected('Gallery');
        break;
      case '/livestream':
        setSelected('Live Stream');
        break;
      default:
        setSelected('Live Updates'); // Default to "Live Updates" or another default value
        break;
    }
  }, [location]);

  return (
    <nav className='main-nav'>
      <div className='menu-link'>
        <ul>
          <li><Link to="/home" onClick={() => setSelected('Live Updates')}>Home</Link></li>
          <li><Link to="/matches" onClick={() => setSelected('Matches')}>Matches</Link></li>
          <li><Link to="/news" onClick={() => setSelected('News')}>News</Link></li>
          <li><Link to="/articles" onClick={() => setSelected('Articles')}>Articles</Link></li>
          <li><Link to="/sports" onClick={() => setSelected('Sports')}>Sports</Link></li>
          <li><Link to="/international" onClick={() => setSelected('International')}>International</Link></li>
          <li><Link to="/gallery" onClick={() => setSelected('Gallery')}>Gallery</Link></li>
          <li><Link to="/livestream" onClick={() => setSelected('Live Stream')}>Live Stream</Link></li>
        </ul>
      </div>
      <div className="navbar-line">
        <span className="navbar-text">{selected}</span>
      </div>
    </nav>
  );
};

export default Navbar;
