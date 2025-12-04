import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LiveClock from "./clock";

function Weather() {
  const [weather, setWeather] = useState(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const key = process.env.REACT_APP_WEATHER_API;
        const url=process.env.REACT_APP_WEATHER_URL;

        axios
          .get(url, {
            params: {
              key: key,
              q: `${lat},${lon}`,
            },
          })
          .then((res) => setWeather(res.data))
          .catch((err) => {
            console.error(err);
           
            
          });
      },
      (err) => {
        console.error("Error getting location:", err);
        
      }
    );
  }, []);

  // safe to access weather now
  if(!weather) {
    return <div><div className="spinner-border align-center" role="status">
                <span span="true" className="visually-hidden">
                  Loading...
                </span>
              </div></div>;
  }
  return (
    <div className="d-flex flex-column align-items-center gap-4 mt-5 pt-5">
     
      <div className="d-flex justify-content-center mb-4 w-75 mw-100" >
       <div className="d-flex justify-content-center mb-4 w-75 mw-100" >
  <div className="card text-center rounded-4 shadow-lg border-0 weather-card-bg w-100">
    <div className="row g-0 align-items-center p-3">
      
     
      <div className="col-4 d-flex justify-content-center">
        <img
          src={weather.current.condition.icon ? `https:${weather.current.condition.icon}` : ""}
          className="img-fluid rounded-start weather-icon" // Custom size applied via CSS
          alt={weather.current.condition.text || "weather"}
        />
      </div>
      
     
      <div className="col-8">
        <div className="card-body p-1 text-start">
          
          
          <h5 className="card-title fw-bold mb-0 text-dark">
            {weather.location.name.toLowerCase() === "maisuru" ? "Mysuru" : weather.location.name}
          </h5>
          
         
          <div className="text-muted small fw-medium mb-1">
            <LiveClock/> 
          </div>
          
         
          <h1 className="card-text fw-bolder display-4 mb-0">
            {weather.current.temp_c}°C
          </h1>
          
          
          <h6 className="card-text">
            <small className="text-muted fw-medium">{weather.current.condition.text}</small>
          </h6>
          
        </div>
      </div>
      
    </div>
  </div>
</div>
      </div>

      
      <div className="d-flex justify-content-center w-75 mw-100" style={{maxWidth: '320px'}}>
        <div className="card shadow-md p-4 rounded-4 w-100 weather-details-card">
          <div className="row text-center gy-3">
           
            <div className="col-6">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-secondary small fw-medium text-uppercase">Humidity</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.humidity}%</div>
              </div>
            </div>

            <div className="col-6">
              <div className="p-2">
                <div className="text-secondary small fw-medium text-uppercase">Wind Speed</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.wind_kph} km/h</div>
              </div>
            </div>

     
            <div className="col-6">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-secondary small fw-medium text-uppercase">UV Index</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.uv}</div>
              </div>
            </div>

          
            <div className="col-6">
              <div className="p-2">
                <div className="text-secondary small fw-medium text-uppercase">Visibility</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.vis_km} km</div>
              </div>
            </div>

          
            <div className="col-6">
              <div className="p-2 border-end border-opacity-25">
                <div className="text-secondary small fw-medium text-uppercase">Pressure</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.pressure_mb} mb</div>
              </div>
            </div>

         
            <div className="col-6">
              <div className="p-2">
                <div className="text-secondary small fw-medium text-uppercase">Feels Like</div>
                <div className="h5 fw-bold text-dark mt-1">{weather.current.feelslike_c}°C</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
