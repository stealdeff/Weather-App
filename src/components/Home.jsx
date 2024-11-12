import React, { useState } from 'react';

const HomePage = () => {
  return (
      <div className="home-container">
          <h1 className="home-title">Welcome to the Weather App!</h1>
          <p className="home-description">
          In this application, you can check the weather in several convenient ways:</p>
<ul className='homeul'>
<li>By City Name: Simply enter the name of your city to get the current weather conditions.</li>
<li>By IP Address: Automatically retrieve weather information based on your location.</li>
<li>By Coordinates: Enter your latitude and longitude to find the weather for any specific location.</li>
<li>Weather Map: Explore a map of world capitals to see the weather conditions around the globe.</li>
</ul>
<section>
          <h2>About the Developer:</h2>
          <p>
          This application was developed by Arina Naletko, a beginner frontend developer. You can contact me on Telegram: <a href="https://t.me/she_is_arina">she_is_arina</a>.
          </p>
        </section>

        <section>
          <h2>Other Resources:</h2>
          <ul>
          <li><a href="https://github.com/stealdeff" target="_blank">GitHub</a></li>
          <li><a href="mailto:Ukam.naletko@mail.ru" target="_blank">Ukam.naletko@mail.ru</a></li>
          </ul>
        </section>
        <footer>
        <p>&copy; 2024 Weather App. All rights reserved.</p>
      </footer>      
      </div>
  );
};

export default HomePage;