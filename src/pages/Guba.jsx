import '../App.css'
import React from 'react'
import { useState, useEffect } from "react";
import Navbar from '../components/Navbar.jsx';
import { FaEye } from "react-icons/fa";
import { TbUvIndex } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoIosPartlySunny } from "react-icons/io";
import { IoIosCloudy } from "react-icons/io";
import { RiFoggyFill } from "react-icons/ri";
import { IoRainy } from "react-icons/io5";
import { FaRegSnowflake } from "react-icons/fa";
import { TiWeatherStormy } from "react-icons/ti";

function Guba() {

  const [lastTemp, setLastTemp] = useState(null);
  const [lastWcode, setLastWcode] = useState(null);
  const [uvindex, setLastUV] = useState(null);
  const [visibilitycode, setLastVisibility] = useState(null);
  const [windcode, setLastWind] = useState(null);

  const url = 'https://api.open-meteo.com/v1/forecast?latitude=41.3611&longitude=48.5134&hourly=temperature_2m,weather_code,visibility,uv_index,wind_speed_10m&timezone=auto&forecast_days=1'
  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error('HTTP error ' + response.status)
      return response.json()
    })
    .then(data => {
      // Temp fetch
      const temps = data.hourly.temperature_2m;
      const currenttemp = temps[temps.length - 1];
      const TempDisplay = document.querySelector("#TempDisplay");
      TempDisplay.innerHTML = currenttemp;

      // Weather code fetch
      const wcode = data.hourly.weather_code;
      const current = wcode[wcode.length - 1];
      setLastWcode(current);
      const WcodeDisplay = document.querySelector("#WcodeDisplay");

      if (current <= 1) {
        WcodeDisplay.innerHTML = "Sunny";
        document.querySelector("#sunnyIcon").classList.remove("hidden");
      } else if (current === 2) {
        WcodeDisplay.innerHTML = "Partly Cloudy";
        document.querySelector("#partlyCloudyIcon").classList.remove("hidden");
      } else if (current === 3) {
        WcodeDisplay.innerHTML = "Cloudy";
        document.querySelector("#cloudyIcon").classList.remove("hidden");
      } else if (current >= 45 && current <= 48) {
        WcodeDisplay.innerHTML = "Foggy";
        document.querySelector("#foggyIcon").classList.remove("hidden");
      } else if (current >= 61 && current <= 65) {
        WcodeDisplay.innerHTML = "Rainy";
        document.querySelector("#rainyIcon").classList.remove("hidden");
      } else if (current >= 71 && current <= 76) {
        WcodeDisplay.innerHTML = "Snowy";
        document.querySelector("#snowyIcon").classList.remove("hidden");
      } else if (current >= 95 && current <= 99) {
        WcodeDisplay.innerHTML = "Stormy"
        document.querySelector("#stormyIcon").classList.remove("hidden");
      } else {
        WcodeDisplay.innerHTML = ""
      }


      // Visibility fetch
      const visibility = data.hourly.visibility;
      const currentVisibility = visibility[visibility.length - 1];
      setLastVisibility(currentVisibility);
      const VisibilityDisplay = document.querySelector("#VisibiltyDisplay");
      const formattedVisibility = currentVisibility / 1000
      VisibilityDisplay.innerHTML = formattedVisibility + " m";

      // UV fetch
      const uvindex = data.hourly.uv_index;
      const currentuv = uvindex[uvindex.length - 1];
      setLastUV(currentuv);
      const UVDisplay = document.querySelector("#UVDisplay");
      UVDisplay.innerHTML = currentuv;

      // Wind Speed fetch
      const windspeed = data.hourly.wind_speed_10m;
      const currentwind = windspeed[windspeed.length - 1];
      setLastWind(currentwind);
      const WindDisplay = document.querySelector("#WindDisplay");
      WindDisplay.innerHTML = currentwind + "km/h";
    })
    .catch(error => {
      console.error('Fetch error:', error)
    })


  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        {/*Top App Bar*/}
        <Navbar city="Guba" />
        {/* <!-- Main Content --> */}
        <div className="flex-grow flex flex-col items-center justify-center p-4">
          {/* <!-- Current Weather Section --> */}
          <span id="sunnyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <IoMdSunny />
          </span>

          <span id="partlyCloudyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <IoIosPartlySunny />
          </span>

          <span id="cloudyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <IoIosCloudy />
          </span>

          <span id="foggyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <RiFoggyFill />
          </span>

          <span id="rainyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <IoRainy />
          </span>

          <span id="snowyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <FaRegSnowflake  />
          </span>

          <span id="stormyIcon" className="material-symbols-outlined text-8xl text-primary hidden" style={{ fontSize: 96 }}>
            <TiWeatherStormy />
          </span>


          <div className="flex flex-row items-center text-center">
            <h1 id="TempDisplay" className="text-6xl font-bold leading-tight mt-4"></h1><p className="text-6xl font-bold leading-tight mt-4 text-gray-600">°C</p>
          </div>
          <div className="flex items-center text-center">
            <p id="WcodeDisplay" className="text-2xl font-medium text-subtext-light dark:text-subtext-dark mt-2"></p>
          </div>

          {/* <!-- Spacer --> */}
          <div className="h-16"></div>
          {/* <!-- Forecast Carousel --> */}
          <div className="w-full max-w-md">
            <h3 className="flex text-lg font-bold px-4 mb-3 justify-center">Other Informations:</h3>
            <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden pb-4 justify-center">
              <div className="flex items-stretch px-4 gap-4">
                {/* <!-- Forecast Card --> */}
                <div className="cards flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-background-dark shadow-sm min-w-[100px] border border-gray-200 dark:border-gray-700">
                  <span className="material-symbols-outlined text-4xl text-primary"><FaEye /></span>
                  <p className="text-base font-medium leading-normal">Visibility</p>
                  <p id="VisibiltyDisplay" className="text-lg font-bold"></p>
                </div>
                {/* <!-- UV Index card --> */}
                <div className="cards flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-background-dark shadow-sm min-w-[100px] border border-gray-200 dark:border-gray-700">
                  <span className="material-symbols-outlined text-4xl text-primary"><TbUvIndex /></span>
                  <p className="text-base font-medium leading-normal">UV Index</p>
                  <p id="UVDisplay" className="text-lg font-bold"></p>
                </div>
                {/* <!-- Wind Speed Card --> */}
                <div className="cards flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-background-dark shadow-sm min-w-[100px] border border-gray-200 dark:border-gray-700">
                  <span className="material-symbols-outlined text-4xl text-primary"><FaWind /></span>
                  <p className="text-base font-medium leading-normal">Wind Speed</p>
                  <p id="WindDisplay" className="text-lg font-bold"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Guba
