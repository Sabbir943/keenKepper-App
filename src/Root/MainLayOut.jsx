import React from 'react';
import HomeLayOut from '../Home/HomeLayOut';
import { Outlet } from 'react-router';
import NavBar from '../Component/NavBar/NavBar';
 import { ToastContainer, toast } from 'react-toastify';
const MainLayOut = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
             <ToastContainer />
        </div>
    );
};

export default MainLayOut;