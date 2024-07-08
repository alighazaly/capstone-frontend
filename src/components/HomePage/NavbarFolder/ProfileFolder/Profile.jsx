import React, { useState, useEffect, useContext } from "react";
import { Avatar } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../../UserProvider";
import { BsFillInfoCircleFill } from "react-icons/bs";
import toast from 'react-hot-toast';

import axios from "axios";

const Profile = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useContext(UserContext);
  const [editData, setEditData] = useState({
    username: userData?.data?.userName || '',
    email: userData?.data?.email || '',
    profilePicture: userData?.data?.profilePicture || null,
    profileBase: userData?.data?.imageSrc || null
  });

  useEffect(() => {
    if (userData) {
      // Set initial edit data when userData is available
      setEditData({
        username: userData?.data?.userName || '',
        email: userData?.data?.email || '',
        profilePicture: userData?.data?.profilePicture || null,
        profileBase: userData?.data?.imageSrc || null
      });
    }
  }, [userData]);

  const handleEmailChange = (e) => {
    setEditData({ ...editData, email: e.target.value });
  };

  const handleUsernameChange = (e) => {
    setEditData({ ...editData, username: e.target.value });
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditData(prevState => ({
          ...prevState,
          profileBase: reader.result
        }));
      };
      // Read the selected image file as a data URL
      reader.readAsDataURL(file);
      setEditData(prevState => ({
        ...prevState,
        profilePicture: file
      }));
    }
  };
  
  useEffect(() => {
    console.log("The new profile picture file:", editData.profilePicture);
   // console.log("the new profile base:", editData.profileBase);
  }, [editData.profilePicture, editData.profileBase]);
  
  
  
  const refreshProfileData = async () => {
    if (userData) {
      const userId = userData.data.id;
      const url = `https://localhost:7105/api/User/getprofiledata/${userId}`;

      try {
        const response = await axios.get(url);
        setEditData({
          ...editData,
          profilePicture: response.data.data.profilePicture
        });
        updateUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
  };

  const handleSave = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('imageFile', editData.profilePicture);
  
    const url = `https://localhost:7105/api/User/editprofile?id=${userData.data.id}&email=${editData.email}&username=${editData.username}`;
  
    try {
      const response = await axios.post(url, formData);
     // console.log('Edit Response:', response.data);
      
      if (response.data.statusCode === 199) {
        toast(response.data.statusMessage, { icon: <BsFillInfoCircleFill />, style: { backgroundColor: "#fff" } });
      } else if (response.data.statusCode === 200) {
        refreshProfileData();
        console.log('Profile updated successfully, navigating...');
        navigate("/signin");
        toast.success("Profile updated successfully. Please sign in again.");
      } else if (response.data.statusCode === 400 || response.data.statusCode === 401) {
        toast.error(response.data.statusMessage);
      }
    } catch (error) {
      console.error('Edit error:', error);
      // Optionally, you can display a specific error message here
    }
    

  }
  

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ 
      backgroundImage: `linear-gradient(348deg, transparent 0%, transparent 76%,rgba(194, 194, 194,0.04) 76%, rgba(194, 194, 194,0.04) 93%,transparent 93%, transparent 100%),linear-gradient(150deg, transparent 0%, transparent 10%,rgba(194, 194, 194,0.04) 10%, rgba(194, 194, 194,0.04) 74%,transparent 74%, transparent 100%),linear-gradient(68deg, transparent 0%, transparent 36%,rgba(194, 194, 194,0.04) 36%, rgba(194, 194, 194,0.04) 47%,transparent 47%, transparent 100%),linear-gradient(199deg, transparent 0%, transparent 37%,rgba(194, 194, 194,0.04) 37%, rgba(194, 194, 194,0.04) 47%,transparent 47%, transparent 100%),linear-gradient(90deg, rgb(0,0,0),rgb(0,0,0))`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>      
      <div className="bg-opacity-90 bg-[#a6a6a6] w-full md:w-[24rem] p-8 rounded-md shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Profile</h2>

        <div className="mb-4 flex items-center justify-center">
          <Avatar src={editData.profileBase} alt="Profile" sx={{ width: 128, height: 128 }}>
            {!editData?.profileBase && editData.username && editData.username.charAt(0).toUpperCase()}
          </Avatar>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input
            type="email"
            value={editData.email}
            onChange={handleEmailChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Username</label>
          <input
            type="text"
            value={editData.username}
            onChange={handleUsernameChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-300">Update Profile Picture</label>
          <input
            type="file"
            accept="image/*"
            className=""
            onChange={handleProfilePictureChange}
          />
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between">
          <button
            onClick={() => navigate('/')}
            className="bg-[#7a7a7a] text-white rounded-md focus:outline-none md:mt-4 sm:mt-2 sm:w-full sm:h-[30px] md:w-[150px] md:h-[30px]"
          >
            Back
          </button>
          <button
            onClick={handleSave}
            className="bg-white text-black rounded-md focus:outline-none md:mt-4 sm:mt-2 sm:w-full sm:h-[30px] md:w-[150px] md:h-[30px]"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
