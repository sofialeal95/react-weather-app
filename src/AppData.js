import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemp from "./WeatherTemp";

export default function AppData(props) {
  let iconURL = `https://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
  let timezone = props.data.timezone;

  return (
    <div className="AppData">
      {" "}
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li className="Date">
          <FormattedDate timezone={timezone} />
        </li>
        <li className="Description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={iconURL} alt={props.data.description} />
          <WeatherTemp celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {Math.round(props.data.humidity)}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
