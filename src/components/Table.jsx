import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableLine from './TableLine';

const switchComparison = (planet, column, comparison, value) => {
  if (comparison === 'menor que') {
    if (Number(planet[column]) >= Number(value) || planet[column] === 'unknown') return false;
  }
  if (comparison === 'maior que') {
    if (Number(planet[column]) <= Number(value) || planet[column] === 'unknown') return false;
  }
  if (comparison === 'igual a') {
    if (Number(planet[column]) !== Number(value)) return false;
  }
  return true;
};

const isFiltered = (planet, nameFilter, filterByNumericValues) => {
  if (nameFilter && !planet.name.match(new RegExp(nameFilter, 'i'))) return false;
  for (let i = 0; i < filterByNumericValues.length; i += 1) {
    const { column, comparison, value } = filterByNumericValues[i];
    if (!switchComparison(planet, column, comparison, value)) return false;
  }
  return true;
};

const planets = (data, nameFilter, filterByNumericValues) =>
  data.reduce((acc, planet) => {
    if (isFiltered(planet, nameFilter, filterByNumericValues)) {
      acc.push(<TableLine key={planet.name} planet={planet} />);
    }
    return acc;
  }, []);

const Table = ({ data, isFetching, nameFilter, filterByNumericValues }) => {
  if (isFetching) return <p>loading</p>;
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>climate</th>
          <th>created</th>
          <th>diameter</th>
          <th>edited</th>
          <th>films</th>
          <th>gravity</th>
          <th>orbital_period</th>
          <th>population</th>
          <th>rotation_period</th>
          <th>surface_water</th>
          <th>terrain</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>{planets(data, nameFilter, filterByNumericValues)}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  data: state.planetsReducer.data,
  isFetching: state.planetsReducer.isFetching,
  nameFilter: state.filters.filterByName.name,
  filterByNumericValues: state.filters.filterByNumericValues,
});

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  nameFilter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Table);
