import React, { useState } from 'react';
const WeatherCity = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = '675bc84edff6e3cc3a58d263b6d82b1f';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Ошибка при получении данных о погоде:', error);
      setWeatherData(null);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Введите название города"
          value={city}
          onChange={handleCityChange}
        />
        <button type="submit">Показать погоду</button>
      </form>

      {weatherData ? (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Температура: {weatherData.main.temp}°C</p>
          <p>Погода: {weatherData.weather[0].description}</p>
          <p>Влажность: {weatherData.main.humidity}%</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};


export default WeatherCity;
