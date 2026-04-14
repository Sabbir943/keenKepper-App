import React from 'react';
import UseFriends from '../../Hook/UseFriends';
import { Link } from 'react-router';
import { GridLoader } from "react-spinners";
import FriendsCard from '../UI/FriendsCard';

const Friends = () => {
    const {friendsData,loading}=UseFriends();
    return (
        <div>
            
            <div className='w-10/12 mx-auto'>
            <h1 className='text-2xl font-bold my-4'>Your Friends</h1>
            {
                loading?<div className='flex justify-center items-center h-[50vh] my-10'><p><GridLoader color='#800080' /></p></div>: <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    friendsData.map((friInfo,idx)=><FriendsCard key={idx} friInfo={friInfo}/>)
                }
            </div>
            }
           
            </div>
        </div>
    );
};

export default Friends;