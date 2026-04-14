import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friInfo}) => {
    return (
        
             <Link to={`/home/${friInfo.id}`} className=' border-t border-t-gray-400 text-center p-5 rounded-2xl shadow-xl'>
                            <img className='rounded-full mx-auto' src={friInfo.picture} alt="" />
                            <h1 className='text-2xl font-bold my-1'>{friInfo.name}</h1>
                            <p className='text-gray-400 font-semibold'>{friInfo.days_since_contact}d ago</p>
                            {
                                friInfo.tags.map(i=><span className='badge badge-success rounded-full font-bold p-3 mr-3 my-2'>{i}</span>)
                            }
                            <br></br>
                            <button className={`${friInfo.status==='overdue'?"bg-orange-300  text-white rounded-full p-1":friInfo.status==='on-track'?"bg-green-500 text-white rounded-full p-1":" bg-red-500 text-white rounded-full p-1"}`}>{friInfo.status}</button>
                          
                        </Link>
       
    );
};

export default FriendsCard;