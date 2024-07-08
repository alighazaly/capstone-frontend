import React, { useState,useEffect } from 'react';

const Offerings = ({ formData, setFormData }) => {
  const [details, setDetails] = useState({
    NumberOfBedrooms: formData.numberOfBedrooms,
    NumberOfBathrooms: formData.numberOfBathrooms,
    NumberOfBeds: formData.numberOfBeds,
    Area: formData.area,
    MasterBedrooms: formData.masterBedrooms,
    WaterContainers: formData.waterContainers,
    Tvs: formData.tvs,
    Parking: formData.parking,
    Price: formData.price
  });

  useEffect(() => {
    // Set only the relevant part of formData based on the field being changed
    setFormData((prevFormData) => ({
      ...prevFormData,
      WaterContainers: details.WaterContainers,
      NumberOfBedrooms: details.NumberOfBedrooms,
      NumberOfBathrooms:details.NumberOfBathrooms,
      NumberOfBeds: details.NumberOfBeds,
      Area: details.Area,
      MasterBedrooms: details.MasterBedrooms,
      Tvs: details.Tvs,
      Parking: details.Parking,
      Price: details.Price
    }));
  }, [details]);

  console.log("FormData:",formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[50%] mb-5 rounded-lg shadow-md'>
        <p className='lg:text-2xl md:text-xl sm:text-sm text-white font-semibold mb-3'>Step Five: Additional Details</p>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 mb-8'>
          {Object.entries(details).map(([key, value]) => (
            <div key={key}>
              <label htmlFor={key} className='text-white font-semibold md:text-md sm:text-sm'>{`Number of ${key}:`}</label>
              <input
                type='number'
                id={key}
                name={key}
                value={value}
                onChange={handleInputChange}
                className='block w-full md:w-60 bg-gray-200 border border-gray-300 rounded md:py-2 sm:py-0 px-3 text-gray-800 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                required
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
