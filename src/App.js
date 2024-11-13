import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Train from "./components/Home";
import WeatherCity from "./components/CityWeather";
import WeatherLatLon from "./components/LatLonWeather";
import './App.css'; 

import WeatherMap from "./components/Map";
const App = () => {
  return (
    <Router>
      <div className="App">      
        <div className="header">
          <nav>
            <a href="#" className="logo">Weather App</a>
      
              <div className="nav-links">
                <ul>
                  <li><Link to="/Home">🏠 HOME</Link></li>
                  <li><Link to="/CityWeather">🌤️ IN YOUR CITY</Link></li>
                  <li><Link to="/LatLonWeather">🗺️FIND BY GPS</Link></li>
                  <li><Link to="/Map">🌍 WEATHER MAP</Link></li>
                </ul>
              </div>
            
          </nav>
        </div>
        
        <Routes>
          <Route path="/Home" element={<Train/>} />
          <Route path="/CityWeather" element={<WeatherCity />} />
          <Route path="/LatLonWeather" element={<WeatherLatLon />} />
          <Route path="/Map" element={<WeatherMap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;