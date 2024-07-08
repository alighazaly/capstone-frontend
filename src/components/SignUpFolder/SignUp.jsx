import React, {useState} from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import "../SignUpFolder/SignUpStyle.css";
import logo from "../../Assets/images/EasyHousingLogo.png";
import { BiSolidErrorCircle } from "react-icons/bi";


const SignUp = () => {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: ''
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Check if any field in registerData is empty
    if (Object.values(registerData).some(value => value === '')) {
      toast.error('Please enter all details.', {
        style: {
          background:"#b89723",
          color: 'white'
        }
      });
      return;
    }
  
    const url = `https://localhost:7105/api/Authentication/register`;
    const data = {
      FirstName: registerData.firstName,
      LastName: registerData.lastName,
      Email: registerData.email,
      UserName: registerData.username,
      Password: registerData.password,
      ConfirmPassword: registerData.confirmPassword
    };
  
    try {
      const response = await axios.post(url, data);
      console.log('Registration response:', response.data);
  
      if (response.status === 200) {
        // Display success message
        toast.success(response.data.statusMessage);
        // Clear register data
        setRegisterData({
          firstName: '',
          lastName: '',
          email: '',
          username: '',
          password: '',
          confirmPassword: ''
        });
      } 
    } catch (error) {
      console.error('Registration error:', error);
      if (error.response && error.response.data) {
        console.log('Error response data:', error.response.data);
        toast.error(error.response.data.statusMessage || 'Registration failed.');
        const errorFields = error.response.data.errors;
        setValidationErrors(errorFields);
      } else {
        console.error('Registration failed:', error);
        // Display generic error message
        toast.error('Registration failed.');
      }
    }
};

  return (
    <div className="Registration relative flex justify-center items-center h-screen">
      <div className="bg-[#A6A6A6] mx-auto lg:ml-40 bg-opacity-30 p-8 rounded-lg w-96 text-center relative">
        <img src={logo} alt="Easy Housing Logo" className="absolute top-0 left-0 w-25 h-20 mt-4" />
        <h2 className="text-4xl text-[#b89723] font-serif font-bold mb-10">Sign Up</h2>
        <form>
          <div className="mb-4">
          {validationErrors && validationErrors.FirstName && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.FirstName}</span>
            )}
            <input
              type="text"
              name="firstName"
              value={registerData.firstName}
              onChange={handleChange}
              id="firstName"
              autoComplete="given-name"
              placeholder="First Name"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          {validationErrors && validationErrors.LastName && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.LastName}</span>
            )}
            <input
              type="text"
              name="lastName"
              value={registerData.lastName}
              onChange={handleChange}
              id="lastName"
              autoComplete="family-name"
              placeholder="Last Name"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          {validationErrors && validationErrors.Email && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.Email}</span>
            )}
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              id="email"
              autoComplete="email"
              placeholder="Email"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          {validationErrors && validationErrors.UserName && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.UserName}</span>
            )}
            <input
              type="text"
              name="username"
              value={registerData.username}
              onChange={handleChange}
              id="username"
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
              value={registerData.password}
              onChange={handleChange}
              id="password"
              autoComplete="new-password"
              placeholder="Password"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
          {validationErrors && validationErrors.ConfirmPassword && (
              <span className="text-red-500 text-sm flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.ConfirmPassword}</span>
            )}
            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              autoComplete="new-password"
              placeholder="Confirm Password"
              className="block w-full bg-[#A6A6A6] border rounded py-2 px-3 text-gray-700 placeholder-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-5">
            <Link to='/Signin' className="backbtn mb-2 sm:mb-0 sm:mr-2">
              Back
            </Link>
            <button
              type="submit"
              className="signbtn"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
            <Toaster />
          </div>
        </form>
        <p className="mt-5 text-sm text-gray-600">Already have an account? <Link to="/SignIn" className="text-[#b89723] font-semibold">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
