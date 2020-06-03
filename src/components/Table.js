import React from 'react';
import { connect } from 'react-redux';
import { requestFetch } from '../action';

class Table extends React.Component {
  componentDidMount() {
    const { getPlanets } = this.props;
    getPlanets();
  }
  render() {
    const { planets } = this.props;
    return (
      <div className='container'>
        StarWars Datatable with Filters
        <table className='table is-hoverable'>
          <thead>
            <tr><th>Name</th></tr>
              <tr><th>Rotation Period</th></tr>
              <tr><th>Orbital Period</th></tr>
              <tr><th>Diameter</th></tr>
              <tr><th>Climate</th></tr>
              <tr><th>Gravity</th></tr>
              <tr><th>Terrain</th></tr>
              <tr><th>Surface Water</th></tr>
              <tr><th>Population</th></tr>
              <tr><th>Created</th></tr>
              <tr><th>Edited</th></tr>
              <tr><th>Url</th></tr>
          </thead>
          <tbody>
            {planets.map(planet =>
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
              </tr>
            )}
          </tbody>
        </table>
      </div >
    )
  }
}
const mapStateToProps = (state) => ({
  planets: state.data,
});
const mapDispatchToProps = (dispatch) => ({
  getPlanets: () => dispatch(requestFetch()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Table);
