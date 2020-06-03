import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const apiResults = (value) => value.map((row, index) => (
  <tr key={row.name[index]}>
    <td key={value.name}>{row.name}</td>
    <td key={value.rotation_period}>{row.rotation_period}</td>
    <td key={value.orbital_period}>{row.orbital_period}</td>
    <td key={value.diameter}>{row.diameter}</td>
    <td key={value.climate}>{row.climate}</td>
    <td key={value.gravity}>{row.gravity}</td>
    <td key={value.terrain}>{row.terrain}</td>
    <td key={value.surface_Water}>{row.surface_water}</td>
    <td key={value.population}>{row.population}</td>
    <td key={value.films}>{row.films}</td>
    <td key={value.created}>{row.created}</td>
    <td key={value.edited}>{row.edited}</td>
    <td key={value.url}>{row.url}</td>
  </tr>
));

const objectAccess = (value, access, optionMap) => {
  switch (value) {
    case 'Maior que':
      return Number(access) > Number(optionMap);
    case 'Menor que':
      return Number(access) < Number(optionMap);
    default:
      return Number(access) === Number(optionMap);
  }
};

const multipleFilters = (value, planet, comparison, filterByOption) => {
  switch (value) {
    case 'population':
      return objectAccess(comparison[0], planet.population,
        filterByOption.map((el) => el.value));
    case 'rotation_period':
      return objectAccess(comparison[0], planet.rotation_period,
        filterByOption.map((el) => el.value));
    case 'orbital_period':
      return objectAccess(comparison[0], planet.orbital_period,
        filterByOption.map((el) => el.value));
    case 'diameter':
      return objectAccess(comparison[0], planet.diameter, filterByOption.map((el) => el.value));
    default:
      return objectAccess(comparison[0], planet.surface_water,
        filterByOption.map((el) => el.value));
  }
};

class MultipleFiltersValue extends Component {
  render() {
    const { all: { data: { results } }, filterByOption } = this.props;
    const column = filterByOption.map((el) => el.column);
    const comparison = filterByOption.map((el) => el.comparison);
    return (
      apiResults(results.filter(
        (planet) => multipleFilters(column[0], planet, comparison, filterByOption),
      ))
    );
  }
}

const mapStateToProps = (state) => ({
  all: state.apiData,
  filterBynameProp: state.apiData.filters.filterByName.name,
  filterByOption: state.apiData.filters.filterByNumericValues,
});

MultipleFiltersValue.propTypes = {
  filterByOption: PropTypes.func.isRequired,
  all: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MultipleFiltersValue);
