import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo from "../../../Assets/images/EasyHousingLogo.png";

const Footer = () => {
  return (
    <div className='bg-[#003740]'>
      <div className='flex justify-center items-center py-6'>
        <div className='h-0.5 w-[25rem] bg-gray-500'></div>
        <div className='flex items-center space-x-8'>
          <FaYoutube className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <FaLinkedin className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <FaFacebook className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <BiLogoGmail className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <FaXTwitter className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <FaPinterest className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>  
          <FaInstagram className='text-gray-300 text-lg' style={{ margin: '0 8px' }}/>          
        </div>
        <div className='h-0.5 w-[25em] bg-gray-500'></div>
      </div>
      <div className="flex justify-center align-middle">
        <img src={logo} alt='logo' className="w-40 h-auto" />
      </div>
      <div className="text-gray-300 text-center pb-3">Copyright © 2024 All rights reserved</div>
      <div className='flex lg:flex-row md:flex-row sm:flex-col justify-center items-center gap-4 text-gray-400 lg:mb-0 lg:pb-2 md:mb-0 md:pb-2 sm:pb-10 sm:mb-10'>
        <p className="lg:border-r-2 lg:border-b-0 md:border-r-2 md:border-b-0 border-gray-400 pr-3">About Us</p>
        <p className="lg:border-r-2 lg:border-b-0 md:border-r-2 md:border-b-0 border-gray-400 pr-3">Security</p>
        <p className="lg:border-r-2 lg:border-b-0 md:border-r-2 md:border-b-0 border-gray-400 pr-3">Privacy</p>
        <p className="lg:border-r-2 lg:border-b-0 md:border-r-2 md:border-b-0 border-gray-400 pr-3">Policies</p>
        <p className="lg:border-r-2 lg:border-b-0 md:border-r-2 md:border-b-0 border-gray-400 pr-3">Contact Us</p>
        <p>Credits</p>
      </div>

    </div>
  );
};

export default Footer;
