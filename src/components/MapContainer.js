import React, { useState } from "react";
import { useEffect } from 'react';
import './MapContainer.css';


function MapContainer(){
  let [currentLocation, updateLocation] = useState('');
  function getLocation(){
    let nowLatitude = '';
    let nowLongitude = '';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        nowLatitude = position.coords.latitude;
        nowLongitude = position.coords.longitude;

        /*global kakao*/
        const geocoder = new kakao.maps.services.Geocoder();
        const callback = function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
            let newArray = [...currentLocation];
            newArray[0] = result[0].address_name;
            updateLocation(newArray);
            // currentLocation = result[0].address_name;
            // console.log(currentLocation);
          }
        };
        geocoder.coord2RegionCode(nowLongitude, nowLatitude, callback);     
      });
    } else {
      console.log('error');
    };

  };

  useEffect(() => {
    getLocation();
  });

  return (
    <div className="map">
      {currentLocation}
    </div>
  )
};

export default MapContainer;