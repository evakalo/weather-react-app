import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./City.css";
import "./styles.css";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function City(props) {
  return (
    <div>
      <div className="main-city-date">
        <h1 className="city">{props.city}</h1>
        <ul>
          <li>
            Last updated{" "}
            <span>
              {" "}
              <FormatedDate date={props.date} />{" "}
            </span>
          </li>
          <li>{props.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix main-image-temp">
            <img src={props.icon} alt="" className="float-left" />
            <span className="float-left ">
              <span>
                {" "}
                <WeatherTemperature celsius={props.temperature} />
              </span>
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

      <div className="row weather-forecast">
        <li className="col-4 forecast-days">
          Monday
          <br />
          <img src={props.icon} alt="" />
          <br />
          28°C
        </li>
        <li className="col-4 forecast-days">
          Tuesday
          <br />
          <img src={props.icon} alt="" />
          <br />
          20°C
        </li>
        <li className="col-4 forecast-days">
          Wednesday
          <br />
          <img src={props.icon} alt="" />
          <br />
          24°C
        </li>
      </div>
    </div>
  );
}
