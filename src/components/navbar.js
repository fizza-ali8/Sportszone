import React from 'react';
import './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className='main-nav'>
        <div className='menu-link'>
            <ul>
                <li>
                    <a href='#'>Home</a>
                </li>
                <li>
                    <a href='#'>Matches</a>
                </li>
                <li>
                    <a href='#'>News</a>
                </li>
                <li>
                    <a href='#'>Articles</a>
                </li>
                <li>
                    <a href='#'>Sports</a>
                </li>
                <li>
                    <a href='#'>International</a>
                </li>
                <li>
                    <a href='#'>Gallery</a>
                </li>
                <li>
                    <a href='#'>About us</a>
                </li>
            </ul>
            <img src='/img/liveupdate.png'  style={{width:'100%'}}/>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
