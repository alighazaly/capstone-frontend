import React, { useState,useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import '../RentalsFolder/RentalStyle.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserProvider';
import toast from 'react-hot-toast';
import { MdErrorOutline } from "react-icons/md";
import axios from 'axios';
import { MdDoneAll } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { AiTwotoneCheckCircle } from "react-icons/ai";
import star from "../../../Assets/images/Icons/star.png";
import silverStar from "../../../Assets/images/Icons/SilverIcons/silver-star.png";


const Rental = (props) => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext); // Use UserContext
  const [isFavorite, setIsFavorite] = useState(false);


  const handleHeartClick = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate('/signin');
      return;
    }
  
    try {
      
      const userId = userData?.data?.id;
      const apartmentId = props.id;
      if (!userId || !apartmentId) {
        // userId or apartmentId is missing, handle error
        return;
      }
  
      const response = await axios.post(`https://localhost:7105/api/User/saveUserListing?userId=${userId}&apartmentId=${apartmentId}`);
      console.log('User listing saved:', response.data);
      toast.success(response.data.statusMessage, {
        icon: <MdDoneAll />,
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });
      setIsFavorite(!isFavorite);
    }catch (error) {
      console.error('Error saving user listing:', error);
      const errorMessage = error.response?.data?.statusMessage || 'Failed to save user listing';
      toast.error(errorMessage, {
        icon: <MdErrorOutline />
        ,
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };
  

  function PassInfo() {
    const {
      airConditionner,
      area,
      bbqGrill,
      categoryName,
      city,
      country,
      description,
      elevator,
      email,
      firstName,
      garden,
      generator,
      guard,
      gym,
      hotTube,
      id,
      imageFile,
      imageSrc,
      images,
      indoorFirePlace,
      kitchen,
      lastName,
      latitude,
      longitude,
      masterBedrooms,
      numberOfBathrooms,
      numberOfBedrooms,
      numberOfBeds,
      ownerId,
      parking,
      pool,
      price,
      profilePicture,
      smokingAllowed,
      title,
      tvs,
      typeOfPlace,
      uploadDate,
      userName,
      waterContainers,
      wifi,
      workSpace,
      reservedDates
    } = props;
    navigate(`/appartmentspage/${props.id}`, {
      state: {  airConditionner,
        area,
        bbqGrill,
        categoryName,
        city,
        country,
        description,
        elevator,
        email,
        firstName,
        garden,
        generator,
        guard,
        gym,
        hotTube,
        id,
        imageFile,
        imageSrc,
        images,
        indoorFirePlace,
        kitchen,
        lastName,
        latitude,
        longitude,
        masterBedrooms,
        numberOfBathrooms,
        numberOfBedrooms,
        numberOfBeds,
        ownerId,
        parking,
        pool,
        price,
        profilePicture,
        smokingAllowed,
        title,
        tvs,
        typeOfPlace,
        uploadDate,
        userName,
        waterContainers,
        wifi,
        workSpace,
        reservedDates }
    });
  }
  
  const handleTrashClick = async () => {
    axios.delete(`https://localhost:7105/api/User/deleteapartment/${props.id}`)
    .then(response => {
      // Handle success response
      console.log('Apartment deleted successfully:', response.data);
      // Optionally, you can update your UI or perform any other actions here
      props.handleDelete(); // Call the parent function to update listings after deletion
      toast(response.data.statusMessage, {
        icon: <AiTwotoneCheckCircle />,
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });})
    .catch(error => {
      // Handle error response
      console.error('Error deleting apartment:', error);
      // Optionally, you can display an error message to the user
    });
  }

  const truncateDescription = (description) => {
    const MAX_WORDS = 15; // Define the maximum number of words
    const words = description.split(' ');
  
    if (words.length > MAX_WORDS) {
      return words.slice(0, MAX_WORDS).join(' ') + '...';
    } else {
      return description;
    }
  };

  return (
    <div className='w-[19rem] h-[35rem] rounded-md bg-[#e6e6e6] relative font-sans shadow-lg'>
    <div className='absolute top-0 right-0 m-5 z-10 text-2xl cursor-pointer'>
      <div className='flex flex-row gap-1'>
        {userData && userData.data.role === 'Admin' && (
          <div className="">
            <MdDelete className="cursor-pointer" onClick={handleTrashClick} />
          </div>
        )}
        <div className={`heart-icon ${isFavorite ? 'heart-icon-active' : ''}`} onClick={handleHeartClick}>
          {isFavorite ? <IoHeart className="text-red-500" /> : <IoHeartOutline />}
        </div>
      </div>
    </div>
    <Carousel>
      {props.images.map((image, index) => (
        <img key={index} src={image} alt={`pic ${index + 1}`} className='object-cover rounded-[1rem] h-64 p-3' style={{ aspectRatio: '2' }} />
      ))}
    </Carousel>
    <div className='text-black p-2 cursor-pointer' onClick={PassInfo}>
      <h3 className="text-xl font-bold font-serif font-abril">{props.title}</h3>
      <h4 className='text-sm text-gray-700 font-light'>{props.city}, {props.country}</h4>
      <p className='text-sm text-gray-700 font-light'>Date Uploaded: {props.uploadDate.slice(0, 10)}</p>
      <p className="text-sm text-gray-700 font-playfair font-semibold">Description:</p>
      <p className="text-sm text-gray-700 font-playfair">{truncateDescription(props.description)}</p>
      <p className="text-md text-black font-semibold">Price: {props.price}$/per night</p>
      {/* Star representing the rating */}
      <div className="flex items-center">
  <p className="text-md text-black font-semibold">Rating: </p>
  {props.rating === -1 ? ( // Check if rating is -1
    <span className="text-md text-gray-500">No ratings available</span> // Display message for no ratings
  ) : props.rating >= 4 ? ( // Check if rating is greater than or equal to 4
    <>
      <img src={star} alt='star' className='h-4 w-4' /> {/* Render gold star */}
      <span className="text-md text-black font-semibold">{props.rating}</span> {/* Render the rating value */}
    </>
  ) : (
    <>
      <img src={silverStar} alt='star' className='h-4 w-4' /> {/* Render silver star */}
      <span className="text-md text-black font-semibold">{props.rating}</span> {/* Render the rating value */}
    </>
  )}
</div>


    </div>
  </div>
  );
}

export default Rental;
