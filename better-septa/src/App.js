import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutLayout from "./components/About/AboutLayout";
import HomeLayout from "./components/Home/HomeLayout";
import Outline from "./components/Layout/Layout";
import Map from "./components/Map/Map";


function App() {
  return (
    <div className="App">
      <Router>
        <div id="container">
          <Route exact path="/" component={HomeLayout}/>
          <Route exact path="/outline" component={Outline}/>
          <Route exact path="/map" component={Map}/>
          <Route exact path="/about" component={AboutLayout}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
