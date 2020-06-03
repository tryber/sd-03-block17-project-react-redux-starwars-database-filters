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

const multipleFilters = (value, planet, comparison, filterByOption) => {
  switch (value) {
    case 'population':
      if (comparison[0] === 'Maior que') return Number(planet.population) > Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Menor que') return Number(planet.population) < Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Igual a') return Number(planet.population) === Number(filterByOption.map((el) => el.value));
      break;
    case 'rotation_period':
      if (comparison[0] === 'Maior que') return Number(planet.rotation_period) > Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Menor que') return Number(planet.rotation_period) < Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Igual a') return Number(planet.rotation_period) === Number(filterByOption.map((el) => el.value));
      break;
    case 'orbital_period':
      if (comparison[0] === 'Maior que') return Number(planet.rotation_period) > Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Menor que') return Number(planet.rotation_period) < Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Igual a') return Number(planet.rotation_period) === Number(filterByOption.map((el) => el.value));
      break;
    case 'diameter':
      if (comparison[0] === 'Maior que') return Number(planet.diameter) > Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Menor que') return Number(planet.diameter) < Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Igual a') return Number(planet.diameter) === Number(filterByOption.map((el) => el.value));
      break;
    default:
      if (comparison[0] === 'Maior que') return Number(planet.diameter) > Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Menor que') return Number(planet.diameter) < Number(filterByOption.map((el) => el.value));
      if (comparison[0] === 'Igual a') return Number(planet.diameter) === Number(filterByOption.map((el) => el.value));
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
