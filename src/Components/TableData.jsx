import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FetchStarWarsDataBase } from '../actions/index';

class TableData extends Component {
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
            <td>
              {planet.films.map((film) => (
                <p key={film}>{film}</p>
              ))}
            </td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = ({ SWreducer }) => ({
  planets: SWreducer.data,
});

const mapDispatchToProps = (dispatch) => ({
  getFetchStarWarsDataBase: () => dispatch(FetchStarWarsDataBase()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TableData);
