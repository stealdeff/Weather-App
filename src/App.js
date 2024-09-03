
import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import '/src/App.css'
const App=()=>{
  return <Router>
    <div classname="App"></div>
  <div class="header">
  <nav>
      <a href="" class="logo">Weather App</a>
      <div class="nav-links">
          <ul>
              <li><Link to =''>Home</Link></li>
              <li><Link to =''>Service</Link></li>
              <li><Link to =''>Portfolio</Link></li>
              <li><Link to =''>About</Link></li>
              <li><Link to =''>Connect</Link></li>
          </ul>
      </div>
  </nav>
</div>

<div class="row">
  <div class="left-col">
      
  </div>
  <div class="right-col">
      

     
          </div>
      </div>
      </Router>
}

export default App;

