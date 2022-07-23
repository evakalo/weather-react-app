import React from "react";
import "./City.css";
export default function City() {
  let weatherData = {
    city: "Paris",
    date: "Saturday 14:00",
    description: "Clear",
    img: "http://openweathermap.org/img/wn/10d@2x.png",
    temperature: 18,
    humidity: "39",
    precipitation: "0",
    wind: "13",
  };
  return (
    <div>
      <div className="main-city-date">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            Last updated at <span>{weatherData.date}</span>
          </li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix main-image-temp">
            <img src={weatherData.img} alt="" className="float-left" />
            <span className="float-left temperature">
              <span>{weatherData.temperature}</span>
              <small> °C</small>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: {weatherData.precipitation}%</li>
            <li>
              Humidity: <span>{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span>{weatherData.wind} </span>m/h
            </li>
          </ul>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
