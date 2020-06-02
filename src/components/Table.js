import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import dataApiStarWars from '../actions/apiTbela';

const tableCell = () => ({
  props: [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Surface Water',
    'Population',
    'films',
    'created',
    'edited',
    'url',
  ],
});

const apiResults = (value) => value.map((row) => (
  <tr>
    <td>{row.name}</td>
    <td>{row.rotation_period}</td>
    <td>{row.orbital_period}</td>
    <td>{row.diameter}</td>
    <td>{row.climate}</td>
    <td>{row.gravity}</td>
    <td>{row.surface_Water}</td>
    <td>{row.population}</td>
    <td>{row.films}</td>
    <td>{row.created}</td>
    <td>{row.edited}</td>
    <td>{row.url}</td>
  </tr>
));

class Table extends Component {
  componentDidMount() {
    const { searchValuesApi } = this.props;
    searchValuesApi();
  }

  render() {
    const { all: { showResults, data: { results } } } = this.props;
    return (
      <div>
        <h1>StarWars Datatable with Filters</h1>
        <table>
          <thead>
            <tr>
              {tableCell().props.map((cell) => <td>{cell}</td>)}
            </tr>
          </thead>
          <tbody>
            {showResults && apiResults(results)}
          </tbody>
        </table>
        {!showResults && <h1>Carregando</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchValuesApi: () => dispatch(dataApiStarWars()),
});

const MapStateToProps = (state) => ({
  all: state.apiData,
});

Table.propTypes = {
  searchValuesApi: PropTypes.func.isRequired,
  all: PropTypes.isRequired,
};

export default connect(MapStateToProps, mapDispatchToProps)(Table);
