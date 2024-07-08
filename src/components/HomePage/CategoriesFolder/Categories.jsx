import React from 'react';
import Cabin from "../../../Assets/images/Icons/cabin (2).png";
import Bed from "../../../Assets/images/Icons/double-bed (1).png";
import HouseForRent from "../../../Assets/images/Icons/HouseForRent.png";
import HouseForSale from "../../../Assets/images/Icons/HouseForSale.png";
import Mansion from "../../../Assets/images/Icons/Mansion (2).png";
import Studio from "../../../Assets/images/Icons/studio (1).png";
import Pool from "../../../Assets/images/Icons/swimmingpool.png";
import University from "../../../Assets/images/Icons/university.png";
import Filters from './Filters';

const Categories = ({ onSelectCategory, onApplyFilters }) => {
  const sorting = [
    { title: "College", icon: University },
    { title: "HomeForRent", icon: HouseForRent },
    { title: "HomeForSale", icon: HouseForSale },
    { title: "Beds", icon: Bed },
    { title: "Cabin", icon: Cabin },
    { title: "Studio", icon: Studio },
    { title: "Mansion", icon: Mansion },
    { title: "Pool", icon: Pool }
  ];

  const formatTitle = (title) => {
    return title.replace(/([A-Z])/g, ' $1').trim();
  };

  const handleCategorySelect = (category) => {
    console.log('Selected category:', category); // Log the selected category
    const filters = { category: category }; // Create an object with category filter
    onSelectCategory(category);
    onApplyFilters(filters); // Pass the filters object to onApplyFilters
  };

  return (
    <div className='border-b pb-6'>
      <div className='flex lg:justify-center md:justify-center sm:justify-start items-center gap-8 mt-7 
             sm:mx-6 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto py-1 lg:pl-0 lg:pr-0 sm:pl-3 sm:pr-2 md:pl-0 md:pr-0
              relative overflow-x-auto whitespace-nowrap md:overflow-x-hidden 
              lg:overflow-x-hidden rounded lg:w-[45rem] md:w-[45rem]'>
        {sorting.map((obj) => (
          <Filters
            key={obj.title}
            title={formatTitle(obj.title)} // Use the formatted title for display
            icon={obj.icon}
            onClick={() => handleCategorySelect(obj.title)} // Pass the onClick event handler to set the onSelectCategory function equal to obj.title
          />
        ))}
      </div>
    </div>
  );
}

export default Categories;
