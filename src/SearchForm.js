import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import "./City.css";
import City from "./City";
import "./Searchform.css";

export default function SearchForm() {
  let [city, SetCity] = useState("New York");

  let [weather, SetWeather] = useState({ ready: false });
  function showWeather(response) {
    SetWeather({
      ready: true,
      coord: response.data.coord,
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function updateCity(event) {
    SetCity(event.target.value);
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ce4e992808ecc43cc56d00dbc5f3ec7&units=metric`;
    axios.get(url).then(showWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  let form = (
    <form onSubmit={handleSubmit} className="mb-2 form ">
      <div className="searchform">
        <div className="row ">
          <div className="col-md-6">
            <input
              type="search"
              placeholder="Search city"
              className="form-control "
              onChange={updateCity}
            />
          </div>
          <div className="col-md-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-color"
            />
          </div>
        </div>
      </div>
    </form>
  );
  if (weather.ready) {
    return (
      <div>
        {form}{" "}
        <City
          city={weather.name}
          temperature={Math.round(weather.temperature)}
          humidity={weather.humidity}
          wind={weather.wind}
          description={weather.description}
          icon={weather.icon}
          date={weather.date}
          coord={weather.coord}
        />
      </div>
    );
  } else {
    search();
    return <div>Loading </div>;
  }
}
