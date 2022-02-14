import React, { useState } from "react";
import { useEffect } from 'react';
import './MapContainer.css';
import axios from "axios";

function MapContainer(){
  let [currentLocation] = useState(['위도', '경도']);
  let [currentDirectory, updatecurrentDirectory] = useState('');
  let [currentWeather] = useState('맑음');

  function getLocation(){
    let nowLatitude = '';
    let nowLongitude = '';
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        currentLocation[0] = position.coords.latitude;
        currentLocation[1] = position.coords.longitude;

        /*global kakao*/
        const geocoder = new kakao.maps.services.Geocoder();
        const callback = function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
            let newArray = [...currentDirectory];
            newArray[0] = result[0].address_name;
            updatecurrentDirectory(newArray);
            // currentLocation = result[0].address_name;
          }
        };
        geocoder.coord2RegionCode(nowLongitude, nowLatitude, callback);     
      });
    } else {
      console.log('error');
    };

  };

  function getWeather(){
    axios({
      url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + currentLocation[0] + '&lon=' + currentLocation[1] + '&appid=f53c6e973671e4859c85ac4761fac792',
      method: 'get',
    })
    .then((res) => {
      console.log(res.data.weather);
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getLocation();
    getWeather();
  });

  return (
    <div className="map">
      {currentDirectory}
      <br></br>
      {currentLocation[0]}<br></br>
      {currentLocation[1]}
    </div>
  )
};

export default MapContainer;