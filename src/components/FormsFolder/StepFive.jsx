import React, { useState } from 'react';

const StepFive = ({ formData, setFormData }) => {
  const [details, setDetails] = useState({
    parking: formData.parking || 0,
    waterContainer: formData.waterContainer || 0,
    tvs: formData.tvs || 0,
    numberOfBathrooms: formData.numberOfBathrooms || 0,
    beds: formData.beds || 0,
    numberOfBeds: formData.numberOfBeds || 0,
    masterBedrooms: formData.masterBedrooms || 0,
    numberOfBedrooms: formData.numberOfBedrooms || 0,
    area: formData.area || 0,
    price: formData.price || 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Check if the value is a valid number
    const parsedValue = !isNaN(value) ? parseInt(value) : 0;
  
    setDetails({ ...details, [name]: parsedValue });
    setFormData({ ...formData, [name]: parsedValue });
    console.log(`${name} is now ${value}`);
  };
  

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[50%] mb-5 rounded-lg shadow-md'>
        <p className='lg:text-2xl md:text-xl sm:text-sm text-white font-semibold mb-3'>Step Five: Additional Details</p>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8'>
          <div>
            <label htmlFor='parking' className='text-white font-semibold md:text-md sm:text-sm'>*Number of Parking Spaces:</label>
            <input
              type='number'
              id='parking'
              name='parking'
              value={details.parking}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div className='md:pt-1'>
            <label htmlFor='waterContainer' className='text-white font-semibold md:text-md sm:text-sm'>*Number of Water Containers:</label>
            <input
              type='number'
              id='waterContainers'
              name='waterContainer'
              value={details.waterContainer}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='tvs' className='text-white font-semibold md:text-md sm:text-sm'>Number of TVs:</label>
            <input
              type='number'
              id='tvs'
              name='tvs'
              value={details.tvs}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='bathrooms' className='text-white font-semibold md:text-md sm:text-sm'>*Number of bathrooms:</label>
            <input
              type='number'
              id='bathrooms'
              name='numberOfBathrooms'
              value={details.numberOfBathrooms}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='beds' className='text-white font-semibold md:text-md sm:text-sm'>*Number of beds:</label>
            <input
              type='number'
              id='beds'
              name='numberOfBeds'
              value={details.numberOfBeds}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='bedrooms' className='text-white font-semibold md:text-md sm:text-sm'>*Number of bedrooms:</label>
            <input
              type='number'
              id='bedrooms'
              name='numberOfBedrooms'
              value={details.numberOfBedrooms}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='masterBedrooms' className='text-white font-semibold md:text-md sm:text-sm'>Number of master bedrooms:</label>
            <input
              type='number'
              id='masterBedrooms'
              name='masterBedrooms'
              value={details.masterBedrooms}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='Area' className='text-white font-semibold md:text-md sm:text-sm'>*Area:</label>
            <input
              type='number'
              id='Area'
              name='area'
              value={details.area}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
          <div>
            <label htmlFor='Price' className='text-white font-semibold md:text-md sm:text-sm'>*Price Per Night:</label>
            <input
              type='number'
              id='price'
              name='price'
              value={details.price}
              onChange={handleInputChange}
              className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
