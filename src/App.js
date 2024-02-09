import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import WeatherDisplay from "./Components/WeatherDisplay";
import "./App.css";
import romaImage from "./download (1).jpg";
import milanoImage from "./download.jpg";
import cagliariImage from "./Caglliari.jpg";

const cities = [
  { name: "Roma", imageUrl: romaImage },
  { name: "Milano", imageUrl: milanoImage },
  { name: "Cagliari", imageUrl: cagliariImage },
];

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [showHome, setShowHome] = useState(true);
  const apiKey = "4de57bc1ea650ffe43dc63934a9ee859";
  const handleSearch = (searchedCity, selectedDay = "") => {
    setShowHome(false);
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${searchedCity}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then((response) => {
        const filteredData = selectedDay
          ? response.data.list.filter((forecast) => {
              const forecastDate = new Date(forecast.dt * 1000);
              const forecastDay = forecastDate.toLocaleDateString("en-US", {
                weekday: "long",
              });
              return forecastDay === selectedDay;
            })
          : response.data.list;
        setWeatherData({ city: response.data.city, list: filteredData });
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };
  const goHome = () => {
    setShowHome(true);
    setWeatherData(null);
  };
  const renderCityImages = () => {
    return (
      <div className="city-grid">
        {cities.map((city) => (
          <div
            key={city.name}
            className="city-item"
            onClick={() => handleSearch(city.name)}
          >
            <img src={city.imageUrl} alt={city.name} className="city-image" />
            <div className="city-name">{city.name}</div>
          </div>
        ))}
      </div>
    );
  };
  const renderHome = () => {
    return (
      <div className="home-content">
        <div className="city-images-container">{renderCityImages()}</div>
        <div className="text-container">
          <p>
            Benvenuto su MeteoApp, la tua guida fatta da me per sapere se a
            Pasquetta puoi uscire tranquillo!
          </p>
          <p>
            Scopri le condizioni meteo di tutte le città italiane e pianifica al
            meglio la tua giornata.
          </p>
          <p>Con MeteoApp, puoi trovare anche i paesi sperduti!</p>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      <header className="app-header">
        <button onClick={goHome} className="home-button">
          Home
        </button>
        <h1 className="app-title">MeteoApp</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <main className="main-content">
        {showHome ? renderHome() : null}
        {weatherData && <WeatherDisplay data={weatherData} />}
      </main>
      <footer className="app-footer">
        <p>© 2024 MeteoApp - SIMONE MANCA</p>
      </footer>
    </div>
  );
}

export default App;
