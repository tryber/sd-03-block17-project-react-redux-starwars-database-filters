import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPlanetsList } from '../actions';

class Table extends Component {
  componentDidMount() {
    const { getPlanetsList } = this.props;

    getPlanetsList();
  }

  render() {
    const { isFetching, results } = this.props;

    if (isFetching || !results) {
      return (<p>Loading...</p>)
    }

    if (results) {
      return (
        <table>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
          {results.map((planet) =>
            <tr>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          )}
        </table>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsList.isFetching,
  results: state.planetsList.results,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsList: () => dispatch(fetchPlanetsList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);
