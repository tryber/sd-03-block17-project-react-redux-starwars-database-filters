import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as constants from '../services/constants';

const filterByNumPropertie = (list, { value, column, comparison }) => {
  const numValue = Number(value);
  switch (comparison) {
    case 'maior que': return list.filter((obj) => Number(obj[column]) > numValue);
    case 'menor que': return list.filter((obj) => Number(obj[column]) < numValue);
    case 'igual a': return list.filter((obj) => Number(obj[column]) === numValue);
    default: return list;
  }
}

const orderByStringProperties = (list, col, direction) => {
  const sortedList = (constants.numColumn.some((option) => option === col))
    ? list.sort((elemA, elemB) => elemA[col] - elemB[col])
    : list.sort((elemA, elemB) => { 
      if(elemA[col] < elemB[col]) return -1;
      else return 1;
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

const Table = ({ planets, searchText, numFilters, column, sort }) => {
  if (planets.length === 0) return <div>None Planet Found</div>;

  const headers = Object.keys(planets[0]).filter((key) => key !== 'residents');

  let planetsToShow = planets.filter((planet) => planet.name.includes(searchText));
  planetsToShow = orderByStringProperties(planetsToShow, column.toLowerCase(), sort);
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
};

const mapStateToProps = ({ data, filters: { filterByName, filterByNumericValues, order } }) => ({
  planets: data,
  searchText: filterByName.name,
  numFilters: filterByNumericValues,
  ...order, // column and sort
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.shape(constants.planetShape()).isRequired).isRequired,
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
