import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "4de57bc1ea650ffe43dc63934a9ee859";

  const handleSearch = (searchedCity, selectedDay) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        const filteredData = response.data.list.filter((forecast) => {
          const forecastDate = new Date(forecast.dt * 1000);
          const forecastDay = forecastDate.toLocaleDateString("en-US", {
            weekday: "long",
          });
          return forecastDay === selectedDay;
        });

        setWeatherData({ city: response.data.city, list: filteredData });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">MeteoApp</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main className="main-content">
        <WeatherDisplay data={weatherData} />
      </main>
      <footer className="app-footer">
        <p>© 2024 MeteoApp - SIMONE MANCA</p>
      </footer>
    </div>
  );
}

export default App;
