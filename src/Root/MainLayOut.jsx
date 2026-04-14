import React from 'react';
import HomeLayOut from '../Home/HomeLayOut';
import { Outlet } from 'react-router';
import NavBar from '../Component/NavBar/NavBar';

const MainLayOut = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;