import React, { useState } from 'react';

const WeatherCity = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=99a1f5a417b2631da7765b170ca013f5&query=${encodeURIComponent(city)}`
      );
      const data = await response.json();

      if (data.success === false) {
        throw new Error(data.error.info);
      }

      setWeatherData(data);
      setError(null); 
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
      setError('Не удалось загрузить данные о погоде');
      setWeatherData(null);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите название города"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Показать погоду</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weatherData ? (
        <div>
          <h2>{weatherData.location.name}</h2>
          <p>Температура: {weatherData.current.temperature}°C</p>
          <p>Погода: {weatherData.current.weather_descriptions[0]}</p>
          <p>Влажность: {weatherData.current.humidity}%</p>
          <p>Скорость ветра: {weatherData.current.wind_speed} м/с</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default WeatherCity;