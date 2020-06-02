import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanetsList } from '../actions';
import PlanetLine from './PlanetLine';
import PropTypes from 'prop-types';

class Table extends Component {
  componentDidMount() {
    const { getPlanetsList } = this.props;
    getPlanetsList();
  }

  render() {
    const { isFetching, results } = this.props;

    if (isFetching) {
      return (<p>Loading...</p>);
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
            <PlanetLine planet={planet} key={planet.name} />,
          )}
        </table>
      );
    }
    return <p>No Planet Found</p>
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
  results: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
