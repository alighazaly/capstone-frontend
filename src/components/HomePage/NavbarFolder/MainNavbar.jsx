import React from 'react';
import AdminNavbar from './AdminNavbar';
import Navbar from "./Navbar";
import AnonymousNavbar from "./AnonymousNavbar";

const MainNavbar = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  console.log(userData);
  console.log("Role:", userData.data ? userData.data.role : "No role available");  
  // Add this line to log the userData object
  if (userData && userData.data && userData.data.role) {
    // Render different navbar based on user role
    switch (userData.data.role) {
      case 'Admin':
        return <AdminNavbar />;
      case 'Customer':
        return <Navbar />;
      default:
        return <AnonymousNavbar />;
    }
  } else {
    // If user data is not available or role is not defined, render anonymous navbar
    return <AnonymousNavbar />;
  }
}

export default MainNavbar;