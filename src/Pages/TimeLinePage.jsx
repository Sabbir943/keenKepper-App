import React, { useContext } from 'react';
import { FriendCardContext } from '../Context/FriendCardContext';
import HistroyPage from './HistroyPage';



const TimeLinePage = () => {
  
    
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold my-15'>Timeline </h1>
              <HistroyPage/>
         
        </div>
    );
};

export default TimeLinePage;