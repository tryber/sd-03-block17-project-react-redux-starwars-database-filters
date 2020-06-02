import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { requestAction } from '../actions';

class Table extends React.Component {
  componentDidMount() {
    const { requestTable } = this.props;
    requestTable();
  }

  renderThead() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation period</th>
          <th>Orbital period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>Url</th>
        </tr>
      </thead>
    );
  }

  render() {
    const { table } = this.props;

    return (
      <div className="table-container">
        <table>
          {this.renderThead()}
          <tbody>
            {(table.map((planet) => (
              <tr key={planet.name}>
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
            )))}
          </tbody>
        </table>
      </div>
    );
  }
}

Table.propTypes = {
  requestTable: PropTypes.func.isRequired,
  table: PropTypes.arrayOf(PropTypes.shape({
    climate: PropTypes.string,
    created: PropTypes.string,
    diameter: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    gravity: PropTypes.string,
    name: PropTypes.string,
    orbital_period: PropTypes.string,
    population: PropTypes.string,
    rotation_period: PropTypes.string,
    surface_water: PropTypes.string,
    terrain: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
};

const mapStateTProps = (state) => ({
  table: state.requestReducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  requestTable: () => dispatch(requestAction()),
});

export default connect(mapStateTProps, mapDispatchToProps)(Table);
