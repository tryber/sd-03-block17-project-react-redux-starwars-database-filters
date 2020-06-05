import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const apiResults = (value) => value.map((row) => (
  <tr key={row.name}>
    <td>{row.map((el) => <tr>{el.name}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.rotation_period}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.orbital_period}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.diameter}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.diameter}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.climate}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.gravity}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.terrain}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.surface_water}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.population}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.films}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.created}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.edited}</tr>)}</td>
    <td>{row.map((el) => <tr>{el.url}</tr>)}</td>
  </tr>
));

const objectAccess = (value, access, optionMap, test) => {
  console.log(value);
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
