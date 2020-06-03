import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import planetShape from '../services/planetShape';

const filterByNumPropertie = (list, especifications) => {
  console.log(especifications);
  const { value, propertie, comparison } = especifications;
  if (comparison === 'maior que') return list.filter((obj) => obj[propertie] > value);
  else if (comparison === 'menor que') return list.filter((obj) => obj[propertie] < value);
  return list.filter((obj) => obj[propertie] === value);
}

const renderBody = (planets, properties) => (
  <tbody>
    {planets
      .map((planet) =>
        <TableRow key={planet.name} planet={planet} properties={properties} />)
    }
  </tbody>
);

const Table = ({ planets, searchText, numFilters }) => {
  if (planets.length === 0) return <div>None Planet Found</div>;

  const headers = Object.keys(planets[0]).filter((key) => key !== 'residents');

  const planetsToShowByName = planets.filter((planet) => planet.name.includes(searchText));
  const planetsToShow = filterByNumPropertie(planetsToShowByName, numFilters);

  return (
    <table>
      <caption>Star Wars Planets</caption>
      <TableHeader headers={headers} />
      {renderBody(planetsToShow, headers)}
    </table>
  );
}

const mapStateToProps = ({ data, filters: { filterByName, filterByNumericValues } }) => ({
  planets: data,
  searchText: filterByName.name,
  numFilters: filterByNumericValues,
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.shape(planetShape()).isRequired).isRequired,
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
};

export default connect(mapStateToProps)(Table);
