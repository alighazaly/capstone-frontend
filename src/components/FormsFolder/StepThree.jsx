import React from 'react';
import wifi from "../../Assets/images/Icons/wifi-silver.png";
import kitchen from "../../Assets/images/Icons/SilverIcons/kitchen-silver.png";
import pool from "../../Assets/images/Icons/SilverIcons/swimming-pool-silver.png";
import hotTub from "../../Assets/images/Icons/SilverIcons/jacuzzi-silver.png";
import cigarette from "../../Assets/images/Icons/SilverIcons/smoking-silver.png";
import ac from "../../Assets/images/Icons/SilverIcons/air-conditioner-silver.png";
import firePlace from "../../Assets/images/Icons/SilverIcons/fireplace-silver.png";
import workSpace from "../../Assets/images/Icons/SilverIcons/workspace-silver.png";
import garden from "../../Assets/images/Icons/SilverIcons/garden-silver.png";
import generator from "../../Assets/images/Icons/SilverIcons/generator-silver.png";
import elevator from "../../Assets/images/Icons/SilverIcons/elevator-silver.png";
import gym from "../../Assets/images/Icons/SilverIcons/treadmill-silver.png";
import bbqGrill from "../../Assets/images/Icons/SilverIcons/barbecue-silver.png";
import guard from "../../Assets/images/Icons/SilverIcons/guard-silver.png";
import { useState } from 'react';

const StepTwo = ({ formData, setFormData }) => {
    const [buttonStates, setButtonStates] = useState({
        wifi: formData.wifi || 'no',
        kitchen: formData.kitchen || 'no',
        pool: formData.pool || 'no',
        hotTub: formData.hotTub || 'no',
        ac: formData.ac || 'no',
        firePlace: formData.firePlace || 'no',
        workSpace: formData.workSpace || 'no',
        garden: formData.garden || 'no',
        generator: formData.generator || 'no',
        elevator: formData.elevator || 'no',
        gym: formData.gym || 'no',
        bbqGrill: formData.bbqGrill || 'no',
        guard: formData.guard || 'no',
        smockingAllowed: formData.smockingAllowed || 'no'
        
      });
    
      const handleClick = (buttonName) => {
        const newButtonStates = {
          ...buttonStates,
          [buttonName]: buttonStates[buttonName] === 'yes' ? 'no' : 'yes',
        };
        setButtonStates(newButtonStates);
        
        // Update the form data with the new button states
        setFormData({
          ...formData,
          ...newButtonStates,
        });
      
        // Log the updated state
        console.log('Button States:', newButtonStates);
      };
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='w-[70%] mx-auto h-[50%] rounded-lg flex justify-center items-center'>
            <div className='flex flex-col'>
                <p className='lg:text-3xl md:text-2xl sm:text-md font-bold text-center mb-8 text-white'>What does your Place Offer:</p>
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 lg:mb-0 md:mb-0 sm:mb-[5rem]">
              <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.wifi === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.wifi === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('wifi')}
                >
                    <img src={wifi} alt='wifi' className='w-5 h-auto' />
                    <span>Wifi</span>
                </button>


                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.kitchen === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.kitchen === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('kitchen')}
                >
                    <img src={kitchen} alt='kitchen' className='w-5 h-auto' />
                    <span>Kitchen</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.pool === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.pool === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('pool')}
                >
                    <img src={pool} alt='pool' className='w-5 h-auto' />
                    <span>Pool</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.hotTub === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.hotTub === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('hotTub')}
                >
                    <img src={hotTub} alt='hotTub' className='w-5 h-auto' />
                    <span>HotTub</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.smockingAllowed === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.smockingAllowed === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('smockingAllowed')}
                >
                    <img src={cigarette} alt='smockingAllowed' className='w-5 h-auto' />
                    <span>Allowed smoking</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.ac === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.ac === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('ac')}
                >
                    <img src={ac} alt='ac' className='w-5 h-auto' />
                    <span>Ac</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.firePlace === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.firePlace === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('firePlace')}
                >
                    <img src={firePlace} alt='firePlace' className='w-5 h-auto' />
                    <span>FirePlace</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.workSpace === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.workSpace === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('workSpace')}
                >
                    <img src={workSpace} alt='workSpace' className='w-5 h-auto' />
                    <span>WorkSpace</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.garden === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.garden === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('garden')}
                >
                    <img src={garden} alt='garden' className='w-5 h-auto' />
                    <span>Garden</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.generator === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.generator === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('generator')}
                >
                    <img src={generator} alt='generator' className='w-5 h-auto' />
                    <span>Generator</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.elevator === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.elevator === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('elevator')}
                >
                    <img src={elevator} alt='elevator' className='w-5 h-auto' />
                    <span>Elevator</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.gym === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.gym === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('gym')}
                >
                    <img src={gym} alt='gym' className='w-5 h-auto' />
                    <span>Gym</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.bbqGrill === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.bbqGrill === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('bbqGrill')}
                >
                    <img src={bbqGrill} alt='bbqGrill' className='w-5 h-auto' />
                    <span>BbqGrill</span>
                </button>
                <button
                    type="button"
                    className={`px-4 py-2 rounded-md ${buttonStates.guard === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.guard === 'yes' ? 'border-2 border-white' : ''}`}
                    onClick={() => handleClick('guard')}
                >
                    <img src={guard} alt='guard' className='w-5 h-auto' />
                    <span>Guard</span>
                </button>
              </div>
            </div>
        </div>
    </div>
  );
};

export default StepTwo;
