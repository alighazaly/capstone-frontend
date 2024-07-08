import React, { useState,useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Book from "../../../../../Assets/images/Bookpic.jpeg";
import DescriptionEdit from './DescriptionEdit';
import TitleEdit from './TitleEdit';
import Offerings from './Offerings';
import Essentiels from './Essentiels';
import toast from 'react-hot-toast';
import axios from 'axios';
import { UserContext } from '../../../../UserProvider';
import { TypeOfPlace } from './TypeOfPlace';
import { FaHouseCircleCheck } from "react-icons/fa6";
import { BsFillHouseExclamationFill } from "react-icons/bs";



const EditForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userData } = useContext(UserContext);
  // Initialize formData with state if it's defined, otherwise use an empty object
  const [formData, setFormData] = useState(state || {});

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  const handleSubmit = async (event) => {
    const url = `https://localhost:7105/api/User/editApartment?id=${formData.id}`;
    event.preventDefault();
  
    const data = {
      Title: formData.title,
      Description: formData.description,
      Price: formData.Price,
      NumberOfBedrooms: formData.NumberOfBedrooms,
      NumberOfBathrooms: formData.NumberOfBathrooms,
      NumberOfBeds: formData.NumberOfBeds,
      Elevator: formData.elevator,
      Generator: formData.generator,
      Area: formData.Area,
      MasterBedrooms: formData.MasterBedrooms,
      Garden: formData.garden,
      WaterContainers: formData.WaterContainers,
      Pool: formData.pool,
      Guard: formData.guard,
      Kitchen: formData.kitchen,
      BbqGrill: formData.bbqGrill,
      HotTube: formData.hotTub,
      Wifi: formData.wifi,
      WorkSpace: formData.workSpace,
      SmokingAllowed: formData.cigarette,
      Gym: formData.gym,
      Tvs: formData.Tvs,
      Parking: formData.Parking,
      IndoorFirePlace: formData.firePlace,
      airConditionner: formData.ac,
      TypeOfPlace: formData.typeOfPlace
    }
    console.log("data",data);
    const form = new FormData();
    form.append("Title", formData.title);
    form.append("Description", formData.description);
    form.append("NumberOfBedrooms", data.NumberOfBedrooms);
    form.append("NumberOfBathrooms", data.NumberOfBathrooms);
    form.append("NumberOfBeds",data.NumberOfBeds);
    form.append('Elevator', formData.elevator);
    form.append('Generator', formData.generator);
    form.append('Area', formData.Area);
    form.append('MasterBedrooms', data.MasterBedrooms);
    form.append('Garden', formData.garden);
    form.append('Guard', formData.guard);
    form.append('Kitchen', formData.kitchen);
    form.append('BbqGrill', formData.bbqGrill);
    form.append('HotTube', data.HotTube);
    form.append('Wifi', formData.wifi);
    form.append('WorkSpace', formData.workSpace);
    form.append('Gym', formData.gym);
    form.append('Tvs', data.Tvs);
    form.append('Parking', data.Parking);
    form.append("airConditionner",formData.ac);
    form.append("TypeOfPlace",formData.typeOfPlace);
    form.append("Pool", formData.pool);
    form.append("IndoorFirePlace",data.IndoorFirePlace);
    form.append("SmokingAllowed",data.SmokingAllowed);
    form.append("WaterContainers",data.WaterContainers);
    form.append("Price",data.Price);
    try{
      const response = await axios.put(url,form);
      toast.success(response.data.statusMessage, {
        icon: <FaHouseCircleCheck />,
        style: {
          backgroundColor: "#006400", // Dark green background
          color: "#fff", // White text color
        }
      });
      navigate("/");
    }catch(error){
      console.error('Submission error:', error.response.data);
      toast.error("Failed to update listing", {
        icon: <BsFillHouseExclamationFill />
        ,
        style: {
          backgroundColor: "#8B0000", // Dark red background
          color: "#fff", // White text color
        }
      });
    }
  };
  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <TitleEdit formData={formData} setFormData={setFormData} />  

      case 2:
        return <DescriptionEdit formData={formData} setFormData={setFormData} />;

      case 3:
        return <Offerings formData={formData} setFormData={setFormData} />
        
      case 4:
        return <Essentiels formData={formData} setFormData={setFormData} />
      
      case 5:
        return <TypeOfPlace formData={formData} setFormData={setFormData}/>
      default:
        return null;
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${Book})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundColor: '#f1f5f9',
      minHeight: '100vh',
    }}>
      {renderStepForm()}
      <footer className="fixed bottom-0 left-0 w-full">
        <div className="container mx-auto py-4 flex justify-between">
          {/* Back button (hide on first step) */}
          {currentStep > 1 && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 py-[5px] bg-gray-400 text-[#003740] mb-4 lg:text-md md:text-md sm:text-xs sm:ml-5 md:ml-2 lg:ml-2" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
          )}
          {/* Back to Home button (show on first step) */}
          {currentStep === 1 && (
            <button className="rounded-md lg:px-4 md:px-3 sm:px-2 py-[5px] bg-gray-400 text-[#003740] mb-4 lg:text-md md:text-md sm:text-xs sm:ml-5 md:ml-2 lg:ml-2" onClick={() => navigate('/mylistings')}>Back to Home</button>
          )}
          {/* Next button (hide on last step) */}
          {currentStep < totalSteps && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 bg-white text-[#003740] mb-4 lg:text-md md:text-md sm:text-sm sm:mr-5 md:mr-2 lg:mr-2 font-semibold" onClick={() => setCurrentStep(currentStep + 1)}>Next</button>
          )}
          {/* Submit button (show on last step) */}
          {currentStep === totalSteps && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 bg-white text-[#003740] mb-4 lg:text-md md:text-md sm:text-sm sm:mr-5 md:mr-2 lg:mr-2 font-semibold" onClick={handleSubmit}>Update</button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default EditForm;
