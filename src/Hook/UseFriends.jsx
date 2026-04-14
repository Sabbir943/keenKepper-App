import React, { useEffect, useState } from 'react';

const UseFriends = () => {
    const[friendsData,setFriendsData]=useState([]);
    useEffect(()=>{
     const fetchData=async()=>{
        const res= await fetch('/friends.json');
        const friData=await res.json();
        setFriendsData(friData);

     }
     fetchData();
    },[])
    return {friendsData,setFriendsData}
};

export default UseFriends;