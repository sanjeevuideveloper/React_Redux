import GoogleMapReact from 'google-map-react';
import About from './About';
import{useState} from "react";
function GoogleMap(){

	return(
		
		<div style={{ height: '100vh', width: '100%' }}>
		<About/>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBoFONalCLObpG58y6Z1iFYUn8ZVn1oVu4' }}
          defaultCenter={{lat: 12.9136031,lng: 77.6070214}}
         
          defaultZoom={10}
         >
          
        </GoogleMapReact>
      </div>
		
		)
}

export default GoogleMap;
//AIzaSyBoFONalCLObpG58y6Z1iFYUn8ZVn1oVu4