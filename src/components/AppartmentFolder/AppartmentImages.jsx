import React from 'react';

const AppartmentImages = (props) => {
  const { images } = props;

  return (
    <div>
      <div className="container mx-8 px-0">
        <h1 className="text-3xl font-bold mb-4 font-serif font-abril mt-4">Rental Information:</h1>
        <div className="flex lg:flex-row md:flex-row sm:flex-col lg:w-auto md:w-[50rem]">
          {/* Display big picture */}
          <div className="lg:w-[60%] md:w-[90%] sm:w-[90%] flex justify-end items-center pt-2 pr-4">
            <img src={images[0]} alt="Big House Image" className="lg:w-[40rem] md:w-[55rem] sm:w-[50rem] h-auto rounded-md mb-4 object-cover" style={{ aspectRatio: ' 12/9' }} />
          </div>
          {/* Display small pictures */}
          <div className='lg:w-[35%] md:w-[55%] sm:w-[90%] sm:pr-6 flex flex-col gap-2 pt-3 pb-4 lg:pr-3 md:pr-3'>
            <div className='flex flex-row h-[50%] gap-2'>
              <img src={images[1]} alt='first image' className='w-[50%] h-auto rounded-md object-cover' style={{ aspectRatio: '1/1' }} />
              <img src={images[2]} alt='second image' className='w-[50%] h-auto rounded-md object-cover' style={{ aspectRatio: '1/1' }} />
            </div>
            <div className='flex flex-row h-[50%] gap-2'>
              <img src={images[3]} alt='third image' className='w-[50%] h-auto rounded-md object-cover' style={{ aspectRatio: '1/1' }} />
              <img src={images[4]} alt='fourth image' className='w-[50%] h-auto rounded-md object-cover' style={{ aspectRatio: '1/1' }} />
            </div>
          </div>
        </div>
        <div className='info lg:mx-[7rem] md:mx-0 sm:mx-0 w-[20rem] flex justify-between mb-3'>
  <div className='flex flex-col'>
    <div className="left-info lg:text-3xl md:text-2xl sm:text-xl font-bold border-b-2 border-gray-300 lg:w-[40rem] md:w-[35rem] sm:w-[20rem] min-h-[8rem] overflow-auto">
      <p className='font-serif font-abril font-bold'>{props.title}</p>
      <p className='text-sm text-gray-900 font-semibold'>{props.city}, {props.country}</p>
      <p className='text-sm'>Type of Place: {props.typeOfPlace}</p>
      <p className="text-sm text-gray-700">Price per night: {props.price}$</p>
      <p className="text-sm text-gray-600">Area: {props.area} m<sup>2</sup></p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default AppartmentImages;
