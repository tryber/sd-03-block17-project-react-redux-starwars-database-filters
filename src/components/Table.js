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
    const { isFetching, data, name } = this.props;

    if (isFetching) { return <p>Loading...</p>; }

    if (data) {
      return (
        <table>
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
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {data.filter((planet) => (planet.name.toLowerCase()).includes(name))
                 .map((planet) => <PlanetLine planet={planet} key={planet.name} />)}
          </tbody>
        </table>
      );
    }
    return <p>No Planet Found</p>;
  }
}

const mapStateToProps = (state) => ({
  isFetching: state.planetsList.isFetching,
  data: state.planetsList.data,
  name: state.planetsList.filters.filterByName.name,
});

const mapDispatchToProps = (dispatch) => ({
  getPlanetsList: () => dispatch(fetchPlanetsList()),
});

Table.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  getPlanetsList: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
};

Table.defaultProps = {
  data: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
