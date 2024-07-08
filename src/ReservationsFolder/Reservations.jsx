import React from 'react';
import ReservationCard from './ReservationCard';

const Reservations = ({ reservations }) => {
  console.log("PROPS: ", reservations);
  return (
    <div className='min-h-[35rem] mt-5 mb-5'>
      { !reservations || reservations.length === 0 ? (
        <div className="flex justify-center items-center h-[50rem]">
          <p className="text-2xl text-gray-500">No available reservations</p>
        </div>
      ) : (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-8'>
          {reservations.map(reservation => (
            <ReservationCard
              key={reservation.id}
              photo={reservation.appartmentImage}
              owner={reservation.ownerId}
              description={reservation.content} // Assuming content represents description
              email={reservation.ownerId} // Assuming ownerId represents email
              appartmentId={reservation.appartmentId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Reservations;
