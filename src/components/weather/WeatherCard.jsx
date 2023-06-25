import React from "react";
import moment from "moment";

function WeatherCard({ weatherData }) {
  return (
    <div className="relative">
      {/* Weather Card */}
      <div className="absolute inset-0 z-10 flex items-center justify-center h-screen bg-weather-blue">
      <div className="w-3/4 p-8 mx-3 text-center rounded-md md:w-1/2 h-1/2 lg:w-1/2 opacity-80 bg-[url('D:/entri-test/public/background.png')]">
          {/* Location */}
          <p className="text-2xl text-white lg:text-4xl md:text-3xl">
            {weatherData.name}
          </p>
          {/* Day of the week */}
          <p className="mt-2 text-white">{moment().format("dddd")}</p>
          {/* Date */}
          <p className="text-white"> {moment().format("LL")}</p>
          {/* Temperature */}
          <p className="mt-8 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
            {weatherData.main.temp} &deg;C
          </p>
          {/* Weather description */}
          <p className="mt-4 text-white">{weatherData.weather[0].main}</p>
          {/* Humidity */}
          <p className="text-white">Humidity: {weatherData.main.humidity} %</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
