import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Searh" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Jacksonville</h1>
      <ul>
        <li className="Date">Monday, 00:00 M</li>
        <li className="Description">Description</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="#" alt="forecast icon" />
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation:</li>
            <li>Humidity:</li>
            <li>Wind:</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
