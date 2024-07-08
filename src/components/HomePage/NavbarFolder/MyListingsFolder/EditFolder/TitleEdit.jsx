import React, { useState } from 'react';

const TitleEdit = ({ formData, setFormData }) => {
    const [title, setTitle] = useState(formData.title);

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
        setFormData({ ...formData, title: value });
    }, 500); // Adjust the delay time as needed

    const handleChange = (e) => {
        const { value } = e.target;
        setTitle(value);
        debouncedUpdateFormData(value);
    };

    return (
        <div className="min-h-screen relative">
            <div className="max-w-md w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-8 bg-opacity-90  p-8 rounded-md shadow-md">
                <div>
                    <h2 className="lg:text-2xl md:text-xl sm:text-md max-h-full font-bold mb-6 text-white">Edit Title</h2>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium">*Title:</label>
                        <textarea
                            id="title"
                            value={title}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            rows={4}
                            placeholder="Enter the title of your apartment"
                            style={{ height: '200px', width: '100%' }} // Adjust height and width as needed
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleEdit;
