import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menubar from "./components/Menubar/Menubar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar />
        <Route exact path="/" component={Home}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/about" component={About}/>
      </Router>
    </div>
  );
}

export default App;
