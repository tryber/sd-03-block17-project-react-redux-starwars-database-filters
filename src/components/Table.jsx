import React from 'react';

import TableHeader from './TableHeader';
import TableRow from './TableRow';

const takeTitles = (planet) => (
  Object.keys(planet)
  .filter((key) => key !== 'residents')
);

const renderBody = (planets) => (
  <tbody>
    {
      planets.map((planet) =>
        <TableRow key={planet.name} planet={planet} headers={takeTitles(planet)} />)
    }
  </tbody>
);

class Table extends React.Component {
  render() {
    const { planets } = this.props;
    return (
      <table>
        <caption>Star Wars Planets</caption>
        <TableHeader headers={takeTitles(planets[0])} />
        {renderBody(planets)}
      </table>
    );
  }
}

export default Table;
