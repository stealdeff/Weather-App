import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WeatherCity from './components/CityWeather';
import WeatherLatLon from './components/LatLonWeather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <WeatherCity/>
    <WeatherLatLon/>
  </>
);
