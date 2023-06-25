import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import { getWeather } from "../../services/weather-service";

function WeatherData() {
  const [lat, setLat] = useState([]); // State to store latitude
  const [long, setLong] = useState([]); // State to store longitude
  const [data, setData] = useState([]); // State to store weather data

  const fetchData = async () => {
    // Fetch user's current geolocation
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude); // Set latitude in state
      setLong(position.coords.longitude); // Set longitude in state
    });

    try {
      const response = await getWeather(lat, long); // Fetch weather data based on latitude and longitude
      setData(response); // Store the fetched weather data in state
    } catch (error) {
      console.log(error); // Log any errors that occur during data fetching
    }
  };

  useEffect(() => {
    fetchData(); // Fetch weather data when the component mounts or when latitude and longitude change
  }, [lat, long]);

  return (
    <>
      {/* Conditional rendering based on whether weather data is available */}
      {typeof data.main !== "undefined" ? (
        <WeatherCard weatherData={data} /> 
      ) : (
        <div>Something went wrong!</div> 
      )}
    </>
  );
}

export default WeatherData;
