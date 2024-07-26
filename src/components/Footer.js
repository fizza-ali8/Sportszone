// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons
import '../Style/Footer.css'; // Import the Footer CSS

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <br/>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <br/>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>
      <p className="footer-text">Sports. Zone. All rights reserved.</p>
      <p className="footer-links">
        <a href="#privacy">Privacy</a> <a href="#terms">Terms</a> <a href="#help">Help</a> <a href="#devices">Devices</a>
      </p>
      <p className="footer-links">
        <a href="#media-center">Media Center</a> <a href="#gift-cards">Gift Cards</a> <a href="#legal-notices">Legal Notices</a> <a href="#account">Account</a>
      </p>
    </div>
  );
};

export default Footer;
