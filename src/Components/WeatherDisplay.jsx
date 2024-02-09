// WeatherDisplay.jsx
import React from "react";
import "../App.css";

function WeatherDisplay({ data }) {
  if (!data) return <p>Nessuna previsione disponibile</p>;

  // Funzione per formattare la data in formato leggibile
  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  }

  // Funzione per formattare l'ora
  function formatTime(timestamp) {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="weather-display">
      <h2>Meteo a {data.city.name}</h2>
      <div className="daily-forecast">
        {data.list.map((forecast, index) => (
          <div key={index} className="forecast-card">
            <div className="forecast-date">
              <p>{formatDate(forecast.dt)}</p>
              <p>{formatTime(forecast.dt)}</p>
            </div>
            <div className="forecast-details">
              <p>Tempo: {forecast.weather[0].main}</p>
              <p>Temperatura: {forecast.main.temp}°C</p>
              <p>Umidità: {forecast.main.humidity}%</p>
            </div>
            <div className="forecast-icon">
              <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherDisplay;
