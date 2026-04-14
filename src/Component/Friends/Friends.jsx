import React from 'react';
import UseFriends from '../../Hook/UseFriends';

const Friends = () => {
    const {friendsData,setFriendsData}=UseFriends();
    return (
        <div>
            
            <div className='w-10/12 mx-auto'>
            <h1 className='text-2xl font-bold my-4'>Your Friends</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {
                    friendsData.map((friInfo,idx)=>(
                        <div className=' border-t border-t-gray-400 text-center p-5 rounded-2xl shadow-xl' key={idx}>
                            <img className='rounded-full mx-auto' src={friInfo.picture} alt="" />
                            <h1 className='text-2xl font-bold my-1'>{friInfo.name}</h1>
                            <p className='text-gray-400 font-semibold'>{friInfo.days_since_contact}d ago</p>
                            {
                                friInfo.tags.map(i=><span className='badge badge-success rounded-full font-bold p-3 mr-3 my-2'>{i}</span>)
                            }
                            <br></br>
                            <button className={`${friInfo.status==='overdue'?"bg-orange-300  text-white rounded-full p-1":friInfo.status==='on-track'?"bg-green-500 text-white rounded-full p-1":" bg-red-500 text-white rounded-full p-1"}`}>{friInfo.status}</button>
                          
                        </div>
                    ))
                }
            </div>
            </div>
        </div>
    );
};

export default Friends;