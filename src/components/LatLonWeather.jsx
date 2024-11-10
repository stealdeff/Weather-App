import React, { useState, useEffect } from 'react';

const WeatherLatLon = () => {
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const cachedData = getDataFromLocalStorage(`${lat},${lon}`);
        if (cachedData) {
            setWeatherData(cachedData);
            return; 
        }

        try {
            const response = await fetch(
                `http://api.weatherstack.com/current?access_key=00acaf6cb2863bf4e594070163e5f6d4&query=${lat},${lon}`
            );

            if (!response.ok) {
                throw new Error('Error when receiving weather data:');
            }

            const data = await response.json();
            setWeatherData(data);
            saveDataToLocalStorage(`${lat},${lon}`, data);
        } catch (error) {
            console.error('Error when receiving weather data:', error);
            setError(error.message);
            setWeatherData(null);
        }
    };

    const handleCoordinChange = (e) => {
        const { name, value } = e.target;
        if (name === 'lat') {
            setLat(value);
        } else if (name === 'lon') {
            setLon(value);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="longitude">Longitude: </label>
                    <input
                        id="longitude"
                        name="lon"
                        type="text"
                        placeholder="Enter the longitude"
                        value={lon}
                        onChange={handleCoordinChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="latitude">Latitude: </label>
                    <input
                        id="latitude"
                        name="lat"
                        type="text"
                        placeholder="Enter the latitude"
                        value={lat}
                        onChange={handleCoordinChange}
                        required
                    />
                </div>
                <button type="submit">Show the weather</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weatherData ? (
                <div>
                    <h2>
                        Weather in {weatherData.location.name || `location (${lat}, ${lon})`}
                    </h2>
                    <ul className='weather_latlon'>
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
                </div>
            ) : (
                <p>Loading...</p>
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

export default WeatherLatLon;