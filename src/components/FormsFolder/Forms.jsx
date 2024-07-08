import React, { useState,useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from './StepSeven';
import StepNine from './StepNine';
import StepTen from './StepTen';
import StepEight from './StepEight';
import { UserContext } from '../UserProvider';
import toast from 'react-hot-toast';
import { MdError } from "react-icons/md";
import './UploadLoaderStyle.css'


// Import other step form components as needed

const Forms = () => {
  const navigate = useNavigate();
  const { userData } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false); // State to track uploading process
  const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('UploadData')) ||{
    title:'',
    city:'',
    country : '',
    category: '',
    images : [null,null,null,null,null],
    price: 0,
    uploadedDate:'',
    type:'',
    area: 0,
    workSpace:'',
    firePlace:'',
    smockingAllowed:'',
    gym: '',
    tvs:'',
    parking:'',
    numberOfBedrooms:0,
    elevator:'',
    numberOfBathrooms:0,
    generator:'',
    masterBedrooms:0,
    garden:'',
    waterContainer:0,
    pool:'',
    securityguard:'',
    numberOfBeds:'',
    kitchen:'',
    bbqGrill:'',
    hotTub:'',
    wifi:'',
    guard:'',
    airConditionner:'',
    description:'',
    location:[0, 0],
    OwnerId: userData.data.id,
    ac: '',

  }); // Initialize form data state
  const [currentStep, setCurrentStep] = useState(1); // Initialize current step state
  const totalSteps = 10; // Total number of steps

  useEffect(() => {
    // Save form data to local storage whenever it changes
    localStorage.setItem('UploadData', JSON.stringify(formData));
  }, [formData]);
  console.log(JSON.stringify(formData.imagesFile));
  function hasEmptyObjectsOrNull(array) {
    return array.some(obj => obj === null || Object.keys(obj).length === 0);
}



  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsUploading(true); // Set uploading state to true

    const url = `https://localhost:7105/api/User/UploadAppartment`;
    const data = {
      Title: formData.title,
      Description: formData.description,
      Price: formData.price,
      NumberOfBedrooms: formData.numberOfBedrooms,
      NumberOfBathrooms: formData.numberOfBathrooms,
      NumberOfBeds: formData.numberOfBeds,
      Elevator: formData.elevator,
      Generator: formData.generator,
      Area: formData.area,
      MasterBedrooms: formData.masterBedrooms,
      Garden: formData.garden,
      WaterContainers: formData.waterContainer,
      Pool: formData.pool,
      Guard: formData.guard,
      Kitchen: formData.kitchen,
      BbqGrill: formData.bbqGrill,
      HotTube: formData.hotTub,
      Wifi: formData.wifi,
      WorkSpace: formData.workSpace,
      IndoorFirePlace: formData.firePlace,
      SmokingAllowed: formData.smockingAllowed,
      Gym: formData.gym,
      Tvs: formData.tvs,
      Parking: formData.parking,
      IndoorFirePlace: formData.firePlace,
      OwnerId: formData.OwnerId,
      CategoryName: formData.category,
      Longitude: formData.location[0],
      Latitude: formData.location[1],
      City: formData.city,
      Country: formData.country,
      images: formData.imagesFile,
      airConditionner: formData.ac,
      TypeOfPlace: formData.type
    };
  
    console.log('User Id:', userData.data.id);
    console.log("Images to be submitted: ", data.images)
    const form = new FormData();
   // Append all form fields to FormData
   form.append('Title', formData.title);
   form.append('Description', formData.description);
   form.append('Price', formData.price);
   form.append('NumberOfBedrooms', formData.numberOfBedrooms);
   form.append('NumberOfBathrooms', formData.numberOfBathrooms);
   form.append('NumberOfBeds', formData.numberOfBeds);
   form.append('Elevator', formData.elevator);
   form.append('Generator', formData.generator);
   form.append('Area', formData.area);
   form.append('MasterBedrooms', formData.masterBedrooms);
   form.append('Garden', formData.garden);
   form.append('WaterContainers', formData.waterContainer);
   form.append('Pool', formData.pool);
   form.append('Guard', formData.guard);
   form.append('Kitchen', formData.kitchen);
   form.append('BbqGrill', formData.bbqGrill);
   form.append('HotTube', formData.hotTub);
   form.append('Wifi', formData.wifi);
   form.append('WorkSpace', formData.workSpace);
   form.append('IndoorFirePlace', formData.firePlace);
   form.append('SmokingAllowed', formData.smockingAllowed);
   form.append('Gym', formData.gym);
   form.append('Tvs', formData.tvs);
   form.append('Parking', formData.parking);
   form.append('FirePlace', formData.firePlace);
   form.append('OwnerId', formData.OwnerId);
   form.append('CategoryName', formData.category);
   form.append('Longitude', formData.location[0]);
   form.append('Latitude', formData.location[1]);
   form.append('City', formData.city);
   form.append('Country', formData.country);
   form.append("airConditionner",formData.ac);
   form.append("TypeOfPlace",formData.type);
 
   // Append each image individually
   form.append('images', formData.images[0]);
   form.append('images', formData.images[1]);
   form.append('images', formData.images[2]);
   form.append('images', formData.images[3]);
   form.append('images', formData.images[4]);

   for (let i = 0; i < formData.imagesFile.length; i++) {
    const image = formData.imagesFile[i];
    form.append('images', image);  // Append image file from formData.imagesFile
  }

    try {
      const response = await axios.post(url, form);
      console.log('Submission response:', response.form);
      if(response.data.statusCode === 200){
        toast.success(response.data.statusMessage);
        navigate("/");
        localStorage.removeItem('UploadData');
        localStorage.removeItem('droppedImageCount');  
        localStorage.removeItem('uploadedImages');
        localStorage.removeItem('uploadedImagesFile')
      }
      // Handle success, e.g., navigate to another page or show success message
      // navigate('/success');
    } catch (error) {
      console.error('Submission error:', error.response.data);

      // Handle error, e.g., show error message to the user
      const errors = error.response.data.errors;

      // Loop through the errors object to access each field and its corresponding error message
      for (const field in errors) {
        console.log(`Field: ${field}`);
        console.log(`Error message: ${errors[field]}`);
      }
    }finally {
      setIsUploading(false); // Set uploading state to false after upload completes or fails
    }

  };

  function validateStep() {
    let isValid = true;
    let errorMessage = '';  // Initialize an error message variable
    switch(currentStep) {
        case 2:
            if (formData.category.trim() === '') {
                isValid = false;
                errorMessage = 'Please select a category';
            }
            break;
        case 4:
          if (formData.type.trim() === '') {
            isValid = false;
            errorMessage = 'Please choose an option';
          }
        break;
        case 5:
          if (formData.parking === 0 || formData.waterContainer === 0 || formData.numberOfBathrooms === 0 || formData.numberOfBeds === 0 || formData.numberOfBedrooms === 0 || formData.area === 0 || formData.price === 0) {
            isValid = false;
            errorMessage = 'Please fill all the fields';
          }
        break;
        case 7:
          if (formData.city.trim() === '' || formData.country.trim() === '') {
            isValid = false;
            errorMessage = 'Please fill all the fields';
        }
        break;
        case 8:
          const droppedImageCount = localStorage.getItem('droppedImageCount');
          if (!formData.imagesFile || Object.keys(formData.imagesFile).length !== 5 || Object.values(formData.imagesFile).some(image => !image) || (droppedImageCount !== '5')) {
            isValid = false;
            errorMessage = 'Please upload all 5 images';
          }
          break;
        case 9:
            if (formData.title.trim() === '') {
                isValid = false;
                errorMessage = 'Please enter a title';
            }
            break;
        // Add cases for other steps with specific validation rules and messages
        default:
            isValid = true;  // Consider unknown steps as invalid
            break;
    }

    if (!isValid) {
        toast(errorMessage,  { icon: <MdError />, style: { backgroundColor: "#fff" } });  // Use the specific error message
    }

    return isValid;
}


const handleNext = () => {
  // Skip validation if it's the first step
  if (currentStep === 1 || validateStep()) {
      if (currentStep < Object.keys(formData).length) {
          setCurrentStep(currentStep + 1);
      } else {
          // Submit or further processing
          console.log("Form data:", formData);
      }
  }
};

  
  // Function to render step form component based on current step
  const renderStepForm = () => {
    switch (currentStep) {
      case 1:
        return <StepOne/>;

      case 2:
       return <StepTwo formData={formData} setFormData={setFormData} />

      case 3:
        return <StepThree formData={formData} setFormData={setFormData} />

      case 4:
        return <StepFour formData={formData} setFormData={setFormData} />
        
      case 5:
        return <StepFive formData={formData} setFormData={setFormData} />  
        
      case 6:
        return <StepSix formData={formData} setFormData={setFormData} />

      case 7:
        return <StepSeven formData={formData} setFormData={setFormData} />
     
      case 8:
        return <StepEight formData={formData} setFormData={setFormData} />  

      case 9:
        return <StepNine formData={formData} setFormData={setFormData} />

      case 10:
        return <StepTen formData={formData} setFormData={setFormData} />
      
    
      default:  
      return null;
    }
  };

  return (
    <div>
    {/* Loading state */}
    {isUploading && (
      <div className='loader-container'>
      <div className="semicircle">
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    )}
<div style={{ 
      backgroundImage: `linear-gradient(116deg, rgba(232, 232, 232, 0.03) 0%, rgba(232, 232, 232, 0.03) 10%,rgba(14, 14, 14, 0.03) 10%, rgba(14, 14, 14, 0.03) 66%,rgba(232, 232, 232, 0.03) 66%, rgba(232, 232, 232, 0.03) 72%, rgba(44, 44, 44, 0.03) 72%, rgba(44, 44, 44, 0.03) 81%,rgba(51, 51, 51, 0.03) 81%, rgba(51, 51, 51, 0.03) 100%),linear-gradient(109deg, rgba(155, 155, 155, 0.03) 0%, rgba(155, 155, 155, 0.03) 23%,rgba(30, 30, 30, 0.03) 23%, rgba(30, 30, 30, 0.03) 63%,rgba(124, 124, 124, 0.03) 63%, rgba(124, 124, 124, 0.03) 73%, rgba(195, 195, 195, 0.03) 73%, rgba(195, 195, 195, 0.03) 84%,rgba(187, 187, 187, 0.03) 84%, rgba(187, 187, 187, 0.03) 100%),linear-gradient(79deg, rgba(254, 254, 254, 0.03) 0%, rgba(254, 254, 254, 0.03) 27%,rgba(180, 180, 180, 0.03) 27%, rgba(180, 180, 180, 0.03) 33%,rgba(167, 167, 167, 0.03) 33%, rgba(167, 167, 167, 0.03) 34%, rgba(68, 68, 68, 0.03) 34%, rgba(68, 68, 68, 0.03) 63%, rgba(171, 171, 171, 0.03) 63%, rgba(171, 171, 171, 0.03) 100%),linear-gradient(109deg, rgba(71, 71, 71, 0.03) 0%, rgba(71, 71, 71, 0.03) 3%, rgba(97, 97, 97, 0.03) 3%, rgba(97, 97, 97, 0.03) 40%, rgba(40, 40, 40, 0.03) 40%, rgba(40, 40, 40, 0.03) 55%, rgba(5, 5, 5, 0.03) 55%, rgba(5, 5, 5, 0.03) 73%, rgba(242, 242, 242, 0.03) 73%, rgba(242, 242, 242, 0.03) 100%),linear-gradient(271deg, rgba(70, 70, 70, 0.03) 0%, rgba(70, 70, 70, 0.03) 11%,rgba(178, 178, 178, 0.03) 11%, rgba(178, 178, 178, 0.03) 23%,rgba(28, 28, 28, 0.03) 23%, rgba(28, 28, 28, 0.03) 72%,rgba(152, 152, 152, 0.03) 72%, rgba(152, 152, 152, 0.03) 86%, rgba(43, 43, 43, 0.03) 86%, rgba(43, 43, 43, 0.03) 100%),linear-gradient(90deg, rgb(0,55,64),rgb(1, 1, 1))`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100vw',
      height: '100vh'
    }}>      {/* Render step form component */}
      {renderStepForm()}

      {/* Navigation buttons */}
      {/* For each step, include Next and Back buttons */}
      <footer className="fixed bottom-0 left-0 w-full">
        <div className="container mx-auto py-4 flex justify-between">
          {/* Back button (hide on first step) */}
          {currentStep > 1 && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 py-[5px] bg-gray-400 text-[#003740] mb-4 lg:text-md md:text-md sm:text-xs sm:ml-5 md:ml-2 lg:ml-2" onClick={() => setCurrentStep(currentStep - 1)}>Back</button>
          )}
          {/* Back to Home button (show on first step) */}
          {currentStep === 1 && (
            <button className="rounded-md lg:px-4 md:px-3 sm:px-2 py-[5px] bg-gray-400 text-[#003740] mb-4 lg:text-md md:text-md sm:text-xs sm:ml-5 md:ml-2 lg:ml-2" onClick={() => navigate('/')}>Back to Home</button>
          )}
          {/* Next button (hide on last step) */}
          {currentStep < totalSteps && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 bg-white text-[#003740] mb-4 lg:text-md md:text-md sm:text-sm sm:mr-5 md:mr-2 lg:mr-2 font-semibold" onClick={handleNext}>Next</button>
          )}
          {/* Submit button (show on last step) */}
          {currentStep === totalSteps && (
            <button className="rounded-md lg:px-10 md:px-8 sm:px-7 bg-white text-[#003740] mb-4 lg:text-md md:text-md sm:text-sm sm:mr-5 md:mr-2 lg:mr-2 font-semibold" onClick={handleSubmit}>Upload</button>
          )}
        </div>
      </footer>
    </div>
    </div>
  );
};

export default Forms;
