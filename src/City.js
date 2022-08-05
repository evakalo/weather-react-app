import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./City.css";
import "./styles.css";
import FormatedDate from "./FormatedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecastDay from "./WeatherForecastDay";

export default function City(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);

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
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 4)
              return (
                <div className="col forecast-days" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
          })}

          {/* <div className="col-4 forecast-days">
            {" "}
            <WeatherForecastDay data={forecast[2]} />
          </div>{" "}
          <div className="col-4 forecast-days">
            {" "}
            <WeatherForecastDay data={forecast[3]} />
          </div>{" "} */}
        </div>
      </div>
    );
  } else {
    let lat = props.coord.lat;
    let lon = props.coord.lon;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=0ce4e992808ecc43cc56d00dbc5f3ec7&units=metric`;
    axios.get(url).then(handleResponse);
    return null;
  }
}
