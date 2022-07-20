import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MissionCard from './MissionCard';
import Title from './Title';

class Missions extends Component {
  render() {
    const { missions } = this.props;
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />))}
        </div>
      </div>
    );
  }
}

Missions.propTypes = {
  missions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    country: PropTypes.string,
    destination: PropTypes.string,
  })).isRequired,
};

export default Missions;
