import axios from "axios";

export default function Weather(props) {
  function showWeather(response) {
    alert(`Weather in ${props.city} is ${response.data.main.temp}`);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=d9ee3357a17988091ea6caf6d2758574&units=metric`;
  axios.get(url).then(showWeather);
}
