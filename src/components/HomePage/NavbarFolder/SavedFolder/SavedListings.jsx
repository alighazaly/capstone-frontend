import React, { useState, useEffect, useContext } from 'react';
import SavedListing from './SavedListing';
import { UserContext } from '../../../UserProvider';
import '../MyListingsFolder/loaderStyle.css'; // Import the loader styles

const SavedListings = () => {
  const [collection, setCollection] = useState([]);
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
      // Fetch saved listings for the user
      const response = await fetch(`https://localhost:7105/api/User/getsavedlisting?userId=${userId}`);
      const data = await response.json();
      setCollection(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // Set loading to false when fetching data finishes (whether successful or not)
    }
  }
  
  useEffect(() => {
    if (userData) {
      fetchData(); // Fetch saved listings when userData is available
    }
  }, [userData]);
 
  const handleDelete = async () => {
    fetchData(); // Refresh the saved listings after deletion
  };

  return (
    <div className='pt-3 pb-[2rem]'>
      {loading && (
        <div className='h-[50rem]'>
        <div className="frame">
          <div className="center">
            <div className="dot-1"></div>
            <div className="dot-2"></div>
            <div className="dot-3"></div>
          </div>
        </div>
        </div>
      )}
      {!loading && collection.length === 0 ? (
        <div className='h-[50rem] flex justify-center items-center text-2xl text-[#a6a6a6]'>
          <p>No saved listings available</p>
        </div>
      ) : (
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-8'>
          {collection.map((listing) => (
            <SavedListing key={listing.id} {...listing} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedListings;
