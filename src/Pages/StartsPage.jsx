import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendCardContext } from '../Context/FriendCardContext';
import noFoundImg from '../assets/Images/no-data.jpg';

const StartsPage = () => {
    const{call,text,video}=useContext(FriendCardContext);
    const data = [
  { name: 'Call', value: call.length, fill: '#0088FE' },
  { name: 'Text', value: text.length, fill: '#00C49F' },
  { name: 'Video', value: video.length, fill: '#FFBB28' }
  
];
    return (
        <div className='w-8/12 mx-auto'>
        <h1 className='text-3xl my-14 font-bold '>Friendship Analytics</h1>
        {
          call.length==0&&text.length==0&&video.length==0?<div className='text-center space-y-3 bg-base-300 my-10 p-8 rounded-2xl'>
            <h1 className='text-2xl font-bold'>No Friendship Data Yet</h1>
            <img className='h-[20vh] mx-auto' src={noFoundImg} alt="" />
          </div>:<div className='rounded-2xl shadow-2xl  p-10 mb-10'>
                <h1 className='text-gray-400 font-semibold text-xl'>By Interaction Type</h1>
                  <PieChart className='mx-auto ' style={{ width: '100%', maxWidth: '400px', maxHeight: '60vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend />
      <Tooltip/>
    </PieChart>
    
            </div>
        }
            
            
        </div>
    );
};

export default StartsPage;