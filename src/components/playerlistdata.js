import React from 'react';
import PlayerTable from './PlayerTable';

const Playerlistdata = ({category}) => {
    return(
        <div className='playerlistdata'>
            <div>
                <p className='category_name'>{category.Categorytype}</p>            
            </div>
            <div className='played_table'>
                <PlayerTable table={category.table} ></PlayerTable>
            </div>
        </div>
    )
}
export default Playerlistdata;