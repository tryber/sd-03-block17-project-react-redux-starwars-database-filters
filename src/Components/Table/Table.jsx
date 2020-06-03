import React from 'react';
import { connect } from 'react-redux';

import { fetchRequestAPI } from '../Actions';
import InputNamePlanet from './InputNamePlanet';

import './Table.css';

class Table extends React.Component {
  componentDidMount() {
    const { apiRequestDispatch } = this.props;

    apiRequestDispatch();
  }

  hearderTable() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation</th>
          <th>Orbital</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
    )
  }

  render() {
    const { loading, data, filterInputName } = this.props;
    const consumerData = filterInputName || data;
    console.log(data)
    return (
      <div className="TabelaProdutos" >
        <div>
          <hr style={{ border: "outset" }} />
          <h1>Star Wars Table</h1>
          <hr style={{ border: "outset" }} />
        </div>
        <div className="input-filter">
          <InputNamePlanet />
        </div>
        <table >
          {this.hearderTable()}
          <tbody>
            {consumerData && consumerData.map((planet) =>
              <tr key={`${planet.name} row`}>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films.map((film) => <p key={film}>{film}</p>)}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>
            )}
          </tbody>
        </table>
        {loading && <h1>Loading...</h1>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.requestAPIReducer.data,
  loading: state.requestAPIReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  apiRequestDispatch: () => dispatch(fetchRequestAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
