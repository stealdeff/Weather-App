import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./components/Home";
import WeatherCity from "./components/CityWeather";
import './App.css'; 

const App = () => {
  useEffect(() => {
    const header = document.querySelector('.header');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      header.style.backgroundPositionY = `${scrollPosition * 0.5}px`; // Измените коэффициент для настройки эффекта
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <div className="header">
          <nav>
            <a href="#" className="logo">Weather App</a>
            <div className="nav-links">
              <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/CityWeather">Прогноз погоды в городе</Link></li>
                <li><Link to="#">Portfolio</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Connect</Link></li>
              </ul>
            </div>
          </nav>
        </div>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/CityWeather" element={<WeatherCity />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;