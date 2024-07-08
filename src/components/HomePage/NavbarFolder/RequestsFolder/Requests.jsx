import React from 'react';
import Card from './Card'; // Import the Card component
import './Style.css';
import emptyProfile from "../../../../Assets/images/empty.png";
import toast from 'react-hot-toast';
import axios from 'axios';

const Requests = ({ requests,handleRefresh }) => {

  const acceptRequest = async (requestId) => {
    try {
      const response = await axios.post(`https://localhost:7105/api/User/accept-reservation-request?requestId=${requestId}`);
      console.log('Request accepted:', response.data);
      toast.success('Request accepted successfully', {
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });
      handleRefresh();
      // Optionally, you can update the requests state to reflect the change
    } catch (error) {
      console.error('Error accepting request:', error);
      toast.error('Failed to accept request', {
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };

  const rejectRequest = async (requestId) => {
    try {
      const response = await axios.post(`https://localhost:7105/api/User/reject-reservation-request?requestId=${requestId}`);
      console.log('Request rejected:', response.data);
      toast.success('Request rejected successfully', {
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });
      handleRefresh();
      // Optionally, you can update the requests state to reflect the change
    } catch (error) {
      console.error('Error rejecting request:', error);
      toast.error('Failed to reject request', {
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };

  return (
   <div className="request-container min-h-[100vh]">
  <h1 className="lg:text-4xl md:text-3xl sm:text-2xl text-center mb-10 pt-8 text-white font-bold font-serif font-abril">Requests</h1>
  {!requests || requests.length === 0 ? (
    <div className='h-[50rem] flex justify-center items-center text-2xl text-[#a6a6a6]'>
      <p>No requests available</p>
    </div>
  ) : (
    <div className="request-page grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-4">
      {requests.map((request, index) => (
        <div key={index} className="card-container">
          <Card handleRefresh={handleRefresh}
            name={request.content.split(' is ')[0]}
            about={request.content.split(' is ')[1].split('. Please review')[0]}
            photo={request.appartmentImage}
            hoverPhoto={request.userProfilePicture || emptyProfile}
            requestId={request.id}  // Pass requestId to Card component
            actionButton={
              <div className="flex justify-center items-center gap-6">
                {request.status === "Pending" && (
                  <>
                  <button className="button-reject" onClick={() => rejectRequest(request.id)}>Reject Request</button>
                  <button className="button-accept" onClick={() => acceptRequest(request.id)}>Accept Request</button>
                  </>
                )}
                {request.status === "Accepted" && (
                  <button className="accept-button">Accepted</button>
                )}
                {request.status === "Rejected" && (
                  <button className="reject-button">Rejected</button>
                )}
              </div>
            }
          />
        </div>
      ))}
    </div>
  )}
</div>

  );
};

export default Requests;
