import React, { useState, useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import "../SignInFolder/SignInStyle.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import logo from "../../Assets/images/EasyHousingLogo.png";
import { BiSolidErrorCircle } from "react-icons/bi";
import { UserContext } from '../UserProvider';
import moment from 'moment'; // Import Moment.js
import { MdOutlineVpnKeyOff } from "react-icons/md";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";



const SignIn = () => {
const navigate = useNavigate();
const [validationErrors, setValidationErrors] = useState({});
const { userData,updateUserData } = useContext(UserContext); // Use UserContext
const [SignInData,setSignInData] = useState({
  username : '',
  password: ''
}
);

useEffect(() => {
  setSignInData({
    username: '',
    password: ''
  });
}, []);

const handleChange = (event) => {
  const { name, value } = event.target;
  setSignInData({
    ...SignInData,
    [name]: value
  });
};
const handleSubmit = async (event) => {
  event.preventDefault();

  if (Object.values(SignInData).some(value => value === '')) {
    toast.error('Please enter all details', {
      icon: <MdErrorOutline />
      ,
      style: {
        backgroundColor: "#8B0000", // Dark red background
        color: "#fff", // White text color
      }
    });;
    return; // Exit the function if any field in registerData is empty
  }
  
  // Move the login request code outside of the if block
  const url = `https://localhost:7105/api/Authentication/login`;
  const data = {
    UserName: SignInData.username,
    Password: SignInData.password
  }
  try {
    const response = await axios.post(url, data);
    console.log('Login response:', response.data);
    if (response.status === 200) {
    // Store user data in localStorage
    updateUserData(response.data);
    //localStorage.setItem('userData', JSON.stringify(response.data));
    toast.success(response.data.statusMessage, {
      icon: <PiLockKeyOpenBold />,
      style: {
        backgroundColor: "#006400", // Dark green background
        color: "#fff", // White text color
      }
    });
    console.log('Current date:', moment().format('YYYY-MM-DD'));
    const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
    console.log('Tomorrow date:', tomorrow);
    
    if (moment().format('YYYY-MM-DD') === tomorrow) {
      updateUserData(null); // Clear user context if tomorrow is the expiration date
      console.log('User context cleared.');
    }
    setTimeout(() => {
      navigate('/');
    }, 200);    } 
  } catch (error) {
    console.error('Login error:', error);
    if (error.response && error.response.data) {
      console.log('Error response data:', error.response.data);
      toast.error(error.response.data.statusMessage, {
        icon: <MdOutlineVpnKeyOff />
        ,
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
      const errorFields = error.response.data.errors;
      setValidationErrors(errorFields);
    } else {
      console.error('Login failed:', error);
      // Display generic error message
      toast.error('Login failed.');
    }
  }
  }

  return (
    <div className="Registration relative flex justify-center items-center h-screen">
      <div className="bg-[#A6A6A6] mx-auto lg:ml-40 bg-opacity-30 p-8 rounded-lg w-96 text-center relative">
        <h2 className="text-4xl text-[#b89723] font-serif font-bold mb-10">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          {validationErrors && validationErrors.UserName && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.UserName}</span>
            )}
            <input
              type="text"
              name="username"
              id="username"
              value={SignInData.username}
              onChange={handleChange}
              autoComplete="username"
              placeholder="Username"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
              {validationErrors && validationErrors.Password && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.Password}</span>
            )}
            <input
              type="password"
              name="password"
              value={SignInData.password}
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
              placeholder="Password"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-5">
          <Link to='/' className="backbtn mb-2 sm:mb-0 sm:mr-2">
              Back
            </Link>
            <button
              type="submit"
              className="signbtn"
            >
              Sign in
            </button>
          </div>
          <div className="mt-5">
            <img src={logo} alt="Easy Housing Logo" className="w-30 h-30 mx-auto" />
          </div>
          {/* Add the phrase and link to Sign Up page */}
          <p className="mt-5 text-sm text-gray-600">Don't have an account? Go to <Link to="/SignUp" className="text-[#b89723] font-semibold">Sign Up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
