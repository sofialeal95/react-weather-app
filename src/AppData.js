import React from "react";
import FormattedDate from "./FormattedDate";

export default function AppData(props) {
  /*  if ((props.data.country = "United States of America")) {
    props.data.country = "US";
  } */

  return (
    <div className="AppData">
      {" "}
      <h1>
        {props.data.city}, {props.data.country}
      </h1>
      <ul>
        <li className="Date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="Description text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconURL} alt={props.data.description} />
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <span className="unit">°C</span>
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
