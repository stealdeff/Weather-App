import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import capitals from './capitals.json';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const WeatherMap = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const handleMarkerClick = async (city) => {
    const cachedData = getDataFromLocalStorage(city);
    if (cachedData) {
      setWeatherInfo(cachedData);
      return; 
    }

    try {
      const response = await axios.get(
        `https://api.weatherstack.com/current?access_key=00acaf6cb2863bf4e594070163e5f6d4&query=${city}`
      );
      setWeatherInfo(response.data);
      saveDataToLocalStorage(city, response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {capitals.map(city => (
          <Marker key={city.name} position={[city.lat, city.lon]} eventHandlers={{
              click: () => handleMarkerClick(city.name),
            }}>
          </Marker>
        ))}
      </MapContainer>

      {weatherInfo && (
        <div style={{ padding: '50px' }} className='WeatherData'>
          <h2>Weather in {weatherInfo.location.name}</h2>
          <ul className='weather_latlon'>
            <li>Temperature: {weatherInfo.current.temperature}°C</li>
            <li>Weather description: {weatherInfo.current.weather_descriptions[0]}</li>
            <li>Humidity: {weatherInfo.current.humidity}%</li>
            <li>Wind speed: {(weatherInfo.current.wind_speed * 2.237).toFixed(1)} mph</li>
          </ul>
        </div>
      )}
    </div>
  );
};

const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const getDataFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null; 
};

export default WeatherMap;