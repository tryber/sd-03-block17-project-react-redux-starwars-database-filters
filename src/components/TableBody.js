import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableBody extends Component {
  render() {
    const { planets } = this.props;
    return (
      <tbody>
        {planets.map((planet) => (
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
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
            <td>{planet.films.map((film) => <span>{film}</span>)}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = (state) => ({
  planets: state.apiReducer.data,
});

export default connect(mapStateToProps)(TableBody);