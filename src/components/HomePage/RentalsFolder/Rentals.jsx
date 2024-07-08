import React from 'react';

import Rental from './Rental';

const Rentals = ({ rentals,loading,handleDelete }) => {
 

  return (
    <div className='pt-3 min-h-screen mb-[2rem]'>
    {loading ? (
      <div className="frame">
        <div className="center">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="dot-3"></div>
        </div>
      </div>
    ) : (
      <div>
        {rentals.length === 0 ? (
          <div className="flex justify-center items-center h-[50rem]">
            <p className="text-2xl text-gray-500">No available rentals</p>
          </div>
        ) : (
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-8'>
            {rentals.map((rental) => (
              <Rental key={rental.id} {...rental} handleDelete = {handleDelete} />
            ))}
          </div>
        )}
      </div>
    )}
  </div>
  );
};

export default Rentals;
