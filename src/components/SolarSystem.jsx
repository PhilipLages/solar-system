import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends Component {
  render() {
    const { planets } = this.props;
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

SolarSystem.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
};

export default SolarSystem;
