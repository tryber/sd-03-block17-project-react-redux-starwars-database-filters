import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import planetShape from '../services/planetShape';

const renderBody = (planets, properties) => (
  <tbody>
    {planets
      .map((planet) =>
        <TableRow key={planet.name} planet={planet} properties={properties} />)
    }
  </tbody>
);

const Table = ({ planets, searchText }) => {
  if (planets.length === 0) return <div>None Planet Found</div>;

  const headers = Object.keys(planets[0]).filter((key) => key !== 'residents');
  const planetsToShow = planets.filter((planet) => planet.name.includes(searchText));

  return (
    <table>
      <caption>Star Wars Planets</caption>
      <TableHeader headers={headers} />
      {renderBody(planetsToShow, headers)}
    </table>
  );
}

const mapStateToProps = ({ data, filters: { filterByName } }) => ({
  planets: data,
  searchText: filterByName.name,
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.shape(planetShape()).isRequired).isRequired,
};

export default connect(mapStateToProps)(Table);
