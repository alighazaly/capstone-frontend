import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationCard = ({ photo, appartmentId, description }) => {
const navigate = useNavigate();
console.log("ApartmentId: ",appartmentId)

  return (
    <div className='w-[19rem] h-[28rem] rounded-md bg-[#e6e6e6] relative font-sans shadow-lg'>
      <img src={photo} alt="Apartment" className="w-full h-64 object-cover rounded-t-md" />
      <div className='text-black p-2 cursor-pointer'>
        <p className="text-sm text-gray-700 font-semibold">{description}</p>
      </div>
    </div>
  );
};

export default ReservationCard;
