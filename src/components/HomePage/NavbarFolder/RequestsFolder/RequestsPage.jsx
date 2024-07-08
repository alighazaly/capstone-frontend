import React,{useState,useEffect,useContext} from 'react'
import MainNavbar from '../MainNavbar'
import Footer from '../../FooterFolder/Footer'
import Requests from './Requests.jsx'
import { UserContext } from '../../../UserProvider.js'

const RequestsPage = () => {
    const [requests, setRequests] = useState([]);
    const { userData } = useContext(UserContext);


    async function fetchData() {
        try {
          const userId = userData?.data?.id;
          if (!userId) {
            // userId is null, do something (e.g., redirect to login page)
            return;
          }
          const response = await fetch(`https://localhost:7105/api/User/GetUserReservationRequests?userId=${userId}`);
          const responseData = await response.json();
          // Access the 'data' property to get the array of requests
          const data = responseData.data;
          setRequests(data);
          console.log(data);
        } catch (error) {
          // Handle errors if needed
        }
      }
      
      const handleRefresh = () => {
        fetchData();
      }
      
      useEffect(() => {
        if (userData) {
          fetchData(); // Fetch apartments when userData is available
        }
      }, [userData]);
      
  return (
    <div>
        <MainNavbar />
        <Requests requests = {requests} handleRefresh={handleRefresh}/>
        <Footer />
    </div>
  )
}

export default RequestsPage