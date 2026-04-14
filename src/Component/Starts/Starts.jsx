import React from 'react';

const Starts = () => {
    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-4 w-10/12 mx-auto gap-8 p-5'>
                <div className='p-3 rounded-2xl shadow-xl border-t border-t-gray-200 flex flex-col justify-center text-center  '>
                    <p className='text-2xl font-bold'>10</p>
                    <p className='text-gray-400'>Total Friends</p>
                </div>
                <div className='py-10 rounded-2xl shadow-xl  flex flex-col justify-center text-center border-t border-t-gray-200'>
                    <p className='text-2xl font-bold'>3</p>
                    <p className='text-gray-400'>On Track</p>
                </div>
                <div className='p-3 rounded-2xl shadow-xl flex flex-col justify-center text-center border-t border-t-gray-200'>
                    <p className='text-2xl font-bold'>6</p>
                    <p className='text-gray-400'>Need attention</p>
                </div>
                <div className='p-3 rounded-2xl shadow-xl  flex flex-col justify-center text-center border-t border-t-gray-200'>
                    <p className='text-2xl font-bold'>12</p>
                    <p className='text-gray-400'>Interactions This Month</p>
                </div>
            </div> 
        </div>
    );
};

export default Starts;