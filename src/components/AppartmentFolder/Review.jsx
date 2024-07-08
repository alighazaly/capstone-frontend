import React from 'react';
import { Avatar, Rating } from '@mui/material'; // Import Avatar and Rating components from MUI
import { FaTrash } from 'react-icons/fa';
import toast from 'react-hot-toast';
import axios from 'axios';
import { MdErrorOutline } from "react-icons/md";
import { RiChatDeleteFill } from "react-icons/ri";
import icon from "../../Assets/images/Icons/icon.webp"


const Review = (props) => {
    console.log("Is Admin: ",props.isAdmin);
    console.log("Review Id: ",props.id);
    const handleDeleteReview = async (event) => {
    event.preventDefault();
    try {
    
        const response = await axios.delete(`https://localhost:7105/api/User/deleteReview?reviewId=${props.id}`);
        console.log('User review deleted', response.data);
        toast.success(response.data.statusMessage, {
          icon: <RiChatDeleteFill />,
          style: {
            backgroundColor: "#006400", // Dark green background
            color: "#fff", // White text color
          }
        });
    props.handleReview();
      }catch (error) {
        console.error('Error deleting review:', error);
        const errorMessage = error.response?.data?.statusMessage || 'Failed to delete review';
        toast.error(errorMessage, {
          icon: <MdErrorOutline />
          ,
          style: {
            backgroundColor: "#8B0000", // Dark red background
            color: "#fff", // White text color
          }
        });
      }
    }
    
    return (
      <div className="review-container bg-[#f6f6f6] border-2 border-[#b89723] p-4 mb-4 relative">
      {props.isAdmin && (
          <div className="absolute top-4 right-4">
              <FaTrash className="text-red-500 cursor-pointer" onClick={handleDeleteReview} />
          </div>
      )}
      <div className="flex flex-col">
          <div className="flex items-center mb-2">
              <Avatar alt={props.reviewrFirstName} src={props.imageSrc} />
              <div className="ml-2">
                  <p className="font-semibold">{props.reviewrFirstName} {props.reviewrLastName}</p>
                  {props.hasReservedBefore && ( // Conditionally render reserved icon and text
                      <div className="flex items-center">
                          <img src={icon} alt="Reserved" className="w-4 h-4 mr-1" />
                          <p className="text-sm text-gray-500">Has reserved here before</p>
                      </div>
                  )}
              </div>
          </div>
          <div className="mb-2">
              <Rating value={props.value} precision={0.5} readOnly />
          </div>
          <div className="flex-grow overflow-auto">
              <p className="break-words">{props.content}</p>
          </div>
      </div>
  </div>
    );
}

export default Review;
