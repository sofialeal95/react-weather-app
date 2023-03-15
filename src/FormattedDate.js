import React from "react";

export default function FormattedDate(props) {
  let timezone = props.timezone / 3600;
  let currentDate = new Date();
  let utcOffset = currentDate.getTimezoneOffset();
  currentDate.setMinutes(currentDate.getMinutes() + utcOffset);
  let locationOffset = timezone * 60;
  currentDate.setMinutes(currentDate.getMinutes() + locationOffset);

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = days[currentDate.getDay()];
  let month = months[currentDate.getMonth()];
  let date = currentDate.getDate();
  let hours = currentDate.getHours();
  let dayTime = "";
  if (hours > 11) {
    dayTime = "PM";
  } else {
    dayTime = "AM";
  }
  if (hours > 12) {
    hours = hours - 12;
  } else {
    if (hours === 0) {
      hours = 12;
    }
  }

  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div>
      {day}, {month} {date} {hours}:{minutes} {dayTime}
    </div>
  );
}
