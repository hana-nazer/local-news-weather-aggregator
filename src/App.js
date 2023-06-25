import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WeatherData from "./components/weather/weatherData";
import NewsList from "./components/news/NewsList";

function App() {
  return (
    // Router component for managing navigation
    <Router>
      {/* Navbar component */}
      <Navbar />

      {/* Routes component for defining different routes */}
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<NewsList />} />

        {/* Route for the weather page */}
        <Route path="/weather" element={<WeatherData />} />
      </Routes>
    </Router>
  );
}

export default App;
