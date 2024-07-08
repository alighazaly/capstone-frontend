import React, { useState } from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsFillHouseFill, BsSearch, BsFilterRight } from "react-icons/bs";
import { Dialog, DialogActions, DialogContent,DialogContentText, DialogTitle, Stack, TextField, Checkbox, FormControlLabel, FormGroup, Button,FormControl,RadioGroup,Radio, Typography } from '@mui/material'


const SearchBar = ({ onSelectCategory, onApplyFilters,onSearchChange,onSearchIconClick}) => {
  const [open, setOpen] = useState(false);
  const [selectedOption,setSelectedOption] = useState('');
  const [openLocation, setOpenLocation] = useState(false);
  const [search,setSearch] = useState('');
  const initialApartmentsState =  {
    country: '',
      city: '',
      price: 0,
      type: '',
      area: '',
      workSpace: null,
      indoorFireplace: null,
      smokingAllowed: null,
      gym: null,
      tvs: 0,
      parking: 0,
      numberOfBedrooms: 0,
      elevator: null,
      numberOfBathrooms: 0,
      generator: null,
      masterBedrooms: 0,
      garden: null,
      waterContainer: 0,
      pool: null,
      securityGuard: null,
      numberOfBeds: 0,
      kitchen: null,
      bbqGrill: null,
      hotTub: null,
      wifi: null,
      guard: null,
      airConditioner: null,
  };
  const [apartments, setApartments] = useState([
    {
      country: '',
      city: '',
      price: 0,
      type: '',
      area: '',
      workSpace: null,
      indoorFireplace: null,
      smokingAllowed: null,
      gym: null,
      tvs: 0,
      parking: 0,
      numberOfBedrooms: 0,
      elevator: null,
      numberOfBathrooms: 0,
      generator: null,
      masterBedrooms: 0,
      garden: null,
      waterContainer: 0,
      pool: null,
      securityGuard: null,
      numberOfBeds: 0,
      kitchen: null,
      bbqGrill: null,
      hotTub: null,
      wifi: null,
      guard: null,
      airConditioner: null,
    }]);



  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  
  const handleOpenLocation = () => {
    setOpenLocation(true);
  };

  const handleCloseLocation = () => {
    setOpenLocation(false);
  };

  const handleCityChange = (event) => {
    const { value } = event.target;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setApartments(prevState => ({
      ...prevState,
      city: capitalizedValue,
    }));
    console.log("City Change:", capitalizedValue);
  };
  

  const handleCountryChange = (event) => {
    const { value } = event.target;
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
    setApartments(prevState => ({
      ...prevState,
      country: capitalizedValue,
    }));
    console.log("Country Change:", capitalizedValue);
  };
  

  const handleSearchValueChange = (event) => {
    const { value } = event.target;
    setSearch(value);
    onSearchChange(value);
  };
  

  const handleOptionChange = (event) => {
    const { value } = event.target;
    setSelectedOption(value);
    setApartments(prevState => ({
      ...prevState,
      type: prevState.type === value ? null : value
    }));
    console.log("Option Change:", value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setApartments(prevApartments => ({
      ...prevApartments,
      [name]: checked ? 'yes' : ''
    }));
    console.log("Checkbox Change:", name, checked);
  };

  const handleTextFieldChange = (event, fieldName) => {
    const { value } = event.target;
    setApartments(prevState => ({
      ...prevState,
      [fieldName]: value === '' ? '' : parseInt(value) || 0
    }));
    console.log("Text Field Change:", fieldName, value);
  };

  
  const handleReset = () => {
    setApartments(initialApartmentsState);
    };



  const handleApplyFilters = (apartments) => {
    const filters = {
      city: apartments.city,
      country: apartments.country,
      numberOfBathrooms: apartments.numberOfBathrooms,
      numberOfBedrooms: apartments.numberOfBedrooms,
      numberOfBeds: apartments.numberOfBeds,
      tvs: apartments.tvs,
      waterContainers: apartments.waterContainers,
      masterBedrooms: apartments.masterBedrooms,
      parking: apartments.parking,
      price: apartments.price,
      wifi: apartments.wifi, 
      kitchen: apartments.kitchen, 
      airConditioner: apartments.airConditioner,
      workSpace: apartments.workSpace, 
      pool: apartments.pool,
      hotTub: apartments.hotTub, // Corrected property name
      gym: apartments.gym,
      bbqGrill: apartments.bbqGrill, 
      indoorFireplace: apartments.indoorFireplace, // Corrected property name
      smokingAllowed: apartments.smokingAllowed, // Added missing property
      type: apartments.type, 
      elevator: apartments.elevator,
      garden: apartments.garden,
      generator: apartments.generator
    };
    console.log("Filters object:", filters); 
    onApplyFilters(filters);
  };
  
  const handleSearchClick = () => {
    onSearchIconClick();
  }
  
  const handleCategorySelect = (category) => {
    onSelectCategory(null);
    const filters = { category: null }; // Create an object with category filter
    onApplyFilters(filters);
  }

  return (
    <div className='flex justify-center items-center mt-5'>
      <div className='flex lg:flex-row md:flex-row sm:flex-col relative justify-between items-center shadow-sm lg:rounded-full md:rounded-full sm:rounded-none w-full lg:w-[50rem] py-1 shadow-gray-400 bg-[#003740]'>
        <button className='navbar-buttons font-semibold lg:border-r md:border-r border-white 
        :py-1 px-2 lg:px-4 flex-grow cursor-pointer 
        text-sm lg:text-base' onClick={handleOpenLocation}><FaLocationDot className="mr-1 lg:mr-2" />Search Destination</button>
         <Dialog
        open={openLocation}
        onClose={handleCloseLocation}
        fullWidth
      >
        <DialogTitle>Search by location</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter a location:
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="location"
            name="location"
            label="City:"
            type="text"
            value={apartments.city}
            onChange={handleCityChange}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="location"
            name="location"
            label="Country:"
            type="text"
            value={apartments.country}
            onChange={handleCountryChange}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLocation}>Cancel</Button>
          <Button onClick={() => { handleCloseLocation(); handleApplyFilters(apartments); }}>Search</Button>
        </DialogActions>
      </Dialog>
        <button className='navbar-buttons font-semibold lg:border-r md:border-r border-white sm:mr- md:mr-0 lg:mr-0 sm:py-1 sm:pr-10 px-2 lg:px-4 flex-grow cursor-pointer text-sm lg:text-base'
        onClick={handleCategorySelect}
        ><BsFillHouseFill className="mr-1 lg:mr-2" />All Listings</button>
        <div className="flex items-center sm:ml-14 md:ml-0 lg:ml-0 px-2 lg:px-4 sm:py-1 flex-grow">
          <input type='search' id="searchInput" placeholder='Search by keyword...'onChange={handleSearchValueChange} value={search} className='rounded py-1 px-1 lg:px-2 bg-[#fff] flex-grow text-sm lg:text-base'></input>
          <label htmlFor="searchInput" className="text-white ml-1 lg:ml-2 font-bold text-base lg:text-xl cursor-pointer">
            <BsSearch onClick={handleSearchClick} />
          </label>
          <button onClick={handleOpen}><BsFilterRight className="text-white ml-1 lg:ml-2 font-bold text-lg lg:text-2xl" /></button>
          <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle style={{ borderBottom: '1px solid #00000' }}>Preferences</DialogTitle>
            <DialogContent>
              <Stack spacing={2} margin={2}>
                <TextField         InputLabelProps={{ shrink: true }} label="Minimum Number of Bedrooms" value={apartments.numberOfBedrooms} variant="outlined" type="number"  onChange={(e) => handleTextFieldChange(e, 'numberOfBedrooms')}/>
                <TextField  InputLabelProps={{ shrink: true }} label="Minimum Number of Master Bedrooms" value={apartments.masterBedrooms} variant="outlined" type="number" onChange={(e) => handleTextFieldChange(e, 'masterBedrooms')}/>
                <TextField  InputLabelProps={{ shrink: true }} label="Minimum Number of Beds" value={apartments.numberOfBeds} variant="outlined" type="number"  onChange={(e) => handleTextFieldChange(e, 'numberOfBeds')}/>
                <TextField  InputLabelProps={{ shrink: true }} label="Minimum Number of Tvs" value={apartments.tvs} variant="outlined" type="number" onChange={(e) => handleTextFieldChange(e, 'tvs')}/>
                <TextField  InputLabelProps={{ shrink: true }} label="Minimum Number of Water Containers" value={apartments.waterContainer} variant="outlined" type="number" onChange={(e) => handleTextFieldChange(e, 'waterContainer')}/>
                <TextField  InputLabelProps={{ shrink: true }}label="Minimum Number of Parkings" value={apartments.parking} variant="outlined" type="number" onChange={(e) => handleTextFieldChange(e, 'parking')}/>
                <TextField  InputLabelProps={{ shrink: true }} label="Maximum Price" value={apartments.price} variant="outlined" type="number" onChange={(e) => handleTextFieldChange(e, 'price')}/>
                <Typography variant="h6" style={{ fontWeight: 'bold' }} >
                  Check Essentials:
                </Typography>
                <FormGroup>
                  <FormControlLabel control={<Checkbox checked={apartments.wifi === 'yes'} onChange={handleCheckboxChange} />} label="WiFi" name='wifi' />
                  <FormControlLabel control={<Checkbox checked={apartments.kitchen === 'yes'} onChange={handleCheckboxChange}/>} label="Kitchen" name='kitchen' />
                  <FormControlLabel control={<Checkbox checked={apartments.airConditioner === 'yes'} onChange={handleCheckboxChange}/>} label="Air Conditioner" name='airConditioner' />
                  <FormControlLabel control={<Checkbox checked={apartments.workSpace === 'yes'} onChange={handleCheckboxChange}/>} label="Dedicated Workspace" name='workSpace'/>
                  <FormControlLabel control={<Checkbox checked={apartments.pool === 'yes'} onChange={handleCheckboxChange}/>} label="Pool" name='pool'/>
                  <FormControlLabel control={<Checkbox checked={apartments.hotTub === 'yes'} onChange={handleCheckboxChange}/>} label="Hot Tub" name='hotTub'/>
                  <FormControlLabel control={<Checkbox checked={apartments.gym === 'yes'} onChange={handleCheckboxChange}/>} label="Gym" name='gym'/>
                  <FormControlLabel control={<Checkbox checked={apartments.bbqGrill === 'yes'} onChange={handleCheckboxChange}/>} label="BBQ grill" name='bbqGrill'/>
                  <FormControlLabel control={<Checkbox checked={apartments.indoorFireplace === 'yes'} onChange={handleCheckboxChange}/>} label="Indoor Fireplace" name='indoorFireplace'/>
                  <FormControlLabel control={<Checkbox checked={apartments.elevator === 'yes'} onChange={handleCheckboxChange}/>} label="Elevator" name='elevator'/>
                  <FormControlLabel control={<Checkbox checked={apartments.generator === 'yes'} onChange={handleCheckboxChange}/>} label="Generator" name='generator'/>
                  <FormControlLabel control={<Checkbox checked={apartments.garden === 'yes'} onChange={handleCheckboxChange}/>} label="Garden" name='garden'/>
                  <FormControlLabel control={<Checkbox checked={apartments.smokingAllowed === 'yes'} onChange={handleCheckboxChange}/>} label="Smoking Allowed" name='smokingAllowed'/>
                  <FormControl>
                  <Typography variant="h6" style={{ fontWeight: 'bold' }} gutterBottom >
                      Type of place:
                  </Typography>
                  <RadioGroup value={apartments.type} onChange={handleOptionChange}>
                    <FormControlLabel value="Whole Place" control={<Radio checked={apartments.type==="Whole Place"}/>} label="Whole Place" />
                    <FormControlLabel value="Shared Room" control={<Radio checked={apartments.type==="Shared Room"}/>} label="Shared Room" />
                    <FormControlLabel value="Private Room" control={<Radio checked={apartments.type==="Private Room"}/>} label="Private Room" />
                  </RadioGroup>
                </FormControl>
                </FormGroup>
              </Stack>
            </DialogContent>
            <DialogActions  className="sm:mt-0 sm:mb-0 sm:pb-50 md:mt-0 md:mb-2 lg:mt-0 lg:mb-2">
            <Button onClick={handleReset} variant="contained" style={{ backgroundColor: '#ff0000', color: 'white', borderRadius: '5px', marginLeft: '10px' }}>Reset</Button>
              <Button onClick={handleClose} variant="contained" style={{ backgroundColor: '#8B0000', color: 'white', borderRadius: '5px', paddingLeft: '16px', paddingRight: '16px' }}>Close</Button>
              <Button onClick={() => { handleClose(); handleApplyFilters(apartments); }} variant="contained" style={{ backgroundColor: '#003740', color: 'white', borderRadius: '5px', paddingLeft: '16px', paddingRight: '16px' }}>Apply Filters</Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;
