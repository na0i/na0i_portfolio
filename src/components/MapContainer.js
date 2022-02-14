import React, { useState } from "react";
import { useEffect } from 'react';
import './MapContainer.css';
import axios from "axios";

function MapContainer(){
  let [currentLocation, updateCurrentLocation] = useState(['37.20312020555898', '37.20312020555898']);
  let [currentDirectory, updateCurrentDirectory] = useState('');
  let [currentWeather, updateCurrentWeather] = useState('맑음');

  function getLocation(){
    // GPS로 주소 받기(위도, 경도)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let newLocationArray = [...currentLocation];
        newLocationArray[0] = position.coords.latitude;
        newLocationArray[1] = position.coords.longitude;
        updateCurrentLocation(newLocationArray);

        // 위도, 경도 → 주소로 변환
        /*global kakao*/
        const geocoder = new kakao.maps.services.Geocoder();
        const callback = function(result, status) {
          if (status === kakao.maps.services.Status.OK) {
            let newDirectoryArray = [...currentDirectory];
            newDirectoryArray[0] = result[0].address_name;
            updateCurrentDirectory(newDirectoryArray);
          }
        };
        geocoder.coord2RegionCode(currentLocation[1], currentLocation[0], callback);     
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
      updateCurrentWeather(res.data.weather[0].main);
    })
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getLocation();
    getWeather();
  });

  return (
    <div className="map">
      현주소 {currentDirectory}
      <br></br>
      위도 {currentLocation[0]}<br></br>
      경도 {currentLocation[1]}
      <br></br>
      현재 당신의 날씨는 {currentWeather}
    </div>
  )
};

export default MapContainer;