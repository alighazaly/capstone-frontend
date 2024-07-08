import React, { useState,useContext } from 'react';
import { Button, Rating, TextField } from '@mui/material';
import axios from 'axios';
import toast from 'react-hot-toast';
import { UserContext } from '../UserProvider';
import { VscFeedback } from "react-icons/vsc";
import { RiFeedbackFill } from "react-icons/ri";


const WriteReview = (props) => {
    const [rating, setRating] = useState(0); // State to store the rating value
    const [reviewText, setReviewText] = useState(''); // State to store the review text
    const { userData } = useContext(UserContext);
    // Function to handle rating change
    const handleRatingChange = (event, newValue) => {
        setRating(newValue);
    };

    const handleReviewTextChange = (event) => {
        setReviewText(event.target.value);
    };


const handleSubmitReview = async () => {
    if (!reviewText.trim()) {
        // Display a toast indicating that review content is empty
        toast.error("Please enter a review", {
            icon: <RiFeedbackFill />,
            style: {
                backgroundColor: "#8B0000", // Dark red background
                color: "#fff", // White text color
            }
        });
        return; // Exit early if review content is empty
    }

    console.log(props); // Log props before accessing handleReview
    const userId = userData?.data?.id;
    const appartmentId = props.id;
    // Define the URL for the API endpoint
    const apiUrl = 'https://localhost:7105/api/User/uploadReview';
    const form = new FormData();
    form.append("Content",reviewText);
    form.append("Value",rating);
    form.append("ReviewerId",userId);
    form.append("AppartmentId",appartmentId);

    try {
        const response = await axios.post(apiUrl, form);
        console.log('Review uploaded successfully:', response.data);
        toast.success(response.data.statusMessage, {
            icon: <VscFeedback />,
            style: {
              backgroundColor: "#006400", // Dark green background
              color: "#fff", // White text color
            }
          });
        props.handleReview();
        setRating(0);
        setReviewText('');
    } catch(error) {
        console.error('Submission error:', error.response.data);
        toast.error(error.response.data.statusMessage, {
            icon: <RiFeedbackFill />
            ,
            style: {
              backgroundColor: "#8B0000", // Dark red background
              color: "#fff", // White text color
            }
          });
        }
};



    return (
        <div className="w-[80%] lg:ml-[9rem] md:ml-[2rem] sm:ml-[2rem] mb-5 pb-5">
          <div className='flex flex-col justify-center items-center w-[100%]'>  
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Write a Review :</h2>
            {/* Rating component */}
            <div className="rating-container">
                <Rating
                    value={rating}
                    onChange={handleRatingChange}
                    precision={0.5} // Allow half-star ratings
                    size="large" // Make the stars larger
                />
            </div>
            {/* Text area for the review */}
            <div className="review-textarea" style={{ width: '100%', marginBottom: '1rem' }}>
                <TextField
                    multiline
                    rows={8} // Increase the number of rows
                    variant="outlined"
                    placeholder="Write your review here..."
                    value={reviewText}
                    onChange={handleReviewTextChange}
                    sx={{ width: '100%' }} // Set width to 100%
                />
            </div>
            {/* Button to submit the review */}
            <div className="submit-button">
                <Button variant="contained" onClick={handleSubmitReview}>Submit Review</Button>
            </div>
          </div>  
        </div>
    );
}

export default WriteReview;
