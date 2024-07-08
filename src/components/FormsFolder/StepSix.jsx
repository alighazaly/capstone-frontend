import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'; // Import Geocoder CSS
import "./StepSixStyle.css";
import MapIcon from "../../Assets/images/Icons/MapIcon.png";
import { Icon } from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

const StepSix = ({ formData, setFormData }) => {
  const [position, setPosition] = useState(null); // State for the marker position

  const customIcon = new Icon({
    iconUrl: MapIcon,
    iconSize: [38, 38]
  });

  // Function to handle setting the current location
  const handleSetCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPosition = [position.coords.latitude, position.coords.longitude];
        setPosition(newPosition);
        if (newPosition) {
          console.log("New Location:", newPosition);
        }
        

        // Update form data with current location
        setFormData({ ...formData, location: newPosition });
      });
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    handleSetCurrentLocation();
  }, []); // Only runs on initial mount

  const SearchControl = () => {
    const map = useMap();
  
    useEffect(() => {
      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        autoClose: true,
        retainZoomLevel: false,
        animateZoom: true,
        searchLabel: 'Enter address',
        keepResult: true,
        marker: {
          icon: customIcon, // Set custom icon for the search location marker
        },
      });
      map.addControl(searchControl);
  
      // Listen for the 'moveend' event on the map to capture the new center coordinates
      map.on('moveend', () => {
        const newCenter = map.getCenter();
        setPosition([newCenter.lat, newCenter.lng]);
        console.log("New Location:", [newCenter.lat, newCenter.lng]);
  
        // Update form data with the selected location
        setFormData({ ...formData, location: [newCenter.lat, newCenter.lng] });
      });
  
      return () => {
        map.removeControl(searchControl);
      };
    }, [map]);
  
    return null;
  };
  

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col justify-center items-center mb-5 w-[80%]'>
        <p className='text-center lg:text-xl md:text-md sm:text-sm text-white font-semibold mb-5'>Where's your place located?</p>
        {/* Map container */}
        <MapContainer center={position || [33.8938, 35.5018]} zoom={13} className="w-full h-full rounded-lg shadow-md">
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          {/* Use SearchControl component */}
          <SearchControl />
        </MapContainer>
      </div>
    </div>
  );
};

export default StepSix;
