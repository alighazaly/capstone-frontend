import React, { useState } from 'react';

const StepTen = ({ formData, setFormData }) => {
   const [description, setDescription] = useState(formData.description || '');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setFormData({ ...formData, description: e.target.value });
  };
  return (
    <div className='flex items-center justify-center h-screen'>
    <div className='flex flex-col w-[50%] mb-5 rounded-lg shadow-md'>
      <p className='lg:text-2xl md:text-xl sm:text-md text-white font-semibold'>*Add your description</p>
      <p className='text-black font-light md:text-md sm:text-sm'>Share what makes your place special.</p>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className='w-full h-40 p-2 mt-4 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500'
        placeholder='Enter a description...'
        required
      />
    </div>
  </div>  )
}

export default StepTen;