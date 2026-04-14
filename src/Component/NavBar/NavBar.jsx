import React from 'react';

import { NavLink } from 'react-router';
import { IoHome } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TbTimeline } from "react-icons/tb";

const NavBar = () => {
    const myLink=<>
     <li><NavLink to="/" className={({isActive})=>(
        isActive?"bg-green-800 text-white":""
      )}><IoHome /> Home</NavLink></li>
      <li><NavLink to="timeLine" className={({isActive})=>(
        isActive?"bg-green-800 text-white":""
      )}><RiTimeLine /> TimeLine</NavLink></li>
      <li><NavLink to='starts' className={({isActive})=>(
        isActive?"bg-green-800 text-white":""
      )}><TbTimeline />Starts</NavLink></li>
    </>
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar w-11/12 mx-auto ">
  <div className="flex-1">
    <p className='text-2xl font-bold'>Keen<span className='text-green-800'>Kepper</span></p>
  </div>
            <div className="hidden md:flex ">
    <ul className="menu menu-horizontal px-1 gap-3 font-bold">
     
     {myLink}
    </ul>
  </div>
  
         <div className="navbar-end  md:hidden ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden mr-5 p-8 border">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
       {myLink}
      </ul>
    </div>
    
  </div>
</div>

        </div>
    );
};

export default NavBar;