import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { receiveStarWarsSuccess } from '../actions';

class Table extends Component {

  componentDidMount() {
    const { getStarWarsPlanetsData } = this.props;
    getStarWarsPlanetsData();
  }

  tableHead() {
    return (
      <thead>
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
          <th>Url</th>
        </tr>
      </thead>
    );
  }

  tableBody() {
    const { data } = this.props;
    return (
      <tbody>
        {data.map((planet) => (
          <tr key="planet.name">
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
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <div>
        <div>StarWars Datatable with Filters</div>
        <table>
          {this.tableHead()}
          {this.tableBody()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.starWars.data,
});

const mapDispatchToProps = (dispatch) => ({
  getStarWarsPlanetsData: () => dispatch(receiveStarWarsSuccess()),
});

Table.propTypes = {
  getStarWarsPlanetsData: PropTypes.func.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
};

Table.defaultProps = {
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
