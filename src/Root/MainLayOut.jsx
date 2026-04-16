import React from 'react';
import HomeLayOut from '../Home/HomeLayOut';
import { Outlet } from 'react-router';
import NavBar from '../Component/NavBar/NavBar';
 import { ToastContainer, toast } from 'react-toastify';
import Footer from '../Component/Footer/Footer';
const MainLayOut = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
             <ToastContainer position="top-center" />
        </div>
    );
};

export default MainLayOut;