import React from 'react';
import Footer from "../../FooterFolder/Footer";
import SavedListings from './SavedListings';
import MainNavbar from '../MainNavbar';


const SavedPage = () => {
  return (
    <div>
      <MainNavbar />
      <SavedListings />
      <Footer />
    </div>
  )
}

export default SavedPage