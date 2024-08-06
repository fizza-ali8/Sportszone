// src/PlayerTable.js
import React from 'react';
import players from '../Helper/data';
import '../Style/PlayerTable.css';

const PlayerTable = ({table}) => {
  return (
    <table>
      <thead>
        {/* <tr>
        {table[0].map((item)=>(
              <th>{item}</th>
            ))}
        </tr> */}
      </thead>
      <tbody>
        {table.map((player, index) => (
          <tr key={index}>
            {player.map((item)=>(
              <td>{item}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerTable;
