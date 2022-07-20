import React, { Component } from 'react';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import Title from './Title';

class Missions extends Component {
  render() {
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

export default Missions;
