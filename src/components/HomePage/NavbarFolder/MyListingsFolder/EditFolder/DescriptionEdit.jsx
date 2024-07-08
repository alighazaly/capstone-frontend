import React, { useState } from 'react';

const DescriptionEdit = ({ formData, setFormData }) => {
    const [description, setDescription] = useState(formData.description);

    // Function to debounce the update of formData
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    };

    // Debounced function to update formData
    const debouncedUpdateFormData = debounce((value) => {
        setFormData({ ...formData, description: value });
    }, 500); // Adjust the delay time as needed

    const handleChange = (e) => {
        const { value } = e.target;
        setDescription(value);
        debouncedUpdateFormData(value);
    };

    return (
        <div className="min-h-screen relative">
            <div className="max-w-md w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-8 bg-opacity-90  p-8 rounded-md shadow-md">
                <div>
                    <h2 className="lg:text-2xl md:text-xl sm:text-md max-h-full font-bold text-white mb-6">*Describe Your Apartment:</h2>
                    <div>
                        <textarea
                            id="description"
                            value={description}
                            onChange={handleChange}
                            className="mt-1 resize-y block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm h-40" // Adjust height and width here
                            placeholder="Enter a brief description of your apartment"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DescriptionEdit;
