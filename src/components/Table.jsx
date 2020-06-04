import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableHeader from './TableHeader';
import TableRow from './TableRow';
import * as constants from '../services/constants';

import './Table.css';

const filterByNumPropertie = (list, { value, column, comparison }) => {
  const numValue = Number(value);
  switch (comparison) {
    case 'maior que': return list.filter((obj) => Number(obj[column]) > numValue);
    case 'menor que': return list.filter((obj) => Number(obj[column]) < numValue);
    case 'igual a': return list.filter((obj) => Number(obj[column]) === numValue);
    default: return list;
  }
};

const orderByStringProperties = (list, col, direction) => {
  const sortedList = (constants.numColumn.some((option) => option === col))
    ? list.sort((elemA, elemB) => elemA[col] - elemB[col])
    : list.sort((elemA, elemB) => elemA[col].localeCompare(elemB[col]));

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

const makeHeaders = (headers) => (
  <style>
    {headers.reduce((string, prop, index) => (
      string.concat(`td:nth-of-type(${index + 1}):before {
        content: "${constants.frendlyUser(prop)}";
      }
    `)), '')}
  </style>
);

const Table = ({ planets, searchText, numFilters, column, sort, headers }) => {
  if (planets.length === 0) return <div>None Planet Found</div>;

  let planetsToShow = planets.filter((planet) => planet.name.includes(searchText));
  planetsToShow = orderByStringProperties(planetsToShow, column.toLowerCase(), sort);
  numFilters.forEach((filter) => {
    planetsToShow = filterByNumPropertie(planetsToShow, filter);
  });

  return (
    <React.Fragment>
      {makeHeaders(headers)}
      <table className="table">
        <caption>Star Wars Planets</caption>
        <TableHeader headers={headers} />
        {renderBody(planetsToShow, headers)}
      </table>
    </React.Fragment>
  );
};

const mapStateToProps = ({
  data,
  headers,
  filters: { filterByName, filterByNumericValues, order },
}) => ({
  planets: data,
  searchText: filterByName.name,
  headers,
  numFilters: filterByNumericValues,
  ...order, // column and sort
});

Table.propTypes = {
  searchText: PropTypes.string.isRequired,
  planets: PropTypes.arrayOf(PropTypes.shape(constants.planetShape()).isRequired).isRequired,
  headers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  numFilters: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  column: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
