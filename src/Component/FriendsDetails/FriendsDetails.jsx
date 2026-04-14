import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseFriends from '../../Hook/UseFriends';
import { GridLoader } from "react-spinners";
import { BiAlarm } from "react-icons/bi";
import { FaArchive } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoMdText } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { FriendCardContext } from '../../Context/FriendCardContext';
import { toast } from 'react-toastify';

const FriendsDetails = () => {
    const { friendsData, loading } = UseFriends();
    const { id } = useParams();
    const{call,setCall,text,setText,video,setVideo}=useContext(FriendCardContext);
    const expectedCard = friendsData.find(i => i.id === Number(id));
    const handleCallHistroy=()=>{
       setCall([...call,expectedCard]);
       toast.success(`Call with ${expectedCard.name}`)
    }
    const handleTextHistroy=()=>{
       setText([...text,expectedCard]);
        toast.success(`Text with ${expectedCard.name}`)
    }
    const handleVideoHistroy=()=>{
       setVideo([...video,expectedCard]);
        toast.success(`Video call with ${expectedCard.name}`)
    }

    if (loading) {
        return (

            <div className='flex justify-center items-center h-[50vh] my-10'><p><GridLoader color='#800080' /></p></div>
        )
    }
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className='grid grid-cols-2'>

                <div className='left-side  w-3/4 '>

                    <div className='rounded-2xl text-center shadow-2xl mb-6 p-5'>
                        <img className='rounded-full mx-auto' src={expectedCard.picture} alt="" />
                        <h1 className='text-2xl font-bold'>{expectedCard.name}</h1>
                        <button className={`${expectedCard.status === 'overdue' ? "bg-orange-300  text-white rounded-xl p-2" : expectedCard.status === 'on-track' ? "bg-green-500 text-white rounded-xl p-2" : " bg-red-500 text-white rounded-xl p-2"}`}>{expectedCard.status}</button>
                        <br />
                        {
                            expectedCard.tags.map(i => <span className='badge badge-success rounded-full font-bold p-3 mr-3 my-2'>{i}</span>)
                        }

                        <p className='text-gray-500 font-semibold'>{expectedCard.bio}</p>
                        <p className='text-gray-500 font-semibold'>{expectedCard.email}</p>
                    </div>
                    <div className='space-y-4'>
                        <div className=' p-3 rounded-2xl shadow-2xl border-t border-t-gray-300 '>
                            <p className=' font-bold flex justify-center items-center gap-2 text-center'><BiAlarm className='text-xl' /> Snooze 2 weeks</p>
                        </div>
                        <div className=' p-3 rounded-2xl shadow-2xl border-t border-t-gray-300'>
                            <p className=' flex justify-center items-center font-bold gap-2'><FaArchive className='text-xl' />Archive</p>
                        </div>
                        <div className=' p-3 rounded-2xl shadow-2xl border-t border-t-gray-300'>
                            <p className='flex justify-center items-center text-red-500 font-bold gap-2'><MdDelete className='text-xl' />Delete</p>
                        </div>
                    </div>


                </div>
                <div className='right-side '>

                    <div className='flex gap-5 mb-10'>
                        <div className='rounded-2xl shadow-2xl p-6 text-center' >
                            <p className='text-2xl font-bold'>{expectedCard.days_since_contact}</p>
                            <p className='text-gray-400'>Days Since Contact</p>
                        </div>
                        <div className=' rounded-2xl shadow-2xl p-6 text-center'>
                            <p className='text-2xl font-bold'>{expectedCard.goal}</p>
                            <p className='text-gray-400'>Goal (Days)</p>
                        </div>

                        <div className='rounded-2xl shadow-2xl p-6 text-center'>
                            <p className='text-2xl font-bold'>{expectedCard.next_due_date}</p>
                            <p className='text-gray-400'>Next Due</p>
                        </div>
                    </div>

                    <div className='flex justify-between items-center rounded-2xl shadow-2xl p-6 mb-10'>
                        <div className='space-y-3'>
                            <h1 className='font-bold'>RelationShip Goal</h1>
                            <p>Connect Every <span className='font-bold'>30 days</span></p>
                        </div>

                        <div>
                            <button className='btn '>Edit</button>
                        </div>
                    </div>

                    <div  className='rounded-2xl shadow-2xl p-6'>
                        <h1 className='text-gray-600 mb-5'>Quick Check-In</h1>
                        <div className='grid grid-cols-3 gap-5 justify-between items-center'>

                            <div onClick={handleCallHistroy} className='  bg-base-300 rounded-2xl text-center p-5 cursor-pointer'>
                                <p className='text-3xl flex flex-col items-center '><IoMdCall className='text-center' /></p>
                                <p>Call</p>

                            </div>
                            <div onClick={handleTextHistroy} className='bg-base-300 rounded-2xl text-center p-5 cursor-pointer'>
                                <p className='text-3xl flex flex-col items-center'><IoMdText /></p>
                                <p>Text</p>
                            </div>
                            <div onClick={handleVideoHistroy} className='bg-base-300 rounded-2xl text-center p-5 cursor-pointer'>
                                <p className='text-3xl flex flex-col items-center'><FaVideo /></p>
                                <p>Video</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default FriendsDetails;