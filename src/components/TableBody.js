import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableBody extends Component {
  render() {
    const { loading, error, planets } = this.props
    if(loading){
      return <tbody><tr><td>LOADING...</td></tr></tbody>
    }
    if(error){
      return <tbody><tr><td>{error}</td></tr></tbody>
    }
    return(
      <tbody>
        {planets.map((planet, index) => (
          <tr key={index}>
            <td>{planet.name}</td>
            <td>{planet.climate}</td>
            <td>{planet.created}</td>
            <td>{planet.diameter}</td>
            <td>{planet.edited}</td>
            <td>
              {planet.films.map(film => <p key={film}>{film}</p>)}
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
    )
  }
}

const mapStateToProps = state => ({
  loading: state.Planet.loading,
  error: state.Planet.error,
})

export default connect(mapStateToProps)(TableBody)