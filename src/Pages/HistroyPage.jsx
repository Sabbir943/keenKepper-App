import React, { useContext } from 'react';
import callImg from '../assets/Images/call.png'
import videoImg from '../assets/Images/video.png'
import textImg from '../assets/Images/text.png'
import { FriendCardContext } from '../Context/FriendCardContext';
const HistroyPage = () => {
    const{call,text,video}=useContext(FriendCardContext);
    const currentDate=new Date().toLocaleDateString();
    return (
        <div>
              <div>
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
        </div>
    );
};

export default HistroyPage;