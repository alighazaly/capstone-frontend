import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MapIcon from "../../Assets/images/Icons/MapIcon.png";
import "./MapStyle.css";
import { Icon } from 'leaflet';

const AppartmentLocation = (props) => {
  // Ensure both latitude and longitude are present
  if (!props.latitude || !props.longitude) {
    return <div>Location data is not available.</div>;
  }

  // Create position array using latitude and longitude
  const position = [props.longitude, props.latitude];  

  // Configure custom icon for the map
  const customIcon = new Icon({
    iconUrl: MapIcon,
    iconSize: [38, 38]
  });

  return (
    <div className='flex justify-center items-center mb-5'>
      <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={position} icon={customIcon}>
          <Popup>Your default location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default AppartmentLocation;
