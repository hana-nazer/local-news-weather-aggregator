import axios from "axios";

// Function to fetch weather data from the API
export const getWeather = async (lat, long) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );

    // Return the weather data from the response
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Throw the error to handle it in the calling function
  }
};
