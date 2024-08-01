import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Style/navbar.css'; // Assuming your CSS file is in the specified path

const Navbar = () => {
  const [selected, setSelected] = useState('Home');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case '/home':
        setSelected('Home');
        break;
      case '/news':
        setSelected('News');
        break;
      case '/matches':
        setSelected('Match Schedule');
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
        setSelected('Live');
        break;
      default:
        setSelected('Live Updates');
        break;
    }
  }, [location]);

  return (
    <nav className='main-nav'>
      <div className='menu-link'>
        <ul>
          <li className={selected === 'Home' ? 'active' : ''}>
            <Link to="/home" onClick={() => setSelected('Home')}>Home</Link>
          </li>
          <li className={selected === 'Match Schedule' ? 'active' : ''}>
            <Link to="/matches" onClick={() => setSelected('Match Schedule')}>Match Schedule</Link>
          </li>
          <li className={selected === 'News' ? 'active' : ''}>
            <Link to="/news" onClick={() => setSelected('News')}>News</Link>
          </li>
          <li className={selected === 'Articles' ? 'active' : ''}>
            <Link to="/articles" onClick={() => setSelected('Articles')}>Articles</Link>
          </li>
          <li className={selected === 'Sports' ? 'active' : ''}>
            <Link to="/sports" onClick={() => setSelected('Sports')}>Sports</Link>
          </li>
          <li className={selected === 'International' ? 'active' : ''}>
            <Link to="/international" onClick={() => setSelected('International')}>International</Link>
          </li>
          <li className={selected === 'Gallery' ? 'active' : ''}>
            <Link to="/gallery" onClick={() => setSelected('Gallery')}>Gallery</Link>
          </li>
          <li className={selected === 'Live' ? 'active' : ''}>
            <Link to="/livestream" onClick={() => setSelected('Live')}>Live</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-line">
        <span className="navbar-text">{selected}</span>
      </div>
    </nav>
  );
};

export default Navbar;
