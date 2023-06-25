import axios from "axios";

export const getWeather = async (lat, long) => {
try {
    const response = await axios.get(
    `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
} catch (error) {
    console.log(error);
    throw error;
}
};
