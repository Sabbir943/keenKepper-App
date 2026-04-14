import React from 'react';
import { FaPlus } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='text-center my-10 space-y-4 w-6/12 mx-auto'>
            <h1 className='text-3xl md:text-4xl font-bold'>Friends to keep close in your life</h1>
            <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
     <button className='btn bg-green-700 text-white font-bold'><FaPlus />Add a Friend</button>
        </div>
    );
};

export default Banner;