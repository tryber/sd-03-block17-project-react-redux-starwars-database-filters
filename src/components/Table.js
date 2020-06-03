import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import dataApiStarWars, { nameSeached } from '../actions/apiTbela';

const tableCell = () => ({
  props: [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'terrain',
    'Surface Water',
    'Population',
    'films',
    'created',
    'edited',
    'url',
  ],
});

const apiResults = (value) => value.map((row, index) => (
  <tr key={row.name[index]}>
    <td key={value.name}>{row.name}</td>
    <td key={value.rotation_period}>{row.rotation_period}</td>
    <td key={value.orbital_period}>{row.orbital_period}</td>
    <td key={value.diameter}>{row.diameter}</td>
    <td key={value.climate}>{row.climate}</td>
    <td key={value.gravity}>{row.gravity}</td>
    <td key={value.terrain}>{row.terrain}</td>
    <td key={value.surface_Water}>{row.surface_Water}</td>
    <td key={value.population}>{row.population}</td>
    <td key={value.films}>{row.films}</td>
    <td key={value.created}>{row.created}</td>
    <td key={value.edited}>{row.edited}</td>
    <td key={value.url}>{row.url}</td>
  </tr>
));

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
    const { all: { showResults, data: { results } }, filterBynameProp } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <input data-testid="name-filter" placeholder="Digite..." onChange={nameSearch} />
        <table>
          <thead>
            <tr>
              {tableCell().props.map((cell) => <td key={cell}>{cell}</td>)}
            </tr>
          </thead>
          <tbody>
            {showResults && apiResults(results.filter(
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
  all: state.apiData,
  filterBynameProp: state.apiData.filters.filterByName.name,
});

Table.propTypes = {
  searchValuesApi: PropTypes.func.isRequired,
  namesSearch: PropTypes.func.isRequired,
  all: PropTypes.isRequired,
  filterBynameProp: PropTypes.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps)(Table);
