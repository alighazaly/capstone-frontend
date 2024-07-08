import React, { useState } from 'react';
import mansion from "../../Assets/images/Icons/SilverIcons/mansion-silver.png";
import homeForSale from "../../Assets/images/Icons/SilverIcons/for-sale-silver.png";
import homeForRent from "../../Assets/images/Icons/SilverIcons/rent-silver.png";
import pool from "../../Assets/images/Icons/SilverIcons/swimming-pool-silver.png";
import university from "../../Assets/images/Icons/SilverIcons/university-silver.png";
import cabin from "../../Assets/images/Icons/SilverIcons/cabin-silver.png";
import beds from "../../Assets/images/Icons/SilverIcons/single-bed-silver.png";
import studio from "../../Assets/images/Icons/SilverIcons/studio-silver.png";


const StepTwo = ({ formData, setFormData }) => {
    const [selectedCategory, setSelectedCategory] = useState(formData.category || 'none');

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        // Update the form data with the selected category
        setFormData({
            ...formData,
            category: category,
        });
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[70%] mx-auto h-[50%] rounded-lg flex justify-center items-center">
                <div className='flex flex-col'>
                <p className='lg:text-3xl md:text-2xl sm:text-md font-bold text-center mb-8 text-white'>Which of these best describes your place:</p>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Mansion' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Mansion' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Mansion')}
                    >
                        <img src={mansion} alt='mansion' className='w-5 h-auto' />
                        <span>Mansion</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'HomeForSale' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'HomeForSale' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('HomeForSale')}
                    >
                        <img src={homeForSale} alt='homeForSale' className='w-5 h-auto' />
                        <span>Home For Sale</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'HomeForRent' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'HomeForRent' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('HomeForRent')}
                    >
                        <img src={homeForRent} alt='homeForRent' className='w-5 h-auto' />
                        <span>Home For Rent</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Cabin' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Cabin' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Cabin')}
                    >
                        <img src={cabin} alt='Cabin' className='w-5 h-auto' />
                        <span>Cabin</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Studio' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Studio' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Studio')}
                    >
                        <img src={studio} alt='Studio' className='w-5 h-auto' />
                        <span>Studio</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Foyer' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Foyer' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Foyer')}
                    >
                        <img src={university} alt='Foyer' className='w-5 h-auto' />
                        <span>Foyer</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Beds' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Beds' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Beds')}
                    >
                        <img src={beds} alt='Beds' className='w-5 h-auto' />
                        <span>Beds</span>   
                    </button>
                    <button
                        type="button"
                        className={`px-4 py-2 rounded-md ${selectedCategory === 'Pool' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'} flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 focus:ring-offset-gray-100 ${selectedCategory === 'Pool' ? 'border-2 border-white' : ''}`}
                        onClick={() => handleCategorySelect('Pool')}
                    >
                        <img src={pool} alt='Pool' className='w-5 h-auto' />
                        <span>Pool</span>   
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default StepTwo;
