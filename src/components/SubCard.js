import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Card from '../components/Card'; // Adjust the path as necessary
import cardData from '../Helper/cardData'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import '../Style/SubCard.css'; // Ensure this CSS file exists and is properly linked

const SubCard = () => {
  const location = useLocation();
  const card = location.state?.card; // Access the card data passed from News.js

  // Get the first 4 cards
  const initialCards = cardData.slice(0, 4);
  // Get the next 3 cards
  const additionalCards = cardData.slice(4, 7);

  const textContent = `
    Pakistan hockey team will face Malaysia in a must-win clash during the Paris Olympics Qualifiers on Thursday in Muscat, Oman.<br><br>
    If Pakistan win their last pool match against Malaysia, they will qualify for the semi-finals.<br><br>
    The Green Shirts will also qualify for the semis, in case their match against Malaysia ends in a draw, if Great Britain beat China in their match today.<br><br>
    It must be noted that the top three teams of the qualifiers will book spot in the Paris Olympics.<br><br>
    Earlier, Pakistan defeated China 2-0 to register their first win in the Paris Olympics Qualifiers on Tuesday.<br><br>
    In the goalless first half, both teams displayed defensive game, but the third quarter saw some entertaining hockey as a couple of goal scoring chances were created by Pakistan. Pakistan’s continuous attacks bore fruit as Abu Bakr, the drag flicker, scored the first goal for Pakistan.<br>
    <br>In the fourth quarter, Pakistan played well, penetrated the Chinese circle and entered the D area resulting in penalty corners. Abdul Rehman was successful in scoring the second goal on a rebound of a penalty corner.<br><br>
    In the last few minutes of the fourth quarter Chinese team tried its level best and attacked Pakistani goal post, got a couple of penalty corners but failed to score any goal.<br><br>
    Pakistan had lost their first match against England on Monday by 6-1. Abdul Hanan Shahid managed to score the solitary goal for Pakistan, while England demonstrated superior strategy and execution.<br><br>
    Pakistan had four penalty corners during the match but could not capitalise on these opportunities. In contrast, England received 12 penalty corners, showcasing their dominance in set-piece situations.<br><br>
    England took an early lead and maintained control throughout the match. They scored two penalty corners, one penalty stroke, and three field goals, showcasing a well-executed game plan.
  `;

  return React.createElement(
    'div',
    { className: 'subcard-container' },
    React.createElement(
      'h2',
      { className: 'subcard-title' },
      'Pakistan will face Malaysia in Olympic qualifying ',
      React.createElement('br'),
      'Hockey match in Oman'
    ),
    React.createElement('img', {
      src: card?.imageUrl || 'Cards_img/1.jpeg',
      alt: 'Cover',
      className: 'subcard-image'
    }),
    React.createElement(
      'p',
      { className: 'subcard-text', dangerouslySetInnerHTML: { __html: textContent } }
    
    ),
    React.createElement(
      'div',
      { className: 'card-row' },
      additionalCards.map((card, index) =>
        React.createElement(Card, { key: index + initialCards.length, card })
      )
    ),
    React.createElement(Footer, { className: 'footer-expanded' })
  );
};

export default SubCard;
