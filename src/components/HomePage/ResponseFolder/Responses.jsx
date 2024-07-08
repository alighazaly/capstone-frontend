import React, { useEffect, useState, useContext } from 'react';
import ResponseCard from './ResponseCard';
import { UserContext } from '../../UserProvider';

const Responses = () => {
  const [responses, setResponses] = useState([]);
  const { userData } = useContext(UserContext);

  const fetchResponses = async () => {
    try {
      const userId = userData?.data?.id;
      if (!userId) {
        // userId is null, do something (e.g., redirect to login page)
        return;
      }
      const response = await fetch(`https://localhost:7105/api/User/get-user-responses?userId=${userId}`);
      const data = await response.json();
      console.log("Fetched responses:", data);
      setResponses(data);
    } catch (error) {
      console.error('Error fetching responses:', error);
    }
  };

  useEffect(() => {
    fetchResponses();
  }, [userData]);

  return (
    <div>
    {responses.length === 0 || typeof responses === 'undefined' ? (
      <div className='min-h-[50rem] flex justify-center items-center text-2xl text-[#a6a6a6]'>
        <p>No responses available</p>
      </div>
    ) : (
      <div className="min-h-[10rem] mt-[5rem] mb-[5rem] ml-[5rem] mr-[5rem] grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-10"> {/* Add margins from all sides */}
        {responses.map((response, index) => (
          <ResponseCard
            key={index}
            content={response.content}
            dateRange={response.dateRange}
            status={response.status}
            imageSrc={response.appartmentImage}
          />
        ))}
      </div>
    )}
  </div>  
  );
};

export default Responses;
