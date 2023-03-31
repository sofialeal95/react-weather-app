import React, { useState } from "react";
import "./WeatherTemp.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="weatherTemp">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">°C</span> |{" "}
        <a href="/" className="unit" onClick={convertToF}>
          °F
        </a>
      </span>
    );
  } else {
    return (
      <span className="weatherTemp">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <a href="/" className="unit" onClick={convertToC}>
          °C
        </a>{" "}
        | <span className="unit">°F</span>
      </span>
    );
  }
}
