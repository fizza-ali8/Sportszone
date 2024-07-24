import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>
        <div className='menu-link'>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">Matches</Link>
                </li>
                <li>
                <Link to="/news">News</Link>
                </li>
                <li>
                <Link to="/">Articles</Link>
                </li>
                <li>
                <Link to="/">Sports</Link>
                </li>
                <li>
                <Link to="/">International</Link>
                </li>
                <li>
                <Link to="/">Gallery</Link>
                </li>
                <li>
                <Link to="/">live stream</Link>
                </li>
            </ul>
            <img src='/img/liveupdates.png'  style={{width:'100%'}}/>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
