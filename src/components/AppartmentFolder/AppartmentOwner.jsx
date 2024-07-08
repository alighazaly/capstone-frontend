import React from 'react';
import { Avatar } from '@mui/material';

const AppartmentOwner = (props) => {
  return (
    <div className='w-[80%] lg:ml-[9rem] md:ml-[2rem] sm:ml-[2rem] bg-[#003740] border-2 border-gray-500 mb-5 py-5 md:rounded-none sm:rounded-md'>
      <div className='flex items-center md:flex-row sm:flex-col md:gap-x-[5rem] sm:gap-x-0 sm:gap-y-[1rem] mx-[5rem]'>
      <Avatar
      src={props.imageSrc} // Use the profile image URL from props
      alt="Profile"
      sx={{ width: 100, height: 100 }} // Style the Avatar size
    >
      {/* Display the first letter of userName if imageSrc is absent */}
      {!props.imageSrc && props.userName && props.userName.charAt(0).toUpperCase()}
    </Avatar>      
    <div className="flex flex-col">
            <p className="text-sm text-white font-bold md:text-start sm:text-center">First Name:</p>
            <p className="text-md font-thin text-white md:text-start sm:text-center">{props.firstName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white font-bold md:text-start sm:text-center">Last Name:</p>
            <p className="text-md font-thin text-white md:text-start sm:text-center">{props.lastName}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-white font-bold md:text-start sm:text-center">Email:</p>
            <p className="text-md font-thin text-white md:text-start sm:text-center">{props.email}</p>
          </div>
      </div>
    </div>
  );
}

export default AppartmentOwner;
