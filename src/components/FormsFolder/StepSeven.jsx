import React, { useState } from 'react';

const StepSeven = ({ formData, setFormData }) => {
  const [country, setCountry] = useState(formData.country || '');
  const [streetAddress, setStreetAddress] = useState('');
  const [aptFloorBldg, setAptFloorBldg] = useState('');
  const [city, setCity] = useState(formData.city || '');

  // Update the form data state when inputs change
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    setter(value);
    setFormData({ ...formData, [e.target.name]: value });
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='flex justify-center items-center flex-col gap-y-4 md:w-[50%] sm:w-[50%] shadow-lg'>
        <p className='lg:text-2xl md:text-xl sm:text-md text-white font-semibold mb-5'>Confirm your address:</p>
        <input
          type='text'
          name='country'
          placeholder='*Country/Region'
          value={country}
          onChange={(e) => handleInputChange(e, setCountry)}
          className='block w-full bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        />
        <input
          type='text'
          name='streetAddress'
          placeholder='*Street address'
          value={streetAddress}
          onChange={(e) => handleInputChange(e, setStreetAddress)}
          className='block w-full bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        />
        <input
          type='text'
          name='aptFloorBldg'
          placeholder='*Apt, floor, bldg (if applicable)'
          value={aptFloorBldg}
          onChange={(e) => handleInputChange(e, setAptFloorBldg)}
          className='block w-full bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        />
        <input
          type='text'
          name='city'
          placeholder='*City'
          value={city}
          onChange={(e) => handleInputChange(e, setCity)}
          className='block w-full bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        />
      </div>
    </div>
  );
};

export default StepSeven;
