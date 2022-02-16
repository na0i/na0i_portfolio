import React, { useState } from "react";
import { useEffect } from 'react';
import axios from "axios";

function Map(){
  let [currentLatitude, updateCurrentLatitude] = useState('');
  let [currentLongititude, updateCurrentLongititude] = useState('');
  // 배열로 하면 왜 무한히 호출할까?
  // let [currentLocation, updateCurrentLocation] = useState(['', '']);
  let [currentDirectory, updateCurrentDirectory] = useState('');
  let [currentWeather, updateCurrentWeather] = useState('');

  // 좌표로 주소 파악
  function getLocation(){
    // GPS로 주소 받기(위도, 경도)
    if (navigator.geolocation) {
      // debugger;
      // console.log(1, currentLocation, currentDirectory);
      navigator.geolocation.getCurrentPosition((position) => {
        // let newLocationArray = [...currentLocation];
        // newLocationArray[0] = position.coords.latitude;
        // newLocationArray[1] = position.coords.longitude;
        // updateCurrentLocation(newLocationArray);
        updateCurrentLatitude(position.coords.latitude);
        updateCurrentLongititude(position.coords.longitude);

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

        // 더 효율적으로 코드를 쓸 수 없을까?
        // ajax 요청이 아니지만 비동기로 콜백할 수 있는 방법을 생각해보자.
        // console.log(2, currentLocation, currentDirectory);
        // if (currentLocation[0] !== '' && currentLocation[1] !== ''){
        //   geocoder.coord2RegionCode(currentLocation[1], currentLocation[0], callback);
        //   getWeather();
        // }

        if (currentLatitude && currentLongititude){
          geocoder.coord2RegionCode(currentLongititude, currentLatitude, callback);
          getWeather();
        } 
      });
    } else {
      console.log('error');
    };

  };

  

  // 좌표로 날씨 파악
  function getWeather(){

    console.log('?')
    axios({
      // url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + currentLocation[0] + '&lon=' + currentLocation[1] + '&appid=f53c6e973671e4859c85ac4761fac792',
      url: 'https://api.openweathermap.org/data/2.5/weather?lat=' + currentLatitude + '&lon=' + currentLongititude + '&appid=f53c6e973671e4859c85ac4761fac792',
      method: 'get',
    })
    .then((res) => {
      updateCurrentWeather(res.data.weather[0].main);
    })
    .catch((err) => {
      // console.log(3, currentLocation, currentDirectory);
      console.log(err);
    })
  }


  useEffect(() => {
    getLocation();
  },[currentLatitude, currentLongititude]);

  return (
    <div>
      현주소 {currentDirectory}
      <br></br>
      위도 {currentLatitude}<br></br>
      경도 {currentLongititude}
      <br></br>
      현재 당신의 날씨는 {currentWeather}
    </div>
  )
};

export default Map;