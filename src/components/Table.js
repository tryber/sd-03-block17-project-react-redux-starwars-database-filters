import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import dataApiStarWars, { nameSeached } from '../actions/apiTbela';
import ValueFilters from './ValueFilters';
import MultipleFiltersValue from './MultipleFiltersValue';

const apiResults = (value) => value.map((row) => (
  <tr>
    <td>{row.name}</td>
    <td>{row.climate}</td>
    <td>{row.created}</td>
    <td>{row.diameter}</td>
    <td>{row.edited}</td>
    <td>{row.films}</td>
    <td>{row.gravity}</td>
    <td>{row.orbital_period}</td>
    <td>{row.population}</td>
    <td>{row.rotation_period}</td>
    <td>{row.surface_water}</td>
    <td>{row.terrain}</td>
    <td>{row.url}</td>
  </tr>
));

const tHead = () => (
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
);

class Table extends Component {
  componentDidMount() {
    const { searchValuesApi } = this.props;
    searchValuesApi();
  }

  render() {
    const nameSearch = (value) => {
      const { namesSearch } = this.props;
      namesSearch(value.target.value);
    };
    const {
      all: { showResults, data: { results } },
      filterBynameProp, filterByOption,
    } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <input data-testid="name-filter" placeholder="Digite..." onChange={nameSearch} />
        <ValueFilters />
        <table>
          {tHead()}
          <tbody>
            {showResults && filterByOption && <MultipleFiltersValue />}
            {showResults && !filterByOption
            && apiResults(results.filter(
              (planet) => planet.name.toLowerCase().indexOf(filterBynameProp.toLowerCase()) !== -1,
            ))}
          </tbody>
        </table>
        {!showResults && <h1>Carregando</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchValuesApi: () => dispatch(dataApiStarWars()),
  namesSearch: (name) => dispatch(nameSeached(name)),
});

const MapStateToProps = (state) => ({
  all: state,
  filterBynameProp: state.filters.filterByName.name,
  filterByOption: state.filters.filtered,
});

Table.propTypes = {
  filterByOption: PropTypes.isRequired,
  searchValuesApi: PropTypes.func.isRequired,
  namesSearch: PropTypes.func.isRequired,
  all: PropTypes.isRequired,
  filterBynameProp: PropTypes.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps)(Table);
