import React, { useState } from 'react';

const StepNine = ({ formData, setFormData }) => {
  const [title, setTitle] = useState(formData.title || '');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setFormData({ ...formData, title: e.target.value });
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col w-[50%] mb-5 rounded-lg shadow-md'>
        <p className='lg:text-2xl md:text-xl sm:text-md text-white font-semibold'>*Now, let's give your property a title</p>
        <p className='text-black font-light md:text-md sm:text-sm'>Short titles work best. Have fun with it—you can always change it later.</p>
        <textarea
          value={title}
          onChange={handleTitleChange}
          className='w-full h-40 p-2 mt-4 bg-gray-200 border border-gray-300 rounded focus:outline-none focus:bg-white focus:border-gray-500'
          placeholder='Enter a title...'
          required
        />
      </div>
    </div>
  );
};

export default StepNine;
