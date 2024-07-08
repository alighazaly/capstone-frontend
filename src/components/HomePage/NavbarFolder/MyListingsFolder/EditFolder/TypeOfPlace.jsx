import React from 'react';
import { useState,useEffect } from 'react';
import wholePlaceIcon from "../../../../../Assets/images/Icons/SilverIcons/house-silver.png"
import SharedRoomIcon from "../../../../../Assets/images/Icons/SilverIcons/room-mate-silver.png"
import PrivateRoom from "../../../../../Assets/images/Icons/SilverIcons/room-silver.png";

export const TypeOfPlace = ({ formData, setFormData }) => {
  const [selectedType, setSelectedType] = useState(formData.typeOfPlace || null);

  useEffect(() => {
      // Update formData with the initial value of selectedType
      setFormData({ ...formData, typeOfPlace: selectedType });
  }, []); // Empty dependency array to run this effect only once on component mount

  const handleSelectType = (type) => {
    setSelectedType(type);
    // Update formData when a type is selected
    setFormData({ ...formData, typeOfPlace: type });
  };

  console.log("formData",formData);
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col w-[50%] md:w-[70%] sm:mb-[3rem] md:mb-0'>
          <p className='text-center lg:text-2xl md:text-md sm:text-sm text-white font-semibold md:mb-4'>*What type of place will guests have?</p>
          <div className='w-full rounded-lg'>
            {/* Whole place option */}
            <div
              className={`bg-red w-full pl-9 px-4 py-2 my-3 rounded-md cursor-pointer flex items-center justify-between ${selectedType === 'Whole Place' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSelectType('Whole Place')}
            >
              {/* Text for whole place */}
              <div className='flex flex-col w-[70%]'>
                <p className='text-md font-semibold'>An entire place</p>
                <p className='text-sm font-light text-gray-500'>Guests have the whole place to themselves</p>
              </div>
              {/* Icon for whole place */}
              <div className='w-20 flex justify-center items-center'>
                <img src={wholePlaceIcon} alt='whole place' className='w-10 h-auto' />
              </div>
            </div>
            {/* Shared room option */}
            <div
              className={`bg-red w-full pl-9 px-4 py-2 my-3 rounded-md cursor-pointer flex items-center justify-between ${selectedType === 'Shared Room' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSelectType('Shared Room')}
            >
              {/* Text for shared room */}
              <div className='flex flex-col w-[70%]'>
                <p className='text-md font-semibold'>Shared room</p>
                <p className='text-sm font-light text-gray-500'>Guests share a room with others</p>
              </div>
              {/* Icon for shared room */}
              <div className='w-20 flex justify-center items-center'>
                <img src={SharedRoomIcon} alt='shared room' className='w-10 h-auto' />
              </div>
            </div>
            {/* Room option */}
            <div
              className={`bg-red w-full pl-9 px-4 py-2 my-3 rounded-md cursor-pointer flex items-center justify-between ${selectedType === 'Private Room' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
              onClick={() => handleSelectType('Private Room')}
            >
              {/* Text for room */}
              <div className='flex flex-col w-[70%]'>
                <p className='text-md font-semibold'>Private room</p>
                <p className='text-sm font-light text-gray-500'>Guests have a private room</p>
              </div>
              {/* Icon for room */}
              <div className='w-20 flex justify-center items-center'>
                <img src={PrivateRoom} alt='room' className='w-10 h-auto' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
