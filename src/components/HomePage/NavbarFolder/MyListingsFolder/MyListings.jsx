import React, { useState, useEffect, useContext } from 'react'
import Listing from './Listing';
import { UserContext } from '../../../UserProvider';
import './loaderStyle.css'

const MyListings = () => {
  const [myListings, setMyListings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userData } = useContext(UserContext);

  async function fetchData() {
    try {
      setLoading(true); // Set loading to true when fetching data starts
      const userId = userData?.data?.id;
      if (!userId) {
        // userId is null, do something (e.g., redirect to login page)
        return;
      }
      const response = await fetch(`https://localhost:7105/api/User/getuserappartments?userId=${userId}`);
      const data = await response.json();
      setMyListings(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false when fetching data finishes (whether successful or not)
    }
  }
  
  useEffect(() => {
    if (userData) {
      fetchData(); // Fetch apartments when userData is available
    }
  }, [userData]);
 
  const handleDelete = async () => {
    // Refresh the listings after deletion
    fetchData();
  };

  return (
    <div className='pt-3'>
      {loading && (
    <div class="frame">
    <div class="center">
       <div class="dot-1"></div>
       <div class="dot-2"></div>
       <div class="dot-3"></div>
    </div>
 </div>
      )}
      {!loading && myListings.length === 0 ? (
        <div className='h-[50rem] flex justify-center items-center text-2xl text-[#a6a6a6]'>
          <p>You don't have any listing</p>
        </div>
      ) : (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-8 min-h-[40rem] pt-0'>
          {myListings.map((listing) => (
            <Listing key={listing.id} {...listing} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyListings;
