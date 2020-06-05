import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TableBody extends Component {
  render() {
    const { loading, planets } = this.props;
    if (loading) {
      return <tbody><tr><td>LOADING...</td></tr></tbody>;
    }
    return (
      <tbody>
        {planets.map((planet) => (
          <tr key={planet.name}>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>
              {planet.films.map((film) => <p key={film}>{film}</p>)}
            </td>
            <td>{planet.gravity}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.population}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.terrain}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.propTypes = {
  loading: PropTypes.bool.isRequired,
  planets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.Planet.loading,
});

export default connect(mapStateToProps)(TableBody);
