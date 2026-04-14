import React, { useState } from 'react';
import { FriendCardContext } from './FriendCardContext';


const FriendCardProvider = ({children}) => {
    const[call,setCall]=useState([]);
    const[text,setText]=useState([])
    const[video,setVideo]=useState([])
    
    const data={
        call,setCall,text,setText,video,setVideo
    }
   
    return (
        <FriendCardContext.Provider value={data}>{children}</FriendCardContext.Provider>
    );
};

export default FriendCardProvider;