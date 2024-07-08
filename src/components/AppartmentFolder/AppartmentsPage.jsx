import React from 'react';
import { useState,useEffect,useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppartmentImages from "../AppartmentFolder/AppartmentImages";
import Offering from "../AppartmentFolder/Offering";
import Description from './Description';
import AppartmentLocation from './AppartmentLocation';
import AppartmentOwner from "./AppartmentOwner";
import AppartmentReviews from './AppartmentReviews';
import WriteReview from './WriteReview';
import Footer from "../HomePage/FooterFolder/Footer";
import MainNavbar from '../HomePage/NavbarFolder/MainNavbar';
import { UserContext } from '../UserProvider';

const AppartmentsPage = () => {
  const { state } = useLocation();
  const [reviews,setReviews] = useState([]);
  const {userData,setUserData} = useContext(UserContext);
  const [isAdmin,setIsAdmin] = useState(false);
  const [showWriteReview, setShowWriteReview] = useState(false);

  console.log(isAdmin);

  const fetchReviews = async () => {
    try {
      const response = await fetch(`https://localhost:7105/api/User/getAppartmentReview?appartmentId=${state.id}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
        console.log("Response data:", data);
      } else {
        console.error('Error fetching reviews:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };
  
  const handleReview = async () => {
    fetchReviews();
  };


  useEffect(() => {
    if(userData){
      if(userData.data.role === "Admin"){
        setIsAdmin(true);
      }
      setShowWriteReview(true);
    }
    fetchReviews();
  }, [userData]);
  return (
    <div>
      <MainNavbar />
      <AppartmentImages {...state} />
      <Offering {...state} />
      <Description {...state} />
      <AppartmentLocation {...state} />
      <AppartmentOwner {...state} />
      {reviews && reviews.length > 0 ? (
      <AppartmentReviews reviews={reviews} isAdmin = {isAdmin} handleReview = {handleReview} />
    ) : (
      <div className='h-[10rem] flex justify-center items-center text-2xl text-[#a6a6a6]'>
        <p>No reviews available</p>
      </div>
    )}
      {showWriteReview && <WriteReview handleReview={handleReview} {...state} />}
      <Footer />
    </div>
  );
}

export default AppartmentsPage;
