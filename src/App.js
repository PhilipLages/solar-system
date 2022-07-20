import React, { Component } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';
import Missions from './components/Missions';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <Header />
        <SolarSystem planets={ planets } />
        <Missions />
      </section>
    );
  }
}

export default App;
