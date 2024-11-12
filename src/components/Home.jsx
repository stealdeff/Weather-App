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
          {/* <img src="react.png" className="home-image" /> */}
      </div>
  );
};

export default HomePage;