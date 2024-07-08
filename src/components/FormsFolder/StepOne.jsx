import React from 'react';
import House from "../../Assets/images/HousepicStepOne.png";

const StepOne = () => {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute w-[70%] mx-auto h-[50%] bg-[#c9c9c9] rounded-lg flex justify-start items-center">
        <div className='absolute left-0 ml-10 lg:w-[50%] md:w-[50%] sm:w-[80%]'>
          <div className='flex flex-col items-start'>
            <p className='md:text-[30px] sm:text-[25px] font-bold'>Step 1</p>
            <p className='md:text-[20px] sm:text-[20px] font-semibold'>Tell us about your place:</p>
            <p className='md:text-[20px] sm:text-[15px] font-normal'>In this step, we'll ask you which type of property you have and if guests will book the entire place or just a room. Then let us know the location and how many guests can stay.</p>
          </div>   
        </div> 
        <div className='hidden md:block absolute right-0 w-[50%]'>
          <div className="flex justify-center items-center sm:flex-col">
            <img src={House} alt='house' className='w-[300px] h-auto' />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default StepOne;
