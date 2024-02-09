import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "4de57bc1ea650ffe43dc63934a9ee859";

  const handleSearch = (searchedCity) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <WeatherDisplay data={weatherData} />
    </div>
  );
}

export default App;
