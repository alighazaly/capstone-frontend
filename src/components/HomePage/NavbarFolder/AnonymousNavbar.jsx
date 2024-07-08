import React from 'react';
import logo from "../../../Assets/images/EasyHousingLogo.png";
import { FaUser } from "react-icons/fa6";
import "../NavbarFolder/NavbarStyle.css";
import { Link } from 'react-router-dom';

const AnonymousNavbar = () => {

  return (
    <div className='flex justify-between items-center border-b'>
        {/* Left */}
        <div className='h-20 flex'>
            <img src={logo} alt='logo' className='object-cover' />
        </div>

        {/* Right */}
        <div className='flex items-center rounded-full px-4 py-1 mr-7 gap-2 shadow-sm shadow-gray-400 bg-[#003740] hover:bg-[#205861] duration-500 ease-out'>
        <Link to="/SignIn"><div className='flex items-center justify-center gap-2 text-[#fff] font-semibold'>
                <p className='border-r cursor-pointer pr-2 border-[#fff]'>Sign in</p>
                <FaUser />
            </div>
        </Link>
        </div>
    </div>
  )
}

export default AnonymousNavbar;
