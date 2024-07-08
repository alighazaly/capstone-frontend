import React, { useState,useEffect,useContext } from 'react';
import "./SignStyle.css";
import { BiSolidErrorCircle } from "react-icons/bi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { MdOutlineVpnKeyOff } from "react-icons/md";
import { PiLockKeyOpenBold } from "react-icons/pi";
import { MdErrorOutline } from "react-icons/md";
import moment from 'moment'; // Import Moment.js
import { UserContext } from '../UserProvider';

const Sign = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationErrors, setValidationErrors] = useState({});
  const [validationRegisterErrors, setValidationRegisterErrors] = useState({});
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

  const handleSignIn = async (event) => {
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
  
    const [registerData, setRegisterData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      });


      const handleRegisterDataChange = (e) => {
        const { name, value } = e.target;
        setRegisterData(prevData => ({
          ...prevData,
          [name]: value
        }));
      };


      const handleSignUp = async (event) => {
        event.preventDefault();
      
        // Check if any field in registerData is empty
        if (Object.values(registerData).some(value => value === '')) {
            toast.error('Please enter all details', {
                icon: <MdErrorOutline />
                ,
                style: {
                  backgroundColor: "#8B0000", // Dark red background
                  color: "#fff", // White text color
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
            setValidationErrors({});
            setIsSignIn(true);
          } 
        } catch (error) {
          console.error('Registration error:', error);
          if (error.response && error.response.data) {
            console.log('Error response data:', error.response.data);
            toast.error(error.response.data.statusMessage || 'Registration failed.');
            const errorFields = error.response.data.errors;
            setValidationRegisterErrors(errorFields);
          } else {
            console.error('Registration failed:', error);
            // Display generic error message
            toast.error('Registration failed.');
          }
        }
    };

  const [text, setText] = useState("Don't have an account yet? Register now!");

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
    setText(isSignIn ? "Already have an account? Sign in!" : "Don't have an account yet? Register now!");
  };


  return (
    <div className="center-wrapper">
      <div className={`Sign-container ${isSignIn ? '' : 'right-panel-active'}`}>
        <div className="form-container sign-in-container">
            <h1 className='text-[2rem] header font-serif font-abril'>Sign In</h1>
            <input id='username' name='username' className='inputs' type="text" placeholder="Username" value={SignInData.username} onChange={(e) => handleChange(e)} />
            {validationErrors && validationErrors.UserName && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationErrors.UserName}</span>
            )}
            <input id='password' name='password' className='inputs' type="password" placeholder="Password" value={SignInData.password} onChange={(e) => handleChange(e)} />
            <div className='flex justify-center items-center gap-20 w-[100%] mt-7'>
                <button className="w-[7rem] h-[2rem] flex justify-center items-center buttons back-buttons" onClick={()=> navigate('/')}>Back</button>
                <button className="w-[7rem] h-[2rem] flex justify-center items-center buttons sign-buttons" onClick={handleSignIn}>Sign In</button>
            </div>           
        </div>
        <div className="form-container sign-up-container">
            <h1 className='text-2xl header font-serif font-abril'>Sign Up</h1>
            <input id='firstName' name='firstName' className='inputs' type="text" placeholder="First Name" value={registerData.firstName} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.FirstName && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationRegisterErrors.FirstName}</span>
            )}
            <input id='lastName' name='lastName' className='inputs' type="text" placeholder="Last Name" value={registerData.lastName} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.LastName && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationRegisterErrors.LastName}</span>
            )}
            <input id='email' name='email' className='inputs' type="text" placeholder="Email" value={registerData.email} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.Email && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationRegisterErrors.Email}</span>
            )}
            <input id='username' name='username' className='inputs' type="text" placeholder="Username" value={registerData.username} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.UserName && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationRegisterErrors.UserName}</span>
            )}
            <input id='password' name='password' className='inputs' type="password" placeholder="Password" value={registerData.password} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.Password && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313] text-[2rem]' />{validationRegisterErrors.Password}</span>
            )}
            <input id='confirmPassword' name='confirmPassword' className='inputs' type="password" placeholder="Confirm Password" value={registerData.confirmPassword} onChange={(e) => handleRegisterDataChange(e)} />
            {validationRegisterErrors && validationRegisterErrors.ConfirmPassword && (
              <span className="text-red-500 text-xs flex justify-start items-center"><BiSolidErrorCircle className='text-[#5e1313]' />{validationRegisterErrors.ConfirmPassword}</span>
            )}
            <div className='flex justify-center items-center gap-20 w-[100%] mt-4'>
                <button className="w-[7rem] h-[2rem] flex justify-center items-center buttons back-buttons" onClick={() => navigate('/')}>Back</button>
                <button className="w-[7rem] h-[2rem] flex justify-center items-center buttons sign-buttons" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1 onClick={toggleForm} className='cursor-pointer header font-serif font-abril'>{text}</h1>
            </div>
            <div className="overlay-panel overlay-right">
              <h1 onClick={toggleForm} className='cursor-pointer header font-serif font-abril'>{text}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
