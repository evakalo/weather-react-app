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
    <div>
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
    </div>
  );
}
