import React, { useEffect, useState } from 'react';

const UseFriends = () => {
    const[friendsData,setFriendsData]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
     const fetchData=async()=>{
        const res= await fetch('/friends.json');
        const friData=await res.json();
        setTimeout(()=>{

            setFriendsData(friData);
            setLoading(false);
        },2000)

     }
     fetchData();
    },[])
    return {friendsData,loading}
};

export default UseFriends;