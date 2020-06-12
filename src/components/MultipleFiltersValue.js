import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const apiResults = (value) => value.map((row) => (
  row.map((el) => (
    <tr key={el}>
      <td>{el.name}</td>
      <td>{el.climate}</td>
      <td>{el.created}</td>
      <td>{el.diameter}</td>
      <td>{el.edited}</td>
      <td>{el.films}</td>
      <td>{el.gravity}</td>
      <td>{el.orbital_period}</td>
      <td>{el.population}</td>
      <td>{el.rotation_period}</td>
      <td>{el.surface_water}</td>
      <td>{el.terrain}</td>
      <td>{el.url}</td>
    </tr>
  ))
));

const objectAccess = (value, access, optionMap, test) => {
  switch (value) {
    case 'maior que':
      return Number(access) > Number(optionMap[test.length - 1]);
    case 'menor que':
      return Number(access) < Number(optionMap[test.length - 1]);
    case 'igual a':
      return Number(access) === Number(optionMap[test.length - 1]);
    default:
      return false;
  }
};

const multipleFilters = (value, planet, comparison, filterByOption) => {
  switch (value) {
    case 'population':
      return objectAccess(comparison, planet.population,
        filterByOption.map((el) => el.value), filterByOption.map((el, index) => el && index));
    case 'rotation_period':
      return objectAccess(comparison, planet.rotation_period,
        filterByOption.map((el) => el.value), filterByOption.map((el, index) => el && index));
    case 'orbital_period':
      return objectAccess(comparison, planet.orbital_period,
        filterByOption.map((el) => el.value), filterByOption.map((el, index) => el && index));
    case 'diameter':
      return objectAccess(comparison, planet.diameter, filterByOption.map((el) => el.value),
        filterByOption.map((el, index) => el && index));
    case 'surface_water':
      return objectAccess(comparison, planet.surface_water, filterByOption.map((el) => el.value),
        filterByOption.map((el, index) => el && index));
    default:
      return false;
  }
};


class MultipleFiltersValue extends Component {
  render() {
    const { comparisonMultiple, all: { data: { results } }, filterByOption } = this.props;
    return (
      apiResults(comparisonMultiple.map((el) => results.filter(
        (planet) => multipleFilters(el.column, planet, el.comparison, filterByOption),
      )))
    );
  }
}

const mapStateToProps = (state) => ({
  all: state,
  comparisonMultiple: state.filters.filterByNumericValues,
  filterBynameProp: state.filters.filterByName.name,
  filterByOption: state.filters.filterByNumericValues,
});

MultipleFiltersValue.propTypes = {
  filterByOption: PropTypes.func.isRequired,
  all: PropTypes.func.isRequired,
  comparisonMultiple: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(MultipleFiltersValue);
