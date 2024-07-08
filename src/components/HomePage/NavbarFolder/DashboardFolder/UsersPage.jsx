import React, { useEffect, useState } from 'react';
import { Avatar } from '@mui/material';
import { FaTrash } from "react-icons/fa";
import axios from 'axios';
import toast from 'react-hot-toast';
import { LiaUserMinusSolid } from "react-icons/lia";
import { MdErrorOutline } from "react-icons/md";



const UsersPage = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://localhost:7105/api/User/getAllUsers');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      console.log(responseData); // Log the full response object
      setUsers(responseData.data); // Set users to the data array inside the response
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(`https://localhost:7105/api/User/deleteUser?userId=${userId}`)
      if (response.status === 200) {
        // Filter out the deleted user from the current list of users
        const updatedUsers = users.filter(user => user.id !== userId);
        toast.success(response.data.statusMessage, {
          icon: <LiaUserMinusSolid />,
          style: {
            backgroundColor: "#006400", // Dark green background
            color: "#fff", // White text color
          }
        });
        // Update the state with the filtered list of users
        setUsers(updatedUsers);
        console.log(`User with ID ${userId} deleted successfully`);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
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
  
  useEffect(() => {
    fetchUsers();
  }, []);



  return (
    <div className='overflow-x-auto overflow-y-auto sm:h-auto lg:w-full md:w-[60rem] sm:w-[60rem]'>
      <p className='text-white font-semibold sm:text-xl md:text-2xl lg:text-3xl mb-6 md:text-center sm:text-start'>Manage Users</p>
      <table className="table-fixed w-full border-collapse">
        <thead className="bg-[#000000] text-white">
          <tr>
            <th className="w-1/12 p-2">Avatar</th>
            <th className="w-1/6 p-2">First Name</th>
            <th className="w-1/6 p-2">Last Name</th>
            <th className="w-1/6 p-2">Email</th>
            <th className="w-1/6 p-2">Id</th>
            <th className="w-1/12 p-2">Actions</th>
          </tr>
        </thead>
        <tbody className='text-gray-500'>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200">
                <td className="p-4 flex justify-center items-center">
                  <Avatar alt="Avatar" src={user.imageSrc} sx={{ width: 45, height: 45 }} />
                </td>
                <td className="md:p-2 sm:p-1">{user.firstName}</td>
                <td className="md:p-2 sm:p-1">{user.lastName}</td>
                <td className="md:p-2 sm:p-1">{user.email}</td>
                <td className="md:p-2 sm:p-1">{user.id}</td>
                <td className="">
                  <button type="button" className="btn btn-md btn-rounded flex justify-center items-center text-gray-500 pl-[3rem]" onClick={() => deleteUser(user.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="p-2 text-center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
