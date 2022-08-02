export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="row weather-forecast">
      <li className="col-4 forecast-days">
        {day()}
        <br />
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          className="icon"
          alt=""
        />
        <br />
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min"> {minTemperature()} </span>
      </li>
      <li className="col-4 forecast-days">
        Tuesday
        <br />
        <img src={props.icon} alt="" />
        <br />
        <span className="forecast-temperature-max">25°</span>
        <span className="forecast-temperature-min"> 19° </span>
      </li>
      <li className="col-4 forecast-days">
        Wednesday
        <br />
        <img src={props.icon} alt="" />
        <br />
        <span className="forecast-temperature-max">26°</span>
        <span className="forecast-temperature-min"> 18° </span>
      </li>
    </div>
  );
}
