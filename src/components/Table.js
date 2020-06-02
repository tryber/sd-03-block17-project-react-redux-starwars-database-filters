import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPlanetsList } from '../actions';
import PlanetLine from './PlanetLine';


class Table extends Component {
  componentDidMount() {
    const { getPlanetsList } = this.props;
    getPlanetsList();
  }

  render() {
    const { isFetching, results } = this.props;

    if (isFetching) { return <p>Loading...</p>; }

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
            <PlanetLine planet={planet} key={planet.name} />,
          )}
        </table>
      );
    }
    return <p>No Planet Found</p>;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsList.isFetching,
  results: state.planetsList.results,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsList: () => dispatch(fetchPlanetsList()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetsList: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rotation_period: PropTypes.string.isRequired,
    orbital_period: PropTypes.string.isRequired,
    diameter: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    surface_water:PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
    films: PropTypes.arrayOf( PropTypes.string.isRequired),
    created: PropTypes.string.isRequired,
    edited: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
};

Table.defaultProps = {
  results: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
