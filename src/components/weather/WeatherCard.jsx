import React from "react";
import moment from "moment";

function WeatherCard({ weatherData }) {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1592210454359-9043f067919b?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzE0NjIwMjg&ixlib=rb-4.0.3&q=80";

  return (
    <div style={{ position: "relative" }}>
      {/* Weather Card */}
      <div
        className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen"
        style={{
          zIndex: 1,
        }}
      >
        <div className="w-full p-8 mx-3 text-center bg-blue-300 rounded-md md:w-1/2 h-1/2 lg:w-1/4 opacity-80">
          {/* Location */}
          <p className="text-2xl text-white lg:text-4xl md:text-3xl">
            {weatherData.name}
          </p>

          {/* Day of the week */}
          <p className="mt-2 text-white">{moment().format("dddd")}</p>

          {/* Date */}
          <p className="text-white"> {moment().format("LL")}</p>

          {/* Temperature */}
          <p className="mt-8 text-6xl text-white lg:text-7xl">
            {" "}
            {weatherData.main.temp} &deg;C
          </p>

          {/* Weather description */}
          <p className="mt-4 text-white"> {weatherData.weather[0].main}</p>

          {/* Humidity */}
          <p className="text-white"> Humidity: {weatherData.main.humidity} %</p>
        </div>
      </div>

      {/* Background Image */}
      <img
        src={backgroundImageUrl}
        alt="Background"
        className="w-full h-screen"
      />
    </div>
  );
}

export default WeatherCard;
