import React, { useState } from 'react';

const WeatherLatLon = () => {
    const apiKey = '675bc84edff6e3cc3a58d263b6d82b1f';
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
            );

            if (!response.ok) {
                throw new Error('Ошибка при получении данных о погоде');
            }

            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Ошибка при получении данных о погоде:', error);
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
                    <label htmlFor="longitude">Долгота:</label>
                    <input
                        id="longitude"
                        name="lon"
                        type="text"
                        placeholder="Введите долготу"
                        value={lon}
                        onChange={handleCoordinChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="latitude">Широта:</label>
                    <input
                        id="latitude"
                        name="lat"
                        type="text"
                        placeholder="Введите широту"
                        value={lat}
                        onChange={handleCoordinChange}
                        required
                    />
                </div>
                <button type="submit">Показать погоду</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {weatherData ? (
                <div>
                    <h2>
                        Погода в {weatherData.name || `местности (${lat}, ${lon})`}
                    </h2>
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

export default WeatherLatLon;
