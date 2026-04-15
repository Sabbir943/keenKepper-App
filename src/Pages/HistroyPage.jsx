import React, { useContext } from 'react';
import callImg from '../assets/Images/call.png'
import videoImg from '../assets/Images/video.png'
import textImg from '../assets/Images/text.png'
import { FriendCardContext } from '../Context/FriendCardContext';
import historyImg from '../assets/Images/NoFound.jpg'
const HistroyPage = () => {
    const{call,text,video}=useContext(FriendCardContext);
    const currentDate=new Date().toLocaleDateString();
    console.log(call.length,'call')
    console.log(text.length,'text')
    console.log(video.length,'video')
    return (
        <div>
           {
            call.length==0&&text.length==0&&video.length==0?<div className='text-center space-y-3 bg-base-300 p-6 rounded-2xl shadow-2xl my-10'>
                <h1 className='text-2xl font-bold'>No contacts yet</h1>
                <img className='h-[30vh] mx-auto my-10' src={historyImg} alt="" />
            </div>: <div>
                {
            call.map(item1=>(
                <div className='flex items-center gap-3 bg-base-100 rounded-2xl shadow-2xl p-6 mb-5'>
                   <img className='h-[5vh]' src={callImg} alt="callImg" />
                   <div>
                    <h1><span className='text-xl font-bold'>call with</span> <span className='text-gray-500'>{item1.name}</span></h1>
                    <p>{currentDate}</p> 
                   </div>
                </div>
            ))
           }
           
           {
            text.map(item2=>(
                <div className=' flex items-center gap-3 bg-base-100 rounded-2xl shadow-2xl p-6 mb-5'>
                   <img className='h-[5vh]' src={textImg} alt="callImg" />
                   <div>
                    <h1><span className='text-xl font-bold'>Text with</span> <span className='text-gray-500'>{item2.name}</span></h1>
                    <p>{currentDate}</p> 
                   </div>
                </div>
            ))
           }
           {
            video.map(item3=>(
                <div className='flex items-center gap-3 bg-base-100 rounded-2xl shadow-2xl p-6 mb-5'>
                   <img className='h-[5vh]' src={videoImg} alt="callImg" />
                   <div>
                    <h1><span className='text-xl font-bold'>Video with</span> <span className='text-gray-500'>{item3.name}</span></h1>
                    <p>{currentDate}</p> 
                   </div>
                </div>
            ))
           }
            </div>
           }
             
        </div>
    );
};

export default HistroyPage;