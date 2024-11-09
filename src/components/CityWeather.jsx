import React, { useState } from 'react';

const WeatherCity = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=99a1f5a417b2631da7765b170ca013f5&query=${encodeURIComponent(searchTerm)}`
      );
      const data = await response.json();
      if (data.success === false) {
        throw new Error(data.error.info);
      }

      setWeatherData(data);
      setError(null);
    } catch (error) {
      console.error('Error when receiving weather data:', error);
      setError('Failed to download weather data');
      setWeatherData(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <input
          type="text"
          placeholder="Enter the name of the city or IP address"
          value={searchTerm}
          onChange={handleSearchTermChange}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Show the weather</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData && (
        <div className="WeatherData">
          <h2>{weatherData.location.name || `IP address ${searchTerm}`}</h2>
          <ul className="weather_city">
            <li>Country: {weatherData.location.country}</li>
            <li>Region: {weatherData.location.region}</li>
            <li>Local time: {weatherData.location.localtime}</li>
            <li>Temperature: {weatherData.current.temperature}°C</li>
            <li>Weather description: {weatherData.current.weather_descriptions[0]}</li>
            <li>Wind speed: {(weatherData.current.wind_speed * 2.237).toFixed(1)} mph</li>
            <li>Wind direction: {weatherData.current.wind_dir}</li>
            <li>Pressure: {(weatherData.current.pressure * 0.750062).toFixed(1)} mmHg</li>
            <li>Humidity: {weatherData.current.humidity}%</li>
            <li>Cloud cover: {weatherData.current.cloudcover}%</li>
            <li>Feels like: {weatherData.current.feelslike}°C</li>
            <li>UV Index: {weatherData.current.uv_index}</li>
            <li>Visibility: {(weatherData.current.visibility * 0.621371).toFixed(1)} miles</li>
          </ul>

          <cite>Search by city name and IP-address</cite>
        </div>
      )}

      {!weatherData && <p className="load">Loading...</p>}
    </div>
  );
};

export default WeatherCity;