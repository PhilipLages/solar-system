import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="container">
        <Header />
        <SolarSystem />
        <Missions />
      </section>
    );
  }
}

export default App;
