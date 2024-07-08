import React, { useState, useEffect } from 'react';
import { Avatar, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import toast from 'react-hot-toast';
import { MdErrorOutline } from 'react-icons/md';

const FeedbacksPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch('https://localhost:7105/api/User/getAllFeedbacks');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log("Response: ", responseData); // Log the full response object
      setFeedbacks(responseData.data); // Set feedbacks to the data array inside the response
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    }
  }

  const handleDeleteFeedback = async (index) => {
    try {
      // Send a DELETE request to the backend API to delete the feedback
      const response = await axios.delete(`https://localhost:7105/api/User/deleteFeedback?feedbackId=${feedbacks[index].id}`);
      
      // Check if the request was successful (status code 200)
      if (response.status === 200) {
        // If successful, create a copy of the feedbacks array and remove the deleted feedback
        const updatedFeedbacks = [...feedbacks];
        updatedFeedbacks.splice(index, 1);
  
        // Update the state with the filtered list of feedbacks
        setFeedbacks(updatedFeedbacks);
        
        // Display a success toast notification
        toast.success("Feedback deleted successfully", {
          icon: <DeleteIcon />,
          style: {
            backgroundColor: "#006400", // Dark green background
            color: "#fff", // White text color
          }
        });
      } else {
        // If the request was not successful, throw an error
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
      // Display an error toast notification
      toast.error("Failed to delete feedback", {
        icon: <MdErrorOutline />,
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };
  

  useEffect(() => {
    fetchFeedbacks();
  }, []);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 text-[#A6A6A6]'>Feedbacks</h1>

      {feedbacks.map((feedback, index) => (
        <div key={index} className="relative flex flex-col md:flex-row items-start gap-4 mb-6 border border-gray-300 bg-gray-100 rounded-lg p-6">
          <Avatar alt="Avatar" src={feedback.imageSrc} />
          <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mb-2">
              <Typography variant="h6" className="text-black font-semibold">
                {`${feedback.writerFirstName} ${feedback.writerLastName}`}
              </Typography>
              <DeleteIcon className="cursor-pointer" onClick={() => handleDeleteFeedback(index)} />
            </div>
            <div className="flex items-center">
              {Array.from(Array(feedback.value), (_, i) => (
                <StarIcon key={i} className="text-yellow-500" />
              ))}
            </div>
            <Typography variant="body1" className="text-gray-700 mt-2">
              {feedback.content}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeedbacksPage;
