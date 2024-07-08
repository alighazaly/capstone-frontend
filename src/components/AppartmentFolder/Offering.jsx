import React, {useContext,useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import workspace from "../../Assets/images/Icons/workspace.png";
import wifi from "../../Assets/images/Icons/wifi.png";
import kitchen from "../../Assets/images/Icons/kitchen.png";
import park from "../../Assets/images/Icons/park.png";
import parkedCar from "../../Assets/images/Icons/parking.png";
import waterTank from "../../Assets/images/Icons/watercontainer.png";
import pool from "../../Assets/images/Icons/pool.png";
import hotTub from "../../Assets/images/Icons/hottub.png";
import masterBedRoom from "../../Assets/images/Icons/master bedroom.png";
import cigarettes from "../../Assets/images/Icons/ciggarete.png";
import firePlace from "../../Assets/images/Icons/fireplace.png";
import generator from "../../Assets/images/Icons/generator.png";
import elevator from "../../Assets/images/Icons/elevator.png";
import tvs from "../../Assets/images/Icons/cinema.png";
import bbqGrill from "../../Assets/images/Icons/bbqgrill.png";
import bathRoom from "../../Assets/images/Icons/bathroom.png";
import gym from "../../Assets/images/Icons/gym.png";
import bed from "../../Assets/images/Icons/bed.png";
import bedRooms from "../../Assets/images/Icons/bedroom.png";
import guard from "../../Assets/images/Icons/guard.png";
import ac from "../../Assets/images/Icons/ac.png";
import Calendar from "./Calendar";
import { UserContext } from '../UserProvider';
import toast from 'react-hot-toast';
import axios from 'axios';
import { isBefore } from 'date-fns';
import calendarImg from "../../Assets/images/Icons/booking.png";
import { FaCalendarAlt } from "react-icons/fa";


const Offering = (props) => {
  const {userData} = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedDates, setSelectedDates] = useState(null);
  const [UserId, setUserId] = useState(null);


  const isDateDisabledToday = (date) => {
    const today = new Date();
    return isBefore(date, today);
  };
  
console.log("Reserved Dates: ",props.reservedDates)
  useEffect(() => {
    if (userData) {
      setUserId(userData.data.id);
    }
  }, [userData]);
  const handleReserveClick = async () => {
    if (!userData) {
      navigate('/signin');
    } else {
      try {
        // Make a POST request to your backend API
        const response = await axios.post('https://localhost:7105/api/User/request', {
          // Pass the required info in the request body
          appartmentId: props.id,
          userId: UserId,
          dateRange: selectedDates, // Assuming selectedDates is in the required format
        });
  
        // Handle the response
        console.log('Reservation request successful:', response.data);
        // Show toast notification
        toast.success('Reservation request has been sent!');
      } catch (error) {
        // Handle errors
        console.error('Error making reservation request:', error);
        // Show error toast notification
        toast.error('Error making reservation request');
      }
    }
  };
  console.log(props.id);
  return (
    <div className='lg:w-[80%] md:w[90%] sm:w-[78%] lg:ml-[9rem] md:ml-8 sm:ml-8 border-b-2 border-gray-500 pb-3 mb-3'>
         <p className='sm:text-md md:text-lg lg:text-lg font-semibold pb-7'>You will benefit from:</p>
          <div className='infocalendar flex lg:flex-row md:flex-row sm:flex-col'>
              <div className='offering lg:w-[60%] md:w-[60%] sm:w-[100%]'>
                <div className='flex lg:flex-row md:flex-row sm:flex-col justify-between lg:gap-7 md:gap-2 sm:gap-1'>
                  <div className='left lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-between items-center'>
                    <div className='flex flex-col w-full gap-y-1 md:px-0 sm:px-6'>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={wifi} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.wifi}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={kitchen} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.kitchen}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={parkedCar} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.parking}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={pool} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.pool}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={waterTank} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.waterContainers}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={hotTub} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.hotTube}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={masterBedRoom} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.masterBedrooms}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={cigarettes} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.smokingAllowed}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={ac} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.airConditionner}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={firePlace} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.indoorFirePlace}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={tvs} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.tvs}</p>
                      </div>
                    </div>
                  </div>
                  <div className='right lg:w-[50%] md:w-[50%] sm:w-[100%] flex justify-between items-center mr-5 pb-8'>
                  <div className='flex flex-col w-full gap-y-1 md:px-0 sm:px-6'>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={workspace} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.workSpace}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={park} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.garden}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={generator} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.generator}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={elevator} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.elevator}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={gym} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.gym}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={bbqGrill} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.bbqGrill}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={bathRoom} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.numberOfBathrooms}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={bed} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.numberOfBeds}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={bedRooms} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.numberOfBedrooms}</p>
                      </div>
                      <div className='flex justify-between items-center w-[100%]'>
                        <img src={guard} alt="Wifi Icon" className='lg:w-[35px] md:w-[30px] sm:w-[20px] h-auto mr-2' />
                        <p className='text-black font-semibold lg:text-md md:text-md sm:text-sm'>{props.guard}</p>
                      </div>
                    </div>
                  </div>
                </div>  
              </div>
              <div className='calendar bg-[#f0f0f0] lg:w-[40%] md:w-[40%] sm:w-[100%]'>
                  <div className="bg-[#f0f0f0] flex justify-center align-middle">
                      <div className='flex flex-col'>
                        <Calendar onDatesSelect={setSelectedDates} ReservedDates = {props.reservedDates}/>
                        <div className='bg-[#003740] flex justify-center items-center h-8 rounded-sm cursor-pointer' onClick={() =>handleReserveClick()}>
                          <button className='text-[#fff] font-semibold'>Reserve</button>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Offering