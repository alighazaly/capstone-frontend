import React, { useState } from 'react';
import './Style.css';
import axios from 'axios';
import toast from 'react-hot-toast';

const Card = ({ name, about, photo, hoverPhoto, requestId, actionButton,handleRefresh }) => {

  const handleDelete = async(requestId) => {
    try {
      const response = await axios.delete(`https://localhost:7105/api/User/delete-reservation-request?requestId=${requestId}`);
      console.log('Request deleted:', response.data);
      toast.success('Request deleted successfully', {
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });
      handleRefresh();
      // Optionally, you can update the requests state to reflect the change
    } catch (error) {
      console.error('Error deleting request:', error);
      toast.error('Failed to delete request', {
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };
  console.log("This is the requestId:",requestId);

  return (
    <div className="card">
      <button className="trash" onClick={() => handleDelete(requestId)}>
        <svg
          className="lucide lucide-trash"
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 6h18M5 6V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v2M12 12v6m-4-4v4m8-4v4"></path>
        </svg>
      </button>
      <div
        className="profile-pic"
        style={{ 
          backgroundImage: `url(${photo})`
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundImage = `url(${hoverPhoto})`}
        onMouseLeave={(e) => e.currentTarget.style.backgroundImage = `url(${photo})`}
      ></div>
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="about-me">{about}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            {/* Your social links SVGs */}
          </div>
          {actionButton}
        </div>
      </div>
    </div>
  )
};

export default Card;
