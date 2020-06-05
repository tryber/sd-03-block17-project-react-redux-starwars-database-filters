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

const renderBody = (planets, properties, isClassic) => (
  <tbody
    style={isClassic ? { border: '1px solid #ccc' } : { display: 'block', flexBasis: '60%' }}
  >
    {planets
      .map((planet) => (
        <TableRow
          key={planet.name}
          planet={planet}
          properties={properties}
          isClassic={isClassic}
        />
      ))
    }
  </tbody>
);

const generateStyle = (isClassic) => (
  isClassic ? { display: 'inline-block' } : ({
    border: '1px solid #ccc',
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '60%',
  })
);

const makeHeadersInMultiHeadersTable = (headers, ...stringStyles) => {
  const nthOfTypeBefore = (order, title) => (`
  td:nth-of-type(${order}):before {
    content: "${title}";
  }`);

  return (
    <style>
      {stringStyles.reduce((str, style) => str.concat(style), '')
      + headers.reduce((string, prop, index) => (
          string.concat(nthOfTypeBefore(index + 1, constants.frendlyUser(prop)))
      ), '')}
    </style>
  );
};

const Table = (
  { planets, searchText, numFilters, column, sort, headers, isClassic },
) => {
  if (planets.length === 0) return <div>None Planet Found</div>;

  let planetsToShow = planets.filter((planet) => planet.name.includes(searchText));
  planetsToShow = orderByStringProperties(planetsToShow, column.toLowerCase(), sort);
  numFilters.forEach((filter) => {
    planetsToShow = filterByNumPropertie(planetsToShow, filter);
  });

  const extraStyle = (`
    td:before {
      left: 6px;padding-right: 10px;position: absolute;top: 6px;white-space: nowrap;width: 45%;
    }`);

  return (
    <>
      {isClassic || makeHeadersInMultiHeadersTable(headers, extraStyle)}
      <table className="table" style={generateStyle(isClassic)}>
        <caption>Star Wars Planets</caption>
        <TableHeader headers={headers} isClassic={isClassic} />
        {renderBody(planetsToShow, headers, isClassic)}
      </table>
    </>
  );
};

const mapStateToProps = ({
  data,
  headers,
  filters: { filterByName, filterByNumericValues, order },
  format,
}) => ({
  planets: data,
  searchText: filterByName.name,
  headers,
  numFilters: filterByNumericValues,
  ...order, // column and sort
  isClassic: format,
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
  isClassic: PropTypes.bool,
};

PropTypes.defaultProps = { isClassic: false };

export default connect(mapStateToProps)(Table);
