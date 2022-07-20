import React, { Component } from 'react';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="cards">
          {planets.map(({ name, image }) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
