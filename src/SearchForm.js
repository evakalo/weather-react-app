import React, { useState } from "react";
import axios from "axios";
import City from "./City";
import "./Searchform.css";
export default function SearchForm() {
  let [city, SetCity] = useState("Zagreb");
  const [loaded, SetLoaded] = useState(false);
  let [weather, SetWeather] = useState(null);
  function showWeather(response) {
    SetLoaded(true);
    SetWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,

      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ce4e992808ecc43cc56d00dbc5f3ec7&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    SetCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit} className="mb-2 form">
      <div className="row">
        <div className="col-md-6">
          <input
            type="search"
            placeholder="Search city"
            className="form-control"
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
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}{" "}
        <City
          city={city}
          temperature={Math.round(weather.temperature)}
          humidity={weather.humidity}
          wind={weather.wind}
          description={weather.description}
          icon={weather.icon}
        />
      </div>
    );
  } else {
    // showFirst();
    return form;
  }

  // function showFirst() {
  //   let url = `https://api.openweathermap.org/data/2.5/weather?q=Zagreb&appid=d9ee3357a17988091ea6caf6d2758574&units=metric`;
  //   axios.get(url).then(showWeather);
  // }
}
