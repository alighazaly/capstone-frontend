import React, { useState,useEffect,useContext } from 'react';
import logo from "../../../Assets/images/EasyHousingLogo.png";
import { Avatar} from '@mui/material';
import { IoMdMenu } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark} from '@fortawesome/free-solid-svg-icons';
import { TbStarsFilled } from "react-icons/tb";
import { FiUpload } from "react-icons/fi";
import { Drawer, List, ListItem, ListItemIcon, ListItemText,Dialog,DialogTitle,Stack,Rating,TextareaAutosize,Button } from '@mui/material';
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiSignOut } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../UserProvider";
import { VscFeedback } from "react-icons/vsc";
import { RiFeedbackFill } from "react-icons/ri";
import axios from 'axios';
import toast from 'react-hot-toast';
import "../NavbarFolder/NavbarStyle.css";
import { FaCalendarAlt } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { MdOutlineReplyAll } from "react-icons/md";




const Navbar = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const { userData,updateUserData } = useContext(UserContext);
  const { profilePicture } = userData || {};
  const [profileBase,setProfileBase] = useState(userData?.data?.imageSrc)
   // Destructure user data
   useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      // If user data exists, set the profile base using FileReader
      const reader = new FileReader();
      reader.onload = () => {
        setProfileBase(reader.result);
      };
      // Set profileBase to the stored imageSrc
      setProfileBase(storedUserData.data?.imageSrc);
    }
  }, []);
  
  const handleClose = () => {
    setOpen(false);
};

const handleOpen = () => {
  setOpen(true);
}

const handleSignOut = () => {
  // Clear user data and redirect to the sign-in page
  updateUserData(null);
  localStorage.clear(); // Clear all items from local storage
  navigate('/signin');
};


const handleSubmit = async () => {
  if (review === null || review === '') {
    // Display a toast indicating that review content is empty
    toast.error("Please enter a feedback", {
        icon: <RiFeedbackFill />,
        style: {
            backgroundColor: "#8B0000", // Dark red background
            color: "#fff", // White text color
        }
    });
    return; // Exit early if review content is empty
}
const userId = userData?.data?.id;
const apiUrl = 'https://localhost:7105/api/User/sendFeedback';
const form = new FormData();
form.append("Content",review);
form.append("Value",rating);
form.append("WriterId",userId);

try {
  const response = await axios.post(apiUrl, form);
  console.log('Feedback uploaded successfully:', response.data);
  toast.success(response.data.statusMessage, {
      icon: <VscFeedback />,
      style: {
        backgroundColor: "#006400", // Dark green background
        color: "#fff", // White text color
      }
    });
    setRating(0);
    setReview('');
    handleClose();
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

  console.log('Rating:', rating);
  console.log('Review:', review);

};
  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center border-b'>
        {/* Left */}
        <div className='h-20 flex'>
            <img src={logo} alt='logo' className='object-cover' />
        </div>
        {/* Middle */}
        <div className='hidden lg:flex relative justify-center items-center mt-5 shadow-sm rounded-full shadow-gray-400 bg-[#003740]'>
            <input type='search' placeholder='' className='py-2.5 w-[65rem] rounded-full outline-0 bg-[#003740]'></input>
            <div className='flex justify-between absolute text-[#fff] w-full pr-2 pl-2'>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/')}><SiHomebridge /><span className="ml-1.5">Home Page</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/profile')}><FaUser /><span className="ml-1.5">Profile</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/mylistings')}><FaHouse /><span className="ml-1.5">My Listings</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/requests')}><FaMessage /><span className="ml-1.5">Requests</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/responses')}><MdOutlineReplyAll /><span className="ml-1.5">Responses</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/reservations')}><FaCalendarAlt /><span className="ml-1.5">Reservations</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={() => navigate('/savedpage')}><FontAwesomeIcon icon={faBookmark} /><span className="ml-1.5">Saved</span></button>
                <button className='flex-grow flex items-center justify-center font-semibold border-r border-white' onClick={handleOpen}><TbStarsFilled /><span className="ml-1.5">Rate Us!</span></button>
                <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle>Send Us a Review!</DialogTitle>
                <Stack spacing={2} sx={{ p: 3 }}>
                    <Rating
                        name="rating"
                        value={rating}
                        onChange={(event, newValue) => {
                            setRating(newValue);
                        }}
                    />
                    <TextareaAutosize
                        aria-label="Review"
                        placeholder="Write your review here..."
                        rowsMin={3}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        style={{ width: '100%',height: '2rem',resize:'none',paddingLeft:'5px',lineHeight:'2rem'}}
                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary">
                        Submit
                    </Button>
                </Stack>
            </Dialog>
                <button className='flex-grow flex items-center justify-center font-semibold border-white' onClick={() => navigate('/upload')}><FiUpload /><span className="ml-1.5">Add</span></button>
            </div>
        </div>

        {/* Right */}
        <div className='flex items-center rounded-full px-3 pr-1 py-1 mr-7 gap-2 shadow-sm shadow-gray-400 bg-[#003740] hover:bg-[#205861] duration-500 ease-out'>
          <IoMdMenu className='text-2xl text-[#fff]' onClick={handleDrawerOpen} />
          <Avatar style={{ width: '2rem', height: '2rem' }} src={profileBase} alt="Profile" onClick={handleDrawerOpen}>
            {(!profileBase && userData && userData.data.userName) && userData.data.userName.charAt(0).toUpperCase()}
          </Avatar>
        </div>
        <Drawer
  anchor="right"
  open={isDrawerOpen}
  onClose={handleDrawerClose}
>
  <List>
    <ListItem button style={{ borderBottom: '1px solid #003740', borderTop: '1px solid #003740' }} onClick={() => navigate('/profile')}>
      <ListItemIcon style={{ color: '#003740' }}><FaUser /></ListItemIcon>
      <ListItemText primary="Profile" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/mylistings')}>
      <ListItemIcon style={{ color: '#003740' }}><FaHouse /></ListItemIcon>
      <ListItemText primary="My Listings" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/savedpage')}>
      <ListItemIcon style={{ color: '#003740' }}><FontAwesomeIcon icon={faBookmark} /></ListItemIcon>
      <ListItemText primary="Saved" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/requests')}>
      <ListItemIcon style={{ color: '#003740' }}><FaMessage /></ListItemIcon>
      <ListItemText primary="Requests" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/responses')}>
      <ListItemIcon style={{ color: '#003740' }}><MdOutlineReplyAll /></ListItemIcon>
      <ListItemText primary="Responses" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/reservations')}>
      <ListItemIcon style={{ color: '#003740' }}><FaCalendarAlt /></ListItemIcon>
      <ListItemText primary="Reservations" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={handleOpen}>
      <ListItemIcon style={{ color: '#003740' }}><TbStarsFilled /></ListItemIcon>
      <ListItemText primary="Rate Us!" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740' }} onClick={() => navigate('/upload')}>
      <ListItemIcon style={{ color: '#003740' }}><FiUpload /></ListItemIcon>
      <ListItemText primary="Add" style={{ color: '#003740' }} />
    </ListItem>
    <ListItem button style={{ borderBottom: '1px solid #003740'}} onClick={handleSignOut} >
      <ListItemIcon style={{ color: '#003740' }}><PiSignOut /></ListItemIcon>
      <ListItemText primary="Sign Out" style={{ color: '#003740' }} />
    </ListItem>
  </List>
</Drawer>


    </div>
  )
}

export default Navbar;
