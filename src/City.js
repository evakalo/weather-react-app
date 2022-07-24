import React from "react";
import "./City.css";
export default function City(props) {
  // let weatherData = {
  //   // city: "Paris",
  //   date: "Saturday 14:00",
  //   description: "Clear",
  //   img: "http://openweathermap.org/img/wn/10d@2x.png",
  //   // temperature: "19",
  //   humidity: "39",
  //   precipitation: "0",
  //   wind: "13",
  // };
  return (
    <div>
      <div className="main-city-date">
        <h1>{props.city}</h1>
        <ul>
          <li>
            Last updated at <span>14 h</span>
          </li>
          <li>{props.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix main-image-temp">
            <img src={props.icon} alt="" className="float-left" />
            <span className="float-left temperature">
              <span>{props.temperature}</span>
              <small className="celsius-color"> °C</small>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity: <span>{props.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.wind} </span>m/h
            </li>
          </ul>
        </div>
        <div className="weather-forecast"></div>
      </div>
    </div>
  );
}
