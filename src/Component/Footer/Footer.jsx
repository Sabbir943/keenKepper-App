import React from 'react';
import footerImg from '../../assets/Images/logo-xl.png';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div className='bg-green-900 text-center space-y-3 pt-14 pb-10'>
            <img className='mx-auto w-[40vh]' src={footerImg} alt="footerImg" />
            <p className='text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
            <p className='text-gray-200 text-xl font-bold'>Social Links</p>
            <ul className='text-white flex justify-center items-center text-2xl gap-5'>
               <li ><a href=""><FaInstagram /></a></li>
               <li><a href=""><FaFacebookSquare /></a></li>
               <li><a href=""><FaXTwitter /></a></li>
            </ul>
            <hr className='text-gray-300 mt-6'></hr>
            <div className='w-8/12 mx-auto flex justify-between items-center text-white'>

            <div>
                © 2026 KeenKeeper. All rights reserved.
            </div>

            <div>
                <ul className='flex justify-between gap-8 items-center'>
                    <li><a href="/">Privacy Policy</a></li>
                    <li><a href="/">  Terms of Service   </a></li>
                    <li><a href="/">  Cookies   </a></li>
                </ul>
            </div>

            </div>
        </div>
    );
};

export default Footer;