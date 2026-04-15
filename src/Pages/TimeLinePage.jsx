import React, { useContext, useState } from 'react';
import { FriendCardContext } from '../Context/FriendCardContext';
import HistroyPage from './HistroyPage';



const TimeLinePage = () => {
    const [filter, setFilter] = useState('all')
    const [search,setSearch]=useState(' ')
    console.log(filter)

    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-3xl font-bold my-15'>Timeline </h1>
            <div className='mb-10 font-semibold text-xl flex justify-between items-center'>

                <select className='' value={filter} onChange={(e) => setFilter(e.target.value)} defaultValue="Pick a color" className="select">

                    <option value="all" >Filter TimeLine</option>
                    <option value="call">Call</option>
                    <option value="video">Video</option>
                    <option value="text">Text</option>
                </select>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input value={search} onChange={(e)=>setSearch(e.target.value)} type="search" required placeholder="Search by Name" />
                </label>
            </div>
            <HistroyPage filter={filter} search={search} />

        </div>
    );
};

export default TimeLinePage;