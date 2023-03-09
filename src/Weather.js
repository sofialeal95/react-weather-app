import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconURL: response.data.condition.icon_url,
      date: new Date(response.data.time * 1000),
    });
    console.log(response);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Searh"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li className="Date">
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="Description text-capitalize">
            {weatherData.description}
          </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconURL} alt={weatherData.description} />
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {Math.round(weatherData.humidity)}%</li>
              <li>Wind: {Math.round(weatherData.wind)} m/sec</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "07ba4d8cb74b4302a070a7o56cbtf467";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;

    axios.get(apiURL).then(handleResponse);

    return "Loading";
  }
}
