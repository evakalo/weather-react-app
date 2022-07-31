import React, { useState } from "react";
import "./Temperature.css";
export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        {props.celsius}
        <small className="celsius-color">
          {" "}
          °C /{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </small>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        {Math.round(fahrenheit)}
        <small className="celsius-color">
          {" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          / °F
        </small>
      </span>
    );
  }
}
