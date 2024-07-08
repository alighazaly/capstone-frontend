import React from 'react';
import MyListings from './MyListings';
import Footer from "../../../HomePage/FooterFolder/Footer";
import MainNavbar from '../MainNavbar';

const ListingsPage = () => {
  return (
    <div>
        <MainNavbar />
        <MyListings />
        <Footer />
    </div>
  )
}

export default ListingsPage