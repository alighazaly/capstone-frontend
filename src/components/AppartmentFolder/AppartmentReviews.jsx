import React from 'react';
import Review from './Review';


const AppartmentReviews = ({reviews,isAdmin,handleReview}) => {
  
    return (
        <div className='w-[80%] lg:ml-[9rem] md:ml-[2rem] sm:ml-[2rem] mb-5 py-5 md:rounded-none sm:rounded-md'>
            <p className='text-2xl text-black font-bold mb-5'>Reviews:</p>
            <div className='parent'>
  {reviews && reviews.map((review) => (
    <Review key={review.id} id={review.id} {...review} isAdmin = {isAdmin} handleReview = {handleReview}  />
  ))}
</div>

    </div>
    );
}

export default AppartmentReviews;
