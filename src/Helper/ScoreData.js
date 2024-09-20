import React from 'react';

export const generateRows = () => {
  return [
    // Row 1 with bold text and precise alignment
    React.createElement('div', { key: 1, className: 'row header-row' },
      React.createElement('span', { className: 'header-cell' }, 'Batting'),
      React.createElement('span', { className: 'header-cell' }, 'R'),
      React.createElement('span', { className: 'header-cell' }, 'B'),
      React.createElement('span', { className: 'header-cell' }, 'M'),
      React.createElement('span', { className: 'header-cell' }, '4S'),
      React.createElement('span', { className: 'header-cell' }, '6S'),
      React.createElement('span', { className: 'header-cell' }, 'SR')
    ),
    // Row 2 with player details and stats
    React.createElement('div', { key: 2, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Wessly Madhevere'),
      React.createElement('span', { className: 'stat-cell' }, 'Ibw b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '17'),
      React.createElement('span', { className: 'stat-cell' }, '12'),
      React.createElement('span', { className: 'stat-cell' }, '11'),
      React.createElement('span', { className: 'stat-cell' }, '2'),
      React.createElement('span', { className: 'stat-cell' }, '4'),
      React.createElement('span', { className: 'stat-cell' }, '17.00')
    ),
     // Row 3 with player details and stats
    React.createElement('div', { key: 3, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Milton Shumba'),
      React.createElement('span', { className: 'stat-cell' }, 'c & b Shadab Khan'),
      React.createElement('span', { className: 'stat-cell' }, '1'),
      React.createElement('span', { className: 'stat-cell' }, '14'),
      React.createElement('span', { className: 'stat-cell' }, '16'),
      React.createElement('span', { className: 'stat-cell' }, '12'),
      React.createElement('span', { className: 'stat-cell' }, '14'),
      React.createElement('span', { className: 'stat-cell' }, '19.00')
    ), 
     // Row 4 with player details and stats
    React.createElement('div', { key: 4, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Sean Williams'),
      React.createElement('span', { className: 'stat-cell' }, 'b Shadab Khan'),
      React.createElement('span', { className: 'stat-cell' }, '18'),
      React.createElement('span', { className: 'stat-cell' }, '125'),
      React.createElement('span', { className: 'stat-cell' }, '10'),
      React.createElement('span', { className: 'stat-cell' }, '1'),
      React.createElement('span', { className: 'stat-cell' }, '6'),
      React.createElement('span', { className: 'stat-cell' }, '20.00')
    ),
     // Row 5 with player details and stats
    React.createElement('div', { key: 5, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Sikandar Raza'),
      React.createElement('span', { className: 'stat-cell' }, 'c Haris Rauf b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '11'),
      React.createElement('span', { className: 'stat-cell' }, '15'),
      React.createElement('span', { className: 'stat-cell' }, '10'),
      React.createElement('span', { className: 'stat-cell' }, '6'),
      React.createElement('span', { className: 'stat-cell' }, '8'),
      React.createElement('span', { className: 'stat-cell' }, '21.00')
    ),
     // Row 6 with player details and stats
    React.createElement('div', { key: 6, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Regis Chakabva'),
      React.createElement('span', { className: 'stat-cell' }, 'c Babar Azam b Shadab Khan'),
      React.createElement('span', { className: 'stat-cell' }, '9'),
      React.createElement('span', { className: 'stat-cell' }, '5'),
      React.createElement('span', { className: 'stat-cell' }, '34'),
      React.createElement('span', { className: 'stat-cell' }, '22'),
      React.createElement('span', { className: 'stat-cell' }, '44'),
      React.createElement('span', { className: 'stat-cell' }, '107.00')
    ),
     // Row 7 with player details and stats
    React.createElement('div', { key: 7, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Ryan Burl'),
      React.createElement('span', { className: 'stat-cell' }, 'Ibw b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '171'),
      React.createElement('span', { className: 'stat-cell' }, '112'),
      React.createElement('span', { className: 'stat-cell' }, '111'),
      React.createElement('span', { className: 'stat-cell' }, '12'),
      React.createElement('span', { className: 'stat-cell' }, '14'),
      React.createElement('span', { className: 'stat-cell' }, '23.00')
    ),
     // Row 8 with player details and stats
    React.createElement('div', { key: 8, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Luke Jongwe'),
      React.createElement('span', { className: 'stat-cell' }, 'b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '32'),
      React.createElement('span', { className: 'stat-cell' }, '40'),
      React.createElement('span', { className: 'stat-cell' }, '14'),
      React.createElement('span', { className: 'stat-cell' }, '12'),
      React.createElement('span', { className: 'stat-cell' }, '1'),
      React.createElement('span', { className: 'stat-cell' }, '22.00')
    ),
     // Row 9 with player details and stats
    React.createElement('div', { key: 9, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Brad Evans'),
      React.createElement('span', { className: 'stat-cell' }, 'b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '1'),
      React.createElement('span', { className: 'stat-cell' }, '2'),
      React.createElement('span', { className: 'stat-cell' }, '10'),
      React.createElement('span', { className: 'stat-cell' }, '4'),
      React.createElement('span', { className: 'stat-cell' }, '6'),
      React.createElement('span', { className: 'stat-cell' }, '14.00')
    ),
     // Row 10 with player details and stats
    React.createElement('div', { key: 10, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Richard Ngarava'),
      React.createElement('span', { className: 'stat-cell' }, 'not out'),
      React.createElement('span', { className: 'stat-cell' }, '5'),
      React.createElement('span', { className: 'stat-cell' }, '16'),
      React.createElement('span', { className: 'stat-cell' }, '17'),
      React.createElement('span', { className: 'stat-cell' }, '21'),
      React.createElement('span', { className: 'stat-cell' }, '42'),
      React.createElement('span', { className: 'stat-cell' }, '67.00')
    ),
     // Row 11 with player details and stats
    React.createElement('div', { key: 11, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Wimberg Mad'),
      React.createElement('span', { className: 'stat-cell' }, 'b Mohammad Wasim'),
      React.createElement('span', { className: 'stat-cell' }, '94'),
      React.createElement('span', { className: 'stat-cell' }, '120'),
      React.createElement('span', { className: 'stat-cell' }, '113'),
      React.createElement('span', { className: 'stat-cell' }, '23'),
      React.createElement('span', { className: 'stat-cell' }, '42'),
      React.createElement('span', { className: 'stat-cell' }, '67.00')
    ),
     // Row 12 with player details and stats
    React.createElement('div', { key: 12, className: 'row' },
      React.createElement('span', { className: 'player-name' }, 'Extras'),
      React.createElement('span', { className: 'stat-cell' }, '(lb 8,w 6)'),
      React.createElement('span', { className: 'stat-cell' }, '14'),
      React.createElement('span', { className: 'stat-cell' }, ''),
      React.createElement('span', { className: 'stat-cell' }, ''),
      React.createElement('span', { className: 'stat-cell' }, ''),
      React.createElement('span', { className: 'stat-cell' }, ''),
      React.createElement('span', { className: 'stat-cell' }, '')
    ),
    
    //Second Box Entities


    
   
  ];
};  
  


