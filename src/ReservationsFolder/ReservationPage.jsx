import React, { useState, useEffect,useContext } from 'react';
import MainNavbar from '../components/HomePage/NavbarFolder/MainNavbar';
import Footer from '../components/HomePage/FooterFolder/Footer';
import Reservations from './Reservations';
import { UserContext } from '../components/UserProvider';

const ReservationPage = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userData } = useContext(UserContext);

  async function fetchReservations() {
    try {
      setLoading(true);
      const userId = userData?.data?.id;
      if (!userId) {
        return;
      }
      const response = await fetch(`https://localhost:7105/api/User/GetUserReservations?userId=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch reservations');
      }
      const ResponseData = await response.json();
      setReservations(ResponseData.data);
      console.log("Reservations: ",reservations);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (userData) {
      fetchReservations();
    }
  }, [userData]);

  return (
    <div>
      <MainNavbar />
      <Reservations reservations={reservations} />
      <Footer />
    </div>
  );
};

export default ReservationPage;
