import React, {useState,useEffect} from 'react';
import wifi from "../../../../../Assets/images/Icons/wifi-silver.png";
import kitchen from "../../../../../Assets/images/Icons/SilverIcons/kitchen-silver.png";
import hotTub from "../../../../../Assets/images/Icons/SilverIcons/jacuzzi-silver.png";
import cigarette from "../../../../../Assets/images/Icons/SilverIcons/smoking-silver.png";
import ac from "../../../../../Assets/images/Icons/SilverIcons/air-conditioner-silver.png";
import firePlace from "../../../../../Assets/images/Icons/SilverIcons/fireplace-silver.png";
import workSpace from "../../../../../Assets/images/Icons/SilverIcons/workspace-silver.png";
import garden from "../../../../../Assets/images/Icons/SilverIcons/garden-silver.png";
import generator from "../../../../../Assets/images/Icons/SilverIcons/generator-silver.png";
import elevator from "../../../../../Assets/images/Icons/SilverIcons/elevator-silver.png";
import gym from "../../../../../Assets/images/Icons/SilverIcons/treadmill-silver.png";
import guard from "../../../../../Assets/images/Icons/SilverIcons/generator-silver.png";
import bbqGrill from "../../../../../Assets/images/Icons/SilverIcons/barbecue-silver.png";
import pool from "../../../../../Assets/images/Icons/SilverIcons/swimming-pool-silver.png";


const Essentiels = ({ formData, setFormData }) => {
    const initialButtonStates = {
        wifi: formData.wifi === 'yes' ? 'yes' : 'no',
        kitchen: formData.kitchen === 'yes' ? 'yes' : 'no',
        pool: formData.pool === 'yes' ? 'yes' : 'no',
        hotTub: formData.hotTube === 'yes' ? 'yes' : 'no',
        cigarette: formData.smokingAllowed === 'yes' ? 'yes' : 'no',
        ac: formData.airConditionner === 'yes' ? 'yes' : 'no',
        firePlace: formData.indoorFirePlace === 'yes' ? 'yes' : 'no',
        workSpace: formData.workSpace === 'yes' ? 'yes' : 'no',
        garden: formData.garden === 'yes' ? 'yes' : 'no',
        generator: formData.generator === 'yes' ? 'yes' : 'no',
        elevator: formData.elevator === 'yes' ? 'yes' : 'no',
        gym: formData.gym === 'yes' ? 'yes' : 'no',
        bbqGrill: formData.bbqGrill === 'yes' ? 'yes' : 'no',
        guard: formData.guard === 'yes' ? 'yes' : 'no'
    };
    
    useEffect(() => {
        setFormData(formData => ({
          ...formData,
          wifi: initialButtonStates.wifi,
          kitchen: initialButtonStates.kitchen,
          pool: initialButtonStates.pool,
          hotTub: initialButtonStates.hotTub,
          cigarette: initialButtonStates.cigarette,
          ac: initialButtonStates.ac,
          firePlace: initialButtonStates.firePlace,
          workSpace: initialButtonStates.workSpace,
          garden: initialButtonStates.garden,
          generator: initialButtonStates.generator,
          elevator: initialButtonStates.elevator,
          gym: initialButtonStates.gym,
          bbqGrill: initialButtonStates.bbqGrill,
          guard: initialButtonStates.guard
        }));
      }, []);    
    
    console.log("FormData:",formData);
      const [buttonStates, setButtonStates] = useState(initialButtonStates);
    
      const handleClick = (buttonName) => {
        const newButtonStates = {
          ...buttonStates,
          [buttonName]: buttonStates[buttonName] === 'yes' ? 'no' : 'yes',
        };
        setButtonStates(newButtonStates);
    
        // Update the form data with the new button states
        setFormData({
          ...formData,
          [buttonName]: newButtonStates[buttonName],
        });
    
        // Log the updated state
        console.log('Button States:', newButtonStates);
      };

      return (
        <div className='flex items-center justify-center h-screen'>
            <div className='w-[70%] mx-auto h-[50%] rounded-lg flex justify-center items-center'>
                <div className='flex flex-col'>
                    <p className='lg:text-3xl md:text-2xl sm:text-md font-bold text-center mb-8 text-white'>Essentials Offered:</p>
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
                            <span>kitchen</span>
                        </button>
                        <button
    type="button"
    className={`px-4 py-2 rounded-md ${buttonStates.hotTub === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.hotTub === 'yes' ? 'border-2 border-white' : ''}`}
    onClick={() => handleClick('hotTub')}
>
    <img src={hotTub} alt='hotTub' className='w-5 h-auto' />
    <span>Hot Tub</span>
</button>
<button
    type="button"
    className={`px-4 py-2 rounded-md ${buttonStates.cigarette === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.cigarette === 'yes' ? 'border-2 border-white' : ''}`}
    onClick={() => handleClick('cigarette')}
>
    <img src={cigarette} alt='cigarette' className='w-5 h-auto' />
    <span>Smoking Allowed</span>
</button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.ac === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.ac === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('ac')}
                        >
                            <img src={ac} alt='ac' className='w-5 h-auto' />
                            <span>AC</span>
                        </button>
                        <button
    type="button"
    className={`px-4 py-2 rounded-md ${buttonStates.firePlace === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.firePlace === 'yes' ? 'border-2 border-white' : ''}`}
    onClick={() => handleClick('firePlace')}
>
    <img src={firePlace} alt='firePlace' className='w-5 h-auto' />
    <span>Fireplace</span>
</button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.workSpace === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.workSpace === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('workSpace')}
                        >
                            <img src={workSpace} alt='workSpace' className='w-5 h-auto' />
                            <span>Work Space</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.generator === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.generator === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('generator')}
                        >
                            <img src={generator} alt='generator' className='w-5 h-auto' />
                            <span>generator</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.elevator === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.elevator === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('elevator')}
                        >
                            <img src={elevator} alt='elevator' className='w-5 h-auto' />
                            <span>elevator</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.gym === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.gym === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('gym')}
                        >
                            <img src={gym} alt='gym' className='w-5 h-auto' />
                            <span>gym</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.guard === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.guard === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('guard')}
                        >
                            <img src={guard} alt='guard' className='w-5 h-auto' />
                            <span>guard</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.bbqGrill === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.bbqGrill === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('bbqGrill')}
                        >
                            <img src={bbqGrill} alt='bbqGrill' className='w-5 h-auto' />
                            <span>bbqGrill</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.garden === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.garden === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('garden')}
                        >
                            <img src={garden} alt='garden' className='w-5 h-auto' />
                            <span>garden</span>
                        </button>
                        <button
                            type="button"
                            className={`px-4 py-2 rounded-md ${buttonStates.pool === 'yes' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${buttonStates.pool === 'yes' ? 'border-2 border-white' : ''}`}
                            onClick={() => handleClick('pool')}
                        >
                            <img src={pool} alt='pool' className='w-5 h-auto' />
                            <span>pool</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Essentiels