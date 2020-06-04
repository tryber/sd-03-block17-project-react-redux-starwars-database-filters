import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import { planetShape } from '../services/constants';

const filterByNumPropertie = (list, especifications) => {
  const { value, column, comparison } = especifications;
  const numValue = Number(value);
  switch (comparison) {
    case 'maior que': return list.filter((obj) => Number(obj[column]) > numValue);
    case 'menor que': return list.filter((obj) => Number(obj[column]) < numValue);
    case 'igual a': return list.filter((obj) => Number(obj[column]) === numValue);
    default: return list;
  }
}

const orderByStringProperties = (list, column, direction) => {
  const col = column.toLowerCase();
  const sortedList = list.sort((elemA, elemB) => {
    if (isNaN(Number(elemA[col])) && isNaN(Number(elemB[col]))) {
      return elemA[col] < elemB[col] ? -1 : 1;
    }
    return elemA[col] - elemB[col];
  });
  if (direction === 'DESC') sortedList.reverse();
  return sortedList;
};

const renderBody = (planets, properties) => (
  <tbody>
    {planets
      .map((planet) =>
        <TableRow key={planet.name} planet={planet} properties={properties} />)
    }
  </tbody>
);

const Table = ({ planets, searchText, numFilters, order }) => {
  if (planets.length === 0) return <div>None Planet Found</div>;
  const headers = Object.keys(planets[0]).filter((key) => key !== 'residents');
  
  
  let planetsToShow = planets.filter((planet) => planet.name.includes(searchText));
  planetsToShow = orderByStringProperties(planetsToShow, order.column, order.sort);
  numFilters.forEach((filter) => {
    planetsToShow = filterByNumPropertie(planetsToShow, filter);
  });

  return (
    <table>
      <caption>Star Wars Planets</caption>
      <TableHeader headers={headers} />
      {renderBody(planetsToShow, headers)}
    </table>
  );
}

const mapStateToProps = ({ data, filters: { filterByName, filterByNumericValues, order } }) => ({
  planets: data,
  searchText: filterByName.name,
  numFilters: filterByNumericValues,
  order,
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.shape(planetShape()).isRequired).isRequired,
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  order: PropTypes.shape({
    column: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Table);
